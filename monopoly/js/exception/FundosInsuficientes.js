function FundosInsuficientesException(valor){
    this.mensagem = `Você precisa de $${valor},00 para poder realizar a compra.`;
    this.name = 'FundosInsuficientesException';
}

export {FundosInsuficientesException}