import axios from "axios";

export const register = async (data) => {
  const response = await axios.post(
    "http://192.53.172.221:3000/api/authaccount/registration",
    data
  );
  return response;
};

export const login = async (data) => {
  const response = await axios.post(
    "http://192.53.172.221:3000/api/authaccount/login",
    data
  );

  return response;
};

export const getTourist = async (token, page) => {
  const response = await axios.get(
    `http://192.53.172.221:3000/api/Tourist?page=${page}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  return response;
};

export const deleteTourist = async (token, id) => {
  const response = await axios.delete(
    `http://192.53.172.221:3000/api/Tourist/${id}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  return response;
};

export const findTourist = async (token, id) => {
  const response = await axios.get(
    `http://192.53.172.221:3000/api/Tourist/${id}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response;
};

export const updateTourist = async (token, data, id) => {
  const response = await axios.put(
    `http://192.53.172.221:3000/api/Tourist/${id}`,
    data,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response;
};

export const createTourist = async (token, data) => {
  const response = await axios.post(
    `http://192.53.172.221:3000/api/Tourist`,
    data,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  return response;
};
