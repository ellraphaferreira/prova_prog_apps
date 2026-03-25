
let listaProdutos = [];

function cadastrar() {

    let nome = document.getElementById('input_1').value;
    let preco = document.getElementById('input_2').value;
    let quant = document.getElementById('input_3').value;

   
    let produto = {
        "nome": nome,
        "preço": parseFloat(preco), 
        "quantidade": parseInt(quant) 
    };


    listaProdutos.push(produto);

    console.log("Produto cadastrado:", produto);
    console.log("Lista completa:", listaProdutos);
    
    document.getElementById('input_1').value = '';
    document.getElementById('input_2').value = '';
    document.getElementById('input_3').value = '';
}
