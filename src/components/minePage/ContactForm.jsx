import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'
import {RecaptchaVerifier, signInWithPhoneNumber} from 'firebase/auth'
import {auth} from '../../firebase/setup'
import Otp from './Otp';
function ContactForm() {
const [phone, setPhone] = useState("")
const [user,setUser] = useState(null)
const [otp,setOtp] = useState("")
const sendOtp = async()=> {
  try{
    const recaptcha = new RecaptchaVerifier(auth,"recaptcha",{})
    const confirmation = signInWithPhoneNumber(auth, phone, recaptcha)
    setUser(confirmation)
  }catch(err){
    console.erroe(err)
  }
}

const verifyOtp = async () => {
  try {
  const data =  await user.confirm(otp);
    console.log('OTP confirmed successfully');
  } catch (err) {
    console.error('Error confirming OTP:', err);
  }
};



  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNo: '',
    stream: '',
    class: '',
    center: '',
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/submit', formData)
      .then(response => {
        alert('Data saved successfully');
      })
      .catch(error => {
        console.error('Error saving data', error);
        alert('Error saving data');
      });
  };

  return (
    <div className="flex flex-col items-center py-12 bg-blue-800 mt-8 rounded-3xl shadow-2xl">
      <h1 className="text-3xl font-bold mb-4 text-white">Talk to our expert</h1>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-full mb-4 flex items-center">
        <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" /> Call now for free
      </button>
      <p className="mb-4">or</p>
      <h2 className="text-2xl font-bold mb-6 text-white">Request call back</h2>
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          {/* <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
            />
          </div>


          <div className="w-full md:w-1/2 px-3">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
            />
          </div> */}

         

        </div>
       <Otp/>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="stream"
                value={formData.stream}
                onChange={handleChange}
              >
                <option value="">Stream</option>
                {/* Add actual stream options here */}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.5 7L10 11.5 14.5 7h-9z"/></svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="class"
                value={formData.class}
                onChange={handleChange}
              >
                <option value="">Class</option>
                {/* Add actual class options here */}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.5 7L10 11.5 14.5 7h-9z"/></svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="center"
                value={formData.center}
                onChange={handleChange}
              >
                <option value="">Center</option>
                {/* Add actual center options here */}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.5 7L10 11.5 14.5 7h-9z"/></svg>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="mb-6">
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="email"
            name="emailId"
            value={formData.emailId}
            onChange={handleChange}
            placeholder="Email Id"
          />
        </div> */}
        <div className="mb-6">
          <label className="block text-gray-500 font-bold">
            <input
              className="mr-2 leading-tight"
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
            />
            <span className="text-sm">
              By submitting this form, I agree to receive all the WhatsApp communication on my registered number and agreeing to Aakash's <a href="#" className="text-blue-600">Terms Of Use</a> and <a href="#" className="text-blue-600">Privacy Policy</a>
            </span>
          </label>
        </div>
        <div className="flex items-center justify-center">
          <button type="submit" className="bg-red-600 hover:bg-orange-900 text-white font-bold py-2 px-4 rounded-full">
            Submit Now
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
