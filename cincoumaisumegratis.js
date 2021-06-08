function solucao(precos) {
    let menorvalor=precos[0]
    let preco=0
    let resultado=0;
    for (var i = 0; i < precos.length; i++) {
      preco=preco+precos[i]
        if(precos[i]<menorvalor){
          menorvalor=precos[i]
        }
      }
      if(precos.length>=5){
        resultado=preco-menorvalor;
        console.log(resultado)
      }
      else{
        resultado=preco;
        console.log(resultado)
      }   
    }