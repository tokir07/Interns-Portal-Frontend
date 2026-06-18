import { useState, useRef, useEffect } from "react";
import {
  Search,
  Bell,
  Globe,
  Menu,
  ChevronDown,
  ChevronRight,
  Check,
} from "lucide-react";
import { useAuthStore } from "../../store/useAuthStore";
import { useLangStore } from "../../store/useLangStore";
import { useSidebarStore } from "../../store/useSidebarStore";
import { useNotificationStore } from "../../store/useNotificationStore";
import { useLocation, Link } from "react-router-dom";

export const TopNavbar = () => {
  const { user } = useAuthStore();
  const { language, setLanguage } = useLangStore();
  const { toggle } = useSidebarStore();
  const { notifications, markAsRead, markAllAsRead } = useNotificationStore();
  const location = useLocation();

  const [showNotifications, setShowNotifications] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);

  const notificationRef = useRef(null);
  const languageRef = useRef(null);

  // Handle clicking outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setShowLanguages(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Generate breadcrumbs from path
  const pathnames = location.pathname.split("/").filter((x) => x);
  const unreadCount = notifications.filter((n) => !n.read).length;

  const languagesList = [
    { code: "en", name: "English" },
    { code: "de", name: "German" },
    { code: "fr", name: "French" },
    { code: "es", name: "Spanish" },
  ];

  return (
    <div className="h-[70px] w-full bg-card text-foreground border-b border-border flex items-center justify-between px-4 sm:px-6 z-10 shrink-0">
      {/* Left: Mobile Menu & Breadcrumbs */}
      <div className="flex items-center space-x-2">
        <button
          onClick={toggle}
          className="md:hidden p-2 rounded-lg text-text-secondary hover:bg-slate-100"
        >
          <Menu className="w-5 h-5" />
        </button>

        <nav className="hidden sm:flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-1.5 text-xs text-text-secondary">
            <li>
              <span className="font-semibold text-text-primary capitalize">
                IAESTE Portal
              </span>
            </li>
            {pathnames.map((name, index) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
              const isLast = index === pathnames.length - 1;
              return (
                <li key={name} className="flex items-center space-x-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-text-secondary" />
                  {isLast ? (
                    <span className="font-bold text-text-primary capitalize">
                      {name.replace("-", " ")}
                    </span>
                  ) : (
                    <Link
                      to={routeTo}
                      className="hover:text-text-primary capitalize"
                    >
                      {name.replace("-", " ")}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>

      {/* Center: Search */}
      <div className="flex-1 flex justify-center px-4 max-w-2xl">
        <div className="relative w-full max-w-md group hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary group-focus-within:text-[#0b3d59]" />
          <input
            type="text"
            placeholder="Search guides, events, tickets or files..."
            className="w-full bg-[#F5F7FA] border border-border rounded-xl pl-10 pr-4 py-1.5 text-xs focus:ring-2 focus:ring-[#0b3d59]/10 focus:border-[#0b3d59] focus:bg-card transition-all outline-none placeholder-text-secondary"
          />
        </div>
      </div>

      {/* Right: Actions & Profile */}
      <div className="flex items-center space-x-1 sm:space-x-3">
        {/* Language Switcher */}
        <div className="relative" ref={languageRef}>
          <button
            onClick={() => setShowLanguages(!showLanguages)}
            className="p-2 rounded-xl hover:bg-slate-100 text-text-secondary transition-colors flex items-center space-x-1"
            title="Language selection"
          >
            <Globe className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase">{language}</span>
          </button>

          {showLanguages && (
            <div className="absolute right-0 mt-2 w-36 bg-card border border-border rounded-xl shadow-lg py-1 z-50 text-xs">
              {languagesList.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setShowLanguages(false);
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 text-left hover:bg-slate-100 transition-colors"
                >
                  <span className="font-medium">{lang.name}</span>
                  {language === lang.code && (
                    <Check className="w-3.5 h-3.5 text-green-500" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Notifications */}
        <div className="relative" ref={notificationRef}>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 rounded-xl hover:bg-slate-100 text-text-secondary transition-colors"
          >
            <Bell className="w-4 h-4" />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-[#EF4444] rounded-full text-[9px] font-bold text-white flex items-center justify-center border border-card">
                {unreadCount}
              </span>
            )}
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-card border border-border rounded-xl shadow-lg z-50 overflow-hidden text-xs">
              <div className="px-4 py-3 border-b border-border flex justify-between items-center bg-slate-50">
                <span className="font-bold text-text-primary">Notifications</span>
                {unreadCount > 0 && (
                  <button
                    onClick={() => markAllAsRead()}
                    className="text-[10px] text-[#0b3d59] hover:underline font-bold"
                  >
                    Mark all as read
                  </button>
                )}
              </div>
              <div className="max-h-72 overflow-y-auto divide-y divide-border">
                {notifications.length === 0 ? (
                  <div className="p-4 text-center text-text-secondary">
                    No new notifications
                  </div>
                ) : (
                  notifications.map((notif) => (
                    <div
                      key={notif.id}
                      onClick={() => markAsRead(notif.id)}
                      className={`p-3 hover:bg-slate-100 transition-colors cursor-pointer ${
                        !notif.read ? "bg-slate-50/70" : ""
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <span className={`font-bold ${!notif.read ? "text-text-primary" : "text-text-secondary"}`}>
                          {notif.title}
                        </span>
                        <span className="text-[9px] text-text-secondary shrink-0 ml-2">
                          {notif.time}
                        </span>
                      </div>
                      <p className="text-text-secondary mt-1 leading-relaxed text-[11px]">
                        {notif.message}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        {/* Vertical Divider */}
        <div className="w-px h-6 bg-border mx-1"></div>

        {/* Profile */}
        <Link
          to="/profile"
          className="flex items-center space-x-2 cursor-pointer p-1 rounded-xl hover:bg-slate-100 transition-colors"
        >
          <div className="h-8 w-8 rounded-full bg-[#0b3d59] text-white flex items-center justify-center font-bold text-xs shrink-0">
            {user?.name ? user.name.substring(0, 2).toUpperCase() : "SM"}
          </div>
          <div className="hidden md:flex flex-col text-left">
            <span className="text-xs font-bold text-text-primary leading-tight">
              {user?.name?.split(" ")[0]}
            </span>
            <span className="text-[10px] text-text-secondary font-medium">
              Intern
            </span>
          </div>
          <ChevronDown className="w-3.5 h-3.5 text-text-secondary hidden md:block" />
        </Link>
      </div>
    </div>
  );
};
