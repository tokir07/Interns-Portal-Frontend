import type { ReactNode } from 'react';
import { Card } from './Card';
import { Search, Filter, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface DataTableProps {
  title: string;
  description?: string;
  children: ReactNode;
  searchPlaceholder?: string;
  actionButton?: ReactNode;
}

export const DataTable = ({ title, description, children, searchPlaceholder = "Search records...", actionButton }: DataTableProps) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden">
      <div className="p-5 border-b border-[#E5E7EB] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>
          {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder={searchPlaceholder}
              className="w-full bg-[#F5F7FA] border border-[#E5E7EB] rounded-lg pl-9 pr-4 py-2 text-sm focus:ring-2 focus:ring-[#04376C]/20 focus:border-[#04376C] focus:bg-white transition-all outline-none text-gray-900 placeholder-gray-400"
            />
          </div>
          
          <button className="flex items-center px-3 py-2 bg-white border border-[#E5E7EB] rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shrink-0">
            <Filter className="w-4 h-4 mr-2 text-gray-400" />
            Filters
            <ChevronDown className="w-3 h-3 ml-2 text-gray-400" />
          </button>
          
          {actionButton}
        </div>
      </div>
      
      <div className="flex-1 overflow-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          {children}
        </table>
      </div>
      
      <div className="p-4 border-t border-[#E5E7EB] flex items-center justify-between text-sm">
        <span className="text-gray-500">Showing 1 to 10 of 42 entries</span>
        <div className="flex items-center space-x-1">
          <button className="p-1 rounded hover:bg-gray-100 text-gray-500 disabled:opacity-50"><ChevronLeft className="w-5 h-5" /></button>
          <button className="px-3 py-1 rounded bg-[#04376C] text-white font-medium">1</button>
          <button className="px-3 py-1 rounded hover:bg-gray-100 text-gray-600 font-medium">2</button>
          <button className="px-3 py-1 rounded hover:bg-gray-100 text-gray-600 font-medium">3</button>
          <button className="p-1 rounded hover:bg-gray-100 text-gray-500"><ChevronRight className="w-5 h-5" /></button>
        </div>
      </div>
    </Card>
  );
};

export const Th = ({ children, className }: { children: ReactNode; className?: string }) => (
  <th className={cn("px-6 py-4 font-semibold text-gray-600 bg-gray-50 border-b border-[#E5E7EB] uppercase tracking-wider text-xs sticky top-0 z-10", className)}>
    {children}
  </th>
);

export const Td = ({ children, className }: { children: ReactNode; className?: string }) => (
  <td className={cn("px-6 py-4 text-gray-900 border-b border-[#E5E7EB]", className)}>
    {children}
  </td>
);
