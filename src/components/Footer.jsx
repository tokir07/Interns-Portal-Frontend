import React from 'react';
import logoWhite from '../assets/IAESTE logo vertical white.png';
import { toast } from 'react-hot-toast';

const Footer = () => {
  return (
    <footer className="w-full bg-[#041a26]/90 border-t border-slate-800 py-8 px-6 sm:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-xs text-slate-400 shrink-0 mt-auto z-10">
      <div className="flex flex-col space-y-2">
        <img
          src={logoWhite}
          alt="IAESTE LC JECRC"
          className="h-10 object-contain self-start"
        />
        <p className="text-[10px] text-slate-500 font-semibold mt-1">
          © 2026 IAESTE LC JECRC. All rights reserved.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="space-y-2">
          <h5 className="font-bold text-white uppercase text-[10px] tracking-wider">Quick Links</h5>
          <ul className="space-y-1 text-slate-400 text-[10px] font-semibold">
            <li><button onClick={() => toast("Learn about IAESTE SEP program")} className="hover:text-white cursor-pointer">About Us</button></li>
            <li><button onClick={() => toast("Contact IAESTE LC JECRC Desk")} className="hover:text-white cursor-pointer">Contact</button></li>
          </ul>
        </div>
        <div className="space-y-2">
          <h5 className="font-bold text-white uppercase text-[10px] tracking-wider">Students</h5>
          <ul className="space-y-1 text-slate-400 text-[10px] font-semibold">
            <li><button onClick={() => toast("FAQ guide")} className="hover:text-white cursor-pointer">FAQ</button></li>
            <li><button onClick={() => toast("Apply for exchange training")} className="hover:text-white cursor-pointer">Apply</button></li>
          </ul>
        </div>
        <div className="space-y-2">
          <h5 className="font-bold text-white uppercase text-[10px] tracking-wider">Get In Touch</h5>
          <ul className="space-y-1 text-slate-500 text-[10px] font-semibold leading-relaxed">
            <li className="text-slate-400">JECRC University, Jaipur</li>
            <li className="text-[#1B75BB]">iaeste@jecrc.edu.in</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
