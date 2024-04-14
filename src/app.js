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

  const generarNuevaCarta = () => {
    let palo = palos[Math.floor(Math.random() * palos.length)];
    let valor = valores[Math.floor(Math.random() * valores.length)];
    let carta = `${valor} ${palo}`;

    const cartaElement = document.getElementById("carta");
    cartaElement.classList.remove(...cartaElement.classList); // Remove existing classes
    cartaElement.classList.add("card", palo); // Add new classes
    cartaElement.textContent = carta;
  };

  document
    .getElementById("generarNuevaCarta")
    .addEventListener("click", generarNuevaCarta);
  console.log("Hello Rigo from the console!");
};
