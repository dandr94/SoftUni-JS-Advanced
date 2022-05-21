function solve() {
   let shoppingCart = document.getElementsByClassName('shopping-cart')[0]
   let checkout = document.getElementsByClassName('checkout')[0]
   let output = document.getElementsByTagName('textarea')[0]
   let buttons = document.getElementsByTagName('button')

   let myCart = []

   function addProductHandler(event) {
      if (event.target.tagName == 'BUTTON' && event.target.classList.contains('add-product')){
         let product = event.target.parentNode.parentNode
         let productName = product.querySelector('.product-title').textContent
         let productPrice = Number(product.querySelector('.product-line-price').textContent)

         myCart.push({productName, productPrice})

         output.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`


      }
   }

   function checkoutHandler() {
      let products = new Set()
      let totalPrice = 0
      for (let product of myCart){
         products.add(product.productName)
         totalPrice += product.productPrice
      }

      output.value += `You bought ${[...products.keys()]
      .join(', ')} for ${totalPrice.toFixed(2)}.`

      Array.from(buttons).map(x => x.disabled = "true")

   }

   shoppingCart.addEventListener('click', addProductHandler)
   checkout.addEventListener('click', checkoutHandler)
}