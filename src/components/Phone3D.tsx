import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Environment, PresentationControls, ContactShadows, Float, Html, PerformanceMonitor } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function PhoneModel({ isScanning, score }: { isScanning?: boolean, score?: number }) {
  const { scene } = useGLTF('/iphone17.glb');
  
  const uniforms = React.useMemo(() => ({
    time: { value: 0 },
    isScanning: { value: isScanning ? 1.0 : 0.0 }
  }), []);

  useEffect(() => {
    uniforms.isScanning.value = isScanning ? 1.0 : 0.0;
  }, [isScanning, uniforms]);

  const clonedScene = React.useMemo(() => {
    const clone = scene.clone();
    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
         const mesh = child as THREE.Mesh;
         mesh.material = (mesh.material as THREE.Material).clone();
         const mat = mesh.material as THREE.MeshStandardMaterial;
         
         mat.onBeforeCompile = (shader) => {
            shader.uniforms.time = uniforms.time;
            shader.uniforms.isScanning = uniforms.isScanning;

            shader.vertexShader = `
              varying vec3 vWorldPosition;
              ${shader.vertexShader}
            `.replace(
              `#include <worldpos_vertex>`,
              `
              #include <worldpos_vertex>
              vWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;
              `
            );

            shader.fragmentShader = `
              uniform float time;
              uniform float isScanning;
              varying vec3 vWorldPosition;
              ${shader.fragmentShader}
            `.replace(
              `#include <dithering_fragment>`,
              `
              #include <dithering_fragment>
              if (isScanning > 0.5) {
                // The laser line sweeps from y = 6.0 down to y = -6.0
                float scanY = 6.0 - mod(time * 5.0, 12.0); 
                float dist = vWorldPosition.y - scanY;
                
                // Primary sharp laser core (symmetrical)
                float core = exp(-abs(dist) * 30.0);
                
                // Trail glow (only above the laser, so dist > 0.0)
                float trailGlow = step(0.0, dist) * exp(-dist * 1.5);
                
                // Digital tech grid in the trail (optimized)
                float gridX = step(0.95, sin(vWorldPosition.x * 25.0));
                float gridY = step(0.95, sin(vWorldPosition.y * 25.0));
                float grid = max(gridX, gridY);
                
                // Base colors
                vec3 laserCoreColor = vec3(1.0, 1.0, 1.0); // Pure white core
                vec3 laserGlowColor = vec3(1.0, 0.05, 0.15); // Deep cyber crimson
                
                // Composite the final holographic scan effect
                vec3 finalScan = vec3(0.0);
                
                // 1. Add bright core line (intense center)
                finalScan += laserCoreColor * core * 1.5;
                
                // 2. Add red trail glow covering the back of the scan
                finalScan += laserGlowColor * trailGlow * 0.7;
                
                // 3. Add the tech grid
                finalScan += laserCoreColor * grid * trailGlow * 0.3;
                
                // 4. Add a faint global pulse to the whole phone when scanning
                float pulse = (sin(time * 4.0) * 0.5 + 0.5) * 0.05;
                finalScan += laserGlowColor * pulse;
                
                // Additive blend over the phone's natural material
                gl_FragColor.rgb += finalScan;
              }
              `
            );
         };
      }
    });
    return clone;
  }, [scene, uniforms]);

  useFrame((state, delta) => {
    uniforms.time.value = state.clock.elapsedTime;
  });

  return (
    <group position={[0, 0, 0]}>
      <primitive object={clonedScene} scale={35} />
    </group>
  );
}

// Preload the model
useGLTF.preload('/iphone17.glb');

const ScrollChoreographer = ({ isScanning }: { isScanning: boolean }) => {
  const scrollGroupRef = useRef<THREE.Group>(null);
  const idleGroupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  const floatTween = useRef<gsap.core.Tween | null>(null);

  useLayoutEffect(() => {
    if (!scrollGroupRef.current || !idleGroupRef.current) return;
    
    const mm = gsap.matchMedia();
    mm.add({
      isMobile: "(max-width: 1023px)",
      isDesktop: "(min-width: 1024px)"
    }, (context) => {
      const { isMobile, isDesktop } = context.conditions as { isMobile: boolean, isDesktop: boolean };
      
      // 1. Initial State (Hero Section) - applied to Scroll Group
      const startPos: [number, number, number] = isDesktop ? [2.8, 0.5, 0] : [0, -1, 0];
      const startScale = isDesktop ? 1.0 : 0.7;
      
      scrollGroupRef.current!.position.set(...startPos);
      scrollGroupRef.current!.scale.set(startScale, startScale, startScale);
      scrollGroupRef.current!.rotation.set(-0.2, -0.6, 0); // x: -0.2 (tilt up), y: -0.6 (face left)

      // 2. Idle Animation - Floating only! No infinite spinning.
      if (floatTween.current) floatTween.current.kill();

      idleGroupRef.current!.position.set(0, 0, 0);
      idleGroupRef.current!.rotation.set(0, 0, 0);

      // Separate Yoyo tween for floating (always runs to keep the scene feeling alive)
      floatTween.current = gsap.to(idleGroupRef.current!.position, {
         y: 0.25,
         duration: 2,
         yoyo: true,
         repeat: -1,
         ease: "sine.inOut"
      });

      // 3. Scroll to Scan Story - deterministic transitions based solely on scroll
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: "#scan-section",
          start: "top bottom",
          end: "center center",
          scrub: 1,
        }
      });

      tl1.to(scrollGroupRef.current!.position, {
        x: isDesktop ? -3 : 0, 
        y: isDesktop ? 0 : -15,
        z: 2
      }, 0)
      .to(scrollGroupRef.current!.rotation, {
        x: 0, // Flattens out tilt
        y: Math.PI * 2, // Rotates exactly 360 degrees to face forward and stays there
        z: 0
      }, 0);
      
    });

    return () => {
      mm.revert();
      if (floatTween.current) floatTween.current.kill();
    };
  }, [viewport.width]);

  return (
    <group ref={scrollGroupRef}>
      <group ref={idleGroupRef}>
        <PhoneModel isScanning={isScanning} />
      </group>
    </group>
  );
}

export function Phone3D({ className = '', isScanning = false, score, showStand = false }: { className?: string, isScanning?: boolean, score?: number, showStand?: boolean }) {
  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
      <Canvas camera={{ position: [0, 0, 13], fov: 45 }} className="z-10 relative" dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <Environment preset="city" />
        
        <PresentationControls 
          global={false}
          cursor={true}
          snap={true}
          speed={2}
          zoom={1}
          rotation={[0, 0, 0]} 
          polar={[-Math.PI / 2, Math.PI / 2]} 
          azimuth={[-Math.PI, Math.PI]}
        >
          <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
            <React.Suspense fallback={<Html center><div className="text-zinc-500 font-mono text-sm">Loading 3D...</div></Html>}>
              <ScrollChoreographer isScanning={isScanning} />
            </React.Suspense>
          </Float>
        </PresentationControls>
        
        <ContactShadows position={[0, -4.5, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
      </Canvas>
    </div>
  );
}
