import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

export function ScanSectionLeft() {
  return (
    <div className="min-h-screen flex flex-col justify-center py-32">
      <div className="max-w-xl text-left">
        <h2 className="text-[3.5rem] lg:text-[4rem] font-bold tracking-tight text-white mb-6 leading-tight">
          Redki checks the hidden details.
        </h2>
        <p className="text-xl text-[#a1a1aa] mb-12 leading-relaxed">
          Our deep scan verifies official databases, hardware authenticity, and previous repair logs.
        </p>

        <div className="space-y-8">
           <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#111111] border border-[#27272a] flex items-center justify-center shrink-0">
                <span className="text-[#ef4444] font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Check Global Blocklists</h3>
                <p className="text-[#a1a1aa]">We check GSMA databases to ensure the phone hasn't been reported lost or stolen.</p>
              </div>
           </div>
           
           <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#111111] border border-[#27272a] flex items-center justify-center shrink-0">
                <span className="text-[#ef4444] font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Verify Hardware Parts</h3>
                <p className="text-[#a1a1aa]">Detect if the screen, battery, or camera have been replaced with unauthentic parts.</p>
              </div>
           </div>

           <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#111111] border border-[#27272a] flex items-center justify-center shrink-0">
                <span className="text-[#ef4444] font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Carrier Locks & Debts</h3>
                <p className="text-[#a1a1aa]">Ensure the device isn't locked to a specific carrier or tied to an unpaid device loan.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
