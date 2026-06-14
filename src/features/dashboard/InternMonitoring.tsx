import { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { ProgressBar } from '../../components/ui/ProgressBar';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { Search, Filter, Mail, MoreHorizontal, ChevronRight } from 'lucide-react';

export const InternMonitoring = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const interns = [
    { id: 1, name: 'Alex Intern', role: 'Frontend Developer', progress: 85, status: 'On Track', projects: 3, lastActive: '2h ago' },
    { id: 2, name: 'Jamie Doe', role: 'UX Designer', progress: 92, status: 'Ahead', projects: 2, lastActive: '1h ago' },
    { id: 3, name: 'Sam Smith', role: 'Backend Dev', progress: 45, status: 'Behind', projects: 4, lastActive: '1d ago' },
    { id: 4, name: 'Chris Lee', role: 'Data Analyst', progress: 60, status: 'On Track', projects: 2, lastActive: '3h ago' },
    { id: 5, name: 'Taylor Swift', role: 'Marketing', progress: 15, status: 'At Risk', projects: 1, lastActive: '2d ago' },
  ];

  return (
    <div className="space-y-6 pb-10">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#E5E7EB] pb-5">
        <div>
          <nav className="flex items-center text-sm text-[#6B7280] mb-2 font-medium">
            <span>Faculty</span>
            <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />
            <span className="font-semibold text-[#1F2937]">Interns</span>
          </nav>
          <h1 className="text-2xl font-bold text-[#1F2937] tracking-tight uppercase">INTERNS</h1>
          <p className="text-[#6B7280] text-sm mt-1">Track progress, engagement, and performance of assigned interns.</p>
        </div>
        <Button variant="primary">Export Report</Button>
      </div>

      <Card className="p-0 overflow-hidden border border-[#E5E7EB] shadow-[0_4px_20px_rgba(0,0,0,0.04)] rounded-2xl">
        
        {/* Table Toolbar */}
        <div className="p-5 border-b border-[#E5E7EB] flex flex-col sm:flex-row justify-between items-center gap-4 bg-white">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search interns by name or role..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-lg pl-9 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-[#04376C]/20 outline-none transition-colors text-[#1F2937] placeholder-gray-400"
            />
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <Button variant="secondary" size="sm" className="w-full sm:w-auto font-medium">
              <Filter className="w-4 h-4 mr-2" /> Filter
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-[#F8FAFC] border-b border-[#E5E7EB] text-xs uppercase tracking-wider text-[#6B7280]">
                <th className="px-6 py-4 font-bold">Intern</th>
                <th className="px-6 py-4 font-bold">Progress</th>
                <th className="px-6 py-4 font-bold">Status</th>
                <th className="px-6 py-4 font-bold">Projects</th>
                <th className="px-6 py-4 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E7EB] bg-white">
              {interns.map((intern) => (
                <tr key={intern.id} className="hover:bg-[#F8FAFC] transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-[#04376C] flex items-center justify-center text-white font-bold mr-4 shrink-0 shadow-sm">
                        {intern.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-[#1F2937] text-sm group-hover:text-[#04376C] transition-colors cursor-pointer">{intern.name}</div>
                        <div className="text-xs text-[#6B7280] mt-0.5 font-medium flex items-center">
                          {intern.role} <span className="mx-1.5">•</span> Active {intern.lastActive}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 w-56">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-[#1F2937]">{intern.progress}%</span>
                    </div>
                    <ProgressBar 
                      progress={intern.progress} 
                      className="h-2"
                      colorClass={
                        intern.progress < 30 ? 'bg-[#EF4444]' :
                        intern.progress < 70 ? 'bg-[#F59E0B]' : 'bg-[#10B981]'
                      } 
                    />
                  </td>
                  <td className="px-6 py-5">
                    <Badge variant={
                      intern.status === 'Ahead' || intern.status === 'On Track' ? 'success' :
                      intern.status === 'Behind' ? 'warning' : 'danger'
                    } className="font-semibold shadow-sm">
                      {intern.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-5 text-[#6B7280] text-sm font-medium">
                    {intern.projects} Active
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-[#6B7280] hover:text-[#04376C] hover:bg-blue-50 rounded-lg transition-colors border border-transparent hover:border-[#04376C]/10" title="Message">
                        <Mail className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-[#6B7280] hover:text-[#1F2937] hover:bg-gray-100 rounded-lg transition-colors border border-transparent hover:border-gray-200">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};