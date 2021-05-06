class cliente  {
  constructor (nome,endereço){
    this.nome = nome;
    this.endereço = endereço;
  }
  faz (){
    console.log("fazer pedido");
  }
  paga (){
    console.log("pagamento");
  }
}

class pedido {
  constructor (endereço,forma_de_pagamento,sabor,tamanho){
   this.endereço = endereço;
   this.forma_de_pagamento = forma de pagamento;
   this.sabor = sabor;
   this.tamanho = tamanho;
  }
  registra (){
    console.log("anota pedido");
  }
}

class funcionários {
  constructor (nome,número){
    this.nome = nome;
    this.endereço = número;
  }
  produz (){
    console.log("produzir");
  }
}

class pizza {
  constructor (sabores,tempo_de_preparo, tamanho){
    this.sabores = sabores;
    this.tempo_de_preparo = tempo de preparo;
    this.tamanho = tamanho;
  }
  entregue (){
    console.log("é entregue")
  }
}