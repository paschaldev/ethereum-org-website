---
title: Noțiuni de bază despre dezvoltare în Ethereum
description: "This is a beginner's guide to getting started with Ethereum development. Vă vom îndruma de la crearea unui endpoint API la realizarea unei solicitări de linie de comandă și până la a vă scrie primul script web3! Nu este nevoie să aveți experiență de dezvoltator pe blockchain!"
author: "Elan Halpern"
tags:
  - "noțiuni de bază"
  - "javascript"
  - "ethers.js"
  - "noduri"
  - "interogarea"
  - "alchemy"
skill: beginner
lang: ro
published: 2020-10-30
source: Mediu
sourceUrl: https://medium.com/alchemy-api/getting-started-with-ethereum-development-using-alchemy-c3d6a45c567f
---

![Logouri Ethereum și Alchemy](./ethereum-alchemy.png)

Acesta este un ghid pentru începători ca să se familiarizeze cu dezvoltarea în Ethereum. Pentru acest tutorial vom folosi [Alchemy](https://alchemyapi.io/), principala platformă de dezvoltare blockchain care activează milioane de utilizatori din 70% dintre aplicațiile blockchain de top, inclusiv Maker, 0x, MyEtherWallet, Dharma și Kyber. Alchemy ne va oferi accesul la un endpoint API pe lanțul Ethereum, ca să putem citi și scrie tranzacții.

Începem de la înregistrarea la Alchemy și te îndrumăm până la scrierea primul script web3! Nu este necesară o experiență de programator blockchain!

## 1. Înregistrează-te pentru un cont Alchemy gratuit {#sign-up-for-a-free-alchemy-account}

Crearea unui cont cu Alchemy este ușoară, [înregistrează-te gratuit aici](https://auth.alchemyapi.io/signup).

## 2. Crearea unei aplicații Alchemy {#create-an-alchemy-app}

Pentru a comunica cu lanțul Ethereum și pentru a utiliza produsele Alchemy, aveți nevoie de o cheie API pentru a vă autentifica cererile.

Poți [crea chei API din tabloul de bord](http://dashboard.alchemyapi.io/). Pentru a crea o cheie nouă, navighează la „Creare aplicație” după cum se arată mai jos:

Mulțumiri speciale site-ului [_ShapeShift_](https://shapeshift.com/) _pentru că ne permite să arătăm tabloul de bord!_

![Tabloul de bord Alchemy](./alchemy-dashboard.png)

Completează detaliile sub „Creare aplicație” pentru a obține noua cheie. De easemenea, aici poți să vezi aplicațiile pe care le-ai făcut anterior și cele făcute de echipa ta. Trage cheile existente făcând clic pe „Vizualizare cheie” pentru orice aplicație.

![Creează aplicații cu captura de ecran Alchemy](./create-app.png)

Poți trage, de asemenea, cheile API existente prin trecerea peste „Apps” și selectând una. Puteți să „Vizualizați cheia” aici și vă puteți „Edita aplicația” pentru a lista în alb anumite domenii, pentru a vedea mai multe instrumente pentru dezvoltare și pentru a vizualiza datele analitice.

![Gif care arată unui utilizator să tragă cheile API](./pull-api-keys.gif)

## 3. Efectuarea unei solicitări din linia de comandă {#make-a-request-from-the-command-line}

Interacționează cu blockchain-ul Ethereum prin Alchemy folosind JSON-RPC și curl.

Pentru solicitări manuale, îți recomandăm să interacționezi cu `JSON-RPC` prin intermediul solicitărilor `POST`. Este suficient să introduci antetul `Content-Type: application/json` și interogarea ta ca `POST` cu următoarele câmpuri:

- `jsonrpc`: Versiunea JSON-RPC — în prezent, numai `2.0` este acceptată.
- `Method`: Metoda ETH API. [Consultă referința API.](https://docs.alchemyapi.io/documentation/alchemy-api-reference/json-rpc)
- `params`: O listă a parametrilor care trebuie să treacă la metodă.
- `id`: ID-ul solicitării tale. Va fi returnat de răspuns, astfel încât să poți urmări cererea căreia aparține un răspuns.

Iată un exemplu pe care îl poți rula din linia de comandă pentru a recupera prețul curent al gazului:

```bash
curl https://eth-mainnet.alchemyapi.io/v2/demo \
-X POST \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0","method":"eth_gasPrice","params":[],"id":73}'
```

_**NOTE:** Replace [https://eth-mainnet.alchemyapi.io/v2/demo](https://eth-mainnet.alchemyapi.io/jsonrpc/demo) with your own API key `https://eth-mainnet.alchemyapi.io/v2/**your-api-key`\*\*._

**Rezultate:**

```json
{ "id": 73,"jsonrpc": "2.0","result": "0x09184e72a000" // 10000000000000 }
```

## 4. Configurează clientul Web3 {#set-up-your-web3-client}

**Dacă aveți un client existent,** modificați adresa URL a furnizorului actual al nodului printr-un URL Alchemy cu cheia dvs. API: `"https://eth-mainnet.alchemyapi.io/v2/your-api-key"`

**_NOTĂ:_** Script-urile de mai jos trebuie să fie rulate într-un **context nod** sau **salvate într-un fișier**, nu rulează de la linia de comandă. Dacă nu ai instalat deja Node sau npm, consultă acest [ghid de configurare pentru mac](https://app.gitbook.com/@alchemyapi/s/alchemy/guides/alchemy-for-macs)-uri.

Există tone de [biblioteci Web3](https://docs.alchemyapi.io/guides/getting-started#other-web3-libraries) pe care le poți integra cu Alchemy, totuși, îți recomandăm să folosești [Alchemy Web3](https://docs.alchemy.com/reference/api-overview), un înlocuitor treptat pentru web3.js, construit și configurat pentru a funcționa perfect cu Alchemy. Acesta oferă mai multe avantaje, cum ar fi reîncercări automate și suport robust WebSocket.

Pentru a instala AlchemyWeb3.js, **navigă la directorul proiectului tău** și rulează:

**Cu Yarn:**

```
yarn add @alch/alchemy-web3
```

**Cu NPM:**

```
npm install @alch/alchemy-web3
```

Pentru a interacționa cu infrastructura nodului Alchemy, rulează în NodeJS sau adaugă aceasta într-un fișier JavaScript:

```js
const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(
  "https://eth-mainnet.alchemyapi.io/v2/your-api-key"
)
```

## 5. Scrie primul Web3 Script! {#write-your-first-web3-script}

Acum, pentru a ne murdări pe mâini cu puțină programare web3, vom scrie un script simplu, care imprimă cel mai recent număr de bloc de pe rețeaua principală Ethereum.

**1. If you haven’t already, in your terminal create a new project directory and cd into it:**

```
mkdir web3-example
cd web3-example
```

**2. Install the Alchemy web3 (or any web3) dependency into your project if you have not already:**

```
npm install @alch/alchemy-web3
```

**3. Create a file named `index.js` and add the following contents:**

> În cele din urmă, ar trebui să înlocuiești `demo` cu cheia API Alchemy HTTP.

```js
async function main() {
  const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
  const web3 = createAlchemyWeb3("https://eth-mainnet.alchemyapi.io/v2/demo")
  const blockNumber = await web3.eth.getBlockNumber()
  console.log("The latest block number is " + blockNumber)
}
main()
```

Unfamiliar with the async stuff? Check out this [Medium post](https://medium.com/better-programming/understanding-async-await-in-javascript-1d81bb079b2c).

**4. Run it in your terminal using node**

```
node index.js
```

**5. You should now see the latest block number output in your console!**

```
Cel mai recent număr de bloc este 11.043.912
```

**Woo! Felicitări! You just wrote your first web3 script using Alchemy 🎉**

Not sure what to do next? Try deploying your first smart contract and get your hands dirty with some solidity programming in our [Hello World Smart Contract Guide](https://docs.alchemyapi.io/tutorials/hello-world-smart-contract), or test your dashboard knowledge with the [Dashboard Demo App](https://docs.alchemyapi.io/tutorials/demo-app)!

_[Înregistrează-te la Alchemy gratis](https://auth.alchemyapi.io/signup), consultă [documentația](https://docs.alchemyapi.io/) și, pentru cele mai recente știri, urmărește-ne pe [Twitter](https://twitter.com/AlchemyPlatform)_.
