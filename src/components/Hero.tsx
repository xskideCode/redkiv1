import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Search } from 'lucide-react';

import { TextReveal } from './TextReveal';

export function HeroLeft() {
  const [imei, setImei] = useState('');

  return (
    <div className="w-full h-full flex flex-col justify-between pt-32 pb-8 pr-0 lg:pr-8 border-r border-dashed border-white/10 relative z-10">
      
      {/* Top Left Metadata */}
      <div className="flex flex-col gap-8">
        <div className="text-[10px] font-mono tracking-widest uppercase text-zinc-500">
          <p>Redki OS v1.0.0</p>
          <p>Nairobi, Kenya</p>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-[900] tracking-tighter text-white leading-[1.1] max-w-[400px] lg:max-w-[450px]">
          BEFORE YOU PAY, <br />
          VERIFY.
        </h1>
        
        <TextReveal 
          text="Check the hidden details of any used phone in Kenya. Get a clear trust score based on official records, repair history, and deep diagnostics."
          className="text-sm md:text-base font-medium leading-relaxed max-w-[320px] lg:max-w-[400px]"
        />

        {/* Search Input - Soft interior, sharp grid exterior */}
        <div className="w-full max-w-[320px] mt-4">
          <div className="relative flex items-center bg-white/5 backdrop-blur-sm rounded-full p-1 border border-white/10 transition-colors focus-within:border-red-500/50">
            <div className="pl-4 pr-2 text-zinc-500">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              placeholder="Enter IMEI..."
              value={imei}
              onChange={(e) => setImei(e.target.value)}
              className="flex-1 bg-transparent border-none text-white placeholder-zinc-600 focus:outline-none focus:ring-0 py-2.5 text-sm font-mono tracking-wider"
            />
            <button className="bg-red-500 text-white p-2.5 rounded-full hover:bg-red-400 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>
          <p className="text-[10px] text-zinc-600 mt-3 font-mono uppercase tracking-widest ml-4">
             Dial *#06# to find your IMEI
          </p>
        </div>
      </div>
    </div>
  );
}

export function HeroRightElements({ scrollYProgress }: { scrollYProgress?: any }) {
  // We use the scroll progress to fade out the 3D phone's floating UI elements
  // as the user scrolls past the hero.
  return (
    <motion.div 
      style={{ opacity: scrollYProgress ? useTransform(scrollYProgress, [0, 0.2], [1, 0]) : 1 }}
      className="absolute inset-0 pointer-events-none transition-opacity duration-500 w-full h-full border-r border-dashed border-white/10"
    >
      {/* 
        The 3D phone is placed in App.tsx directly over this column. 
        Here we add the strict grid coordinate tags. 
      */}

      {/* Grid Coordinate Tag 1 */}
      <div className="absolute top-[20%] right-0 border-t border-b border-l border-dashed border-white/10 bg-black py-2 px-4 backdrop-blur-sm">
         <p className="text-[10px] font-mono tracking-widest uppercase text-emerald-400">
           [ IMEI_MATCHED ]
         </p>
      </div>

      {/* Grid Coordinate Tag 2 */}
      <div className="absolute top-[60%] left-[-1px] -translate-x-full border-t border-b border-dashed border-white/10 bg-black py-2 px-4 backdrop-blur-sm">
         <p className="text-[10px] font-mono tracking-widest uppercase text-red-400 flex gap-4">
           <span>TRUST_SCORE</span>
           <span className="text-white font-[900]">86</span>
         </p>
      </div>
      
    </motion.div>
  );
}
