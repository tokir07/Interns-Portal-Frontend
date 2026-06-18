import { StatCard } from "../../components/ui/StatCard";
import { Card } from "../../components/ui/Card";
import { ProgressBar } from "../../components/ui/ProgressBar";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { useAuthStore } from "../../store/useAuthStore";
import {
  FolderKanban,
  Calendar,
  Plane,
  CheckSquare,
  Clock,
  MoreVertical,
  CalendarDays,
} from "lucide-react";

export const InternDashboard = () => {
  const { user } = useAuthStore();

  const stats = [
    {
      label: "Active Projects",
      value: "2",
      icon: FolderKanban,
      trend: "On track",
      trendUp: true,
    },
    {
      label: "Upcoming Events",
      value: "3",
      icon: Calendar,
      trend: "Next: Friday",
      trendUp: true,
    },
    {
      label: "Upcoming Trips",
      value: "1",
      icon: Plane,
      trend: "Zurich, CH",
      trendUp: true,
    },
    {
      label: "Pending Tasks",
      value: "8",
      icon: CheckSquare,
      trend: "3 due today",
      trendUp: false,
    },
  ];

  return (
    <div className="space-y-6 pb-10">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-[#04376C] to-[#0A4D8C] rounded-2xl p-8 text-white shadow-[0_10px_30px_rgba(4,55,108,0.15)] flex flex-col md:flex-row justify-between items-start md:items-center relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            Welcome Back, {user?.name?.split(" ")[0] || "Intern"}!
          </h1>
          <p className="text-[#7BAAF7] font-medium flex items-center">
            <span className="bg-white/10 px-2.5 py-1 rounded-md text-xs uppercase tracking-wider font-bold text-white mr-3">
              IAESTE Program
            </span>
            Keep up the great work on your current projects.
          </p>
        </div>

        {/* Abstract shapes for branding without glassmorphism */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden rounded-2xl">
          <div className="absolute -top-24 -right-10 w-96 h-96 bg-white opacity-[0.03] rounded-full"></div>
          <div className="absolute top-20 right-40 w-48 h-48 bg-[#1E6FD9] opacity-20 rounded-full"></div>
        </div>
      </div>

      {/* Top KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (Span 2) - Current Projects */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-bold text-[#1F2937]">
              Current Projects
            </h2>
            <Button variant="ghost" size="sm" className="text-[#04376C]">
              View All
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Smart City Data Infrastructure",
                status: "In Progress",
                progress: 65,
                dueDate: "Oct 30, 2026",
                mentor: "Dr. Sarah Jenkins",
              },
              {
                title: "Predictive Traffic Modeling",
                status: "Review",
                progress: 90,
                dueDate: "Nov 15, 2026",
                mentor: "Prof. David Chen",
              },
            ].map((project, i) => (
              <Card
                key={i}
                hoverEffect
                className="p-6 flex flex-col border border-[#E5E7EB]"
              >
                <div className="flex justify-between items-start mb-4">
                  <Badge
                    variant={
                      project.status === "In Progress" ? "info" : "warning"
                    }
                  >
                    {project.status}
                  </Badge>
                  <button className="text-[#6B7280] hover:text-[#1F2937] transition-colors">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-[#1F2937] leading-tight mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] flex items-center font-medium">
                    Mentor: {project.mentor}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-[#1F2937]">
                      Progress
                    </span>
                    <span className="text-sm font-bold text-[#04376C]">
                      {project.progress}%
                    </span>
                  </div>
                  <ProgressBar
                    progress={project.progress}
                    className="h-2.5"
                    colorClass="bg-[#04376C]"
                  />
                </div>

                <div className="mt-auto pt-4 border-t border-[#E5E7EB] flex justify-between items-center">
                  <span className="flex items-center text-sm font-medium text-[#6B7280]">
                    <Clock className="w-4 h-4 mr-1.5" /> Due: {project.dueDate}
                  </span>
                  <Button variant="secondary" size="sm">
                    Workspace
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Right Column (Span 1) - Next Up Timeline */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="p-6 border border-[#E5E7EB] h-full">
            <h3 className="text-lg font-bold text-[#1F2937] mb-6 flex items-center">
              <CalendarDays className="w-5 h-5 mr-2 text-[#04376C]" />
              Next Up
            </h3>

            <div className="space-y-6">
              {[
                {
                  title: "Weekly Mentor Meeting",
                  desc: "Sync with Dr. Sarah Jenkins",
                  time: "Tomorrow, 10:00 AM",
                  type: "meeting",
                  color: "bg-[#1E6FD9]",
                },
                {
                  title: "Zurich Tech Hub Visit",
                  desc: "IAESTE Local Committee Trip",
                  time: "Friday, 08:00 AM",
                  type: "event",
                  color: "bg-[#F59E0B]",
                },
                {
                  title: "Project Proposal Due",
                  desc: "Phase 2 Architecture Document",
                  time: "Oct 20, 11:59 PM",
                  type: "deadline",
                  color: "bg-[#EF4444]",
                },
              ].map((item, i) => (
                <div key={i} className="flex relative pl-5">
                  <div
                    className={`absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full ${item.color} shadow-sm`}
                  ></div>
                  <div className="absolute left-[4px] top-5 bottom-[-18px] w-px bg-[#E5E7EB] last:hidden"></div>

                  <div>
                    <h4 className="text-sm font-bold text-[#1F2937]">
                      {item.title}
                    </h4>
                    <p className="text-xs font-medium text-[#04376C] mt-0.5">
                      {item.desc}
                    </p>
                    <div className="flex items-center text-xs text-[#6B7280] font-medium mt-1.5">
                      <Clock className="w-3.5 h-3.5 mr-1" />
                      {item.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="secondary" className="w-full mt-8">
              View Full Calendar
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};
