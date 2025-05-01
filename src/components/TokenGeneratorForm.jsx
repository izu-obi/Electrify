import React, { useState } from "react";
import { MdElectricBolt } from "react-icons/md";
import axios from 'axios';

const TokenGeneratorForm = () => {
  const [activeTab, setActiveTab] = useState("prepaid"); // 'prepaid' or 'postpaid'

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit = (formData) => {
    const payload = activeTab === 'prepaid' 
      ? {
          serviceProvider: formData.serviceProvider,
          meterNumber: formData.meterNumber,
          phoneNumber: formData.phoneNumber,
          email: formData.email,
          amount: formData.amount,
          type: 'prepaid'
        }
      : {
          serviceProvider: formData.serviceProvider,
          accountNumber: formData.accountNumber,
          phoneNumber: formData.phoneNumber,
          email: formData.email,
          amount: formData.amount,
          type: 'postpaid'
        };

    axios.post('/api/electricity/purchase', payload)
      .then(function (response) {
        console.log(response);
        alert("Electricity purchase successful!");
      })
      .catch(function (error) {
        console.log(error);
        alert("Purchase failed. Please try again.");
      });
  };

  return (
    <div className="bg-white text-gray-700 w-[38%] block rounded-xl"
      style={{ marginTop: "10px", height: "fit-content", paddingBottom: "20px" }}>
      <div className="flex justify-center">
        <div className="mt-0 mb-0 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-6 px-6 rounded-lg sm:px-10">
            {/* Tab Buttons - Design remains exactly the same */}
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

            {/* Forms - Design remains exactly the same */}
            {activeTab === "prepaid" && (
              <div className="child">
                <PrePaidForm onSubmit={handleSubmit} />
              </div>
            )}

            {activeTab === "postpaid" && (
              <div className="child">
                <PostPaidForm onSubmit={handleSubmit} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Prepaid Form Component (with meter number)
const PrePaidForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    serviceProvider: '',
    meterNumber: '',
    phoneNumber: '',
    email: '',
    amount: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-0 space-y-4">
      <div>
        <label htmlFor="serviceProvider" className="block text-sm font-medium text-gray-700">
          Service Provider
        </label>
        <div className="mt-1">
          <select
            name="serviceProvider"
            id="serviceProvider"
            value={formData.serviceProvider}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:border-[#698bca] focus:ring focus:ring-[#698bca]"
            required
          >
            <option value="">Select your service provider</option>
            <option value="AEDC">AEDC</option>
            <option value="PHEDC">PHEDC</option>
            <option value="IKEDC">IKEDC</option>
            <option value="KNEDC">KNEDC</option>
            <option value="EEDC">EEDC</option>
            <option value="EKEDC">EKEDC</option>
          </select>
        </div>
      </div>

      {/* Meter Number (Prepaid specific) */}
      <div>
        <label htmlFor="meterNumber" className="block text-sm font-medium text-gray-700">
          Meter Number
        </label>
        <div className="mt-1">
          <input
            id="meterNumber"
            name="meterNumber"
            type="text"
            placeholder="Enter your Meter Number"
            value={formData.meterNumber}
            onChange={handleChange}
            required
            className="w-full border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:border-[#698bca] focus:ring focus:ring-[#698bca]"
            inputMode="numeric"
            pattern="[0-9]*"
          />
        </div>
      </div>

      {/* Common fields */}
      {["phoneNumber", "email", "amount"].map((field) => (
        <InputField 
          key={field} 
          id={field} 
          value={formData[field]} 
          onChange={handleChange}
        />
      ))}

      {/* Pay Button */}
      <div className="flex justify-center pt-4">
      <button
  type="button"
  onClick={async () => {
    if (!isValidEmail(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }
    if (Number(formData.amount) <= 0) {
      alert('Please enter a valid amount');
      return;
    }
    await payWithPaystack(formData);
  }}
  className="flex items-center gap-2 bg-[#2F5291] text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300 transform hover:bg-[#698bca] hover:-translate-y-1 hover:cursor-pointer"
>
  <span>Buy Electricity</span>
  <span className="text-xl">
    <MdElectricBolt />
  </span>
</button>
      </div>
    </form>
  );
};

// Postpaid Form 
const PostPaidForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    serviceProvider: '',
    accountNumber: '',
    phoneNumber: '',
    email: '',
    amount: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-0 space-y-4">
      <div>
        <label htmlFor="serviceProvider" className="block text-sm font-medium text-gray-700">
          Service Provider
        </label>
        <div className="mt-1">
          <select
            name="serviceProvider"
            id="serviceProvider"
            value={formData.serviceProvider}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:border-[#698bca] focus:ring focus:ring-[#698bca]"
            required
          >
            <option value="">Select your service provider</option>
            <option value="AEDC">AEDC</option>
            <option value="PHEDC">PHEDC</option>
            <option value="IKEDC">IKEDC</option>
            <option value="KNEDC">KNEDC</option>
            <option value="EEDC">EEDC</option>
            <option value="EKEDC">EKEDC</option>
          </select>
        </div>
      </div>

      {/* Account Number */}
      <div>
        <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">
          Account Number
        </label>
        <div className="mt-1">
          <input
            id="accountNumber"
            name="accountNumber"
            type="text"
            placeholder="Enter your Account Number"
            value={formData.accountNumber}
            onChange={handleChange}
            required
            className="w-full border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:border-[#698bca] focus:ring focus:ring-[#698bca]"
            inputMode="numeric"
            pattern="[0-9]*"
          />
        </div>
      </div>

      {/* Common fields */}
      {["phoneNumber", "email", "amount"].map((field) => (
        <InputField 
          key={field} 
          id={field} 
          value={formData[field]} 
          onChange={handleChange}
        />
      ))}

      {/* Pay Button */}
      <div className="flex justify-center pt-4">
      <button
  type="button"
  onClick={async () => {
    if (!isValidEmail(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }
    if (Number(formData.amount) <= 0) {
      alert('Please enter a valid amount');
      return;
    }
    await payWithPaystack(formData);
  }}
  className="flex items-center gap-2 bg-[#2F5291] text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300 transform hover:bg-[#698bca] hover:-translate-y-1 hover:cursor-pointer"
>
  <span>Buy Electricity</span>
  <span className="text-xl">
    <MdElectricBolt />
  </span>
</button>
      </div>
    </form>
  );
};

const InputField = ({ id, value, onChange }) => {
  const isNumberField = ["phoneNumber", "amount"].includes(id);

  const placeholders = {
    phoneNumber: "Enter Phone Number",
    email: "Enter your Email",
    amount: "Enter your Amount",
  };

  const labelNames = {
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
          value={value}
          onChange={onChange}
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
