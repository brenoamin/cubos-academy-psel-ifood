function solucao(produtos) {
    let faturamento = {totalTop: 0, percentual: 0}
     let produtosbons=0
     const produtoscaros= 10000
     let quantidade=0;
     for (var i = 0; i < produtos.length; i++) {
         quantidade= quantidade + produtos[i].preco
         if(produtos[i].preco>produtoscaros) {
           produtosbons= produtosbons+ produtos[i].preco
           }
     }
     faturamento.totalTop = produtosbons;
     const porcentagem= produtosbons/quantidade
     faturamento.percentual = porcentagem
     console.log(faturamento)
 }