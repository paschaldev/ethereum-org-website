---
title: Retraits de la mise en jeu
description: Page résumant ce que sont les retraits de staking, comment ils fonctionnent et ce que les stakers doivent faire pour obtenir leurs récompenses
lang: fr
template: staking
image: /images/staking/leslie-withdrawal.png
alt: Leslie le rhinocéros avec ses récompenses de staking
sidebarDepth: 2
summaryPoints:
  - La mise à niveau Shanghai/Capella a permis les retraits de staking sur Ethereum
  - Les opérateurs validateurs doivent fournir une adresse de retrait pour l'activer
  - Les récompenses sont automatiquement distribuées tous les deux ou trois jours
  - Les validateurs qui quittent complètement le staking recevront leur solde restant
---

<UpgradeStatus dateKey="page-staking-withdrawals-when">
Les retraits de staking ont été activés avec la mise à niveau Shanghai/Capella, qui a eu lieu le 12 avril 2023.&nbsp;<a href="#when" customEventOptions={{ eventCategory: "Anchor link", eventAction: "When's it shipping?", eventName: "click" }}>Plus d'informations sur Shanghai/Capella</a>
</UpgradeStatus>

**Les retraits de staking** font référence aux transferts d'ETH depuis le compte d'un validateur sur la couche de consensus d'Ethereum (la chaîne phare) vers la couche d'exécution où ils peuvent être traités.

**Les paiements des récompenses au dessus d'un solde** de 32 ETH seront automatiquement et régulièrement envoyés à une adresse de retrait liée à chaque validateur, une fois fourni par l’utilisateur. Les utilisateurs peuvent également **quitter le staking entièrement**, débloquer leur solde de validateur complet.

## Récompenses de staking {#staking-rewards}

Les paiements de récompenses sont traités automatiquement pour les comptes des validateurs actifs avec un solde effectif de 32 ETH maximum.

Tout solde supérieur à 32 ETH gagné grâce aux récompenses ne contribue pas réellement au capital, ou à augmenter le poids de ce validateur sur le réseau, et se trouve donc automatiquement renvoyé après quelques jours lors du paiement des récompenses. À part fournir une adresse de retrait une seule fois, recevoir ces récompenses ne nécessite aucune action de la part de l'opérateur du nœud validateur. Tout cela est géré depuis la couche de consensus, donc aucun gaz (frais de transaction) n'est requis à aucune étape.

### Comment sommes-nous arrivés là ? {#how-did-we-get-here}

Au cours des dernières années, Ethereum a subi plusieurs mises à niveau de réseau en passant à un réseau sécurisé par ETH lui-même, plutôt que par un minage coûteux en énergie auparavant. Participer au consensus sur Ethereum est maintenant connu sous le nom de « staking », les participants ayant volontairement bloqué l'ETH, le mettant « en jeu » pour pouvoir participer au réseau. Les utilisateurs qui suivent les règles seront récompensés, tandis que les tentatives de triche peuvent être pénalisées.

Depuis le lancement du contrat de dépôt en staking en novembre 2020, certains courageux pionniers d'Ethereum ont volontairement bloqué des fonds pour activer des comptes « validateurs », spéciaux qui ont le droit d'attester formellement et de proposer des blocs, en suivant les règles du réseau.

Avant la mise à niveau de Shanghai/Capella, vous ne pouviez pas utiliser l'ETH déposé en staking. Mais désormais vous pouvez choisir de recevoir automatiquement vos récompenses dans un compte de votre choix, et vous pouvez également retirer vos ETH mis en jeu quand vous le souhaitez.

### Comment puis-je me préparer ? {#how-do-i-prepare}

<WithdrawalsTabComparison />

### Informations importantes {#important-notices}

Fournir une adresse de retrait est une étape requise pour tout compte de validateur avant d'être admissible à un retrait d'ETH sur son solde.

<InfoBanner emoji="⚠️" isWarning>
  <strong>Chaque compte de validateur ne peut se voir attribué qu'une seule adresse de retrait.</strong> Une fois qu'une adresse est choisie et soumise à la couche de consensus, elle ne peut pas être annulée ou modifiée à nouveau. Vérifiez la propriété et l'exactitude de l'adresse fournie avant de la soumettre.
</InfoBanner>

Le fait de ne pas fournir cette adresse ne pose <strong>aucun danger pour vos fonds pendant ce temps</strong>, à condition que votre phrase mnémonique/de récupération soit restée en sécurité hors-ligne, et n'ait été compromise d'aucune façon. Ne pas ajouter d’identifiants de retrait laissera simplement l’ETH verrouillé sur le compte du validateur tel qu'il était jusqu'à jusqu’à ce qu’une adresse de retrait soit fournie.

