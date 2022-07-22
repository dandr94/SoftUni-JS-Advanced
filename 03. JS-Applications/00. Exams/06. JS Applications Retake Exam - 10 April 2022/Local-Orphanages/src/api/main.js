import { del, get, post, put } from "./api.js";

const requests = {
  posts: "/data/posts?sortBy=_createdOn%20desc",
  post: (id) => `/data/posts/${id}`,
  create: "/data/posts",
  delete: (id) => `/data/posts/${id}`,
  edit: (id) => `/data/posts/${id}`,
  ownPosts: (id) =>
    `/data/posts?where=_ownerId%3D%22${id}%22&sortBy=_createdOn%20desc`,
  donations: (postId) =>
    `/data/donations?where=postId%3D%22${postId}%22&distinct=_ownerId&count`,
  donate: "/data/donations",
  ownDonation: (postId, userId) =>
    `/data/donations?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
};

async function getPosts() {
  return get(requests.posts);
}

async function getPost(id) {
  return get(requests.post(id));
}

async function createPost(data) {
  return post(requests.create, data);
}

async function editPost(id, data) {
  return put(requests.edit(id), data);
}

async function deletePost(id) {
  return del(requests.delete(id));
}

async function getOwnPosts(id) {
  return get(requests.ownPosts(id));
}

async function getDonations(id) {
  return get(requests.donations(id));
}

async function makeDonation(postId) {
  return post(requests.donate, postId);
}

async function getOwnDonation(id, userId) {
  return get(requests.ownDonation(id, userId));
}

export {
  getPosts,
  getPost,
  createPost,
  deletePost,
  editPost,
  getOwnPosts,
  getDonations,
  makeDonation,
  getOwnDonation,
};
