import React from 'react';
import { motion } from 'motion/react';
import { QrCode, Share2, MessageCircle, ShieldCheck } from 'lucide-react';

export function Certificate() {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-dashed border-black/10 text-black">
      
      <div className="w-full max-w-[1920px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Brutalist Container */}
        <div className="border-y border-dashed border-black/10 grid lg:grid-cols-2">
            
            {/* Left Content Side */}
            <div className="p-10 lg:p-20 flex flex-col justify-center relative z-10 border-b lg:border-b-0 lg:border-r border-dashed border-black/10 bg-black/[0.02]">
              <span className="inline-flex self-start px-2 py-1 bg-black/5 border border-black/10 text-black text-[10px] font-mono uppercase tracking-widest mb-8">
                // Public Verification
              </span>
              
              <h2 className="text-[3rem] lg:text-[4rem] font-[900] tracking-tighter text-black mb-6 leading-[1.05] uppercase">
                SHARE PROOF <br className="hidden lg:block"/>
                BEFORE PAYMENT.
              </h2>
              
              <p className="text-sm text-zinc-600 font-mono max-w-md leading-relaxed mb-10">
                Instantly generate a public, cryptographically-backed certificate for any scanned device. Send it to buyers or sellers to prove authenticity.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                 <button className="flex items-center justify-center gap-3 border border-dashed border-black/20 bg-black text-white px-8 py-4 font-mono font-bold tracking-widest uppercase hover:bg-black/80 transition-colors">
                   <Share2 className="w-5 h-5" />
                   Generate Link
                 </button>
              </div>
            </div>

            {/* Right Certificate Side */}
            <div className="relative p-10 lg:p-20 flex items-center justify-center bg-white overflow-hidden">
               
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9, y: 20 }}
                 whileInView={{ opacity: 1, scale: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ type: "spring", duration: 1 }}
                 className="w-full max-w-sm relative z-10"
               >
                 {/* The Certificate UI - Sharp layout with interior soft borders */}
                 <div className="relative bg-zinc-50 rounded-sm p-8 border border-dashed border-black/20 shadow-xl overflow-hidden">
                    
                    <div className="flex justify-between items-start mb-10 relative z-10">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-red-500/10 flex items-center justify-center border border-red-500/20">
                          <ShieldCheck className="w-5 h-5 text-red-500" />
                        </div>
                        <span className="font-[900] tracking-tight uppercase text-black text-lg">REDKI OS</span>
                      </div>
                      <span className="text-[9px] font-mono font-bold bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 px-2 py-1 uppercase tracking-widest flex items-center gap-1.5">
                        VERIFIED
                      </span>
                    </div>

                    <div className="text-center mb-10 relative z-10">
                      <div className="inline-flex items-center justify-center p-6 bg-black/[0.02] border border-dashed border-black/10 mb-8 relative">
                        <QrCode className="w-32 h-32 text-zinc-800" strokeWidth={1} />
                        
                        {/* Scanning beam across QR code */}
                        <motion.div 
                          className="absolute left-0 right-0 h-[1px] bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]"
                          animate={{ top: ['10%', '90%', '10%'] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                        
                        {/* Corner brackets */}
                        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-red-500/50" />
                        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-red-500/50" />
                        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-red-500/50" />
                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-red-500/50" />
                      </div>
                      <h3 className="text-2xl font-[900] mb-2 tracking-tight uppercase text-black">iPhone 13 Pro</h3>
                      <p className="text-zinc-600 font-mono text-[10px] bg-zinc-100 inline-block px-4 py-1.5 border border-dashed border-black/10 uppercase tracking-widest">IMEI: 3569********12</p>
                    </div>

                    <div className="border-t border-dashed border-black/10 pt-6 grid grid-cols-2 gap-3 relative z-10">
                      <button className="flex items-center justify-center gap-2 bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 py-3 font-mono font-bold text-[10px] tracking-widest uppercase hover:bg-emerald-500/20 transition-colors">
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp
                      </button>
                      <button className="flex items-center justify-center gap-2 bg-black/5 text-black border border-dashed border-black/20 py-3 font-mono font-bold text-[10px] tracking-widest uppercase hover:bg-black/10 transition-colors">
                        <Share2 className="w-4 h-4" />
                        Copy Link
                      </button>
                    </div>
                 </div>
               </motion.div>
            </div>
        </div>

      </div>
    </section>
  );
}
