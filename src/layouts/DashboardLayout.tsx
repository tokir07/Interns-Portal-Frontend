import { Outlet } from 'react-router-dom';
import { useSidebarStore } from '../store/useSidebarStore';
import { Sidebar } from '../components/layout/Sidebar';
import { TopNavbar } from '../components/layout/TopNavbar';
import { cn } from '../utils/cn';

export const DashboardLayout = () => {
  const { isOpen, setIsOpen } = useSidebarStore();

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#F5F7FA]">
      
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-gray-900/50 z-40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "fixed md:relative z-50 h-full shrink-0 transition-all duration-300",
        isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      )}>
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-full">
        <TopNavbar />
        
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-[1440px] mx-auto p-4 sm:p-6 lg:p-[24px]">
            <Outlet />
          </div>
        </main>
      </div>
      
    </div>
  );
};
