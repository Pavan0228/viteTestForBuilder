import React from 'react';
import { Rocket, Sparkles, Zap, ChevronRight, Star, Globe, Users, Trophy } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-emerald-900 to-green-800">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/30 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-emerald-400" />
                Vision
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'Features', 'Pricing', 'Contact'].map(item => (
                <a key={item} href="#" className="text-gray-300 hover:text-emerald-400 transition-all hover:scale-105">
                  {item}
                </a>
              ))}
            </div>
            <button className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-emerald-500/30 transition-all hover:-translate-y-0.5">
              Launch App
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-emerald-400/10 px-4 py-2 rounded-full text-emerald-400 flex items-center gap-2">
                <Star className="w-4 h-4" />
                New Features Released
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
            <h1 className="text-7xl font-bold text-white mb-8">
              Design Your
              <span className="block bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Digital Future
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
              Elevate your digital presence with cutting-edge tools and innovative solutions.
            </p>
            <div className="flex justify-center gap-4">
              <button className="group bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/30 transition-all hover:-translate-y-0.5 flex items-center gap-2">
                Start Creating
                <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-emerald-400/30 text-emerald-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-400/10 transition-all flex items-center gap-2">
                Watch Demo
                <Zap className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Globe className="w-6 h-6" />, title: "Global Reach" },
              { icon: <Users className="w-6 h-6" />, title: "Team Collaboration" },
              { icon: <Trophy className="w-6 h-6" />, title: "Premium Quality" }
            ].map((feature, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-emerald-400/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/20">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-lg mb-6 flex items-center justify-center text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400">
                  Innovative solutions designed to elevate your digital experience and transform your workflow.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-teal-900/50 to-emerald-900/50 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Transform Your Vision?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join innovative teams already leveraging our platform.
          </p>
          <button className="group bg-white text-emerald-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-400 transition-all flex items-center gap-2 mx-auto">
            Begin Your Journey
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-md text-gray-400 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white text-lg font-semibold mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                Vision
              </h4>
              <p className="text-sm">
                Empowering creators with next-generation tools.
              </p>
            </div>
            {['Product', 'Company', 'Resources'].map((title) => (
              <div key={title}>
                <h4 className="text-white text-lg font-semibold mb-4">{title}</h4>
                <ul className="space-y-2">
                  {[1, 2, 3].map((i) => (
                    <li key={i}>
                      <a href="#" className="hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                        <span>{title} {i}</span>
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-sm text-center">
            © 2024 Vision. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;