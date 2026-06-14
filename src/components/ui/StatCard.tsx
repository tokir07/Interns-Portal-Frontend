import { Card } from './Card';
import { cn } from '../../utils/cn';

export interface StatCardProps {
  label: string;
  value: string | number;
  icon: React.ElementType;
  trend?: string;
  trendText?: string;
  trendUp?: boolean;
}

export const StatCard = ({ label, value, icon: Icon, trend, trendText, trendUp = true }: StatCardProps) => {
  return (
    <Card hoverEffect className="p-6 flex flex-col justify-between h-full group">
      <div className="flex justify-between items-start mb-4">
        <div className="space-y-1">
          <h3 className="text-sm font-medium text-gray-500">{label}</h3>
          <p className="text-3xl font-bold text-gray-900 tracking-tight">{value}</p>
        </div>
        <div className="w-12 h-12 rounded-xl bg-[#F5F7FA] flex items-center justify-center transition-colors group-hover:bg-[#04376C]/5">
          <Icon className="w-6 h-6 text-[#04376C]" strokeWidth={2} />
        </div>
      </div>
      
      {(trend || trendText) && (
        <div className="text-xs font-medium flex items-center mt-auto pt-4 border-t border-gray-50">
          {trend && (
            <span className={cn("mr-1.5", trendUp ? "text-emerald-500" : "text-amber-500")}>
              {trend}
            </span>
          )}
          {trendText && <span className="text-gray-400">{trendText}</span>}
        </div>
      )}
    </Card>
  );
};
