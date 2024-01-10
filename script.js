let contador = 1;

setInterval(function(){
    document.getElementById('slide' + contador + '_2').checked = true;
    contador ++;

    if(contador > 4){
        contador = 1;
    }

}, 4000 )