import {del, get, post, put} from './api.js'


const endpoints = {
    books: '/data/books?sortBy=_createdOn%20desc',
    book: '/data/books/',
    edit: '/data/books/',
    delete: '/data/books/',
    add: '/data/books',
    ownBooks: '/data/books?where=_ownerId%3D%22',
    addLike: '/data/likes',
    getLikes: '/data/likes?where=bookId%3D%22',
    getMyLike: '/data/likes?where=bookId%3D%22'
}


export async function getBooks() {
    return get(endpoints.books)
}

export async function getOwnBooks(id) {
    return get(endpoints.ownBooks + `${id}%22&sortBy=_createdOn%20desc`)
}

export async function getBook(id) {
    return get(endpoints.book + id)
}

export async function addBook(data) {
    return post(endpoints.add, data)
}

export async function editBook(id, data) {
    return put(endpoints.edit + id, data)
}

export async function deleteBook(id) {
    return del(endpoints.delete + id)
}

export async function addLike(id) {
    return post(endpoints.addLike, id)
}

export async function getLikes(id) {
    return get(endpoints.getLikes + `${id}%22&distinct=_ownerId&count`)
}


export async function getMyLike(id, userId) {
    return get(endpoints.getMyLike + `${id}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}