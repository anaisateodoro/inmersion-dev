var jugar = prompt('Quieres jugar?(s/n)');
if(jugar == 's'){
  
  var numeroSecreto = parseInt(Math.random() * (1001 - 1) + 1);
  var iterador = 0;
  console.log(numeroSecreto);
  
  while(adivinar != numeroSecreto){
    
    if(iterador != 0){
      alert('Usted ya realizo ' + iterador + ' intentos!')
    }
    
    var adivinar = prompt('Digite un número entre 1 y 1000');
    
    if (adivinar == numeroSecreto){
      alert('Acerto!');
    } else if (adivinar > numeroSecreto){
         alert('El número secreto es menor que ' + adivinar);
    } else if (adivinar < numeroSecreto){
         alert('El número secreto es mayor que ' + adivinar);
    }
    
    iterador += 1;
  }
}