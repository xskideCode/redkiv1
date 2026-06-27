import React from 'react';
import { motion } from 'motion/react';
import { Activity, MapPin, SearchCheck } from 'lucide-react';

export function MissionControl() {
  return (
    <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <h2 className="text-[3.5rem] lg:text-[4rem] font-bold tracking-tight text-white mb-6 leading-tight">
            Built for phone shops and marketplaces.
          </h2>
          <p className="text-xl text-[#a1a1aa] max-w-2xl leading-relaxed">
            Redki provides a live dashboard and verification pipeline across Kenya, bringing trust to every transaction.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Dashboard Preview */}
          <div className="lg:col-span-2 bg-[#111111] border border-[#27272a] rounded-2xl p-6 relative flex flex-col">
             <div className="flex items-center justify-between mb-8 border-b border-[#27272a] pb-4">
               <div className="flex items-center gap-2">
                 <Activity className="w-5 h-5 text-[#ef4444]" />
                 <h3 className="text-white font-bold">Live Verification Queue</h3>
               </div>
               <div className="flex gap-2 items-center">
                 <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
                 </span>
                 <span className="text-sm font-bold text-white tracking-widest uppercase">System Online</span>
               </div>
             </div>

             <div className="space-y-4 flex-1">
               {[
                 { id: 'RD-892', status: 'Verifying', device: 'iPhone 12 Pro', location: 'Nairobi CBD' },
                 { id: 'RD-891', status: 'Cleared', device: 'Samsung S22', location: 'Mombasa' },
                 { id: 'RD-890', status: 'Flagged', device: 'iPhone 14', location: 'Westlands' }
               ].map((item, i) => (
                 <motion.div 
                   key={item.id}
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ delay: i * 0.1 }}
                   viewport={{ once: true }}
                   className="flex items-center justify-between p-4 bg-[#18181b] border border-[#27272a] rounded-xl shadow-sm"
                 >
                   <div className="flex items-center gap-4">
                     <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                       item.status === 'Cleared' ? 'bg-[#10b981]/10 text-[#10b981]' :
                       item.status === 'Flagged' ? 'bg-[#ef4444]/10 text-[#ef4444]' :
                       'bg-[#f59e0b]/10 text-[#f59e0b]'
                     }`}>
                       <SearchCheck className="w-5 h-5" />
                     </div>
                     <div>
                       <p className="text-white font-bold">{item.device}</p>
                       <p className="text-xs text-[#a1a1aa] font-mono font-medium">{item.id}</p>
                     </div>
                   </div>
                   <div className="text-right hidden sm:block">
                     <p className="text-sm text-[#a1a1aa] flex items-center justify-end gap-1"><MapPin className="w-3 h-3"/> {item.location}</p>
                     <p className={`text-xs mt-1 font-bold tracking-wider uppercase ${
                       item.status === 'Cleared' ? 'text-[#10b981]' :
                       item.status === 'Flagged' ? 'text-[#ef4444]' :
                       'text-[#f59e0b] animate-pulse'
                     }`}>{item.status}</p>
                   </div>
                 </motion.div>
               ))}
             </div>
          </div>

          {/* Stats Column */}
          <div className="flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#111111] border border-[#27272a] rounded-2xl p-6 flex-1 flex flex-col justify-center"
            >
              <h4 className="text-[#a1a1aa] text-xs font-bold mb-2 uppercase tracking-widest">Active Shops</h4>
              <div className="text-[3.5rem] font-bold text-white mb-2 leading-none">247<span className="text-[#ef4444] font-bold">+</span></div>
              <p className="text-sm text-[#a1a1aa]">Partner locations across major cities.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111111] border border-[#27272a] rounded-2xl p-6 flex-1 flex flex-col justify-center overflow-hidden relative group"
            >
              <h4 className="text-[#a1a1aa] text-xs font-bold mb-2 uppercase tracking-widest relative z-10">Phones Verified</h4>
              <div className="text-[3.5rem] font-bold text-white mb-2 leading-none relative z-10">14.2k</div>
              <p className="text-sm text-[#a1a1aa] relative z-10">Preventing thousands of risky purchases.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
