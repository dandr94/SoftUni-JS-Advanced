import { clearUserData, setUserData } from "../utils.js";
import { get, post } from "./api.js";

const request = {
  login: "/users/login",
  register: "/users/register",
  logout: "/users/logout",
};

async function login(username, password) {
  const result = await post(request.login, { username, password });
  setUserData(result);

  return result;
}

async function register(username, password) {
  const result = await post(request.register, { username, password });
  setUserData(result);

  return result;
}

async function logout() {
  get(request.logout);
  clearUserData();
}

export { login, register, logout };
