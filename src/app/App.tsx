import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { Suspense, lazy } from 'react';

// Eagerly loaded for performance
import { DashboardLayout } from '../layouts/DashboardLayout';
import { Login } from '../features/auth/Login';

// Lazy loaded feature modules
const InternDashboard = lazy(() => import('../features/dashboard/InternDashboard').then(module => ({ default: module.InternDashboard })));
const ProjectTracker = lazy(() => import('../features/projects/ProjectTracker').then(module => ({ default: module.ProjectTracker })));
const SmartCalendar = lazy(() => import('../features/calendar/SmartCalendar').then(module => ({ default: module.SmartCalendar })));
const EventsTrips = lazy(() => import('../features/events/EventsTrips').then(module => ({ default: module.EventsTrips })));

const FacultyDashboard = lazy(() => import('../features/dashboard/FacultyDashboard').then(module => ({ default: module.FacultyDashboard })));
const InternMonitoring = lazy(() => import('../features/dashboard/InternMonitoring').then(module => ({ default: module.InternMonitoring })));
const ProjectKanban = lazy(() => import('../features/projects/ProjectKanban').then(module => ({ default: module.ProjectKanban })));
const SubmissionReview = lazy(() => import('../features/projects/SubmissionReview').then(module => ({ default: module.SubmissionReview })));

const AdminDashboard = lazy(() => import('../features/analytics/AdminDashboard').then(module => ({ default: module.AdminDashboard })));
const Announcements = lazy(() => import('../features/announcements/Announcements').then(module => ({ default: module.Announcements })));

const ProtectedRoute = ({ children, allowedRoles }: { children: React.ReactNode, allowedRoles: string[] }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (user && !allowedRoles.includes(user.role as string)) {
    return <Navigate to={`/${user.role}/dashboard`} replace />;
  }

  return <>{children}</>;
};

// Simple full screen loader
const PageLoader = () => (
  <div className="flex h-screen w-screen items-center justify-center bg-[#F5F7FA]">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 rounded-full border-4 border-[#E5E7EB] border-t-[#04376C] animate-spin mb-4"></div>
      <p className="text-sm font-medium text-gray-500">Loading IAESTE Platform...</p>
    </div>
  </div>
);

export const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          
          <Route path="/intern" element={<ProtectedRoute allowedRoles={['intern']}><DashboardLayout /></ProtectedRoute>}>
            <Route path="dashboard" element={<InternDashboard />} />
            <Route path="projects" element={<ProjectTracker />} />
            <Route path="calendar" element={<SmartCalendar />} />
            <Route path="events" element={<EventsTrips />} />
          </Route>

          <Route path="/faculty" element={<ProtectedRoute allowedRoles={['faculty']}><DashboardLayout /></ProtectedRoute>}>
            <Route path="dashboard" element={<FacultyDashboard />} />
            <Route path="interns" element={<InternMonitoring />} />
            <Route path="projects" element={<ProjectKanban />} />
            <Route path="reviews" element={<SubmissionReview />} />
          </Route>

          <Route path="/admin" element={<ProtectedRoute allowedRoles={['admin']}><DashboardLayout /></ProtectedRoute>}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="analytics" element={<AdminDashboard />} />
            <Route path="interns" element={<InternMonitoring />} />
            <Route path="faculty" element={<div className="p-8"><div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">Faculty Management (WIP)</div></div>} />
            <Route path="announcements" element={<Announcements />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
