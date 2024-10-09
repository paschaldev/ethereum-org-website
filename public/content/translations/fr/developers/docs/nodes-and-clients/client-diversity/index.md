---
title: Diversité des clients
description: Une explication de haut niveau sur l'importance de la diversité des clients Ethereum.
lang: fr
sidebarDepth: 2
---

Le comportement d'un nœud Ethereum est contrôlé par le logiciel client qu'il exécute. Il existe plusieurs clients Ethereum de niveau production, chacun développé et mis à jour dans différentes langues par des équipes séparées. Les clients sont créés selon une spécification commune qui garantit que les clients communiquent entre eux de manière transparente, ont les mêmes fonctionnalités et offrent une expérience utilisateur équivalente. Cependant, pour le moment, la répartition des clients entre les nœuds n'est pas assez équilibrée pour réaliser cette fortification du réseau à son plein potentiel. Idéalement, les utilisateurs se divisent à peu près équitablement entre les différents clients pour apporter le plus de diversité possible au réseau.

## Prérequis {#prerequisites}

Si vous ne maîtrisez pas déjà ce que sont les nœuds et les clients, consultez la page [nœuds et clients](/developers/docs/nodes-and-clients/). [Exécution](/glossary/#execution-layer) et [couches de consensus](/glossary/#consensus-layer) sont définies dans le glossaire.

## Pourquoi existe-t-il différents clients ? {#why-multiple-clients}

De multiples clients, développés et mis à jour de manière indépendante, existent parce que la diversité des clients rend le réseau plus résistant aux attaques et aux bogues. La multitude de clients est une force propre à Ethereum - d'autres blockchains dépendent de l'infaillibilité d'un seul client. Cependant, il ne suffit pas de disposer de plusieurs clients, ceux-ci doivent être adoptés par la communauté et la totalité des nœuds actifs répartis relativement égale entre eux.

## Pourquoi la diversité des clients est-elle importante ? {#client-diversity-importance}

Disposer de nombreux clients développés et mis à jour de façon indépendante est vital pour la bonne santé d'un réseau décentralisé. Voyons pourquoi.

### Bogues {#bugs}

Un bogue dans un client individualisé est moins risqué pour le réseau lorsqu'il représente une minorité de nœuds Ethereum. Lorsque les nœuds sont répartis de façon à peu près égale entre de nombreux clients, la probabilité que la plupart des clients souffrent d'un problème commun est faible et, par conséquent, le réseau est plus robuste.

### Résistance aux attaques {#resilience}

La diversité des clients offre également une résilience aux attaques. Par exemple, une attaque qui viserait [un client spécifique](https://twitter.com/vdWijden/status/1437712249926393858) sur une branche particulière de la chaîne a peu de chance de réussir parce que les autres clients sont peu susceptibles d'être exploités de la même manière et que la chaîne canonique reste intacte. La faible diversité des clients augmente le risque associé à un piratage sur le client dominant. La diversité des clients s'est déjà avérée être une défense efficace contre les attaques malveillantes sur le réseau, par exemple l'attaque de Shanghai par déni de service en 2016 a pu être menée parce que les attaquants ont réussi à tromper le client dominant (Geth) en exécutant une opération sur disque i/o des dizaines de milliers de fois par bloc. Puisque des clients alternatifs étaient également en ligne et ne partageaient pas la vulnérabilité, Ethereum a pu résister à l'attaque et continuer à fonctionner pendant que la vulnérabilité de Geth était corrigée.

### Finalité de la preuve d'enjeu {#finality}

Un bug dans un client de consensus avec plus de 33 % des nœuds Ethereum pourrait empêcher la finalisation couche de consensus, de sorte que les utilisateurs ne pourraient pas avoir confiance dans le fait que les transactions ne seraient pas annulées ou modifiées à un moment donné. Cela serait problématique pour de nombreuses applications basées sur Ethereum, en particulier pour la DeFi.

<Emoji text="🚨" className="mr-4" /> Pire encore, un bogue critique dans un client avec une majorité des deux tiers pourrait causer <a href="https://www.symphonious.net/2021/09/23/what-happens-if-beacon-chain-consensus-fails/" target="_blank">le fractionnement et la finalisation incorrecte de la chaîne</a>, entraînant le blocage d'un grand nombre de validateurs sur une chaîne invalide. S'ils souhaitent rejoindre la bonne chaîne, ces validateurs sont confrontés à un délestage ou à un retrait volontaire et à une réactivation lente et coûteuse. La magnitude d'un délestage est proportionnelle au nombre de nœuds impliqués avec une majorité des deux tiers sanctionnée au maximum (32 ETH).

Bien que ces scénarios soient peu probables, l’écosystème Ethereum peut atténuer leurs risques en éliminant la distribution des clients sur les nœuds actifs. Idéalement, aucun client de consensus ne devrait pouvoir atteindre 33 % du total des nœuds.

### Partager les responsabilités {#responsibility}

Le fait d'avoir des clients majoritaires a aussi un coût humain. Il impose une pression et une responsabilité excessives à une petite équipe de développement. Plus la diversité des clients est limitée, plus la charge de responsabilité est importante pour les développeurs qui maintiennent le client majoritaire. La répartition de cette responsabilité entre plusieurs équipes est bénéfique pour la bonne santé du réseau de nœuds d'Ethereum et de son réseau d'utilisateurs.

## Diversité actuelle de clients {#current-client-diversity}

![Graphique Pie montrant la diversité des clients](./client-diversity.png) _Schéma issu des données de [ethernodes.org](https://ethernodes.org) et [clientdiversity.org](https://clientdiversity.org/)_

Les deux diagrammes ci-dessus montrent des instantanés de la diversité actuelle de clients pour l'exécution et les couches de consensus (au moment de l'écriture en janvier 2022). La couche d'exécution est dominée par [Geth](https://geth.ethereum.org/), avec [Open Ethereum](https://openethereum.github.io/) en seconde place, [Erigon](https://github.com/ledgerwatch/erigon) troisième et [Nethermind](https://nethermind.io/) quatrième, puis d'autres logiciels représentant moins de 1 % du réseau. Le client le plus couramment utilisé sur la couche de consensus - [Prysm](https://prysmaticlabs.com/#projects) - n'est pas aussi dominant que Geth mais représente toujours plus de 60 % du réseau. [Lighthouse](https://lighthouse.sigmaprime.io/) et [Teku](https://consensys.net/knowledge-base/ethereum-2/teku/) représentent respectivement ~20 % et ~14 %, et les autres clients ne sont que rarement utilisés.

Les données de la couche d'exécution ont été obtenues à partir de [Ethernodes](https://ethernodes.org) le 23/01/2022. Les données pour les clients de consensus ont été obtenues à partir de [Michael Sproul](https://github.com/sigp/blockprint). Les données du client du consensus sont plus difficiles à obtenir dans la mesure où les clients de la couche de consensus ne disposent pas toujours de traces claires susceptibles d'être utilisées pour les identifier. Les données ont été générées à l'aide d'un algorithme de classification qui, parfois, induit en erreur certains des clients minoritaires (voir [ici](https://twitter.com/sproulM_/status/1440512518242197516) pour plus de détails). Dans le diagramme ci-dessus, ces classifications ambiguës sont traitées avec une étiquette de type soit/soit (par exemple Nimbus/Teku). Néanmoins, il est clair que la majorité du réseau utilise Prysm. Les données constituent un instantané sur un ensemble fixe de blocs (dans ce cas, les blocs de la chaîne phare pour les emplacements 2048001 à 2164916) et la domination de Prysm a parfois même été plus élevée, dépassant les 68 %. Bien que ce ne soient que des instantanés, les valeurs du diagramme fournissent un bonne vision générale de l'état actuel de la diversité des clients.

Des données mises à jour concernant la diversité des clients pour la couche de consensus sont maintenant disponibles sur [clientdiversity.org](https://clientdiversity.org/).

## Couche d'exécution {#execution-layer}

Jusqu’à présent, la conversation autour de la diversité des clients s’est principalement concentrée sur la couche de consensus. Cependant, le client d'exécution [Geth](https://geth.ethereum.org) compte actuellement pour environ 85 % de l'ensemble de tous les nœuds. Ce pourcentage est problématique pour les mêmes raisons que pour les clients de consensus. Par exemple, un bogue dans Geth affectant la gestion des transactions ou la construction de blocs d'exécution peut conduire les clients de consensus à finaliser des transactions problématiques ou avec des bogues. Ainsi, Ethereum serait plus sain avec une distribution plus uniforme des clients d'exécution, idéalement sans client représentant plus de 33 % du réseau.

## Utiliser un client minoritaire {#use-minority-client}

Pour résoudre le problème de la diversité des clients, il ne suffit pas que les utilisateurs individuels choisissent des clients minoritaires : il faut aussi que les pools de mineurs/validateurs et les institutions comme les principales dapps et les plateformes d'échange changent de clients. Cependant, tous les utilisateurs peuvent collaborer pour corriger le déséquilibre actuel et normaliser l'utilisation de tous les logiciels Ethereum disponibles. Après La Fusion, tous les opérateurs de nœuds seront requis pour exécuter un client d'exécution et un client de consensus. Le choix des combinaisons de clients suggérées ci-dessous contribuera à accroître la diversité des clients.

### Clients d'exécution {#execution-clients}

[Besu](https://www.hyperledger.org/use/besu)

[Nethermind](https://downloads.nethermind.io/)

[Erigon](https://github.com/ledgerwatch/erigon)

[Go-Ethereum](https://geth.ethereum.org/)

### Clients de consensus {#consensus-clients}

[Nimbus](https://nimbus.team/)

[Lighthouse](https://github.com/sigp/lighthouse)

[Teku](https://consensys.net/knowledge-base/ethereum-2/teku/)

[Lodestar](https://github.com/ChainSafe/lodestar)

[Prysm](https://docs.prylabs.network/docs/getting-started)

Les utilisateurs techniques peuvent aider à accélérer ce processus en rédigeant plus de tutoriels et de documentation pour les clients minoritaires et ainsi encourager leurs pairs à migrer loin des clients dominants. Des guides pour basculer vers un client de consensus minoritaire sont disponibles sur [clientdiversity.org](https://clientdiversity.org/).

## Tableaux de bord relatif à la diversité des clients {#client-diversity-dashboards}

Plusieurs tableaux de bord donnent des statistiques en temps réel de la diversité des clients pour la couche d'exécution et la couche de consensus.

**Couche de consensus:**

- [Rated.network](https://www.rated.network/)
- [clientdiversity.org](https://clientdiversity.org/) **Couche d'exécution :**

- [supermajority.info](https://supermajority.info//)
- [Ethernodes](https://ethernodes.org/)

## Complément d'information {#further-reading}

- [Diversité des clients sur la couche de consensus d'Ethereum](https://mirror.xyz/jmcook.eth/S7ONEka_0RgtKTZ3-dakPmAHQNPvuj15nh0YGKPFriA)
- [La Fusion Ethereum : Exécutez le client majoritaire à vos risques et périls !](https://dankradfeist.de/ethereum/2022/03/24/run-the-majority-client-at-your-own-peril.html) – _Dankrad Fiest, 24 mars 2022_
- [L'importance de la diversité des clients](https://our.status.im/the-importance-of-client-diversity/)
- [Liste des services de nœuds Ethereum](https://ethereumnodes.com/)
- [Cinq raisons au problème de la diversité des clients](https://notes.ethereum.org/@afhGjrKfTKmksTOtqhB9RQ/BJGj7uh08)
- [Diversité Ethereum et comment la résoudre (YouTube)](https://www.youtube.com/watch?v=1hZgCaiqwfU)
- [clientdiversity.org](https://clientdiversity.org/)

## Sujets connexes {#related-topics}

- [Exécuter un nœud Ethereum](/run-a-node/)
- [Nœuds et clients](/developers/docs/nodes-and-clients/)
