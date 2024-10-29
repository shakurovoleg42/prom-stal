import axios from "axios";

const fetchService = {
  getAllCategories: async () => {
    const res = await axios.get(process.env.NEXT_PUBLIC_API + "/category");
    return res.data;
  },

  getAllProducts: async ({ page }) => {
    const res = await axios.get("/api/products/route", {
      params: { page },
    });
    return res.data;
  },

  getProductsBySearch: async (search) => {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_API + "/search?query=" + search
    );
    return res.data;
  },

  getSingleProduct: async (slug) => {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_API + "/products/" + slug
    );
    return res.data;
  },

  getCategoryBySlug: async (slug) => {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_API + "/category/" + slug
    );
    return res.data;
  },

  getProductsByCategory: async (slug, params) => {
    const res = await axios.get("/api/category/" + slug, { params });
    return res.data;
  },

  sendRightSideMessage: async (data) => {
    const res = await axios.post(
      process.env.NEXT_PUBLIC_API + "/request",
      data
    );
    return res.data;
  },

  sendForm: async (data) => {
    const res = await axios.post(
      process.env.NEXT_PUBLIC_API + "/feedback",
      data
    );
    return res.data;
  },

  sendContactForm: async (data) => {
    const res = await axios.post(
      process.env.NEXT_PUBLIC_API + "/cfeedback",
      data
    );
    return res.data;
  },
};

export default fetchService;
