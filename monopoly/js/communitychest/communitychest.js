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
import { disablecommunitychest } from "../compositor.js";

function baralhocommunitychest(){
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
    firstDice.innerHTML = '<img class="dice-img img2" src="imagens/CommunityChest.png">'
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

function sortearCartas(Jogador) {
    var randomNumber1 = Math.floor(Math.random() * 16) + 1;
    if (number!= 16){
    mudarImagens(randomNumber1);
     }
    else{
    mudarImagens(6);
    }
    disablecommunitychest();
    communitychest(randomNumber1, Jogador);
    return randomNumber1;
}

function mudarImagen(resultado1, resultado2, soma){
    document.querySelector(".img1").setAttribute("src",
        "imagens/CommunityChest" + resultado1 + ".png");
}

function communitychest(number, Jogador){

if (number=== 1){
    Jogador.receber(200);
}
if (number === 2){
  Jogador.receber(100);
}
if (number === 3){
Jogador.receber(10);
}
if (number === 4){
Jogador.receber(200);
}
if (number === 5){
Jogador.receber(45);
}
if (number === 6){
 Jogador.receber(20);
    }
if (number === 7){
Jogador.receber(25);
}
if (number === 8){
Jogador.receber(100);
}
if (number === 9){
Jogador.receber(100);
}
if (number === 10){
var jogadores[];
listaDeJogadores(jogadores = []);
for(x=0; x>jogadores.size(); x++){
   if (jogadores[x] != Jogador){
   jogadores[x].receber(50);
   Jogador.pagar(50);
   }
   }
}
if (number === 11){
Jogador.pagar(50);
}
if (number === 12){
Jogador.pagar(100);
}
if (number === 13){
Jogador.pagar(150);
    }
if (number === 14){
Jogador.pagar(Jogador.carteira.casas.size()*40);
Jogador.pagar(Jogador.carteira.hoteis.size()*115);
}
if (number === 15){
Jogador.prender();

}
if (number === 16){
// Jail free not implemented yet.

}
}
export {baralhochance, sortearBaralho};
