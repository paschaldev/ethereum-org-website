---
title: 'Tutoriel pour "dire bonjour au monde" avec hardhat et ethers'
description: Réalisez votre premier projet Waffle avec hardhat et ethers.js
author: "MiZiet"
tags:
  - "waffle"
  - "contrats intelligents"
  - "solidité"
  - "test"
  - "hardhat"
  - "ethers.js"
skill: beginner
lang: fr
published: 2020-10-16
---

Dans ce tutoriel [Waffle](https://ethereum-waffle.readthedocs.io), nous apprendrons comment créer un simple contrat intelligent "Hello world", en utilisant [hardhat](https://hardhat.org/) et [ethers.js](https://docs.ethers.io/v5/). Ensuite nous apprendrons conmment ajouter une nouvelle fonctionnalité à notre contrat intelligent et comment la tester avec « Waffle ».

Commençons par créer un nouveau projet :

```bash
yarn init
```

ou

```bash
npm init
```

et l'installation des paquets nécessaires :

```bash
yarn add -D hardhat @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai
```

ou

```bash
npm install -D hardhat @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai
```

L'étape suivante est la création d'un projet hardhat basique en exécutant `npx hardhat`.

```bash
888    888                      888 888               888
888    888                      888 888               888
888    888                      888 888               888
8888888888  8888b.  888d888 .d88888 88888b.   8888b.  888888
888    888     "88b 888P"  d88" 888 888 "88b     "88b 888
888    888 .d888888 888    888  888 888  888 .d888888 888
888    888 888  888 888    Y88b 888 888  888 888  888 Y88b.
888    888 "Y888888 888     "Y88888 888  888 "Y888888  "Y888

👷 Bienvenue dans Hardhat v2.0.3 👷‍

? Que voulez vous faire ? …
❯ Create a sample project
Create an empty hardhat.config.js
Quit
```

Sélectionnez `Create a sample project`

Notre structure de projet devrait ressembler à ceci :

```
MyWaffleProject
├── contracts
│   └── Greeter.sol
├── node_modules
├── scripts
│   └── sample-script.js
├── test
│   └── sample-test.js
├── .gitattributs
├── .gitignore
├── hardhat.config.js
└── package.json
```

### Maintenant, parlons de certains de ces fichiers : {#now-lets-talk}

- Greeter.sol - notre contrat intelligent écrit en solidity ;

```solidity
contract Greeter {
string greeting;

constructor(string memory _greeting) public {
console.log("Deploying a Greeter with greeting:", _greeting);
greeting = _greeting;
}

function greet() public view returns (string memory) {
return greeting;
}

function setGreeting(string memory _greeting) public {
console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
greeting = _greeting;
}
}
```

Notre contrat intelligent peut être divisé en trois parties :

1. constructeur - où nous déclarons une variable de type string appelée `greeting`,
2. function greet - une fonction qui retournera la valeur `greeting` lorsqu'elle est appelée,
3. function setGreeting - une fonction qui nous permet de changer la valeur `greeting`.

- sample-test.js - notre fichier de tests

```js
describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter")
    const greeter = await Greeter.deploy("Hello, world!")

    await greeter.deployed()
    expect(await greeter.greet()).to.equal("Hello, world!")

    await greeter.setGreeting("Hola, mundo!")
    expect(await greeter.greet()).to.equal("Hola, mundo!")
  })
})
```

### La prochaîne étape consiste à compiler notre contrat et à exécuter nos tests : {#compiling-and-testing}

Les tests Waffle utilisent Mocha (un framework de test) avec Chai (une bibliothèque d'assertions). Tout ce que vous avez à faire est d'exécuter `npx hardhat test` et d'attendre que le message suivant apparaisse.

```bash
✓ Doit renvoyer le nouveau message de bienvenue une fois qu'il a changé
```

### Tout semble bien pour l'instant, ajoutons une certaine complexité à notre projet <Emoji text=":slightly_smiling_face:" size={1}/> {#adding-complexity}

Imaginez une situation où quelqu'un ajoute une chaîne vide comme un salut. Ce ne serait pas un accueil chaleureux, n'est-ce pas ?  
Veillons à ce que cela ne se produise pas :

Nous voulons utiliser la version de solidity `revert` lorsque quelqu'un passe une chaîne vide. Une bonne chose est que nous pouvons facilement tester cette fonctionnalité avec la correspondance chai de Waffle `to.be.revertedWith()`.

```js
it("Should revert when passing an empty string", async () => {
  const Greeter = await ethers.getContractFactory("Greeter")
  const greeter = await Greeter.deploy("Hello, world!")

  wait greeter.deployed()
  await expect(greeter.setGreeting("")).to.be.revertedWith(
    "Greeting should not be empty"
  )
})
```

Il semblerait que notre nouveau test n'ait pas réussi :

```bash
Deploying a Greeter with greeting: Hello, world!
Changing greeting from 'Hello, world!' to 'Hola, mundo!'
    ✓ Should return the new greeting once it's changed (1514ms)
Deploying a Greeter with greeting: Hello, world!
Changing greeting from 'Hello, world!' to ''
    1) Should revert when passing an empty string


  1 passing (2s)
  1 failing
```

Implémentons cette fonctionnalité dans notre contrat intelligent :

```solidity
require(bytes(_greeting).length > 0, "Greeting should not be empty");
```

Maintenant, notre fonction setGreeting ressemble à ceci :

```solidity
function setGreeting(string memory _greeting) public {
require(bytes(_greeting).length > 0, "Greeting should not be empty");
console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
greeting = _greeting;
}
```

Exécutons les tests à nouveau :

```bash
✓ Should return the new greeting once it's changed (1467ms)
✓ Should revert when passing an empty string (276ms)

2 passing (2s)
```

Félicitations ! Vous y êtes arrivé :)

### Conclusion {#conclusion}

Nous avons réalisé un projet simple avec Waffle, Hardhat et ethers.js. Nous avons appris comment mettre en place un projet, ajouter un test et implémenter de nouvelles fonctionnalités.

Pour plus d'excellents correspondants chai pour tester vos contrats intelligents, consultez la [documentation officielle de Waffle](https://ethereum-waffle.readthedocs.io/en/latest/matchers.html).
