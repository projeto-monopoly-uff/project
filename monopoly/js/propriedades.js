import { celula, Celula } from "./informacoes.js";

var celula = celula;
var CelulaClass = Celula;

function jogador(dinheiro, propriedades, num){
    this.dinheiro = dinheiro;
    this.propriedades = propriedades;
    this.num = num;
}
var jogador = [];

jogador[1] = new jogador(1500,[], 1);
jogador[2] = new jogador(1500,[], 2);

var turno = 1;

function Propriedade(CelulaClass, celula){
    this.Celula = CelulaClass;
    this.celula = celula;



    this.compraProp = function(){
        var celula = celula[3]
        var preco = celula.preco;
        var jogador = jogador[turno];
        if(celula.dono == 0 && jogador.dinheiro >= preco){
            jogador.dinheiro -= preco;
            jogador.propriedades.push(this.Celula);
            this.Celula.dono = turno;
            
            
            
        }

    }

}

