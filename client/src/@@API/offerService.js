import axios from "axios";

const FORM_URL = "/offer/";
let token = "";
token = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : "";
export const submitListForm = async (formData) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token.token}`,
      },
    };
    const submittedList = await axios.post(FORM_URL, formData, config);
    //console.log(submittedList);
    return submittedList;
  } catch (error) {
    throw error;
  }
};
export const submitImages = async (formData, id) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token.token}`,
        "Content-Type": "multipart/form-data",
      },
    };
    const submittedList = await axios.patch(FORM_URL + id, formData, config);
    //console.log(submittedList);
    return submittedList;
  } catch (error) {
    throw error;
  }
};

export const getOneOffer = async (offerId) => {
  try {
    const offer = await axios.get(FORM_URL + offerId);
    console.log(offer.data);
    return offer.data;
  } catch (err) {
    return err.response;
  }
};
