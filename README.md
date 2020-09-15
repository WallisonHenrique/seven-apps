
# Desafio técnico - Seven Apps

## Como executar o projeto?

Na pasta principal do projeto utilize o comando `npm start`.

## Por que utilize GraphQL?

Queria reduzir o processamento de dados no navegador e passei a responsabilidade para o servidor utilizando GraphQL.

## Como utilizei GraphQL a partir da API Rest?

Envolvi a API Rest apenas chamando ela uma única vez na primeira solicitação, após os dados carregados as consultas graphql trabalha em cima deles.

## Por que utilizei o próprio estado do React?

A aplicação é muito pequena, fácil de gerenciar. Não vi a necessidade de utilizar um gerenciador de estado como o Redux ou o Context API.

## Como tentei melhorar o desempenho?

Primeiramente passei a responsabilidade de criar paginação para o GraphQL evitando processamento no client. Depois utilizei a `função memo` do React que cria componentes puros para reduzir a renderização desnecessária. 

Utilizei CSS-in-JS com o styled components que reduz a necessidades requisições http para baixar estilos.

Poderia ter utilizado também a técnica de *virtualização*, mas optei por criar a paginação.

## Por que utilizei Styled Components?

- Facilidade de manutenção

- Eliminação de seletores CSS

- Menos solicitações https

- Componentes personalizados

## Por que não fiz testes unitários?

Infelizmente estava sem tempo e não consegui implementá-los.

## Quais os estilos de componentes utilizei?

Basicamente utilizei os componentes de função que são altamente recomendados pela equipe do React. Além de utilizar os Hooks que fornecem aos componentes de função ferramentas para criar aplicações complexas. E o componente puro para melhorar o desempenho.

## Gostaria de saber algo?

Se tiver alguma dúvida não hesite em perguntar.

## Gostaria de me dar um feedback?

Se tem algum conselho ou dica ficaria feliz em ouvir.