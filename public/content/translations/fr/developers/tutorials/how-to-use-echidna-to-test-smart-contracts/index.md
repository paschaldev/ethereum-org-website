---
title: Comment utiliser Echidna pour tester les contrats intelligents
description: Comment utiliser Echidna pour tester automatiquement les contrats intelligents
author: "Trailofbits"
lang: fr
tags:
  - "solidity"
  - "contrats intelligents"
  - "sécurité"
  - "test"
  - "fuzzing"
skill: advanced
published: 2020-04-10
source: Créer des contrats sécurisés
sourceUrl: https://github.com/crytic/building-secure-contracts/tree/master/program-analysis/echidna
---

## Installation {#installation}

Echidna peut être installé via Docker ou en utilisant un binaire pré-compilé.

### Echidna via Docker {#echidna-through-docker}

```bash
docker pull trailofbits/eth-security-toolbox
docker run -it -v "$PWD":/home/training trailofbits/eth-security-toolbox
```

_La dernière commande exécute eth-security-toolbox dans un docker qui a accès à votre répertoire actuel. Vous pouvez changer les fichiers depuis votre invite, et exécuter les outils sur les fichiers depuis le docker_

Dans docker, exécutez :

```bash
solc-select 0.5.11
cd /home/training
```

### Binaire {#binary}

