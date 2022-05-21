function deleteByEmail() {
    let email = document.getElementsByName('email')[0].value
    let emailColumn = document.querySelectorAll("#customers tr td:nth-child(2)");
    
    let emailElements = Array.from(emailColumn)
    let targetEmail = emailElements.find(x => x.textContent == email)
    let result = document.getElementById('result')
    if (targetEmail){
      targetEmail.parentNode.remove()
      result.textContent = 'Deleted.'
    } else {
      result.textContent = 'Not found.'
    }
    
    
    
}