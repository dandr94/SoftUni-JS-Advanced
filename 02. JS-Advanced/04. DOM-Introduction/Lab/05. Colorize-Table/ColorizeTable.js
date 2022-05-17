function colorize() {
    let rows = Array.from(document.querySelectorAll('tr'))

    for (let i = 0; i < rows.length; i++){
        if (i % 2 != 0){
            rows[i].style.background = 'teal'
        }
    }

}