import React, { useRef, useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroLeft, HeroRightElements } from './components/Hero';
import { ScanSectionLeft } from './components/ScanStory';
import { MissionControl } from './components/Partners';
import { Evidence } from './components/Evidence';
import { Certificate } from './components/Certificate';
import { FooterCTA } from './components/FooterCTA';
import { Phone3D } from './components/Phone3D';
import Silk from './components/Silk';
import { motion, useScroll, useTransform } from 'motion/react';
import { Preloader } from './components/Preloader';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const isScanning = useTransform(scrollYProgress, (latest) => latest > 0.4);
  const [scanning, setScanning] = useState(false);

  useEffect(() => {
    return isScanning.on("change", (latest) => {
      setScanning(latest);
    });
  }, [isScanning]);

  return (
    <div className="bg-[#050505] min-h-screen selection:bg-red-500/30 selection:text-white relative">
      <Preloader onComplete={() => setIsLoaded(true)} />
      
      {/* 1px Dashed Grid Container */}
      <div className="absolute inset-0 z-0 pointer-events-none dashed-grid-bg opacity-20" />

      {/* Main Layout Context */}
      <div className="relative z-10 pointer-events-none">
        
        {/* Foreground Content Header */}
        <Navbar />
        
        <main className="relative z-20">
          
          {/* Scroll Container */}
          <div ref={containerRef} className="relative w-full">
          
            {/* Z-0: Base sticky dark background + Silk */}
            <div className="absolute inset-0 z-0 pointer-events-none">
               <div className="sticky top-0 h-screen w-full bg-[#050505]">
                 {/* Silk Background */}
                 <motion.div 
                   className="absolute inset-0 z-0 pointer-events-none"
                   style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
                 >
                     <Silk speed={5.2} scale={1} color="#201f24" noiseIntensity={0.5} rotation={2.51} />
                 </motion.div>
               </div>
            </div>

            {/* Z-10: Sticky REDKI text at the bottom */}
            <div className="absolute inset-0 z-10 pointer-events-none">
               <div className="sticky top-0 h-screen w-full flex flex-col justify-end overflow-hidden mix-blend-difference">
                 <h1 className="text-[18vw] font-[900] tracking-[0.02em] uppercase leading-[0.75] text-white text-center translate-y-0 lg:translate-y-[15%]">
                   REDKI
                 </h1>
               </div>
            </div>

            {/* Z-20: White wipe background (scrolls naturally over the black background) */}
            <div className="absolute inset-0 z-20 pointer-events-none flex flex-col">
                <div className="h-screen w-full pointer-events-none shrink-0 relative">
                </div>
                <div className="flex-1 w-full bg-white rounded-t-3xl md:rounded-t-[40px] border-t border-dashed border-black/10 shrink-0 relative z-0" />
            </div>

            {/* Z-30: Sticky 3D Phone */}
            <div className="absolute inset-0 z-30 pointer-events-none">
               <div className="sticky top-0 h-screen w-full pointer-events-auto">
                  <Phone3D isScanning={scanning} />
               </div>
            </div>

            {/* Z-40: Foreground Text (Hero & Scan Section) */}
            <div className="relative z-40 pointer-events-none">
              <div className="w-full max-w-[1920px] mx-auto px-4 lg:px-12">
                {/* Hero Section */}
                <div className="grid lg:grid-cols-2 min-h-screen relative" id="hero-section">
                  <div className="flex flex-col pointer-events-auto justify-center">
                    <HeroLeft />
                  </div>
                  <div className="relative hidden lg:block pointer-events-none">
                    <HeroRightElements scrollYProgress={scrollYProgress} />
                  </div>
                </div>

                {/* Scan Section */}
                <div className="grid lg:grid-cols-2 min-h-screen relative text-black" id="scan-section">
                  <div className="hidden lg:block border-r border-dashed border-black/10"></div>
                  <div className="flex flex-col pointer-events-auto justify-center pl-0 lg:pl-12">
                    <ScanSectionLeft />
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="pointer-events-auto relative z-20 bg-white" id="partners-section-wrapper">
            <div className="rounded-[24px] overflow-hidden bg-[#050505]" id="partners-section">
              <MissionControl />
            </div>
          </div>
          <div className="pointer-events-auto relative z-20 bg-white" id="evidence-section">
            <Evidence />
          </div>
          <div className="pointer-events-auto relative z-20 bg-white" id="certificate-section">
            <Certificate />
          </div>
          <div className="pointer-events-auto relative z-20 bg-[#0a0a0a]" id="footer-section">
            <FooterCTA />
          </div>
        </main>
      </div>
    </div>
  );
}
