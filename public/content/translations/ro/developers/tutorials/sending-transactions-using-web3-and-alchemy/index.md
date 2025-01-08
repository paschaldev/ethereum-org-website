---
title: Sending Transactions Using Web3
description: "This is a beginner friendly guide to sending Ethereum transactions using web3. Există trei etape principale pentru a trimite o tranzacție în blockchain-ul Ethereum: crearea, semnarea și difuzarea. Le vom parcurge pe toate trei."
author: "Elan Halpern"
tags:
  - "tranzacții"
  - "web3.js"
  - "alchemy"
skill: beginner
lang: ro
published: 2020-11-04
source: Documentație Alchemy
sourceUrl: https://docs.alchemy.com/alchemy/tutorials/sending-txs
---

This is a beginner friendly guide to sending Ethereum transactions using web3. Există trei etape principale pentru a trimite o tranzacție în blockchain-ul Ethereum: crearea, semnarea și difuzarea. Le vom parcurge pe toate trei, în speranța că vom răspunde tuturor întrebărilor pe care le puteți avea! In this tutorial, we'll be using [Alchemy](https://www.alchemy.com/) to send our transactions to the Ethereum chain. You can [create a free Alchemy account here](https://auth.alchemyapi.io/signup).

**NOTE:** This guide is for signing your transactions on the _backend_ for your app, if you want to integrate signing your transactions on the frontend, check out integrating [Web3 with a browser provider](https://docs.alchemy.com/reference/api-overview#with-a-browser-provider).

## Noțiuni de bază {#the-basics}

Ca majoritatea dezvoltatorilor de blockchain la început de drum, poate aţi făcut câteva cercetări despre cum să trimiteți o tranzacție (ar trebui să fie destul de simplu) și aţi nimerit într-o multitudine de ghiduri, fiecare spunând lucruri diferite, după care aţi rămas oarecum copleșit și încurcat. Dacă vă aflați într-o astfel de situație, nu vă faceți griji; cu toții am trecut prin aceasta la un moment dat! De aceea, înainte de a începe, haideți să lămurim câteva lucruri:

### 1\. Alchemy nu stochează cheile dvs. private {#alchemy-does-not-store-your-private-keys}

- Acest lucru înseamnă că Alchemy nu poate semna și trimite tranzacții în numele dumneavoastră. Aceasta din motive de securitate. Alchemy nu vă va solicita niciodată să vă partajați cheia privată și nu ar trebui să o partajați niciodată cu un nod găzduit (sau cu oricine altcineva).
- You can read from the blockchain using Alchemy’s core API, but to write to it you’ll need to use something else to sign your transactions before sending them through Alchemy (this is the same for any other [node service](/developers/docs/nodes-and-clients/nodes-as-a-service/)).

### 2\. Ce este un „semnatar”? {#what-is-a-signer}

- Semnatarii vor semna tranzacțiile în locul dvs. folosind cheia dvs. privată. In this tutorial we’ll be using [Alchemy web3](https://docs.alchemyapi.io/alchemy/documentation/alchemy-web3) to sign our transaction, but you could also use any other web3 library.
- Pe „frontend”, o bună exemplificare a unui semnatar ar fi [„metamask”](https://metamask.io/), care va semna și va trimite tranzacții în numele dvs.

### 3\. De ce trebuie să-mi semnez tranzacțiile? {#why-do-i-need-to-sign-my-transactions}

- Orice utilizator care dorește să trimită o tranzacție în rețeaua Ethereum trebuie să semneze tranzacția (folosindu-şi cheia privată), pentru a valida în acest fel că persoana care a iniţiat tranzacţia este cea care pretinde a fi.
- Este extrem de important să vă protejați această cheie privată, deoarece accesul la ea oferă control total asupra contului Ethereum, permițând (atât dvs., cât și oricărei alte persoane cu acces la ea) efectuarea de tranzacții în numele dvs.

### 4\. Cum pot să-mi protejez cheia privată? {#how-do-i-protect-my-private-key}

- Sunt mai multe moduri de a vă proteja cheia privată și de a o utiliza pentru a trimite tranzacții. În acest tutorial vom folosi un fișier .env. Totuși, puteți utiliza și un furnizor separat care stochează chei private, puteți folosi un fișier de depozitare de chei (keystore) sau alte opțiuni.

### 5\. Care este diferența dintre `eth_sendTransaction` și `eth_sendRawTransaction`? {#difference-between-send-and-send-raw}

`eth_sendTransaction` și `eth_sendRawTransaction` sunt amândouă funcții API Ethereum care transmit o tranzacție către rețeaua Ethereum, pentru ca aceasta să fie adăugată la un bloc viitor. Acestea diferă prin modul de gestionare a semnării tranzacțiilor.

- [`eth_sendTransaction`](https://docs.web3js.org/api/web3-eth/function/sendTransaction) este utilizată pentru trimiterea unei tranzacții _nesemnate_, adică nodul către care trimiteți tranzacția trebuie să vă gestioneze cheia privată pentru a putea semna tranzacția înainte de a o transmite în lanț. Since Alchemy doesn't hold user's private keys, they do not support this method.
- [`eth_sendRawTransaction`](https://docs.alchemyapi.io/documentation/alchemy-api-reference/json-rpc#eth_sendrawtransaction) este utilizată la transmiterea tranzacțiilor deja semnate. Aceasta înseamnă că trebuie să utilizați mai întâi [`signTransaction(tx, private_key)`](https://docs.web3js.org/api/web3-eth-accounts/function/signTransaction), apoi să treceți rezultatul în `eth_sendRawTransaction`.

Atunci când utilizați web3, este accesat `eth_sendRawTransaction` prin apelarea funcției [„web3.eth.sendSignedTransaction”](https://docs.web3js.org/api/web3-eth/function/sendSignedTransaction).

This is what we will be using in this tutorial.

### 6\. Ce este biblioteca web3? {#what-is-the-web3-library}

- Web3.js este o bibliotecă de coduri de încapsulare (wrapper) în jurul apelurilor JSON-RPC standard, care se utilizează destul de des în dezvoltarea Ethereum.
- Există mai multe biblioteci web3 pentru diferite limbaje. În acest tutorial vom folosi [Alchemy Web3Web3](https://docs.alchemy.com/reference/api-overview), care este scrisă în JavaScript. Puteți verifica și alte opțiuni [aici](https://docs.alchemyapi.io/guides/getting-started#other-web3-libraries).

În regulă, acum că am eliminat câteva dintre aceste întrebări, haideți să trecem la tutorial. Feel free to ask questions anytime in the Alchemy [discord](https://discord.gg/gWuC7zB)!

**NOTE:** This guide requires an Alchemy account, an Ethereum address or MetaMask wallet, NodeJs, and npm installed. Daca nu, urmați acești pași:

1.  [Creați un cont gratuit Alchemy](https://auth.alchemyapi.io/signup)
2.  [Create MetaMask account](https://metamask.io/) (or get an Ethereum address)
3.  [Urmați aceste etape pentru a instala „NodeJs” și „NPM”](https://docs.alchemy.com/alchemy/guides/alchemy-for-macs)

## Etapele de trimitere a tranzacției dvs. {#steps-to-sending-your-transaction}

### 1\. Creați o aplicație Alchemy pe Rinkeby testnet {#create-an-alchemy-app-on-the-rinkeby-testnet}

Navigați la [Tabloul de bord Alchemy](https://dashboard.alchemyapi.io/) și creați o nouă aplicație, alegând ca reţea Rinkeby (sau orice alt testnet).

### 2\. Solicitați ETH de la „faucet-ul” Rinkeby {#request-eth-from-rinkeby-faucet}

Follow the instructions on the [Alchemy Rinkeby faucet](https://www.rinkebyfaucet.com/) to receive ETH. Make sure to include your **Rinkeby** Ethereum address (from MetaMask) and not another network. After following the instructions, double-check that you’ve received the ETH in your wallet.

### 3\. Creați un nou director pentru proiect și intrați în el prin `cd` {#create-a-new-project-direction}

Creați un nou director pentru proiect din linia de comandă (terminal pentru mac-uri) și navigați în el:

```
mkdir sendtx-example
cd sendtx-example
```

### 4\. Instalați Alchemy Web3 (sau orice bibliotecă web3) {#install-alchemy-web3}

Executați următoarea comandă în directorul proiectului dvs. pentru a instala [Alchemy Web3](https://docs.alchemy.com/reference/api-overview):

```
npm install @alch/alchemy-web3
```

### 5\. Instalați „dotenv” {#install-dotenv}

Vom folosi un fișier „.env” pentru a stoca în siguranță cheia API și cheia privată.

```
npm install dotenv --save
```

### 6\. Creați fișierul „.env” {#create-the-dotenv-file}

Create a `.env` file in your project directory and add the following (replacing “`your-api-url`" and "`your-private-key`")

- Pentru a găsi URL-ul API-ului Alchemy, navigați pe pagina de detalii a aplicației pe care tocmai ați creat-o în tabloul de bord, faceți clic pe "View Key" (Vizualizare cheie) în colțul din dreapta sus și luați URL-ul HTTP.
- To find your private key using MetaMask, check out this [guide](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key).

```
API_URL = "your-api-url"
PRIVATE_KEY = "your-private-key"
```

<InfoBanner isWarning>
Don't commit <code>.env</code>! Please make sure never to share or expose your <code>.env</code> file with anyone, as you are compromising your secrets in doing so. If you are using version control, add your <code>.env</code> to a <a href="https://git-scm.com/docs/gitignore">gitignore</a> file.
</InfoBanner>

### 7\. Creați fișierul `sendTx.js` {#create-sendtx-js}

Excelent, acum că avem datele noastre sensibile protejate într-un fișier „.env”, să începem codarea. Pentru exemplul nostru de trimitere a unei tranzacţii, vom trimite ETH înapoi la „faucet-ul” Rinkeby.

Creați un fișier `sendTx.js`, care este locul în care vom configura și trimite tranzacţia pe care am luat-o drept exwmplu și adăugați-i următoarele linii de cod:

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

Be sure to replace the address on **line 6** with your own public address.

Now, before we jump into running this code, let's talk about some of the components here.

- `nonce` : Specificația nonce este utilizată pentru a ține evidența numărului de tranzacții trimise de la adresa dvs. Avem nevoie de aceasta din motive de securitate și pentru a preveni [atacurile de reluare](https://docs.alchemyapi.io/resources/blockchain-glossary#account-nonce). Pentru a obține numărul de tranzacții trimise de la adresa dvs., folosim [„getTransactionCount”](https://docs.alchemyapi.io/documentation/alchemy-api-reference/json-rpc#eth_gettransactioncount).
- `transaction`: Obiectul parametrului „transaction” are câteva aspecte pe care trebuie să le specificăm
  - `to`: This is the address we want to send ETH to. În cazul de față, trimitem ETH înapoi la [„faucet-ul” Rinkeby](https://faucet.rinkeby.io/) de la care l-am solicitat inițial.
  - `value`: This is the amount we wish to send, specified in wei where 10^18 wei = 1 ETH
  - `gas`: There are many ways to determine the right amount of gas to include with your transaction. Alchemy even has a [gas price webhook](https://docs.alchemyapi.io/guides/alchemy-notify#address-activity-1) to notify you when the gas price falls within a certain threshold. For Mainnet transactions, it's good practice to check a gas estimator like [ETH Gas Station](https://ethgasstation.info/) to determine the right amount of gas to include. 21.000 este cantitatea minimă de gaz pe care o foloeşte o operațiune pe Ethereum, de aceea, pentru a ne asigura că tranzacția noastră va fi executată, punem 30.000 aici.
  - `nonce`: a se vedea definiția nonce-ului de mai sus. Nonce starts counting from zero.
  - [OPTIONAL] data: Used for sending additional information with your transfer, or calling a smart contract, not required for balance transfers, check out the note below.
- `signedTx`: Pentru a semna obiectul tranzacției noastre, vom folosi metoda `signTransaction` cu cheia noastră privată `PRIVATE_KEY`
- `sendSignedTransaction`: Once we have a signed transaction, we can send it off to be included in a subsequent block by using `sendSignedTransaction`

**A Note on data** There are a two main types of transactions that can be sent in Ethereum.

- Balance transfer: Send eth from one address to another. No data field required, however, if you'd like to send additional information alongside your transaction, you can include that information in HEX format in this field.
  - For example, let's say we wanted to write the hash of an IPFS document to the ethereum chain in order to give it an immutable timestamp. Our data field should then look like data: web3.utils.toHex(‘IPFS hash‘). And now anyone can query the chain and see when that document was added.
- Smart contact transaction: Execute some smart contract code on the chain. In this case, the data field should contain the smart function you wish to execute, alongside any parameters.
  - For a practical example, check out Step 8 in this [Hello World Tutorial](https://docs.alchemyapi.io/alchemy/tutorials/hello-world-smart-contract#step-8-create-the-transaction).

### 8\. Executați codul folosind `node sendTx.js` {#run-the-code-using-node-sendtx-js}

Navigate back to your terminal or command line and run:

```
node sendTx.js
```

### 9\. Vedeți-vă tranzacția în Mempool {#see-your-transaction-in-the-mempool}

Open up the [Mempool page](https://dashboard.alchemyapi.io/mempool) in your Alchemy dashboard and filter by the app you created to find your transaction. Aici este locul unde putem urmări tranziția tranzacției noastre de la starea de așteptare la starea minată (dacă are succes) sau la starea abandonată dacă nu are succes. Aveţi griijă să activaţi opțiunea „All” (Toate), ca să captați tranzacțiile „minate”, „în așteptare” și „abandonate”. Puteți de asemenea să vă căutați tranzacția uitându-vă după tranzacțiile trimise la adresa `0x31b98d14007bdee637298086988a0bbd31184523`.

Pentru a vă vedea detaliile tranzacției odată ce aţi găsit-o, selectați „hash-ul tx”, ceea ce ar trebui să vă conducă să vizualizaţi ceva de genul:

![Mempool watcher screenshot](./mempool.png)

Din acest punct, vă puteţi vizualiza tranzacția pe Etherscan făcând clic pe pictograma încercuită cu roșu!

**Yippieeee! Tocmai ați trimis prima dvs. tranzacție Ethereum folosind Alchemy 🎉**

_For feedback and suggestions about this guide, please message Elan on Alchemy’s [Discord](https://discord.gg/A39JVCM)!_

_Originally published at [https://docs.alchemyapi.io/tutorials/sending-transactions-using-web3-and-alchemy](https://docs.alchemyapi.io/tutorials/sending-transactions-using-web3-and-alchemy)_
