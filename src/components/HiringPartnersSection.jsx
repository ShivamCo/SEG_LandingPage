import { Building2, Handshake, Briefcase, TrendingUp, Award } from 'lucide-react';


const HiringPartnersSection = () => {
  // Replace these placeholder logos with your actual partner logos
  const partners = [
    { name: "Microsoft", logo: "/logos/microsoft.png", hires: "150+ Alumni" },
    { name: "Amazon", logo: "/logos/amazon.png", hires: "120+ Alumni" },
    { name: "Google", logo: "/logos/google.png", hires: "90+ Alumni" },
    { name: "Infosys", logo: "/logos/infosys.png", hires: "200+ Alumni" },
    { name: "TCS", logo: "/logos/tcs.png", hires: "180+ Alumni" },
    { name: "Wipro", logo: "/logos/wipro.png", hires: "160+ Alumni" },
    { name: "Accenture", logo: "/logos/accenture.png", hires: "140+ Alumni" },
    { name: "IBM", logo: "/logos/ibm.png", hires: "110+ Alumni" },
    { name: "Deloitte", logo: "/logos/deloitte.png", hires: "95+ Alumni" },
    { name: "Capgemini", logo: "/logos/capgemini.png", hires: "85+ Alumni" },
    { name: "HCL", logo: "/logos/hcl.png", hires: "75+ Alumni" },
    { name: "Tech Mahindra", logo: "/logos/tech_mahindra.png", hires: "65+ Alumni" },
  ];

  const stats = [
    { value: "150+", label: "Recruiting Partners", icon: <Building2 className="w-6 h-6" /> },
    { value: "94%", label: "Placement Rate", icon: <TrendingUp className="w-6 h-6" /> },
    { value: "25+", label: "Companies", icon: <Handshake className="w-6 h-6" /> },
    { value: "₹28 LPA", label: "Highest Package", icon: <Award className="w-6 h-6" /> },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-red-50 text-red-600 mb-4 border border-red-100">
            Career Success
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Our <span className="text-red-600">Hiring</span> Partners
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-red-500 to-red-300 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600">
            Leading global organizations that recruit Saroj graduates
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow hover:border-red-200"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-red-50 text-red-600 mr-4">
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
              </div>
              <p className="text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Partner Logos Grid */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="flex flex-col items-center group p-4 hover:bg-slate-50 rounded-lg transition-all"
              >
                <div className="w-full h-24 flex items-center justify-center p-2  transition-all duration-300">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain opacity-90 hover:opacity-100 transition-opacity"
                    onError={(e) => {
                      e.currentTarget.src = '/logos/default_logo.png';
                      e.currentTarget.className = 'max-h-full max-w-full object-contain bg-slate-100 p-2 rounded';
                    }}
                  />
                </div>
                <p className="mt-3 text-xs sm:text-sm text-slate-500 text-center group-hover:text-slate-700 transition-colors">
                  {partner.hires}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        
      </div>
    </section>
  );
};

export default HiringPartnersSection;