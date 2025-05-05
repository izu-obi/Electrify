import React from "react";

const ElectricityFeatures = () => {
  return (
    <div className="relative flex justify-center lg:justify-end items-start px-4 sm:px-8 md:px-16 lg:px-28 pt-20 sm:pt-25 w-full min-h-[90vh] md:min-h-[50vh] bg-cover bg-no-repeat lg:bg-none">
      <div className="w-full md:w-[70%] lg:w-[45%] flex flex-col items-center lg:items-start">
        
        {/* Heading */}
        <div className="text-center lg:text-left text-xl sm:text-2xl w-full text-white">
          <h2 className="font-bold leading-tight">
            We've made paying for electricity
            <span className="md:hidden"><br /></span>
            <span className="text-primary-blue"> seamless</span>
          </h2>
        </div>
    
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-15 sm:mt-8 w-full">
          
          {/* Card 1 */}
          <div className="flex flex-col items-start p-3 sm:p-4 rounded-lg bg-black/50 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none">
            <img
              src="../images/credit-card 1.png"
              alt="Pay with your Card"
              className="w-10 h-10 sm:w-12 sm:h-12 mb-2"
            />
            <span className="font-bold text-white text-sm sm:text-md mb-1">
              Pay with your Card
            </span>
            <p className="text-white text-xs text-left">
              Make payments with your card and get value immediately.
            </p>
          </div>
    
          {/* Card 2 */}
          <div className="flex flex-col items-start p-3 sm:p-4 rounded-lg bg-black/50 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none">
            <img
              src="../images/management (1) 1.png"
              alt="Proxy Buying"
              className="w-10 h-10 sm:w-12 sm:h-12 mb-2"
            />
            <span className="font-bold text-white text-sm sm:text-md mb-1">
              Proxy Buying
            </span>
            <p className="text-white text-xs text-left">
              Buying electricity for a third-party is super easy on Electrify.
            </p>
          </div>
    
          {/* Card 3 */}
          <div className="flex flex-col items-start p-3 sm:p-4 rounded-lg bg-black/50 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none">
            <img
              src="../images/convenient 1.png"
              alt="24/7 Customer Service"
              className="w-10 h-10 sm:w-12 sm:h-12 mb-2"
            />
            <span className="font-bold text-white text-sm sm:text-md mb-1">
              24/7 Customer Service
            </span>
            <p className="text-white text-xs text-left">
              Enjoy our customer services and have your issues resolved anytime.
            </p>
          </div>
    
          {/* Card 4 */}
          <div className="flex flex-col items-start p-3 sm:p-4 rounded-lg bg-black/50 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none">
            <img
              src="../images/convenient 2.png"
              alt="Convenience"
              className="w-10 h-10 sm:w-12 sm:h-12 mb-2"
            />
            <span className="font-bold text-white text-sm sm:text-md mb-1">
              Convenience
            </span>
            <p className="text-white text-xs text-left">
              You can now purchase electricity from wherever you are with ease using the Electrify website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectricityFeatures;