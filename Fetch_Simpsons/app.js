const URL = 'https://thesimpsonsquoteapi.glitch.me/quotes';

const btn_generate = document.getElementById('btn-add');

const title_card = document.querySelector('#title-card');
const quote_card = document.querySelector('#quote-card');
const img_card = document.querySelector('#img-card');

btn_generate.addEventListener('click', fetch_simpsons);

function fetch_simpsons() {  
  fetch(URL)
  .then(response => response.json())  
  .then(data => {    
    title_card.textContent = data[0].character;
    img_card.setAttribute('src', data[0].image);
    img_card.setAttribute('alt', data[0].character);
    img_card.style.visibility = 'visible';
    quote_card.textContent = data[0].quote;
  })
  .catch(error => console.log(error));  
}