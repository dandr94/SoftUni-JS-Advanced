function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let input = document.getElementById('searchField')
   let rows = document.querySelectorAll('tbody tr')

   function onClick() {
     
      for (const data of rows){
         data.classList.remove('select')
         if (data.textContent.includes(input.value) && input.value){
            data.className = 'select'
         }
      }
      input.value = ''
   }
}