import juros from 'readline-sync';

console.log('aplicação de juros:\n\n');

let valor = juros.question('Informe o valor devido: R$\n');

let dias = juros.question('Informe quantos dias se passaram desde o vencimento do boleto: \n');

let TaxaJuros = '';

if(dias === 0){
    TaxaJuros = 0;
}
else if(dias >0 && dias <= 15){
    TaxaJuros = 10;
}
else if(dias > 15){
    TaxaJuros = 15;
}
else{
 console.log('tempo imformado invalido reinicia a aplicação e informe um valor correto')
};


if(TaxaJuros === 0){
    console.log('voce esta em dia')
}
else if(valor>=0){
    let valorjuros = ((TaxaJuros/100)+1)*valor;
console.log('Valor original da divida: R$'+valor+'\n');
console.log('Dias atrasados: '+dias+'\n');
console.log('Taxa de juro: '+TaxaJuros+'%\n');
console.log('Valor total com juros: R$'+valorjuros);
}
else{
        console.log('aplicação apresentam erro devidos a valores informados incorretamente');
};