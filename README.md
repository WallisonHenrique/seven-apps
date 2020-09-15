
# Desafio técnico - Seven Apps

## Como executar o projeto?

Na pasta principal do projeto utilize o comando `npm start`.

## Por que utilize GraphQL?

Eu quis evitar o processamento de grande quantidade de dados no navegador, visto que a API REST fornecida não há documentação que indique parâmetros para socilitar menos dados por vez. Então, tratei os dados da minha maneira utilizando o GraphQl passando a responsabilidade para o servidor.

## Como utilizei GraphQL a partir da API Rest?

Envolvi a API Rest chamando ela uma única vez na primeira solicitação, após isso com os dados carregados, realizei as demais consultas em cima das informações armazenadas em uma constante.

## Por que utilizei o próprio estado do React?

A aplicação tem poucos arquivos e é fácil de gerenciar. Não vi a necessidade de utilizar um gerenciador de estado como o Redux ou a API Context para centralizar o estado em um único local.

## Como melhorei o desempenho?

Deixei a responsabilidade de lidar com a grande quantidade de dados para o GraphQL evitando o processamento no navegado. Depois criei componentes puro com a função `memo`para evitar a renderização desnecessária de componentes. Também utilizei CSS-in-JS com o Styled Components que reduz a necessidades requisições http para baixar estilos. Por fim, sei que poderia ter utilizado a técnica de ***virtualização*** que evita renderização desnecessária, mas optei por utilizar a paginação que permite escolher quantos dados exibir.

## Por que utilizei Styled Components?

- Facilidade de manutenção

- Eliminação de seletores CSS

- Menos solicitações https

- Componentes personalizados

## Por que não fiz testes unitários?

Infelizmente estava sem tempo e não consegui implementá-los.

## Quais os estilos de componentes utilizei?

Basicamente utilizei os componentes de função que são altamente recomendados pela equipe do React. Além de utilizar os Hooks que fornecem aos componentes de função ferramentas para criar aplicações complexas. E o componente puro para melhorar o desempenho evitando renderização desnecessária.

## Gostaria de saber algo?

Se tiver alguma dúvida não hesite em perguntar.

## Gostaria de me dar um feedback?

Se tem algum conselho ou dica ficaria feliz em ouvir.
