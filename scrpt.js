const itemsWrapper = document.querySelector(".items-wrapper");
const up = document.querySelector(".up");
const down = document.querySelector(".down");

let counterImg = 0;

// Costante array immagini
const images = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
  'img/05.webp',
];

// Ciclo immagine
for (let i = 0; i < images.length; i++) {
  const img = images[i];
  itemsWrapper.innerHTML += `<img class="img hide" src="${img}">`;
}

const itemsCollection = document.getElementsByClassName("img");


itemsCollection[counterImg].classList.remove("hide");


up.addEventListener('click', function() {
  itemsCollection[counterImg].classList.add("hide"); 
  counterImg--; 
  if (counterImg < 0) {
    counterImg = images.length - 1; 
  }
  itemsCollection[counterImg].classList.remove("hide"); 
});

// Handler per scorrere verso il basso
down.addEventListener('click', function() {
  itemsCollection[counterImg].classList.add("hide"); 
  counterImg++; 
  if (counterImg >= images.length) {
    counterImg = 0; 
  }
  itemsCollection[counterImg].classList.remove("hide"); // Mostro la nuova immagine
});

console.log(counterImg, images);