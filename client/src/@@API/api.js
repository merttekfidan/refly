import axios from "axios";

export const loginApi = async (email, password) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/user/login",
      {
        email: email,
        password: password,
      },
      { withCredentials: true }
    );

    // Return the response data after successful login
    return response.data;
  } catch (error) {
    // Handle errors
    throw error;
  }
};

export const logoutApi = async () => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/user/logout",
      null,
      {
        withCredentials: true,
      }
    );

    // Return the response data after successful logout
    return response.data;
  } catch (error) {
    // Handle errors
    throw error;
  }
};
export const myBusiness = async () => {
  try {
    const response = await axios.get(
      "http://127.0.0.1:8000/business/myBusiness",
      { withCredentials: true }
    );

    // Return the response data after successful login
    return response.data;
  } catch (error) {
    // Handle errors
    throw error;
  }
};

export default loginApi;
