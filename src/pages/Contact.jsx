import { FaInstagram, FaWhatsapp, FaFacebookF } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Image */}
      <div className="">
        <img 
          className="w-full object-cover" 
          src="../images/contacthead.png" 
          alt="Customer support header" 
        />
      </div>

      {/* Main Content Section */}
      <section className="px-8 md:px-28 py-16 flex flex-col md:flex-row gap-12">
        {/* Text Content */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-medium leading-tight">
            Here at <span className="text-primary-blue">Electrify</span>, your
            satisfaction is our topmost priority
          </h2>
          <p className="mt-4 text-gray-600">
            Enjoy our customer services and have your issues resolved anytime.
          </p>
          <button
            type="button"
            className="mt-6 w-40 h-10 bg-primary-blue rounded-md text-white hover:bg-primary-lightblue transition-colors hover:-translate-y-1 hover:cursor-pointer"
          >
            Contact Support
          </button>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img 
            className="max-h-full object-contain" 
            src="../images/contactimage.png" 
            alt="Customer support illustration" 
          />
        </div>
      </section>

      {/* Divider */}
      <div className="w-full max-w-2xl h-px bg-gray-300 mx-auto" />

      {/* Support Channels Section */}
      <section className="px-8 md:px-28 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[#2F5291] text-2xl md:text-3xl font-medium">
          Support Channels
        </h2> 
        <p className="mt-2 text-gray-500">
          Feel free to reach out to us on our other support channels
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Instagram */}
        <div className="flex flex-col">
          <div className="flex items-start gap-4">
            <a href="#" aria-label="Instagram" className="text-[#2F5291] hover:text-[#123067] text-2xl">
              <FaInstagram />
            </a>
            <div>
              <h3 className="text-[#2F5291] text-xl font-medium">Instagram</h3>
              <p className="mt-1 text-sm text-gray-600">
                Follow us on Instagram and we will respond to your DMs as fast as possible
              </p>
            </div>
          </div>
          <a href="#" className="mt-4 ml-10 text-[#2F5291] underline hover:text-[#123067]">
            Chat Now
          </a>
        </div>

        {/* WhatsApp */}
        <div className="flex flex-col">
          <div className="flex items-start gap-4">
            <a href="#" aria-label="WhatsApp" className="text-[#2F5291] hover:text-[#123067] text-2xl">
              <FaWhatsapp />
            </a>
            <div>
              <h3 className="text-[#2F5291] text-xl font-medium">WhatsApp</h3>
              <p className="mt-1 text-sm text-gray-600">
                Feel more connected as you relate to Electrify like you would your best friend
              </p>
            </div>
          </div>
          <a href="#" className="mt-4 ml-10 text-[#2F5291] underline hover:text-[#123067]">
            Chat Now
          </a>
        </div>

        {/* Facebook */}
        <div className="flex flex-col">
          <div className="flex items-start gap-4">
            <a href="#" aria-label="Facebook" className="text-[#2F5291] hover:text-[#123067] text-2xl">
              <FaFacebookF />
            </a> 
            <div>
              <h3 className="text-[#2F5291] text-xl font-medium">Facebook</h3>
              <p className="mt-1 text-sm text-gray-600">
                Get in touch even while you're catching up with your friends on Facebook
              </p>
            </div>
          </div>
          <a href="#" className="mt-4 ml-10 text-[#2F5291] underline hover:text-[#123067]">
            Chat Now
          </a>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Contact;