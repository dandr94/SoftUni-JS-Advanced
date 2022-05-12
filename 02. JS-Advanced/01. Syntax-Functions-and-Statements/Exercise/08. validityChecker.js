function validityChecker(x1, y1, x2, y2){
    const isValidDistance = (x1, y1, x2, y2) =>
        Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)) % 1 == 0
    let pairs = [
        [x1, y1, 0, 0],
        [x2, y2, 0, 0],
        [x1, y1, x2, y2],
    ]
    const message = (a, b, c, d, validity) => `{${a}, ${b}} to {${c}, ${d}} is ${validity}`
    pairs.forEach((a, b) =>
        console.log(isValidDistance(...pairs[b]) ? message(...a, "valid") : message(...a, "invalid")))
}


validityChecker(3, 0, 0, 4)
validityChecker(2, 1, 1, 1)