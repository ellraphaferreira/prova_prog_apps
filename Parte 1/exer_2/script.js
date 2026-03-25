async function procesarDados() {
    try {
       
        const resposta =  require('./dados.json');
        const dados = await resposta.json();


        const nomesProdutos = dados.map(p => p.nome);

        const produtosComTotal = dados.map(p => ({
            nome: p.nome,
            preco: p.preco,
            valorTotalIndividual: p.preco * p.quantidade
        }));

        const caros = dados.filter(p => p.preco > 500);

        const estoqueBaixo = dados.filter(p => p.quantidade < 5);



        const totalGeral = dados.reduce((acc, p) => acc + (p.preco * p.quantidade), 0);

     
        const totalEletronicos = dados
            .filter(p => p.categoria === "Eletronico")
            .reduce((acc, p) => acc + (p.preco * p.quantidade), 0);


        const totalQtdMaior10 = dados
            .filter(p => p.quantidade > 10)
            .reduce((acc, p) => acc + (p.preco * p.quantidade), 0);


        const maiorValorEstoque = [...produtosComTotal].sort((a, b) => b.valorTotalIndividual - a.valorTotalIndividual)[0];
        const menorValorEstoque = [...produtosComTotal].sort((a, b) => a.valorTotalIndividual - b.valorTotalIndividual)[0];

        const maisCaro = [...dados].sort((a, b) => b.preco - a.preco)[0];
        const maisBarato = [...dados].sort((a, b) => a.preco - b.preco)[0];

   
        const maiorQtd = [...dados].sort((a, b) => b.quantidade - a.quantidade)[0];
        const menorQtd = [...dados].sort((a, b) => a.quantidade - b.quantidade)[0];


        const mediaPrecos = dados.reduce((acc, p) => acc + p.preco, 0) / dados.length;
        const mediaValorTotal = totalGeral / dados.length;

        console.log("analise Concluida:", {
            totalGeral,
            totalEletronicos,
            maisCaro,
            maisBarato,
            mediaPrecos
        });

    } catch (erro) {
        console.error("Ero ao carrega o JSON:", erro);
    }
}

procesarDados();
