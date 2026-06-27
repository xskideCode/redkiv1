import React, { useRef } from 'react';
import { Navbar } from './components/Navbar';
import { HeroLeft, HeroRightElements } from './components/Hero';
import { ScanSectionLeft } from './components/ScanStory';
import { MissionControl } from './components/Partners';
import { Evidence } from './components/Evidence';
import { Certificate } from './components/Certificate';
import { FooterCTA } from './components/FooterCTA';
import { Phone3D } from './components/Phone3D';
import Dither from './components/Dither';
import { motion, useScroll, useTransform } from 'motion/react';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate scanning state based on scroll (scans when in the second section)
  // Let's say scrolling past 30% triggers the scan
  const isScanning = useTransform(scrollYProgress, (latest) => latest > 0.4);
  const [scanning, setScanning] = React.useState(false);

  React.useEffect(() => {
    return isScanning.on("change", (latest) => {
      setScanning(latest);
    });
  }, [isScanning]);

  return (
    <div className="bg-[#0a0a0a] min-h-screen selection:bg-red-500/30 selection:text-white">
      <Navbar />
      <main>
        
        {/* Sticky Container for Hero & ScanSection */}
        <div ref={containerRef} className="relative w-full">
          {/* Full-width Dither Background */}
          <div className="absolute inset-0 z-0">
             <div className="sticky top-0 h-screen w-full pointer-events-none opacity-40 mix-blend-screen" style={{ WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 70%)' }}>
                 <Dither
                    waveColor={[0.937, 0.267, 0.267]}
                    disableAnimation={false}
                    enableMouseInteraction={true}
                    mouseRadius={0.5}
                    colorNum={4}
                    waveAmplitude={0.8}
                    waveFrequency={4.0}
                    waveSpeed={0.8}
                 />
             </div>
          </div>
          
          <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 relative z-10">
            
            {/* Left Content Column */}
            <div className="flex flex-col">
              <HeroLeft />
              <ScanSectionLeft />
            </div>

            {/* Right Sticky Column for Phone */}
            <div className="relative hidden lg:block">
              <div className="sticky top-0 h-screen flex items-center justify-center">
                 <Phone3D 
                   showStand={true} 
                   isScanning={scanning} 
                   className="transform-gpu pointer-events-auto relative z-10" 
                 />

                 {/* Pass scroll progress to elements that should only show in Hero */}
                 <HeroRightElements scrollYProgress={scrollYProgress} />
              </div>
            </div>
            
            {/* Mobile Fallback - Phone in Hero only */}
            <div className="lg:hidden h-[500px] relative -mt-32 z-0">
               <Phone3D showStand={true} className="pointer-events-auto" />
            </div>

          </div>
        </div>

        <MissionControl />
        <Evidence />
        <Certificate />
        <FooterCTA />
      </main>
    </div>
  );
}
