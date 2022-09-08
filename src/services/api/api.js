import axios from "axios";

const BASE_URL = "https://frontend-test-assignment-api.abz.agency/api/v1";

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {};
axios.defaults.headers = { "Content-Type": "application/json" };

const API_ROUTES = {
  token: "/token",
  users: "/users/",
  positions: `/positions`,
};

export const getData = async (route, id, params) => {
  try {
    const { data } = await axios.get(API_ROUTES[route] + (id ? id : ""), {
      params,
    });
    return data;
  } catch (error) {
    console.log("error", { error });
    return null;
  }
};

export const createData = async (route, obj, token) => {
  let formData = new FormData();

  for (var key in obj) {
    formData.append(key, obj[key]);
  }

  try {
    const { data } = await axios.post(API_ROUTES[route], formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Token: token,
      },
    });
    const response = data;
    return response;
  } catch (error) {
    console.log(error.response.data);
    return [];
  }
};
