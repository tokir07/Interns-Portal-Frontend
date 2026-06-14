import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuthStore } from '../../store/useAuthStore';
import { Button } from '../../components/ui/Button';
import { LogIn, Eye, EyeOff } from 'lucide-react';

export const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<'intern' | 'faculty' | 'admin'>('intern');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      login({
        id: '1',
        name: selectedRole === 'intern' ? 'Alex Intern' : selectedRole === 'faculty' ? 'Dr. Sarah Faculty' : 'Admin User',
        email: email || 'user@iaeste.org',
        role: selectedRole,
        avatarUrl: 'https://i.pravatar.cc/150?u=1'
      });
      setIsLoading(false);
      navigate(`/${selectedRole}/dashboard`);
    }, 800);
  };

  return (
    <div className="min-h-screen w-full bg-[#04376C] flex items-center justify-center p-4">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row relative z-10"
      >
        
        {/* Left Side: Branding */}
        <div className="md:w-1/2 p-12 flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 to-white">
          <div className="relative z-10 text-center flex flex-col items-center">
            {/* Logo Placeholder */}
            <img src="/logo-vertical.png" alt="IAESTE Logo" className="w-48 mb-8 object-contain" onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
            }} />
            
            {/* Fallback if logo not found */}
            <div className="hidden flex flex-col items-center mb-8">
              <div className="w-32 h-32 bg-[#04376C] rounded-full flex items-center justify-center text-white text-4xl font-bold mb-4">
                IAESTE
              </div>
            </div>

            <p className="text-[#04376C] text-lg italic font-medium">"Work. Experience. Discover."</p>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="md:w-1/2 p-8 sm:p-12 bg-white flex flex-col justify-center">
          
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center mb-2">
              <LogIn className="w-8 h-8 mr-3 text-[#04376C]" />
              Portal Login
            </h2>
            <p className="text-gray-500">Access your IAESTE dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Your Email</label>
              <div className="relative">
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full bg-white border border-gray-200 rounded-lg pl-4 pr-4 py-3 text-sm focus:ring-2 focus:ring-[#04376C]/20 focus:border-[#04376C] transition-all outline-none text-gray-900 placeholder-gray-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Your Password</label>
              <div className="relative">
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="********"
                  className="w-full bg-white border border-gray-200 rounded-lg pl-4 pr-10 py-3 text-sm focus:ring-2 focus:ring-[#04376C]/20 focus:border-[#04376C] transition-all outline-none text-gray-900 placeholder-gray-400"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full py-3 bg-[#04376C] hover:bg-[#002840] text-white rounded-lg font-bold mt-2 shadow-lg shadow-[#04376C]/30"
              isLoading={isLoading}
            >
              LOGIN ACCOUNT
            </Button>
          </form>

          <div className="mt-8 flex items-center justify-between text-sm">
            <a href="#" className="text-gray-500 hover:text-gray-900 font-medium">Forgot Password?</a>
            <a href="#" className="text-[#04376C] font-bold hover:underline">Register Now!</a>
          </div>

          {/* Demo Role Selector - Keep for development purposes */}
          <div className="mt-12 pt-6 border-t border-gray-100">
            <p className="text-xs text-gray-400 mb-3 text-center uppercase tracking-wider font-bold">Demo: Select Role to Test</p>
            <div className="flex gap-2 justify-center">
              {['intern', 'faculty', 'admin'].map(role => (
                <button
                  key={role}
                  type="button"
                  onClick={() => setSelectedRole(role as any)}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold uppercase transition-colors ${
                    selectedRole === role 
                      ? 'bg-[#04376C] text-white' 
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};