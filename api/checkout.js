import axios from "axios";

const checkout = async (payload) => {
  try {
    const res = await axios.post(
      `https://api.andil.id/konsultasiku/order`,
      payload
    );
    return res;
  } catch (error) {
    return error;
  }
};

export default checkout;
