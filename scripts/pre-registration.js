const scriptURL = 'https://script.google.com/macros/s/AKfycbwwWdO__Y2pD3wsxGD-dts5JJ8uIZNsRIMGjxhK80odyVYeHx4PuKOA1NNgcokDMaJlUw/exec'
const form = document.querySelector('#form')
const btn = document.querySelector('#submit')

form.addEventListener('submit', e => {
  e.preventDefault()
  btn.disabled = true
  console.log(form)
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => { 
          btn.disabled = false
        console.log('Success!', response) })
    .catch(error => {
                 btn.disabled = false
        console.log('Error!', error.message)})
})