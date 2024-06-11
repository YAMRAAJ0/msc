import React, { useState } from 'react';

const OTPVerification = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOTP] = useState('');
  const [verificationStatus, setVerificationStatus] = useState('');

  const sendOTP = () => {
    // Code to send OTP to the provided mobile number
    // This could be an API call to your backend
    console.log('Sending OTP to', mobileNumber);
    // Assuming OTP sent successfully
    setVerificationStatus('OTP sent successfully');
  };

  const verifyOTP = () => {
    // Code to verify the OTP entered by the user
    // This could be an API call to your backend
    console.log('Verifying OTP', otp);
    // Assuming OTP verification is successful
    setVerificationStatus('OTP verified successfully');
  };

  return (
    <div>
      <h2>Mobile OTP Verification</h2>
      <div>
        <label>Mobile Number:</label>
        <input
          type="text"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
        <button onClick={sendOTP}>Send OTP</button>
      </div>
      <div>
        <label>OTP:</label>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOTP(e.target.value)}
        />
        <button onClick={verifyOTP}>Verify OTP</button>
      </div>
      <div>{verificationStatus}</div>
    </div>
  );
};

export default OTPVerification;
