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


