import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Activity, Settings2, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
export function HeroSection() {
  const scrollToCatalog = () => {
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="relative overflow-hidden bg-slate-950 py-24 sm:py-32">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600 rounded-full blur-[128px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-6 bg-emerald-900/40 text-emerald-400 border-emerald-800 hover:bg-emerald-900/60">
              New Series Release 2025
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-display text-white mb-6"
          >
            Engineering the <br />
            <span className="text-emerald-500">Greenfield Precision</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 text-pretty"
          >
            Deploy next-generation industrial automation with Greenfield Machines. High-performance machinery designed for the most demanding environments on Earth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" onClick={scrollToCatalog} className="btn-gradient px-8 h-12 text-lg">
              Explore Catalog <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-slate-700 text-white hover:bg-slate-800 px-8 h-12">
              View Specs
            </Button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          <div className="flex items-center gap-4 p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
            <div className="p-3 bg-slate-800 rounded-xl text-emerald-500"><Activity className="h-6 w-6" /></div>
            <div>
              <h3 className="text-white font-semibold">99.9% Uptime</h3>
              <p className="text-slate-500 text-sm">Industrial reliability guaranteed.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
            <div className="p-3 bg-slate-800 rounded-xl text-emerald-500"><Settings2 className="h-6 w-6" /></div>
            <div>
              <h3 className="text-white font-semibold">Smart Controls</h3>
              <p className="text-slate-500 text-sm">IoT-enabled remote monitoring.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
            <div className="p-3 bg-slate-800 rounded-xl text-emerald-500"><Shield className="h-6 w-6" /></div>
            <div>
              <h3 className="text-white font-semibold">Global Support</h3>
              <p className="text-slate-500 text-sm">24/7 technical field assistance.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}