## Quitter entièrement le staking {#exiting-staking-entirely}

Fournir une adresse de retrait est nécessaire pour que _les fonds_ puissent être transférés sur un solde de compte de validateur.

Les utilisateurs qui cherchent à quitter entièrement le staking et à retirer leur solde complet doivent également signer et diffuser un message de « sortie volontaire » avec des clés de validateur qui lanceront le processus de sortie de la mise en jeu. Ceci est exécuté avec votre client de validateur et soumis à votre nœud de consensus, et ne nécessite pas de gaz.

Le processus d'un validateur sortant du staking prend un temps variable, en fonction du nombre d'autres individus sortant en même temps. Une fois terminé, ce compte ne sera plus responsable de l'exécution des tâches du réseau de validateur, ne sera plus admissible aux récompenses, et n'aura plus d'ETH « en jeu ». À ce moment, le compte sera marqué comme entièrement « retirable ».

Une fois qu'un compte est marqué comme « retirable » et que les identifiants de retrait ont été fournis, un utilisateur n'a plus rien à faire d'autre qu'attendre. Les comptes sont automatiquement et continuellement balayés par les proposeurs de blocs pour les fonds sortis qui sont admissibles, et le solde de votre compte sera transféré en entier (également connu sous le nom de « retrait complet ») au cours du prochain <a href="#validator-sweeping" customEventOptions={{ eventCategory: "Anchor link", eventAction: "Exiting staking entirely (sweep)", eventName: "click" }}>balayage</a>.

## Quand les retraits de staking sont-ils activés ? {#when}

Les retraits de staking sont disponibles ! La fonction de retrait a été activée dans le cadre de la mise à niveau Shanghai/Capella qui a eu lieu le 12 avril 2023.

La mise à niveau Shanghai/Capella a permis de récupérer de l'Ether précédemment mis en jeu vers un compte Ethereum standard. Cela a fermé la boucle de la liquidité mise en jeu, et a fait avancer Ethereum sur son chemin de construction d'un écosystème durable, évolutif, sûr et décentralisé.

