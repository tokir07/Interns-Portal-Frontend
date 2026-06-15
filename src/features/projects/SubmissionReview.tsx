import { motion } from 'framer-motion';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { FileText, CheckCircle, XCircle, Clock, Download, MessageSquare, ChevronRight } from 'lucide-react';

export const SubmissionReview = () => {
  const submissions = [
    {
      id: 1,
      intern: 'Alex Intern',
      project: 'Frontend Design System Refactoring',
      file: 'design-system-v1.zip',
      submittedAt: 'Today, 10:30 AM',
      status: 'Pending',
      description: 'I have completed the initial draft of the design system. Please review the attached ZIP containing the Figma file and the React component structures.',
    },
    {
      id: 2,
      intern: 'Jamie Doe',
      project: 'User Research Documentation',
      file: 'research-report-final.pdf',
      submittedAt: 'Yesterday, 4:15 PM',
      status: 'Reviewed',
      description: 'Final research report based on the feedback from last week. Ready for approval.',
    }
  ];

  return (
    <div className="space-y-6 pb-10">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#E5E7EB] pb-5">
        <div>
          <nav className="flex items-center text-sm text-[#6B7280] mb-2 font-medium">
            <span>Faculty</span>
            <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />
            <span className="font-semibold text-[#1F2937]">Reviews</span>
          </nav>
          <h1 className="text-2xl font-bold text-[#1F2937] tracking-tight uppercase">SUBMISSION REVIEW</h1>
          <p className="text-[#6B7280] text-sm mt-1">Review intern deliverables, provide feedback, and approve work.</p>
        </div>
      </div>

      <div className="space-y-8">
        {submissions.map((sub, idx) => (
          <motion.div
            key={sub.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="p-0 overflow-hidden border border-[#E5E7EB] shadow-[0_4px_20px_rgba(0,0,0,0.04)] rounded-2xl bg-white">
              <div className="flex flex-col lg:flex-row">
                
                {/* Left Area: Submission Details */}
                <div className="p-8 lg:w-2/3 border-b lg:border-b-0 lg:border-r border-[#E5E7EB] flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-[#04376C] flex items-center justify-center text-white font-bold text-lg shadow-sm">
                        {sub.intern.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-bold text-[#1F2937] text-lg leading-none mb-1">{sub.intern}</h3>
                        <p className="text-sm text-[#6B7280] font-medium">{sub.project}</p>
                      </div>
                    </div>
                    <Badge variant={sub.status === 'Pending' ? 'warning' : 'success'} className="font-semibold shadow-sm">
                      {sub.status}
                    </Badge>
                  </div>

                  <div className="bg-[#F8FAFC] p-5 rounded-xl mb-6 border border-[#E5E7EB] shadow-inner text-[#374151] font-medium leading-relaxed flex-1">
                    "{sub.description}"
                  </div>

                  <div className="flex items-center text-sm font-semibold text-[#6B7280] mt-auto">
                    <Clock className="w-4 h-4 mr-2 text-[#04376C]" />
                    Submitted: {sub.submittedAt}
                  </div>
                </div>

                {/* Right Area: Attachment & Actions */}
                <div className="p-8 lg:w-1/3 flex flex-col bg-[#F8FAFC]/50 h-full">
                  
                  {/* Separate Attachment Area */}
                  <div className="mb-8">
                    <h4 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-3">Attached Deliverable</h4>
                    <div className="flex items-center justify-between p-4 bg-white border border-[#E5E7EB] rounded-xl shadow-sm hover:border-[#04376C]/30 transition-colors cursor-pointer group">
                      <div className="flex items-center truncate mr-3">
                        <FileText className="w-5 h-5 text-[#04376C] mr-3 shrink-0" />
                        <span className="text-sm font-bold text-[#1F2937] truncate group-hover:text-[#04376C] transition-colors">{sub.file}</span>
                      </div>
                      <div className="text-[#6B7280] group-hover:text-[#04376C] shrink-0">
                        <Download className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Separate Action Area */}
                  <div className="mt-auto">
                    <h4 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-3">Review Action</h4>
                    {sub.status === 'Pending' ? (
                      <div className="flex flex-col gap-3">
                        <Button variant="secondary" className="w-full justify-center font-bold text-[#10B981] border-[#10B981]/20 hover:bg-[#10B981]/10 hover:border-[#10B981]">
                          <CheckCircle className="w-4 h-4 mr-2" /> Approve
                        </Button>
                        <Button variant="secondary" className="w-full justify-center font-bold text-[#EF4444] border-[#EF4444]/20 hover:bg-[#EF4444]/10 hover:border-[#EF4444]">
                          <XCircle className="w-4 h-4 mr-2" /> Reject
                        </Button>
                        <Button variant="secondary" className="w-full justify-center font-bold text-[#04376C] border-[#04376C]/20 hover:bg-[#04376C]/10 hover:border-[#04376C]">
                          <MessageSquare className="w-4 h-4 mr-2" /> Request Revisions
                        </Button>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center p-4 bg-[#10B981]/10 border border-[#10B981]/20 rounded-xl text-[#10B981] text-sm font-bold shadow-inner">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Reviewed & Approved
                      </div>
                    )}
                  </div>

                </div>

              </div>
            </Card>
          </motion.div>
        ))}
      </div>

    </div>
  );
};