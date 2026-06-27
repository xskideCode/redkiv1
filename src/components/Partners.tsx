import React from 'react';
import { motion } from 'motion/react';
import { Activity, MapPin, SearchCheck } from 'lucide-react';
import { CountUp } from './CountUp';

export function MissionControl() {
  return (
    <section className="py-24 relative overflow-hidden">
      
      <div className="w-full max-w-[1920px] mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="mb-16 px-6 lg:px-8">
          <span className="inline-block px-2 py-1 bg-white/5 border border-white/10 text-white text-[10px] font-mono uppercase tracking-widest mb-6">
            // Live Network
          </span>
          <h2 className="text-[9vw] sm:text-[3.5rem] lg:text-[4.5rem] font-[900] tracking-tighter text-white leading-[1.05] uppercase">
            BUILT FOR MARKETPLACES.
          </h2>
          <p className="text-sm font-mono text-zinc-500 max-w-lg mt-6 leading-relaxed">
            Redki provides a live dashboard and verification pipeline across Kenya, bringing absolute trust to every transaction.
          </p>
        </div>

        {/* BRUTALIST GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-3 border-t border-dashed border-white/10">
          
          {/* Dashboard Left (col-span-2) */}
          <div className="xl:col-span-2 border-b border-r border-dashed border-white/10 flex flex-col bg-white/[0.01]">
             
             {/* Header */}
             <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 border-b border-dashed border-white/10 bg-white/[0.02]">
               <h3 className="text-white text-lg font-[900] tracking-tight uppercase">LIVE VERIFICATION QUEUE</h3>
               <div className="flex gap-2.5 items-center px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 mt-4 sm:mt-0">
                 <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                 <span className="text-[10px] font-mono font-bold text-emerald-400 tracking-widest uppercase">System Online</span>
               </div>
             </div>

             {/* Live Feed List */}
             <div className="p-6 space-y-0 flex-1">
               {[
                 { id: 'RD-892', status: 'VERIFYING', device: 'iPhone 12 Pro', location: 'Nairobi CBD' },
                 { id: 'RD-891', status: 'CLEARED', device: 'Samsung S22', location: 'Mombasa' },
                 { id: 'RD-890', status: 'FLAGGED', device: 'iPhone 14', location: 'Westlands' },
                 { id: 'RD-889', status: 'CLEARED', device: 'iPhone 13', location: 'Kisumu' } 
               ].map((item, i) => (
                 <motion.div 
                   key={item.id}
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ delay: i * 0.1, type: "spring" }}
                   viewport={{ once: true }}
                   className="flex items-center justify-between p-4 border-b border-dashed border-white/10 last:border-b-0 hover:bg-white/[0.03] transition-colors"
                 >
                   <div className="flex items-center gap-4">
                     <div className={`w-10 h-10 flex items-center justify-center border ${
                       item.status === 'CLEARED' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' :
                       item.status === 'FLAGGED' ? 'bg-red-500/10 border-red-500/20 text-red-400' :
                       'bg-amber-500/10 border-amber-500/20 text-amber-400'
                     }`}>
                       <SearchCheck className="w-5 h-5" />
                     </div>
                     <div>
                       <p className="text-white font-[900] tracking-tight uppercase text-sm mb-0.5">{item.device}</p>
                       <p className="text-[10px] text-zinc-500 font-mono tracking-widest">{item.id}</p>
                     </div>
                   </div>
                   <div className="text-right hidden sm:block">
                     <p className="text-[10px] font-mono text-zinc-500 flex items-center justify-end gap-1.5 uppercase tracking-widest mb-1.5"><MapPin className="w-3 h-3"/> {item.location}</p>
                     <span className={`text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 border ${
                       item.status === 'CLEARED' ? 'text-emerald-400 border-emerald-500/20 bg-emerald-500/10' :
                       item.status === 'FLAGGED' ? 'text-red-400 border-red-500/20 bg-red-500/10' :
                       'text-amber-400 border-amber-500/20 bg-amber-500/10'
                     }`}>{item.status}</span>
                   </div>
                 </motion.div>
               ))}
             </div>
          </div>

          <div className="flex flex-col xl:col-span-1">
            {/* Bento Box 2: Stats (Square) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-b border-r border-dashed border-white/10 p-8 flex-1 flex flex-col justify-center relative bg-white/[0.01]"
            >
              <span className="absolute top-4 left-4 text-[10px] font-mono tracking-widest text-zinc-600 uppercase">+ STATS</span>
              <div className="text-[4rem] font-[900] text-white leading-none tracking-tighter mb-2 mt-4">
                <CountUp end={247} /><span className="text-red-500">+</span>
              </div>
              <p className="text-[12px] font-mono text-zinc-500 uppercase tracking-widest">Active Shops</p>
            </motion.div>

            {/* Bento Box 3: Phones Verified (Square) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="border-b border-r border-dashed border-white/10 p-8 flex-1 flex flex-col justify-center relative bg-red-500/5 hover:bg-red-500/10 transition-colors"
            >
              <span className="absolute top-4 left-4 text-[10px] font-mono tracking-widest text-red-500/50 uppercase">+ METRICS</span>
              
              <div className="text-[4rem] font-[900] text-red-500 leading-none tracking-tighter mb-2 mt-4">
                <CountUp end={14} suffix=".2k" />
              </div>
              <p className="text-[12px] font-mono text-red-400/80 uppercase tracking-widest">Phones Verified</p>
            </motion.div>
          </div>

          {/* Sharp Portrait Panel */}
          <div className="xl:col-span-3 grid grid-cols-1 md:grid-cols-2 border-b border-dashed border-white/10">
             <div className="p-8 md:p-12 border-r border-dashed border-white/10 flex flex-col justify-center bg-white/[0.02]">
                <h3 className="text-2xl font-[900] text-white tracking-tighter uppercase mb-4">THE NETWORK</h3>
                <p className="text-sm font-mono text-zinc-500 leading-relaxed max-w-sm">
                  Our certified verification partners are strategically located across the country. They are the frontline of digital trust.
                </p>
             </div>
             
             {/* Portrait Image (Grayscale to Color on Hover, 0px radius) */}
             <div className="relative h-64 md:h-auto border-r border-dashed border-white/10 overflow-hidden group bg-black cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80" 
                  alt="Technician" 
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 pointer-events-none">
                  <p className="text-white font-[900] text-xl tracking-tighter uppercase mb-1">Nairobi Hub</p>
                  <p className="text-[10px] font-mono text-red-400 tracking-widest uppercase">Certified Partner</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
