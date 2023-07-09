import axios from "axios";

const OFFER_URL = "/views/offerViews/";

export const getRecentOffers = async () => {
  try {
    const response = await axios.get(OFFER_URL + "get-recent-offers");
    if (response.data) {
      return response.data;
    }
  } catch (err) {
    console.log(err);
  }
};
