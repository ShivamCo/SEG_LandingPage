import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
removeEventListener;

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Shaloni Devi",
      role: "M.Sc. Biotechnology, Class of 2023",
      content:
        "Saroj's research facilities rival the best institutions globally. Our team published multiple papers in top journals this year, thanks to the cutting-edge labs and collaborative environment.",
      rating: 5,
      image: "/students/shaloni-devi.webp",
    },
    {
      id: 2,
      name: "Ajay Pratap Yadav",
      role: "B.Tech Computer Science, Class of 2018",
      content:
        "The research exposure I received at Saroj directly led to my position at a top tech firm. The faculty's mentorship and industry-aligned projects gave me a tremendous competitive edge.",
      rating: 5,
      image: "/students/ajay-pratap-yadav.webp",
    },
    {
      id: 3,
      name: "Harsh Dixit",
      role: "M.Tech Mechanical Engineering, Class of 2022",
      content:
        "During my postgrad at Saroj, I was impressed by the hands-on research opportunities. The university's focus on real-world impact really helped me grow as an engineer and innovator.",
      rating: 4,
      image: "/students/harsh-dixit.webp",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="relative py-20 bg-slate-900 text-white overflow-hidden border-t border-red-900/50">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-red-900 blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-64 h-64 rounded-full bg-slate-800 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-red-600/30 text-red-200 mb-4 border border-red-500/30">
            Voices of Excellence
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="text-red-400">Community</span> Says
          </h2>
          <p className="text-xl text-red-100">
            Hear from researchers, alumni, and collaborators about their Saroj
            experience.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-slate-800/80 backdrop-blur-md rounded-2xl border border-red-500/20 p-8 md:p-10 shadow-xl overflow-hidden">
            {/* Quote icon */}
            <Quote className="absolute top-6 right-6 w-16 h-16 text-red-900/20" />

            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* img */}
              <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 rounded-full border-4 border-red-500/30 overflow-hidden shadow-lg">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonials[currentIndex].rating
                          ? "text-red-400 fill-red-400"
                          : "text-slate-500"
                      }`}
                    />
                  ))}
                </div>

                <blockquote className="text-lg italic text-slate-200 mb-6">
                  &quot;{testimonials[currentIndex].content}&quot;
                </blockquote>

                <div>
                  <p className="text-xl font-bold text-white">
                    {testimonials[currentIndex].name}
                  </p>
                  <p
                    className="text-red-300"
                    dangerouslySetInnerHTML={{
                      __html: testimonials[currentIndex].role,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="flex justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-slate-700/50 hover:bg-red-600/30 border border-slate-600 hover:border-red-500/50 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      currentIndex === index ? "bg-red-400" : "bg-slate-600"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-slate-700/50 hover:bg-red-600/30 border border-slate-600 hover:border-red-500/50 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
