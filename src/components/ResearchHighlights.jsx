import { Award, ArrowRight, BookOpenText, Users, LayoutGrid, Landmark, Briefcase, GraduationCap, Sparkles } from 'lucide-react';



const ResearchHighlights = () => {
  return (
    <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('/path-to-subtle-texture.jpg')] opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/30 to-slate-900/80"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-red-600/30 text-red-200 mb-4 border border-red-500/30">
            Research Excellence
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our <span className="text-red-400">Pioneering</span> Research Community
          </h2>
         <p className="text-xl text-red-100">
  At Saroj Educational Group, we&apos;re shaping the future through groundbreaking discoveries.
</p>

        </div>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Left side - Images */}
          <div className="lg:w-1/2 space-y-6">
            <div className="relative group overflow-hidden rounded-2xl shadow-2xl border-2 border-white/10">
              <img 
                src="/sre.jpg" 
                alt="Research lab" 
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <div>
                  <div className="text-4xl font-bold text-white font-serif">146+</div>
                  <p className="text-red-300 font-medium">Peer-Reviewed Publications</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="relative group overflow-hidden rounded-2xl shadow-xl border-2 border-white/10">
                <img 
                  src="/ub.jpeg" 
                  alt="University building" 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <div>
                    <div className="text-2xl font-bold text-white font-serif">52</div>
                    <p className="text-sm text-red-300">Acre Innovation Hub</p>
                  </div>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-2xl shadow-xl border-2 border-white/10">
                <img 
                  src="/g_student.jpg" 
                  alt="Students graduating" 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <div>
                    <div className="text-2xl font-bold text-white font-serif">25+</div>
                    <p className="text-sm text-red-300">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:w-1/2">
            <div className="bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl border border-red-500/20 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-red-600/30 text-red-300 mr-4 border border-red-500/30">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">SAROJ RESEARCH INITIATIVES</h3>
                  <p className="text-red-300 font-medium">Accredited with Highest Honors</p>
                </div>
              </div>

              <div className="prose prose-lg text-slate-200 mb-8">
                <p>
                  Recognized by the <strong className="text-white">Ministry of Education</strong> for 
                  excellence in <span className="text-red-300">Sustainable Energy</span> and 
                  <span className="text-red-300"> Entrepreneurial Research</span>.
                </p>
                <p>
                  Our faculty includes 12 <span className="text-red-300">Padma Awardees</span> and 
                  45 <span className="text-red-300">Fellows of National Academies</span>.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-700/50 p-4 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-colors">
                  <div className="text-3xl font-bold text-red-400 mb-1 font-serif">3<sup>rd</sup></div>
                  <p className="text-sm text-red-200">National Ranking for Patents</p>
                </div>
                <div className="bg-slate-700/50 p-4 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-colors">
                  <div className="text-3xl font-bold text-red-400 mb-1 font-serif">800+</div>
                  <p className="text-sm text-red-200">Global Recruiters</p>
                </div>
                <div className="bg-slate-700/50 p-4 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-colors">
                  <div className="text-3xl font-bold text-red-400 mb-1 font-serif">40K+</div>
                  <p className="text-sm text-red-200">Bright Minds</p>
                </div>
                <div className="bg-slate-700/50 p-4 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-colors">
                  <div className="text-3xl font-bold text-red-400 mb-1 font-serif">20K+</div>
                  <p className="text-sm text-red-200">Successful Alumni</p>
                </div>
              </div>

              <div className="bg-red-900/30 p-4 rounded-lg border border-red-500/30 hover:border-red-500/50 transition-colors">
                <p className="text-red-200 font-medium flex items-center">
                  <Landmark className="w-5 h-5 mr-2 text-red-300" />
                  Recognized by Government of India
                </p>
                <p className="text-red-300 mt-1 font-mono">www.seglko.org</p>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default ResearchHighlights;