function solve() {
    const fname = document.getElementById('fname')
    const lname = document.getElementById('lname')
    const email = document.getElementById('email')
    const birth = document.getElementById('birth')
    const position = document.getElementById('position')
    const salary = document.getElementById('salary')
    const tbody = document.getElementById('tbody')
    const salaryNeeded = document.getElementById('sum')


    document.getElementById('add-worker').addEventListener('click', (ev) => {
        if (fname.value !== "" && lname.value !== "" && email.value !== "" && birth.value !== "" && position.value !== "" && salary.value !== "") {
            addWorker(ev, fname.value, lname.value, email.value, birth.value, position.value, salary.value);
            clearInputs();
        }
    })
        
    
    
    
    function addWorker(ev, fName, lName, email, birth, position, salary){
        ev.preventDefault()
        const tr = createElement('tr')
        createElement('td', `${fName}`, tr)
        createElement('td', `${lName}`, tr)
        createElement('td', `${email}`, tr)
        createElement('td', `${birth}`, tr)
        createElement('td', `${position}`, tr)
        createElement('td', `${salary}`, tr)

        const td = createElement('td', '', tr)
        let firedBtn = createElement('button', 'Fired', td)
        let editBtn = createElement('button', 'Edit', td)
        firedBtn.setAttribute('class', 'fired')
        editBtn.setAttribute('class', 'edit')

        tbody.appendChild(tr)

        const currentSalary = Number(salaryNeeded.textContent)
        salaryNeeded.textContent = (Number(salary) + currentSalary).toFixed(2)

        editBtn.addEventListener('click', (ev) => editWorker(ev, fName, lName, email, birth, position, salary))
        firedBtn.addEventListener('click', (ev) => fireWorker(ev, salary))
    }


    function fireWorker(ev, salary){
        ev.preventDefault()
        ev.target.parentNode.parentNode.remove()
        reduceSalary(salary)
    }


    function editWorker(ev, f, l, e, b, p, s){
        ev.preventDefault()
        ev.target.parentNode.parentNode.remove()

        fname.value = f
        lname.value = l
        email.value = e
        birth.value = b
        position.value = p
        salary.value = s

        reduceSalary(s)

    }

    function reduceSalary(s) {
        const currentSalary = Number(salaryNeeded.textContent)
        salaryNeeded.textContent = Math.abs((Number(s) - currentSalary)).toFixed(2)
    }


    function createElement(type, content, parent){
        const el = document.createElement(type)
        el.textContent = content

        if (parent){
            parent.appendChild(el)
        }

        return el
    }


    function clearInputs() {
        fname.value = "";
        lname.value = "";
        email.value = "";
        birth.value = "";
        position.value = "";
        salary.value = "";
    }

    
}
solve()