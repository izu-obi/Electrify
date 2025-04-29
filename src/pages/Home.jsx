import TokenGeneratorForm from "../components/TokenGeneratorForm";
import ElectricityFeatures from "../components/ElectricityFeatures";
import Testimonial from "../components/Testimonial";

const Home = () => {

  return (
    <>

        <section className="landing relative min-h-screen max-w-screen z-0">
            <div className="bg-landing absolute -z-1 w-full h-full"></div>
            <div className="flex flex-col sm:flex-row items-center justify-between w-full pt-35 px-5 sm:px-30 pb-10">
                <div className="leftElement font-semibold text-4xl self-end text-white pb-50 sm:w-[35%]">
                    <h2>
                        <span class="text-primary-blue">Electrify,</span> The smart choice
                        for electricity.
                    </h2>
                </div>
                <TokenGeneratorForm />
            </div>
        </section>

        <section className="landing relative min-h-screen max-w-screen z-0">
            <div className="bg-landing2 absolute -z-1 w-full h-full"></div>
            <ElectricityFeatures />
        </section>

        <section>
            <Testimonial />
        </section>
        
    </>
  );

}

export default Home;