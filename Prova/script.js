let sfondoColore = document.getElementById("sfondo");

sfondoColore.style.fontFamily = "Arial";
sfondoColore.style.fontSize = "20px";
sfondoColore.style.backgroundColor = "blue";
sfondoColore.style.borderRadius = "10px"; 

sfondoColore.addEventListener("click", () => {
  if (document.body.style.backgroundColor === "red") {
    document.body.style.backgroundColor = "";
  } else {
    document.body.style.backgroundColor = "red";
  }
});

let bottoneNuovo = document.getElementById("bottone");

bottoneNuovo.style.fontFamily = "Courier New, monospace";
bottoneNuovo.style.fontSize = "20px";
bottoneNuovo.style.backgroundColor = "green";

bottoneNuovo.addEventListener("click", () => {
  let scritta = document.getElementById("scritta");
  if (scritta) {
    scritta.remove();
  } else {
    let a = document.createElement("p");
    a.textContent = "Scritta";
    a.id = "scritta";
    document.body.appendChild(a);
  }
});

console.log("Larghezza:", window.innerWidth);
console.log("Altezza:", window.innerHeight);

console.log("Browser:", navigator.userAgent);

setTimeout(() => {
  location.reload();
}, 5000);
/*
//Concatenare le stringhe e metterle maiuscole
let s = 'ciao';
console.log(s.concat("oggi è una bella giornata").replace(s, "buongiorno ").toUpperCase());
let colors = ['rosso', 'verde', 'blu', 'nero', 'bianco'];

//Stampa indice e contenuto array con forEach
function miaFunzione(e, i){
  console.log("Colore: " + e.toUpperCase(), " Indice: " + i);
}
colors.forEach(miaFunzione);

//Estraggo numeri maggiori di 20
let numeri = [3, 6, 12, 89, 67, 24, 7, 19, 21, 55];
console.log(numeri.filter(n => n > 20));

//Al quadrato i numeri dell'array
let array = [1, 2, 3, 4];
console.log(array.map(n => n*n));

//Somma numeri dell'array
let casuali = [1, 2, 3, 4, 5];
console.log(casuali.reduce((acc, num) => acc + num));
*/


