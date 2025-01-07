---
title: Un Contrat intelligent « Hello World » pour les débutants
description: Tutoriel d'introduction à l'écriture et au déploiement d'un contrat intelligent simple sur Ethereum.
author: "elanh"
tags:
  - "solidité"
  - "hardhat"
  - "alchemy"
  - "contrats intelligents"
  - "déployer"
skill: beginner
lang: fr
published: 2021-03-31
---

Si vous débutez dans le développement de blockchain et ne savez pas par où commencer, ou si vous souhaitez uniquement comprendre comment déployer et interagir avec les contrats intelligents, ce guide est fait pour vous. Nous allons parcourir la création et le déploiement d'un contrat intelligent simple sur le réseau de test de Goerli à l'aide d'un portefeuille virtuel [MetaMask](https://metamask.io/), [Solidity](https://docs.soliditylang.org/en/v0.8.0/), [Hardhat](https://hardhat.org/), et [Alchemy](https://alchemyapi.io/eth) (ne vous inquiétez pas si vous ne comprenez pas à ce stade ce que cela signifie, nous allons l'expliquer).

> **Avertissement **
> 
> 🚧 Avis de fin de support
> 
> Tout au long de ce guide, le réseau de test Goerli est utilisé pour créer et déployer un contrat intelligent. Cependant, veuillez noter que l'Ethereum Foundation a annoncé que [Goerli sera bientôt obsolète](https://www.alchemy.com/blog/goerli-faucet-deprecation).
> 
> Nous vous recommandons d'utiliser le [Sepolia](https://www.alchemy.com/overviews/sepolia-testnet) et le [distributeur sur Sepolia](https://sepoliafaucet.com/) pour ce tutoriel.

