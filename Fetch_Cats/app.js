const URL = 'https://thatcopy.pw/catapi/rest/';
const btn_generate = document.getElementById('btn-add');

const title_card = document.querySelector('#title-card');
const quote_card = document.querySelector('#quote-card');
const img_card = document.querySelector('#img-card');

btn_generate.addEventListener('click', fetch_cats);

function fetch_cats() {  
  fetch(URL)
  .then(response => response.json())  
  .then(data => {    
    title_card.textContent = data.id;
    img_card.setAttribute('src', data.url);
    console.log(data.url);
    img_card.setAttribute('alt', data.character);
    img_card.style.visibility = 'visible';    
  })
  .catch(error => console.log(error));  
}