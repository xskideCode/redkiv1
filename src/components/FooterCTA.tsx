import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X } from 'lucide-react';

export function FooterCTA() {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <>
      <section className="bg-[#050505] relative overflow-hidden border-t border-dashed border-white/10 min-h-screen flex flex-col justify-between pt-24">
        
        {/* Giant Background Text */}
        <div className="absolute top-[-5%] left-0 w-full overflow-hidden pointer-events-none flex justify-center opacity-5 select-none">
          <h1 className="text-[25vw] font-[900] tracking-tighter uppercase leading-none text-white">
            REDKI
          </h1>
        </div>

        <div className="w-full max-w-[1920px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 flex-1 relative z-10 pb-12">
          
          {/* Left Column */}
          <div className="flex flex-col justify-between pr-0 lg:pr-12 lg:border-r border-dashed border-white/10 h-full mb-24 lg:mb-0">
             
             <div>
               <p className="text-white text-xl md:text-3xl font-medium tracking-tight leading-tight max-w-[500px]">
                 We choose <span className="font-[900]">clarity over clutter</span> and <span className="font-[900]">truth over trust</span>, because a safe marketplace deserves a meaningful foundation.
               </p>
               <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mt-8 space-y-1">
                 <p>Device Verification Network</p>
                 <p>Based in Nairobi, KE</p>
               </div>
             </div>

             <div className="mt-24 lg:mt-auto">
               <a href="mailto:hi@redki.os" className="text-3xl md:text-4xl font-[900] tracking-tighter text-white hover:opacity-70 transition-opacity block mb-2">
                 hi@redki.os
               </a>
               <p className="text-lg font-medium text-zinc-400">
                 (+254) 712 345 678
               </p>
             </div>

          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-between pl-0 lg:pl-12 h-full">
            
            {/* Top Right: Navigation */}
            <div className="flex flex-col gap-4 w-max">
              {['Home', 'Verification', 'Partners', 'API', 'Contact'].map((item) => (
                <div key={item} className="flex items-center gap-12 group cursor-pointer">
                  <span className="text-2xl md:text-4xl font-[900] tracking-tighter text-white group-hover:opacity-70 transition-opacity">
                    {item}
                  </span>
                  <div className="flex flex-col gap-1.5 mt-2 opacity-50">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Right: Links */}
            <div className="grid grid-cols-2 gap-8 mt-24 lg:mt-auto border-t border-dashed border-white/10 pt-12">
               
               {/* Socials */}
               <div className="flex flex-col gap-3">
                 <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-2">Social media</span>
                 {['Twitter', 'LinkedIn', 'Instagram', 'GitHub'].map((social) => (
                   <a key={social} href="#" className="text-sm font-medium text-white hover:opacity-70 transition-opacity">
                     {social}
                   </a>
                 ))}
               </div>

               {/* Legal */}
               <div className="flex flex-col gap-3">
                 <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-2">Legal</span>
                 <button onClick={() => setModalType('terms')} className="text-sm font-medium text-white hover:opacity-70 transition-opacity text-left">
                   Terms of Service
                 </button>
                 <button onClick={() => setModalType('privacy')} className="text-sm font-medium text-white hover:opacity-70 transition-opacity text-left">
                   Privacy Policy
                 </button>
                 <a href="#" className="text-sm font-medium text-white hover:opacity-70 transition-opacity">
                   Cookie Policy
                 </a>
               </div>

            </div>

          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="w-full border-t border-dashed border-white/10 px-6 lg:px-12 py-6 flex justify-between items-center text-[10px] font-mono tracking-widest uppercase text-zinc-500">
           <span>© 2026 Redki OS</span>
           <span className="flex items-center gap-2">Built on <span className="text-white font-[900]">Redki</span></span>
        </div>

      </section>

      {/* Wipe Modal Overlay */}
      <AnimatePresence>
        {modalType && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[80] bg-[#e5e5e5] text-black flex flex-col"
          >
            {/* Modal Header */}
            <div className="px-6 lg:px-8 py-6 flex items-center justify-between border-b border-black/10">
              <h2 className="text-2xl font-[900] tracking-tighter uppercase">
                {modalType === 'privacy' ? 'PRIVACY POLICY' : 'TERMS OF SERVICE'}
              </h2>
              <button 
                onClick={() => setModalType(null)}
                className="text-sm font-mono tracking-widest uppercase flex items-center gap-3 hover:opacity-70 transition-opacity"
              >
                <span className="hidden sm:inline">CLOSE</span>
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 p-6 lg:p-12 overflow-y-auto max-w-4xl mx-auto w-full">
              <div className="prose prose-sm font-mono text-black/70">
                <p className="uppercase tracking-widest text-[10px] mb-8">LAST UPDATED: {new Date().toLocaleDateString()}</p>
                
                <p className="mb-4">
                  {modalType === 'privacy' 
                    ? 'Your privacy is critical to the operation of the Redki verification network. We do not store personally identifiable information linked to IMEI searches unless explicitly required for law enforcement holds.'
                    : 'By using the Redki verification network, you agree to these terms. Redki provides data "as is" and is not liable for transactions conducted based on this data.'}
                </p>

                <div className="w-full h-[1px] bg-black/10 my-8" />
                
                <h3 className="text-lg font-bold uppercase mb-4 text-black">1. DATA COLLECTION</h3>
                <p className="mb-8">
                  We log search timestamps, geographic regions (at a city level), and the hashed IMEI values. This is used to improve our fraud detection algorithms and alert networks to serialized theft rings.
                </p>

                <h3 className="text-lg font-bold uppercase mb-4 text-black">2. PARTNER RESPONSIBILITIES</h3>
                <p className="mb-8">
                  Certified partners must maintain 99.9% uptime on their diagnostic tools. Falsifying diagnostic data will result in immediate network expulsion.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
