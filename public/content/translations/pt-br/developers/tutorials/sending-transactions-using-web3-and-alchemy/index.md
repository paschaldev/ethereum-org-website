---
title: Enviando transações usando Web3
description: "Este é um guia amigável para iniciantes enviarem transações Ethereum usando web3. Existem três etapas principais para enviar uma transação para a blockchain Ethereum: criar, assinar e transmitir. Analisaremos todas as três."
author: "Elan Halpern"
tags:
  - "transações"
  - "web3.js"
  - "alchemy"
skill: intermediate
lang: pt-br
published: 2020-11-04
source: Documentação do Alchemy
sourceUrl: https://docs.alchemy.com/alchemy/tutorials/sending-txs
---

Este é um guia amigável para iniciantes enviarem transações Ethereum usando web3. Existem três etapas principais para enviar uma transação para a blockchain Ethereum: criar, assinar e transmitir. Analisaremos todas as três, esperamos responder a quaisquer perguntas que você possa ter! Neste tutorial, estaremos usando [Alchemy](https://www.alchemy.com/) para enviar as nossas transações para a cadeia Ethereum. Você pode [criar uma conta Alchemy grátis aqui](https://auth.alchemyapi.io/signup).

**NOTA:** Este guia é para assinar suas transações no _back-end_ do seu aplicativo. Se você quer integrar a assinatura de suas transações no front-end, verifique a integração [Web3 com um provedor de navegador](https://docs.alchemy.com/reference/api-overview#with-a-browser-provider).

## O básico {#the-basics}

Como a maioria dos desenvolvedores blockchain quando iniciam, você pode ter feito algumas pesquisas sobre como enviar uma transação (algo que deve ser bem simples) e encontrado com uma infinidade de guias, cada um deles diz coisas diferentes e te deixa um pouco sobrecarregado e confuso. Se você está naquele barco, não se preocupe, todos estivemos em algum momento! Então, antes de começarmos, vamos ver algumas coisas certas:

### 1\. Alchemy não armazena suas chaves privadas {#alchemy-does-not-store-your-private-keys}

- Isso significa que Alchemy não pode assinar e enviar transações em seu nome. A razão para isso é a questão da segurança. Alchemy nunca vai te pedir para compartilhar sua chave privada, e você nunca deve compartilhar sua chave privada com um nó hospedado (ou alguém para isso).
- Você pode ler a partir da blockchain usando a API principal do Alchemy, mas para gravar nela, você precisará usar outra coisa para assinar suas transações antes de enviá-las por meio do Alchemy (assim como para qualquer outro [serviço de nó](/developers/docs/nodes-and-clients/nodes-as-a-service/)).

### 2\. O que é um “assinante”? {#what-is-a-signer}

- Assinantes assinarão transações para você usando sua chave privada. Neste tutorial iremos utilizar [Alchemy web3](https://docs.alchemyapi.io/alchemy/documentation/alchemy-web3) para assinar a nossa transação, mas também poderia utilizar qualquer outra biblioteca web3.
- No front-end, um bom exemplo de assinante seria o [MetaMask](https://metamask.io/), que assinará e enviará transações em seu nome.

### 3\. Por que preciso assinar minhas transações? {#why-do-i-need-to-sign-my-transactions}

- Cada usuário que desejar enviar uma transação na rede Ethereum deve assinar a transação (usando sua chave privada), a fim de validar a autenticidade da origem da transação.
- É super importante proteger esta chave privada, uma vez que o acesso a ela concede controle total sobre a sua conta Ethereum, permitindo que você (ou qualquer um com acesso) realize transações em seu nome.

### 4\. Como eu protejo minha chave privada? {#how-do-i-protect-my-private-key}

- Há muitas maneiras de proteger a sua chave privada e usá-la para enviar transações. Neste tutorial, usaremos um arquivo `.env`. No entanto, você também pode usar um provedor separado que armazena chaves privadas, usa um arquivo de keystore ou outras opções.

### 5\. Qual é a diferença entre `eth_sendTransaction` e `eth_sendRawTransaction`? {#difference-between-send-and-send-raw}

`eth_sendTransaction` e `eth_sendRawTransaction` são ambas funções da API da Ethereum que transmitem uma transação para a rede Ethereum, então ela será adicionada a um bloco futuro. Eles diferem na forma como lidam com a assinatura das transações.

- [`eth_sendTransaction`](https://docs.web3js.org/api/web3-eth/function/sendTransaction) é usado para enviar _transações_ não assinadas, o que significa que o nó que você está enviando deve gerenciar a sua chave privada para que possa assinar a transação antes de transmiti-la para a cadeia. Como o Alchemy não possui as chaves privadas do usuário, eles não oferecem suporte a esse método.
- [`eth_sendRawTransaction`](https://docs.alchemyapi.io/documentation/alchemy-api-reference/json-rpc#eth_sendrawtransaction) é usado para transmitir transações que já foram assinadas. Isso significa que você deve primeiro usar [`signTransaction(tx, private_key)`](https://docs.web3js.org/api/web3-eth-accounts/function/signTransaction), e então transmitir o resultado para `eth_sendRawTransaction`.

Ao usar o web3, `eth_sendRawTransaction` é acessado ao chamar a função [web3.eth.sendSignedTransaction](https://docs.web3js.org/api/web3-eth/function/sendSignedTransaction).

Isso é o que nós usaremos neste tutorial.

### 6\. Qual é a biblioteca de web3? {#what-is-the-web3-library}

- Web3.js é uma biblioteca wrapper em torno das chamadas JSON-RPC padrão que é bastante comum de usar no desenvolvimento de Ethereum.
- Há várias bibliotecas Web3 para diferentes tipos de linguagem. Neste tutorial, estaremos usando [Alchemy Web3](https://docs.alchemy.com/reference/api-overview) que está escrito em JavaScript. Você pode verificar outras opções [aqui](https://docs.alchemyapi.io/guides/getting-started#other-web3-libraries) como [ethers.js](https://docs.ethers.org/v5/).

Ok, agora que temos esclarecemos esses pontos, passemos para o tutorial. Sinta-se à vontade para fazer perguntas a qualquer momento no [discord](https://discord.gg/gWuC7zB) do Alchemy!

### 7\. Como enviar transações seguras, otimizadas de gás e privadas? {how-to-send-secure-gas-optimized-and-private-transactions}

- [Alchemy tem um conjunto de APIs para Transações](https://docs.alchemy.com/reference/transact-api-quickstart). Você pode usá-los para reforçar transações, simular transações antes que elas aconteçam, enviar transações privadas e enviar transações otimizadas de gás
- Você também pode usar a [API de notificação](https://docs.alchemy.com/docs/alchemy-notify) para ser alertado quando sua transação for retirada do mempool e adicionada à cadeia

**NOTA:** Este guia requer uma conta Alchemy, um endereço Ethereum ou carteira MetaMask, NodeJs e npm instalados. Se não, siga estes passos:

1.  [Crie uma conta gratuita em Alchemy](https://auth.alchemyapi.io/signup)
2.  [Crie uma conta MetaMask](https://metamask.io/) (ou obtenha um endereço Ethereum)
3.  [Siga estes passos para instalar o NodeJs e NPM](https://docs.alchemy.com/alchemy/guides/alchemy-for-macs)

## Passos para enviar sua transação {#steps-to-sending-your-transaction}

### 1\. Crie um aplicativo Alchemy na rede de testes Sepolia {#create-an-alchemy-app-on-the-sepolia-testnet}

Navegue até o seu [Painel da Alchemy](https://dashboard.alchemyapi.io/) e crie um novo aplicativo, escolhendo Sepolia (ou qualquer outra rede de teste) para sua rede.

### 2\. Solicite ETH do faucet Sepolia {#request-eth-from-sepolia-faucet}

Siga as instruções na [torneira Sepolia da Alchemy](https://www.sepoliafaucet.com/) para receber ETH. Certifique-se de incluir seu endereço do Ethereum **Sepolia** (da MetaMask) e não outra rede. Após seguir as instruções, verifique novamente se você recebeu o ETH em sua carteira.

### 3\. Crie um novo diretório do projeto e insira `cd` {#create-a-new-project-direction}

Crie um novo diretório de projetos a partir da linha de comando (terminal para macs) e navegue até ele:

```
mkdir sendtx-example
cd sendtx-example
```

### 4\. Instale o Alchemy Web3 (ou qualquer biblioteca web3) {#install-alchemy-web3}

Execute o seguinte comando em seu diretório do projeto para instalar [Alchemy Web3](https://docs.alchemy.com/reference/api-overview):

Note que, se você quiser usar a biblioteca ethers.js, [siga as instruções aqui](https://docs.alchemy.com/docs/how-to-send-transactions-on-ethereum).

```
yarn add @alch/alchemy-web3
```

### 5\. Instale o dotenv {#install-dotenv}

Usaremos um arquivo `.env` para armazenar com segurança nossa chave de API e a chave privada.

```
npm install dotenv --save
```

### 6\. Crie o arquivo `.env` {#create-the-dotenv-file}

Crie um arquivo `.env` no diretório de seu projeto e adicione o seguinte (substituindo “`your-api-url`" e "`your-private-key` ")

- Para encontrar o URL da API de Alchemy, navegue até a página de detalhes do aplicativo que você acabou de criar no seu painel, clique em "Ver Chave" no canto superior direito e pegue a URL HTTP.
- Para encontrar sua chave privada usando MetaMask, confira este [guia](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key).

```
API_URL = "your-api-url"
PRIVATE_KEY = "your-private-key"
```

<InfoBanner isWarning>
No faça commit do <code>.env</code>! Por favor, tenha certeza de nunca compartilhar ou expor seu arquivo <code>.env</code> com ninguém, pois estará comprometendo suas partes secretas ao fazê-lo. Se estiver usando um controle de versão, adicione seu <code>.env</code> ao arquivo <a href="https://git-scm.com/docs/gitignore">gitignore</a>
</InfoBanner>

### 7\. Crie um arquivo `iframe.ts` {#create-sendtx-js}

Ótimo, agora que temos nossos dados confidenciais protegidos em um arquivo `.env`, vamos começar a codificar. Para nosso exemplo de envio de transação, enviaremos ETH de volta para o faucet Sepolia.

Criar um `sendTx. s` arquivo, que é onde vamos configurar e enviar nossa transação de exemplo, e adicionar as seguintes linhas de código a ele:

```
async function main() {
    require('dotenv').config();
    const { API_URL, PRIVATE_KEY } = process.env;
    const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
    const web3 = createAlchemyWeb3(API_URL);
    const myAddress = '0x610Ae88399fc1687FA7530Aac28eC2539c7d6d63' //TODO: replace this address with your own public address

    const nonce = await web3.eth.getTransactionCount(myAddress, 'latest'); // nonce starts counting from 0

    const transaction = {
     'to': '0x31B98D14007bDEe637298086988A0bBd31184523', // faucet address to return eth
     'value': 1000000000000000000, // 1 ETH
     'gas': 30000,
     'nonce': nonce,
     // optional data field to send message or execute smart contract
    };

    const signedTx = await web3.eth.accounts.signTransaction(transaction, PRIVATE_KEY);

    web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(error, hash) {
    if (!error) {
      console.log("🎉 The hash of your transaction is: ", hash, "\n Check Alchemy's Mempool to view the status of your transaction!");
    } else {
      console.log("❗Something went wrong while submitting your transaction:", error)
    }
   });
}

main();
```

Certifique-se de substituir o endereço na **linha 6** pelo seu próprio endereço público.

Agora, antes de nós começarmos a executar este código, vamos falar sobre alguns dos componentes aqui.

- `nonce` : A especificação nonce é usada para acompanhar o número de transações enviadas a partir do seu endereço. Precisamos disso para fins de segurança e para evitar [replay de ataques](https://docs.alchemyapi.io/resources/blockchain-glossary#account-nonce). Para obter o número de transações enviadas a partir do seu endereço, usamos [getTransactionCount](https://docs.alchemyapi.io/documentation/alchemy-api-reference/json-rpc#eth_gettransactioncount).
- `transação`: O objeto da transação tem alguns aspectos que precisamos especificar
  - `para`: Este é o endereço para o qual queremos enviar ETH. Nesse caso, reenviamos ETH para o [faucet Sepolia](https://sepoliafaucet.com/) no qual fizemos a solicitação inicialmente.
  - `valor`: Este é o valor que desejamos enviar, especificado em Wei onde 10^18 Wei = 1 ETH
  - `gás`: Há muitas maneiras de determinar a quantidade de gás certa a ser incluída na sua transação. Alchemy até tem um [webhook de preço de gás](https://docs.alchemyapi.io/guides/alchemy-notify#address-activity-1) para notificá-lo quando o preço do gás cai dentro de um determinado limiar. Para transações na Mainnet, é uma boa prática verificar um estimador de gás como [ETH Gas Station](https://ethgasstation.info/), para determinar a quantidade certa de gás a incluir. 21000 é a quantidade mínima de gás que uma operação na Ethereum usará. Portanto, para garantir que nossa transação será executada, colocamos 30000 aqui.
  - `nonce`: ver acima nonce definição. Nonce começa a contagem de zero.
  - Dados [OPTATIVOS]: Usados para enviar informações adicionais com a sua transferência, ou para chamar um contrato inteligente, não necessário para transferências de saldo, confira a nota abaixo.
- `signedTx`: Para assinar nosso objeto de transação, usaremos o método `signTransaction` com nosso `PRIVATE_KEY`
- `sendSignedTransação`: Uma vez assinada, teremos uma transação assinada. podemos enviá-lo para ser incluído em um bloco subsequente usando `sendSignedTransaction`

**Uma observação sobre os dados** Existem dois tipos principais de transações que podem ser enviadas ao Ethereum.

- Transferência de saldo: Envie ETH de um endereço para outro. Não é necessário campo de dados, no entanto, se você quiser enviar informações adicionais junto com sua transação, você pode incluir essas informações no formato HEX neste campo.
  - Por exemplo, digamos que nós queríamos escrever o hash de um documento IPFS para a cadeia Ethereum, para dar a ele um timestamp (registro de data e hora) imutável. Nosso campo de dados deveria se parecer com data: `web3.utils.toHex('IPFS hash')`. E agora, qualquer pessoa pode consultar a cadeia e ver quando esse documento foi adicionado.
- Transação de contrato inteligente: Execute algum código de contrato inteligente na cadeia. Nesse caso, o campo de dados deveria conter a função inteligente, que você deseja executar, juntamente com quaisquer parâmetros.
  - Para um exemplo prático, confira a Etapa 8 neste [Tutorial Olá Mundo](https://docs.alchemyapi.io/alchemy/tutorials/hello-world-smart-contract#step-8-create-the-transaction).

### 8\. Execute o código usando `node sendTx.js` {#run-the-code-using-node-sendtx-js}

Navegue de volta ao seu terminal ou linha de comando e execute:

```
node sendTx.js
```

### 9\. Consultar suas transações no Mempool {#see-your-transaction-in-the-mempool}

Abra a página de [Mempool](https://dashboard.alchemyapi.io/mempool) no painel de controle de Alchemy e filtre pelo app que você criou para encontrar sua transação. É aqui que podemos assistir nossa transição de um estado pendente para um estado minerado (se bem-sucedida) ou estado descartado em caso de falha. Certifique-se de mantê-lo em "Todos" para capturar as transações "mineradas", "pendentes", e "descartadas". Também é possível procurar sua transação procurando por transações enviadas para o endereço `0x31b98d14007bdee637298086988a0bbd31184523`.

Para ver os detalhes da sua transação assim que encontrá-la, selecione o hash tx, que deve levar você a uma visão que se parece com isso:

![Captura do observador Mempool](./mempool.png)

A partir daí, você pode ver sua transação no Etherscan clicando no ícone circulado em vermelho!

**Eba! Você acabou de enviar a sua primeira transação Ethereum usando Alchemy 🎉**

_Para enviar comentários e sugestões sobre este guia, entre em contato com Elan no [Discord da Alchemy](https://discord.gg/A39JVCM)!_

_Publicado originalmente em [https://docs.alchemyapi.io/tutorials/sending-transactions-using-web3-and-alchemy](https://docs.alchemyapi.io/tutorials/sending-transactions-using-web3-and-alchemy)_
