import { NavLink } from 'react-router-dom';
import { useSidebarStore } from '../../store/useSidebarStore';
import { useAuthStore } from '../../store/useAuthStore';
import { cn } from '../../utils/cn';
import { 
  LayoutDashboard, 
  FolderKanban, 
  CalendarCheck, 
  PlaneTakeoff,
  Users,
  BellRing,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Settings
} from 'lucide-react';

export const Sidebar = () => {
  const { isOpen, toggle } = useSidebarStore();
  const { user, logout } = useAuthStore();
  const role = user?.role || 'intern';

  const links = {
    intern: [
      { name: 'Dashboard', path: '/intern/dashboard', icon: LayoutDashboard },
      { name: 'Projects', path: '/intern/projects', icon: FolderKanban },
      { name: 'Calendar', path: '/intern/calendar', icon: CalendarCheck },
      { name: 'Events & Trips', path: '/intern/events', icon: PlaneTakeoff },
    ],
    faculty: [
      { name: 'Overview', path: '/faculty/dashboard', icon: LayoutDashboard },
      { name: 'Interns', path: '/faculty/interns', icon: Users },
      { name: 'Projects', path: '/faculty/projects', icon: FolderKanban },
      { name: 'Reviews', path: '/faculty/reviews', icon: CalendarCheck },
    ],
    admin: [
      { name: 'Analytics', path: '/admin/dashboard', icon: LayoutDashboard },
      { name: 'Interns', path: '/admin/interns', icon: Users },
      { name: 'Faculty', path: '/admin/faculty', icon: Users },
      { name: 'Announcements', path: '/admin/announcements', icon: BellRing },
    ],
  };

  const navLinks = links[role as keyof typeof links] || [];

  return (
    <div className={cn(
      "relative h-full flex flex-col bg-white text-gray-700 overflow-hidden border-r border-[#E5E7EB] transition-all duration-300",
      isOpen ? "w-[280px]" : "w-[80px]"
    )}>
      {/* Dedicated Branding Section */}
      <div className="flex items-center justify-center shrink-0 py-8 px-6 border-b border-[#E5E7EB] bg-[#F8FAFC]">
        {isOpen ? (
          <div className="flex flex-col items-center justify-center w-full">
            <img 
              src="/logo-vertical.png" 
              alt="IAESTE Logo" 
              className="w-32 object-contain drop-shadow-sm transition-transform hover:scale-105 duration-300" 
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
                (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
              }} 
            />
            <div className="hidden w-16 h-16 rounded-full bg-[#04376C] flex items-center justify-center text-white font-black text-2xl mb-4 shadow-sm">
              IA
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <img 
              src="/logo-vertical.png" 
              alt="Logo Icon" 
              className="w-10 h-10 object-contain drop-shadow-sm transition-transform hover:scale-110 duration-300" 
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
                (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
              }} 
            />
            <div className="hidden w-10 h-10 rounded-xl bg-[#04376C] flex items-center justify-center shrink-0 text-white font-bold text-sm shadow-sm">
              IA
            </div>
          </div>
        )}
      </div>

      <div className="px-6 py-5 text-xs font-semibold text-gray-400 tracking-wider">
        {isOpen ? 'MAIN MENU' : '···'}
      </div>

      <nav className="flex-1 overflow-y-auto px-4 space-y-1.5 scrollbar-hide">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              cn(
                'flex items-center px-4 py-3 rounded-xl transition-all duration-200 group relative font-medium',
                isActive 
                  ? 'bg-[#04376C] text-white shadow-md' 
                  : 'text-[#374151] hover:bg-[#F5F7FA] hover:text-[#0A4D8C]'
              )
            }
            title={!isOpen ? link.name : undefined}
          >
            <link.icon className={cn('w-5 h-5 shrink-0 transition-colors', isOpen ? 'mr-3' : 'mx-auto', "group-hover:text-[#0A4D8C]")} />
            {isOpen && <span className="truncate">{link.name}</span>}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-[#E5E7EB] space-y-2">
        <button 
          className={cn(
            'w-full flex items-center px-4 py-3 rounded-xl transition-all duration-200 font-medium text-[#374151] hover:bg-[#F5F7FA] hover:text-[#0A4D8C]'
          )}
          title={!isOpen ? 'Settings' : undefined}
        >
          <Settings className={cn('w-5 h-5 shrink-0', isOpen ? 'mr-3' : 'mx-auto')} />
          {isOpen && <span className="truncate">Settings</span>}
        </button>

        <button 
          onClick={() => logout()}
          className={cn(
            'w-full flex items-center px-4 py-3 rounded-xl transition-all duration-200 font-medium text-red-600 hover:bg-red-50 hover:text-red-700'
          )}
          title={!isOpen ? 'Logout' : undefined}
        >
          <LogOut className={cn('w-5 h-5 shrink-0', isOpen ? 'mr-3' : 'mx-auto')} />
          {isOpen && <span className="truncate">Logout</span>}
        </button>
      </div>

      {/* Collapse Toggle */}
      <button 
        onClick={toggle}
        className="absolute -right-3 top-20 bg-white border border-[#E5E7EB] rounded-full p-1 text-gray-400 hover:text-gray-600 shadow-sm z-10 md:flex hidden"
      >
        {isOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
      </button>
    </div>
  );
};
