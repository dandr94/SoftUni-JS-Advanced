function matchPhoneNumber(strPhoneNumber){
    let regex = /\+359([\s-])2(\1)\d{3}(\1)\d{4}\b/g
    let result = strPhoneNumber.match(regex).join(', ')
    console.log(result)
}

matchPhoneNumber("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222")