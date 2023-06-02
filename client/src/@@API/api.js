import axios from "axios";

const loginApi = async (email, password) => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/user/login", {
      email: email,
      password: password,
    });

    // Return the response data after successful login
    return response.data;
  } catch (error) {
    // Handle errors
    throw error;
  }
};

export default loginApi;
