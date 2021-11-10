const btnGenerate = document.querySelector(".btnGenerate");
const imageCatch = document.querySelector(".imageCatch");
const container = document.querySelector(".container");
const currentCharacter = document.querySelector(".character");
const currentQuote = document.querySelector(".description");

btnGenerate.addEventListener("click", generate);

function generate() {
 const url = "https://thesimpsonsquoteapi.glitch.me/quotes";
 fetch(url)
  .then((response) =>  response.json())
  .then((result) => showImage(result))  
}

// function generate() {
//  const url = "https://thesimpsonsquoteapi.glitch.me/quotes";
//  fetch(url)
//   .then((response) => response.json())
//   .then((result) => showImage(result));
// }

function showImage(data) {
 data.forEach((profile) => {
  const { character, image, quote } = profile;

  currentCharacter.textContent = character;
  currentQuote.textContent = quote;
  imageCatch.setAttribute("src", image);
 });

 console.log(data);
}
