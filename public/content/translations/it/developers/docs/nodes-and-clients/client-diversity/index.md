---
title: Diversità dei client
description: Una spiegazione generica dell'importanza della diversità di client di Ethereum.
lang: it
sidebarDepth: 2
---

Il comportamento di un nodo di Ethereum è controllato dal software del client che esegue. Esistono diversi client di Ethereum di livello di produzione, ognuno sviluppato e mantenuto in diversi linguaggi da team distinti. I client sono costruiti su specifiche comuni che assicurano che i client comunichino senza problemi tra loro e abbiano le stesse funzionalità, fornendo un'esperienza utente equivalente. Tuttavia, al momento, la distribuzione dei client tra i nodi non è abbastanza equilibrata da realizzare in tutta la sua potenzialità questa fortificazione della rete. Idealmente, gli utenti dovrebbero dividersi approssimativamente in modo equo tra i vari client, per portare quanta più diversità dei client possibile alla rete.

## Prerequisiti {#prerequisites}

Se ancora non sai cosa sono i nodi e i client, dai un'occhiata a [nodi e client](/developers/docs/nodes-and-clients/). I livelli di [esecuzione](/glossary/#execution-layer) e [consenso](/glossary/#consensus-layer) sono definiti nel glossario.

## Perché esistono diversi client? {#why-multiple-clients}

Esistono diversi client sviluppati e mantenuti indipendentemente perché la diversità dei client rende la rete più resistente ad attacchi e bug. Diversi client sono una forza unica per Ethereum, mentre altre blockchain si affidano all'infallibilità di un singolo client. Tuttavia, non basta avere semplicemente diversi client disponibili, devono essere adottati dalla community e i nodi attivi totali devono essere distribuiti in modo relativamente uniforme tra loro.

## Perché la diversità dei client è importante? {#client-diversity-importance}

Avere molti client sviluppati e mantenuti indipendentemente è vitale per l'integrità di una rete decentralizzata. Vediamo perché.

### Bug {#bugs}

Un bug in un singolo client rappresenta un pericolo minore per la rete se rappresenta una minoranza di nodi di Ethereum. Con una distribuzione approssimativamente uniforme dei nodi tra molti client, la probabilità che gran parte dei client soffra di un problema comune è minima e, di conseguenza, la rete è più robusta.

### Resistenza agli attacchi {#resilience}

