let sfondoColore = document.getElementById("sfondo");

sfondoColore.addEventListener("click", () => {
  if (document.body.style.backgroundColor === "red") {
    document.body.style.backgroundColor = ""; 
  } else {
    document.body.style.backgroundColor = "red"; 
  }
});

let bottoneNuovo = document.getElementById("bottone");

bottoneNuovo.addEventListener("click", ()=>{
    let a = document.createElement("p");
    a.textContent = 'gay';
    document.body.appendChild(a);
})