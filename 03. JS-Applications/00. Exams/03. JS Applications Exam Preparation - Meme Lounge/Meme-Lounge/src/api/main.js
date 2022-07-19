import { del, get, post, put } from "./api.js";

const requests = {
  memes: "/data/memes?sortBy=_createdOn%20desc",
  meme: (id) => `/data/memes/${id}`,
  create: "/data/memes",
  delete: (id) => `/data/memes/${id}`,
  edit: (id) => `/data/memes/${id}`,
  ownMemes: (id) =>
    `/data/memes?where=_ownerId%3D%22${id}%22&sortBy=_createdOn%20desc`,
};

async function getMemes() {
  return get(requests.memes);
}

async function getMeme(id) {
  return get(requests.meme(id));
}

async function createMeme(data) {
  return post(requests.create, data);
}

async function editMeme(id, data) {
  return put(requests.edit(id), data);
}

async function deleteMeme(id) {
  return del(requests.delete(id));
}

async function getOwnMemes(id) {
  return get(requests.ownMemes(id));
}

export { getMemes, createMeme, getMeme, deleteMeme, editMeme, getOwnMemes };
