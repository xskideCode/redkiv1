import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

export function ScanSectionLeft() {
  return (
    <div className="min-h-screen flex flex-col justify-center py-32 pr-0 lg:pr-12 relative">
      <span className="absolute top-32 left-0 text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
        + DIAGNOSTICS
      </span>
      
      <div className="w-full mt-12">
        <h2 className="text-[3.5rem] lg:text-[4.5rem] font-[900] tracking-tighter text-black mb-8 leading-[0.9] uppercase">
          REDKI CHECKS <br/>
          THE HIDDEN <br/>
          DETAILS.
        </h2>
        <p className="text-lg text-zinc-600 mb-16 leading-relaxed max-w-md font-medium">
          Our deep scan verifies official databases, hardware authenticity, and previous repair logs. We focus on outcomes, not just aesthetics.
        </p>

        {/* Brutalist Grid for the 3 points */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-t border-l border-dashed border-black/10 mt-12">
          
           {/* Item 1 */}
           <div className="p-6 md:p-8 border-r border-b border-dashed border-black/10">
              <div className="flex items-center gap-3 mb-6">
                 <div className="w-6 h-1 bg-black"></div>
                 <span className="text-[10px] font-mono tracking-widest uppercase font-bold">Global Blocklists</span>
              </div>
              <h3 className="text-4xl font-[900] tracking-tighter mb-4">100%</h3>
              <p className="text-xs font-mono text-zinc-500 leading-relaxed">
                 We check GSMA databases to ensure the phone hasn't been reported lost or stolen.
              </p>
           </div>
           
           {/* Item 2 */}
           <div className="p-6 md:p-8 border-r border-b border-dashed border-black/10">
              <div className="flex items-center gap-3 mb-6">
                 <div className="w-6 h-1 bg-red-500"></div>
                 <span className="text-[10px] font-mono tracking-widest uppercase font-bold">Hardware Parts</span>
              </div>
              <h3 className="text-4xl font-[900] tracking-tighter mb-4 text-red-500">OEM</h3>
              <p className="text-xs font-mono text-zinc-500 leading-relaxed">
                 Detect if the screen, battery, or camera have been replaced with unauthentic parts.
              </p>
           </div>

           {/* Item 3 */}
           <div className="p-6 md:p-8 border-r border-b border-dashed border-black/10 lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                 <div className="w-6 h-1 bg-black"></div>
                 <span className="text-[10px] font-mono tracking-widest uppercase font-bold">Carrier & Debts</span>
              </div>
              <h3 className="text-4xl font-[900] tracking-tighter mb-4">CLEAR</h3>
              <p className="text-xs font-mono text-zinc-500 leading-relaxed max-w-md">
                 Ensure the device isn't locked to a specific carrier or tied to an unpaid device loan.
              </p>
           </div>

        </div>
      </div>
    </div>
  );
}
