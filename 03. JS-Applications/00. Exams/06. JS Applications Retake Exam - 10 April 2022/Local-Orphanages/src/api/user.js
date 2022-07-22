import { clearUserData, setUserData } from "../utils.js";
import { get, post } from "./api.js";

const request = {
  login: "/users/login",
  register: "/users/register",
  logout: "/users/logout",
};

async function login(email, password) {
  const result = await post(request.login, { email, password });
  setUserData(result);

  return result;
}

async function register(email, password) {
  const result = await post(request.register, { email, password });
  setUserData(result);

  return result;
}

async function logout() {
  get(request.logout);
  clearUserData();
}

export { login, register, logout };
