function solucao(letra, palavras) {
    let count=0
    for (let item of palavras){
      if(item[0]!=letra){
        count=count+1
      }
    }
    console.log(count)    
    }