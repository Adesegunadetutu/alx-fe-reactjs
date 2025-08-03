import axios from "axios";

const BASE_URL = "https://api.github.com";

export const searchUsers = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);
  return response.data;
};

export const getUserDetails = async (username) => {
  const response = await axios.get(`${BASE_URL}/users/${username}`);
  return response.data;
};
