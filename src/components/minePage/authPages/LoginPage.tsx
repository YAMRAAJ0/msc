import React, { useState } from "react";
import {
  InputBoxComponents,
  ButtonComponents,
} from "../../beasLib/InputComponents";
import { Link , useNavigate } from 'react-router-dom';

import { RegisterResponse, loginApi } from '../../api/authService';
interface LoginResponse {
  token: string;
  message?: string;
}
const LoginPage: React.FC = () => {
  const [form, setForm] = useState({ username: "", password: ""});
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const [message, setMessage] = useState<string>('');
  const handleChange =
    (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setForm({ ...form, [field]: event.target.value });
    };
const handleButtonClick = async () => {
    try {
      const data: RegisterResponse = await loginApi(form.username, form.password);
      setMessage(data.message || ' successful!');
      setError(''); 

      navigate('/home');
    } catch (err: unknown) { 
      setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
      setMessage(''); 
    }
  };
  const fields = [
    { label: 'Username', value: form.username, onChange: handleChange('username'), type: 'text', labelTitle: 'User Name' },
    { label: 'Password', value: form.password, onChange: handleChange('password'), type: 'password', labelTitle: 'User Password' },
  ];
  return (
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Log-in here 
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                {fields.map((field, index) => (
                  <div key={index}>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      {field.labelTitle}
                    </label>
                    <InputBoxComponents
                      type={field.type}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      label={field.label} value={field.value} onChange={field.onChange}/>
                  </div>
                ))}
                <ButtonComponents
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  type="button"
                  buttonName="Log-in"
                  onClick={handleButtonClick}
                />
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Do not have account? <Link
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  to="/register" >Register here</Link>
                </p>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?
                  <Link
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  to="/ForgetPassword" >Forget password</Link>
                </p>
    
              </form>
            </div>
          </div>
        </div>
      </section>
  );
};
export default LoginPage;