Dans la [partie 2](https://docs.alchemy.com/docs/interacting-with-a-smart-contract) de ce tutoriel, nous allons voir comment nous pouvons interagir avec notre contrat intelligent une fois qu'il sera déployé ici, et dans la [partie 3](https://docs.alchemy.com/docs/submitting-your-smart-contract-to-etherscan) nous couvrirons comment le publier sur Etherscan.

Si vous avez des questions à un moment ou à un autre, n'hésitez pas à en discuter sur le [Discord Alchemy](https://discord.gg/gWuC7zB)!

## Étape 1 : Se connecter au réseau Ethereum {#step-1}

Il existe de nombreuses façons de faire des requêtes dans la chaîne d'Ethereum. Pour plus de simplicité, nous allons utiliser un compte gratuit sur Alchemy, une plateforme de blockchain et d'API pour développeur, nous permettant de communiquer avec la chaîne Ethereum sans avoir à exécuter nos propres nœuds. La plateforme possède également des outils de développement pour la surveillance et l'analyse, dont nous allons tirer parti dans ce tutoriel, pour comprendre ce qui se passe sous le capot de notre déploiement de contrat intelligent. Si vous n'avez pas encore de compte Alchemy, [vous pouvez vous inscrire gratuitement ici](https://dashboard.alchemyapi.io/signup).

## Étape 2 : Créer votre application (et votre clé API) {#step-2}

Une fois que vous avez créé un compte Alchemy, vous pouvez générer une clé API en créant une application. Cela va nous permettre d'émettre des requêtes sur le réseau de test Goerli. Si vous n'êtes pas familier avec Testnets (réseau de test), consultez [cette page](/developers/docs/networks/).

1.  Accédez à la page « Créer une application » dans votre tableau de bord Alchemy en survolant « Apps » dans la barre de navigation et en cliquant sur « Créer une application »

![créer une application Hello world](./hello-world-create-app.png)

2. Nommez votre application « Hello World », faites-en une description rapide, pour l'environnement sélectionnez « Staging » (utilisé pour la comptabilité de votre application), et pour votre réseau choisissez « Goerli ».

![créer une vue de l'application Hello world](./create-app-view-hello-world.png)

3. Cliquez sur « Créer l'application » et voilà ! Votre application devrait apparaître dans le tableau.

## Étape 3 : Créez un compte Ethereum (adresse) {#step-3}

Nous avons besoin d'un compte Ethereum pour effectuer des transactions (envoyer et recevoir). Pour ce tutoriel, nous allons utiliser MetaMask, un portefeuille virtuel intégré au navigateur, servant à gérer les adresses de votre compte Ethereum. Plus d'infos sur les [transactions](/developers/docs/transactions/).

Vous pouvez télécharger et créer un compte MetaMask gratuitement [ici](https://metamask.io/download.html). Lorsque vous créez un compte, ou si vous en avez déjà un, assurez-vous de basculer sur « Réseau de test Goerli » en haut à droite (afin de ne pas utiliser d'argent réel).

![exemple metamask ropsten](./metamask-ropsten-example.png)

## Étape 4 : Ajoutez de l'ether à partir d'un faucet {#step-4}

Afin de déployer notre contrat intelligent sur le réseau de test, nous aurons besoin de faux Eth. Pour obtenir des Eth, vous pouvez vous rendre sur le [faucet Goerli](https://goerlifaucet.com/) et vous connecter à votre compte Alchemy et entrer l'adresse de votre portefeuille, puis cliquez sur « Envoyez-moi des Eth ». Cela peut prendre un certain temps pour recevoir votre faux Eth en fonction du trafic sur le réseau. (Au moment de rédiger l'article, cela a pris environ 30 minutes.) Vous devriez voir les Eth dans votre compte Metamask peu de temps après !

## Étape 5 : Vérifiez votre solde {#step-5}

Pour vérifier notre solde, faisons une requête [eth_getBalance](https://docs.alchemyapi.io/alchemy/documentation/alchemy-api-reference/json-rpc#eth_getbalance) en utilisant [l'outil composeur d'Alchemy](https://composer.alchemyapi.io?composer_state=%7B%22network%22%3A0%2C%22methodName%22%3A%22eth_getBalance%22%2C%22paramValues%22%3A%5B%22%22%2C%22latest%22%5D%7D). Cela va retourner la quantité d'ETH présente dans notre portefeuille. Après avoir entré l'adresse de votre compte Metamask et cliqué sur « Send Request », vous devriez voir une réponse comme celle-ci :

```json
{ "jsonrpc": "2.0", "id": 0, "result": "0x2B5E3AF16B1880000" }
```

> **REMARQUE :** Ce résultat est en wei et non pas en ETH. Le wei est utilisé comme la plus petite dénomination d'ether. La conversion de wei en ETH est : 1 eth = 10<sup>18</sup> wei. Donc si nous convertissons 0x2B5E3AF16B1880000 en décimales, nous obtenons 5\*10¹⁸, ce qui équivaut à 5 ETH.
> 
> Ouf ! Notre fausse monnaie est bien là <Emoji text=":money_mouth_face:" size={1} />.

## Étape 6 : Initialisez notre projet {#step-6}

Pour commencer, nous allons devoir créer un dossier pour notre projet. Ouvrez votre ligne de commande et tapez :

```
mkdir hello-world
cd hello-world
```

Maintenant que nous sommes dans le dossier de notre projet, nous allons utiliser `npm init` pour initialiser le projet. Si vous n'avez pas encore installé npm, suivez [ces instructions](https://docs.alchemyapi.io/alchemy/guides/alchemy-for-macs#1-install-nodejs-and-npm) (téléchargez également Node.js, car nous en aurons besoin aussi).

```
npm init
```

La manière dont vous répondez à ces questions d'installation a peu d'importance. Pour référence, voici comment nous avons répondu :

```
package name: (hello-world)
version: (1.0.0)
description: hello world smart contract
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to /Users/.../.../.../hello-world/package.json:

{
  "name": "hello-world",
  "version": "1.0.0",
  "description": "hello world smart contract",
  "main": "index.js",
  "scripts": {
     "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

Approuvez le package.json et nous sommes prêts à démarrer !

## Étape 7 : Téléchargez [Hardhat](https://hardhat.org/getting-started/#overview) {#step-7}

Hardhat est un environnement de développement qui permet de compiler, déployer, tester et déboguer votre logiciel Ethereum. Il aide les développeurs à construire des contrats intelligents et des dApps localement avant de les déployer sur la chaîne en production.

À l'intérieur de notre projet `hello-world`, exécutez :

```
npm install --save-dev hardhat
```

Consultez cette page pour plus de détails sur [les instructions d'installation](https://hardhat.org/getting-started/#overview).

## Étape 8 : Créez un projet Hardhat {#step-8}

Dans notre dossier de projet, exécutez :

```
npx hardhat
```

Vous devriez maintenant voir un message de bienvenue ainsi qu'une option pour séléctionner ce que vous voulez faire. Sélectionnez : « create an empty hardhat.config.js » :

```
888    888                      888 888               888
888    888                      888 888               888
888    888                      888 888               888
8888888888  8888b.  888d888 .d88888 88888b.   8888b.  888888
888    888     "88b 888P"  d88" 888 888 "88b     "88b 888
888    888 .d888888 888    888  888 888  888 .d888888 888
888    888 888  888 888    Y88b 888 888  888 888  888 Y88b.
888    888 "Y888888 888     "Y88888 888  888 "Y888888  "Y888

👷 Welcome to Hardhat v2.0.11 👷‍?

Que voulez vous faire ? …
Create a sample project
❯ Create an empty hardhat.config.js
Quit
```

Cela va générer un fichier `hardhat.config.js` dans lequel nous allons spécifier tous les paramètres de notre projet (à l'étape 13).

## Étape 9 : Ajoutez des dossiers au projet {#step-9}

Pour garder notre projet organisé, nous allons créer deux nouveaux dossiers. Naviguez vers le répertoire racine de votre projet dans votre ligne de commande et tapez :

```
mkdir contracts
mkdir scripts
```

- `contrats/` est l'endroit où nous garderons notre fichier de code de contrat intelligent 'hello world'
- `scripts/` est l'endroit où nous garderons les scripts à déployer et pour interagir avec notre contrat

## Étape 10 : Écrivez votre contrat {#step-10}

Vous vous demandez peut-être quand allons nous enfin écrire du code ??? Eh bien, nous y voilà en cette étape 10.

Ouvrez le projet hello-world dans votre éditeur de code favori (nous apprécions [VSCode](https://code.visualstudio.com/)). Les contrats intelligents sont écrits dans un langage appelé Solidity, qui est celui que nous utiliserons pour écrire notre contrat intelligent HelloWorld.sol.

1.  Naviguez vers le dossier « contracts » et créez un nouveau fichier appelé HelloWord.sol
2.  Ci-dessous un exemple de contrat intelligent Hello World de la fondation Ethereum que nous utiliserons pour ce tutoriel. Copiez et collez le contenu ci-dessous dans votre fichier HelloWorld.sol et assurez-vous de lire les commentaires pour comprendre ce que fait ce contrat :

```solidity
// Specifies the version of Solidity, using semantic versioning.
// Learn more: https://solidity.readthedocs.io/en/v0.5.10/layout-of-source-files.html#pragma
pragma solidity ^0.7.0;

// Defines a contract named `HelloWorld`.
// A contract is a collection of functions and data (its state). Once deployed, a contract resides at a specific address on the Ethereum blockchain. Learn more: https://solidity.readthedocs.io/en/v0.5.10/structure-of-a-contract.html
contract HelloWorld {

   // Declares a state variable `message` of type `string`.
   // State variables are variables whose values are permanently stored in contract storage. The keyword `public` makes variables accessible from outside a contract and creates a function that other contracts or clients can call to access the value.
   string public message;

   // Similar to many class-based object-oriented languages, a constructor is a special function that is only executed upon contract creation.
   // Constructors are used to initialize the contract's data. Learn more:https://solidity.readthedocs.io/en/v0.5.10/contracts.html#constructors
   constructor(string memory initMessage) {

      // Accepts a string argument `initMessage` and sets the value into the contract's `message` storage variable).
      message = initMessage;
   }

   // A public function that accepts a string argument and updates the `message` storage variable.
   function update(string memory newMessage) public {
      message = newMessage;
   }
}
```

Il s'agit d'un contrat intelligent très simple qui stocke un message lors de la création et peut être mis à jour en appelant la fonction `update`.

## Étape 11 : Connectez MetaMask & Alchemy à votre projet {#step-11}

Maintenant que nous avons créé un portefeuille Metamask, un compte Alchemy et écrit notre contrat intelligent, il est temps de connecter les trois.

Chaque transaction envoyée depuis votre portefeuille virtuel nécessite une signature en utilisant votre clé privée unique. Pour donner cette permission à notre programme, nous pouvons stocker en toute sécurité notre clé privée (et la clé API Alchemy) dans un fichier d'environnement.

> Pour en savoir plus sur l'envoi de transactions, consultez [ce tutoriel](/developers/tutorials/sending-transactions-using-web3-and-alchemy/) sur l'envoi de transactions avec web3.

Premièrement, installez le paquet dotenv dans votre dossier de projet :

```
npm install dotenv --save
```

Ensuite, créez un fichier `.env` dans le répertoire racine de notre projet et ajoutez-y votre clé privée MetaMask et l'URL de l'API HTTP Alchemy.

- Suivez [ces instructions](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key) pour exporter votre clé privée
- Voir ci-dessous pour obtenir l'URL de l'API HTTP Alchemy

![obtenir la clé api alchemy](./get-alchemy-api-key.gif)

Copiez l'URL de l'API Alchemy

Votre `.env` devrait ressembler à ceci :

```
API_URL = "https://eth-goerli.alchemyapi.io/v2/your-api-key"
PRIVATE_KEY = "your-metamask-private-key"
```

Pour les relier à notre code, nous ferons référence à ces variables dans notre fichier `hardhat.config.js` à l'étape 13.

<InfoBanner isWarning>
Ne propagez pas le fichier <code>.env</code> ! Veillez à ne jamais partager ou exposer votre fichier <code>.env</code> avec quiconque car vous compromettez vos secrets en le faisant. Si vous utilisez le contrôle de version, ajoutez votre <code>.env</code> à un fichier <a href="https://git-scm.com/docs/gitignore">gitignore</a>.
</InfoBanner>

## Étape 12 : Installez Ethers.js {#step-12-install-ethersjs}

Ethers.js est une bibliothèque qui permet facilement d'interagir et de faire des requêtes pour Ethereum en enveloppant les méthodes [standard JSON-RPC](/developers/docs/apis/json-rpc/) avec des méthodes plus conviviales d'utilisation.

Hardhat facilite grandement l'intégration de [Plugins](https://hardhat.org/plugins/) pour des outils supplémentaires et des fonctionnalités étendues. Nous profiterons du [plugin Ethers](https://hardhat.org/plugins/nomiclabs-hardhat-ethers.html) pour le déploiement de contrats ([Ethers.js](https://github.com/ethers-io/ethers.js/) dispose de quelques méthodes très nettes de déploiement de contrat).

Dans votre dossier de projet, tapez :

```
npm install --save-dev @nomiclabs/hardhat-ethers "ethers@^5.0.0"
```

Nous aurons également besoin d'ethers dans notre `hardhat.config.js` à l'étape suivante.

## Étape 13 : Mettez à jour hardhat.config.js {#step-13-update-hardhatconfigjs}

A ce stade, nous avons ajouté plusieurs dépendances et plugins. Nous devons maintenant mettre à jour `hardhat.config.js` pour que notre projet les reconnaisse.

Mettez à jour votre `hardhat.config.js` pour qu'il ressemble à ceci :

```
require('dotenv').config();

require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;

/**
* @type import('hardhat/config').HardhatUserConfig
*/
module.exports = {
   solidity: "0.7.3",
   defaultNetwork: "goerli",
   networks: {
      hardhat: {},
      goerli: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
}
```

## Étape 14 : Compilons notre contrat {#step-14-compile-our-contracts}

Pour s’assurer à ce stade que tout fonctionne, compilons notre contrat. La tâche `compile` est une des tâches intégrées à hardhat.

À partir de la ligne de commande, exécutez :

```
npx hardhat compile
```

Vous pourriez voir un avertissement du type `SPDX license identifier not provided in source file`, mais nul besoin de vous inquiéter — espérons que tout le reste fonctionne ! Si ce n'est pas le cas, vous pouvez toujours envoyer un message dans le Discord [Alchemy](https://discord.gg/u72VCg3).

## Étape 15 : Rédigeons notre script de déploiement {#step-15-write-our-deploy-scripts}

Maintenant que notre contrat est codé et que notre fichier de configuration est bon, il est temps d’écrire notre script de déploiement pour notre contrat.

Naviguez vers le dossier `scripts/` et créez un nouveau fichier appelé `deploy.js`, en y ajoutant le contenu suivant :

```
async function main() {
   const HelloWorld = await ethers.getContractFactory("HelloWorld");

   // Start deployment, returning a promise that resolves to a contract object
   const hello_world = await HelloWorld.deploy("Hello World!");
   console.log("Contract deployed to address:", hello_world.address);}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
```

Hardhat est incroyable en ce sens qu'il explique clairement ce que fait chacune des lignes de code au travers de son [tutoriel sur les contrats](https://hardhat.org/tutorial/testing-contracts.html#writing-tests). Nous avons repris ces explications ici.

```
const HelloWorld = await ethers.getContractFactory("HelloWorld");
```

Une `ContractFactory` dans ethers.js est une abstraction utilisée pour déployer de nouveaux contrats intelligents. Ainsi, `HelloWorld` est ici une usine pour des exemples de notre contrat Hello world. Lors de l'utilisation du plugin `hardhat-ethers`, les instances `ContractFactory` et `Contract` sont connectées par défaut au premier signataire.

```
const hello_world = await HelloWorld.deploy();
```

Appeler `deploy()` sur un `ContractFactory` va démarrer le déploiement et retourner une `Promise` qui corrige un `Contract`. C'est l'objet qui a une méthode pour chacune de nos fonctions de contrat intelligent.

## Étape 16 : Déployons notre contrat {#step-16-deploy-our-contract}

Nous sommes enfin prêts à déployer notre contrat intelligent ! Naviguez vers la ligne de commande et exécutez :

```
npx hardhat run scripts/deploy.js --network goerli
```

Vous devriez dès lors voir quelque chose comme :

```
Contract deployed to address: 0x6cd7d44516a20882cEa2DE9f205bF401c0d23570
```

Si nous allons sur l'[etherscan Goerli](https://goerli.etherscan.io/) et que nous recherchons l'adresse de notre contrat, nous devrions constater qu'il a été déployé avec succès. La transaction ressemblera à ceci :

![contrat etherscan](./etherscan-contract.png)

L'adresse `From` devrait correspondre à votre adresse de compte Metamask et l'adresse To retournera « Contract Creation », mais si nous cliquons dans la transaction, nous verrons notre adresse de contrat dans le champ `To` :

![transaction etherscan](./etherscan-transaction.png)

Félicitations ! Vous venez de déployer un contrat intelligent sur la chaîne Ethereum 🎉

Pour comprendre ce qui se passe sous le capot, naviguons dans l'onglet Explorer de notre [tableau de bord Alchemy](https://dashboard.alchemyapi.io/explorer). Si vous disposez de plusieurs applications Alchemy, assurez-vous de filtrer par application et sélectionnez « Hello World ». ![explorateur Hello world](./hello-world-explorer.png)

Ici, vous verrez un certain nombre d'appels JSON-RPC que Hardhat/Ethers a réalisés pour nous lorsque nous avons appelé la fonction `.deploy()`. Ici, deux appels importants réalisés sont [`eth_sendRawTransaction`](https://docs.alchemyapi.io/alchemy/documentation/alchemy-api-reference/json-rpc#eth_sendrawtransaction), qui est la demande d'écriture de notre contrat sur la chaîne Goerli, et [`eth_getTransactionByHash`](https://docs.alchemyapi.io/alchemy/documentation/alchemy-api-reference/json-rpc#eth_gettransactionbyhash) qui est une requête pour lire des informations sur notre transaction compte tenu du hachage (un modèle type lors de transactions). Pour en savoir plus sur l'envoi de transactions, consultez ce tutoriel sur [l'envoi de transactions en utilisant Web3](/developers/tutorials/sending-transactions-using-web3-and-alchemy/)

C'est tout pour la première partie de ce tutoriel. Dans la deuxième partie, nous allons [interagir avec notre contrat intelligent](https://docs.alchemyapi.io/alchemy/tutorials/hello-world-smart-contract#part-2-interact-with-your-smart-contract) en mettant à jour notre message initial et, dans la troisième partie, nous [publierons notre contrat intelligent sur Etherscan](https://docs.alchemyapi.io/alchemy/tutorials/hello-world-smart-contract#optional-part-3-publish-your-smart-contract-to-etherscan) afin que tout le monde sache comment interagir avec lui.

**Vous voulez en savoir plus sur Alchemy ? Consultez notre [site web](https://alchemyapi.io/eth). Vous ne voulez manquer aucune mise à jour ? Abonnez-vous à notre newsletter [ici](https://www.alchemyapi.io/newsletter) ! N'oubliez pas également de nous suivre sur [Twitter](https://twitter.com/alchemyplatform) et de rejoindre notre [Discord](https://discord.com/invite/u72VCg3)**.
