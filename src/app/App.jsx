import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { Suspense, lazy } from "react";

// Layout shells
import { DashboardLayout } from "../layouts/DashboardLayout";
import { AuthLayout } from "../layouts/AuthLayout";

// Eager load Login for fast boot
import Login from "../features/auth/Login";

// Lazy load the 13 intern feature modules
const Dashboard = lazy(() => import("../features/dashboard/Dashboard").then(m => ({ default: m.Dashboard })));
const MyInternship = lazy(() => import("../features/internship/MyInternship").then(m => ({ default: m.MyInternship })));
const Tasks = lazy(() => import("../features/tasks/Tasks").then(m => ({ default: m.Tasks })));
const Calendar = lazy(() => import("../features/calendar/Calendar").then(m => ({ default: m.Calendar })));
const Events = lazy(() => import("../features/events/Events").then(m => ({ default: m.Events })));
const Trips = lazy(() => import("../features/trips/Trips").then(m => ({ default: m.Trips })));
const Announcements = lazy(() => import("../features/announcements/Announcements").then(m => ({ default: m.Announcements })));
const Documents = lazy(() => import("../features/documents/Documents").then(m => ({ default: m.Documents })));
const Accommodation = lazy(() => import("../features/accommodation/Accommodation").then(m => ({ default: m.Accommodation })));
const Culture = lazy(() => import("../features/culture/Culture").then(m => ({ default: m.Culture })));
const Emergency = lazy(() => import("../features/emergency/Emergency").then(m => ({ default: m.Emergency })));
const Profile = lazy(() => import("../features/profile/Profile").then(m => ({ default: m.Profile })));

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuthStore();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

// Full screen fallback page loader
const PageLoader = () => (
  <div className="flex h-screen w-screen items-center justify-center bg-background text-foreground">
    <div className="flex flex-col items-center">
      <div className="w-10 h-10 rounded-full border-4 border-slate-200 dark:border-slate-800 border-t-[#04376C] dark:border-t-[#1E6FD9] animate-spin mb-4"></div>
      <p className="text-xs font-semibold text-text-secondary">
        Loading IAESTE SEP Portal...
      </p>
    </div>
  </div>
);

export const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Auth Route */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
          </Route>

          {/* Protected Dashboard Routes */}
          <Route
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/internship" element={<MyInternship />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/events" element={<Events />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/accommodation" element={<Accommodation />} />
            <Route path="/culture" element={<Culture />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/profile" element={<Profile />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
