import { StatCard } from '../../components/ui/StatCard';
import { Card } from '../../components/ui/Card';
import { ChartContainer } from '../../components/ui/ChartContainer';
import { DataTable, Th, Td } from '../../components/ui/DataTable';
import { Button } from '../../components/ui/Button';
import { ProgressBar } from '../../components/ui/ProgressBar';
import { useAuthStore } from '../../store/useAuthStore';
import { 
  Users, 
  FolderKanban, 
  CalendarCheck, 
  TrendingUp,
  Award,
  Clock,
  MoreHorizontal,
  ChevronRight
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const FacultyDashboard = () => {
  const { user } = useAuthStore();

  const stats = [
    { label: 'Assigned Interns', value: '24', icon: Users, trend: '+2', trendText: 'new this week', trendUp: true },
    { label: 'Active Projects', value: '8', icon: FolderKanban, trend: 'All on track', trendUp: true },
    { label: 'Pending Reviews', value: '12', icon: CalendarCheck, trend: '3 urgent', trendUp: false },
    { label: 'Avg. Completion', value: '78%', icon: TrendingUp, trend: '+5%', trendText: 'vs last month', trendUp: true },
  ];

  const chartData = [
    { month: 'Jan', performance: 65, completion: 40 },
    { month: 'Feb', performance: 70, completion: 55 },
    { month: 'Mar', performance: 75, completion: 70 },
    { month: 'Apr', performance: 82, completion: 85 },
    { month: 'May', performance: 88, completion: 92 },
  ];

  return (
    <div className="space-y-6 pb-10">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#E5E7EB] pb-5">
        <div>
          <nav className="flex items-center text-sm text-[#6B7280] mb-2 font-medium">
            <span>Faculty</span>
            <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />
            <span className="font-semibold text-[#1F2937]">Overview</span>
          </nav>
          <h1 className="text-2xl font-bold text-[#1F2937] tracking-tight uppercase">OVERVIEW</h1>
          <p className="text-[#6B7280] text-sm mt-1">
            Welcome back, {user?.name || 'Dr. Jenkins'}. You have 3 urgent reviews pending.
          </p>
        </div>
        
        <div className="flex space-x-4">
          <div className="bg-white rounded-xl p-3 border border-[#E5E7EB] flex items-center space-x-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)] min-w-[200px]">
            <div className="w-10 h-10 rounded-full bg-[#1E6FD9]/10 flex items-center justify-center">
              <Award className="w-5 h-5 text-[#1E6FD9]" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-0.5">Productivity Score</p>
              <p className="text-xl font-black text-[#04376C] leading-none">94/100</p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column (Span 2) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Chart Container */}
          <ChartContainer 
            title="Department Analytics" 
            subtitle="Intern performance vs Project completion rates"
            action={<Button variant="ghost" size="sm">Export Report</Button>}
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#6B7280', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#6B7280', fontSize: 12}} dx={-10} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: '1px solid #E5E7EB', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }} 
                />
                <Line type="monotone" dataKey="performance" stroke="#04376C" strokeWidth={3} dot={{ r: 4, fill: '#04376C' }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="completion" stroke="#1E6FD9" strokeWidth={3} dot={{ r: 4, fill: '#1E6FD9' }} />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>

          {/* Data Table */}
          <DataTable title="Review Queue" description="Pending intern evaluations and project reviews">
            <thead>
              <tr>
                <Th>Student Name</Th>
                <Th>Project Area</Th>
                <Th>Review Type</Th>
                <Th>Deadline</Th>
                <Th className="text-right">Action</Th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Alex Johnson', project: 'AI Smart City', type: 'Mid-term Eval', date: 'Today, 5:00 PM', urgent: true },
                { name: 'Maria Garcia', project: 'Robotics', type: 'Final Report', date: 'Tomorrow', urgent: false },
                { name: 'Chen Wei', project: 'Cybersecurity', type: 'Code Review', date: 'Oct 15', urgent: false },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <Td>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-[#04376C] flex items-center justify-center mr-3 text-white text-xs font-bold">
                        {row.name.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900 block">{row.name}</span>
                        {row.urgent && <span className="text-[10px] uppercase font-bold text-[#EF4444]">Urgent</span>}
                      </div>
                    </div>
                  </Td>
                  <Td className="text-gray-600 font-medium text-sm">{row.project}</Td>
                  <Td>
                    <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-[#F5F7FA] text-[#374151] border border-[#E5E7EB]">
                      {row.type}
                    </span>
                  </Td>
                  <Td className="text-gray-500 text-sm font-medium flex items-center">
                    <Clock className={`w-3.5 h-3.5 mr-1.5 ${row.urgent ? 'text-[#EF4444]' : 'text-gray-400'}`} />
                    <span className={row.urgent ? 'text-[#EF4444]' : ''}>{row.date}</span>
                  </Td>
                  <Td className="text-right">
                    <Button variant="primary" size="sm">Review</Button>
                  </Td>
                </tr>
              ))}
            </tbody>
          </DataTable>

        </div>

        {/* Right Column (Span 1) */}
        <div className="lg:col-span-1 space-y-6">
          
          {/* Top Performing Interns */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-gray-900 flex items-center">
                <Award className="w-5 h-5 mr-2 text-[#04376C]" />
                Top Interns
              </h3>
              <button className="text-[#6B7280] hover:text-[#1F2937]"><MoreHorizontal className="w-5 h-5" /></button>
            </div>
            
            <div className="space-y-4">
              {[
                { name: 'Alex Johnson', score: 98, role: 'Software Eng' },
                { name: 'Sarah Lee', score: 95, role: 'Data Science' },
                { name: 'David Kim', score: 92, role: 'UX Design' },
              ].map((intern, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-[#F5F7FA] transition-colors border border-transparent hover:border-[#E5E7EB]">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#E5E7EB] flex items-center justify-center mr-3 font-bold text-gray-500 text-sm">
                      #{i+1}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">{intern.name}</h4>
                      <p className="text-xs font-medium text-gray-500">{intern.role}</p>
                    </div>
                  </div>
                  <span className="font-black text-[#04376C]">{intern.score}</span>
                </div>
              ))}
            </div>
            <Button variant="secondary" className="w-full mt-4">View All Interns</Button>
          </Card>

          {/* Project Monitoring */}
          <Card className="p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
              <FolderKanban className="w-5 h-5 mr-2 text-[#04376C]" />
              Project Monitoring
            </h3>
            
            <div className="space-y-5">
              {[
                { name: 'Smart City Infrastructure', progress: 85, status: 'On Track', color: 'bg-[#10B981]' },
                { name: 'AI Image Recognition', progress: 45, status: 'At Risk', color: 'bg-[#F59E0B]' },
                { name: 'Robotics Control Sys', progress: 15, status: 'Starting', color: 'bg-[#1E6FD9]' },
              ].map((proj, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-sm font-bold text-gray-900">{proj.name}</h4>
                    <span className="text-xs font-bold text-gray-500">{proj.progress}%</span>
                  </div>
                  <ProgressBar progress={proj.progress} className="h-2 mb-1.5" colorClass={proj.color} />
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">{proj.status}</p>
                </div>
              ))}
            </div>
          </Card>

        </div>
      </div>
    </div>
  );
};