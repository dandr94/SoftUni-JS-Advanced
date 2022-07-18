import { get, post } from "./api.js";

const request = {
  getById: (gameId) => `/data/comments?where=gameId%3D%22${gameId}%22`,
  postComment: "/data/comments",
};

async function getByGameId(id) {
  return get(request.getById(id));
}

async function postComment(comment) {
  return post(request.postComment, comment);
}

export { getByGameId, postComment };
