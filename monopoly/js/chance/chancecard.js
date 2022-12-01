/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import { Jogador } from "../jogador/jogador.js";
import { listaDeJogadores } from "../jogador/lista-de-jogadores.js";
import { rolarDados } from "../dados/dados.js";
import { Carteira } from "../jogador/carteira.js";
//import { Propriedade } from "../propriedade/propriedade.js";
import { dispararchanceMovimento } from "../compositor.js";
import { dispararMovimento } from "../compositor.js";
import {disablechance} from "../compositor.js";

function baralhochance(){
    //const conteudo = document.createElement('div');

    const majorContainer = document.createElement('div')
    majorContainer.classList.add('chance-major-container');
    
    const container1 = document.createElement('container');
    container1.classList.add('chance-container');

    const container1Title = document.createElement('h1');
    container1Title.innerText = "Vamos jogar!";
    container1.appendChild(container1Title);

    const firstDice = document.createElement('div');
    firstDice.classList.add('chance');
    firstDice.innerHTML = '<img class="dice-img img2" src="imagens/Chance.png">'
    container1.appendChild(firstChance);
    
    const container2 = document.createElement('container');
    container2.classList.add('dice-container');

    container2.appendChild(document.createElement('br'));
    container2.appendChild(document.createElement('br'));

    
    //const input = document.createElement('input');
    //input.classList.add('result');
    //input.id = 'sum';
   // input.readOnly = true;

   // container2.appendChild(input);
    container2.appendChild(document.createElement('br'));
    container2.appendChild(document.createElement('br'));

    majorContainer.appendChild(container1);
    majorContainer.appendChild(container2);
    return majorContainer;
}

function sortearBaralho(Jogador) {
    var randomNumber1 = Math.floor(Math.random() * 16) + 1;
    if (number!= 16){
    mudarImagens(randomNumber1);
     }
    else{
    mudarImagens(6);
    }
    disablechance(); 
    chance(randomNumber1, Jogador);
    return randomNumber1;
}

function mudarImagen(resultado1, resultado2, soma){
    document.querySelector(".img1").setAttribute("src",
        "imagens/Chancecard" + resultado1 + ".png");
}

