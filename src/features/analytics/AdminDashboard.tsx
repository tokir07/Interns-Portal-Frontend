import { StatCard } from '../../components/ui/StatCard';
import { Card } from '../../components/ui/Card';
import { ChartContainer } from '../../components/ui/ChartContainer';
import { DataTable, Th, Td } from '../../components/ui/DataTable';
import { Button } from '../../components/ui/Button';

import { 
  Users, 
  FolderKanban, 
  Globe, 
  GraduationCap,
  Plus,
  FileText,
  BellRing,
  Download,
  Activity,
  CheckCircle2,
  XCircle,
  MoreHorizontal
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const AdminDashboard = () => {

  const stats = [
    { label: 'Total Interns', value: '142', icon: GraduationCap, trend: '+12%', trendText: 'this month', trendUp: true },
    { label: 'Total Faculty', value: '38', icon: Users, trend: '+2', trendText: 'this semester', trendUp: true },
    { label: 'Active Projects', value: '45', icon: FolderKanban, trend: '85% health score', trendUp: true },
    { label: 'Intl. Opportunities', value: '86', icon: Globe, trend: '+15', trendText: 'new postings', trendUp: true },
  ];

  const chartData = [
    { month: 'Jan', interns: 45, projects: 20 },
    { month: 'Feb', interns: 52, projects: 25 },
    { month: 'Mar', interns: 68, projects: 32 },
    { month: 'Apr', interns: 85, projects: 38 },
    { month: 'May', interns: 110, projects: 42 },
    { month: 'Jun', interns: 142, projects: 45 },
  ];

  return (
    <div className="space-y-6 pb-10">
      
      {/* Hero Banner / Quick Actions */}
      <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm flex flex-col xl:flex-row justify-between items-start xl:items-center relative overflow-hidden gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">Executive Overview</h1>
          <p className="text-gray-500 font-medium">
            System health is optimal. There are 12 pending approvals requiring your attention.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-3">
          <Button variant="primary" className="flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            Create Internship
          </Button>
          <Button variant="secondary" className="flex items-center">
            <Users className="w-4 h-4 mr-2" />
            Add Faculty
          </Button>
          <Button variant="secondary" className="flex items-center">
            <FileText className="w-4 h-4 mr-2" />
            Generate Report
          </Button>
          <Button variant="secondary" className="flex items-center">
            <BellRing className="w-4 h-4 mr-2" />
            Announcement
          </Button>
          <Button variant="ghost" className="flex items-center text-[#04376C] border border-[#04376C] hover:bg-[#04376C]/5">
            <Download className="w-4 h-4 mr-2" />
            Export Data
          </Button>
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
            title="Internship Growth" 
            subtitle="Year-to-date program expansion metrics"
            action={<Button variant="ghost" size="sm">Last 6 Months</Button>}
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorInterns" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#04376C" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#04376C" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorProjects" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1E6FD9" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#1E6FD9" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#6B7280', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#6B7280', fontSize: 12}} dx={-10} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: '1px solid #E5E7EB', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }} 
                />
                <Area type="monotone" dataKey="interns" stroke="#04376C" strokeWidth={3} fillOpacity={1} fill="url(#colorInterns)" />
                <Area type="monotone" dataKey="projects" stroke="#1E6FD9" strokeWidth={2} fillOpacity={1} fill="url(#colorProjects)" />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>

          {/* Data Table */}
          <DataTable title="Pending Approvals" description="User registrations and internship proposals awaiting review">
            <thead>
              <tr>
                <Th>Type</Th>
                <Th>Requested By</Th>
                <Th>Department</Th>
                <Th>Date</Th>
                <Th className="text-right">Action</Th>
              </tr>
            </thead>
            <tbody>
              {[
                { type: 'Intern Registration', name: 'Emily Chen', dept: 'Computer Science', date: '2 hours ago', icon: GraduationCap },
                { type: 'Project Proposal', name: 'Dr. Jenkins', dept: 'Engineering', date: '4 hours ago', icon: FolderKanban },
                { type: 'Faculty Registration', name: 'Prof. Miller', dept: 'Mathematics', date: '1 day ago', icon: Users },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <Td>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-lg bg-[#F5F7FA] flex items-center justify-center mr-3 border border-[#E5E7EB]">
                        <row.icon className="w-4 h-4 text-[#04376C]" />
                      </div>
                      <span className="font-semibold text-gray-900">{row.type}</span>
                    </div>
                  </Td>
                  <Td className="text-gray-900 font-medium text-sm">{row.name}</Td>
                  <Td className="text-gray-500 text-sm">{row.dept}</Td>
                  <Td className="text-gray-500 text-sm">{row.date}</Td>
                  <Td className="text-right space-x-2">
                    <Button variant="ghost" size="sm" className="text-[#10B981] hover:text-green-700 hover:bg-green-50 px-2"><CheckCircle2 className="w-4 h-4" /></Button>
                    <Button variant="ghost" size="sm" className="text-[#EF4444] hover:text-red-700 hover:bg-red-50 px-2"><XCircle className="w-4 h-4" /></Button>
                  </Td>
                </tr>
              ))}
            </tbody>
          </DataTable>

        </div>

        {/* Right Column (Span 1) */}
        <div className="lg:col-span-1 space-y-6">
          
          {/* Recent Activity Feed */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-gray-900 flex items-center">
                <Activity className="w-5 h-5 mr-2 text-[#04376C]" />
                System Activity
              </h3>
              <button className="text-[#6B7280] hover:text-[#1F2937]"><MoreHorizontal className="w-5 h-5" /></button>
            </div>
            
            <div className="space-y-6">
              {[
                { title: 'New Internship Posted', desc: 'Google Switzerland added a new role.', time: '10 mins ago', color: 'bg-[#1E6FD9]' },
                { title: 'System Update', desc: 'Version 2.4 deployed successfully.', time: '1 hour ago', color: 'bg-[#10B981]' },
                { title: 'High Traffic Alert', desc: 'Unusual spike in login attempts.', time: '3 hours ago', color: 'bg-[#F59E0B]' },
                { title: 'Batch Report Generated', desc: 'Monthly performance report is ready.', time: '5 hours ago', color: 'bg-[#04376C]' },
              ].map((activity, i) => (
                <div key={i} className="flex relative pl-5">
                  <div className={`absolute left-0 top-1.5 w-2 h-2 rounded-full ${activity.color} shadow-sm`}></div>
                  <div className="absolute left-[3px] top-5 bottom-[-18px] w-px bg-[#E5E7EB] last:hidden"></div>
                  
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">{activity.title}</h4>
                    <p className="text-xs font-medium text-gray-500 mt-0.5">{activity.desc}</p>
                    <span className="text-[10px] text-gray-400 mt-1 block uppercase tracking-wider">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="secondary" className="w-full mt-8">View Full Log</Button>
          </Card>

        </div>
      </div>
    </div>
  );
};