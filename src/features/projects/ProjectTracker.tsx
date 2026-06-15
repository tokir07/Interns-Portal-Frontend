import { motion } from 'framer-motion';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { ProgressBar } from '../../components/ui/ProgressBar';
import { 
  FolderKanban, 
  CheckCircle2, 
  AlertCircle,
  MoreVertical,
  Calendar,
  MessageSquare,
  FileText
} from 'lucide-react';

export const ProjectTracker = () => {
  const projects = [
    {
      id: 1,
      name: 'Smart City Infrastructure AI',
      description: 'Developing predictive models for traffic flow using computer vision and edge computing.',
      mentor: 'Dr. Sarah Jenkins',
      status: 'In Progress',
      progress: 65,
      deadline: 'Oct 30, 2026',
      tasks: { completed: 12, total: 24 },
      priority: 'High',
      lastUpdate: '2 hours ago'
    },
    {
      id: 2,
      name: 'Data Pipeline Optimization',
      description: 'Refactoring the legacy data ingestion pipeline to support real-time analytics.',
      mentor: 'Prof. David Chen',
      status: 'In Progress',
      progress: 30,
      deadline: 'Nov 15, 2026',
      tasks: { completed: 5, total: 18 },
      priority: 'Medium',
      lastUpdate: '1 day ago'
    },
    {
      id: 3,
      name: 'User Experience Research',
      description: 'Conducting A/B testing on the new student portal interface.',
      mentor: 'Dr. Elena Rodriguez',
      status: 'Completed',
      progress: 100,
      deadline: 'Sep 28, 2026',
      tasks: { completed: 15, total: 15 },
      priority: 'Low',
      lastUpdate: '2 weeks ago'
    }
  ];

  return (
    <div className="space-y-8 pb-10">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#E5E7EB] pb-5">
        <div>
          <h1 className="text-2xl font-bold text-[#1F2937] tracking-tight">Project Tracker</h1>
          <p className="text-[#6B7280] text-sm mt-1">Monitor your internship assignments and deliverables</p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" className="flex items-center">
            <FileText className="w-4 h-4 mr-2" /> Report
          </Button>
          <Button variant="primary" className="flex items-center">
            <FolderKanban className="w-4 h-4 mr-2" /> New Request
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card hoverEffect className="h-full flex flex-col p-6 border border-[#E5E7EB]">
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <Badge variant={
                  project.status === 'Completed' ? 'success' : 
                  project.status === 'In Progress' ? 'info' : 'default'
                }>
                  {project.status}
                </Badge>
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>

              {/* Title & Desc */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-[#1F2937] leading-tight mb-2 group-hover:text-[#04376C] transition-colors cursor-pointer">
                  {project.name}
                </h3>
                <p className="text-sm text-[#6B7280] line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Mentor */}
              <div className="flex items-center mb-6 text-sm text-[#374151] bg-[#F5F7FA] p-3 rounded-lg border border-[#E5E7EB]">
                <div className="w-8 h-8 rounded-full bg-[#04376C] flex items-center justify-center text-white font-bold text-xs mr-3">
                  {project.mentor.split(' ')[1][0]}
                </div>
                <div>
                  <p className="text-xs text-[#6B7280] font-medium uppercase tracking-wider">Mentor</p>
                  <p className="font-semibold">{project.mentor}</p>
                </div>
              </div>

              {/* Progress */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-[#1F2937]">Progress</span>
                  <span className="text-sm font-bold text-[#04376C]">{project.progress}%</span>
                </div>
                <ProgressBar 
                  progress={project.progress} 
                  className="h-2.5" 
                  colorClass={project.progress === 100 ? 'bg-[#10B981]' : 'bg-[#04376C]'} 
                />
                <div className="flex justify-between text-xs text-[#6B7280] mt-2 font-medium">
                  <span className="flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-[#10B981]" />
                    {project.tasks.completed}/{project.tasks.total} Tasks
                  </span>
                  <span>Updated {project.lastUpdate}</span>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-auto pt-4 border-t border-[#E5E7EB] flex justify-between items-center">
                <div className="flex items-center text-sm font-medium">
                  {project.priority === 'High' ? (
                    <span className="flex items-center text-[#EF4444] bg-[#EF4444]/10 px-2 py-1 rounded">
                      <AlertCircle className="w-3.5 h-3.5 mr-1" /> High Priority
                    </span>
                  ) : (
                    <span className="flex items-center text-[#6B7280]">
                      <Calendar className="w-4 h-4 mr-1.5" /> {project.deadline}
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="px-2">
                    <MessageSquare className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};