import React, { useState } from 'react';
import axios from 'axios';

const PaymentForm = ({ transactionDetails, onPaymentSuccess, onClose }) => {
  const [cardDetails, setCardDetails] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatExpiry = (value) => {
    // Auto-insert slash after MM (e.g. "12/25")
    if (value.length === 2 && !value.includes('/')) {
      return `${value}/`;
    }
    return value;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setError('');

    try {
      // Call your backend to process payment
      const response = await axios.post('/api/process-payment', {
        ...transactionDetails, // From first component (amount, email, etc)
        cardDetails
      });

      if (response.data.success) {
        onPaymentSuccess(response.data);
      } else {
        setError(response.data.message || 'Payment failed');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Make Payment</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Card Number
              </label>
              <input
                type="text"
                name="number"
                value={cardDetails.number}
                onChange={handleInputChange}
                placeholder="1234 5678 9012 3456"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                maxLength="19"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cardholder's Name
              </label>
              <input
                type="text"
                name="name"
                value={cardDetails.name}
                onChange={handleInputChange}
                placeholder="John Doe"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Expiry Date (MM/YY)
                </label>
                <input
                  type="text"
                  name="expiry"
                  value={cardDetails.expiry}
                  onChange={(e) => {
                    const formatted = formatExpiry(e.target.value);
                    setCardDetails(prev => ({ ...prev, expiry: formatted }));
                  }}
                  placeholder="MM/YY"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  maxLength="5"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CVV
                </label>
                <input
                  type="text"
                  name="cvv"
                  value={cardDetails.cvv}
                  onChange={handleInputChange}
                  placeholder="123"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  maxLength="4"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-50 p-4 rounded-md">
            <h3 className="font-medium mb-2">Payment Details</h3>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span>Price ({transactionDetails.units} units)</span>
                <span>NGN {transactionDetails.amount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (5%)</span>
                <span>NGN {(transactionDetails.amount * 0.05).toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-bold border-t pt-2 mt-2">
                <span>Total</span>
                <span>NGN {(transactionDetails.amount * 1.05).toLocaleString()}</span>
              </div>
            </div>
          </div>

          {error && (
            <div className="mt-4 text-red-600 text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isProcessing}
            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition duration-150 ease-in-out disabled:opacity-50"
          >
            {isProcessing ? 'Processing...' : `Pay NGN ${(transactionDetails.amount * 1.05).toLocaleString()}`}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;