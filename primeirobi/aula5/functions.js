// function nomeFuncao() {
// console.log("Olá, esta é a minha função!");
// }


const funcao = function nomeFuncao() {
  console.log("Olá, esta é a minha função!");
}

funcao();

function soma(valor1,valor2){
  return valor1 + valor2;
}

{
  function calculo(funcao1, funcao2) {
    return funcao1 + funcao2;
  }
}

  console.log(soma(5, 10));
  console.log(calculo(5, 10)) + soma(5, 10);


// exempçlo de operadores

  const ValorNumero = 40;
  const ValorNumericoString = "40";

// = = =
  if (ValorNumero == ValorNumericoString) {
    console.log("Os valores são iguais");
  }else{
    console.log("Os valores são diferentes");
  }