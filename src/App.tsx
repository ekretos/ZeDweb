import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { Snowflake, Zap, Users, ShieldBan, Bot, Gavel, Mouse, Bell, ScrollText, Lock, Heart, MessageCircle } from 'lucide-react';
import DocPage from './components/DocPage';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/docs/:feature" element={<DocPage />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function HomePage() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const cards = document.querySelectorAll('.feature-card');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(card => observer.observe(card));

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const features = [
    {
      id: 'antinuke',
      icon: <ShieldBan className="h-8 w-8 text-indigo-400" />,
      title: "Antinuke",
      description: "Advanced protection against mass bans, channel deletions, and role modifications with instant threat neutralization"
    },
    {
      id: 'welcome',
      icon: <Heart className="h-8 w-8 text-indigo-400" />,
      title: "Welcome",
      description: "Customizable welcome messages and greetings to warmly introduce new members to your server community"
    },
    {
      id: 'custom-embed',
      icon: <MessageCircle className="h-8 w-8 text-indigo-400" />,
      title: "Custom Embed",
      description: "Create beautiful, professional-looking embedded messages with rich formatting and custom styling"
    },
    {
      id: 'automod',
      icon: <Bot className="h-8 w-8 text-indigo-400" />,
      title: "AutoMod",
      description: "Intelligent moderation system that automatically filters spam, inappropriate content, and suspicious behavior"
    },
    {
      id: 'strikes',
      icon: <Gavel className="h-8 w-8 text-indigo-400" />,
      title: "Strikes",
      description: "Fair warning system with customizable thresholds and automated actions based on violation severity"
    },
    {
      id: 'alerts',
      icon: <Bell className="h-8 w-8 text-indigo-400" />,
      title: "Real-time Alerts",
      description: "Instant notifications for suspicious activities and security threats with detailed incident reports"
    },
    {
      id: 'audit',
      icon: <ScrollText className="h-8 w-8 text-indigo-400" />,
      title: "Audit Logging",
      description: "Comprehensive logging of all server events with searchable history and detailed analytics"
    },
    {
      id: 'lockdown',
      icon: <Lock className="h-8 w-8 text-indigo-400" />,
      title: "Lockdown Mode",
      description: "Emergency server lockdown with one click to prevent unauthorized access during security incidents"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900">
      {/* Hero Section - Full viewport height */}
      <div className="relative h-screen flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549477459-d1915be1ed26?q=80&w=2000')] bg-cover bg-center opacity-5"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
        </div>
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex items-center">
          <div className="text-center w-full">
            <Snowflake className="h-20 w-20 mx-auto text-indigo-400 animate-pulse" />
            <h1 className="mt-6 text-6xl font-bold text-white tracking-tight">
              Zero Degree
            </h1>
            <p className="mt-4 text-xl text-indigo-200 font-medium">
              Freeze to Zero - The Ultimate Discord Anti-Nuke Protection
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4">
              <a
                href="https://discord.com/oauth2/authorize?client_id=1336608964162359297" target="_blank"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-950 bg-indigo-100 hover:bg-indigo-200 transition-all duration-200 shadow-lg hover:shadow-indigo-400/50"
              >
                Add to Discord
                <Zap className="ml-2 h-5 w-5" />
              </a>
              <a
                href="https://discord.gg/rC9euvHtD2" target="_blank"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-indigo-400 text-base font-medium rounded-md text-indigo-100 bg-transparent hover:bg-indigo-900/50 transition-all duration-200 shadow-lg hover:shadow-indigo-400/50"
              >
                Join Server
                <Users className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator at bottom of hero */}
        <div className={`relative w-full flex justify-center pb-12 transition-opacity duration-500 ${showScrollIndicator ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className="flex flex-col items-center justify-center animate-bounce">
            <Mouse className="h-8 w-8 text-indigo-400" />
            <div className="mt-2 text-indigo-400 text-sm">Scroll to explore</div>
          </div>
        </div>
      </div>

      {/* Features Section - Start on next page */}
      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.id}
                {...feature}
                delay={index * 100}
                onClick={() => navigate(`/docs/${feature.id}`)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-indigo-400">
          <div className="text-left flex items-center">
            <Snowflake className="h-8 w-8 text-indigo-400 mr-2" />
            <p className="text-2xl font-bold">Zero Degree</p>
          </div>
          {/* Useful Links */}
          <div className="text-right">
            <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
            <ul>
              <li className="mb-2"><a href="https://discord.com/oauth2/authorize?client_id=1336608964162359297" className="hover:underline">Add to Discord</a></li>
              <li className="mb-2"><a href="https://discord.gg/zerodeg" className="hover:underline">Join Server</a></li>
            </ul>
          </div>
          {/* Resources */}
          <div className="text-right">
            <h3 className="text-xl font-semibold mb-4">Resources</h3>
            <ul>
              <li className="mb-2"><a href="/docs" className="hover:underline">Documentation</a></li>
              <li className="mb-2"><a href="/support" className="hover:underline">Support</a></li>
              <li className="mb-2"><a href="/team" className="hover:underline">Team</a></li>
              <li className="mb-2"><a href="/updates" className="hover:underline">Updates</a></li>
            </ul>
          </div>
          {/* Legal */}
          <div className="text-right">
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul>
              <li className="mb-2"><a href="/terms-of-service" className="hover:underline">Terms of Service</a></li>
              <li className="mb-2"><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
              <li className="mb-2"><a href="/refund-policy" className="hover:underline">Refund Policy</a></li>
              <li className="mb-2"><a href="/cookie-policy" className="hover:underline">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-indigo-400 pb-8">
          <p>© 2025 Zero Degree Bot. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactElement;
  title: string;
  description: string;
  delay: number;
  onClick: () => void;
}

function FeatureCard({ icon, title, description, delay, onClick }: FeatureCardProps) {
  return (
    <div
      onClick={onClick}
      className="feature-card p-8 rounded-lg bg-slate-900/40 backdrop-blur-sm border border-indigo-800/30 hover:border-indigo-600/50 transition-all duration-700 h-full opacity-0 translate-y-8 cursor-pointer hover:transform hover:scale-105"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bg-indigo-950/50 p-3 rounded-full w-fit">
        {icon}
      </div>
      <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-indigo-200">{description}</p>
    </div>
  );
}

export default App;