[https://github.com/crytic/echidna/releases/tag/v1.4.0.0](https://github.com/crytic/echidna/releases/tag/v1.4.0.0)

## Introduction au fuzzing basé sur les propriétés {#introduction-to-property-based-fuzzing}

Echidna est un fuzzer basé sur les propriétés que nous avons décrit dans nos blogs précédents ([1](https://blog.trailofbits.com/2018/03/09/echidna-a-smart-fuzzer-for-ethereum/), [2](https://blog.trailofbits.com/2018/05/03/state-machine-testing-with-echidna/), [3](https://blog.trailofbits.com/2020/03/30/an-echidna-for-all-seasons/)).

### Fuzzing (test à données aléatoires) {#fuzzing}

Le [Fuzzing](https://wikipedia.org/wiki/Fuzzing) est une technique bien connue dans la communauté concernée par la sécurité. Il consiste à générer des entrées plus ou moins aléatoires pour trouver des bogues dans le programme. Les fuzzers pour les logiciels traditionnels (comme [AFL](http://lcamtuf.coredump.cx/afl/) ou [LibFuzzer](https://llvm.org/docs/LibFuzzer.html)) sont connus pour être des outils efficaces quant au repérage des bogues.

Au-delà de la génération purement aléatoire d'entrées, il existe de nombreuse techniques et stratégies pour générer de bonnes contributions, y compris :

- Obtenez des commentaires en retour de chaque exécution et la génération de guides en les utilisant. Par exemple, si une entrée nouvellement générée mène à la découverte d'un nouveau chemin, il peut y avoir un sens à générer de nouvelles entrées s'en rapprochant.
- Génération d'entrée dans le respect d'une contrainte structurelle. Par exemple, si votre entrée contient un en-tête avec une somme de contrôle, il sera logique de laisser le fuzzer générer une entrée validant la somme de contrôle.
- Utiliser des entrées connues pour générer de nouvelles entrées : si vous avez accès à un grand jeu de données d'entrée valide, votre fuzzer peut générer de nouvelles entrées à partir d'elles, plutôt que de faire partir de zéro sa génération. Elles sont généralement appelées _seeds_.

### Fuzzing orienté propriétés {#property-based-fuzzing}

Echidna appartient à une famille spécifique de fuzzer : le fuzzing basé sur des propriétés fortement inspirées par [QuickCheck](https://wikipedia.org/wiki/QuickCheck). Contrairement au fuzzer classique qui va essayer de trouver des plantages, Echidna essayera de casser les invariants définis par l'utilisateur.

Dans les contrats intelligents, les invariants sont des fonctions Solidity qui peuvent représenter tout état incorrect ou non valide que le contrat peut atteindre, y compris :

- Contrôle d'accès incorrect : l'attaquant est devenu le propriétaire du contrat.
- Machine d'état incorrecte : les jetons peuvent être transférés pendant que le contrat est suspendu.
- Arithmétique incorrecte : l'utilisateur peut faire déborder son solde et obtenir des jetons gratuits en illimités.

### Tester une propriété avec Echidna {#testing-a-property-with-echidna}

Nous verrons comment tester un contrat intelligent avec Echidna. La cible est le contrat intelligent suivant [`token.sol`](https://github.com/crytic/building-secure-contracts/blob/master/program-analysis/echidna/example/token.sol) :

```solidity
contract Token{
  mapping(address => uint) public balances;
  function airdrop() public{
      balances[msg.sender] = 1000;
  }
  function consume() public{
      require(balances[msg.sender]>0);
      balances[msg.sender] -= 1;
  }
  function backdoor() public{
      balances[msg.sender] += 1;
  }
}
```

Nous prendrons comme hypothèse que ce jeton doit avoir les propriétés suivantes :

- N'importe qui peut avoir au maximum 1000 jetons
- Le jeton ne peut pas être transféré (ce n'est pas un jeton ERC20)

### Écrire une propriété {#write-a-property}

Les propriétés Echidna sont des fonctions Solidity. Une propriété doit :

- Ne contenir aucun argument
- Renvoyer `true` si elle a réussi
- Avoir son nom commençant par `echidna`

Echidna va :

- Générer automatiquement des transactions arbitraires pour tester la propriété.
- Signaler toute transaction menant à une propriété pour renvoyer `false` ou retourner une erreur.
- Ignorer l'effet secondaire lors de l'appel d'une propriété (c'est-à-dire si la propriété change une variable d'état, elle est rejetée après le test)

La propriété suivante vérifie que l'appelant ne dispose pas de plus de 1000 jetons :

```solidity
function echidna_balance_under_1000() public view returns(bool){
      return balances[msg.sender] <= 1000;
}
```

Utilisez l'héritage pour séparer votre contrat de vos propriétés :

```solidity
contract TestToken is Token{
      function echidna_balance_under_1000() public view returns(bool){
            return balances[msg.sender] <= 1000;
      }
  }
```

[`token.sol`](https://github.com/crytic/building-secure-contracts/blob/master/program-analysis/echidna/example/token.sol) implémente la propriété et hérite du jeton.

### Démarrer un contrat {#initiate-a-contract}

Echidna a besoin d'un [constructeur](/developers/docs/smart-contracts/anatomy/#constructor-functions) sans argument. Si votre contrat nécessite une initialisation spécifique, vous devez le faire dans le constructeur.

Il existe quelques adresses spécifiques dans Echidna :

- `0x00a329c0648769A73afAc7F9381E08FB43dBEA7` qui appelle le constructeur.
- `0x10000`, `0x20000`, et `0x00a329C0648769a73afAC7F9381e08fb43DBEA70` qui appellent aléatoirement les autres fonctions.

Nous n'avons pas besoin d'initialisation particulière dans notre exemple actuel, de fait, notre constructeur est vide.

### Exécuter Echidna {#run-echidna}

Echidna se lance avec :

```bash
echidna-test contract.sol
```

Si contract.sol contient plusieurs contrats, vous pouvez spécifier la cible :

```bash
echidna-test contract.sol --contract MyContract
```

### Résumé : Tester une propriété {#summary-testing-a-property}

Ce qui suit permet de résumer le lancement d'Echidna pour notre exemple :

```solidity
contract TestToken is Token{
    constructor() public {}
        function echidna_balance_under_1000() public view returns(bool){
          return balances[msg.sender] <= 1000;
        }
  }
```

```bash
echidna-test testtoken.sol --contract TestToken
...

echidna_balance_under_1000: failed!💥
  Call sequence, shrinking (1205/5000):
    airdrop()
    backdoor()

...
```

Echidna a trouvé que la propriété sera compromise si `backdoor` est appelé.

## Fonctions de filtrage à appeler lors d'une campagne de fuzzing {#filtering-functions-to-call-during-a-fuzzing-campaign}

Nous verrons comment filtrer les fonctions à fuzzer. La cible est le contrat intelligent suivant :

```solidity
contract C {
  bool state1 = false;
  bool state2 = false;
  bool state3 = false;
  bool state4 = false;

  function f(uint x) public {
    require(x == 12);
    state1 = true;
  }

  function g(uint x) public {
    require(state1);
    require(x == 8);
    state2 = true;
  }

  function h(uint x) public {
    require(state2);
    require(x == 42);
    state3 = true;
  }

 function i() public {
    require(state3);
    state4 = true;
  }

  function reset1() public {
    state1 = false;
    state2 = false;
    state3 = false;
    return;
  }

  function reset2() public {
    state1 = false;
    state2 = false;
    state3 = false;
    return;
  }

  function echidna_state4() public returns (bool) {
    return (!state4);
  }
}
```

Ce petit exemple oblige Echidna à trouver une certaine séquence de transactions pour modifier une variable d'état. C'est une opération compliquée pour un fuzzer (il est recommandé d'utiliser un outil d'exécution symbolique comme [Manticore](https://github.com/trailofbits/manticore)). Nous pouvons exécuter Echidna pour vérifier ceci :

```bash
echidna-test multi.sol
...
echidna_state4: passed! 🎉
Seed: -3684648582249875403
```

### Fonctions de filtrage {#filtering-functions}

Echidna a du mal à trouver la séquence correcte pour tester ce contrat, car les deux fonctions de réinitialisation (`reset1` et `reset2`) mettront toutes les variables d'état sur `false`. Cependant, nous pouvons utiliser une fonctionnalité spéciale d'Echidna pour mettre sur liste noire la fonction reset ou pour ne mettre sur liste blanche que les fonctions `f`, `g`, `h` et `i`.

Pour bloquer les fonctions, nous pouvons utiliser ce fichier de configuration :

```yaml
filterBlacklist: true
filterFunctions: ["reset1", "reset2"]
```

Une autre approche des fonctions de filtrage est de lister les fonctions dans une liste blanche. Pour cela, nous pouvons utiliser ce fichier de configuration :

```yaml
filterBlacklist: false
filterFunctions: ["f", "g", "h", "i"]
```

- `filterBlacklist` est sur `true` par défaut.
- Le filtrage sera effectué uniquement par le nom (sans les paramètres). Si vous avez `f()` et `f(uint256)`, le filtre `"f"` correspondra aux deux fonctions.

### Exécuter Echidna {#run-echidna-1}

Exécuter Echidna avec un fichier de configuration `blacklist.yaml` :

```bash
echidna-test multi.sol --config blacklist.yaml
...
echidna_state4: failed!💥
  Call sequence:
    f(12)
    g(8)
    h(42)
    i()
```

Echidna trouvera presque immédiatement la séquence des transactions pour falsifier la propriété.

### Résumé : fonctions de filtrage {#summary-filtering-functions}

Echidna peut soit mettre sur liste noire, soit mettre sur liste blanche des fonctions à appeler pendant une campagne de fuzzing en utilisant :

```yaml
filterBlacklist: true
filterFunctions: ["f1", "f2", "f3"]
```

```bash
echidna-test contract.sol --config config.yaml
...
```

Echidna débute une campagne de fuzzing soit en ajoutant `f1`, `f2` et `f3` sur la liste noire, ou en les appelant uniquement selon la valeur booléenne définie dans `filterBlacklist`.

## Comment tester les assertions de Solidity avec Echidna {#how-to-test-soliditys-assert-with-echidna}

Dans ce court tutoriel, nous allons montrer comment utiliser Echidna pour tester la vérification des assertions dans les contrats. Supposons que nous ayons un contrat comme celui-ci :

```solidity
contract Incrementor {
  uint private counter = 2**200;

  function inc(uint val) public returns (uint){
    uint tmp = counter;
    counter += val;
    // tmp <= counter
    return (counter - tmp);
  }
}
```

### Écrire une assertion {#write-an-assertion}

Nous voulons nous assurer que `tmp` est inférieur ou égal à `counter` après avoir retourné sa différence. Nous pourrions écrire une propriété Echidna, mais nous devrons stocker la valeur `tmp` quelque part. Au lieu de cela, nous pourrions utiliser une assertion comme celle-ci :

```solidity
contract Incrementor {
  uint private counter = 2**200;

  function inc(uint val) public returns (uint){
    uint tmp = counter;
    counter += val;
    assert (tmp <= counter);
    return (counter - tmp);
  }
}
```

### Exécuter Echidna {#run-echidna-2}

Pour activer le test d'échec à l'assertion, créez un [fichier de configuration Echidna](https://github.com/crytic/echidna/wiki/Config) `config.yaml` :

```yaml
checkAsserts: true
```

Lorsque nous exécutons ce contrat sur Echidna, nous obtenons les résultats escomptés :

```bash
echidna-test assert.sol --config config.yaml
Analyzing contract: assert.sol:Incrementor
assertion in inc: failed!💥
  Call sequence, shrinking (2596/5000):
    inc(21711016731996786641919559689128982722488122124807605757398297001483711807488)
    inc(7237005577332262213973186563042994240829374041602535252466099000494570602496)
    inc(86844066927987146567678238756515930889952488499230423029593188005934847229952)

Seed: 1806480648350826486
```

Comme vous pouvez le voir, Echidna signale un échec d'assertion dans la fonction `inc`. L'ajout de plus d'une assertion par fonction est possible, mais Echidna ne peut pas dire quelle assertion a échoué.

### Quand et comment utiliser les assertions {#when-and-how-use-assertions}

Les assertions peuvent être utilisées comme alternatives aux propriétés explicites, spécialement si les conditions à vérifier sont directement liées à l'utilisation correcte de certaines opérations `f`. Ajouter des assertions après certains codes garantira que la vérification se produira immédiatement après son exécution :

```solidity
function f(..) public {
    // some complex code
    ...
    assert (condition);
    ...
}

```

Au contraire, utiliser une propriété Echidna explicite va exécuter aléatoirement des transactions et il n'y a pas de moyen facile de forcer le moment exact où elle sera vérifiée. Il est toujours possible de faire ce contournement :

```solidity
function echidna_assert_after_f() public returns (bool) {
    f(..);
    return(condition);
}
```

Cependant, il existe quelques problèmes :

- Il échoue si `f` est déclaré comme `internal` ou `external`.
- Il n'est pas clair de savoir quels arguments doivent être utilisés pour appeler `f`.
- Si `f` s'annule, la propriété échouera.

En général, nous recommandons de suivre [la recommandation de John Regehr](https://blog.regehr.org/archives/1091) sur la façon d'utiliser les assertions :

- Ne forcez aucun effet secondaire lors de la vérification de l'assertion. Par exemple : `assert(ChangeStateAndReturn() == 1)`
- Ne revendiquez pas des déclarations évidentes. Par exemple `assert(var >= 0)` où `var` est déclaré comme `uint`.

Enfin, s'il vous plaît **n'utilisez pas** `require` au lieu de `assert`, car dans ce cas, Echidna ne sera pas en mesure de le détecter (mais le contrat sera annulé de toute façon).

### Résumé : vérification d'assertion {#summary-assertion-checking}

Ce qui suit permet de résumer le lancement d'Echidna pour notre exemple :

```solidity
contract Incrementor {
  uint private counter = 2**200;

  function inc(uint val) public returns (uint){
    uint tmp = counter;
    counter += val;
    assert (tmp <= counter);
    return (counter - tmp);
  }
}
```

```bash
echidna-test assert.sol --config config.yaml
Analyzing contract: assert.sol:Incrementor
assertion in inc: failed!💥
  Call sequence, shrinking (2596/5000):
    inc(21711016731996786641919559689128982722488122124807605757398297001483711807488)
    inc(7237005577332262213973186563042994240829374041602535252466099000494570602496)
    inc(86844066927987146567678238756515930889952488499230423029593188005934847229952)

Seed: 1806480648350826486
```

Echidna a trouvé que l'assertion dans `inc` peut échouer si cette fonction est appelée plusieurs fois avec de grands arguments.

## Collecte et modification d'un corpus Echidna {#collecting-and-modifying-an-echidna-corpus}

Nous verrons comment collecter et utiliser un corpus de transactions avec Echidna. La cible est le contrat intelligent suivant [`magic.sol`](https://github.com/crytic/building-secure-contracts/blob/master/program-analysis/echidna/example/magic.sol) :

```solidity
contract C {
  bool value_found = false;
  function magic(uint magic_1, uint magic_2, uint magic_3, uint magic_4) public {
    require(magic_1 == 42);
    require(magic_2 == 129);
    require(magic_3 == magic_4+333);
    value_found = true;
    return;
  }

  function echidna_magic_values() public returns (bool) {
    return !value_found;
  }

}
```

Ce simple exemple oblige Echidna à trouver certaines valeurs pour changer une variable d'état. C'est une opération compliquée pour un fuzzer (il est recommandé d'utiliser un outil d'exécution symbolique comme [Manticore](https://github.com/trailofbits/manticore)). Nous pouvons exécuter Echidna pour vérifier ceci :

```bash
echidna-test magic.sol
...

echidna_magic_values: passed! 🎉

Seed: 2221503356319272685
```

Cependant, nous pouvons toujours utiliser Echidna pour collecter le corpus lors de l'exécution de cette campagne de fuzzing.

### Récupération d'un corpus {#collecting-a-corpus}

Pour activer la collecte de corpus, créez un répertoire de corpus :

```bash
mkdir corpus-magic
```

Et un [fichier de configuration Echidna](https://github.com/crytic/echidna/wiki/Config) `config.yaml` :

```yaml
coverage: true
corpusDir: "corpus-magic"
```

Maintenant nous pouvons exécuter notre outil et vérifier le corpus collecté :

```bash
echidna-test magic.sol --config config.yaml
```

Echidna ne peut toujours pas trouver les bonnes valeurs magiques, mais nous pouvons jeter un œil sur le corpus qu'il a collecté. Par exemple, l'un de ces fichiers était :

```json
[
  {
    "_gas'": "0xffffffff",
    "_delay": ["0x13647", "0xccf6"],
    "_src": "00a329c0648769a73afac7f9381e08fb43dbea70",
    "_dst": "00a329c0648769a73afac7f9381e08fb43dbea72",
    "_value": "0x0",
    "_call": {
      "tag": "SolCall",
      "contents": [
        "magic",
        [
          {
            "contents": [
              256,
              "93723985220345906694500679277863898678726808528711107336895287282192244575836"
            ],
            "tag": "AbiUInt"
          },
          {
            "contents": [256, "334"],
            "tag": "AbiUInt"
          },
          {
            "contents": [
              256,
              "68093943901352437066264791224433559271778087297543421781073458233697135179558"
            ],
            "tag": "AbiUInt"
          },
          {
            "tag": "AbiUInt",
            "contents": [256, "332"]
          }
        ]
      ]
    },
    "_gasprice'": "0xa904461f1"
  }
]
```

Évidemment, cette entrée ne déclenchera pas l'échec de notre propriété. Cependant, au cours de la prochaine étape, nous verrons comment la modifier en ce sens.

### Alimenter un corpus {#seeding-a-corpus}

Echidna a besoin d'aide pour gérer la fonction `magic`. Nous allons copier et modifier l'entrée pour utiliser les paramètres appropriés :

```bash
cp corpus/2712688662897926208.txt corpus/new.txt
```

Nous allons modifier `new.txt` pour appeler `magic(42,129,333,0)`. Maintenant, nous pouvons relancer Echidna :

```bash
echidna-test magic.sol --config config.yaml
...
echidna_magic_values: failed!💥
  Call sequence:
    magic(42,129,333,0)


Unique instructions: 142
Unique codehashes: 1
Seed: -7293830866560616537

```

Cette fois-ci, il a conclu immédiatement que la propriété a été compromise.

## Recherche de transactions à forte consommation de gaz {#finding-transactions-with-high-gas-consumption}

Nous verrons comment trouver avec Echida les transactions à forte consommation de gaz. La cible est le contrat intelligent suivant :

```solidity
contract C {
  uint state;

  function expensive(uint8 times) internal {
    for(uint8 i=0; i < times; i++)
      state = state + i;
  }

  function f(uint x, uint y, uint8 times) public {
    if (x == 42 && y == 123)
      expensive(times);
    else
      state = 0;
  }

  function echidna_test() public returns (bool) {
    return true;
  }

}
```

Ici `expensive` peut avoir une grande consommation de gaz.

Actuellement, Echidna a toujours besoin d'une propriété pour tester : ici `echidna_test` retourne toujours `true`. Nous pouvons exécuter Echidna pour vérifier ceci :

```
echidna-test gas.sol
...
echidna_test: passed! 🎉

Seed: 2320549945714142710
```

### Mesurer la consommation de gaz {#measuring-gas-consumption}

Pour activer avec Echidna la consommation de gaz, créez un fichier de configuration `config.yaml` :

```yaml
estimateGas: true
```

Dans cet exemple, nous allons également réduire la taille de la séquence de transaction pour faciliter la compréhension des résultats :

```yaml
seqLen: 2
estimateGas: true
```

### Run Echidna {#run-echidna-3}

Une fois que nous avons créé le fichier de configuration, nous pouvons exécuter Echidna comme ceci :

```bash
echidna-test gas.sol --config config.yaml
...
echidna_test: passed! 🎉

f used a maximum of 1333608 gas
  Call sequence:
    f(42,123,249) Gas price: 0x10d5733f0a Time delay: 0x495e5 Block delay: 0x88b2

Unique instructions: 157
Unique codehashes: 1
Seed: -325611019680165325

```

- Le gaz affiché est une estimation fournie par [HEVM](https://github.com/dapphub/dapptools/tree/master/src/hevm#hevm-).

### Filtrer les appels de réduction de gaz {#filtering-out-gas-reducing-calls}

Le tutoriel ci-dessus sur les **fonctions de filtrage à appeler lors d'une campagne de fuzzing** montre comment supprimer certaines fonctions de votre test.  
Cela peut être critique pour obtenir une estimation précise de gaz. Prenons l'exemple suivant :

```solidity
contract C {
  address [] addrs;
  function push(address a) public {
    addrs.push(a);
  }
  function pop() public {
    addrs.pop();
  }
  function clear() public{
    addrs.length = 0;
  }
  function check() public{
    for(uint256 i = 0; i < addrs.length; i++)
      for(uint256 j = i+1; j < addrs.length; j++)
        if (addrs[i] == addrs[j])
          addrs[j] = address(0x0);
  }
  function echidna_test() public returns (bool) {
      return true;
  }
}
```

Si Echidna peut appeler toutes les fonctions, il ne trouvera pas facilement les transactions avec un coût de gaz élevé :

```
echidna-test pushpop.sol --config config.yaml
...
pop used a maximum of 10746 gas
...
check used a maximum of 23730 gas
...
clear used a maximum of 35916 gas
...
push used a maximum of 40839 gas
```

C'est parce que le coût dépend de la taille des `addrs` et que les appels aléatoires ont tendance à laisser le tableau presque vide. Mettre sur liste noire `pop` et `clear` nous donne de bien meilleurs résultats :

```yaml
filterBlacklist: true
filterFunctions: ["pop", "clear"]
```

```
echidna-test pushpop.sol --config config.yaml
...
push used a maximum of 40839 gas
...
check used a maximum of 1484472 gas
```

### Résumé : trouver des transactions avec une forte consommation de gaz {#summary-finding-transactions-with-high-gas-consumption}

Echidna peut trouver des transactions avec une forte consommation de gaz en utilisant l'option de configuration `estimateGas` :

```yaml
estimateGas: true
```

```bash
echidna-test contract.sol --config config.yaml
...
```

Echidna rapportera une séquence avec la consommation maximale de gaz pour chaque fonction, une fois que la campagne de fuzzing est terminée.
