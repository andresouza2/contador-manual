let valor = document.querySelector('.valor');

console.log(valor.textContent)

function adiciona() {
  valor.textContent = parseInt(valor.textContent) + 1
  console.log(valor.textContent);
}

function retira() {

  if(valor.textContent <= 0) {
    return;
  }else {
    valor.textContent = parseInt(valor.textContent) - 1
    console.log(valor.textContent);
  }
}

