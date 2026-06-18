// Consolidated Mock Data for IAESTE SEP Portal

export const internProfile = {
  name: "Sophia Müller",
  role: "intern",
  country: "Germany",
  university: "Technical University of Munich (TUM)",
  duration: "12 Weeks",
  startDate: "2026-06-01",
  endDate: "2026-08-24",
  projectTitle: "Smart Water Quality Monitoring using IoT and Machine Learning",
  department: "Computer Science & Engineering",
  supervisor: "Dr. Alok Kumar",
  email: "sophia.mueller@tum.de",
  phone: "+49 176 12345678",
  phone1: "+91 9079968792",
  skills: ["React", "Python", "IoT", "Machine Learning", "Data Analysis"],
  languages: ["German (Native)", "English (Fluent)", "Hindi (Basic)"],
  hostel: "JECRC International Hostel Block A",
  roomNo: "304",
  stats: {
    eventsAttended: 4,
    tripsJoined: 2,
    tasksCompleted: 12,
  }
};

export const tasks = [
  {
    id: "task-1",
    title: "IoT Node Calibration",
    description: "Calibrate the pH and turbidity sensors connected to the ESP32 microcontroller and write test scripts in Python.",
    status: "in_progress",
    priority: "high",
    deadline: "2026-06-20",
    attachments: [
      { name: "sensor_specs.pdf", size: "1.2 MB", type: "pdf" }
    ],
    comments: [
      { author: "Dr. Alok Kumar", text: "Ensure the calibration curves match the manufacturer's manual.", date: "1 day ago" }
    ],
    progress: 60
  },
  {
    id: "task-2",
    title: "Draft Midterm Report",
    description: "Document the research progress, sensor specifications, calibration results, and system architecture for the midterm review.",
    status: "todo",
    priority: "high",
    deadline: "2026-07-05",
    attachments: [],
    comments: [],
    progress: 0
  },
  {
    id: "task-3",
    title: "Literature Review on IoT Water Quality Systems",
    description: "Read and summarize at least 5 IEEE papers on recent IoT architectures for water quality management.",
    status: "completed",
    priority: "medium",
    deadline: "2026-06-10",
    attachments: [
      { name: "literature_notes.pdf", size: "850 KB", type: "pdf" }
    ],
    comments: [
      { author: "Sophia Müller", text: "Uploaded notes in the documents tab.", date: "5 days ago" }
    ],
    progress: 100
  },
  {
    id: "task-4",
    title: "React Web Dashboard Mockups",
    description: "Design mockups for showcasing the real-time sensor graphs, alerts list, and data export tables.",
    status: "review",
    priority: "medium",
    deadline: "2026-06-18",
    attachments: [
      { name: "dashboard_ui.png", size: "2.4 MB", type: "image" }
    ],
    comments: [
      { author: "Aarav Sharma", text: "Clean layout, maybe add a chart zoom feature.", date: "12 hours ago" }
    ],
    progress: 90
  },
  {
    id: "task-5",
    title: "Setup Local SQL Database",
    description: "Create standard table schemas for storing hourly sensor readings including timestamp, pH, turbidity, and temperature.",
    status: "completed",
    priority: "low",
    deadline: "2026-06-08",
    attachments: [],
    comments: [],
    progress: 100
  }
];

