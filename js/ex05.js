function produtos() {
  var lista = []

    var nome = prompt("Digite o nome do produto:")
    var preco = parseFloat(prompt("Digite o valor do produto:"))
    lista = addProduto(lista, nome, preco)
  

  exibirCarrinho(lista)
}

function addProduto(lista, nome, preco) {
  lista.push({ nome: nome, preco: preco })
  return(lista)
}

function exibirCarrinho(lista) {
  alert("Carrinho de compras:")
  for (var i = 0; i < lista.length; i++) {
    alert((i + 1)+ "." + (lista[i].nome)+ " R$"+(lista[i].preco))
  }

  var total = 0;
  for (var i = 0; i < lista.length; i++) {
    total += lista[i].preco * 1.1
  }
  var subtotal = total / 1.1
  var imposto = total - subtotal
  alert("Subtotal: R$"+subtotal+" Imposto: R$"+ imposto+ " Total: R$"+total)
}