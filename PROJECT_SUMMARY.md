# IAESTE SEP - Interns Portal Frontend

A premium, interactive web portal designed for the **IAESTE Student Exchange Program (SEP)**. This platform serves as a centralized hub for **Interns**, **Faculty / Supervisors**, and **Administrators / Coordinators** to track projects, manage calendar events, sign up for weekend trips, announce updates, and monitor program performance.

---

## 🚀 Tech Stack

The application is built using a modern, fast, and light frontend stack:
- **Core Library**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/) (with protection routes & role-based code splitting)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) (stores for auth, internationalization, sidebar toggle, and light/dark theme)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (modern responsive UI, gradients, glassmorphism card designs)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (smooth micro-animations, dashboard list transitions, layouts)
- **Data Visualization**: [Recharts](https://recharts.org/) (beautiful analytical graphs for admin/faculty analytics)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📂 Project Architecture

```bash
src/
├── app/               # Core App entry & router configuration
├── assets/            # Static assets
├── components/        # Reusable component library
│   ├── layout/        # Navbar & Sidebar components
│   └── ui/            # Form inputs, Cards, Tables, Badges, Progress bars
├── features/          # Feature-based modular structure
│   ├── analytics/     # Admin charts & statistics
│   ├── announcements/ # Multi-category announcements
│   ├── auth/          # Authentication & Login UI
│   ├── calendar/      # Events & Deadlines calendar
│   ├── dashboard/     # Dashboards (Faculty, Intern, Monitoring)
│   ├── events/        # Social events, trips, RSVPs
│   └── projects/      # Kanban boards, Trackers, Reviews
├── layouts/           # Dashboard shell & layout wrappers
├── store/             # Zustand global stores
├── theme/             # Standard style configuration tokens
└── utils/             # Helper utilities (e.g., clsx/tailwind-merge cn helper)
```

---

## 🎯 Key Features by Role

The platform provides customized dashboards and features tailored for three key roles:

### 1. 🧑‍🎓 Intern Space
- **Intern Dashboard**: Clear visualization of project completion percentage, upcoming deadlines, recent announcement feeds, and a quick-log diary for weekly progress reporting.
- **Project Tracker**: Tabular views of task progress, checklist, task status (To Do, In Progress, Review, Completed), and report upload utilities.
- **Smart Calendar**: Full calendar grid detailing deadlines, social gatherings, check-ins, and local holidays.
- **Events & Trips**: Showcase of weekend trips, excursions, and cultural events with integrated RSVP signups, interactive maps/details, and a memory gallery.

### 2. 👩‍🏫 Faculty / Supervisor Console
- **Faculty Dashboard**: Overview of assigned interns, pending submission reviews, active project stats, and urgent action lists.
- **Intern Monitoring**: List directory of all supervised interns, complete with department filters, quick contacts, and current progress metrics.
- **Project Kanban**: Agile board visualization showcasing active task states across interns, facilitating easy status updates and task movement.
- **Submission Review**: Review queue to evaluate intern reports and logbooks with detailed feedback inputs and scoring fields.

### 3. 👑 Admin Dashboard & Control Panel
- **Admin Dashboard / Analytics**: Visual summaries of total active exchange students, host departments, countries represented, and weekly portal activity using bar, area, and pie charts.
- **Announcements Center**: Full management console to publish, edit, draft, and archive portal-wide announcements with categories (Academics, Social, Logistics, Urgent).
- **Faculty & Intern Rosters**: Centralized user directories to view profiles and check active project status.

---

## 💻 Getting Started

To run the application locally:

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Local Development Server**:
   ```bash
   npm run dev
   ```

3. **Build Production Assets**:
   ```bash
   npm run build
   ```
