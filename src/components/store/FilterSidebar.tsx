import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { CATEGORIES } from '@/lib/machine-data';
export interface FilterState {
  categories: string[];
  priceRange: [number, number];
}
interface FilterSidebarProps {
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
}
export function FilterSidebar({ filters, setFilters }: FilterSidebarProps) {
  const toggleCategory = (category: string) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter((c) => c !== category)
      : [...filters.categories, category];
    setFilters({ ...filters, categories: newCategories });
  };
  const handlePriceChange = (value: number[]) => {
    setFilters({ ...filters, priceRange: [value[0], value[1]] });
  };
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
          Filters
        </h3>
        <Accordion type="multiple" defaultValue={["categories", "price"]} className="w-full">
          <AccordionItem value="categories">
            <AccordionTrigger className="text-sm font-medium">Categories</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 pt-2">
                {CATEGORIES.map((category) => (
                  <div key={category} className="flex items-center space-x-3">
                    <Checkbox
                      id={category}
                      checked={filters.categories.includes(category)}
                      onCheckedChange={() => toggleCategory(category)}
                    />
                    <Label
                      htmlFor={category}
                      className="text-sm font-normal cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {category}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="price">
            <AccordionTrigger className="text-sm font-medium">Price Range</AccordionTrigger>
            <AccordionContent>
              <div className="pt-4 px-1 space-y-6">
                <Slider
                  defaultValue={[filters.priceRange[0], filters.priceRange[1]]}
                  max={250000}
                  step={5000}
                  onValueChange={handlePriceChange}
                />
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono bg-secondary px-2 py-1 rounded">
                    ${filters.priceRange[0].toLocaleString()}
                  </span>
                  <span className="text-xs font-mono bg-secondary px-2 py-1 rounded">
                    ${filters.priceRange[1].toLocaleString()}
                  </span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-xl border border-amber-100 dark:border-amber-900/50">
        <h4 className="text-xs font-bold text-amber-800 dark:text-amber-500 uppercase mb-2">Technical Assistance</h4>
        <p className="text-xs text-amber-700/80 dark:text-amber-500/80">Need a custom configuration? Our engineering team is ready to assist.</p>
        <button className="mt-3 text-xs font-bold text-amber-900 dark:text-amber-400 hover:underline">
          Contact Expert ��
        </button>
      </div>
    </div>
  );
}