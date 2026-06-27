import React from 'react';
import { ShieldCheck } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="absolute top-0 inset-x-0 z-50 px-6 lg:px-8 py-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-md bg-transparent border-2 border-[#ef4444] flex items-center justify-center text-[#ef4444]">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div className="flex flex-col">
          <span className="text-white font-bold text-xl leading-none tracking-tight">redki</span>
          <span className="text-[#a1a1aa] text-[10px] leading-none mt-1 font-medium">Trust & Verification OS</span>
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#e4e4e7]">
        <a href="#" className="hover:text-white transition-colors">How it Works</a>
        <a href="#" className="hover:text-white transition-colors">For Shoppers</a>
        <a href="#" className="hover:text-white transition-colors">For Sellers</a>
        <a href="#" className="hover:text-white transition-colors">For Partners</a>
        <a href="#" className="hover:text-white transition-colors">Resources</a>
        <a href="#" className="hover:text-white transition-colors">Pricing</a>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-sm font-medium text-white px-5 py-2.5 rounded-lg border border-[#27272a] hover:bg-[#27272a] transition-colors">
          Log in
        </button>
        <button className="text-sm font-medium bg-[#ef4444] text-white px-5 py-2.5 rounded-lg hover:bg-red-600 transition-colors">
          Get Started
        </button>
      </div>
    </nav>
  );
}
