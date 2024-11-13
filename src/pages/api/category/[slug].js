// pages/api/products.ts

import instance from "../../../utils/instance";

export default async function handler(req, res) {
  try {
    const { page = 1, slug } = req.query; // Получаем slug и page из запроса

    const params = { page };
    if (slug) {
      params.category_slug = slug; // Добавляем слаг категории в параметры запроса
    }

    // Выполняем запрос на сервер для получения продуктов с пагинацией и фильтрацией по категории
    const response = await instance.get("/category", {
      params
    });

    // Отправляем данные обратно
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
