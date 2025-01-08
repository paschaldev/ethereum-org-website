---
title: Cum să scrieți și să implementați un NFT (Partea 1/3 din seria de tutoriale NFT)
description: Acesta este primul tutorial al unei serii despre NFT-uri care vă va arăta pas cu pas cum să scrieți și să implementați un contract inteligent de token nefungibil (token ERC-721) folosind Ethereum și Inter Planetary File System (IPFS).
author: "Sumi Mudgil"
tags:
  - "NFT-uri"
  - "ERC-721"
  - "Alchemy"
  - "Solidity"
  - "contractele inteligente"
skill: beginner
lang: ro
published: 2021-04-22
---

Având în vedere că NFT-urile aduc blockchain-ul în atenția publicului, acum aveți o ocazie excelentă de a trăi acest entuziasm, prin publicarea propriul NFT (tokenul ERC-721) pe blockchain-ul Ethereum!

Alchemy se mândreşte mult că susține cele mai mari nume din spațiul NFT, printre care Makersplace (a atins recent un record de vânzare de opere de artă digitală la Christie's pentru 69 de milioane de dolari), Dapper Labs (creatorii NBA Top Shot & Crypto Kitties), OpenSea (cea mai mare piață de NFT -uri din lume), Zora, Super Rare, NFTfi, Foundation, Enjin, Origin Protocol, Immutable și multe altele.

În acest tutorial vă vom îndruma pentru crearea și implementarea unui contract inteligent ERC-721 pe rețeaua de testare Ropsten folosind [MetaMask](https://metamask.io/), [Solidity](https://docs.soliditylang.org/en/v0.8.0/), [Hardhat](https://hardhat.org/), [Pinata](https://pinata.cloud/) și [Alchemy](https://dashboard.alchemyapi.io/signup) (nu vă faceți griji dacă nu înțelegeți încă ce înseamnă toate acestea — vă vom explica!).

În Partea 2 a acestui tutorial vom examina cum putem utiliza contractul nostru inteligent pentru a emite un NFT, iar în Partea 3, vom explica în ce mod putem vizualiza NFT-ul pe MetaMask.

Desigur, dacă aveți oricând întrebări, nu ezitați să ne contactați pe [Alchemy Discord](https://discord.gg/gWuC7zB)!

## Etapa 1: Conectarea la rețeaua Ethereum {#connect-to-ethereum}

Sunt o mulțime de modalități de a face cereri către blockchain-ul Ethereum, dar pentru a simplifica lucrurile vom folosi un cont gratuit pe [Alchemy](https://dashboard.alchemyapi.io/signup), o platformă de dezvoltare blockchain și un API care ne permite să comunicăm cu lanțul Ethereum fără a fi necesar să ne rulăm propriile noduri.

În acest tutorial vom profita şi de instrumentele de dezvoltare Alchemy pentru monitorizare și analiză și pentru a înțelege ce se întâmplă în culise în timpul implementării contractului nostru inteligent. Dacă nu aveți deja un cont Alchemy, vă puteți înregistra gratuit [aici](https://dashboard.alchemyapi.io/signup).

## Etapa 2: Crearea aplicației (și a cheii API) {#make-api-key}

Odată ce v-ați creat un cont Alchemy, puteți să generați o cheie API creând o aplicație. Aceasta ne va permite să facem solicitări către rețeaua de testare Ropsten. Consultați [acest ghid](https://docs.alchemyapi.io/guides/choosing-a-network) dacă sunteți curios să aflați mai multe despre rețelele de testare.

1. Navigați la pagina „Create App” (Creați o aplicație) din tabloul de bord Alchemy, trecând peste „Apps” (Aplicații) din bara de navigare și dați clic pe „Create App” (Creați o aplicație)

![Creaţi-vă propria aplicație](./create-your-app.png)

2. Numiți-vă aplicația „My First NFT!”, dați-i o scurtă descriere, selectați „Staging” pentru Mediu (folosit pentru contabilizarea aplicației) și alegeți „Ropsten” pentru rețea.

![Configurați-vă și publicați-vă aplicația](./configure-and-publish-your-app.png)

3. Dați clic pe „Create app” (Creați aplicația) și asta e tot! Aplicația dvs. ar trebui să apară în tabelul de mai jos.

## Etapa 3: Crearea unui cont Ethereum (adresă) {#create-eth-address}

Avem nevoie de un cont Ethereum pentru a trimite și primi tranzacții. În acest tutorial vom folosi un portofel virtual în browser, MetaMask, pentru a gestiona adresa contului Ethereum. Dacă doriți să înțelegeți mai multe despre cum funcționează tranzacțiile pe Ethereum, consultaţi [această pagină](/developers/docs/transactions/) de la fundația Ethereum.

Puteți descărca și crea un cont MetaMask pe gratis [aici](https://metamask.io/download.html). Atunci când vă creați un cont sau dacă aveți deja unul, aveţi grijă să comutaţi pe „Ropsten Test Network” („Rețeaua de testare Ropsten”) în dreapta sus (pentru a nu avea de-a face cu bani reali).

![Setați Ropsten ca rețeaua dvs.](./metamask-goerli.png)

## Etapa 4: Adăugarea de ether de la un faucet {#step-4-add-ether-from-a-faucet}

Pentru implementarea contractului nostru inteligent în rețeaua de testare, vom avea nevoie de niște ETH fals. Pentru a-l obține, mergeți la [faucetul Ropsten](https://faucet.ropsten.be/), introduceți-vă adresa contului, apoi dați click pe „Trimiteți ETH Ropsten.” În scurt timp ar trebui să vă vedeți ETH-ul în contul dvs. MetaMask!

## Etapa 5: Verificarea soldului {#check-balance}

Pentru a ne verifica soldul de două ori, să facem o solicitare [eth_getBalance](https://docs.alchemyapi.io/alchemy/documentation/alchemy-api-reference/json-rpc#eth_getbalance) folosind [instrumentul compozitor al Alchemy](https://composer.alchemyapi.io?composer_state=%7B%22network%22%3A0%2C%22methodName%22%3A%22eth_getBalance%22%2C%22paramValues%22%3A%5B%22%22%2C%22latest%22%5D%7D). Aceasta va returna suma de ETH în portofelul nostru. După introducerea adresei contului MetaMask și după ce ați dat click pe „Send Request” („Trimiteți solicitarea”), ar trebui să vedeți un răspuns ca acesta:

    `{"jsonrpc": "2.0", "id": 0, "result": "0xde0b6b3a7640000"}`

**OBSERVAŢIE:** Rezultatul este în wei, nu în ETH. Wei este folosit ca cea mai mică denominație de ether. Conversia din wei în ETH este: 1 eth = 10<sup>18</sup> wei. Deci, convertind 0xde0b6b3a7640000 în zecimal, obținem 1\*10<sup>18</sup> wei, ceea ce înseamnă 1 ETH.

Pfiu! Banii noștri falși sunt toți acolo.

## Etapa 6: Inițializarea proiectului {#initialize-project}

Mai întâi va trebui să creem un dosar pentru proiectul nostru. Navigați la linia de comandă și tastați:

    mkdir my-nft
    cd my-nft

Odată ce suntem în dosarul proiectului nostru, vom folosi npm init pentru a inițializa proiectul. Dacă nu aveți deja instalat „npm”, urmați [aceste instrucțiuni](https://docs.alchemyapi.io/alchemy/guides/alchemy-for-macs#1-install-nodejs-and-npm) (vom avea nevoie și de [Node.js](https://nodejs.org/en/download/), așadar descărcați-l și pe acela!).

    npm init

Nu este prea important cum răspundeți la întrebările de instalare; iată cum am făcut-o noi, ca referință:

    package name: (my-nft)
    version: (1.0.0)
    description: My first NFT!
    entry point: (index.js)
    test command:
    git repository:
    keywords:
    author:
    license: (ISC)
    About to write to /Users/thesuperb1/Desktop/my-nft/package.json:

    {
      "name": "my-nft",
      "version": "1.0.0",
      "description": "My first NFT!",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "",
      "license": "ISC"
    }

Aprobați package.json și suntem gata să începem!

## Etapa 7: Instalarea [Hardhat](https://hardhat.org/getting-started/#overview) {#install-hardhat}

Hardhat este un mediu de dezvoltare pentru compilarea, implementarea, testarea și depanarea de software Ethereum. Acesta ajută dezvoltatorii la construirea de contracte inteligente și aplicații dapp la nivel local, înainte de a le implementa în lanțul real.

În cadrul proiectului nostru my-nft, rulați:

    npm install --save-dev hardhat

Consultați această pagină pentru mai multe [informații de instalare](https://hardhat.org/getting-started/#overview).

## Etapa 8: Crearea proiectului Hardhat {#create-hardhat-project}

În dosarul proiectului nostru, executați:

    npx hardhat

În acel moment ar trebui să vedeți un mesaj de bun venit și opțiunea de a selecționa ceea ce doriți să faceți. Selectați „create an empty hardhat.config.js” („creați un hardhat.config.js gol”):

    888    888                      888 888               888
    888    888                      888 888               888
    888    888                      888 888               888
    8888888888  8888b.  888d888 .d88888 88888b.   8888b.  888888
    888    888     "88b 888P"  d88" 888 888 "88b     "88b 888
    888    888 .d888888 888    888  888 888  888 .d888888 888
    888    888 888  888 888    Y88b 888 888  888 888  888 Y88b.
    888    888 "Y888888 888     "Y88888 888  888 "Y888888  "Y888
    👷 Welcome to Hardhat v2.0.11 👷‍
    ? What do you want to do? …
    Create a sample project
    ❯ Create an empty hardhat.config.js
    Quit

Aceasta ne va genera un fișier hardhat.config.js, în care vom specifica toate setările proiectului nostru (în etapa 13).

## Etapa 9: Adăugarea dosarelor proiectului {#add-project-folders}

Pentru ne menţine proiectul organizat, vom crea două dosare noi. Mergeți în directorul rădăcină al proiectului dvs. și tastaţi în linia de comandă:

    mkdir contracts
    mkdir scripts

- contracts/ este locul în care vom păstra codul contractului nostru inteligent NFT

- scripts/ este locul unde vom păstra scripturile pentru implementarea și interacțiunea cu contractul nostru inteligent

## Etapa 10: Scrierea contractului nostru {#write-contract}

Acum, că mediul nostru este configurat, să trecem la lucruri mai entuziasmante: _scrierea codului contractului nostru inteligent!_

Deschideți proiectul „my-nft” în editorul dvs. preferat (noi preferăm [VSCode](https://code.visualstudio.com/)). Contractele inteligente sunt scrise într-un limbaj numit Solidity, pe care îl vom folosi pentru a scrie contractul nostru inteligent „MyNFT.sol”.

1. Navigați în dosarul `contracts` și creați un nou fișier numit „MyNFT.sol”

2. Mai jos este codul contractului nostru inteligent NFT, cod pentru care ne-am bazat pe implementarea ERC-721 a bibliotecii [OpenZeppelin](https://docs.openzeppelin.com/contracts/3.x/erc721). Copiați și inseraţi conținutul de mai jos în fișierul MyNFT.sol.

   ```solidity
   //Contract based on [https://docs.openzeppelin.com/contracts/3.x/erc721](https://docs.openzeppelin.com/contracts/3.x/erc721)
   // SPDX-License-Identifier: MIT
   pragma solidity ^0.8.0;

   import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
   import "@openzeppelin/contracts/utils/Counters.sol";
   import "@openzeppelin/contracts/access/Ownable.sol";
   import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

   contract MyNFT is ERC721URIStorage, Ownable {
       using Counters for Counters.Counter;
       Counters.Counter private _tokenIds;

       constructor() public ERC721("MyNFT", "NFT") {}

       function mintNFT(address recipient, string memory tokenURI)
           public onlyOwner
           returns (uint256)
       {
           _tokenIds.increment();

           uint256 newItemId = _tokenIds.current();
           _mint(recipient, newItemId);
           _setTokenURI(newItemId, tokenURI);

           return newItemId;
       }
   }
   ```

3. Deoarece moștenim clase din biblioteca de contracte OpenZeppelin, rulaţi în linia de comandă `npm install @openzeppelin/contractscontracte` pentru a instala biblioteca în folderul nostru.

Deci ce _face_ acest cod mai exact? Să îl analizăm, linie cu linie.

La începutul contractului nostru inteligent, importăm trei clase de contracte inteligente [OpenZeppelin](https://openzeppelin.com/):

- @openzeppelin/contracts/token/ERC721/ERC721.sol conține implementarea standardului ERC-721, pe care îl va moşteni contractul nostru inteligent NFT. (Pentru a fi un NFT valid, contractul inteligent trebuie să implementeze toate metodele standardului ERC-721). Pentru a afla mai multe despre funcțiile ERC-721 moștenite, consultați definiția interfeței [aici](https://eips.ethereum.org/EIPS/eip-721).

- @openzeppelin/contracts/utils/Counters.sol oferă contoare care pot fi incrementate sau decrementate doar cu unu. Contractul nostru inteligent utilizează acest contor pentru a ține evidența numărului total de NFT-uri emise și pentru a seta ID-ul unic pe noul nostru NFT. (Fiecărui NFT emis cu ajutorul unui contract inteligent trebuie să i se atribuie un ID unic—aici ID-ul nostru unic este doar determinat de numărul total de NFT-uri existente. De exemplu, primul NFT pe care îl emitem cu contractul nostru inteligent are un ID de „1”, al doilea NFT are un ID de „2” etc.)

- @openzeppelin/contracts/access/Ownable.sol stabilește [controlul accesului](https://docs.openzeppelin.com/contracts/3.x/access-control) la contractul nostru inteligent, pentru ca numai proprietarul contractului inteligent (dvs.) să poată emite NFT-uri. (Observaţie: includerea controlului accesului este doar o preferință. Dacă preferați ca oricine să poată emite un NFT folosind contractul dvs. inteligent, eliminați cuvântul „Ownable” de la linia 10 și „onlyOwner„ de la linia 17.)

După declarațiile de import, avem contractul nostru inteligent NFT personalizat, surprinzător de scurt — conține doar un contor, un constructor și o singură funcție! Aceasta datorită contractelor noastre moștenite din OpenZeppelin, care implementează majoritatea metodelor de care avem nevoie pentru a crea un NFT, cum ar fi `ownerOf`, care răspunde cine este proprietarul NFT-ului, și `transferFrom`, care transferă proprietatea NFT-ului de la un cont la altul.

În constructorul nostru ERC-721, veți vedea că trecem două șiruri de caractere, „MyNFT” și „NFT.” Prima variabilă este numele contractului inteligent, iar cea de-a doua este simbolul acestuia. Puteți să numiți fiecare dintre aceste variabile cum doriți!

În cele din urmă, avem funcția noastră `mintNFT(address recipient, string memory uri)` care ne permite să emitem un NFT! Veți observa că această funcție primește două variabile:

- `adresa destinatarului` specifică adresa care va primi NFT-ul proaspăt emis

- `string memory tokenURI` este un șir de caractere care ar trebui să rezolve la un document JSON care descrie metadatele NFT-ului. Metadatele unui NFT sunt într-adevăr ceea ce îi dă viață, permițându-i să aibă proprietăți configurabile, cum ar fi un nume, o descriere, o imagine și alte atribute. În partea a 2-a a acestui tutorial vom descrie cum să configurăm aceste metadate.

`mintNFT` apelează câteva metode din biblioteca ERC-721 moștenită și, în cele din urmă, răspunde printr-un număr care reprezintă ID-ul NFT-ului proaspăt emis.

## Etapa 11: Conectarea MetaMask & Alchemy la proiect {#connect-metamask-and-alchemy}

Acum, că am creat un portofel MetaMask, un cont Alchemy și am scris contractul nostru inteligent, este timpul să le conectăm pe cele trei.

Pentru fiecare tranzacție trimisă din portofelul dvs. virtual este necesară o semnătură cu ajutorul cheii private unice. Pentru a oferi programului nostru această permisiune, putem stoca în siguranță cheia noastră privată (și cheia API Alchemy) într-un fișier de mediu.

Dacă doriți să aflați mai multe despre trimiterea de tranzacții, consultați [acest tutorial](/developers/tutorials/sending-transactions-using-web3-and-alchemy/) despre trimiterea de tranzacții utilizând Web3.

Mai întâi instalați pachetul „dotenv” în dosarul proiectului dumneavoastră:

    npm install dotenv --save

Apoi creați un fișier „.env” în directorul rădăcină al proiectului nostru și adăugați-vă cheia privată MetaMask și URL-ul HTTP al API-ului Alchemy în acesta.

- Urmați [aceste instrucțiuni](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key) pentru a exporta cheia dvs. privată din MetaMask

- Vedeți mai jos cum să obţineţi URL-ul HTTP Alchemy API și copiați-l pe clipboard

![Copiați URL-ul API-ului Alchemy](./copy-alchemy-api-url.gif)

Fișierul dvs. „.env” ar trebui să arate acum așa:

    API_URL="https://eth-ropsten.alchemyapi.io/v2/your-api-key"
    PRIVATE_KEY="your-metamask-private-key"

Pentru a le conecta cu adevărat la codul nostru, vom face referire la aceste variabile în fișierul nostru hardhat.config.js în etapa 13.

## Etapa 12: Instalarea Ethers.js {#install-ethers}

„Ethers.js” este o bibliotecă ce facilitează interacțiunea cu Ethereum și solicitările către acesta, învelind („wrapping”) [metodele JSON-RPC standard](/developers/docs/apis/json-rpc/) cu metode mai ușor de utilizat.

Hardhat simplifică foarte mult integrarea de [Plugin-uri](https://hardhat.org/plugins/) pentru instrumente suplimentare și funcționalități extinse. Vom profita de [plugin-ul Ethers](https://hardhat.org/plugins/nomiclabs-hardhat-ethers.html) pentru a implementa contractul ([Ethers.js](https://github.com/ethers-io/ethers.js/) are niște metode foarte simple de implementare a contractelor).

În directorul de proiect, tastați:

    npm install --save-dev @nomiclabs/hardhat-ethers ethers@^5.0.0

De asemenea, vom solicita ether în fișierul nostru hardhat.config.js în etapa următoare.

## Etapa 13: Actualizarea hardhat.config.js {#update-hardhat-config}

Până acum am adăugat mai multe dependențe și plugin-uri, acum trebuie să actualizăm hardhat.config.js pentru ca proiectul nostru să știe despre toate acestea.

Actualizați hardhat.config.js pentru a arăta astfel:

    /**
    * @type import('hardhat/config').HardhatUserConfig
    */
    require('dotenv').config();
    require("@nomiclabs/hardhat-ethers");
    const { API_URL, PRIVATE_KEY } = process.env;
    module.exports = {
       solidity: "0.8.0",
       defaultNetwork: "ropsten",
       networks: {
          hardhat: {},
          ropsten: {
             url: API_URL,
             accounts: [`0x${PRIVATE_KEY}`]
          }
       },
    }

## Etapa 14: Compilarea contractului nostru {#compile-contract}

Pentru a fi siguri că totul funcționează până acum, să compilăm contractul nostru. Funcția „compile” este una dintre sarcinile încorporate în „hardhat”.

Din linia de comandă, rulați:

    npx hardhat compile

Dacă primiți un mesaj cu privire la indicatorul de licență SPDX care nu este furnizat în fișierul sursă, nu trebuie să vă îngrijorați — sperăm că tot restul arată bine! Dacă nu, puteți oricând să trimiteți un mesaj pe canalul [Discord Alchemy](https://discord.gg/u72VCg3).

## Etapa 15: Scrierea scriptului nostru de implementare {#write-deploy}

Odată ce avem contractul nostru scris și fișierul de configurare gata, putem să scriem scriptul de implementare al contractului.

Navigați în dosarul `scripts/` și creați un nou fișier numit `deploy.js`, adăugându-i următorul conținut:

```js
async function main() {
  const MyNFT = await ethers.getContractFactory("MyNFT")

  // Start deployment, returning a promise that resolves to a contract object
  const myNFT = await MyNFT.deploy()
  await myNFT.deployed()
  console.log("Contract deployed to address:", myNFT.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
```

[Tutorialul despre contracte](https://hardhat.org/tutorial/testing-contracts.html#writing-tests) al Hardhat explică foarte bine ce face fiecare dintre aceste linii de cod, iar noi am adoptat explicațiile acestuia aici.

    const MyNFT = await ethers.getContractFactory("MyNFT");

Un ContractFactory este o abstracție utilizată în „ethers.js” pentru a implementa noi contracte inteligente, deci „MyNTF” aici este o fabrică pentru instanțele contractului nostru NFT. Când utilizați plugin-ul „hardhat-ethers”, instanțele ContractFactory și Contract sunt conectate în mod implicit la primul semnatar.

    const myNFT = await MyNFT.deploy();

Apelarea „deploy()” pe un „ContractFactory” va începe implementarea și va răspunde printr-un „Promise” care va rezolva pe un „Contract”. Acesta este obiectul care are o metodă pentru fiecare dintre funcțiile noastre de contract inteligent.

## Etapa 16: Implementarea contractului nostru {#deploy-contract}

În sfârșit, suntem gata să implementăm contractul nostru inteligent! Navigați înapoi la rădăcina directorului proiectului dvs. și rulaţi în linia de comandă:

    npx hardhat --network ropsten run scripts/deploy.js

Ar trebui să vedeți ceva de genul:

    Contract deployed to address: 0x81c587EB0fE773404c42c1d2666b5f557C470eED

Dacă mergem pe [„Ropsten etherscan”](https://ropsten.etherscan.io/) și căutăm adresa contractului nostru, ar trebui să vedem că acesta a fost implementat cu succes. Tranzacția va arăta cam așa:

![Vizualizați adresa tranzacției dvs. pe Etherscan](./etherscan-sepolia-tx-details.png)

Adresa „From” (De la) ar trebui să corespundă cu adresa contului MetaMask, iar adresa „To” (Către) va preciza „Contract Creation” (Crearea contractului). Dacă facem clic pe tranzacție, vom vedea adresa contractului nostru în câmpul „To”:

![Vizualizați adresa contractului dvs. pe Etherscan](./etherscan-sepoila-contract-creation.png)

Yasssss! Tocmai v-ați implementat contractul inteligent NFT în lanțul Ethereum!

Pentru a înțelege ce se întâmplă în culise, să navigăm la fila Explorer din [tabloul de bord Alchemy](https://dashboard.alchemyapi.io/explorer). Dacă aveți mai multe aplicații Alchimy, asigurați-vă că filtrați după aplicație și selectați „MyNFT”.

![Vizualizați apelurile efectuate „în culise” cu Tabloul de bord al exploratorului Alchemy](./alchemy-explorer-goerli.png)

Aici veți vedea o serie de apeluri JSON-RPC pe care Hardhat/Ethers le-a făcut în culise pentru noi atunci când am apelat funcția .deploy(). Este important de menţionat două dintre acestea aici: [eth_sendRawTransaction](/developers/docs/apis/json-rpc/#eth_sendrawtransaction), care este solicitarea de a scrie efectiv contractul nostru în lanțul Ropsten, și [eth_getTransactionByHash](/developers/docs/apis/json-rpc/#eth_gettransactionbyhash), care este o solicitare de a citi informații despre tranzacția noastră având în vedere hash-ul (un model tipic în cazul tranzacțiilor). Dacă doriți să aflați mai multe despre trimiterea de tranzacții, consultați acest tutorial despre [trimiterea de tranzacții utilizând Web3](/developers/tutorials/sending-transactions-using-web3-and-alchemy/).

Asta e tot pentru partea 1 a acestui tutorial. În [Partea a 2-a vom interacționa efectiv cu contractul nostru inteligent prin emiterea unui NFT](/developers/tutorials/how-to-mint-an-nft/), iar în [Partea a 3-a vă vom arăta cum să vă vizualizați NFT-ul în portofelul Ethereum](/developers/tutorials/how-to-view-nft-in-metamask/)!
