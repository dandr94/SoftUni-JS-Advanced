function getUserData() {
  return JSON.parse(localStorage.getItem("user"));
}

function getAccessToken() {
  const user = getUserData();

  if (user) {
    return user.accessToken;
  } else {
    return null;
  }
}

function clearUserData() {
  localStorage.removeItem("user");
}

function setUserData(data) {
  localStorage.setItem("user", JSON.stringify(data));
}

function createSubmitHandler(ctx, handler) {
  return function (event) {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));

    handler(ctx, formData, event);
  };
}

function parseQuerystring(query = "") {
  return Object.fromEntries(query.split("&").map((kvp) => kvp.split("=")));
}

export {
  getUserData,
  getAccessToken,
  clearUserData,
  setUserData,
  createSubmitHandler,
  parseQuerystring,
};
