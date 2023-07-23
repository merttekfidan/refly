import axios from "axios";

const FORM_URL = "/offer/";
const { token } = JSON.parse(localStorage.getItem("user"));
const config = {
  headers: { Authorization: `Bearer ${token}` },
};
export const submitListForm = async (formData) => {
  try {
    const submittedList = await axios.post(FORM_URL, formData, config);
    //console.log(submittedList);
    return submittedList.response;
  } catch (error) {
    throw error.response.data.error;
  }
};
