import { celula, Celula } from "./informacoes.js";
import { jogador } from "./jogador/jogador.js";
import { carteira } from "./jogador/carteira.js"; 

var celula = celula;
var CelulaClass = Celula;
var jogador = jogador;
var carteira = carteira;

var turno = 1;

function Propriedade(CelulaClass, celula){
    this.Celula = CelulaClass;
    this.celula = celula;

    this.compraProp = function(){
        var celula = celula[3]
        var preco = celula.preco;
        var player = jogador.id;
        if(celula.dono == 0 && jogador.dinheiro >= preco && celula.groupNumber){
            jogador.pagar(preco);
            carteira.propriedades.push(this.Celula);
            this.Celula.dono = player;
            
            console.log("Propriedade comprada com sucesso");
            
        }

    }

}

