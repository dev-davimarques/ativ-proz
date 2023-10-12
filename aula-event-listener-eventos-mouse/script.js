let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

function atualizarSubtotal(){
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
  valorSubtotal.innerText = subtotalInfo.valor;
}

quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
valorSubtotal.innerText = subtotalInfo.valor;

// Capturando variaveis
let btnAdicionarProduto01 = document.querySelector("#btn-adicionar-produto-01");
// console.log(btnAdicionarProduto01);
let btnQuantidadeProduto01 = document.querySelector("#quantidade-produto-01");
// console.log(btnQuantidadeProduto01);
let btnSubtrairProduto01 = document.querySelector("#btn-subtrair-produto-01")
// Valor do produto
let valorProduto01 = 11.66;

// Funções
function adicionarUm(){
  // Manipular o input
  btnQuantidadeProduto01.value = Number(btnQuantidadeProduto01.value) + 1
  // Manipular a quantidade do objeto subtotalInfo
  subtotalInfo.quantidade = subtotalInfo.quantidade + 1;
  // Multiplicando o valor
  subtotalInfo.valor = btnQuantidadeProduto01.value * valorProduto01;
  // Manipular o DOM  
  atualizarSubtotal();
}

// Eventos
btnAdicionarProduto01.addEventListener("click",adicionarUm);


// Evento com a função dentro
btnSubtrairProduto01.addEventListener("click",function removerUm(){
  if(btnQuantidadeProduto01.value > 0){
    btnQuantidadeProduto01.value = Number(btnQuantidadeProduto01.value) - 1
    // Manipular a quantidade do objeto subtotalInfo
    subtotalInfo.quantidade = subtotalInfo.quantidade - 1;
    // Multiplicando o valor
    subtotalInfo.valor = btnQuantidadeProduto01.value * valorProduto01;
    // Manipular o DOM  
    atualizarSubtotal();
  }
});