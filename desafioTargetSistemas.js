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

//Desafio 03
const faturamentoJaneiro2025 = require("./faturamentoDesafio03.json");
let primeiroDiaDoMes = faturamentoJaneiro2025.faturamentoJaneiro2025[0];
let diaComMenorFaturamento = primeiroDiaDoMes;
let diaComMaiorFaturamento = primeiroDiaDoMes;
let diasZerados = 0;
let diasNaoZerados = 0;
let mediaMensalFaturamento = 0;
let faturamentoTotal = 0;
let quantidadeDeDiasEmQueOFaturamentoFoiMaiorQueAMedia = 0;
let diasComOFaturamentoMaiorQueAMedia = [];

faturamentoJaneiro2025.faturamentoJaneiro2025.forEach((dia) => {
  //Como na média era para ignorar o 0 na média, imaginei que deveria ignorar o 0 também para saber o dia com menor faturamento;

  if (dia.faturamento > 0 && dia.faturamento < diaComMenorFaturamento.faturamento) {
    diaComMenorFaturamento = dia;
  }

  //Pegando o dia com maior faturamento.
  if (dia.faturamento > diaComMaiorFaturamento.faturamento) {
    diaComMaiorFaturamento = dia;
  }

  dia.faturamento == 0 ? (diasZerados += 1) : (diasNaoZerados += 1);
  faturamentoTotal += dia.faturamento;
});

mediaMensalFaturamento = faturamentoTotal / diasNaoZerados;

//Vendo quantos dias tiveram o faturamento maior que a media
faturamentoJaneiro2025.faturamentoJaneiro2025.forEach((dia) => {
  if (dia.faturamento > mediaMensalFaturamento) {
    quantidadeDeDiasEmQueOFaturamentoFoiMaiorQueAMedia += 1;
    diasComOFaturamentoMaiorQueAMedia.push(dia.data);
  }
});

console.log(`O faturamento da Janeiro de 2025 foi de R$${faturamentoTotal}`);
console.log(`Já a média de faturamento desse mês foi R$${mediaMensalFaturamento.toFixed(2)}`);
console.log(
  `Inclusive, nós tivemos ${quantidadeDeDiasEmQueOFaturamentoFoiMaiorQueAMedia} com o faturamento maior que a média, sendo eles: ${diasComOFaturamentoMaiorQueAMedia}`
);
console.log(
  `O dia com menor faturamento foi: ${diaComMenorFaturamento.data} em que foram arrecadados R$${diaComMenorFaturamento.faturamento}`
);
console.log(
  `Já o dia com maior faturamento foi em ${diaComMaiorFaturamento.data}, onde foram arrecadados R$${diaComMaiorFaturamento.faturamento}`
);
