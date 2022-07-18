import { getUserData } from "../utils.js";

function addSession(ctx, next) {
  ctx.user = getUserData();
  next();
}

export { addSession };
