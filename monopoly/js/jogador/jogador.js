import {Carteira} from "./carteira.js";
import {FundosInsuficientesException} from "../exception/FundosInsuficientes.js";

function FalindoException(valor){
    this.mensagem = `Você deve pagar a dívida de $${valor} ou declarar falência.`
    this.name = 'FalindoException'
}

function Jogador(id, nome, carteira, cor){
    this.id = id;
    this.nome = nome;
    this.carteira = carteira;
    this.posicao = 20;
    this.cor = cor;
    this.falido = false;
    this.preso = false;
    this.doubles = 0;
    this.credor = -1;
}

Jogador.prototype.pagar = function(valor) {
    try{
        this.carteira.subtrairFundos(valor);
    } catch (e) {
        if (e instanceof FundosInsuficientesException){
            throw e;
        }
    }
}

Jogador.prototype.pagarAluguel = function(valor) {
    let fundos = this.carteira.forcarSubtracao(valor);
    if (fundos < 0) {
        throw new FalindoException(fundos);
    } 
}

Jogador.prototype.receber = function(valor) {
    this.carteira.adicionarFundos(valor);
}

Jogador.prototype.mover = function (posicoes){
    let resultado = this.posicao + posicoes;
    if(resultado > 40) {
        resultado -= 40;
    }
}

Jogador.prototype.prender = function(){
    this.preso = true;
}

Jogador.prototype.fazerLance = function(valor){
    fundos = this.carteira.fundos();
    if(valor > fundos){
        debito = valor - fundos;
        throw new FundosInsuficientesException(debito);
    } else {
        return valor;
    }
}

Jogador.prototype.definirCredor = function(jogador){
    this.credor = jogador;
}

export {Jogador}