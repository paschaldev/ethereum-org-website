---
title: Introdução ao Desenvolvimento Ethereum
description: "Este é um guia para iniciantes no desenvolvimento do Ethereum. Iremos levá-lo desde a criação de um endpoint de API, para fazer uma solicitação de linha de comando, para escrever seu primeiro script web3! Não é necessário ter experiência em desenvolvimento de blockchain!"
author: "Elan Halpern"
tags:
  - "javascript"
  - "ethers.js"
  - "nódulos"
  - "consultando"
  - "alchemy"
skill: beginner
lang: pt-br
published: 2020-10-30
source: Médio
sourceUrl: https://medium.com/alchemy-api/getting-started-with-ethereum-development-using-alchemy-c3d6a45c567f
---

![Logos do Ethereum e Alchemy](./ethereum-alchemy.png)

Este é um guia de iniciantes para começar com o desenvolvimento na Ethereum. Neste tutorial, usaremos a [Alchemy](https://alchemyapi.io/), a plataforma líder de desenvolvedores de blockchain, capacitando milhões de usuários em 70% dos principais aplicativos de blockchain, incluindo Maker, 0x, MyEtherWallet, Dharma e Kyber. A Alchemy nos dará acesso a um ponto de extremidade de API na cadeia do Ethereum para que possamos ler e escrever transações.

Ajudaremos você a se inscrever na Alchemy para escrever o seu primeiro script web3! Não é necessário ter experiência em desenvolvimento de blockchain!

## 1. Inscreva-se para obter uma conta gratuita da Alchemy {#sign-up-for-a-free-alchemy-account}

Criar uma conta em Alchemy é fácil, [inscreva-se gratuitamente aqui](https://auth.alchemyapi.io/signup).

## 2. Criar um app Alchemy {#create-an-alchemy-app}

Para se comunicar com a chain da Ethereum e usar os produtos da Alchemy, você precisa de uma chave de API para autenticar as suas solicitações.

Você pode [criar chaves de API a partir do painel de controle](http://dashboard.alchemyapi.io/). Para fazer uma nova chave, navegue até "Create app" como mostrado abaixo:

Um agradecimento especial ao [_ShapeShift_](https://shapeshift.com/) _por nos permitir mostrar seu painel!_

![Painel de controle Alchemy](./alchemy-dashboard.png)

Preencha os detalhes em "Create app" para obter sua nova chave. Aqui você também pode ver os apps criados anteriormente, bem como os criados pela sua equipe. Pegue chaves existentes clicando em "View Key" para qualquer app.

![Criar app com um Alchemy screenshot](./create-app.png)

Você também pode extrair chaves de API existentes, passando o mouse sobre “Aplicativos” e selecionando uma. Você pode “Visualizar chave” aqui, bem como “Editar aplicativo” na lista de permissões de domínios específicos, ver várias ferramentas de desenvolvedor e visualizar análises.

![Gif mostrando a um usuário como requisitar chaves API](./pull-api-keys.gif)

## 3. Fazer uma requisição via Command line {#make-a-request-from-the-command-line}

Interagir com a blockchain Ethereum através de Alchemy, usando JSON-RPC e curl.

Para solicitações manuais, recomendamos interagir com `JSON-RPC` via solicitações de `POST`. Simplesmente passe no header `Content-Type: application/json` e sua query como corpo do `POST` com os seguintes campos:

- `jsonrpc`: Atualmente, somente a versão `2.0` do JSON-RPC é suportada.
- `method`: O método ETH API. [Veja a referência da API.](https://docs.alchemyapi.io/documentation/alchemy-api-reference/json-rpc)
- `params`: Uma lista de parâmetros para passar ao método.
- `id`: A ID da sua solicitação. Será retornado pela resposta para que você possa manter o controle sobre qual solicitação uma resposta pertence.

Aqui está um exemplo que você pode executar a partir da linha de comando, para recuperar o preço atual do gás:

```bash
curl https://eth-mainnet.alchemyapi.io/v2/demo \
-X POST \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0","method":"eth_gasPrice","params":[],"id":73}'
```

_**NOTA:** Substitua [https://eth-mainnet.alchemyapi.io/v2/demo](https://eth-mainnet.alchemyapi.io/jsonrpc/demo) por sua própria chave de API `https://eth-mainnet.alchemyapi.io/v2/**sua-chave-api`._

**Resultados:**

```json
{ "id": 73,"jsonrpc": "2.0","result": "0x09184e72a000" // 10000000000000 }
```

## 4. Configure seu Cliente Web3 {#set-up-your-web3-client}

**Se você tem um cliente existente,** mude o URL do seu provedor de nó atual para uma URL de Alchemy com a sua chave API: `“https://eth-mainnet.alchemyapi.io/v2/your-api-key"`

**_NOTA:_** Os scripts abaixo precisam ser executados em um **contexto de nó** ou **salvo em um arquivo**. Não é executado na linha de comando. Se você ainda não instalou o Node ou o NPM, confira este rápido [guia de configuração para macs](https://app.gitbook.com/@alchemyapi/s/alchemy/guides/alchemy-for-macs).

Há inúmeras [bibliotecas Web3](https://docs.alchemyapi.io/guides/getting-started#other-web3-libraries) que você pode integrar com Alchemy. No entanto, nós recomendamos usar [Alchemy Web3](https://docs.alchemy.com/reference/api-overview), um drop-in substituto para web3.js, construída e configurada para trabalhar sem interrupções com Alchemy. Isto fornece múltiplas vantagens, tais como novas tentativas automáticas e um suporte robusto a WebSocket.

Para instalar AlchemyWeb3.js, **navegue até o diretório do seu projeto** e execute:

**Com o Yarn:**

```
yarn add @alch/alchemy-web3
```

**Com NPM:**

```
yarn add @alch/alchemy-web3
```

Para interagir com a infraestrutura dos nós de Alchemy, execute em NodeJS ou adicione isso a um arquivo JavaScript:

```js
const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(
  "https://eth-mainnet.alchemyapi.io/v2/your-api-key"
)
```

## 5. Escreva seu primeiro script Web3! {#write-your-first-web3-script}

Agora vamos colocar a mão na massa com um pouco de programação na Web3. Vamos escrever um script simples que exibe o número de bloco mais recente da Rede principal do Ethereum.

**1. Se você ainda não fez, no seu terminal, crie um novo diretório e cd do projeto dentro dele:**

```
mkdir web3-example
cd web3-example
```

**2. Instale a dependência do Alchemy web3 (ou qualquer web3) em seu projeto, se você ainda não tiver:**

```
npm install @alch/alchemy-web3
```

**3. Crie um arquivo chamado `index.js` e adicione o seguinte conteúdo:**

> Por fim, você deve substituir `demo` pela sua chave de API HTTP do Alchemy.

```js
async function main() {
  const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
  const web3 = createAlchemyWeb3("https://eth-   mainnet.alchemyapi.io/v2/demo")
  const blockNumber = await web3.eth.getBlockNumber()
  console.log("The latest block number is " + blockNumber)
}
main()
```

Não está familiarizado com programação assíncrona? Confira este [post no Medium](https://medium.com/better-programming/understanding-async-await-in-javascript-1d81bb079b2c).

**4. Executá-lo em seu terminal usando o nó**

```
node index.js
```

**5. Agora você deve ver a saída do último número de bloco no seu console!**

```
O último número de bloco é 11043912
```

**Eba! Parabéns! Você acabou de escrever o seu primeiro script web3 usando Alchemy 🎉**

Não tem certeza do que fazer a seguir? Experimente implementar seu primeiro contrato inteligente e colocar a mão na massa com um pouco de programação Solidity em nosso [Guia de contratos inteligentes “Olá, mundo”](https://docs.alchemyapi.io/tutorials/hello-world-smart-contract), ou teste seus conhecimentos sobre painel de controle com o [Aplicativo de demonstração do painel](https://docs.alchemyapi.io/tutorials/demo-app)!

_[Cadastre-se com o Alchemy](https://auth.alchemyapi.io/signup) gratuitamente, confira [a nossa documentação](https://docs.alchemyapi.io/), e para receber as últimas notícias, siga-nos no [Twitter](https://twitter.com/AlchemyPlatform)_.
