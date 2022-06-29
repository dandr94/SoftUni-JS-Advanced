const elements = {
    loadAllBooks: document.getElementById('loadBooks'),
    tbody: document.querySelector('body table tbody'),
    submitForm: document.getElementById('submitForm'),
    editForm: document.getElementById('editForm')
}

function createElement(type, content, parent, id, cls) {
    const el = document.createElement(type);
    el.textContent = content;

    if (cls) {
        el.className = cls
    }

    if (id) {
        el.id = id
    }
  
    if (parent) {
      parent.appendChild(el);
    }
  
    return el;
  }

const returnData = async (suffix) => {
    const result = await fetch(`http://localhost:3030/jsonstore/collections/${suffix}`);
    return result.json();
  };


async function displayBooks() {
    const data = await returnData('books')
    elements.tbody.innerHTML = ''
    elements.submitForm.style.display = 'block'
    elements.editForm.style.display = 'none'

    Object.entries(data).forEach(([id, book]) => {
        const tr = createElement('tr', '', elements.tbody, id)
        createElement('td', book.title, tr)
        createElement('td', book.author, tr)
        const td = createElement('td', '', tr)
        const deleteBtn = createElement('button', 'Delete', td, 'deleteBook')
        const editBtn = createElement('button', 'Edit', td, 'editBook')

        editBtn.addEventListener('click', async (ev) => {
            const book = await returnData(`books/${id}`)
            elements.submitForm.style.display = 'none'
            elements.editForm.style.display = 'block'
            document.querySelector('#editForm input[name=title]').value = book.title
            document.querySelector('#editForm input[name=author]').value = book.author

            document.getElementById('editForm').addEventListener('submit', async (ev) => {
                ev.preventDefault()
                const formData = new FormData(ev.target)
                const data = Object.fromEntries([...formData.entries()])
                const option = {
                    method: 'PUT',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(data)
                }

                const response = await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, option)
                displayBooks()
            })
        })

        deleteBtn.addEventListener('click', async (ev) => {
            const option = {method: 'DELETE'}
            const response = await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, option)
            ev.target.parentNode.parentNode.remove()
        })
    })
}


async function submitBook(ev) {
    ev.preventDefault()
    const formData = new FormData(ev.target)
    const data = Object.fromEntries([...formData.entries()])
    
    if (data.author !== '' && data.title !== '') {
        const option = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        }
        const response = await fetch('http://localhost:3030/jsonstore/collections/books', option)
        
        document.querySelector('#submitForm input[name=title]').value = ''
        document.querySelector('#submitForm input[name=author]').value = ''
    } 


}

function attachEvents() {
    displayBooks()
    elements.loadAllBooks.addEventListener('click', () => {
        displayBooks()
    })


    elements.submitForm.addEventListener('submit', (ev) => {
        submitBook(ev)
    })

}
attachEvents()