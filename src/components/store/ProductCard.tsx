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
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="overflow-hidden h-full flex flex-col group border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300">
        <CardHeader className="p-0 overflow-hidden relative aspect-[4/3]">
          <img
            src={machine.image}
            alt={machine.name}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3">
            <Badge className="bg-emerald-500/90 text-white backdrop-blur-sm border-none">
              {machine.category}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-5 flex-grow">
          <h3 className="text-lg font-display font-bold mb-2 line-clamp-1 group-hover:text-emerald-600 transition-colors">
            {machine.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {machine.description}
          </p>
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(machine.specs).slice(0, 2).map(([key, value]) => (
              <div key={key} className="bg-emerald-50 dark:bg-emerald-950/20 p-2 rounded border border-emerald-100/50 dark:border-emerald-800/50">
                <span className="block text-[10px] uppercase tracking-wider text-muted-foreground">{key}</span>
                <span className="text-xs font-mono font-medium truncate">{value}</span>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-5 pt-0 flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-tighter">Starting at</span>
            <span className="text-xl font-bold font-display text-emerald-700 dark:text-emerald-500">
              ${machine.price.toLocaleString()}
            </span>
          </div>
          <Button
            onClick={() => onAddToCart(machine.id)}
            size="sm"
            className="rounded-full bg-slate-900 dark:bg-emerald-500 dark:text-slate-900 hover:bg-emerald-600 dark:hover:bg-emerald-400 transition-colors"
          >
            Add to Quote
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}