export const createUser = async (userData) => {
  const res = await fetch("/api/auth/register", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: { "Content-type": "application/json" },
  });
  const data = await res.json();
  return data;
};

export const fetchAdmins = async () => {
  const res = await fetch("/api/user/administrators");
  const data = await res.json();
  return data;
};

export const giveAccessToUser = async (username, actionType) => {
  const res = await fetch("/api/user/administrators", {
    method: "post",
    body: JSON.stringify({ username, actionType }),
    headers: { "Content-type": "application/json" },
  });
  const data = await res.json();
  return data;
};

export const updateUserInfo = async (form) => {
  const res = await fetch("/api/user/update", {
    method: "post",
    body: JSON.stringify(form),
    headers: { "Content-type": "application/json" },
  });
  const data = await res.json();
  return data;
};

export const createProduct = async (form) => {
  const res = await fetch("/api/product/create", {
    method: "post",
    body: JSON.stringify(form),
    headers: { "Content-type": "application/json" },
  });
  const data = await res.json();
  return data;
};

export const fetchProducts = async () => {
  const res = await fetch(`/api/product/all`);
  const data = await res.json();
  return data;
};

export const deleteProduct = async (_id) => {
  const res = await fetch("/api/product/delete", {
    method: "DELETE",
    body: JSON.stringify(_id),
    headers: { "Content-type": "application/json" },
  });
  const data = await res.json();
  return data;
};

export const addStockAndDiscount = async (form) => {
  const res = await fetch("/api/product", {
    method: "PATCH",
    body: JSON.stringify(form),
    headers: { "Content-type": "application/json" },
  });
  const data = await res.json();
  return data;
};

export const fetchComments = async () => {
  const res = await fetch("/api/comments");
  const data = await res.json();
  return data;
};

export const answerToComment = async (answer, commentId) => {
  const res = await fetch(`/api/comments/${commentId}`, {
    method: "PATCH",
    body: JSON.stringify(answer),
    headers: { "Content-type": "application/json" },
  });
  const data = await res.json();
  return data;
};

export const fetchProduct = async (productId) => {
  const res = await fetch(`/api/product/${productId}`);
  const data = await res.json();
  return data;
};
