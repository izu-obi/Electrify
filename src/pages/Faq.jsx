import { useState } from "react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "Where Is My Meter Number?",
      content:
        "Your meter number is the 11-digit numbers printed on your Meter card. If you have lost or misplaced the meter card, press 65 then the blue button, the meter number is the 11-digit numbers that displays on the screen.",
    },
    {
      title: "How Do I Recharge My Meter?",
      content: (
        <>
          You can recharge your depleted meter units by logging on to{" "}
          <a href="https://www.electrify.ng" className="text-primary-blue underline">www.electrify.ng</a>,
          selecting your DisCO from the list, supplying your meter number and amount, and the phone number to receive the credit token. 
          Our state-of-the-art and easy-to-use system will guide you through the rest of the process.
        </>
      ),
    },
    {
      title: "How Do I Pay For The Recharge?",
      content:
        "Our system is integrated with a payment gateway that allows you to pay with your card or bank transfer. If you don't wish to use your card, contact any of our resellers.",
    },
    {
      title: "Can I Pay My Postpaid Bills Through Electrify?",
      content:
        'Absolutely! On the homepage, select "Postpaid" on the buy form, supply the details including your account number and amount, and proceed.',
    },
    {
      title: "Where Is My Account Number?",
      content:
        "Your account number is located on your electricity bill delivered by the distribution company. You need it to make payments.",
    },
    {
      title: "How Do I Receive My Credit Token?",
      content:
        "After completing your transaction, you'll receive a text and email containing a 20-digit number. Punch it carefully into your meter.",
    },
    {
      title: "How Much Do I Get Charged?",
      content:
        "You are charged your requested amount plus a convenience fee. Energy charge is your amount divided by 1.05; the rest is VAT (5%).",
    },
    {
      title: "How Much Does My Energy Cost?",
      content:
        "Your energy cost depends on your tariff class. Please contact your DisCO for your specific rate.",
    },
    {
      title: "Who Is My DisCO?",
      content:
        "Your DisCO is the electricity distribution company serving your area. There are 11 DisCOs in Nigeria.",
    },
    {
      title: "What Time Of The Day Can I Recharge?",
      content:
        "You can recharge 24/7 online or through our resellers (subject to their business hours).",
    },
    {
      title: "Can I Get A Refund For Credit Token Purchased?",
      content:
        "Refunds are not typical. In rare cases (like loading second token first), contact your DisCO to realign the rejected token.",
    },
  ];

  return (
    <div className="pb-10">
      {/* Hero Image */}
      <div>
        <img 
          className="w-full h-auto" 
          src="../images/frame.png" 
          alt="Banner" 
          loading="lazy"
        />
      </div>

      {/* Accordion */}
      <main className="px-4 sm:px-6 md:px-28 py-6 md:py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-primary-blue mb-6 text-center md:text-left">
          Frequently Asked Questions
        </h1>
        
        {accordionData.map((item, index) => (
          <div key={index} className="mb-2">
            <button
              className={`w-full text-left bg-white text-primary-blue cursor-pointer p-4 border-b border-gray-200 outline-none transition duration-300 flex justify-between items-center`}
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-sm md:text-base font-medium text-left pr-2">
                {item.title}
              </span>
              <span className="text-lg font-bold">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === index ? "max-h-[500px] py-4 px-4" : "max-h-0 py-0 px-4"
              } bg-gray-50 text-gray-700 text-sm md:text-base`}
            >
              {typeof item.content === 'string' ? <p>{item.content}</p> : item.content}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
