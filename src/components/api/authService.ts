import axios from 'axios';
export interface RegisterResponse {
  success?: boolean;
  message?: string;
  token?: string;
  data?: {
    userId?: number;
    username?: string;
    email?: string;
  };
  error?: {
    code?: string;
    message?: string;
  };
}

export const registerApi = async (username: string, password: string, email: string): Promise<RegisterResponse> => {
  try {
    const response = await axios.post('/api/auth/registerUser', { username, password, email });
    
    // Log the response for debugging
    console.log('Register API response:', response.data);

    // Assuming the response contains a 'msg' field for success message
    if (response.data.msg) {
      return { success: true, message: response.data.msg };
    } else {
      throw new Error(response.data.error?.message || 'Register User failed');
    }
  } catch (error) {
    // Log the full error
    console.error('Register User error:', error);

    // Throw a new error with a generic message
    throw new Error('An unexpected error occurred during register User. Please try again later.');
  }
};
export const loginApi = async (username: string, password: string, ): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>('/api/auth/loginUser', { username, password });
    if (response.status === 200 && response.data.token) {
    localStorage.setItem('jwtToken', response.data.token);
      return { success: true, token: response.data.token };
    } else {
      throw new Error(response.data.message || 'Login failed');
    }
  } catch (error) {
    console.error('Login error:', error);
    throw new Error('An unexpected error occurred during login. Please try again later.');
  }
};

export const ForgetPasswordApi = async (username: string, newPassword: string, email:string): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>('/api/auth/forgetPassword', { username, newPassword ,email});
    if (response.status === 200 && response.data.token) {
      return { success: true, token: response.data.token };
    } else {
      throw new Error(response.data.message || 'forget Password failed');
    }
  } catch (error) {
    console.error('forget Password error:', error);
    throw new Error('An unexpected error occurred during forgetPassword. Please try again later.');
  }
};

interface LoginResponse {
  success: boolean;
  message?: string;
  token?: string;
}