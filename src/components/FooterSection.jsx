import { MapPin, Phone, Mail, Clock, GraduationCap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
          
          {/* About Section */}
          <div>
            <div className="flex items-center mb-4">
              <img 
              className='w-20'
              src='/seglogo.png' />
              <h3 className="text-xl font-bold">Saroj Educational Group</h3>
            </div>
            <p className="text-gray-400">
              Empowering students through quality education and industry-relevant skills since 1995.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-400">123 Education Avenue, Knowledge City, Lucknow, Uttar Pradesh 226002</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-red-500 mr-3" />
                <div>
                  <a href="tel:+915223116178" className="text-gray-400 hover:text-red-500 transition-colors block">+91 522 311 6178</a>
                  <a href="tel:+919810054878" className="text-gray-400 hover:text-red-500 transition-colors block">+91 98100 54878</a>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-red-500 mr-3" />
                <a href="mailto:info@sarojeducation.edu.in" className="text-gray-400 hover:text-red-500 transition-colors">info@sarojeducation.edu.in</a>
              </div>
              
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Saroj Educational Group. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;