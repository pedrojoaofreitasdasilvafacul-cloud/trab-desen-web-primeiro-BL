// alert("bora criar um server de minecraft?")
console.log(document)

const titulo = document.querySelector("#titulo-principal")

console.log(titulo)

titulo.textContent = "alterado"
titulo.classList.add(".cor-verde")

 function criarElemento() {
     const container = document.getElementById("container")
//     container.style.backgroundColor = "#000";
}


 criarElemento()     //chama a função para criar o elemento


 function criarElemento() {
 const h1 =document.createElement("h1");
h1.textContent = "titulo criado dinamicamente";

 const paragrafo = document.createElement("p");
 paragrafo.textContent = "paragrafo criado dinamicamente";

 const container = document.getElementById("container");
 container.appendChild(h1);
 container.appendChild(paragrafo);

 container.removeChild(h1);     //remove o elemento criado dinamicamente
 }




// ----------------------------------------------------------------------------------------

// function criarElemento() {       cor aleatoria ao clicar no container



//   const container = document.getElementById("container");

//   function corAleatoria() {
//     const cor = "#" + Math.floor(Math.random() * 16777215).toString(16);
//     container.style.backgroundColor = cor;
//   }

//   container.addEventListener("click", corAleatoria);

// }



function criarTarefa(event) {
  event.preventDefult(); // Impede o comportamento padrão do formulário

  const valorInput = event.target.children[1].value; // Obtém o valor do input

  const container = document.getElementById("container");

  const p = document.createElement("p");

  p.textContent = valorInput; // Define o texto do parágrafo como o valor do input

  container.appendChild(p); // Adiciona o parágrafo ao container

}