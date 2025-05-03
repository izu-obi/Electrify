import TokenGeneratorForm from "../components/TokenGeneratorForm";
import ElectricityFeatures from "../components/ElectricityFeatures";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <>
      {/* First Section - Added pt-16 for mobile (4rem) to clear navbar */}
      <section className="landing relative min-h-[90vh] md:min-h-screen w-full pt-16 md:pt-0">
        <div className="bg-landing absolute inset-0 -z-10"></div>
        <div className="flex flex-col sm:flex-row items-center justify-between w-full pt-8 sm:pt-10 px-4 sm:px-8 md:px-12 lg:px-16 pb-6 sm:pb-10">
          <div className="w-full sm:w-1/2 lg:w-[35%] font-semibold text-2xl sm:text-3xl md:text-4xl text-white pb-8 sm:pb-12">
            <h2>
              <span className="text-primary-blue">Electrify,</span> The smart choice
              for electricity.
            </h2>
          </div>
          <div className="w-full sm:w-1/2">
            <TokenGeneratorForm />
          </div>
        </div>
      </section>

      <section className="landing relative min-h-[80vh] md:min-h-screen w-full">
        <div className="bg-landing2 absolute inset-0 -z-10"></div>
        <ElectricityFeatures />
      </section>

      <section className="py-8 sm:py-12">
        <Testimonial />
      </section>
    </>
  );
}

export default Home;