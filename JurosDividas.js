import entrada from 'readline-sync';

//Entrada de dados
let valor = entrada.question("Informe o valor devido: ");
let dias_passados = entrada.question("Informe quantos dias se passaram desde o vencimento do boleto: ");
let taxa_juros;
let valor_juros;

//Processamento de dados
if (valor > 0) {
    if (dias_passados <= 15 && dias_passados > 0) {
        taxa_juros = 5;

        valor_juros = Number(valor) + ((Number(valor) / 100) * taxa_juros);

        //Saida de dados
        console.log("Valor original da divida: "+valor)
        console.log("Dias atrasados: "+dias_passados)
        console.log("Taxas de juros: "+taxa_juros+"%")
        console.log("Valor total com Juros "+valor_juros)
    } else if (dias_passados > 15) {
        taxa_juros = 10;

        valor_juros = Number(valor) + ((Number(valor) / 100) * taxa_juros);


        //Saida de dados
        console.log("Valor original da divida: "+valor)
        console.log("Dias atrasados: "+dias_passados)
        console.log("Taxas de juros: "+taxa_juros+"%")
        console.log("Valor total com Juros "+valor_juros)
    } {
        console.log("Você esta em dia!")
    }
} else {
    console.log("O valo da divida deve ser maior que zero")
}