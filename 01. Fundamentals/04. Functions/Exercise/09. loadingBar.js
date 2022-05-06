function loadingBar(num) {
    let percentages = '%'.repeat(num / 10)
    let dots = '.'.repeat(10 - num / 10)

    if (num == 100) {
        console.log(`${num}% Complete!\n[${percentages}]`)
    } else {
        console.log(`${num}% [${percentages}${dots}]\nStill loading...`)
    }
}

loadingBar(30)
loadingBar(50)
loadingBar(100)