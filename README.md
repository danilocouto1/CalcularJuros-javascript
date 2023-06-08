# README - Aplicação Console JavaScript - Calculando juros por dia

Este é o README da aplicação console JavaScript - Calculando juros por dia desenvolvida por Danilo Couto.

## Descrição

A aplicação console JavaScript é um programa simples que calcula o valor da dívida com base em um valor em reais e uma quantidade de dias. O cálculo da dívida é baseado em uma taxa de juros diária fixa, que é aplicada ao valor inicial.

A biblioteca 'readline-sync' é utilizada para receber os valores de entrada do usuário de forma interativa no console.

## Requisitos

Antes de executar a aplicação, certifique-se de ter o Node.js instalado em seu sistema. O Node.js é uma plataforma que permite a execução de aplicativos JavaScript fora de um navegador.

Para instalar o Node.js, visite: [https://nodejs.org](https://nodejs.org)

Além disso, a biblioteca 'readline-sync' deve ser instalada para interagir com o usuário no console. Para instalá-la, execute o seguinte comando no terminal:
npm install readline-sync

## Executando a aplicação

1. Clone este repositório em sua máquina local ou faça o download do código-fonte.
2. Navegue até o diretório raiz da aplicação:

cd <caminho/do/diretorio>


3. Execute o seguinte comando para iniciar a aplicação:

node app.js


4. Siga as instruções fornecidas pela aplicação para fornecer o valor em reais, a quantidade de dias.
5. O resultado, que é o valor da dívida calculado, será impresso no console.

## Exemplo de Uso

Aqui está um exemplo de como a aplicação pode ser usada:

Digite o valor em reais: 1000
Digite a quantidade de dias: 30

*Se maior que 15 dias a taxa é de 10% se menor que 15 será de 5% e se total de dias for zerado recebe uma mensagem especifica.*

Valor original da divida: 1000
Dias atrasados: 30
Taxas de juros: 10%
Valor total com Juros 1100


## Estrutura do Projeto

A estrutura de diretórios do projeto é organizada da seguinte maneira:

├── app.js # Arquivo principal da aplicação
├── package.json # Arquivo de configuração do projeto
└── node_modules/ # Diretório que armazena as dependências do projeto


## Autor

- **Danilo Couto**
- LinkedIn: [https://www.linkedin.com/in/danilocoutopsantos/](https://www.linkedin.com/in/danilocoutopsantos/)