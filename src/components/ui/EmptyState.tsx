import { Card } from './Card';
import { Button } from './Button';
import { FolderX } from 'lucide-react';

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: React.ElementType;
  actionLabel?: string;
  onAction?: () => void;
}

export const EmptyState = ({ 
  title, 
  description, 
  icon: Icon = FolderX,
  actionLabel,
  onAction
}: EmptyStateProps) => {
  return (
    <Card className="flex flex-col items-center justify-center p-12 text-center min-h-[300px]">
      <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-gray-400" strokeWidth={1.5} />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 max-w-sm mx-auto mb-6">
        {description}
      </p>
      {actionLabel && onAction && (
        <Button onClick={onAction} className="bg-[#04376C] hover:bg-[#0A4D8C] text-white">
          {actionLabel}
        </Button>
      )}
    </Card>
  );
};
