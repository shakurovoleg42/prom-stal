import axios from "axios";

const fetchService = {

  sendRightSideMessage: async (data) => {
    const res = await axios.post(process.env.NEXT_PUBLIC_API + "/request", data);
    return res.data;
  },

  sendForm: async (data) => {
    const res = await axios.post(process.env.NEXT_PUBLIC_API + "/feedback", data);
    return res.data;
  },

  sendContactForm: async (data) => {
    const res = await axios.post(process.env.NEXT_PUBLIC_API + "/cfeedback", data);
    return res.data;
  },
  
};

export default fetchService;