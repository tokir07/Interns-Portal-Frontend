import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Search, Filter, ChevronLeft, ChevronRight, CheckCircle2, AlertTriangle, Bell, Clock, Send, Info } from 'lucide-react';

export const Announcements = () => {
  const [announcements] = useState([
    {
      id: 1,
      title: 'System Maintenance this Weekend',
      target: 'All Users',
      type: 'important',
      date: 'Today, 09:00 AM',
      status: 'Sent',
    },
    {
      id: 2,
      title: 'Global Tech Summit RSVP Reminder',
      target: 'Interns',
      type: 'normal',
      date: 'Yesterday, 02:30 PM',
      status: 'Sent',
    },
    {
      id: 3,
      title: 'URGENT: Project Review Deadlines',
      target: 'Faculty',
      type: 'emergency',
      date: 'Oct 12, 2026',
      status: 'Draft',
    }
  ]);

  return (
    <div className="max-w-7xl mx-auto pb-10 space-y-8">
      {/* SECTION 1: Page Header & KPIs */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Announcement Center</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Broadcast messages to interns, faculty, or all users globally.</p>
        </div>
        
        <div className="flex gap-4 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0">
          <Card className="px-5 py-3 flex items-center gap-4 min-w-[160px] shrink-0">
            <div className="p-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-lg">
              <Send className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Total Announcements</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">128</p>
            </div>
          </Card>
          <Card className="px-5 py-3 flex items-center gap-4 min-w-[140px] shrink-0">
            <div className="p-2 bg-amber-50 dark:bg-amber-900/20 text-amber-600 rounded-lg">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Scheduled</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">3</p>
            </div>
          </Card>
          <Card className="px-5 py-3 flex items-center gap-4 min-w-[140px] shrink-0">
            <div className="p-2 bg-gray-50 dark:bg-gray-800 text-gray-600 rounded-lg">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Drafts</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">12</p>
            </div>
          </Card>
        </div>
      </div>

      {/* SECTION 2: Composer & Guide */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT (70%) */}
        <div className="lg:col-span-8">
          <Card className="p-6 h-full flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Create Announcement Card</h3>
            
            <div className="space-y-5 flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Target Audience</label>
                  <select defaultValue="" className="w-full bg-[#FFFFFF] border border-[#E5E7EB] rounded-[12px] px-4 py-3 text-[#1F2937] placeholder-[#6B7280] focus:ring-2 focus:ring-[#04376C]/20 focus:border-[#04376C] outline-none transition-all shadow-sm">
                    <option value="" disabled>Select audience...</option>
                    <option>All Users</option>
                    <option>Interns Only</option>
                    <option>Faculty Only</option>
                  </select>
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Priority Level</label>
                  <select defaultValue="" className="w-full bg-[#FFFFFF] border border-[#E5E7EB] rounded-[12px] px-4 py-3 text-[#1F2937] placeholder-[#6B7280] focus:ring-2 focus:ring-[#04376C]/20 focus:border-[#04376C] outline-none transition-all shadow-sm">
                    <option value="" disabled>Select priority...</option>
                    <option>Normal</option>
                    <option>Important</option>
                    <option>Emergency</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Message Title</label>
                <input 
                  type="text" 
                  placeholder="e.g., Office Closure on Friday" 
                  className="w-full bg-[#FFFFFF] border border-[#E5E7EB] rounded-[12px] px-4 py-3 text-[#1F2937] placeholder-[#6B7280] focus:ring-2 focus:ring-[#04376C]/20 focus:border-[#04376C] outline-none transition-all shadow-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Message Content</label>
                <textarea 
                  rows={5}
                  placeholder="Type your announcement here..." 
                  className="w-full bg-[#FFFFFF] border border-[#E5E7EB] rounded-[12px] px-4 py-3 text-[#1F2937] placeholder-[#6B7280] focus:ring-2 focus:ring-[#04376C]/20 focus:border-[#04376C] outline-none transition-all shadow-sm resize-none"
                />
              </div>
            </div>

            <div className="flex justify-end mt-8 pt-4 border-t border-gray-100 dark:border-gray-800">
              <button className="flex items-center gap-2 bg-[#04376C] hover:bg-[#032a52] text-white px-6 py-2.5 rounded-lg font-medium transition-colors shadow-sm">
                <Send className="w-4 h-4" />
                Send Announcement
              </button>
            </div>
          </Card>
        </div>

        {/* RIGHT (30%) */}
        <div className="lg:col-span-4">
          <Card className="p-6 h-full bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-blue-100 dark:border-gray-800">
            <div className="flex items-center gap-2 mb-6">
              <Info className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Announcement Guide</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  Priority Explanation
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <li><strong className="text-gray-800 dark:text-gray-200">Normal:</strong> General updates, non-critical info.</li>
                  <li><strong className="text-gray-800 dark:text-gray-200">Important:</strong> Action required, upcoming deadlines.</li>
                  <li><strong className="text-gray-800 dark:text-gray-200">Emergency:</strong> Urgent system issues, security alerts. Sends push notification.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <Bell className="w-4 h-4 text-blue-500" />
                  Audience Types
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <li><strong className="text-gray-800 dark:text-gray-200">All Users:</strong> Broadcasts to every active account.</li>
                  <li><strong className="text-gray-800 dark:text-gray-200">Interns:</strong> Only students on placement.</li>
                  <li><strong className="text-gray-800 dark:text-gray-200">Faculty:</strong> Coordinators and university staff.</li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                <h4 className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-1">Best Practices</h4>
                <p className="text-xs text-blue-700 dark:text-blue-400 leading-relaxed">
                  Keep titles concise. Use bullet points for readability. Avoid sending non-urgent messages outside business hours.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* SECTION 3: Recent Broadcasts */}
      <Card className="overflow-hidden">
        <div className="p-6 border-b border-gray-100 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Recent Broadcasts</h3>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search broadcasts..." 
                  className="w-full pl-9 pr-4 py-2 text-sm bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <button className="p-2 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 transition-colors">
                <Filter className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800">
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Audience</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Priority</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {announcements.map((ann) => (
                <tr key={ann.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{ann.title}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600 dark:text-gray-400">{ann.target}</span>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant={ann.type === 'emergency' ? 'danger' : ann.type === 'important' ? 'warning' : 'info'}>
                      {ann.type}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                    {ann.date}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5">
                      {ann.status === 'Sent' ? (
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                      ) : (
                        <Clock className="w-4 h-4 text-amber-500" />
                      )}
                      <span className={`text-sm font-medium ${ann.status === 'Sent' ? 'text-green-600 dark:text-green-400' : 'text-amber-600 dark:text-amber-400'}`}>
                        {ann.status}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
          <p className="text-sm text-gray-500">Showing <span className="font-medium text-gray-900 dark:text-white">1</span> to <span className="font-medium text-gray-900 dark:text-white">3</span> of <span className="font-medium text-gray-900 dark:text-white">3</span> results</p>
          <div className="flex gap-2">
            <button className="p-1.5 border border-gray-200 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50 text-gray-600 dark:text-gray-400">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="p-1.5 border border-gray-200 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50 text-gray-600 dark:text-gray-400">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Card>

    </div>
  );
};