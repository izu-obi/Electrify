import React, { useState, useRef, useEffect } from "react";

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [startX, setStartX] = useState(null);
  const [isSwiping, setIsSwiping] = useState(false);
  const carouselRef = useRef(null);

  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet consectetur. At tincidunt aliquet orci tristique ac. Non eu ullamcorper sem in eleifend nunc.",
      image: "/images/Ellipse1.png",
      name: "Chinonso Okafor",
      company: "SomeCompany LTD."
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur. Blandit vel velit diam est a. Vitae pharetra et sodales ornare. Eget pharetra tortor ultrices vulputate facilisi euismod dolor.",
      image: "/images/Ellipse2.png",
      name: "Aminu Bello",
      company: "SomeCompany INC."
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur. Nibh morbi eget mattis eleifend amet arcu sed tristique adipiscing. Et pretium libero aliquet est integer amet pellentesque fringilla et.",
      image: "/images/Ellipse3.png",
      name: "Temitope Adebayo",
      company: "SomeCompany LLC."
    }
  ];

  // Handle touch start
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsSwiping(true);
  };

  // Handle touch move
  const handleTouchMove = (e) => {
    if (!isSwiping || !startX) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;

    // Only consider it a swipe if moved significantly
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swiped left - go to next
        setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      } else {
        // Swiped right - go to previous
        setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      }
      setStartX(null);
      setIsSwiping(false);
    }
  };

  // Handle touch end
  const handleTouchEnd = () => {
    setIsSwiping(false);
    setStartX(null);
  };

  // Auto-rotate testimonials (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-28 py-10 sm:py-16 bg-white">
      {/* Heading */}
      <div className="flex justify-center mb-8 sm:mb-14">
        <h2 className="text-primary-blue font-semibold text-2xl sm:text-3xl md:text-4xl text-center">
          What our customers think about us
        </h2>
      </div>

      {/* Desktop View - Hidden on mobile */}
      <div className="hidden md:flex justify-center items-start gap-4 lg:gap-12 text-black">
        {testimonials.map((testimonial, index) => (
          <React.Fragment key={index}>
            {index > 0 && <div className="h-60 w-px bg-gray-300"></div>}
            <div className="w-full lg:w-80 flex flex-col items-center text-center">
              <div>
                <p className="text-sm">{testimonial.text}</p>
              </div>

              {/* Reviewer Info */}
              <div className="flex items-center space-x-4 mt-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <span className="font-bold text-gray-800 block">{testimonial.name}</span>
                  <span className="text-gray-500 text-sm">{testimonial.company}</span>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Mobile View - Carousel */}
      <div 
        className="md:hidden relative overflow-hidden"
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="w-full flex-shrink-0 flex flex-col items-center text-center px-4"
            >
              <div>
                <p className="text-sm">{testimonial.text}</p>
              </div>

              {/* Reviewer Info */}
              <div className="flex items-center space-x-4 mt-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="text-left">
                  <span className="font-bold text-gray-800 block">{testimonial.name}</span>
                  <span className="text-gray-500 text-sm">{testimonial.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all ${
                activeIndex === index ? "w-6 bg-primary-blue" : "w-2 bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;