import axios from "axios";

const fetchService = {

  sendRightSideMessage: async (data) => {
    const res = await axios.post(process.env.NEXT_URL + "/request", data);
    return res.data;
  },
  
};

export default fetchService;