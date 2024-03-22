// import funcao
import escolha from 'readline-sync';

// variaveis globais
let conjunto = [
    {ano:2010, salario:510.00, ipca:5.91},
    {ano:2011, salario:545.00, ipca:6.50},
    {ano:2012, salario:622.00, ipca:5.84},
    {ano:2013, salario:678.00, ipca:5.91},
    {ano:2014, salario:724.00, ipca:6.41},
    {ano:2015, salario:788.00, ipca:10.67},
    {ano:2016, salario:880.00, ipca:6.29},
    {ano:2017, salario:937.00, ipca:2.95},
    {ano:2018, salario:954.00, ipca:3.75},
    {ano:2019, salario:998.00, ipca:4.31},
    {ano:2020, salario:1045.00, ipca:4.52}
];

let executar = 1;


//ENTRADA DE DADOS

while(executar == 1){
console.log("1 - Listar os salários minimos de 2010 à 2020");
console.log("2 - Listar o índice IPCA de 2010 à 2020");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA");
console.log("4 - Encerrar execução");
console.log("\n");

let escolha_atual = escolha.question("digite à  opção escolhida: ");
console.log("\n");

//PROCESSAMENTO DE DADOS

    switch(escolha_atual){
        case '1':
            for(let atual of conjunto){
                let anos = atual.ano;
                let salarios = atual.salario;
                salarios = salarios.toFixed(2);
                console.log("Ano: ".padEnd(20, ".")+anos);
                console.log("Salário mínimo: ".padEnd(20, ".")+"R$"+salarios.replace(".",","));
                console.log("\n");
               
            }break;
            case '2':
                for(let atual of conjunto){
                    let anos = atual.ano;
                    let ipca = atual.ipca;
                    console.log("Ano: ".padEnd(20, ".")+anos);
                    console.log("Inflação IPCA: ".padEnd(20, ".")+ipca+"%");
                    console.log("\n");
                }break;
                case '3':
                    for(let atual of conjunto){
                        let anos = atual.ano;
                        let ipca = atual.ipca;
                        let salarios = atual.salario;
                        salarios = salarios.toFixed(2);
                        let posicao = conjunto.indexOf(atual);
            
                        if(posicao === 0){
                            console.log("Ano: ".padEnd(20, ".")+anos);
                            console.log("Salário mínimo: ".padEnd(20, ".")+"R$"+salarios.replace(".",","));
                            console.log("Crescimento Salarial: ".padEnd(20, ".")+"-");
                            console.log("Inflação IPCA: ".padEnd(20, ".")+ipca+"%");
                            console.log("\n");
                        } else {
                            let salarioAnterior = conjunto[posicao - 1].salario;
                            let diferenca = salarios - salarioAnterior;
                            let crescimentoPercentual = (diferenca / salarioAnterior) * 100;
            
                            console.log("Ano: ".padEnd(20, ".")+anos);
                            console.log("Salário mínimo: ".padEnd(20, ".")+"R$"+salarios.replace(".",","));
                            console.log("Crescimento Salarial: ".padEnd(20, ".")+crescimentoPercentual.toFixed(2)+"%");
                            console.log("Inflação IPCA: ".padEnd(20, ".")+ipca+"%");
                            console.log("\n");
                        }
                    }
                    break;
                default:
                    console.log("Opção inválida.");
                    break;
    }
    let decisao = escolha.question("deseja executar novamente? se sim digite 1 se não digite qualquer outra tecla.\n\n")
    
        executar = decisao;
};