La diversità dei client offre anche resistenza agli attacchi. Ad esempio, un attacco che [inganna un client specifico](https://twitter.com/vdWijden/status/1437712249926393858) su un ramo particolare della catena, difficilmente riuscirà nel suo intento perché non è probabile che anche gli altri client siano vulnerabili allo stesso modo, e la catena canonica non viene quindi corrotta. Una bassa diversità dei client aumenta i rischi associati a un attacco sul client dominante. È stato dimostrato che la diversità dei client è una difesa importante contro gli attacchi malevoli sulla rete, ad esempio, l'attacco di denial of service di Shanghai nel 2016 è stato possibile perché gli utenti malevoli sono riusciti a ingannare il client dominante (Geth) facendogli eseguire un'operazione lenta di I/O su disco decine di migliaia di volte per blocco. Poiché online erano presenti anche altri client alternativi che non avevano la stessa vulnerabilità, Ethereum è riuscita a resistere all'attacco e a continuare a funzionare mentre veniva risolta la vulnerabilità di Geth.

### Finalità del proof-of-stake {#finality}

Un bug in un client di consenso con oltre il 33% dei nodi di Ethereum potrebbe impedire la finalizzazione del livello di consenso, il che significa che gli utenti non possono essere sicuri che le transazioni non vengano annullate o modificate ad un certo punto. Questo sarebbe molto problematico per molte delle app basate su Ethereum, in particolare, le DeFi.

<Emoji text="🚨" className="me-4" /> Ancora peggio, un bug critico in un client con una maggioranza di due terzi potrebbe causare la <a href="https://www.symphonious.net/2021/09/23/what-happens-if-beacon-chain-consensus-fails/" target="_blank">una divisione e finalizzazione errata</a> della catena, bloccando un gran numero di validatori su una catena non valida. Se vogliono rientrare nella catena corretta, quei validatori devo sottoporsi a tagli (slashing) o a un prelievo volontario, costoso e lento, e alla riattivazione. L'ammontare del taglio (slashing) aumenta col numero di nodi colpevoli, potendo interessare al massimo una maggioranza di due terzi (32 ETH).

Sebbene questi siano scenari improbabili, l'ecosistema di Ethereum può mitigarne il rischio equilibrando la distribuzione dei client tra i nodi attivi. Idealmente, nessun client del consenso dovrebbe mai raggiungere una quota del 33% dei nodi totali.

### Responsabilità condivisa {#responsibility}

Esiste anche un costo umano associato alla presenza di client di maggioranza. Essa comporta un eccesso di lavoro e responsabilità su un team di sviluppo di piccole dimensioni. Minore è la diversità dei client, maggiore l'onere di responsabilità per gli sviluppatori che mantengono il client di maggioranza. Distribuire la responsabilità tra diversi team è un bene sia per la salute della rete di nodi di Ethereum che per la sua rete di persone.

## Attuale diversità dei client {#current-client-diversity}

![Grafico a torta che mostra la diversità dei client](./client-diversity.png) _Dati del diagramma provenienti da [ethernodes.org](https://ethernodes.org) e [clientdiversity.org](https://clientdiversity.org/)_

I due grafici a torta di cui sopra mostrano le istantanee dell'attuale diversità dei client per i livelli d'esecuzione e del consenso (al momento della scrittura di questo testo, gennaio 2022). Il livello d'esecuzione è prevalentemente dominato da[Geth](https://geth.ethereum.org/), con distacco sul secondo, [Open Ethereum](https://openethereum.github.io/), [Erigon](https://github.com/ledgerwatch/erigon) in terza posizione e [Nethermind](https://nethermind.io/) quarto, con altri client che rappresentano meno dell'1% della rete. Il client più diffuso sul livello del consenso, [Prysm](https://prysmaticlabs.com/#projects), non è tanto dominante quanto Geth, ma rappresenta comunque oltre il 60% della rete. [Lighthouse](https://lighthouse.sigmaprime.io/) e [Teku](https://consensys.net/knowledge-base/ethereum-2/teku/) rappresentano rispettivamente circa il 20% e circa il 14%, e gli altri client sono poco usati.

I dati del livello di esecuzione sono stati ottenuti da [Ethernodes](https://ethernodes.org) il 23 Gen 2023. I dati per i client di consenso sono stati ottenuti da [Michael Sproul](https://github.com/sigp/blockprint). I dati del client di consenso sono più difficili da ottenere, perché i client del livello di consenso non sempre hanno tracce univoche che possono essere utilizzate per individuarli. I dati sono stati generati usando un algoritmo di classificazione che talvolta confonde alcuni dei client di minoranza (vedi [qui](https://twitter.com/sproulM_/status/1440512518242197516) per ulteriori dettagli). Nel diagramma precedente, queste classificazioni ambigue sono trattate classificate come alternative multiple (es. Nimbus/Teku). È comunque chiaro che la maggioranza della rete sta eseguendo Prysm. I dati sono un'istantanea su una serie fissa di blocchi (in questo caso i blocchi della Beacon Chain dallo slot 2048001 al 2164916) e in alcuni momenti la dominanza di Prysm è stata anche maggiore, superando il 68%. Nonostante siano solo istantanee, i valori nel diagramma forniscono una buona indicazione generale dello stato corrente della diversità dei client.

I dati di diversità dei client aggiornati per il livello del consenso sono ora disponibili su [clientdiversity.org](https://clientdiversity.org/).

## Livello di esecuzione {#execution-layer}

Finora, la conversazione sulla diversità dei client si è concentrata sul livello del consenso. Tuttavia, il client d'esecuzione [Geth](https://geth.ethereum.org) rappresenta correntemente circa l'85% di tutti i nodi. Questa percentuale è problematica per gli stessi motivi dei client di consenso. Ad esempio, un bug su Geth che influenzi la gestione delle transazioni o la costruzione dei carichi utili d'esecuzione potrebbe condurre alla finalizzazione da parte dei client di consenso di transazioni problematiche o contenenti bug. Ethereum sarebbe più quindi più robusto con una distribuzione più equa dei client d'esecuzione, idealmente senza alcun client che rappresenti oltre il 33% della rete.

## Usare un client di minoranza {#use-minority-client}

Per "indirizzare" la diversità dei client non basta che i singoli utenti scelgano i client di minoranza, richiede che anche i pool di mining/validatori e le istituzioni come le dApp principali e gli scambi cambino client. Tuttavia, tutti gli utenti possono fare la propria parte nel correggere l'attuale disequilibrio e normalizzare l'uso di tutti i software di Ethereum disponibili. Dopo La Fusione, tutti gli operatori di nodi dovranno eseguire un client d'esecuzione e un client di consenso. Scegliere le combinazioni dei client suggerite di seguito aiuterà ad aumentare la diversità dei client.

### Client di esecuzione {#execution-clients}

[Besu](https://www.hyperledger.org/use/besu)

[Nethermind](https://downloads.nethermind.io/)

[Erigon](https://github.com/ledgerwatch/erigon)

[Go-Ethereum](https://geth.ethereum.org/)

### Client di consenso {#consensus-clients}

[Nimbus](https://nimbus.team/)

[Lighthouse](https://github.com/sigp/lighthouse)

[Teku](https://consensys.net/knowledge-base/ethereum-2/teku/)

[Lodestar](https://github.com/ChainSafe/lodestar)

[Prysm](https://docs.prylabs.network/docs/getting-started)

Gli utenti tecnici possono aiutare ad accelerare questo processo scrivendo più tutorial e documentazioni per i client di minoranza e incoraggiando i propri peer che eseguono dei nodi a migrare dai client dominanti. Le guide per passare a un client di consenso di minoranza sono disponibili su [clientdiversity.org](https://clientdiversity.org/).

## Pannelli di controllo sulla diversità dei client {#client-diversity-dashboards}

Diversi pannelli di controllo forniscono statistiche sulla diversità dei client in tempo reale per il livello d'esecuzione e di consenso.

**Livello di consenso:**

- [Rated.network](https://www.rated.network/)
- [clientdiversity.org](https://clientdiversity.org/) **Livello di esecuzione:**

- [supermajority.info](https://supermajority.info//)
- [Ethernodes](https://ethernodes.org/)

## Letture consigliate {#further-reading}

- [Diversità dei client sul livello di consenso di Ethereum](https://mirror.xyz/jmcook.eth/S7ONEka_0RgtKTZ3-dakPmAHQNPvuj15nh0YGKPFriA)
- [Fusione di Ethereum: esegui il client di maggioranza a tuo rischio!](https://dankradfeist.de/ethereum/2022/03/24/run-the-majority-client-at-your-own-peril.html) – _Dankrad Fiest, 24 marzo 2022_
- [Importanza della diversità dei client](https://our.status.im/the-importance-of-client-diversity/)
- [Elenco di servizi di nodi Ethereum](https://ethereumnodes.com/)
- [I "Cinque Perché" del problema della diversità dei client](https://notes.ethereum.org/@afhGjrKfTKmksTOtqhB9RQ/BJGj7uh08)
- [Diversità di Ethereum e come risolverla (YouTube)](https://www.youtube.com/watch?v=1hZgCaiqwfU)
- [clientdiversity.org](https://clientdiversity.org/)

## Argomenti correlati {#related-topics}

- [Eseguire un nodo di Ethereum](/run-a-node/)
- [Nodi e client](/developers/docs/nodes-and-clients/)
