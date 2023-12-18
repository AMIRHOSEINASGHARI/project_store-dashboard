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
  const res = await fetch("/api/product/all");
  const data = await res.json();
  return data;
};
