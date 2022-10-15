/* 
Iteração pra criar um tabuleiro, semelhante a uma matriz, mas o centro tem apenas UM  elemento que
no CSS é configurado pra ocupar todo o centro da tabela, no caso o centro grandão do tabuleiro.  
*/
for(var i = 1; i < 12; i++){
    for(var j = 1; j < 12; j++){
        if(i == 1 || i == 11){
            $(".grid-container").append(`<div class="grid-item limit-row">${i}</div>`);
        } else {
            if(j == 1 || j == 11){
                $(".grid-container").append(`<div class="grid-item limit-col">${i}</div>`);
            } else if(i == 2 && j == 2) {
                $(".grid-container").append(`<div class="grid-item center">"Center"</div>`);
            }
        }
    }
}