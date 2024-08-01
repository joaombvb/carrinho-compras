let totalCarrinho = 0;
limpar();

function adicionar() {
    let produto = document.getElementById('produto').value;
    let produtoSeparado = produto.split("- R$");
    let produtoNome = produtoSeparado[0];
    let produtoValor = produtoSeparado[1];
    let quantidade = document.getElementById('quantidade').value;
    let valorFinal = produtoValor * quantidade;
    let produtoNoCarrinho = document.getElementById('lista-produtos');

    produtoNoCarrinho.innerHTML += 
    `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> 
        ${produtoNome} <span class="texto-azul">R$${valorFinal}</span>
    </section>`;

    totalCarrinho += valorFinal;
    document.getElementById('valor-total').innerHTML = `R$${totalCarrinho}`;
    
    document.getElementById('quantidade').value = '';
    
}

function limpar() {
    document.getElementById('produto').value = '';
    document.getElementById('quantidade').value = '';
    document.getElementById('lista-produtos').innerHTML = '';
    totalCarrinho = 0;
    document.getElementById('valor-total').innerHTML = `R$${totalCarrinho}`;
}