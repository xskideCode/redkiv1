import React from 'react';
import { motion } from 'motion/react';
import { CountUp } from './CountUp';
import { FileText, Camera, Wrench, Shield, CheckCircle2, AlertCircle } from 'lucide-react';
import GridDistortion from './GridDistortion';

export function Evidence() {
  return (
    <section className="py-24 bg-white relative border-y border-dashed border-black/10 overflow-hidden text-black">
      
      <div className="w-full max-w-[1920px] mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="mb-16 px-6 lg:px-8">
          <h2 className="text-[3rem] lg:text-[4rem] font-[900] tracking-tighter text-black leading-[1.05] max-w-3xl">
            ONE UNDENIABLE <br/>
            EVIDENCE TRAIL.
          </h2>
          {/* Barcode Divider */}
          <div className="w-full max-w-2xl h-8 mt-12 flex">
             <div className="h-full w-24 bg-red-500" />
             <div className="h-full flex-1 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9InRyYW5zcGFyZW50Ij48L3JlY3Q+PHBhdGggZD0iTTAgMFY4TTQgMFY4IiBzdHJva2U9IiNlZjQ0NDQiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPjwvc3ZnPg==')] opacity-50" />
          </div>
        </div>

        {/* BRUTALIST DASHED GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-dashed border-black/10">
          
          {/* Bento Box 1: Large Trust Score (col-span-2) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 border-b border-r border-dashed border-black/10 p-8 lg:p-12 relative flex flex-col justify-between"
          >
            <span className="absolute top-4 left-4 text-[10px] font-mono tracking-widest text-zinc-500 uppercase">+ SCORE</span>
            
            <div className="flex flex-col lg:flex-row gap-12 items-center h-full relative z-10 mt-8">
               
               {/* Animated Score Ring (Soft interior) */}
               <div className="relative w-64 h-64 shrink-0 bg-black/5 rounded-full flex items-center justify-center border border-black/10">
                 <svg className="w-full h-full absolute inset-0 transform -rotate-90 drop-shadow-[0_0_20px_rgba(239,68,68,0.3)]" viewBox="0 0 100 100">
                   <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="2" />
                   <motion.circle 
                     cx="50" cy="50" r="45" fill="none" 
                     stroke="#ef4444" strokeWidth="4" 
                     strokeDasharray="283" 
                     initial={{ strokeDashoffset: 283 }}
                     whileInView={{ strokeDashoffset: 283 - (283 * 0.86) }}
                     viewport={{ once: true }}
                     transition={{ duration: 2.5, ease: "easeOut" }}
                     strokeLinecap="round"
                   />
                 </svg>
                 <div className="flex flex-col items-center justify-center">
                   <span className="text-[4.5rem] font-[900] text-black tracking-tighter leading-none mb-1">
                     <CountUp end={86} duration={2.5} />
                   </span>
                   <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest mt-1">Trust Score</span>
                 </div>
               </div>

               {/* Score Breakdown Checklist */}
               <div className="w-full">
                 <h3 className="text-2xl font-[900] tracking-tight text-black mb-6 uppercase">A SCORE YOU CAN TRUST</h3>
                 <div className="space-y-4">
                   {[
                     { label: 'Blacklist Check', status: 'pass', desc: 'Not reported stolen or lost.' },
                     { label: 'Parts Authenticity', status: 'pass', desc: 'Screen and battery are OEM.' },
                     { label: 'Finance Lock', status: 'pass', desc: 'No active device loans.' },
                     { label: 'Battery Health', status: 'warn', desc: 'Currently at 82% capacity.' }
                   ].map((check, i) => (
                     <div key={i} className="flex items-center justify-between pb-3 border-b border-dashed border-black/10 last:border-0 group">
                       <div className="flex items-center gap-4">
                         {check.status === 'pass' ? (
                           <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                         ) : (
                           <AlertCircle className="w-5 h-5 text-amber-500" />
                         )}
                         <h5 className="font-mono text-sm tracking-wide text-black uppercase">{check.label}</h5>
                       </div>
                       <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-sm ${
                         check.status === 'pass' ? 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-600 border border-amber-500/20'
                       }`}>
                         {check.status === 'pass' ? 'CLEARED' : 'WARNING'}
                       </span>
                     </div>
                   ))}
                 </div>
               </div>
            </div>
          </motion.div>

          <div className="flex flex-col lg:col-span-1">
            {/* Bento Box 2: Documents */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="border-b border-r border-dashed border-black/10 p-8 flex-1 flex flex-col justify-center relative bg-black/[0.02]"
            >
              <span className="absolute top-4 left-4 text-[10px] font-mono tracking-widest text-zinc-500 uppercase">+ DOCS</span>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 border border-blue-500/20 flex items-center justify-center mb-6 mt-4">
                <FileText className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-[900] uppercase text-black mb-2 tracking-tight">Ownership Logs</h4>
              <p className="text-[12px] font-mono text-zinc-600 leading-relaxed">Receipts and warranty data instantly verified against global databases.</p>
            </motion.div>

            {/* Bento Box 3: Diagnostics */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="border-b border-r border-dashed border-black/10 p-8 flex-1 flex flex-col justify-center relative bg-black/[0.02]"
            >
              <span className="absolute top-4 left-4 text-[10px] font-mono tracking-widest text-zinc-500 uppercase">+ DIAG</span>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 border border-amber-500/20 flex items-center justify-center mb-6 mt-4">
                <Wrench className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-[900] uppercase text-black mb-2 tracking-tight">Diagnostic Run</h4>
              <p className="text-[12px] font-mono text-zinc-600 leading-relaxed">Logic board status, battery health cycles, and deep sensor checks included.</p>
            </motion.div>
          </div>

          {/* Bento Box 4: Hardware Photos */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-3 border-b border-r border-dashed border-black/10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-16 relative overflow-hidden bg-white text-black"
          >
             <span className="absolute top-4 left-4 text-[10px] font-mono tracking-widest text-zinc-400 uppercase">+ HARDWARE</span>
             
             <div className="max-w-xl relative z-10 mt-6 md:mt-0">
               <h4 className="text-3xl font-[900] uppercase text-black mb-4 tracking-tighter">HIGH-RES HARDWARE INSPECTION</h4>
               <p className="text-sm font-mono text-zinc-600 leading-relaxed">We capture visual evidence of screws, casing, seals, and water damage indicators. No hidden cracks, no surprises. What you see is exactly what was verified.</p>
             </div>

             {/* Interactive GridDistortion Image */}
             <div className="relative w-full md:w-[500px] lg:w-[700px] h-80 md:h-[500px] lg:h-[600px] bg-black rounded-none overflow-hidden shrink-0 z-10 flex items-center justify-center border border-black/10">
                <GridDistortion
                  imageSrc="/hardware_inspection.png"
                  grid={15}
                  mouse={0.1}
                  strength={0.15}
                  relaxation={0.9}
                  className="w-full h-full object-cover opacity-90"
                />
               {/* Abstract camera UI viewfinder overlay */}
               <div className="absolute inset-0 p-4 flex flex-col items-center justify-center pointer-events-none">
                 <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-red-500" />
                 <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-red-500" />
                 <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-red-500" />
                 <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-red-500" />
               </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
