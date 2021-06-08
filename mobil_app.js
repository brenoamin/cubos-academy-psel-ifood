function solucao(tempo, distancia) {
	if(tempo<5){
  console.log(600)
}
else if(tempo>=5 & tempo<=60){
  const cobra =(100*tempo+50*distancia)
  console.log(cobra)
}
else{
  if(distancia<100){
    const cobra =(200*distancia)
    console.log(cobra)
  }
  else{
    const cobra =(150*distancia)
    console.log(cobra)
  }
}
}