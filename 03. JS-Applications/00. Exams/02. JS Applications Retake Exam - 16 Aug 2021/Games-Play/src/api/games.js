import { del, get, post, put } from "./api.js";

const request = {
  recent: "/data/games?sortBy=_createdOn%20desc&distinct=category",
  catalog: "/data/games?sortBy=_createdOn%20desc",
  create: "/data/games",
  byId: "/data/games/",
  delete: "/data/games/",
  edit: "/data/games/",
};

async function getRecent() {
  return get(request.recent);
}
async function getById(id) {
  return get(request.byId + id);
}

async function getCatalog() {
  return get(request.catalog);
}

async function create(data) {
  return post(request.create, data);
}

async function deleteById(id) {
  return del(request.delete + id);
}

async function edit(id, data) {
  return put(request.edit + id, data);
}

export { getRecent, getCatalog, create, getById, deleteById, edit };
