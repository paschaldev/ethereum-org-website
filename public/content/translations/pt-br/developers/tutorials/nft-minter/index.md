---
title: Tutorial de criação de uma NFT
description: Neste tutorial, você irá construir um minter NFT e, também, aprender a como criar um full stack dapp conectando seu contrato inteligente a um React frontend usando MetaMask e ferramentas Web3.
author: "smudgil"
tags:
  - "solidity"
  - "NFT"
  - "alchemy"
  - "contratos inteligentes"
  - "front-end"
  - "Pinata"
skill: intermediate
lang: pt-br
published: 2021-10-06
---

Um dos maiores desafios para desenvolvedores vindos de um background Web2 é descobrir como conectar seu contrato inteligente a um projeto frontend e interagir com ele.

Ao criar um minter NFT — uma simples UI onde você pode inserir um link para seu ativo digital, um título e uma descrição — você aprenderá a:

- Conectar ao MetaMask através do seu projeto frontend
- Chamar métodos de contrato inteligentes no seu frontend
- Assine transações usando MetaMask

Neste tutorial, usaremos o [React](https://reactjs.org/) como nossa estrutura de frontend. Como este tutorial está focado principalmente no desenvolvimento da Web3, nós não passaremos muito tempo detalhando os fundamentos do React. Em vez disso, nós focaremos em trazer funcionalidade para o nosso projeto.

Como pré-requisito, você deve ter uma compreensão mínima do React – saber como funcionam componentes, props, useState/useEffect e chamadas de funções básicas. Se você nunca ouviu falar de nenhum desses termos antes, você pode querer conferir este [Intro to React tutorial](https://reactjs.org/tutorial/tutorial.html). Para os que apreciam mais visualidade, é altamente recomendável esta excelente série de vídeos [Full Modern React Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-TvwTutorialfod2gaISzfRiP9d) por Net Ninja.

E se você ainda não fez, você definitivamente precisará criar uma conta Alchemy para concluir este tutorial, bem como construir qualquer coisa no blockchain. Inscreva-se para uma conta gratuita [aqui](https://alchemy.com/).

Sem mais delongas, vamos começar!

## Criando NFTs 101 {#making-nfts-101}

Antes de começarmos a olhar para qualquer código, é importante entender como funciona fazer uma NFT. Envolve duas etapas:

### Publicar um contrato inteligente da NFT no blockchain Ethereum {#publish-nft}

A maior diferença entre os dois padrões de contrato inteligente NFT é que o ERC-1155 é um padrão multi-token e inclui a funcionalidade de lote, enquanto o ERC-721 é um padrão de token único, portanto, suporta apenas a transferência de um token por vez.

### Chamar a função mint {#minting-function}

Normalmente, esta função mint requer que você passe duas variáveis como parâmetros, primeiro o destinatário `recipient`, que especifica o endereço que receberá a sua NFT recém-mintada, e segundo o `tokenURI` da NFT, uma string que indica a um documento JSON que descreve os metadados da NFT.

Os metadados de uma NFT são o que realmente a torna realidade, permitindo que tenha propriedades configuráveis, como um nome, descrição, imagem (ou diferentes ativos digitais), e outros atributos. Aqui está [um exemplo de um tokenURI](https://gateway.pinata.cloud/ipfs/QmSvBcb4tjdFpajGJhbFAWeK3JAxCdNQLQtr6ZdiSi42V2), que contém os metadados de uma NFT.

Neste tutorial, vamos nos concentrar na parte 2, chamando a função mint de contrato inteligente de uma NFT existente usando nossa interface do React.

[Aqui está um link](https://ropsten.etherscan.io/address/0x4C4a07F737Bf57F6632B6CAB089B78f62385aCaE) para o contrato inteligente NFT ERC-721 que vamos chamar neste tutorial. Se você gostaria de saber como o fizemos, é altamente recomendável que você veja nosso outro tutorial, ["Como criar uma NFT"](https://docs.alchemyapi.io/alchemy/tutorials/how-to-create-an-nft).

Legal, agora que entendemos como fazer uma NFT funcionar, vamos clonar nossos arquivos iniciais!

## Clonar os arquivos iniciais {#clone-the-starter-files}

Primeiro, vá para o [repositório GitHub do nft-minter-tutorial](https://github.com/alchemyplatform/nft-minter-tutorial) para obter os arquivos iniciais para este projeto. Clone este repositório para o seu ambiente local.=

Quando você abrir este repositório clonado `nft-minter-tutorial`, irá notar que ele contém duas pastas: `minter-starter-files` e `nft-minter`.

- `minter-starter-files` contém os arquivos iniciais (essencialmente a interface do React) para este projeto. Neste tutorial, **trabalharemos nesse diretório**, enquanto você aprende a dar vida a sua interface do usuário, conectando-a à sua carteira Ethereum e a um contrato inteligente de NFT.
- `nft-minter` contém o tutorial completo e serve para você como uma **referência** **se você ficar preso.**

Em seguida, abra sua cópia de `minter-starter-files` no seu editor de código e navegue para a pasta `src`.

Todo o código que vamos escrever será exibido na pasta `src`. Vamos editar o componente `Minter.js` e escrever arquivos javascript adicionais para dar funcionalidades Web3 ao nosso projeto.

## Passo 2: Confira nossos arquivos iniciais {#step-2-check-out-our-starter-files}

Antes de começarmos a codificar, é importante verificar o que já está fornecido para nós nos arquivos iniciais.

### Tenha seu projeto React em execução {#get-your-react-project-running}

Vamos começar executando o projeto React em nosso navegador. A beleza do React é que uma vez que nosso projeto esteja sendo executado no nosso navegador, qualquer alteração que salvarmos será atualizada ao vivo em nosso navegador.

Para fazer com que o projeto funcione, navegue até o diretório raiz da pasta `minter-starter-files`, e execute`npm install` no seu terminal para instalar as dependências do projeto:

```bash
cd minter-starter-files
npm install
```

Uma vez terminada a instalação, execute `npm start` em seu terminal:

```bash
npm start
```

Feito isso, você deve abrir http://localhost:3000/ no seu navegador, onde você verá o frontend do nosso projeto. Ele deve consistir de 3 campos: um local para inserir um link para o ativo do seu NFT, digite o nome da sua NFT e forneça uma descrição.

Se você tentar clicar nos botões "Connectar Wallet" ou "Mint NFT", você notará que eles não funcionam — isso porque ainda precisamos programar a funcionalidade deles! :\)

### O componente Minter.js {#minter-js}

**NOTA:** Certifique-se de estar na pasta `minter-starter-files` e não na pasta `nft-minter`!

Vamos voltar à pasta `src` no nosso editor e abrir o arquivo `Minter.js`. É muito importante que entendamos tudo neste arquivo, pois é o principal componente do React no qual vamos trabalhar.

No topo do nosso arquivo, temos nossas variáveis de estado que serão atualizadas após eventos específicos.

```javascript
//State variables
const [walletAddress, setWallet] = useState("")
const [status, setStatus] = useState("")
const [name, setName] = useState("")
const [description, setDescription] = useState("")
const [url, setURL] = useState("")
```

Nunca ouviu falar de variáveis de estado do React ou State Hooks? Confira [está](https://reactjs.org/docs/hooks-state.html) documentação.

Veja aqui o que cada uma das variáveis representa:

- `walletAddress` - uma string que armazena o endereço da carteira do usuário
- `status` - uma string que contém uma mensagem a ser exibida na parte inferior da interface do usuário
- `name` - uma string que armazena o nome da NFT
- `descrição` - uma string que armazena a descrição da NFT
- `url` - uma string que é um link para o ativo digital da NFT

Após as variáveis de estado, você verá três funções não implementadas: `useEffect`, `connectWalletPressed`, e `onMintPressed`. Você irá notar que todas essas funções são `async`, isso é porque iremos fazer chamadas assíncronas da API nelas! Os nomes delas são relacionadas com sua funcionalidade:

```javascript
useEffect(async () => {
  //TODO: implement
}, [])

const connectWalletPressed = async () => {
  //TODO: implement
}

const onMintPressed = async () => {
  //TODO: implement
}
```

- [`useEffect`](https://reactjs.org/docs/hooks-effect.html) - este é um React Hook que é chamado depois que seu componente é renderizado. Porque ele tem uma array vazia `[]` "prop" passada para ela (veja a linha 3), ela só será chamada na _primeira_ renderização do componente. Aqui vamos chamar nosso ouvinte de carteira e outra função de carteira para atualizar nossa interface de usuário para refletir se uma carteira já está conectada.
- `connectWalletPressed` - esta função será chamada para conectar a carteira MetaMask do usuário ao nosso dapp.
- `onMintPressed` - esta função será chamada para mintar a NFT do usuário.

Perto do final desse arquivo, temos a interface de usuário do nosso componente. Se você escanear este código com cuidado, notará que atualizamos nossa `url`, `name`, e `description` variáveis de estado quando a entrada em seus campos de texto correspondentes muda.

Você também verá que `connectWalletPressed` e `onMintPressed` são chamadas quando os botões com IDs `mintButton` e `walletButton` são clicados respectivamente.

```javascript
//the UI of our component
return (
  <div className="Minter">
    <button id="walletButton" onClick={connectWalletPressed}>
      {walletAddress.length > 0 ? (
        "Connected: " +
        String(walletAddress).substring(0, 6) +
        "..." +
        String(walletAddress).substring(38)
      ) : (
        <span>Connect Wallet</span>
      )}
    </button>

    <br></br>
    <h1 id="title">🧙‍♂️ Alchemy NFT Minter</h1>
    <p>
      Simply add your asset's link, name, and description, then press "Mint."
    </p>
    <form>
      <h2>🖼 Link to asset: </h2>
      <input
        type="text"
        placeholder="e.g. https://gateway.pinata.cloud/ipfs/<hash>"
        onChange={(event) => setURL(event.target.value)}
      />
      <h2>🤔 Name: </h2>
      <input
        type="text"
        placeholder="e.g. My first NFT!"
        onChange={(event) => setName(event.target.value)}
      />
      <h2>✍️ Description: </h2>
      <input
        type="text"
        placeholder="e.g. Even cooler than cryptokitties ;)"
        onChange={(event) => setDescription(event.target.value)}
      />
    </form>
    <button id="mintButton" onClick={onMintPressed}>
      Mint NFT
    </button>
    <p id="status">{status}</p>
  </div>
)
```

Finalmente, vamos endereçar onde esse componente Minter será adicionado.

Se você for ao arquivo `App.js`, que é o componente principal do React que atua como um contêiner para todos os outros componentes, você verá que nosso componente Minter é injetado na linha 7.

**Neste tutorial, vamos apenas editar o arquivo `Minter.js` e adicionar arquivos em nossa pasta `src`.**

Agora que entendemos com o que estamos trabalhando, vamos configurar a nossa carteira Ethereum!

## Configure sua carteira Ethereum {#set-up-your-ethereum-wallet}

Para que os usuários possam interagir com o seu contrato inteligente, eles precisarão conectar a sua carteira Ethereum ao seu dapp.

### Baixar MetaMask {#download-metamask}

Para este tutorial, usaremos uma carteira virtual no navegador, a MetaMask, para gerenciar o endereço da sua conta Ethereum. Se você quiser entender mais sobre como as transações no Ethereum funcionam, confira [esta página](/developers/docs/transactions/) na Fundação Ethereum.

Você pode baixar e criar uma conta MetaMask gratuitamente [neste link](https://metamask.io/download.html). Quando estiver criando uma conta, ou se já tiver uma, certifique-se de mudar para a "Ropsten Test Network", no canto superior direito (para não precisar lidar com dinheiro de verdade\).

### Etapa: Adicionar Faucet ether {#add-ether-from-faucet}

Para mintar as nossas NFT (ou assinar quaisquer transações no blockchain Ethereum), precisaremos de alguns Eth falsos. Para obter Eth você pode ir para o [faucet da Ropsten](https://faucet.ropsten.be/), inserir seu endereço de conta Ropsten e clicar em "Send Ropsten Eth." Em seguida, você deve ver Eth em sua conta Metamask!

### Conferir o seu saldo {#check-your-balance}

Para verificar novamente que tem saldo, vamos fazer uma solicitação através da ferramenta [eth_getBalance](https://docs.alchemyapi.io/alchemy/documentation/alchemy-api-reference/json-rpc#eth_getbalance) fornecida pelo [compositor da Alchemy](https://composer.alchemyapi.io?composer_state=%7B%22network%22%3A0%2C%22methodName%22%3A%22eth_getBalance%22%2C%22paramValues%22%3A%5B%22%22%2C%22latest%22%5D%7D). Ela mostrará a quantidade de Eth na sua carteira. Depois de inserir o endereço da sua conta da MetaMask e clicar em "Send Request", você verá uma resposta como esta:

```text
{"jsonrpc": "2.0", "id": 0, "result": "0xde0b6b3a7640000"}
```

**NOTA:** Este resultado está em wei, não em ETH. Lembre-se de que "Wei" é a menor unidade de ether. A conversão de wei para eth é: 1 eth = 10¹⁸ wei. Então, se convertemos 0xde0b6b3a7640000 para decimal, temos 1\*10¹⁸ wei, que é igual a 1 eth.

Ufa! Nosso dinheiro falso está todo lá! <Emoji text=":money_mouth_face:" size={1} />

## Conecte o MetaMask à sua interface {#connect-metamask-to-your-UI}

Agora que nossa carteira MetaMask está configurada, vamos conectar nosso dapp a ela!

Como queremos prescrever conforme o paradigma [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller), vamos criar um arquivo separado que contém nossas funções para gerenciar a lógica, dados e regras de nosso dapp, e então passar essas funções para nosso frontend (nosso componente Minter.js).

### Função `connectWallet` {#connect-wallet-function}

Para fazer isso, vamos criar uma nova pasta chamada `utils` em seu diretório `src` e adicionar um arquivo chamado `interact.js` dentro dele, que conterá todas as funções de nossa carteira e da interação com o contrato inteligente.

No nosso arquivo `interact.js`, vamos escrever uma função `connectWallet`, que então importar e chamará nosso componente `Minter.js`.

No seu arquivo`interact.js`, adicione o seguinte

```javascript
export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      })
      const obj = {
        status: "👆🏽 Write a message in the text-field above.",
        address: addressArray[0],
      }
      return obj
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      }
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊 <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install MetaMask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    }
  }
}
```

Vamos dividir o que este código faz:

Primeiro, nossa função verifica se o `window.ethereum` está habilitado no seu navegador.

`window.ethereum` é uma API global injetada pela MetaMask e outros provedores de carteira que permitem que sites solicitem contas Ethereum dos usuários. Se aprovada, ela pode ler dados das blockchains ao qual o usuário está conectado e sugerir que o usuário assine mensagens e transações. Confira a [documentação da MetaMask](https://docs.metamask.io/guide/ethereum-provider.html#table-of-contents) para obter mais informações!

Se `window.ethereum` _não está_ presente, então isso significa que o MetaMask não está instalado. Isso resulta em um objeto JSON sendo retornado, onde o `endereço` retornado é uma string vazia, e o `status` do objeto JSX repassa que o usuário deve instalar o MetaMask.

**A maioria das funções que escrevermos retornarão objetos JSON que podemos usar para atualizar nossas variáveis de estado e interface de usuário.**

Agora se `window.ethereum` _estiver_ presente, e é aí que as coisas ficam interessantes.

Usando um loop de try/catch, tentaremos nos conectar a MetaMask chamando`[window.ethereum.request({ method: "eth_requestAccounts" });](https://docs.metamask.io/guide/rpc-api.html#eth-requestaccounts)`. Chamando esta função o MetaMask irá abrir no navegador, onde o usuário será solicitado a conectar sua carteira ao seu dapp.

- Se o usuário escolher conectar-se, `método: "eth_requestAccounts"` retornará um array que contém todos os endereços de conta do usuário que estão conectados ao dapp. No total, nossa função `connectWallet` retornará um objeto JSON que contém o _primeiro_ `address` desta matriz \(ver linha 9\) e uma mensagem `status` que pede que o usuário escreva uma mensagem para o contrato inteligente.
- Se o usuário rejeitar a conexão, então o objeto JSON vai conter uma string vazia para o `address` retornado e uma mensagem de `status` que reflete que o usuário rejeitou a conexão.

### Adicionar função connectWallet ao seu componente UI Minter.js {#add-connect-wallet}

Agora que escrevemos esta função `connectWallet`, vamos conectá-la ao nosso componente `Minter.js.`.

Primeiro, teremos que importar nossa função para o arquivo `Minter.js` adicionando `import { connectWallet } from "./utils/interact.js";` para o topo do arquivo `Minter.js`. Suas primeiras 11 linhas de `Minter.js` agora devem se parecer com isto:

```javascript
import { useEffect, useState } from "react";
import { connectWallet } from "./utils/interact.js";

const Minter = (props) => {

  //State variables
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setURL] = useState("");
```

Então, dentro da nossa função `connectWalletPressed`, vamos chamar nossa função importada `connectWallet`, assim:

```javascript
const connectWalletPressed = async () => {
  const walletResponse = await connectWallet()
  setStatus(walletResponse.status)
  setWallet(walletResponse.address)
}
```

Observe como a maior parte das nossas funcionalidades está abstraída do nosso componente `Minter.js` do arquivo `interact.js`? É assim que respeitamos o paradigma M-V-C!

Em `connectWalletPressed`, simplesmente fazemos uma chamada de espera (await) para a função `connectWallet`, importada, e usando sua resposta, nós atualizaremos nossas variáveis `status` e `walletAddress` através de seus state hooks.

Agora, vamos salvar os dois arquivos `Minter.js` e `interact.js` e testar nossa UI até agora.

Abra seu navegador em localhost:3000, e pressione o botão "Conectar Carteira" no canto superior direito da página.

Se você tiver o MetaMask instalado, você será solicitado a conectar sua carteira ao seu dapp. Aceite o convite para se conectar.

Você verá que o botão da carteira agora reflete que seu endereço está conectado.

Em seguida, tente atualizar a página... isso é estranho. Nosso botão de carteira está nos pedindo para conectar o MetaMask, mesmo que já esteja conectado...

Mas não se preocupe! Nós podemos facilmente corrigir isso implementando uma função chamada `getCurrentWalletConnected`, que irá verificar se um endereço já está conectado ao nosso dapp e atualizará nossa interface do usuário adequadamente!

### Função getCurrentWalletConnected {#get-current-wallet}

Em seu arquivo `interact.js`, adicione a função`getCurrentWalletConnected`:

```javascript
export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      })
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: "👆🏽 Write a message in the text-field above.",
        }
      } else {
        return {
          address: "",
          status: "🦊 Connect to MetaMask using the top right button.",
        }
      }
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      }
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊 <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install MetaMask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    }
  }
}
```

Este código é _muito_ semelhante à função `connectWallet` que acabamos de escrever.

A diferença principal é que, em vez de chamar o método `eth_requestAccounts`, que abre o MetaMask para o usuário conectar sua carteira, aqui chamamos o método `eth_accounts`, que simplesmente retorna uma matriz que contém os endereços MetaMask atualmente conectados ao nosso dapp.

Para ver essa função em ação, vamos chamá-la na função `useEffect` do nosso componente `Minter.js`.

Como fizemos para `connectWallet`, devemos importar essa função do nosso arquivo `interact.js` para o `Minter.js`, assim:

```javascript
import { useEffect, useState } from "react"
import {
  connectWallet,
  getCurrentWalletConnected, //import here
} from "./utils/interact.js"
```

Agora, simplesmente a chamamos em nossa função `useEffect`:

```javascript
useEffect(async () => {
  const { address, status } = await getCurrentWalletConnected()
  setWallet(address)
  setStatus(status)
}, [])
```

Note que nós usamos a resposta da nossa chamada a `getCurrentWalletConnected` para atualizar nossa `walletAddress` e nossa variável de estado `status`.

Depois de adicionar este código, tente atualizar a janela do navegador. O botão deve dizer que você está conectado e mostrar uma visualização do endereço de sua carteira conectada - mesmo depois de atualizar!

### Implementar addWalletListener {#implement-add-wallet-listener}

O passo final na configuração da nossa carteira dapp é implementar o ouvinte de carteira, para que nossa interface atualize quando o estado mudar, como quando o usuário desconecta ou troca de contas.

No seu arquivo `Minter.js`, adicione a função `addWalletListener` que se parece com o seguinte:

```javascript
function addWalletListener() {
  if (window.ethereum) {
    window.ethereum.on("accountsChanged", (accounts) => {
      if (accounts.length > 0) {
        setWallet(accounts[0])
        setStatus("👆🏽 Write a message in the text-field above.")
      } else {
        setWallet("")
        setStatus("🦊 Connect to MetaMask using the top right button.")
      }
    })
  } else {
    setStatus(
      <p>
        {" "}
        🦊 <a target="_blank" href={`https://metamask.io/download.html`}>
          You must install MetaMask, a virtual Ethereum wallet, in your browser.
        </a>
      </p>
    )
  }
}
```

Vamos dividir rapidamente o que está acontecendo aqui:

- Primeiro, nossa função verifica se o `window.ethereum` está habilitado no seu navegador \(ex. MetaMask instalado\).
  - Caso contrário, nós simplesmente configuramos a variável de estado `status` para uma JSX string que solicita o usuário instalar a MetaMask.
  - Se estiver habilitado, configuramos o ouvinte `window.ethereum.on("accountsChanged")` na linha 3 que houve mudança de estado na carteira MetaMask, inclusive quando o usuário conecta uma conta adicional ao dapp, troca de conta ou desconecta uma conta. Se houver pelo menos uma conta conectada, a variável de estado `walletAddress` é atualizada como a primeira conta no array `accounts` retornada pelo ouvinte. Caso contrário, `walletAddress` é definida como uma string vazia.

Finalmente, nós devemos chamá-la em nossa função `useEffect`:

```javascript
useEffect(async () => {
  const { address, status } = await getCurrentWalletConnected()
  setWallet(address)
  setStatus(status)

  addWalletListener()
}, [])
```

E Voila! Concluímos a programação de toda a funcionalidade da nossa carteira! Agora que a nossa carteira está pronta, vamos descobrir como mintar nossa NFT!

## Metadados NFT 101 {#nft-metadata-101}

Lembra dos metadados da NFT que acabamos de falar no Passo 0 deste tutorial - ele dá vida a uma NFT, permitindo que tenha propriedades, como um ativo digital, nome, descrição e outros atributos.

Vamos precisar configurar esse metadado como um objeto JSON e amarzena-lo, para que possamos passa-lo como parâmetro `tokenURI` quando chamarmos a função `mintNFT` do nosso contrato inteligente.

No campo texto "Link to Asset", "Name", "Description" inclui as diferentes propriedades dos metadados de nosso NFT. Nós vamos formatar estes metadados como um objeto JSON, mas há algumas opções para onde podemos armazenar este objeto JSON:

- Poderíamos armazená-lo no blockchain Ethereum; no entanto, fazê-lo seria muito caro.
- Nós poderíamos armazená-lo em um servidor centralizado, como AWS ou Firebase. Mas isso iria contra nossa ética de descentralização.
- Poderíamos usar o IPFS, um protocolo descentralizado e uma rede peer-to-peer para armazenar e compartilhar dados em um sistema de arquivos distribuído. Como este protocolo é descentralizado e gratuito, essa é a melhor opção!

Para armazenar nossos metadados no IPFS, vamos usar [Pinata](https://pinata.cloud/), uma conveniente API IPFS e um conjunto de ferramentas. Na próxima etapa, vamos explicar exatamente como fazer isso!

## Use o Pinata para fixar seus metadados no IPFS {#use-pinata-to-pin-your-metadata-to-IPFS}

Se você não tem uma conta no [Pinata](https://pinata.cloud/), cadastre-se [aqui](https://pinata.cloud/) gratuitamente e conclua as etapas de confirmação do seu e-mail e conta.

### Crie sua chave API do Pinata {#create-pinata-api-key}

Navegue para a página[https://pinata.cloud/keys](https://pinata.cloud/keys), então selecione o botão "New Key" no topo da página, defina o Admin widget como ativado, e nomeie sua chave.

Será mostrado a você um pop-up com as informações da sua API. Certifique-se de colocar isto num lugar seguro.

Agora que a nossa chave está configurada, vamos adicioná-la ao nosso projeto para que possamos usá-la.

### Criar o arquivo .env {#create-a-env}

Podemos armazenar com segurança nossa chave e segredo do Pinata em um arquivo de ambiente. Vamos instalar o [pacote dotenv](https://www.npmjs.com/package/dotenv) no diretório do seu projeto.

Abra uma nova aba no seu terminal \(separado do terminal executando o local host\) e certifique-se de estar na pasta `minter-starter-files`, então execute o seguinte comando no seu terminal:

```text
npm install dotenv --save
```

Em seguida, crie um arquivo `.env` no diretório raiz dos seus `minter-starter-files` inserindo o seguinte na sua linha de comando:

```javascript
vim.env
```

Isto abrirá seu arquivo `.env` no formato vim \(um editor de texto\). Para salvar, aperte "esc" + ":" + "q" no seu teclado nesta ordem.

Em seguida, no VSCode, navegue até o seu arquivo `.env` e adicione sua chave de API Pinata e sua API secreta, assim:

```text
REACT_APP_PINATA_KEY = <pinata-api-key>
REACT_APP_PINATA_SECRET = <pinata-api-secret>
```

Salve o arquivo e então você estará pronto para começar a escrever a função de enviar seus metadados JSON para IPFS!

### Implementar pinJSONToIPFS {#pin-json-to-ipfs}

Felizmente para nós, a Pinata tem uma API [especificamente para carregar dados JSON para o IPFS](https://pinata.cloud/documentation#PinJSONToIPFS) e um JavaScript conveniente com axios de exemplo que podemos usar, com algumas pequenas modificações.

Na sua pasta `utils`, vamos criar outro arquivo chamado `pinata.js` e então importar nossa chave Pinata do arquivo .env assim:

```javascript
require("dotenv").config()
const key = process.env.REACT_APP_PINATA_KEY
const secret = process.env.REACT_APP_PINATA_SECRET
```

Em seguida, cole o código adicional abaixo no seu arquivo `pinata.js`. Não se preocupe, nós iremos clarificar o que tudo isso significa!

```javascript
require("dotenv").config()
const key = process.env.REACT_APP_PINATA_KEY
const secret = process.env.REACT_APP_PINATA_SECRET

const axios = require("axios")

export const pinJSONToIPFS = async (JSONBody) => {
  const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`
  //making axios POST request to Pinata ⬇️
  return axios
    .post(url, JSONBody, {
      headers: {
        pinata_api_key: key,
        pinata_secret_api_key: secret,
      },
    })
    .then(function (response) {
      return {
        success: true,
        pinataUrl:
          "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash,
      }
    })
    .catch(function (error) {
      console.log(error)
      return {
        success: false,
        message: error.message,
      }
    })
}
```

Então, o que esse código faz exatamente?

Primeiro, importa [axios](https://www.npmjs.com/package/axios), a um cliente HTTP baseado em promessas para o navegador e node.js, que utilizaremos para fazer um pedido a Pinata.

Em seguida, temos nossa função assíncrona `pinJSONToIPFS`, que recebe um `JSONBody` como sua entrada e a chave e senha do API Pinata em seu cabeçalho, tudo para fazer uma solicitação POST para sua API `pinJSONToIPFS`.

- Se esta solicitação POST for bem sucedida, então nossa função retorna um objeto JSON com o valor booleano `sucess` como verdadeiro e a `pinataUrl` onde nossos metadados foram fixados. Nós usaremos a `pinataUrl` retornada, como entrada na `tokenURI` para a função mint do nosso contrato inteligente.
- Se esta solicitação POST falhar, então, nossa função retorna um objeto JSON com o booleano `success` como falso e uma `message` que transmite nosso erro.

Assim como na nossa função `connectWallet`retorna tipos, estamos retornando objetos JSON para que possamos usar seus parâmetros para atualizar nossas variáveis de estado e nossa interface de usuário.

## Carregar seu contrato inteligente {#load-your-smart-contract}

Agora que temos uma maneira de enviar nossos metadados NFT para IPFS através de nossa função de `pinJSONToIPFS`, vamos precisar de uma forma de carregar uma instância do nosso contrato inteligente para que possamos chamar a função `mintNFT`.

Como mencionado anteriormente, neste tutorial usaremos [este é um contrato inteligente NFT existente](https://ropsten.etherscan.io/address/0x4C4a07F737Bf57F6632B6CAB089B78f62385aCaE); no entanto, se você quer aprender como o fizemos ou como fazer um você mesmo, é altamente recomendável que você confira nosso outro tutorial, ["Como criar uma NFT.](https://docs.alchemyapi.io/alchemy/tutorials/how-to-create-an-nft).

### O contrato ABI {#contract-abi}

Se você examinar de perto nossos arquivos, você notará que no nosso diretório `src`, há um arquivo `contract-abi.json`. Um ABI é necessário para especificar qual função um contrato irá invocar, como também garantir que a função retornará dados no formato que você espera.

Também precisaremos de uma chave API Alchemy e da API Alchemy Web3 para conectar ao blockchain Ethereum e carregar o nosso contrato inteligente.

### Crie a sua chave API Alchemy {#create-alchemy-api}

Se ainda não tiver uma conta na Alchemy, você pode se cadastrar gratuitamente [neste link](https://alchemy.com/?a=eth-org-nft-minter)

Assim que criar uma conta na Alchemy, você pode gerar uma chave de API criando um "app". Isso nos permitirá fazer solicitações à rede de testes Ropsten.

Navegue até a pagina "Create App" no seu "Dashboard da Alchemy", passe o cursor sob "Apps" na barra de navegação e clique em “Create App”.

Nomeie seu aplicativo; nós escolhemos "Minha primeira NFT!", faça uma breve descrição, selecione "Staging" para o ambiente (usado para a contabilidade do seu ‘app’) e escolha "Ropsten" para sua rede.

Clique em "Create App", e é isso e tudo! Seu app deveria aparecer na tabela abaixo.

Incrível agora que criamos a nossa URL de API Alchemy HTTP, copie-a para a sua área de transferência...

…e então vamos adicioná-lo ao nosso arquivo `.env`. Ao todo, seu arquivo .env deve se parecer com isto:

```text
REACT_APP_PINATA_KEY = <pinata-key>
REACT_APP_PINATA_SECRET = <pinata-secret>
REACT_APP_ALCHEMY_KEY = https://eth-ropsten.alchemyapi.io/v2/<alchemy-key>
```

Agora que temos nosso contrato ABI e nossa chave API do Alchemy, estamos prontos para carregar o nosso contrato inteligente usando [Alchemy Web3](https://github.com/alchemyplatform/alchemy-web3).

### Configure seu Alchemy Web3 endpoint e contrato {#setup-alchemy-endpoint}

Primeiro, se você ainda não tiver, você precisará instalar [Alchemy Web3](https://github.com/alchemyplatform/alchemy-web3) navegando até o diretório home: `nft-minter-tutorial` no terminal:

```text
cd ..
yarn add @alch/alchemy-web3
```

Em seguida, voltaremos para o nosso arquivo `interact.js`. No topo do arquivo, adicione o seguinte código para importar a chave de Alchemy do seu arquivo .env e configure seu Alchemy Web3 endpoint:

```javascript
require("dotenv").config()
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY
const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(alchemyKey)
```

[Alchemy Web3](https://github.com/alchemyplatform/alchemy-web3) é um invólucro em torno do [Web3.js](https://docs.web3js.org/), fornecendo métodos aprimorados da API e outros benefícios cruciais para tornar a sua vida de desenvolvedor da Web3 mais fácil. Ele foi projetado para exigir uma configuração mínima, para que você possa começar a usá-la no seu aplicativo imediatamente!

Em seguida, vamos adicionar nosso contrato ABI e endereço do contrato ao nosso arquivo.

```javascript
require("dotenv").config()
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY
const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(alchemyKey)

const contractABI = require("../contract-abi.json")
const contractAddress = "0x4C4a07F737Bf57F6632B6CAB089B78f62385aCaE"
```

Assim que tivermos ambas as coisas, estaremos prontos para começar a codificar a nossa função "mint"!

## Implementar a função mintNFT {#implement-the-mintnft-function}

Dentro do seu arquivo `interact.js`, vamos definir nossa função, `mintNFT`, que deliberadamente vai criar nossa NFT.

Porque vamos fazer numerosas chamadas assíncronas \(para o Pinata fixar nossos metadados para IPFS, Alchemy Web3 para carregar o nosso contrato inteligente, e MetaMask para assinar nossas transações\), nossa função também será assíncrona.

As três entradas para nossa função serão a `url` do nosso ativo digital, `name`e `description`. Adicione a seguinte assinatura da função abaixo da função `connectWallet`:

```javascript
export const mintNFT = async (url, name, description) => {}
```

### Manipulação de erros de script {#input-error-handling}

Naturalmente, faz sentido ter algum tipo de tratamento de erro de entrada no início da função, então vamos sair desta função se nossos parâmetros de entrada não estiverem corretos. Dentro da nossa função, vamos adicionar o seguinte código:

```javascript
export const mintNFT = async (url, name, description) => {
  //error handling
  if (url.trim() == "" || name.trim() == "" || description.trim() == "") {
    return {
      success: false,
      status: "❗Please make sure all fields are completed before minting.",
    }
  }
}
```

Essencialmente, se algum dos parâmetros de entrada for uma string vazia, então retornamos um objeto JSON onde o valor booleano `success` é falso, e a string `status` repassa que todos os campos na nossa UI precisam estar completos.

### Carregar os metadados para o IPFS {#upload-metadata-to-ipfs}

Assim que soubermos que nossos metadados estão formatados corretamente, o próximo passo é envolvê-lo em um objeto JSON e enviá-lo para IPFS através do `pinJSONToIPFS` que escrevemos!

Para fazer isso, precisamos primeiro importar a função `pinJSONToIPFS` para nosso arquivo `interact.js`. No topo do `interact.js`, vamos adicionar:

```javascript
import { pinJSONToIPFS } from "./pinata.js"
```

Lembre-se que `pinJSONToIPFS` recebe um corpo JSON. Então, antes de fazer a chamada, precisaremos formatar a nossa `url`, `name`e `description` parâmetros em um objeto JSON.

Vamos atualizar nosso código para criar um objeto JSON chamado `metadada` e então fazer uma chamada para `pinJSONToIPFS` com este parâmetro `metadada`:

```javascript
export const mintNFT = async (url, name, description) => {
  //error handling
  if (url.trim() == "" || name.trim() == "" || description.trim() == "") {
    return {
      success: false,
      status: "❗Please make sure all fields are completed before minting.",
    }
  }

  //make metadata
  const metadata = new Object()
  metadata.name = name
  metadata.image = url
  metadata.description = description

  //make pinata call
  const pinataResponse = await pinJSONToIPFS(metadata)
  if (!pinataResponse.success) {
    return {
      success: false,
      status: "😢 Something went wrong while uploading your tokenURI.",
    }
  }
  const tokenURI = pinataResponse.pinataUrl
}
```

Note, nós armazenamos a resposta de nossa chamada para `pinJSONToIPFS(metadada)` no objeto `pinataResponse`. Então, analisamos esse objeto para quaisquer erros.

Se houver um erro, nós retornamos um objeto JSON onde o `sucess` booleano é falso e nossa string `status` relata que nossa chamada falhou. Caso contrário, nós extraímos a `pinataURL` da `pinataResponse` e armazenamos como nossa variável `tokenURI`.

Agora é hora de carregar o nosso contrato inteligente usando a API da Alchemy Web3 que inicializamos no topo do nosso arquivo. Adicione a seguinte linha de código na parte inferior da função `mintNFT` para definir o contrato na `window.contract` variável global:

```javascript
window.contract = await new web3.eth.Contract(contractABI, contractAddress)
```

A última coisa a adicionar em nossa função `mintNFT` é a nossa transação Ethereum:

```javascript
//set up your Ethereum transaction
const transactionParameters = {
  to: contractAddress, // Required except during contract publications.
  from: window.ethereum.selectedAddress, // must match user's active address.
  data: window.contract.methods
    .mintNFT(window.ethereum.selectedAddress, tokenURI)
    .encodeABI(), //make call to NFT smart contract
}

//sign the transaction via MetaMask
try {
  const txHash = await window.ethereum.request({
    method: "eth_sendTransaction",
    params: [transactionParameters],
  })
  return {
    success: true,
    status:
      "✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/" +
      txHash,
  }
} catch (error) {
  return {
    success: false,
    status: "😥 Something went wrong: " + error.message,
  }
}
```

Se você já está familiarizado com as transações na Ethereum, perceberá que a estrutura é bem parecida com a que você já viu.

- Primeiro, nós configuramos nossos parâmetros de transações.
  - `to` especificar o endereço do destinatário \(nosso contrato inteligente\)
  - `from` especifica o signatário da transação \(o endereço conectado ao MetaMask: `window.ethereum.selectedAddress`\)
  - `data` contém a chamada para nosso contrato inteligente do método `mintNFT`, que recebe nossa `tokenURI` e o endereço da carteira do usuário, `window.ethereum.selectedAddress` como entradas
- Então, faremos uma chamada para, `window.ethereum.request,` onde pedimos ao MetaMask para assinar a transação. Note que nessa solicitação, estamos especificando nosso método eth \(eth_SentTransaction\) e passando em nossos `transactionParameters`. Neste ponto, a MetaMask irá abrir no navegador e pedirá que o usuário assine ou rejeite a transação.
  - Se a transação for bem-sucedida, a função retornará um objeto JSON onde o booleano `success` é definido como verdadeiro e a string `status` pede que o usuário verifique o Etherscan para obter mais informações sobre sua transação.
  - Se a transação falhar, a função retornará um objeto JSON onde o booleano `success` é definido como falso, `status` string retransmite a mensagem de erro.

Ao todo, nossa função `mintNFT` deve-se parecer com isto:

```javascript
export const mintNFT = async (url, name, description) => {
  //error handling
  if (url.trim() == "" || name.trim() == "" || description.trim() == "") {
    return {
      success: false,
      status: "❗Please make sure all fields are completed before minting.",
    }
  }

  //make metadata
  const metadata = new Object()
  metadata.name = name
  metadata.image = url
  metadata.description = description

  //pinata pin request
  const pinataResponse = await pinJSONToIPFS(metadata)
  if (!pinataResponse.success) {
    return {
      success: false,
      status: "😢 Something went wrong while uploading your tokenURI.",
    }
  }
  const tokenURI = pinataResponse.pinataUrl

  //load smart contract
  window.contract = await new web3.eth.Contract(contractABI, contractAddress) //loadContract();

  //set up your Ethereum transaction
  const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    data: window.contract.methods
      .mintNFT(window.ethereum.selectedAddress, tokenURI)
      .encodeABI(), //make call to NFT smart contract
  }

  //sign transaction via MetaMask
  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    })
    return {
      success: true,
      status:
        "✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/" +
        txHash,
    }
  } catch (error) {
    return {
      success: false,
      status: "😥 Something went wrong: " + error.message,
    }
  }
}
```

Essa é uma função gigante! Agora, só precisamos conectar nossa função `mintNFT` com nosso componente `Minter.js`...

## Conectando mintNFT ao nosso frontend Minter.js {#connect-our-frontend}

Abra o seu arquivo `Minter.js` e atualize `import { connectWallet, getCurrentWalletConnected } from "./utils/interact.js";` a linha em cima deve ser:

```javascript
import {
  connectWallet,
  getCurrentWalletConnected,
  mintNFT,
} from "./utils/interact.js"
```

Finalmente, implemente a função `onMintPressed` para fazer a chamada(await call) para a função `mintNFT`importada e atualize a variável de estado `status` para refletir se nossa transação foi bem-sucedida ou falhou:

```javascript
const onMintPressed = async () => {
  const { status } = await mintNFT(url, name, description)
  setStatus(status)
}
```

## Implante seu NFT a um site ao vivo {#deploy-your-NFT}

Pronto para deixar seu projeto ao vivo para que usuários interajam? Confira [este tutorial](https://docs.alchemy.com/alchemy/tutorials/nft-minter/how-do-i-deploy-nfts-online) para implantar seu Minter em um site ao vivo.

Um último passo...

## Leve o mundo blockchain numa enxurrada {#take-the-blockchain-world-by-storm}

Só uma brincadeira, você chegou ao fim do tutorial!

Para recapitular, construindo um minter NFT, você aprendeu com sucesso como:

- Conectar ao MetaMask através do seu projeto frontend
- Chamar métodos de contrato inteligentes no seu frontend
- Assine transações usando MetaMask

Provavelmente você gostaria de poder exibir seu NFT na sua carteira — então certifique-se de conferir [ a parte Como ver seu NFT na sua carteira](https://docs.alchemyapi.io/alchemy/tutorials/how-to-write-and-deploy-a-nft-smart-contract/how-to-view-your-nft-in-your-wallet)!

E, como sempre, se você tiver alguma dúvida, estamos aqui para ajudar no [Alchemy Discord](https://discord.gg/gWuC7zB). Mal podemos esperar para ver como você aplicará os conceitos deste tutorial em seus projetos futuros!
