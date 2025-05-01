// utils/paystackUtils.js
import { paystack } from '@paystack/inline-js';
import emailjs from '@emailjs/browser';

export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function payWithPaystack(formData) {
  const { meterNumber, accountNumber, phoneNumber, email, amount } = formData;
  
  const handler = paystack.setup({
    key: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
    amount: Number(amount) * 100,
    email: email,
    metadata: {
      custom_fields: [
        {
          display_name: "Meter Number",
          variable_name: "meter_number",
          value: meterNumber || accountNumber,
        },
        {
          display_name: "Phone Number",
          variable_name: "phone_number",
          value: phoneNumber,
        }
      ]
    },
    callback: function (response) {
      sendEmail(email);
      alert('Success. Transaction ref is ' + response.reference);
    },
    onClose: function () {
      alert('Transaction cancelled');
    }
  });
  handler.openIframe();
}

async function sendEmail(email) {
  const randomToken = Math.floor(Math.random() * 1000000000000000).toString();

  try {
    await emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      {
        to_email: email,
        to_name: 'User',
        token: randomToken
      },
      process.env.REACT_APP_EMAILJS_USER_ID
    );
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Email sending failed:', error);
  }
}