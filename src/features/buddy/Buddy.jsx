import { buddy } from "../../mocks/index";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin, Calendar, Clock, Star } from "lucide-react";
import { toast, Toaster } from "react-hot-toast";

export const Buddy = () => {
  const handleAction = (type) => {
    toast(`Simulated action: ${type} JECRC Buddy ${buddy.name}`);
  };

  return (
    <div className="space-y-6 text-foreground pb-12">
      <Toaster position="top-right" />

      {/* Header */}
      <div>
        <h1 className="text-xl sm:text-2xl font-black text-text-primary">My Local Buddy</h1>
        <p className="text-xs text-text-secondary mt-1">
          Every international intern is assigned a JECRC student buddy to assist with campus navigation, local travel, and language translation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card border border-border rounded-2xl p-6 shadow-card flex flex-col items-center text-center space-y-4"
        >
          <div className="relative">
            <img
              src={buddy.photo}
              alt={buddy.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-border shadow-md"
            />
            <span className="absolute bottom-1 right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-card" title="Online now"></span>
          </div>

          <div>
            <h2 className="text-lg font-black text-text-primary">{buddy.name}</h2>
            <p className="text-xs text-text-secondary font-semibold mt-0.5">{buddy.department}</p>
          </div>

          <span className="inline-flex items-center space-x-1 bg-yellow-500/10 text-yellow-600 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase">
            <Star className="w-3 h-3 fill-yellow-600" />
            <span>Assigned Buddy</span>
          </span>

          <div className="w-full h-px bg-border"></div>

          {/* Quick Actions */}
          <div className="flex gap-2 w-full justify-center">
            <button
              onClick={() => handleAction("Calling")}
              className="p-3 bg-blue-500/10 text-blue-600 rounded-xl hover:bg-blue-500 hover:text-white transition-colors"
              title="Call Phone"
            >
              <Phone className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleAction("WhatsApping")}
              className="p-3 bg-green-500/10 text-green-600 rounded-xl hover:bg-green-500 hover:text-white transition-colors"
              title="WhatsApp Chat"
            >
              <MessageCircle className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleAction("Emailing")}
              className="p-3 bg-purple-500/10 text-purple-600 rounded-xl hover:bg-purple-500 hover:text-white transition-colors"
              title="Send Email"
            >
              <Mail className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Detailed Info Column */}
        <div className="md:col-span-2 space-y-6">
          
          {/* About Buddy */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card border border-border rounded-2xl p-6 shadow-card space-y-4"
          >
            <h3 className="text-xs font-bold text-text-primary uppercase tracking-wider">
              Profile details & Languages
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium text-text-secondary">
              <div className="space-y-1">
                <p className="text-[9px] uppercase font-bold text-text-secondary">Languages Spoken</p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {buddy.languages.map((lang, idx) => (
                    <span key={idx} className="bg-slate-100 dark:bg-slate-800 text-text-primary px-2 py-0.5 rounded font-bold">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-[9px] uppercase font-bold text-text-secondary">Availability Slots</p>
                <div className="flex items-center space-x-1.5 text-text-primary font-bold mt-1">
                  <Clock className="w-4 h-4 text-[#04376C] dark:text-[#1E6FD9]" />
                  <span>{buddy.availability}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interests & Hobbies */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-border rounded-2xl p-6 shadow-card space-y-4"
          >
            <h3 className="text-xs font-bold text-text-primary uppercase tracking-wider">
              Interests & Local Expertise
            </h3>
            <p className="text-xs text-text-secondary leading-relaxed">
              {buddy.name} is a local student in Jaipur and is passionate about exploring culture. Connect with him to find the best street food stalls (like Masala Chowk) or local heritage sites.
            </p>
            
            <div className="flex flex-wrap gap-2 pt-2">
              {buddy.interests.map((interest, idx) => (
                <span
                  key={idx}
                  className="bg-[#04376C]/5 dark:bg-[#1E6FD9]/10 text-[#04376C] dark:text-[#1E6FD9] border border-[#04376C]/10 dark:border-[#1E6FD9]/20 px-3 py-1 rounded-full text-xs font-bold"
                >
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
};
