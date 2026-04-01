
const valorConta = 100;

const percentualGorjeta = 15;

const valorgorjeta = (valorConta * percentualGorjeta)/100;

const valortotal = valorConta + valorgorjeta ;

console.log(`Valor da conta: R$${valorConta.toFixed(2)}, Gorjeta (${percentualGorjeta}%): R$${valorgorjeta.toFixed(2)}, Total a Pagar: R$${valortotal.toFixed(2)}`)




