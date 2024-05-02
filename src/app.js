/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let palos = ["♥", "♦", "♠", "♣"];
  let valores = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let palo = palos[Math.floor(Math.random() * palos.length)];
  let valor = valores[Math.floor(Math.random() * valores.length)];
  let palo1 = document.getElementById("palo1");
  let valorCentro = document.getElementById("valor");
  let palo2 = document.getElementById("palo2");

  palo1.innerText = palo;
  palo2.innerText = palo;
  valorCentro.innerText = valor;

  const cartaElement = document.getElementById("carta");
  cartaElement.classList.remove(...cartaElement.classList); // Remove existing classes
  cartaElement.classList.add("card", palo); // Add new classes
  cartaElement.textContent = carta;

  if (palo1 === "♦" || palo2 === "♥") {
  }
};
