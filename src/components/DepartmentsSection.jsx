import { 
  Cpu, 
  Briefcase, 
  Scale, 
  Laptop2, 
  Film, 
  Utensils, 
  School,
  FlaskConical,
  Check,
  ArrowRight,
  LibraryBig
} from 'lucide-react';

const DepartmentsSection = () => {
  const departments = [
    {
      name: "Engineering & Technology",
      icon: <Cpu className="w-5 h-5" />,
      programs: ["B.Tech (CSE, ECE, ME, CE)", "M.Tech", "Diploma"],
      institution: "Institute of Technology & Management",
      color: "bg-red-100 text-red-600"
    },
    {
      name: "Management Studies",
      icon: <Briefcase className="w-5 h-5" />,
      programs: ["MBA", "BBA", "PGDM"],
      institution: "Institute of Management Studies",
      color: "bg-amber-100 text-amber-600"
    },
    {
      name: "Computer Applications",
      icon: <Laptop2 className="w-5 h-5" />,
      programs: ["BCA", "MCA", "DCA"],
      institution: "Institute of Computer Applications",
      color: "bg-blue-100 text-blue-600"
    },
    {
      name: "Sciences",
      icon: <FlaskConical className="w-5 h-5" />,
      programs: ["B.Sc (CS, PCM, CBZ)", "M.Sc", "B.Sc (Hons)"],
      institution: "Institute of Science & Technology",
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      name: "Hotel Management",
      icon: <Utensils className="w-5 h-5" />,
      programs: ["BHMCT", "DHM", "Food Technology"],
      institution: "Institute of Hotel Management",
      color: "bg-purple-100 text-purple-600"
    },
    {
      name: "Law",
      icon: <Scale className="w-5 h-5" />,
      programs: ["BA LLB", "LLB", "LLM"],
      institution: "Institute of Law",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      name: "Media Studies",
      icon: <Film className="w-5 h-5" />,
      programs: ["BJMC", "MJMC", "Digital Media"],
      institution: "Institute of Media & Communication",
      color: "bg-pink-100 text-pink-600"
    },
    {
      name: "Education",
      icon: <School className="w-5 h-5" />,
      programs: ["B.Ed", "D.El.Ed", "M.Ed"],
      institution: "Institute of Education",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-red-50 text-red-600 mb-4 border border-red-100">
            Academic Excellence
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Our <span className="text-red-600">Specialized</span> Departments
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-red-500 to-red-300 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600">
            Saroj Educational Group offers focused departments with industry-aligned curriculum and cutting-edge research facilities.
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 overflow-hidden hover:-translate-y-1"
            >
              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-16 h-16 ${dept.color} opacity-10 rounded-bl-full`}></div>
              
              <div className="relative p-6 h-full flex flex-col">
                <div className={`w-12 h-12 rounded-lg ${dept.color} flex items-center justify-center mb-4`}>
                  {dept.icon}
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{dept.name}</h3>
                  <p className="text-sm text-slate-500 mb-4">{dept.institution}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 flex items-center">
                      <LibraryBig className="w-4 h-4 mr-1" />
                      Programs Offered
                    </h4>
                    <ul className="space-y-2">
                      {dept.programs.map((program, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-slate-700">{program}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                
              </div>
            </div>
          ))}
        </div>

       
        
      </div>
    </section>
  );
};

export default DepartmentsSection;