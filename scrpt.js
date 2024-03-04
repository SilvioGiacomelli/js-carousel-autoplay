const itemsWrapper = document.querySelector(".items-wrapper");
const up = document.querySelector(".up");
const down = document.querySelector(".down");

let counterImg = 0;
let autoScroll;

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

function scrollDown() {
  itemsCollection[counterImg].classList.add("hide"); // Nascondo l'immagine corrente
  counterImg = (counterImg + 1) % images.length; 
  itemsCollection[counterImg].classList.remove("hide");
};

// Handler per scorrere verso il basso
down.addEventListener('click', function() {
  itemsCollection[counterImg].classList.add("hide"); // Nascondo l'immagine corrente
  counterImg++; // Incremento l'indice per muovermi verso il basso
  if (counterImg >= images.length) {
    counterImg = 0; // Se supero il limite inferiore, torno al primo elemento
  }
  itemsCollection[counterImg].classList.remove("hide"); // Mostro la nuova immagine
});

console.log(counterImg, images);