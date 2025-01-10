//Desafio 01
let indice = 13;
let soma = 0;
let k = 0;

while (k < indice) {
  k += 1;
  soma += k;
}

console.log(soma);

//Resposta: conforme inclusive comprovado pelo código acima, o valor de soma ao final será 91!

//Desafio 02
function numeroPertenceAFibonacci(numero) {
  let a = 0;
  let b = 1;
  let c;

  if (numero == a || numero == b) return true;

  while (numero >= b) {
    c = a + b;
    if (numero == c) return true;
    a = b;
    b = c;
  }

  return false;
}

//Basta alterar o valor da variável e rodar o arquivo pora saber se o número pertence ou não.
let numeroQueDesejoSaberSePertenceAFibonacci = 21;
console.log(numeroPertenceAFibonacci(numeroQueDesejoSaberSePertenceAFibonacci));
