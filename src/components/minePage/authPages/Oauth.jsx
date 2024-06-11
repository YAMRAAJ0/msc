import { useState } from 'react';
import { LoginForm, RegisterForm, ForgotPasswordForm } from './Lib.tsx';
const Oauth = () => {
  const [currentForm, setCurrentForm] = useState('login');
  const switchForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <div className="flex w-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 justify-center items-center min-h-screen  my-20 sm:my-auto">
      <section className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 px-6 py-10 sm:px-10 sm:py-6">
        <div className="w-full mt-12 sm:max-w-md xl:p-0 rounded-lg bg-white shadow-lg mx-auto">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="flex justify-center mb-6">
              <img src="path/to/your/logo.png" alt="Logo" className="h-16 w-auto" />
            </div>
            {currentForm === 'login' && <LoginForm switchForm={switchForm} />}
            {currentForm === 'register' && <RegisterForm switchForm={switchForm} />}
            {currentForm === 'forgot' && <ForgotPasswordForm switchForm={switchForm} />}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Oauth;