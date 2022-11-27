import {FundosInsuficientesException} from "../exception/FundosInsuficientes.js";

function Carteira(){
    this.fundos = 1500;
    this.propriedades = [];
    this.casas = [];
    this.hoteis = [];
}

Carteira.prototype.adicionarFundos = function(fundos){
    this.fundos += fundos;
}

Carteira.prototype.subtrairFundos = function(fundos){
    let resultante = this.fundos - fundos;
    if (resultante < 0) {
        throw new FundosInsuficientesException();
    } else {
        this.fundos = resultante;
    }
}

Carteira.prototype.forcarSubtracao = function(fundos){
    this.fundos -= fundos;
    return fundos;
}

Carteira.prototype.fundos = function(){
    return this.fundos;
}

Carteira.adicionarPropriedade = function(propriedade){
    this.propriedades.push(propriedade)
}

Carteira.adicionarCasa = function(casa){
    this.casas.push(casa)
}

Carteira.adicionarHotel = function(hotel){
    this.hoteis.push(hotel)
}

export {Carteira};