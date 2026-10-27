console.log(`Conexión con JS correcta`)

let cookies = document.querySelector(".cookies");
let borrarCookies = document.querySelector("#botonBorrar")

borrarCookies.addEventListener("click", function(){
    cookies.remove();
});

let alerta = document.querySelector("#alert");

alerta.addEventListener("click", function(){
    alert(`Busca a tus Amigos y reparte a través de nuestra página abrazos a todos.`)
});

let botonAbrazo1 = document.querySelector("#botonIndicador1");
let botonAbrazo2 = document.querySelector("#botonIndicador2");
let botonAbrazo3 = document.querySelector("#botonIndicador3");
let valorAbrazo1 = document.querySelector("#numero1");
let valorAbrazo2 = document.querySelector("#numero2");
let valorAbrazo3 = document.querySelector("#numero3");
let contador1 = 3;
let contador2 = 2;
let contador3 = 6;

botonAbrazo1.addEventListener("click", function(){
    contador1++;
    valorAbrazo1.textContent = `${contador1} abrazo(s)`;
});

botonAbrazo2.addEventListener("click", function(){
    contador2++;
    valorAbrazo2.textContent = `${contador2} abrazo(s)`;
});

botonAbrazo3.addEventListener("click", function(){
    contador3++;
    valorAbrazo3.textContent = `${contador3} abrazo(s)`;
});