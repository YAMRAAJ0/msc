import React, { useState } from 'react';
import {InputBoxComponents, ButtonComponents} from "../../beasLib/InputComponents";
import { useNavigate } from 'react-router-dom';
import { RegisterResponse, loginApi,registerApi,ForgetPasswordApi } from '../../api/authService';
// login //
export const LoginForm: React.FC<{ switchForm: (formType: string) => void }> = ({ switchForm }) => {
    const [form, setForm] = useState({ username: "", password: "" });
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();
    const [message, setMessage] = useState<string>('');
    const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
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
      <>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl mb-8">
      Log in here
    </h1>
    <form className="space-y-6" action="#">
      {fields.map((field, index) => (
        <div key={index}>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            {field.labelTitle}
          </label>
          <InputBoxComponents
            type={field.type}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            label={field.label}
            value={field.value}
            onChange={field.onChange}
          />
        </div>
      ))}
      <button
        type="submit"
        className="w-full py-3 mt-4 bg-blue-600 rounded-md font-medium text-white uppercase focus:outline-none hover:bg-blue-700 transition duration-300"
        onClick={handleButtonClick}
      >
        Login
      </button>
      <p className="text-sm font-light text-gray-700 mt-6">
        Don't have an account?
        <button
          type="button"
          className="text-blue-600 hover:underline ml-1"
          onClick={() => switchForm('register')}
        >
          Register here
        </button>
      </p>
      <p className="text-sm font-light text-gray-700">
        Forgot your password?
        <button
          type="button"
          className="text-blue-600 hover:underline ml-1"
          onClick={() => switchForm('forgot')}
        >
          Reset it here
        </button>
      </p>
    </form>
              </>
    );
  };
// Register //
export const RegisterForm: React.FC<{ switchForm: (formType: string) => void }> = ({ switchForm }) => {
    const navigate = useNavigate();
    const [form, setForm] = useState({ username: "", email: "", password: "" });
    const [error, setError] = useState<string>('');
    const [message, setMessage] = useState('');
    const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => { setForm({ ...form, [field]: event.target.value });};
    const handleButtonClick = async () => {
        try {
            const data: RegisterResponse = await registerApi(form.username, form.password, form.email);
            setError(''); // Clear error
            setMessage(data.message || 'Registration successful!'); // Set success message
            
            // Clear form fields
            setForm({
                username: '',
                password: '',
                email: ''
            });
            navigate('/');
        } catch (err: unknown) { // Catch any potential error
            setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
            setMessage(''); // Clear success message on error
        }
    };
    const fields = [
        { label: 'Username', value: form.username, onChange: handleChange('username'), type: 'text', labelTitle: 'User Name' },
        { label: 'Email', value: form.email, onChange: handleChange('email'), type: 'email', labelTitle: 'User E-mail' },
        { label: 'Password', value: form.password, onChange: handleChange('password'), type: 'password', labelTitle: 'User Password' },
    ];

    return (
    <>
                     <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                        Create an account
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        {fields.map((field, index) => (
                            <div key={index}>
                                 <label className="block mb-2 text-sm font-medium text-gray-900 ">
                                    {field.labelTitle}
                                </label>
                                <InputBoxComponents
                                    type={field.type}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                    label={field.label}
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            </div>
                        ))}
                        <button type="submit" className="w-full py-3 mt-10 bg-[#063970] rounded-md font-medium text-white uppercase focus:outline-none hover:shadow-none"   onClick={handleButtonClick}>
                        Create an account </button>
                        <p className="text-sm font-light text-gray-900 "> Already have an account?{" "}   
                            <button onClick={() => switchForm('login')}>Back to Login</button>
                        </p> 
                    </form>
                    </>
    );
};

//forget//
export const ForgotPasswordForm: React.FC<{ switchForm: (formType: string) => void }> = ({ switchForm }) => {
    const navigate = useNavigate();
    const [form, setForm] = useState({ username: "", email: "", password: "" });
    const [error, setError] = useState<string>('');
    const [message, setMessage] = useState('');
    const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {setForm({ ...form, [field]: event.target.value });};
    const handleButtonClick = async () => {
        try {
            const data: RegisterResponse = await ForgetPasswordApi(form.username, form.password, form.email);
            setError(''); // Clear error
            setMessage(data.message || 'Reset Password successful!'); // Set success message
            navigate('/');
        } catch (err: unknown) { // Catch any potential error
            setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
            setMessage(''); // Clear success message on error
        }
    };
    const fields = [
        { label: 'Username', value: form.username, onChange: handleChange('username'), type: 'text', labelTitle: 'User Name' },
        { label: 'Email', value: form.email, onChange: handleChange('email'), type: 'email', labelTitle: 'User E-mail' },
        { label: 'Password', value: form.password, onChange: handleChange('password'), type: 'password', labelTitle: 'User Password' },
    ];
    return (
       <>
                         <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                            Forget Password page
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            {fields.map((field, index) => (
                                <div key={index}>
                                     <label className="block mb-2 text-sm font-medium text-gray-900 ">
                                        {field.labelTitle}
                                    </label>
                                    <InputBoxComponents
                                        type={field.type}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                        label={field.label}
                                        value={field.value}
                                        onChange={field.onChange}
                                    />
                                </div>
                            ))}
                             <button type="submit" className="w-full py-3 mt-10 bg-[#063970] rounded-md font-medium text-white uppercase focus:outline-none hover:shadow-none"   onClick={handleButtonClick}>
                        Create an account </button>
                            <p className="text-sm font-light text-gray-900 ">
                                Already have an account?{" "}       
                                <button onClick={() => switchForm('login')}>Back to Login</button>
                            </p>
                        </form>
          </>
    );
};
