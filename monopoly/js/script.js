/* 
Iteração pra criar um tabuleiro, semelhante a uma matriz, mas o centro tem apenas UM  elemento que
no CSS é configurado pra ocupar todo o centro da tabela, no caso o centro grandão do tabuleiro.  
*/

var celula = 21; //Variável para armazenar o id da célula
var diferenca = 12; //Variável para armazenar a diferença entre as celulas antes e depois do centro na mesma fileira
for (var i = 1; i < 12; i++) {
    for (var j = 1; j < 12; j++) {
        //Criando a primeira fileira
        if (i == 1) {
            $(".grid-container").append(`<div class="grid-item limit-row" id="celula${celula}"></div>`);
            celula++;
        }
        //Criando a última fileira
        else if (i == 11) {
            $(".grid-container").append(`<div class="grid-item limit-row" id="celula${celula}"></div>`);
            celula--;
        }
        else { //Criando demais fileiras
            //Célula do começo da fileira, antes do centro
            if (j == 1) {
                celula = celula - diferenca;
                $(".grid-container").append(`<div class="grid-item limit-col" id="celula${celula}"></div>`);
                diferenca++;
            //Célula do fim da fileira, depois do centro
            } else if (j == 11) {
                celula = celula + diferenca;
                $(".grid-container").append(`<div class="grid-item limit-col" id="celula${celula - 1}"></div>`);
                diferenca++;
                if (celula == 41) celula = 11;
            //Centro
            } else if (i == 2 && j == 2) {
                $(".grid-container").append(`<div class="grid-item center" id="centro"></div>`);
            }
        }
    }
}