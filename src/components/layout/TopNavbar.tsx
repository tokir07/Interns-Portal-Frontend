import { Search, Bell, Globe, Menu, ChevronDown, ChevronRight } from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';
import { useLangStore } from '../../store/useLangStore';
import { useSidebarStore } from '../../store/useSidebarStore';
import { useLocation } from 'react-router-dom';

export const TopNavbar = () => {
  const { user } = useAuthStore();
  const { language, setLanguage } = useLangStore();
  const { toggle } = useSidebarStore();
  const location = useLocation();

  // Generate simple breadcrumbs from path
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div className="h-[70px] w-full bg-white border-b border-[#E5E7EB] flex items-center justify-between px-4 sm:px-6 z-10 shrink-0">
      
      {/* Left: Mobile Menu & Breadcrumbs */}
      <div className="flex items-center">
        <button 
          onClick={toggle}
          className="md:hidden p-2 mr-2 -ml-2 rounded-lg text-gray-500 hover:bg-gray-100"
        >
          <Menu className="w-5 h-5" />
        </button>

        <nav className="hidden sm:flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><span className="font-medium text-[#04376C] capitalize">{user?.role || 'Home'}</span></li>
            {pathnames.length > 1 && (
              <>
                <li><ChevronRight className="w-4 h-4 text-gray-400" /></li>
                <li><span className="font-semibold text-gray-900 capitalize">{pathnames[pathnames.length - 1]}</span></li>
              </>
            )}
          </ol>
        </nav>
      </div>

      {/* Center: Search */}
      <div className="flex-1 flex justify-center px-4 max-w-2xl">
        <div className="relative w-full max-w-md group hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#04376C]" />
          <input 
            type="text" 
            placeholder="Search internships, students, or faculty..." 
            className="w-full bg-[#F5F7FA] border border-[#E5E7EB] rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-[#04376C]/20 focus:border-[#04376C] focus:bg-white transition-all outline-none text-[#1F2937] placeholder-gray-400"
          />
        </div>
      </div>

      {/* Right: Actions & Profile */}
      <div className="flex items-center space-x-2 sm:space-x-4">
        
        {/* Language Switcher */}
        <button 
          onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
          className="p-2 rounded-lg hover:bg-[#F5F7FA] text-gray-500 transition-colors hidden sm:flex items-center space-x-1"
          title="Switch Language"
        >
          <Globe className="w-5 h-5" />
          <span className="text-xs font-semibold uppercase">{language}</span>
        </button>

        {/* Notifications */}
        <button className="relative p-2 rounded-lg hover:bg-[#F5F7FA] text-gray-500 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#EF4444] rounded-full border border-white"></span>
        </button>

        {/* Vertical Divider */}
        <div className="w-px h-8 bg-[#E5E7EB] mx-1"></div>

        {/* Profile */}
        <div className="flex items-center space-x-3 cursor-pointer p-1.5 rounded-lg hover:bg-[#F5F7FA] transition-colors">
          <div className="hidden md:flex flex-col items-end text-sm">
            <span className="font-bold text-[#1F2937]">{user?.name?.split(' ')[0]} {user?.name?.split(' ')[1]}</span>
            <span className="text-xs text-[#6B7280] capitalize">{user?.role}</span>
          </div>
          <div className="h-9 w-9 rounded-full bg-[#04376C] flex items-center justify-center text-white font-bold text-sm shrink-0">
            {user?.name ? user.name.substring(0, 2).toUpperCase() : 'IA'}
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400 hidden md:block" />
        </div>

      </div>
    </div>
  );
};
