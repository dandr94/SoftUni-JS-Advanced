import { del, get, post, put } from "./api.js";

const request = {
  listings: "/data/cars?sortBy=_createdOn%20desc",
  listing: (id) => `/data/cars/${id}`,
  edit: (id) => `/data/cars/${id}`,
  delete: (id) => `/data/cars/${id}`,
  create: "/data/cars",
  ownListings: (id) =>
    `/data/cars?where=_ownerId%3D%22${id}%22&sortBy=_createdOn%20desc`,
  search: (query) => `/data/cars?where=year%3D${query}`,
};

async function getListings() {
  return get(request.listings);
}

async function getListing(id) {
  return get(request.listing(id));
}

async function createListing(data) {
  return post(request.create, data);
}

async function editListing(id, data) {
  return put(request.edit(id), data);
}

async function deleteListing(id) {
  return del(request.delete(id));
}

async function getOwnListings(id) {
  return get(request.ownListings(id));
}

async function searchYear(query) {
  return get(request.search(query));
}

export {
  getListings,
  getListing,
  createListing,
  editListing,
  deleteListing,
  getOwnListings,
  searchYear,
};
