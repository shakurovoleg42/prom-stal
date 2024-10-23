import instance from "../../../utils/instance";

export default async function handler(req, res) {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const page = url.searchParams.get("page") || 1;

    const response = await instance.get("/category/" + slug, {
      params: { page },
    });
    
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
