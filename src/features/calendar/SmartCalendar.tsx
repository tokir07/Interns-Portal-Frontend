import { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { ChevronLeft, ChevronRight, Filter, Plus } from 'lucide-react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isToday } from 'date-fns';

export const SmartCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  // Dummy events
  const events = [
    { date: new Date(2026, 9, 12), title: 'Google Interview', type: 'interview' },
    { date: new Date(2026, 9, 15), title: 'Project Proposal', type: 'deadline' },
    { date: new Date(2026, 9, 25), title: 'Tech Summit', type: 'event' },
  ];

  const getDayEvents = (day: Date) => {
    return events.filter(e => isSameDay(e.date, day));
  };

  return (
    <div className="space-y-6 pb-10 h-full flex flex-col">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#E5E7EB] pb-5">
        <div>
          <h1 className="text-2xl font-bold text-[#1F2937] tracking-tight">Smart Calendar</h1>
          <p className="text-[#6B7280] text-sm mt-1">Manage your interviews, deadlines, and events</p>
        </div>
        
        <div className="flex gap-3">
          <Button variant="secondary" className="hidden sm:flex">
            <Filter className="w-4 h-4 mr-2" /> Filter
          </Button>
          <Button variant="primary">
            <Plus className="w-4 h-4 mr-2" /> Add Event
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 flex-1 min-h-[600px]">
        {/* Calendar View */}
        <Card className="lg:col-span-3 flex flex-col overflow-hidden border border-[#E5E7EB]">
          {/* Header */}
          <div className="p-4 border-b border-[#E5E7EB] flex justify-between items-center bg-white">
            <h2 className="text-xl font-bold text-[#1F2937]">
              {format(currentDate, 'MMMM yyyy')}
            </h2>
            <div className="flex space-x-2">
              <Button variant="secondary" size="sm" onClick={prevMonth}>
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="secondary" size="sm" onClick={() => setCurrentDate(new Date())}>
                Today
              </Button>
              <Button variant="secondary" size="sm" onClick={nextMonth}>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Grid */}
          <div className="flex-1 grid grid-cols-7 grid-rows-[auto_1fr] bg-[#F5F7FA] gap-px">
            {/* Days of week */}
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="bg-white py-3 text-center text-xs font-bold text-[#6B7280] uppercase tracking-wider">
                {day}
              </div>
            ))}
            
            {/* Empty days before start of month */}
            {Array.from({ length: monthStart.getDay() }).map((_, i) => (
              <div key={`empty-${i}`} className="bg-[#F9FAFB] min-h-[100px] p-2"></div>
            ))}
            
            {/* Days */}
            {daysInMonth.map((day, i) => {
              const dayEvents = getDayEvents(day);
              const isCurrentDay = isToday(day);
              
              return (
                <div 
                  key={i} 
                  className={`bg-white min-h-[120px] p-2 border-t border-[#E5E7EB] transition-colors hover:bg-blue-50/30 ${
                    !isSameMonth(day, currentDate) ? 'opacity-50' : ''
                  }`}
                >
                  <div className={`flex justify-between items-start mb-2`}>
                    <span className={`w-7 h-7 flex items-center justify-center rounded-full text-sm font-semibold ${
                      isCurrentDay ? 'bg-[#04376C] text-white' : 'text-[#1F2937]'
                    }`}>
                      {format(day, 'd')}
                    </span>
                  </div>
                  
                  <div className="space-y-1">
                    {dayEvents.map((evt, idx) => (
                      <div 
                        key={idx} 
                        className={`text-xs px-2 py-1 rounded border font-medium truncate ${
                          evt.type === 'interview' ? 'bg-[#1E6FD9]/10 text-[#1E6FD9] border-[#1E6FD9]/20' :
                          evt.type === 'deadline' ? 'bg-[#EF4444]/10 text-[#EF4444] border-[#EF4444]/20' :
                          'bg-[#10B981]/10 text-[#10B981] border-[#10B981]/20'
                        }`}
                      >
                        {evt.title}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Upcoming Sidebar */}
        <div className="space-y-6">
          <Card className="p-5 border border-[#E5E7EB]">
            <h3 className="font-bold text-[#1F2937] mb-4">Upcoming Schedule</h3>
            
            <div className="space-y-4">
              {events.map((evt, i) => (
                <div key={i} className="flex flex-col pb-4 border-b border-[#E5E7EB] last:border-0 last:pb-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-[#6B7280] uppercase">
                      {format(evt.date, 'MMM dd, yyyy')}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-[#1F2937]">{evt.title}</h4>
                  <p className="text-xs text-[#6B7280] mt-1 capitalize">{evt.type}</p>
                </div>
              ))}
            </div>

            <Button variant="secondary" className="w-full mt-6">View All Events</Button>
          </Card>
        </div>
      </div>
    </div>
  );
};