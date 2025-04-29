import React, { useState } from "react";
import { MdElectricBolt } from "react-icons/md";
import axios, {isCancel, AxiosError} from 'axios';

const handleSubmit = () => {
  axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  alert("Pay with Paystack clicked!");
};

const TokenGeneratorForm = () => {
  const [activeTab, setActiveTab] = useState("prepaid"); // 'prepaid' or 'postpaid'

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    
    <div
      className="bg-white text-gray-700 w-[38%] block rounded-xl"
      style={{ marginTop: "10px", height: "fit-content", paddingBottom: "20px" }}
    >
      <div className="flex justify-center">
        <div className="mt-0 mb-0 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-6 px-6 rounded-lg sm:px-10">
            {/* Buttons */}
            <div className="buttons-container flex gap-5 justify-center" style={{ paddingBottom: "25px" }}>
              <div
                className={`buttons relative pb-2 cursor-pointer ${
                  activeTab === "prepaid" ? "font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#698bca]" : ""
                }`}
                onClick={() => handleTabClick("prepaid")}
              >
                Prepaid
              </div>
              <div
                className={`buttons relative pb-2 cursor-pointer ${
                  activeTab === "postpaid" ? "font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#698bca]" : ""
                }`}
                onClick={() => handleTabClick("postpaid")}
              >
                Postpaid
              </div>
            </div>

            {/* Conditional Rendering */}
            {activeTab === "prepaid" && (
              <div className="child">
                <form className="mb-0 space-y-4" action="#" method="POST">
                  <PrePaidFields />
                </form>
              </div>
            )}

            {activeTab === "postpaid" && (
              <div className="child">
                <form className="mb-0 space-y-4" action="#" method="POST">
                  <PostPaidFields />
                </form>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Pay Button */}
      <div className="flex justify-center">
        <button
            type="button"
            className="flex items-center gap-2 bg-[#2F5291] text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300 transform hover:bg-[#698bca] hover:-translate-y-1 hover:cursor-pointer"
        >
            <span>Buy Electricity</span>
            <span className="text-xl">
            <MdElectricBolt />
            </span>
        </button>
    </div>

    </div>
  );
};

const PrePaidFields = () => {
  return (
    <>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="serviceProvider" className="block text-sm font-medium text-gray-700">
          Service Provider
        </label>
        <div className="mt-1">
          <select
            name="serviceProvider"
            id="serviceProvider"
            className="w-full border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:border-[#698bca] focus:ring focus:ring-[#698bca]"
          >
            <option value="">Select your service provider</option>
            <option value="one">AEDC</option>
            <option value="two">PHEDC</option>
            <option value="three">IKEDC</option>
            <option value="four">KNEDC</option>
            <option value="five">EEDC</option>
            <option value="six">EKEDC</option>
          </select>
        </div>
      </div>

      {/* Inputs */}
      {["meterNumber", "phoneNumber", "email", "amount"].map((field) => (
        <InputField key={field} id={field} />
      ))}
      </form>
    </>
  );
};

const PostPaidFields = () => {
  return (
    <>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="serviceProvider" className="block text-sm font-medium text-gray-700">
          Service Provider
        </label>
        <div className="mt-1">
          <select
            name="serviceProvider"
            id="serviceProvider"
            className="w-full border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:border-[#698bca] focus:ring focus:ring-[#698bca]"
          >
            <option value="">Select your service provider</option>
            <option value="one">AEDC</option>
            <option value="two">PHEDC</option>
            <option value="three">IKEDC</option>
            <option value="four">KNEDC</option>
            <option value="five">EEDC</option>
            <option value="six">EKEDC</option>
          </select>
        </div>
      </div>

      {/* Inputs */}
      {["accountNumber", "phoneNumber", "email", "amount"].map((field) => (
        <InputField key={field} id={field} />
      ))}
      </form>
    </>
  );
};

const InputField = ({ id }) => {
  const isNumberField = ["meterNumber", "accountNumber", "phoneNumber", "amount"].includes(id);

  const placeholders = {
    meterNumber: "Enter your Meter Number",
    accountNumber: "Enter your Account Number",
    phoneNumber: "Enter Phone Number",
    email: "Enter your Email",
    amount: "Enter your Amount",
  };

  const labelNames = {
    meterNumber: "Meter Number",
    accountNumber: "Account Number",
    phoneNumber: "Phone Number",
    email: "Email",
    amount: "Amount",
  };

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {labelNames[id]}
      </label>
      <div className="mt-1">
        <input
          id={id}
          name={id}
          type={isNumberField ? "text" : "email"}
          placeholder={placeholders[id]}
          required
          className="w-full border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:border-[#698bca] focus:ring focus:ring-[#698bca]"
          inputMode={isNumberField ? "numeric" : undefined}
          pattern={isNumberField ? "[0-9]*" : undefined}
        />
      </div>
    </div>
  );
};

export default TokenGeneratorForm;
