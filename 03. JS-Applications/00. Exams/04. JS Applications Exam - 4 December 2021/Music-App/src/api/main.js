import { del, get, post, put } from "./api.js";

const request = {
  catalog: "/data/albums?sortBy=_createdOn%20desc&distinct=name",
  album: (id) => `/data/albums/${id}`,
  edit: (id) => `/data/albums/${id}`,
  delete: (id) => `/data/albums/${id}`,
  create: "/data/albums",
  search: (query) => `/data/albums?where=name%20LIKE%20%22${query}%22`,
};

async function getCatalog() {
  return get(request.catalog);
}

async function getAlbum(id) {
  return get(request.album(id));
}

async function createAlbum(data) {
  return post(request.create, data);
}

async function editAlbum(id, data) {
  return put(request.edit(id), data);
}

async function deleteAlbum(id) {
  return del(request.delete(id));
}

async function searchYear(query) {
  return get(request.search(query));
}

export {
  getCatalog,
  getAlbum,
  createAlbum,
  editAlbum,
  deleteAlbum,
  searchYear,
};
