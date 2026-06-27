import React from 'react';
import { motion } from 'motion/react';
import { QrCode, Share2, MessageCircle, ShieldCheck } from 'lucide-react';

export function Certificate() {
  return (
    <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-[3.5rem] lg:text-[4rem] font-bold tracking-tight text-white mb-6 leading-tight">
            Share proof before payment.
          </h2>
          <p className="text-xl text-[#a1a1aa] max-w-2xl mx-auto">
            Get a public certificate you can share with buyers or sellers instantly.
          </p>
        </div>

        <div className="flex justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 50, rotateX: 20 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 1.5 }}
            className="w-full max-w-md bg-[#111111] rounded-2xl p-8 shadow-2xl border border-[#27272a] text-white perspective-[1000px] relative overflow-hidden group cursor-pointer"
            whileHover={{ rotateY: 5, rotateX: -5, scale: 1.02 }}
          >
            {/* Hologram effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform -translate-x-full group-hover:translate-x-full" />
            
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-[#ef4444]" />
                <span className="font-bold tracking-tight">Redki OS</span>
              </div>
              <span className="text-xs font-mono font-bold bg-[#18181b] border border-[#27272a] text-white px-3 py-1 rounded-full uppercase">VERIFIED</span>
            </div>

            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center p-4 bg-[#18181b] border border-[#27272a] rounded-xl mb-6 relative">
                <QrCode className="w-32 h-32 text-white" />
                <motion.div 
                  className="absolute inset-0 border-2 border-[#ef4444] rounded-xl"
                  animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <h3 className="text-2xl font-bold mb-1">iPhone 13 Pro</h3>
              <p className="text-[#a1a1aa] font-mono text-sm font-medium">IMEI: 3569********12</p>
            </div>

            <div className="border-t border-[#27272a] pt-6 grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 bg-[#10b981] text-white rounded-lg py-3 font-medium hover:bg-emerald-600 transition-colors">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </button>
              <button className="flex items-center justify-center gap-2 bg-[#18181b] text-white border border-[#27272a] rounded-lg py-3 font-medium hover:bg-[#27272a] transition-colors">
                <Share2 className="w-4 h-4" />
                Share Link
              </button>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