function chance(number, Jogador){

if (number=== 1){
    Jogador.receber(200);
}
if (number === 2){
  dispararMovimento();
}
if (number === 3){
//Chance=8=>17 casas
//Chance=23=>17 casas
//Chance=37=>37 casas
    if(Jogador.posicao===8){
        dispararcartasMovimento(17);
    }
    if (Jogador.posicao===23){
      dispararcartasMovimento(2);
    }
    if (Jogador.posicao===37){
    dispararcartasMovimento(28);
    }
}
if (number === 4){
 //Ir para St.Place.
//Chance=8=>4 casas 
//Chance=23=>3 casas 
//Chance=37=>9 casas 
    if(Jogador.posicao===8){
        dispararcartasMovimento(8);
    }
    if (Jogador.posicao===23){
      dispararcartasMovimento(29);
    }
    if (Jogador.posicao===37){
    dispararcartasMovimento(15);
    }
 //Conta como uma segunda jogada seguida então as regras the propriedade se aplicam.
Jogador.receber(200);
}
if (number === 5){
Jogador.receber(200);
}
if (number === 6 || number === 16){
    //Ir para rodovia mais proxima.
//Chance=8=>8 casas Pennsylvania
//Chance=23=>3 casas B & O
//Chance=37=>9 casas Reading
    if(Jogador.posicao===8){
        dispararcartasMovimento(8);
       if(Celula[16].donos===8){
        for(x=0; x>jogadores.size(); x++){
         for(y=0; y>jogadores[x].carteira.propriedades.size(); y++){
       // if (jogadores[x].carteira.propriedades.[y].nome === Celula[16].nome){
        // Not posible to pay de owner yet.
       // }
         }
         }
       //Ele ja vai pagar o aluguel ao cair na casa então aqui ele so esta pagando de novo para ficar o dobro.
        Jogador.pagar(Celula[16].baserent)
       }
    }
    if (Jogador.posicao===23){
      dispararcartasMovimento(3);
      if(Celula[26].donos===8){
        for(x=0; x>jogadores.size(); x++){
         for(y=0; y>jogadores[x].carteira.propriedades.size(); y++){
       // if (jogadores[x].carteira.propriedades.[y].nome === Celula[26].nome){
        // Not posible to pay de owner yet.
       // }
         }
         }
        Jogador.pagar(Celula[26].baserent)
       }
    }
    if (Jogador.posicao===37){
     if(Celula[6].donos===8){
        for(x=0; x>jogadores.size(); x++){
         for(y=0; y>jogadores[x].carteira.propriedades.size(); y++){
       // if (jogadores[x].carteira.propriedades.[y].nome === Celula[6].nome){
        // Not posible to pay de owner yet.
       // }
         }
         }
        Jogador.pagar(Celula[6].baserent)
       }
    dispararcartasMovimento(9);
    }
 //Conta como uma segunda jogada seguida então as regras the companhia se aplicam.
}
if (number === 7){
//Ir para a companhia mais próxima.
//Chance=8=>5 casas Eletric
//Chance=23=>6 casas Water
//Chance=37=>16 casas Eletric
    if(Jogador.posicao===8){
        dispararcartasMovimento(5);
          if(Celula[13].donos===8){
        for(x=0; x>jogadores.size(); x++){
         for(y=0; y>jogadores[x].carteira.propriedades.size(); y++){
       // if (jogadores[x].propriedade[y].nome === Celula[13].nome){
        // Not posible to pay de owner yet.
       // }
         }
         }
       //Ele ja vai pagar o aluguel ao cair na casa então aqui ele so esta pagando de novo para ficar o dobro.
        Jogador.pagar(rolarDados()*10)
       }
    }
    if (Jogador.posicao===23){
      dispararcartasMovimento(6);
      if(Celula[29].donos===8){
        for(x=0; x>jogadores.size(); x++){
         for(y=0; y>jogadores[x].carteira.propriedades.size(); y++){
       // if (jogadores[x].propriedade[y].nome === Celula[29].nome){
        // Not posible to pay de owner yet.
       // }
         }
         }
       //Ele ja vai pagar o aluguel ao cair na casa então aqui ele so esta pagando de novo para ficar o dobro.
        Jogador.pagar(rolarDados()*10)
       }
    }
    if (Jogador.posicao===37){
    if(Celula[13].donos===8){
        for(x=0; x>jogadores.size(); x++){
         for(y=0; y>jogadores[x].carteira.propriedades.size(); y++){
       // if (jogadores[x].propriedade[y].nome === Celula[13].nome){
        // Not posible to pay de owner yet.
       // }
         }
         }
       //Ele ja vai pagar o aluguel ao cair na casa então aqui ele so esta pagando de novo para ficar o dobro.
        Jogador.pagar(rolarDados()*10)
       }
    dispararcartasMovimento(9);
    }
}
if (number === 8){
dispararcartasMovimento(-3);
}
if (number === 9){
Jogador.receber(50);
}
if (number === 10){
Jogador.receber(150);
}
if (number === 11){
Jogador.pagar(15);
}
if (number === 12){
Jogador.pagar(Jogador.carteira.casas.size()*25);
Jogador.pagar(Jogador.carteira.hoteis.size()*100);
}
if (number === 13){
var jogadores;
listaDeJogadores(jogadores = []);
for(x=0; x>jogadores.size(); x++){
   if (jogadores[x] != Jogador){
   jogadores[x].receber(50);
   Jogador.pagar(50);
   }
   }
    }
if (number === 14){
Jogador.prender();
}
if (number === 15){
//Jail free not implemented.

}
}
export {baralhochance, sortearBaralho};
