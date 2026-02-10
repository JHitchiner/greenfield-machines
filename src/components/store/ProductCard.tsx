import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Machine } from '@/lib/machine-data';
import { motion } from 'framer-motion';
interface ProductCardProps {
  machine: Machine;
  onAddToCart: (id: string) => void;
}
export function ProductCard({ machine, onAddToCart }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="overflow-hidden h-full flex flex-col group border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500">
        <CardHeader className="p-0 overflow-hidden relative aspect-[4/3]">
          <img
            src={machine.image}
            alt={machine.name}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute top-3 left-3">
            <Badge className="bg-emerald-600 text-white backdrop-blur-sm border-none shadow-lg">
              {machine.category}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-5 flex-grow">
          <h3 className="text-lg font-display font-bold mb-2 line-clamp-1 group-hover:text-emerald-600 transition-colors duration-300">
            {machine.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
            {machine.description}
          </p>
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(machine.specs).slice(0, 2).map(([key, value]) => (
              <div key={key} className="bg-emerald-50/80 dark:bg-emerald-950/30 p-2 rounded border border-emerald-100/50 dark:border-emerald-800/50">
                <span className="block text-[10px] uppercase tracking-wider text-muted-foreground font-bold">{key}</span>
                <span className="text-xs font-mono font-semibold truncate">{value}</span>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-5 pt-0 flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground font-bold uppercase tracking-tighter">Starting at</span>
            <span className="text-xl font-bold font-display text-emerald-600 dark:text-emerald-400">
              ${machine.price.toLocaleString()}
            </span>
          </div>
          <Button
            onClick={() => onAddToCart(machine.id)}
            size="sm"
            className="rounded-full btn-gradient shadow-md hover:shadow-emerald-500/20 h-9"
          >
            Add to Quote
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}