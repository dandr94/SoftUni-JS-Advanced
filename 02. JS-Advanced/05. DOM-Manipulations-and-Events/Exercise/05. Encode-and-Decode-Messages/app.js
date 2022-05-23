function encodeAndDecodeMessages() {
  let [encodeText, decodeText] = document.querySelectorAll("textarea");

  function changeMsg(msg, type) {
    let transformedMsg = "";
    if (type == "encode") {
      transformedMsg = msg
        .split("")
        .map((x) => String.fromCharCode(x.charCodeAt(0) + 1));
    } else if (type == 'decode') {
      transformedMsg = msg
        .split("")
        .map((x) => String.fromCharCode(x.charCodeAt(0) - 1));
    }
    return transformedMsg.join('')
  }
  

  function sendHandler(event){
      if (event.target.textContent.includes('Encode')){
          decodeText.value = changeMsg(encodeText.value, 'encode')
          encodeText.value = ''
      } else {
          decodeText.value = changeMsg(decodeText.value, 'decode')
      }
  }

  document.addEventListener('click', sendHandler)

}
