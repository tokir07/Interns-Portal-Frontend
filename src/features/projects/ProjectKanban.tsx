import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { ProgressBar } from '../../components/ui/ProgressBar';
import { 
  MoreHorizontal, 
  MessageSquare, 
  Paperclip, 
  Clock,
  Plus,
  ChevronRight
} from 'lucide-react';

export const ProjectKanban = () => {
  const columns = [
    {
      id: 'todo',
      title: 'To Do',
      count: 3,
      color: 'border-t-[#9CA3AF]',
      tasks: [
        { id: 1, title: 'Literature Review', project: 'AI Smart City', assignees: ['Alex', 'Maria'], comments: 2, attachments: 0, priority: 'High', due: 'Tomorrow' },
        { id: 2, title: 'Setup Development Environment', project: 'Robotics Control', assignees: ['Chen'], comments: 0, attachments: 1, priority: 'Medium', due: 'Oct 15' },
        { id: 3, title: 'Initial Client Meeting', project: 'Data Pipeline', assignees: ['Alex'], comments: 5, attachments: 2, priority: 'High', due: 'Oct 16' },
      ]
    },
    {
      id: 'in-progress',
      title: 'In Progress',
      count: 2,
      color: 'border-t-[#1E6FD9]',
      tasks: [
        { id: 4, title: 'Data Collection Phase 1', project: 'AI Smart City', assignees: ['Maria'], comments: 8, attachments: 4, priority: 'High', due: 'Today', progress: 65 },
        { id: 5, title: 'API Endpoint Design', project: 'Data Pipeline', assignees: ['Chen', 'Alex'], comments: 3, attachments: 1, priority: 'Medium', due: 'Oct 20', progress: 30 },
      ]
    },
    {
      id: 'review',
      title: 'In Review',
      count: 1,
      color: 'border-t-[#F59E0B]',
      tasks: [
        { id: 6, title: 'System Architecture Draft', project: 'Robotics Control', assignees: ['Chen'], comments: 12, attachments: 3, priority: 'High', due: 'Overdue', progress: 95 },
      ]
    },
    {
      id: 'done',
      title: 'Completed',
      count: 4,
      color: 'border-t-[#10B981]',
      tasks: [
        { id: 7, title: 'Project Charter Approval', project: 'AI Smart City', assignees: ['Alex', 'Maria'], comments: 1, attachments: 1, priority: 'Low', due: 'Oct 1', progress: 100 },
      ]
    }
  ];

  return (
    <div className="h-full flex flex-col pb-10">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#E5E7EB] pb-5 mb-8">
        <div>
          <nav className="flex items-center text-sm text-[#6B7280] mb-2 font-medium">
            <span>Faculty</span>
            <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />
            <span className="font-semibold text-[#1F2937]">Projects</span>
          </nav>
          <h1 className="text-2xl font-bold text-[#1F2937] tracking-tight uppercase">PROJECT BOARD</h1>
          <p className="text-[#6B7280] text-sm mt-1">Manage and track project deliverables across all stages.</p>
        </div>
        <div className="flex gap-3">
          <div className="flex -space-x-2 mr-4">
            {['Alex', 'Maria', 'Chen'].map((name, i) => (
              <div key={i} className="w-9 h-9 rounded-full bg-[#04376C] border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-sm z-10" style={{ zIndex: 10 - i }}>
                {name[0]}
              </div>
            ))}
          </div>
          <Button variant="secondary" className="hidden sm:flex font-bold shadow-sm bg-white">Filter</Button>
          <Button variant="primary" className="flex items-center shadow-md">
            <Plus className="w-4 h-4 mr-2" /> New Task
          </Button>
        </div>
      </div>

      {/* Kanban Board Area */}
      <div className="flex-1 overflow-x-auto pb-6 scrollbar-hide">
        <div className="flex gap-6 min-w-max h-full items-start">
          {columns.map(column => (
            <div key={column.id} className="w-80 flex flex-col flex-shrink-0">
              
              {/* Column Header */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <h3 className="font-black text-[#1F2937] tracking-wide">{column.title}</h3>
                  <span className="ml-3 bg-[#F8FAFC] text-[#6B7280] border border-[#E5E7EB] px-2.5 py-0.5 rounded-full text-xs font-black shadow-sm">
                    {column.count}
                  </span>
                </div>
                <button className="text-gray-400 hover:text-[#1F2937] p-1 rounded-md hover:bg-gray-100 transition-colors">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>

              {/* Column Body */}
              <div className="flex-1 bg-[#F8FAFC] rounded-2xl p-3.5 border border-[#E5E7EB] shadow-inner space-y-4 min-h-[200px]">
                {column.tasks.map(task => (
                  <Card key={task.id} hoverEffect className={`p-5 cursor-grab active:cursor-grabbing border-t-4 border-l-[#E5E7EB] border-r-[#E5E7EB] border-b-[#E5E7EB] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] ${column.color}`}>
                    <div className="flex justify-between items-start mb-3">
                      <Badge variant={
                        task.priority === 'High' ? 'danger' : 
                        task.priority === 'Medium' ? 'warning' : 'default'
                      } className="text-[10px] px-2 py-0.5 uppercase tracking-widest font-black shadow-sm">
                        {task.priority}
                      </Badge>
                      <button className="text-gray-400 hover:text-[#04376C] opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>

                    <h4 className="font-bold text-[#1F2937] text-sm mb-1.5 leading-snug group-hover:text-[#04376C] transition-colors">{task.title}</h4>
                    <p className="text-xs text-[#6B7280] font-semibold mb-5">{task.project}</p>

                    {'progress' in task && (
                      <div className="mb-5">
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider">Progress</span>
                          <span className="text-[10px] font-bold text-[#1F2937]">{task.progress}%</span>
                        </div>
                        <ProgressBar progress={task.progress as number} className="h-1.5" colorClass="bg-[#04376C]" />
                      </div>
                    )}

                    <div className="flex justify-between items-center mt-auto pt-4 border-t border-[#F8FAFC]">
                      <div className="flex -space-x-1.5">
                        {task.assignees.map((assignee, i) => (
                          <div key={i} className="w-6 h-6 rounded-full bg-[#04376C] border border-white flex items-center justify-center text-white text-[10px] font-bold shadow-sm">
                            {assignee[0]}
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center space-x-3 text-xs text-[#6B7280] font-bold">
                        {task.comments > 0 && (
                          <span className="flex items-center hover:text-[#04376C] transition-colors">
                            <MessageSquare className="w-3.5 h-3.5 mr-1" /> {task.comments}
                          </span>
                        )}
                        {task.attachments > 0 && (
                          <span className="flex items-center hover:text-[#04376C] transition-colors">
                            <Paperclip className="w-3.5 h-3.5 mr-1" /> {task.attachments}
                          </span>
                        )}
                        <span className={`flex items-center ${task.due === 'Overdue' ? 'text-[#EF4444]' : ''}`} title="Due Date">
                          <Clock className="w-3.5 h-3.5 mr-1" /> {task.due}
                        </span>
                      </div>
                    </div>
                  </Card>
                ))}

                {/* Add Task Button */}
                <button className="w-full py-3 flex items-center justify-center text-sm font-bold text-[#6B7280] hover:text-[#04376C] hover:bg-white rounded-xl transition-colors border-2 border-transparent border-dashed hover:border-[#04376C]/30 shadow-sm">
                  <Plus className="w-4 h-4 mr-1.5" /> Add Task
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};