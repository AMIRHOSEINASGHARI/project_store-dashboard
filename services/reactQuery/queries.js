import api from "@/configs/api";

const getProducts = () => {
  return api.get("/api/product/all").then((res) => res.data);
};

const getComments = () => {
  return api.get("/api/comments").then((res) => res.data);
};

export { getProducts, getComments };
