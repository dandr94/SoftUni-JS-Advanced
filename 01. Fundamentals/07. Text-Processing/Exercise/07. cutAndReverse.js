function cutAndReverse(text){
    let middleIndex = Math.floor(text.length / 2)
    let firstPart = text.slice(0, middleIndex)
    let secondPart = text.slice(middleIndex,)
    firstPart = Array.from(firstPart).reverse().join('')
    secondPart = Array.from(secondPart).reverse().join('')
    console.log(firstPart + '\n' + secondPart)
}


cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')