export const trips = [
  {
    id: "trip-1",
    destination: "Jaisalmer Desert Safari",
    duration: "3 Days, 2 Nights",
    cost: "₹5,500 ($66)",
    seatsAvailable: 4,
    seatsTotal: 25,
    registeredCount: 21,
    waitingListCount: 2,
    date: "2026-06-26 to 2026-06-28",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80", // Will fallback/work or generate
    description: "Experience the magic of the golden sand dunes of Rajasthan. Includes camel rides, overnight desert camp, traditional Rajasthani folk dances, and visits to the historical Jaisalmer Fort and Kuldhara haunted village.",
    schedule: [
      { day: "Day 1", detail: "Departure from JECRC campus at 9 PM (Overnight travel by AC Sleeper Bus)." },
      { day: "Day 2", detail: "Arrival, hotel check-in. Explore Jaisalmer Fort and Gadisar Lake. Head to Sam Dunes for camel safari, sunset view, and traditional musical night." },
      { day: "Day 3", detail: "Sunrise dune walk. Visit Kuldhara Haunted Village. Departure back to Jaipur in the evening." }
    ],
    meetingPoint: "Main Gate, JECRC University Campus",
    packingChecklist: [
      "Lightweight cotton clothes (highly recommended)",
      "Sunglasses and sunscreen",
      "Hat or scarf for sun protection",
      "Camera & powerbank",
      "Personal medications"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: "trip-2",
    destination: "Udaipur Lakes Tour",
    duration: "2 Days, 2 Nights",
    cost: "₹4,800 ($58)",
    seatsAvailable: 8,
    seatsTotal: 20,
    registeredCount: 12,
    waitingListCount: 0,
    date: "2026-07-10 to 2026-07-12",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80",
    description: "Explore the 'Venice of the East'. Udaipur is famous for its history, culture, scenic locations and Rajput-era palaces. We'll enjoy scenic boat rides and tour the heritage forts.",
    schedule: [
      { day: "Day 1", detail: "Overnight journey by train. Reach Udaipur early morning, check-in to lake-view hostel. Tour the massive City Palace and take a boat ride on Lake Pichola." },
      { day: "Day 2", detail: "Visit Monsoon Palace, Sajjangarh for panoramic views. Explore Saheliyon-ki-Bari gardens. Journey back to Jaipur." }
    ],
    meetingPoint: "Jaipur Junction Railway Station, Platform 1",
    packingChecklist: [
      "Camera",
      "Comfortable walking shoes",
      "Smart-casual clothing for palace visits",
      "Water bottle"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=400&q=80"
    ]
  }
];

export const events = [
  {
    id: "event-1",
    title: "Cultural Exchange & Food Fest",
    coverImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
    date: "2026-06-22",
    time: "6:00 PM - 9:00 PM",
    venue: "JECRC Auditorium Ground",
    category: "cultural",
    description: "An evening dedicated to global culture. Share your country's traditional dishes, music, and traditions. Local students will present classical and Rajasthani folk dances, and setting up food stalls.",
    organizer: "IAESTE JECRC Local Committee",
    attendees: ["Sophia", "Markus", "Aarav", "Elena", "Dev", "Priya"]
  },
  {
    id: "event-2",
    title: "Jaipur Heritage Photo Walk",
    coverImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
    date: "2026-06-18",
    time: "7:00 AM - 11:00 AM",
    venue: "Hawa Mahal (Pink City)",
    category: "social",
    description: "A photogenic morning walk through the historical lanes of the Pink City. Capture the morning sunlight lighting up the Hawa Mahal, explore spice markets, and sip local lassi at Lassiwala.",
    organizer: "JECRC Photography Club",
    attendees: ["Sophia", "Elena", "Aarav", "Tushar"]
  }
];

export const announcements = [
  {
    id: "announce-1",
    title: "Urgent: FRRO Registration Documents Needed",
    message: "All international interns who arrived this week must submit their visa page copy, photo, and host agreement copy to the IAESTE Office by tomorrow 2 PM to initiate FRRO local authority registration.",
    category: "Urgent",
    date: "2026-06-15",
    pinned: true,
    author: "Prof. Rajesh Gupta (Coordinator)"
  },
  {
    id: "announce-2",
    title: "Upcoming Academic Seminar Guidelines",
    message: "A quick reminder that you are requested to present a brief 5-slide research plan for your internship projects during the weekly seminar on Friday morning. Please coordinate with your faculty supervisors.",
    category: "Academic",
    date: "2026-06-14",
    pinned: false,
    author: "Academic Coordinator"
  },
  {
    id: "announce-3",
    title: "Logistics: Hostels Mess Timing Updates",
    message: "The International Hostel Mess will operate on revised summer timings: Breakfast (7:30 AM - 9:00 AM), Lunch (12:30 PM - 2:00 PM), and Dinner (7:30 PM - 9:30 PM). Please adhere to these timings.",
    category: "Logistics",
    date: "2026-06-12",
    pinned: false,
    author: "Hostel Warden"
  }
];

export const documents = [
  {
    id: "doc-1",
    name: "IAESTE Offer Letter",
    category: "Offer Letter",
    date: "2026-04-15",
    size: "420 KB",
    previewUrl: "Offer Letter Content: Official IAESTE exchange confirmation, naming JECRC University as Host, duration 12 Weeks, stipend ₹10,000/month."
  },
  {
    id: "doc-2",
    name: "Indian Visa Copy",
    category: "Visa Information",
    date: "2026-05-10",
    size: "980 KB",
    previewUrl: "Visa Document Copy: Sophia Müller, Student Visa, Multiple Entry, Valid for 180 Days. Registered local sponsor: JECRC University, Jaipur."
  },
  {
    id: "doc-3",
    name: "Travel Health Insurance Certificate",
    category: "Insurance",
    date: "2026-05-20",
    size: "1.5 MB",
    previewUrl: "Insurance Confirmation: Allianz Travel Global, Sophia Müller. Medical coverage, repatriation, emergency dental, liability limit €1,000,000."
  },
  {
    id: "doc-4",
    name: "JU Host Acceptance Certificate",
    category: "Internship Letter",
    date: "2026-06-02",
    size: "280 KB",
    previewUrl: "Host Acceptance: JECRC University, signed by Registrar. Welcoming Ms. Sophia Müller under CSE department for research training starting June 1, 2026."
  }
];

export const buddy = {
  name: "Aarav Sharma",
  photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
  department: "B.Tech Computer Science (3rd Year)",
  phone: "+91 98765 43210",
  email: "aarav.sharma@jecrc.edu.in",
  languages: ["English", "Hindi", "Rajasthani"],
  interests: ["Photography", "Web Dev", "Cricket", "Jaipur Street Food"],
  availability: "Weekdays (after 4 PM), Weekends (Full day)"
};

export const calendarEvents = [
  { id: "1", title: "Arrival & Welcome", start: "2026-06-01", className: "bg-blue-500 border-blue-500 text-white" },
  { id: "2", title: "IoT Calibration Deadline", start: "2026-06-20", className: "bg-red-500 border-red-500 text-white" },
  { id: "3", title: "Jaisalmer Excursion", start: "2026-06-26", end: "2026-06-29", className: "bg-green-500 border-green-500 text-white" },
  { id: "4", title: "Cultural Food Fest", start: "2026-06-22", className: "bg-purple-500 border-purple-500 text-white" },
  { id: "5", title: "Indian Independence Day (Holiday)", start: "2026-08-15", className: "bg-orange-500 border-orange-500 text-white" },
  { id: "6", title: "Midterm Evaluation Seminars", start: "2026-07-08", className: "bg-purple-500 border-purple-500 text-white" }
];

export const accommodation = {
  hostelName: "JECRC International Hostel Block A",
  roomNumber: "304 (Double Occupancy)",
  checkInDate: "2026-06-01",
  checkOutDate: "2026-08-25",
  wifiSsid: "JU_International_Guest",
  wifiPass: "WelcomeJU2026!",
  messTimings: {
    breakfast: "7:30 AM - 9:00 AM",
    lunch: "12:30 PM - 2:00 PM",
    dinner: "7:30 PM - 9:30 PM"
  },
  laundryDays: "Tuesdays & Saturdays (Drop at Basement by 9 AM)",
  rules: [
    "Curfew time is 10:00 PM for all international residents.",
    "Please switch off ACs and lights when leaving the room.",
    "No outsiders allowed inside rooms without Warden's approval.",
    "Report maintenance issues through the support tickets system."
  ],
  tickets: [
    { id: "tick-101", category: "WiFi", title: "Frequent disconnection in room 304", status: "Resolved", date: "2026-06-03" },
    { id: "tick-102", category: "Cleaning", title: "Room dust cleaning request", status: "Open", date: "2026-06-14" }
  ]
};
