import { clearUserData, setUserData } from "../utils.js";
import { get, post } from "./api.js";

const endpoints = {
  login: "/users/login",
  register: "/users/register",
  logout: "/users/logout",
};

async function login(email, password) {
  const result = await post(endpoints.login, { email, password });
  setUserData(result);

  return result;
}

async function register(email, password) {
  const result = await post(endpoints.register, { email, password });
  setUserData(result);

  return result;
}

async function logout() {
  get(endpoints.logout);
  clearUserData();
}

export { login, register, logout };
