import React from 'react';
import { ShieldCheck, FileText, ArrowRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
interface QuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
export function QuoteModal({ open, onOpenChange }: QuoteModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px] p-0 overflow-hidden border-slate-200 dark:border-slate-800">
        <div className="bg-slate-950 p-10 flex flex-col items-center text-center relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary" />
          <div className="mb-6 p-4 bg-emerald-500/10 rounded-full">
            <ShieldCheck className="h-12 w-12 text-emerald-500" />
          </div>
          <DialogHeader>
            <DialogTitle className="text-3xl font-display font-bold text-white mb-2">
              Request Processing
            </DialogTitle>
            <DialogDescription className="text-slate-400 text-lg">
              Continue to Greenfield secure portal...
            </DialogDescription>
          </DialogHeader>
        </div>
        <div className="p-8 space-y-6">
          <div className="flex gap-4 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/50">
            <div className="mt-1">
              <FileText className="h-5 w-5 text-emerald-600" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold uppercase tracking-tight">Technical Review Required</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Greenfield equipment often requires custom configurations. Our engineers will review your request and contact you within 4 business hours with a finalized quote and lead times.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Button className="btn-gradient w-full h-12 text-md group" onClick={() => onOpenChange(false)}>
              Proceed to Dashboard <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="ghost" className="w-full hover:bg-emerald-50 dark:hover:bg-emerald-950/20" onClick={() => onOpenChange(false)}>
              Back to Catalog
            </Button>
          </div>
        </div>
        <div className="p-4 bg-emerald-50/50 dark:bg-emerald-900/10 text-center border-t border-emerald-100 dark:border-emerald-800">
          <p className="text-[10px] uppercase tracking-widest text-emerald-800/60 dark:text-emerald-400/60 font-bold">
            GREENFIELD SECURE PROCUREMENT PORTAL
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}