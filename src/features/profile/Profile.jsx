import { useState } from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { useLangStore } from "../../store/useLangStore";
import { internProfile } from "../../mocks/index";
import { motion } from "framer-motion";
import { Award, Plus, X, Settings } from "lucide-react";
import { toast, Toaster } from "react-hot-toast";

export const Profile = () => {
  const { user } = useAuthStore();
  const { language, setLanguage } = useLangStore();

  // Skills state
  const [skills, setSkills] = useState(internProfile.skills);
  const [newSkill, setNewSkill] = useState("");

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (!newSkill.trim()) return;
    if (skills.includes(newSkill.trim())) {
      toast.error("Skill already exists.");
      return;
    }
    setSkills([...skills, newSkill.trim()]);
    setNewSkill("");
    toast.success("Skill tag added!");
  };

  const handleRemoveSkill = (tag) => {
    setSkills(skills.filter((s) => s !== tag));
    toast.success("Skill tag removed.");
  };

  return (
    <div className="space-y-6 text-foreground pb-12">
      <Toaster position="top-right" />

      {/* Header */}
      <div>
        <h1 className="text-xl sm:text-2xl font-black text-text-primary">Intern Profile Control Panel</h1>
        <p className="text-xs text-text-secondary mt-1">
          Review your credentials, manage research project details, and customize application preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

        {/* Left Column: Visual Profile Card */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card border border-border rounded-2xl p-6 shadow-card flex flex-col items-center text-center space-y-4"
          >
            <div className="h-20 w-20 rounded-full bg-[#0b3d59] text-white flex items-center justify-center font-bold text-xl shadow-md shrink-0">
              {user?.name ? user.name.substring(0, 2).toUpperCase() : "SM"}
            </div>

            <div>
              <h2 className="text-lg font-black text-text-primary">{user?.name || internProfile.name}</h2>
              <p className="text-xs text-text-secondary font-semibold mt-0.5">International Intern</p>
            </div>

            <div className="flex flex-wrap gap-2 justify-center pt-2">
              <span className="bg-[#0b3d59]/5 text-[#0b3d59] text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-[#0b3d59]/10">
                {internProfile.country}
              </span>
              <span className="bg-[#1B75BB]/5 text-[#1B75BB] text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-[#1B75BB]/10">
                {internProfile.duration} Stay
              </span>
            </div>

            <div className="w-full h-px bg-border my-2"></div>

            {/* Contact details */}
            <div className="w-full text-left space-y-2 text-xs font-semibold">
              <div>
                <p className="text-[9px] uppercase font-bold text-text-secondary">Email Address</p>
                <p className="text-text-primary break-all mt-0.5">{internProfile.email}</p>
              </div>
              <div>
                <p className="text-[9px] uppercase font-bold text-text-secondary">Phone Number</p>
                <p className="text-text-primary mt-0.5">{internProfile.phone}</p>
              </div>
              <div>
                <p className="text-[9px] uppercase font-bold text-text-secondary">Indian Phone Number</p>
                <p className="text-text-primary mt-0.5">{internProfile.phone1}</p>
              </div>
              <div>
                <p className="text-[9px] uppercase font-bold text-text-secondary">Home University</p>
                <p className="text-text-primary mt-0.5">{internProfile.university}</p>
              </div>
            </div>

            <div className="w-full h-px bg-border my-2"></div>

            {/* Hostel Details */}
            <div className="w-full text-left space-y-2 text-xs font-semibold">
              <p className="text-[9px] uppercase font-bold text-text-secondary">Hostel Accommodation</p>
              <div className="bg-slate-50 border border-border rounded-xl p-3 space-y-1">
                <p className="text-text-primary text-xs font-bold">{internProfile.hostel}</p>
                <p className="text-text-secondary text-[11px]">Room Number: <span className="font-bold text-text-primary">{internProfile.roomNo}</span></p>
              </div>
            </div>
          </motion.div>

          {/* Languages Spoken */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card border border-border rounded-2xl p-6 shadow-card space-y-4"
          >
            <h3 className="text-xs font-bold text-text-primary uppercase tracking-wider">
              Languages Spoken
            </h3>
            <div className="flex flex-wrap gap-2 pt-1">
              {internProfile.languages.map((lang) => (
                <span
                  key={lang}
                  className="bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1 rounded-full border border-border"
                >
                  {lang}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Project & Preferences */}
        <div className="lg:col-span-2 space-y-6">

          {/* Research Internship Details */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="bg-card border border-border rounded-2xl p-6 shadow-card space-y-6"
          >
            <h3 className="text-xs font-bold text-text-primary uppercase tracking-wider flex items-center space-x-2">
              <Award className="w-4 h-4 text-[#0b3d59]" />
              <span>Research Internship Details</span>
            </h3>

            <div className="space-y-4 font-semibold text-xs">
              {/* Project Title Block */}
              <div className="bg-[#0b3d59]/5 border border-[#0b3d59]/10 rounded-2xl p-5 space-y-1.5">
                <p className="text-[9px] uppercase font-bold text-text-secondary">Assigned Research Project</p>
                <h4 className="text-sm font-black text-[#0b3d59] leading-snug">
                  {internProfile.projectTitle}
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 border border-border rounded-xl p-4">
                  <p className="text-[9px] uppercase font-bold text-text-secondary">Host Department</p>
                  <p className="text-text-primary text-xs font-bold mt-1">{internProfile.department}</p>
                </div>
                <div className="bg-slate-50 border border-border rounded-xl p-4">
                  <p className="text-[9px] uppercase font-bold text-text-secondary">Faculty Supervisor</p>
                  <p className="text-text-primary text-xs font-bold mt-1">{internProfile.supervisor}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 border border-border rounded-xl p-4">
                  <p className="text-[9px] uppercase font-bold text-text-secondary">Start Date</p>
                  <p className="text-text-primary text-xs font-bold mt-1">{internProfile.startDate}</p>
                </div>
                <div className="bg-slate-50 border border-border rounded-xl p-4">
                  <p className="text-[9px] uppercase font-bold text-text-secondary">End Date</p>
                  <p className="text-text-primary text-xs font-bold mt-1">{internProfile.endDate}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Skills Tags Editor */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-border rounded-2xl p-6 shadow-card space-y-4"
          >
            <h3 className="text-xs font-bold text-text-primary uppercase tracking-wider flex items-center space-x-2">
              <Award className="w-4 h-4 text-[#0b3d59]" />
              <span>Project Skills & Focus Areas</span>
            </h3>
            <p className="text-xs text-text-secondary">Manage technical skills tags associated with your JECRC research project for display on your certificate.</p>

            {/* Tag List */}
            <div className="flex flex-wrap gap-2 pt-2">
              {skills.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center space-x-1 bg-[#0b3d59]/5 text-[#0b3d59] border border-[#0b3d59]/10 px-3 py-1 rounded-full text-xs font-bold"
                >
                  <span>{tag}</span>
                  <button
                    onClick={() => handleRemoveSkill(tag)}
                    className="p-0.5 rounded-full hover:bg-[#0b3d59]/15 text-text-secondary hover:text-text-primary shrink-0 cursor-pointer"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>

            {/* Add Tag Form */}
            <form onSubmit={handleAddSkill} className="flex gap-2 text-xs pt-4 border-t border-border mt-4">
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                placeholder="Add new research skill (e.g. SQL, NumPy)..."
                className="flex-1 bg-[#F5F7FA] border border-border rounded-xl px-3 py-2 outline-none focus:border-[#1B75BB] text-text-primary focus:bg-card placeholder-text-secondary"
              />
              <button
                type="submit"
                className="inline-flex items-center space-x-1.5 bg-[#0b3d59] text-white font-bold px-4 py-2 rounded-xl cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add Tag</span>
              </button>
            </form>
          </motion.div>

          {/* Preferences Settings */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="bg-card border border-border rounded-2xl p-6 shadow-card space-y-4"
          >
            <h3 className="text-xs font-bold text-text-primary uppercase tracking-wider flex items-center space-x-2">
              <Settings className="w-4 h-4 text-[#0b3d59]" />
              <span>Application Preferences</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold">
              <div className="space-y-2">
                <p className="text-[10px] text-text-secondary uppercase">Interface Language</p>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full bg-[#F5F7FA] border border-border rounded-xl px-4 py-2 font-bold text-text-primary outline-none focus:border-[#1B75BB] focus:bg-card"
                >
                  <option value="en">English (Default)</option>
                  <option value="de">Deutsch (German)</option>
                  <option value="fr">Français (French)</option>
                  <option value="es">Español (Spanish)</option>
                </select>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
};
