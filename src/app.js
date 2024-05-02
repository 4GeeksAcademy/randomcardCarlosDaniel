/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function generarCarta() {
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

  if (palo === "♦" || palo === "♥") {
    palo1.classList.remove("rojo", "negro"); // Remove existing classes
    palo1.classList.add("rojo");
    palo2.classList.remove("rojo", "negro");
    palo2.classList.add("rojo");
  } else {
    palo1.classList.remove("rojo", "negro");
    palo1.classList.add("negro");
    palo2.classList.remove("rojo", "negro");
    palo2.classList.add("negro");
  }

  const button = document.getElementById("generarCarta");
  button.addEventListener("click", generarCarta);
};
