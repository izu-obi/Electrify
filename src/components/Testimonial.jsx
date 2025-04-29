import React from "react";

const Testimonial = () => {
  return (
    <div className="px-28 py-16 bg-white">
      {/* Heading */}
      <div className="flex justify-center">
        <h2 className="text-primary-blue font-semibold text-4xl text-center">
          What our customers think about us
        </h2>
      </div>

      {/* Reviews with Dividers */}
      <div className="flex justify-center items-start gap-12 text-black mt-14">
        {/* Review 1 */}
        <div className="w-80 flex flex-col items-center text-center">
          <div>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur. At tincidunt aliquet orci
              tristique ac. Non eu ullamcorper sem in eleifend nunc.
            </p>
          </div>

          {/* Reviewer Info */}
          <div className="flex items-center space-x-4 mt-6">
            <img
              src="/images/Ellipse 1.png"
              alt="John Doe"
              className="h-12 w-12 rounded-full object-cover"
            />
            <div className="text-left">
              <span className="font-bold text-gray-800 block">John Doe</span>
              <span className="text-gray-500 text-sm">SomeCompany LLC.</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-60 w-px bg-gray-300"></div>

        {/* Review 2 */}
        <div className="w-80 flex flex-col items-center text-center">
          <div>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur. Blandit vel velit diam est a.
              Vitae pharetra et sodales ornare. Eget pharetra tortor ultrices
              vulputate facilisi euismod dolor.
            </p>
          </div>

          {/* Reviewer Info */}
          <div className="flex items-center space-x-4 mt-6">
            <img
              src="/images/Ellipse 2.png"
              alt="John Doe"
              className="h-12 w-12 rounded-full object-cover"
            />
            <div className="text-left">
              <span className="font-bold text-gray-800 block">John Doe</span>
              <span className="text-gray-500 text-sm">SomeCompany LLC.</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-60 w-px bg-gray-300"></div>

        {/* Review 3 */}
        <div className="w-80 flex flex-col items-center text-center">
          <div>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur. Nibh morbi eget mattis
              eleifend amet arcu sed tristique adipiscing. Et pretium libero
              aliquet est integer amet pellentesque fringilla et. 
            </p>
          </div>

          {/* Reviewer Info */}
          <div className="flex items-center space-x-4 mt-6">
            <img
              src="/images/Ellipse 3.png"
              alt="Jane Doe"
              className="h-12 w-12 rounded-full object-cover"
            />
            <div className="text-left">
              <span className="font-bold text-gray-800 block">Jane Doe</span>
              <span className="text-gray-500 text-sm">SomeCompany LLC.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
