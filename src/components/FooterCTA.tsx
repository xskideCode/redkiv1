import React from 'react';
import { motion } from 'motion/react';
import { Search } from 'lucide-react';

export function FooterCTA() {
  return (
    <section className="py-32 bg-[#0a0a0a] relative overflow-hidden border-t border-[#27272a]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-[4rem] lg:text-[7rem] font-bold tracking-tight text-white mb-12 leading-tight">
          Verify before <br/>you pay.
        </h2>
        
        <div className="max-w-xl mx-auto mb-16">
          <div className="relative group">
            <div className="relative flex items-center bg-[#18181b] border border-[#27272a] rounded-xl p-1 shadow-2xl transition-colors focus-within:border-[#ef4444]/50 hover:border-[#3f3f46]">
              <div className="pl-4 pr-3 text-[#71717a]">
                <Search className="w-6 h-6" />
              </div>
              <input
                type="text"
                placeholder="Enter IMEI to start..."
                className="flex-1 bg-transparent border-none text-white text-lg placeholder-[#71717a] focus:outline-none focus:ring-0 py-4"
              />
              <button className="bg-[#ef4444] text-white px-8 py-4 rounded-lg font-bold hover:bg-red-600 transition-colors">
                Start Now
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-16 border-t border-[#27272a] text-[#a1a1aa] text-sm">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="font-bold text-white">Redki OS</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">For Shops</a>
            <a href="#" className="hover:text-white transition-colors">API</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </section>
  );
}
