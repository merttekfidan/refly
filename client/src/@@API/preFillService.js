import axios from "axios";

const PREFILL_URL = "/preFill/";
// /all-locations

export const getAllVoivodeships = async () => {
  try {
    const response = await axios.get(PREFILL_URL + "all-voivodeships");
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getCitiesByVoivodeship = async (voivodeshipId) => {
  try {
    const response = await axios.get(
      PREFILL_URL + "cities-by-voivodeship/" + voivodeshipId
    );
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};
