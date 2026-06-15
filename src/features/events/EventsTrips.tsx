import { motion } from 'framer-motion';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { MapPin, Calendar, Clock, Users, ArrowRight, Plane, Building } from 'lucide-react';

export const EventsTrips = () => {
  const upcomingTrips = [
    {
      id: 1,
      title: 'Global Tech Summit 2026',
      destination: 'Berlin, Germany',
      date: 'Oct 25 - Oct 28',
      time: 'Flight: 08:00 AM',
      attendees: 12,
      status: 'Confirmed',
    },
    {
      id: 2,
      title: 'Innovation Workshop',
      destination: 'Zurich, Switzerland',
      date: 'Nov 12 - Nov 15',
      time: 'Train: 09:30 AM',
      attendees: 5,
      status: 'Pending RSVP',
    }
  ];

  const localEvents = [
    {
      id: 1,
      title: 'Annual Company Hackathon',
      location: 'Main Office, Hall A',
      date: 'Friday, Oct 22',
      type: 'Internal Event',
    },
    {
      id: 2,
      title: 'Leadership Q&A Session',
      location: 'Auditorium',
      date: 'Monday, Oct 25',
      type: 'Workshop',
    },
    {
      id: 3,
      title: 'Intern Networking Dinner',
      location: 'Downtown Restaurant',
      date: 'Friday, Oct 29',
      type: 'Social',
    }
  ];

  return (
    <div className="space-y-8 pb-10">
      
      <div className="border-b border-[#E5E7EB] pb-5">
        <h1 className="text-2xl font-bold text-[#1F2937] tracking-tight">Events & Trips</h1>
        <p className="text-[#6B7280] text-sm mt-1">Discover upcoming travel opportunities and local events</p>
      </div>

      {/* Upcoming Trips Section */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold text-[#1F2937]">Upcoming Trips</h2>
          <button className="text-sm font-medium text-[#04376C] hover:text-[#0A4D8C] hover:underline flex items-center">
            View All Trips <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingTrips.map((trip, idx) => (
            <motion.div
              key={trip.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card hoverEffect className="p-6 h-full flex flex-col border border-[#E5E7EB]">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#F5F7FA] rounded-xl flex items-center justify-center mr-4 border border-[#E5E7EB]">
                      <Plane className="w-6 h-6 text-[#04376C]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#1F2937]">{trip.title}</h3>
                      <div className="flex items-center text-sm font-medium text-[#6B7280] mt-1">
                        <MapPin className="w-4 h-4 mr-1 text-[#6B7280]" />
                        {trip.destination}
                      </div>
                    </div>
                  </div>
                  <Badge variant={trip.status === 'Confirmed' ? 'success' : 'warning'}>
                    {trip.status}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 bg-[#F5F7FA] p-4 rounded-xl border border-[#E5E7EB]">
                  <div className="flex items-start">
                    <Calendar className="w-5 h-5 text-[#6B7280] mr-2" />
                    <div>
                      <p className="text-xs text-[#6B7280] font-medium uppercase tracking-wider mb-0.5">Date</p>
                      <p className="text-sm font-semibold text-[#1F2937]">{trip.date}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-[#6B7280] mr-2" />
                    <div>
                      <p className="text-xs text-[#6B7280] font-medium uppercase tracking-wider mb-0.5">Time</p>
                      <p className="text-sm font-semibold text-[#1F2937]">{trip.time}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto flex justify-between items-center pt-2">
                  <div className="flex items-center text-sm text-[#6B7280] font-medium">
                    <Users className="w-4 h-4 mr-1.5" />
                    {trip.attendees} Interns attending
                  </div>
                  {trip.status === 'Pending RSVP' ? (
                    <Button variant="primary" size="sm">RSVP Now</Button>
                  ) : (
                    <Button variant="secondary" size="sm">View Itinerary</Button>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Local Events Section */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold text-[#1F2937]">Local Office Events</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {localEvents.map((evt, idx) => (
            <motion.div
              key={evt.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (idx * 0.1) }}
            >
              <Card hoverEffect className="h-full p-5 border-l-4 border-l-[#04376C] border-[#E5E7EB]">
                <Badge variant="info" className="mb-4 inline-block">{evt.type}</Badge>
                <h3 className="text-base font-bold text-[#1F2937] mb-3">{evt.title}</h3>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm font-medium text-[#6B7280]">
                    <Calendar className="w-4 h-4 mr-2 text-[#04376C]" />
                    {evt.date}
                  </div>
                  <div className="flex items-center text-sm font-medium text-[#6B7280]">
                    <Building className="w-4 h-4 mr-2 text-[#04376C]" />
                    {evt.location}
                  </div>
                </div>
                
                <Button variant="secondary" size="sm" className="w-full">
                  Add to Calendar
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};