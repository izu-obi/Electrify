import { FaInstagram, FaWhatsapp, FaFacebookF } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Image - Full width on mobile */}
      <div className="w-full">
        <img 
          className="w-full h-auto object-cover"
          src="../images/contacthead.png" 
          alt="Customer support header"
          loading="lazy"
        />
      </div>

      {/* Main Content Section - Stacked on mobile */}
      <section className="px-4 sm:px-6 md:px-28 py-8 md:py-16 flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Text Content - Full width on mobile */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight">
            Here at <span className="text-primary-blue">Electrify</span>, your
            satisfaction is our topmost priority
          </h2>
          <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-600">
            Enjoy our customer services and have your issues resolved anytime.
          </p>
          <button
            type="button"
            className="mt-4 md:mt-6 w-full sm:w-40 h-10 bg-primary-blue rounded-md text-white hover:bg-primary-lightblue transition-colors hover:-translate-y-1 hover:cursor-pointer mx-auto md:mx-0"
          >
            Contact Support
          </button>
        </div>

        {/* Image - Full width on mobile */}
        <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img 
            className="w-full max-w-md md:max-w-lg object-contain" 
            src="../images/contactimage.png" 
            alt="Customer support illustration"
            loading="lazy"
          />
        </div>
      </section>

      {/* Divider */}
      <div className="w-full max-w-2xl h-px bg-gray-300 mx-auto" />

      {/* Support Channels Section - Stacked on mobile */}
      <section className="px-4 sm:px-6 md:px-28 py-8 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[#2F5291] text-xl sm:text-2xl md:text-3xl font-medium">
            Support Channels
          </h2> 
          <p className="mt-2 text-sm md:text-base text-gray-500">
            Feel free to reach out to us on our other support channels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Instagram */}
          <div className="flex flex-col p-4 md:p-0">
            <div className="flex items-start gap-3 md:gap-4">
              <a href="#" aria-label="Instagram" className="text-[#2F5291] hover:text-[#123067] text-xl md:text-2xl mt-1">
                <FaInstagram />
              </a>
              <div>
                <h3 className="text-[#2F5291] text-lg md:text-xl font-medium">Instagram</h3>
                <p className="mt-1 text-xs md:text-sm text-gray-600">
                  Follow us on Instagram and we will respond to your DMs as fast as possible
                </p>
              </div>
            </div>
            <a href="#" className="mt-3 md:mt-4 ml-12 md:ml-10 text-[#2F5291] underline hover:text-[#123067] text-sm md:text-base">
              Chat Now
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col p-4 md:p-0">
            <div className="flex items-start gap-3 md:gap-4">
              <a href="#" aria-label="WhatsApp" className="text-[#2F5291] hover:text-[#123067] text-xl md:text-2xl mt-1">
                <FaWhatsapp />
              </a>
              <div>
                <h3 className="text-[#2F5291] text-lg md:text-xl font-medium">WhatsApp</h3>
                <p className="mt-1 text-xs md:text-sm text-gray-600">
                  Feel more connected as you relate to Electrify like you would your best friend
                </p>
              </div>
            </div>
            <a href="#" className="mt-3 md:mt-4 ml-12 md:ml-10 text-[#2F5291] underline hover:text-[#123067] text-sm md:text-base">
              Chat Now
            </a>
          </div>

          {/* Facebook */}
          <div className="flex flex-col p-4 md:p-0">
            <div className="flex items-start gap-3 md:gap-4">
              <a href="#" aria-label="Facebook" className="text-[#2F5291] hover:text-[#123067] text-xl md:text-2xl mt-1">
                <FaFacebookF />
              </a> 
              <div>
                <h3 className="text-[#2F5291] text-lg md:text-xl font-medium">Facebook</h3>
                <p className="mt-1 text-xs md:text-sm text-gray-600">
                  Get in touch even while you're catching up with your friends on Facebook
                </p>
              </div>
            </div>
            <a href="#" className="mt-3 md:mt-4 ml-12 md:ml-10 text-[#2F5291] underline hover:text-[#123067] text-sm md:text-base">
              Chat Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;