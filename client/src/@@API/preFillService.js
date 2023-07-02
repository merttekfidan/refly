import axios from "axios";

const PREFILL_URL = "/preFill/";
// /all-locations

export const getAllLocations = async () => {
  try {
    const response = await axios.get(PREFILL_URL + "all-locations");
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};
