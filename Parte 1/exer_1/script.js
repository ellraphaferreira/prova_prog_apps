let produtos = [];

function cadastrar() {
 
    let nome = document.getElementById('input_nome').value;
    let preco = parseFloat(document.getElementById('input_preco').value);
    let quant = parseInt(document.getElementById('input_quant').value);

    
    if (!nome || isNaN(preco) || isNaN(quant)) {
        alert("Preencha todos os campos corretamente!");
        return;
    }

 
    produtos.push({ nome, preco, quant });


    document.getElementById('input_nome').value = "";
    document.getElementById('input_preco').value = "";
    document.getElementById('input_quant').value = "";


    atualizarPainel();
}

function atualizarPainel() {
    if (produtos.length === 0) return;

    let maisCaro = produtos[0];
    let maiorQtd = produtos[0];
    let valorTotalEstoque = 0;

    produtos.forEach(p => {
       
        if (p.preco > maisCaro.preco) maisCaro = p;
        
        
        if (p.quant > maiorQtd.quant) maiorQtd = p;
        
   
        valorTotalEstoque += (p.preco * p.quant);
    });

    document.getElementById('card_caro').textContent = `${maisCaro.nome} (R$ ${maisCaro.preco.toFixed(2)})`;
    document.getElementById('card_qtd').textContent = `${maiorQtd.nome} (${maiorQtd.quant} un)`;
    document.getElementById('card_total').textContent = `R$ ${valorTotalEstoque.toFixed(2)}`;
}
