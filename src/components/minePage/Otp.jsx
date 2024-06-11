import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'
import {RecaptchaVerifier, signInWithPhoneNumber} from 'firebase/auth'
import {auth} from '../../firebase/setup'
import { useState                                                            } from 'react'

function Otp(){
    const [phone, setPhone] = useState("")
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
const [otp,setOtp] = useState("")
const [confirmationResult, setConfirmationResult] = useState(null);
const sendOtp = async()=> {
  try{
    const recaptchaVerifier = new RecaptchaVerifier(auth,"recaptcha",{})
    const confirmationResult = await signInWithPhoneNumber(auth, phone, recaptchaVerifier);
    setConfirmationResult(confirmationResult);
  }catch(err){
    console.error(err)
  }
}

const verifyOtp = async () => {
  try {
    if (confirmationResult) {
      const result = await confirmationResult.confirm(otp);
      const user = result.user;
      console.log('User signed in successfully:', user);

      await result.user.updateProfile({
        displayName: name, // Replace with the user's display name
      });

    } else {
      console.error('No confirmation result available');
    }
  } catch (err) {
    console.error('Error confirming OTP:', err);
  }
};


    return(
 <>
 <div className="mb-6">
 <div className="flex items-center mt-4">
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          onChange={(e) => setName(e.target.value)}
          name="name"
          placeholder="Enter your name"
        />
      </div>
          <div className="flex items-center">
          <PhoneInput country={"in"} 
          value={phone}
          onChange={(phone) => setPhone("+" + phone)}
          />
            <button onClick={sendOtp} type="button" className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-full">
              Send OTP
            </button> 
            <div id='recaptcha'></div>
          </div>
          <div className="flex items-center">
          <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              onChange={(e)=> setOtp(e.target.value)}
              name="enter otp"
              placeholder="Enter otp"
            />
              <button type="button" onClick={verifyOtp} className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-full">
            verify otp
            </button> 
            </div>
        </div>
 </>       
    )
}

export default Otp;