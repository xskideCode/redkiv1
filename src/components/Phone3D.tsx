import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, PresentationControls, ContactShadows, Float, Html } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

function PhoneModel({ isScanning, score }: { isScanning?: boolean, score?: number }) {
  const { scene } = useGLTF('/iphone17.glb');
  const groupRef = useRef<THREE.Group>(null);
  
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
                float scanY = 10.0 - mod(time * 8.0, 20.0); 
                float dist = abs(vWorldPosition.y - scanY);
                float scanEffect = smoothstep(1.0, 0.0, dist);
                
                gl_FragColor.rgb += vec3(1.0, 0.1, 0.1) * scanEffect * 0.5;
                
                float edge = smoothstep(0.1, 0.0, dist);
                gl_FragColor.rgb += vec3(1.0, 0.5, 0.5) * edge * 0.8;
                
                float grid = sin(vWorldPosition.y * 5.0) * sin(vWorldPosition.x * 5.0);
                grid = smoothstep(0.9, 1.0, grid);
                gl_FragColor.rgb += vec3(1.0, 0.2, 0.2) * grid * scanEffect * 0.4;
              }
              `
            );
         };
      }
    });
    return clone;
  }, [scene]);

  const rotationRef = React.useRef(0);

  useFrame((state, delta) => {
    uniforms.time.value = state.clock.elapsedTime;

    if (groupRef.current) {
        if (!isScanning) {
           rotationRef.current = THREE.MathUtils.damp(rotationRef.current, Math.sin(state.clock.elapsedTime * 0.5) * 0.1, 4, delta);
        } else {
           rotationRef.current += delta * 0.5;
        }
        groupRef.current.rotation.y = rotationRef.current;
    }
  });

  return (
    <group ref={groupRef} position={[0, 1.2, 0]}>
      <primitive object={clonedScene} scale={35} />
    </group>
  );
}

// Preload the model
useGLTF.preload('/iphone17.glb');

export function Phone3D({ className = '', isScanning = false, score, showStand = false }: { className?: string, isScanning?: boolean, score?: number, showStand?: boolean }) {
  return (
    <div className={`relative w-full h-[700px] flex items-center justify-center ${className}`}>
      {/* Stand Image Background */}
      {showStand && (
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[260px] pointer-events-none z-0 flex justify-center opacity-100">
          <img src="/stand.png" alt="Stand" className="w-full h-auto object-contain" />
        </div>
      )}

      <Canvas camera={{ position: [0, 0, 13], fov: 45 }} className="z-10 relative" dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <Environment preset="city" />
        
        <PresentationControls 
          global 
          rotation={[0, 0, 0]} 
          polar={[-Math.PI / 4, Math.PI / 4]} 
          azimuth={[-Math.PI / 2, Math.PI / 2]}
        >
          <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
            <React.Suspense fallback={<Html center><div className="text-zinc-500 font-mono text-sm">Loading 3D...</div></Html>}>
              <PhoneModel isScanning={isScanning} score={score} />
            </React.Suspense>
          </Float>
        </PresentationControls>
        
        <ContactShadows position={[0, -4.5, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
      </Canvas>
    </div>
  );
}