- [En savoir plus sur l'histoire d'Ethereum](/history/)
- [En savoir plus sur la feuille de route d'Ethereum](/roadmap/)

## Comment fonctionnent les paiements de retraits ? {#how-do-withdrawals-work}

Le fait qu'un validateur donné soit éligible ou non pour un retrait est déterminé par l'état du compte du validateur lui-même. Aucune intervention de l'utilisateur n'est nécessaire à un moment donné pour déterminer si un compte doit faire l'objet d'un retrait ou non - l'ensemble du processus est effectué automatiquement par la couche de consensus en boucle continue.

### Davantage qu'un apprenant visuel ? {#visual-learner}

Consultez cette explication de Finematics sur les retraits de staking d'Ethereum :

<YouTube id="RwwU3P9n3uo" />

### « Balayage » du validateur {#validator-sweeping}

Lorsqu'un validateur doit proposer le bloc suivant, il est tenu de constituer une file d'attente de retraits, pouvant aller jusqu'à 16 retraits éligibles. Pour ce faire, on commence par l'index 0 du validateur, on détermine s'il existe un retrait éligible pour ce compte selon les règles du protocole et on l'ajoute à la file d'attente si tel est le cas. Le validateur configuré pour proposer le bloc suivant reprendra là où le précédent s'est arrêté, progressant dans l'ordre indéfiniment.

<InfoBanner emoji="🕛">
Pensez à une horloge analogique. L'aiguille de l’horloge pointe vers l’heure, progresse dans une direction, ne saute pas d’heures, et finit par revenir au début après que le dernier nombre est atteint.<br/><br/>
Maintenant au lieu de 1 à 12, imaginez que l'horloge a 0 à N <em>(le nombre total de comptes de validateur qui ont déjà été enregistrés sur la couche de consensus, plus de 500 000 en janvier 2023).</em><br/><br/>
L'aiguille de l’horloge pointe vers le prochain validateur qui doit être vérifié pour les retraits éligibles. Il commence à 0 et progresse tout autour sans sauter de compte. Lorsque le dernier validateur est atteint, le cycle reprend au début.
</InfoBanner>

#### Vérification des retraits sur un compte {#checking-an-account-for-withdrawals}

Lorsqu'un proposant passe en revue les validateurs pour d'éventuels retraits, chaque validateur vérifié est évalué en fonction d'une courte série de questions afin de déterminer si un retrait doit être déclenché et, le cas échéant, quel montant d'ETH doit être retiré.

1. **Une adresse de retrait a-t-elle été fournie ? ** Si aucune adresse de retrait n'a été fournie, le compte est ignoré et aucun retrait n'est effectué.
2. **Le validateur est-il sorti et peut-il être retiré ? ** Si le validateur est complètement sorti et que nous avons atteint l'époque où son compte est considéré comme « pouvant être retiré », alors un retrait complet sera effectué. Le solde total restant sera alors transféré à l'adresse de retrait.
3. **Le solde effectif est-il plafonné à 32 ? ** Si le compte dispose d'identifiants de retrait, qu'il n'est pas entièrement clôturé et que des récompenses supérieures à 32 sont en attente, un retrait partiel sera effectué et ne transférera que les récompenses supérieures à 32 à l'adresse de retrait de l'utilisateur.

Seules deux actions entreprises par les opérateurs de validateurs au cours du cycle de vie d'un validateur influencent directement ce flux :

- Fournir des justificatifs de retrait pour permettre toute forme de retrait
- Sortir du réseau déclenchera un retrait complet

### Sans gaz {#gas-free}

Cette approche des retraits de staking évite d'obliger les stakers à soumettre manuellement une transaction demandant le retrait d'une quantité particulière d'ETH. Cela signifie qu'aucun **gaz (frais de transaction)** n'est requis, et les retraits ne concurrencent pas non plus l'espace de bloc existant de la couche d'exécution.

### À quelle fréquence recevrai-je mes récompenses de mise en jeu ? {#how-soon}

Un maximum de 16 retraits peut être traité en un seul bloc. À ce rythme, 115 200 retraits de validateurs peuvent être traités par jour (en supposant qu'il n'y ait pas de créneaux manqués). Comme indiqué ci-dessus, les validateurs n'ayant pas effectué de retraits éligibles seront ignorés, ce qui réduira le temps nécessaire pour terminer le balayage.

En élargissant ce calcul, nous pouvons estimer le temps nécessaire pour traiter un nombre donné de retraits :

<TableContainer>

| Nombre de retraits | Délai d'exécution |
| :-------------:|:-------------:|
| 400 000 | 3,5 jours |
| 500 000 | 4,3 jours |
| 600 000 | 5,2 jours |
| 700 000 | 6,1 jours |
| 800 000 | 7,0 jours |

</TableContainer>

Comme vous pouvez le constater, ce processus ralentit au fur et à mesure que le nombre de validateurs augmente sur le réseau. Une augmentation des crénaux manqués pourrait ralentir proportionnellement ce phénomène, mais cela représente généralement le côté le plus lent des résultats possibles.

## Questions fréquemment posées {#faq}

<ExpandableCard
title="Une fois que j'ai fourni une adresse de retrait, puis-je la changer pour une autre adresse de retrait ?"
eventCategory="FAQ"
eventAction="Once I have provided a withdrawal address, can I change it to an alternative withdrawal address?"
eventName="read more">
Non, la procédure de fourniture des identifiants de retrait est une procédure unique, qui ne peut être modifiée une fois qu'elle a été soumise.
</ExpandableCard>

<ExpandableCard
title="Pourquoi une adresse de retrait ne peut être définie qu'une seule fois ?"
eventCategory="FAQ"
eventAction="Why can a withdrawal address only be set once?"
eventName="read more">
En définissant l'adresse de retrait d'une couche d'exécution, les identifiants de retrait de ce validateur ont été modifiés de manière permanente. Cela signifie que les anciens identifiants ne fonctionneront plus et que les nouveaux identifiants renvoient à un compte de la couche d'exécution.

Les adresses de retrait peuvent être soit un contrat intelligent (contrôlé par son code), soit un compte détenu en externe (EOA, contrôlé par sa clé privée). Actuellement, ces comptes n'ont aucun moyen de communiquer un message à la couche de consensus qui signalerait un changement d'identifiant du validateur, et l'ajout de cette fonctionnalité compliquerait inutilement le protocole.

En guise d'alternative au changement d'adresse de retrait pour un validateur particulier, les utilisateurs peuvent choisir de définir un contrat intelligent comme adresse de retrait, qui pourrait gérer la rotation des clés, comme un coffre-fort. Les utilisateurs qui ont placé leurs fonds sur leur propre EOA peuvent effectuer une sortie complète pour retirer tous leurs fonds misés, puis effectuer une nouvelle mise en utilisant de nouveaux identifiants.
</ExpandableCard>

<ExpandableCard
title="Que se passe-t-il si je participe à des jetons de mise en jeu ou à la mise en jeu mutualisée"
eventCategory="FAQ"
eventAction="What if I participate in staking tokens or pooled staking"
eventName="read more">

Si vous faites partie d'un <a href="/staking/pools/">groupe d'enjeux</a> ou si vous détenez des jetons de mise en jeu, vous devez vous renseigner auprès de votre fournisseur pour savoir comment les retraits de mise en jeu sont gérés, car chaque service fonctionne différemment.

En général, les utilisateurs sont censés être libres de récupérer leur ETH sous-jacent mis en jeu, ou de changer le fournisseur de mise en jeu qu'ils utilisent. Si un groupe particulier devient trop important, les fonds peuvent être retirés, rachetés, et remisés auprès d'un <a href="https://rated.network/">fournisseur plus petit</a>. Ou, si vous avez accumulé suffisamment d'ETH, vous pouvez <a href="/staking/solo/">miser depuis chez vous</a>.

</ExpandableCard>

<ExpandableCard
title="Est-ce que les paiements de récompense (retraits partiels) se font automatiquement ?"
eventCategory="FAQ"
eventAction="Do reward payments (partial withdrawals) happen automatically?"
eventName="read more">
Oui, à condition que votre validateur ait fourni une adresse de retrait. Elle doit être fournie une fois pour permettre tout retrait initialement, puis les paiements de récompenses seront automatiquement déclenchés tous les deux ou trois jours avec chaque balayage des validateurs.
</ExpandableCard>

<ExpandableCard
title="Les retraits complets sont-ils effectués automatiquement ?"
eventCategory="FAQ"
eventAction="Do full withdrawals happen automatically?"
eventName="read more">

Non, si votre validateur est toujours actif sur le réseau, un retrait total ne se fera pas automatiquement. Pour cela, il faut déclencher manuellement une sortie volontaire.

Une fois qu'un validateur a terminé le processus de sortie, et en supposant que le compte possède des identifiants de retrait, le solde restant sera <em>alors</em> retiré lors du prochain <a href="#validator-sweeping">balayage du validateur</a>.

</ExpandableCard>

<ExpandableCard title="Puis-je retirer un montant personnalisé ?"
eventCategory="FAQ"
eventAction="Can I withdraw a custom amount?"
eventName="read more">
Les retraits sont conçus pour être effectués automatiquement, en transférant tous les ETH qui ne contribuent pas activement à la mise. Cela comprend le solde complet pour les comptes qui ont terminé de processus de sortie.

Il n'est pas possible de demander manuellement le retrait de quantités spécifiques d'ETH.
</ExpandableCard>

<ExpandableCard
title="J'opère un validateur. Où puis-je trouver plus d'informations sur l'activation des retraits ?"
eventCategory="FAQ"
eventAction="I operate a validator. Where can I find more information on enabling withdrawals?"
eventName="read more">

Il est recommandé aux opérateurs de validateurs de consulter la page <a href="https://launchpad.ethereum.org/withdrawals/">Staking Launchpad Withdrawals</a> où vous trouverez plus de détails sur la façon de préparer votre validateur aux retraits, le calendrier des événements, et davantage d'informations sur le fonctionnement des retraits.

Pour commencer en testant votre configuration sur un réseau de test, visitez la <a href="https://holesky.launchpad.ethereum.org">Platforme de lancement pour la mise en jeu sur le réseau de test Holesky</a>.

</ExpandableCard>

<ExpandableCard
title="Puis-je réactiver mon validateur après la sortie en déposant plus d'ETH ?"
eventCategory="FAQ"
eventAction="Can I re-activate my validator after exiting by depositing more ETH?"
eventName="read more">
Non. Une fois qu'un validateur est sorti et que son solde total a été retiré, tous les fonds supplémentaires déposés sur ce validateur seront automatiquement transférés à l'adresse de retrait lors du prochain balayage du validateur. Pour remettre en jeu l'ETH, un nouveau validateur doit être activé.
</ExpandableCard>

## Complément d'information {#further-reading}

- [Retraits de la plateforme de lancement de la mise en jeu](https://launchpad.ethereum.org/withdrawals)
- [EIP-4895 : la chaîne phare signale les retraits comme des opérations](https://eips.ethereum.org/EIPS/eip-4895)
- [Ethereum Cat Herders - Shanghai](https://www.ethereumcatherders.com/shanghai_upgrade/index.html)
- [PEEPanEIP #94 : Retrait de l'ETH misé (Testing) avec Potuz & Hsiao-Wei Wang](https://www.youtube.com/watch?v=G8UstwmGtyE)
- [PEEPanEIP#68 : EIP-4895 : Retraits de la chaîne de balises en tant qu'opérations avec Alex Stokes](https://www.youtube.com/watch?v=CcL9RJBljUs)
- [Comprendre le Solde Effectif du Validateur](https://www.attestant.io/posts/understanding-validator-effective-balance/)
