import api from "@/configs/api";

const getProducts = () => {
  return api.get("/api/product/all").then((res) => res.data);
};

export { getProducts };
