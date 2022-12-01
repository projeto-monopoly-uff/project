
import { Jogador } from "./jogador/jogador.js";
import { Carteira } from "./jogador/carteira.js"; 

function Propriedade(){
    
}

    Propriedade.compraProp = function(){
        var preco = 0
        if (Jogador.contaPosicao > 0){
            var idCel = Jogador.contaPosicao;
            preco = celula[idCel].preco;
        }
        
        if(celula.dono == 0 && Jogador.Carteira.fundos >= preco && celula.groupNumber){
            
            Jogador.pagar(preco);
            Carteira.propriedades.push(this.Celula);
            this.Celula.dono = player;
    
            console.log("Propriedade comprada com sucesso");
            
        }

    }


export { Propriedade };
