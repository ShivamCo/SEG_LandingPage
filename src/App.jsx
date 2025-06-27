
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import { useState } from 'react';
import { 
  BookOpen, 
  GraduationCap, 
  Users, 
  Award, 
  Clock, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X,
  ArrowRight,
  Check
} from 'lucide-react';


import DepartmentsSection from './components/DepartmentsSection';
import ResearchHighlights from './components/ResearchHighlights';
import TestimonialsSection from './components/TestimonialsSection';
import HiringPartnersSection from './components/HiringPartnersSection';
import HeroSection from './components/HeroSection';
import AdmissionsSection from './components/AdmissionsSection';
import Footer from './components/FooterSection';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
     
  <HeroSection />
  <AdmissionsSection />
  <DepartmentsSection />
  <ResearchHighlights />
  <TestimonialsSection />
  <HiringPartnersSection />
  <Footer />
  
    </>
  )
}

export default App
