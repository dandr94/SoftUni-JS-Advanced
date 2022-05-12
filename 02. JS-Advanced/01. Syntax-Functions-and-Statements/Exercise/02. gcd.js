function greatestCommonDivisor(posNumOne, posNumTwo){
    if (posNumTwo){
        return (greatestCommonDivisor(posNumTwo, posNumOne % posNumTwo))
    } else {
        return console.log(posNumOne)
    }
}


greatestCommonDivisor(15, 5)
greatestCommonDivisor(2154, 458)