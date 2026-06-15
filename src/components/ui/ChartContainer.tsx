import type { ReactNode } from 'react';
import { Card } from './Card';
import { MoreHorizontal } from 'lucide-react';

export interface ChartContainerProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  action?: ReactNode;
}

export const ChartContainer = ({ title, subtitle, children, action }: ChartContainerProps) => {
  return (
    <Card className="flex flex-col h-full p-6">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>
          {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
        </div>
        {action || (
          <button className="p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        )}
      </div>
      <div className="flex-1 w-full min-h-[300px]">
        {children}
      </div>
    </Card>
  );
};
