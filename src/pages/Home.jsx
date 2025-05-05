import TokenGeneratorForm from "../components/TokenGeneratorForm";
import ElectricityFeatures from "../components/ElectricityFeatures";
import Testimonial from "../components/Testimonial";
import { useEffect } from "react";

const Home = () => {

  useEffect(() => {
    document.title = "Home | Electrify";
  }, []);

  return (
    <>
      {/* First Section */}
      <section className="landing relative min-h-[90vh] md:min-h-screen w-full pt-20 sm:pt-10">
        <div className="bg-landing absolute inset-0 -z-10"></div>
        <div className="flex flex-col sm:flex-row items-center justify-between w-full h-full px-4 sm:px-8 md:px-12 lg:px-16 pb-6 sm:pb-10">
          {/* Text Container */}
          <div className="w-full sm:w-1/2 lg:w-[35%] font-semibold text-2xl sm:text-3xl md:text-4xl text-white mt-10 sm:mt-0 lg:self-end lg:mb-30">
            <h2>
              <span className="text-primary-blue">Electrify,</span> The smart choice
              for electricity.
            </h2>
          </div>
          
          {/* Form */}
          <div className="w-full sm:w-1/2">
            <TokenGeneratorForm />
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="landing relative min-h-[80vh] md:min-h-screen w-full">
        <div className="bg-landing2 absolute inset-0 -z-10"></div>
        <ElectricityFeatures />
      </section>

      {/* Third Section */}
      <section className="py-8 sm:py-12">
        <Testimonial />
      </section>
    </>
  );
}

export default Home;