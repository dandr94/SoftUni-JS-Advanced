function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient')
    let resultElement = document.getElementById('result')

    gradientElement.addEventListener('mousemove', (event) =>{
        resultElement.textContent =  `${Math.floor(
            (event.offsetX / event.target.clientWidth) * 100
        )}%`
    })
}