import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, ShieldAlert, ShieldCheck } from 'lucide-react';

export function HeroLeft() {
  const [imei, setImei] = useState('');

  return (
    <div className="min-h-screen flex flex-col justify-center pt-24 pb-12">
      <div className="flex flex-col items-start text-left">
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[4rem] lg:text-[6rem] font-[800] uppercase tracking-[-0.04em] text-white leading-[1.0] mb-6"
        >
          BEFORE<br/>
          YOU PAY,<br/>
          VERIFY<span className="text-[#ef4444]">.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-[#d1d5db] mb-8 max-w-[400px] font-light leading-relaxed"
        >
          Check the hidden details of any used phone in Kenya.<br/>
          Get a clear trust score based on official records,<br/>
          repair history, and diagnostics.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-md mb-12"
        >
          <div className="relative flex items-center bg-[#f3f4f6] rounded-xl p-1.5 transition-colors">
            <div className="pl-4 pr-2 text-[#6b7280]">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Enter IMEI or Serial Number"
              value={imei}
              onChange={(e) => setImei(e.target.value)}
              className="flex-1 bg-transparent border-none text-[#111827] placeholder-[#9ca3af] focus:outline-none focus:ring-0 py-3.5 text-base font-medium"
            />
            <button className="bg-[#ef4444] text-white px-8 py-3.5 rounded-lg text-base font-bold hover:bg-red-600 transition-colors">
              Verify
            </button>
          </div>
          
          <p className="text-sm text-[#9ca3af] mt-4 flex items-center gap-1.5 ml-1 font-medium">
            <ShieldCheck className="w-4 h-4" />
            Dial <span className="text-[#ef4444] font-bold">*#06#</span> to find your IMEI
          </p>
        </motion.div>

        {/* Trust Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-3 gap-6 w-full border-t border-[#27272a] pt-8 mt-2"
        >
          <div className="flex items-start gap-3">
            <div className="mt-1 w-8 h-8 rounded-md border border-[#ef4444]/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4 text-[#ef4444]" />
            </div>
            <div>
              <p className="text-sm font-bold text-white mb-0.5 leading-tight">Official Data Sources</p>
              <p className="text-[11px] text-[#9ca3af]">GSMA, Operators & More</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 w-8 h-8 rounded-md border border-[#ef4444]/30 flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-[#ef4444]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m14.7 6.3-1.4 1.4"/><path d="M16 8 8 16"/><path d="M17.3 14.7 18.7 16"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M22 12h-4"/><path d="M6 12H2"/><path d="M18.4 5.6 15.5 8.5"/><path d="M8.5 15.5 5.6 18.4"/></svg>
            </div>
            <div>
              <p className="text-sm font-bold text-white mb-0.5 leading-tight">Repair & Diagnostics</p>
              <p className="text-[11px] text-[#9ca3af]">Hardware & Software</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 w-8 h-8 rounded-md border border-[#ef4444]/30 flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-[#ef4444]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </div>
            <div>
              <p className="text-sm font-bold text-white mb-0.5 leading-tight">Private & Secure</p>
              <p className="text-[11px] text-[#9ca3af]">Your data stays protected</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function HeroRightElements({ scrollYProgress }: { scrollYProgress?: any }) {
  // Fade out elements as we scroll down
  return (
    <motion.div 
      style={{ opacity: scrollYProgress ? scrollYProgress.get() < 0.2 ? 1 : 0 : 1 }}
      className="absolute inset-0 pointer-events-none transition-opacity duration-500"
    >
      <motion.div 
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] left-0 lg:-left-8 bg-[#111111] border border-[#27272a] p-3 rounded-2xl shadow-2xl flex items-center gap-3 z-20"
      >
        <div className="w-8 h-8 rounded-full border border-[#10b981] flex items-center justify-center text-[#10b981]">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div className="pr-4 relative">
          <p className="text-sm font-bold text-white leading-tight mb-0.5">IMEI Matched</p>
          <p className="text-[11px] text-[#9ca3af] leading-none">Official Records</p>
          <div className="absolute top-1 -right-1 w-1.5 h-1.5 rounded-full bg-[#10b981] shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute top-1/2 -translate-y-1/2 right-0 lg:right-4 flex flex-col items-center justify-center pointer-events-none z-20"
      >
        <div className="w-28 h-28 rounded-full bg-[#0a0a0a]/80 backdrop-blur-md border-t-[3px] border-r-[3px] border-[#dc2626] border-l-[1px] border-b-[1px] border-l-[#27272a] border-b-[#27272a] shadow-[0_0_30px_rgba(220,38,38,0.2)] flex flex-col items-center justify-center relative rotate-45">
          <div className="flex flex-col items-center justify-center -rotate-45">
            <span className="text-4xl font-bold text-white tracking-tighter leading-none mb-1">86</span>
            <span className="text-[8px] text-[#9ca3af] uppercase tracking-[0.1em] mb-1 font-bold">Trust Score</span>
            <span className="text-xs text-[#10b981] font-bold">Good</span>
          </div>
          
          {/* Glowing dot on the rim */}
          <div className="absolute top-[10%] right-[10%] w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white,0_0_20px_white]" />
        </div>
      </motion.div>
    </motion.div>
  );
}
