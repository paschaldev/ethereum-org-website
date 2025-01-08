---
title: Staking dometico dei tuoi ETH
description: Una panoramica su come iniziare a mettere i tuoi ETH in staking domestico
lang: it
template: staking
emoji: ":money_with_wings:"
image: /images/staking/leslie-solo.png
alt: Leslie il rinoceronte sul suo chip informatico.
sidebarDepth: 2
summaryPoints:
  - Ricevi le ricompense massime direttamente dal protocollo per mantenere il tuo validatore propriamente in funzione e online
  - Opera hardware domestico e aggiungi personalmente alla sicurezza e decentralizzazione della rete di Ethereum
  - Rimuovi la fiducia e non lasciar mai perdere il controllo delle chiavi dei tuoi fondi
---

## Cos'è lo staking domestico? {#what-is-solo-staking}

Lo staking domestico è l'atto di [eseguire un nodo di Ethereum](/run-a-node/) connesso a Internet e depositare 32 ETH per attivare un [validatore](#faq), dandoti la capacità di partecipare direttamente al consenso della rete.

**Lo staking domestico aumenta la decentralizzazione della rete di Ethereum**, rendendola più resistente alla censura e robusta contro gli attacchi. Altri metodi di staking potrebbero non aiutare la rete nello stesso modo. Lo staking domestico è la migliore opzione di staking per proteggere Ethereum.

Un nodo di Ethereum consiste sia nel client del livello di esecuzione (EL), che di un client del livello di consenso (CL). Questi client sono software che cooperano, insieme a una valida serie di chiavi di firma, per verificare le transazioni e i blocchi, attestare al capo corretto della catena, aggregare le attestazioni e proporre i blocchi.

Gli staker domestici sono responsabili di utilizzare l'hardware necessario a eseguire questi client. Si consiglia vivamente di usare una macchina dedicata per questo, che operi da casa, il che è estremamente vantaggioso per l'integrità della rete.

Uno staker domestico riceve ricompense direttamente dal protocollo per mantenere il proprio validatore correttamente in funzione e online.

## Perché fare staking domestico? {#why-stake-solo}

Lo staking domestico richiede maggiori responsabilità, ma fornisce il massimo controllo sui propri fondi e sulla propria configurazione di staking.

<CardGrid>
  <Card title="Ottieni nuovi ETH" emoji="💸" description="Earn ETH-denominated rewards directly from the protocol when your validator is online, without any middlemen taking a cut." />
  <Card title="Controllo completo" emoji="🎛️" description="Keep your own keys. Choose the combination of clients and hardware that allows you to minimize your risk and best contribute to the health and security of the network. Third-party staking services make these decisions for you, and they don't always make the safest choices." />
  <Card title="Sicurezza della rete" emoji="🔐" description="Home staking is the most impactful way to stake. By running a validator on your own hardware at home, you strengthen the robustness, decentralization, and security of the Ethereum protocol." />
</CardGrid>

## Considerazioni prima dello staking domestico {#considerations-before-staking-solo}

Per quanto vorremmo che lo staking domestico fosse accessibile e privo di rischi per tutti, questa non è la realtà. Esistono serie considerazioni pratiche da tenere a mente prima di scegliere di mettere i propri ETH in staking domestico.

<InfoGrid>
<ExpandableCard title="Lettura necessaria" eventCategory="SoloStaking" eventName="clicked required reading">
Quando utilizzi il tuo nodo, dovresti dedicare del tempo a imparare come usare il software che hai scelto. Questo include la lettura della documentazione pertinente e seguire i canali di comunicazione di tali team di sviluppo.

Più comprendi il software che stai operando e il funzionamento del proof-of-stake, meno rischioso sarà come staker e più sarà facile risolvere qualsiasi problema che potrebbe sorgere lungo il percorso da operatore del nodo.
</ExpandableCard>

<ExpandableCard title="Dimestichezza con il computer" eventCategory="SoloStaking" eventName="clicked comfortable with computers">
La configurazione del nodo richiede un livello di dimestichezza ragionevole con il computer, sebbene nuovi strumenti stiano semplificando le procedure con il tempo. La comprensione dell'interfaccia della riga di comando è utile, ma non più rigorosamente richiesta.

Richiede anche una configurazione hardware molto basilare e una minima comprensione delle specifiche consigliate minime.
</ExpandableCard>

<ExpandableCard title="Gestione sicura delle chiavi" eventCategory="SoloStaking" eventName="clicked secure key management">
Proprio come le chiavi private proteggono il tuo indirizzo di Ethereum, dovrai generare delle chiavi specificamente per il tuo validatore. Devi comprendere come mantenere al sicuro qualsiasi frase di seed o chiave privata.{' '}

<a href="/security/">Sicurezza di Ethereum e prevenzione delle truffe</a>
</ExpandableCard>

<ExpandableCard title="Manutenzione" eventCategory="SoloStaking" eventName="clicked maintenance">
L'hardware, talvolta, si guasta, le connessioni di rete generano errori e il software del client a volte necessita di aggiornamenti. La manutenzione del nodo è inevitabile e richiederà occasionalmente la tua attenzione. Vorrai assicurarti di esser consapevole di qualsiasi aggiornamento di rete anticipato o di altri aggiornamenti critici del client.
</ExpandableCard>

<ExpandableCard title="Operatività affidabile" eventCategory="SoloStaking" eventName="clicked reliable uptime">
Le tue ricompense sono proporzionali al tempo in cui il tuo validatore è online e sta attestando propriamente. Le interruzioni comportano sanzioni proporzionali a quanti altri validatori sono offline nello stesso momento, ma <a href="#faq">non risultano in tagli</a>. Anche la larghezza di banda conta, poiché le ricompense sono ridotte per le attestazioni che non sono ricevute in tempo. I requisiti varieranno, ma si consiglia un minimo di 10 Mb/s in upload e download.
</ExpandableCard>

<ExpandableCard title="Rischio di taglio" eventCategory="SoloStaking" eventName="clicked slashing risk">
Differente dalle sanzioni di inattività per esser offline, il <em>taglio</em> è una sanzione molto più seria, riservata alle infrazioni malevole. Operando un client di minoranza con le tue chiavi caricate su una sola macchina per volta, il tuo rischio di esser tagliato è minimizzato. Detto ciò, tutti gli staker devono esser consapevoli dei rischi di taglio.

<a href="https://medium.com/prysmatic-labs/eth2-slashing-prevention-tips-f6faa5025f50/"> Ulteriori informazioni sullo slashing e sul ciclo di vita dei validatori</a>
</ExpandableCard>
</InfoGrid>

<StakingComparison page="solo" />

## Come funziona {#how-it-works}

<StakingHowSoloWorks />

Quando saranno attivi, riceverai le ricompense in ETH, che saranno depositate periodicamente al tuo indirizzo di prelievo.

Se lo desideri, puoi smettere di essere un validatore; in questo modo viene meno il requisito di essere online e si interrompe qualsiasi ulteriore ricompensa. Il saldo rimanente sarà poi prelevato all'indirizzo di prelievo che hai indicato durante la configurazione.

[Di più sulle ricompense di staking](/staking/withdrawals/)

## Inizia con il Launchpad di Staking {#get-started-on-the-staking-launchpad}

Il Launchpad di Staking è un'applicazione open source che ti aiuterà a diventare uno staker. Ti guiderà per la scelta dei tuoi client, la generazione delle tue chiavi e il deposito dei tuoi ETH al contratto di deposito di staking. Una lista di controllo è fornita per assicurarsi che tu abbia coperto tutto per configurare in sicurezza il tuo validatore.

<StakingLaunchpadWidget />

## Cosa considerare con il nodo e gli strumenti di configurazione del client {#node-tool-considerations}

Esistono sempre più strumenti e servizi per aiutarti a mettere i tuoi ETH in staking domestico, ma ognuno presenta rischi e benefici differenti.

Gli indicatori di attributo sono usati di seguito per segnalare punti di forza e debolezze notevoli che uno strumento di staking elencato potrebbe avere. Usa questa sezione come un riferimento per come definire questi attributi mentre stai scegliendo quali strumenti usare per guidarti per il tuo percorso di staking.

<StakingConsiderations page="solo" />

## Esplora gli strumenti del nodo e di configurazione del client {#node-and-client-tools}

Esistono una varietà di opzioni disponibili per aiutarti con la tua configurazione. Gli indicatori di cui sopra ti guideranno per gli strumenti seguenti.

<ProductDisclaimer />

### Strumenti del nodo

<StakingProductsCardGrid category="nodeTools" />

Ricorda l'importanza di scegliere un [client di minoranza](/developers/docs/nodes-and-clients/client-diversity/), poiché migliora la sicurezza della rete e limita i tuoi rischi. Gli strumenti che ti consentono di configurare il client di minoranza sono contrassegnati come <em style={{ textTransform: "uppercase" }}>"multi-client".</em>

### Generatori di chiavi

Questi strumenti sono utilizzabili come un'alternativa alla [CLI di deposito di staking](https://github.com/ethereum/staking-deposit-cli/) per contribuire alla generazione di chiavi.

<StakingProductsCardGrid category="keyGen" />

Hai un suggerimento per uno strumento di staking che abbiamo dimenticato? Dai un'occhiata alla nostra [politica di elenco dei prodotti](/contributing/adding-staking-products/) per verificare l'idoneità e sottoporcelo.

## Esplora le guide allo staking domestico {#staking-guides}

<StakingGuides />

## Domande frequenti {#faq}

Esistono alcune domande molto comuni sullo staking che meritano di essere affrontate.

<ExpandableCard title="Cos'è un validatore?">

Un <em>validatore</em> è un'entità virtuale che risiede su Ethereum e partecipa al consenso del protocollo di Ethereum. I validatori sono rappresentati da un saldo, una chiave pubblica e altre proprietà. Un <em>client del validatore</em> è il software che agisce per conto del validatore detenendone e usandone la chiave privata. Un singolo client del validatore può detenere molte coppie di chiavi, controllando molti validatori.

</ExpandableCard>

<ExpandableCard title="Posso depositare più di 32 ETH?">
Ogni coppia di chiavi associata ad un validatore richiede esattamente 32 ETH per esser attivata. Maggiori ETH depositati in una singola serie di chiavi non aumentano le potenziali ricompense, poiché ogni validatore è limitato a un <a href="https://www.attestant.io/posts/understanding-validator-effective-balance/">saldo effettivo</a> di 32 ETH. Questo significa che lo staking è effettuato in incrementi di 32 ETH, ognuno con la propria serie di chiavi e il proprio saldo.

Non depositare più di 32 ETH per un singolo validatore. Non incrementerà le tue ricompense. Se un indirizzo di prelievo è stato impostato per il validatore, i fondi in eccesso oltre i 32 ETH saranno prelevati automaticamente a tale indirizzo durante la successiva <a href="/staking/withdrawals/#validator-sweeping">pulizia dei validatori</a>.

Se lo staking domestico sembra troppo impegnativo per te, prendi in considerazione di utilizzare un fornitore di <a href="/staking/saas/">staking come servizio</a> o, se hai meno di 32 ETH, dai un'occhiata ai <a href="/staking/pools/">pool di staking</a>.
</ExpandableCard>

<ExpandableCard title="Sarà tagliato se resto offline? (tldr: No.)">
Andare offline quando la rete sta finalizzando correttamente NON comporterà alcun taglio. Vengono applicate piccole <em>sanzioni di inattività</em> se il tuo validatore non è disponibile ad attestare per una data epoca (ciascuna lunga 6,4 minuti), ma queste sono molto differenti dal <em>taglio</em>. Queste sanzioni sono lievemente inferiori alla ricompensa che avresti ottenuto se il validatore fosse stato disponibile ad attestare e le perdite possono esser riguadagnate approssimativamente nello stesso periodo di tempo online.

Nota che le sanzioni per inattività sono proporzionali a quanti validatori sono offline contemporaneamente. Nei casi in cui una grande porzione della rete è offline in una volta sola, le sanzioni per ciascuno di questi validatori saranno maggiori rispetto a quando non è disponibile un singolo validatore.

In casi estremi, se la rete interrompe la finalizzazione poiché più di un terzo dei validatori è offline, questi utenti subiranno quella che è nota come <em>fuga d'inattività quadratica</em>, una riduzione esponenziale di ETH dai conti offline dei validatori. Questo consente alla rete, eventualmente, di auto-curarsi bruciando gli ETH dei validatori inattivi finché il loro saldo non raggiunge i 16 ETH, e a quel punto saranno automaticamente espulsi dal pool del validatore. I validatori online rimanenti alla fine comprenderanno ancora oltre i 2/3 della rete, soddisfacendo la super maggioranza necessaria per finalizzare nuovamente la catena.
</ExpandableCard>

<ExpandableCard title="Come mi assicuro di non esser tagliato?">
In breve, non esiste una garanzia assoluta in questo senso, ma se agisci in buona fede, operi un client di maggioranza e mantieni le tue chiavi di firma solo su una macchina per volta, il rischio di esser tagliato è quasi pari a zero.

Esistono solo alcuni modi specifici che possono risultare nel taglio e nell'espulsione di un validatore dalla rete. Al momento della scrittura, i tagli che si sono verificati sono stati esclusivamente un prodotto di configurazioni hardware ridondanti in cui le chiavi di firma erano memorizzate contemporaneamente su due macchine separate. Questo può risultare inavvertitamente in un <em>voto doppio</em> dalle tue chiavi, il che è un'infrazione tagliabile.

Operare un client di super maggioranza (ogni client usato da oltre 2/3 della rete), preclude anch'esso un rischio di taglio potenziale nel caso in cui il client presenti un bug che risulti in una biforcazione della catena. Questo può risultare in una biforcazione difettosa che viene finalizzata. Correggere alla catena intesa richiederebbe l'invio di un <em>voto di contorno</em>, provando ad annullare un blocco finalizzato. Anche questa è un'infrazione tagliabile e può esser evitata semplicemente eseguendo invece un client di minoranza.

I bug equivalenti in un <em>client di minoranza non sarebbero mai finalizzati</em> e, ciò risulterebbe in un voto di contorno, con la semplice conseguenza di sanzioni d'inattività, <em>non tagli</em>.

<ul>
  <li><a href="https://hackernoon.com/ethereums-client-diversity-problem">Scopri di più sull'importanza di eseguire un client di minoranza.</a></li>
  <li><a href="https://medium.com/prysmatic-labs/eth2-slashing-prevention-tips-f6faa5025f50">Scopri di più sulla prevenzione dei tagli</a></li>
</ul>
</ExpandableCard>

<ExpandableCard title="Quale client è il migliore?">
I client individuali potrebbero variare lievemente in termini di prestazioni e interfaccia utente, poiché ognuno è sviluppato da team differenti che usano diversi linguaggi di programmazione. Detto ciò, nessuno di essi è il "migliore." Tutti i client di produzione sono eccellenti pezzi di software, che eseguono tutti le stesse funzioni fondamentali per sincronizzarsi e interagire con la blockchain.

Poiché tutti i client di produzione forniscono la stessa funzionalità di base, è davvero molto importante che tu scelga un <strong>client di minoranza</strong>, vale a dire qualsiasi client che NON sia attualmente in uso da una maggioranza di validatori sulla rete. Questo potrebbe sembrare controintuitivo, ma operare un client di maggioranza o di super maggioranza espone  maggiormente al rischio di tagli nel caso di un bug in quel client. Operare un client di minoranza riduce drasticamente tali rischi.

<a href="https://mirror.xyz/jmcook.eth/S7ONEka_0RgtKTZ3-dakPmAHQNPvuj15nh0YGKPFriA">Scopri di più sul perché la diversità dei client è fondamentale</a>
</ExpandableCard>

<ExpandableCard title="Posso semplicemente usare un VPS (server privato virtuale)?">
Sebbene un server privato virtuale (VPS) possa essere usato come sostitutivo dell'hardware domestico, l'accesso e la posizione fisici del client del validatore <em>sono importanti</em>. Le soluzioni centralizzate su cloud come Amazon Web Services o Digital Ocean offrono la convenienza di non dover ottenere e operare l'hardware, a spese della centralizzazione della rete.

Più client del validatore operano su una soluzione d'archiviazione su cloud centralizzata singola, più diventa pericoloso per questi utenti. Ogni evento che porta questi fornitori offline, che sia un attacco, domande regolatorie o solo guasti energetici o a Internet, manderanno offline al contempo ogni client del validatore che si basi su tale server.

Le sanzioni offline sono proporzionali a quanti altri sono offline contemporaneamente. Usare un VPS aumenta notevolmente il rischio che le sanzioni offline saranno più severe e aumenta il rischio di fughe quadratiche o tagli nel caso in cui il guasto sia abbastanza grande. Per minimizzare i tuoi rischi e i rischi alla rete, gli utenti sono vivamente incoraggiati a procurarsi e utilizzare il proprio hardware.
</ExpandableCard>

<ExpandableCard title="Come sblocco le mie ricompense o riprendo i miei ETH?">

I prelievi di ogni tipo dalla beacon chain richiedono l'impostazione delle credenziali di prelievo.

I nuovi staker le hanno impostate al momento della generazione della chiave e del deposito. Gli staker esistenti che non lo hanno già impostato, possono aggiornare le proprie chiavi per supportare questa funzionalità.

Una volta impostate le credenziali di prelievo, i pagamenti delle ricompense (gli ETH accumulati oltre i 32 iniziali) saranno distribuiti periodicamente e automaticamente all'indirizzo di prelievo.

Per sbloccare e ricevere il tuo intero saldo, devi inoltre completare il processo di uscita dal tuo validatore.

<ButtonLink href="/staking/withdrawals/">Di più sulle ricompense di staking</ButtonLink>
</ExpandableCard>

## Approfondimenti {#further-reading}

- [The Ethereum Staking Directory](https://www.staking.directory/) - _Eridian and Spacesider_
- [Problema di diversità dei client di Ethereum](https://hackernoon.com/ethereums-client-diversity-problem) - _@emmanuelawosika 2022_
- [Aiutare la diversità dei client](https://www.attestant.io/posts/helping-client-diversity/) - _Jim McDonald 2022_
- [La diversità del client sul livello di consenso di Ethereum](https://mirror.xyz/jmcook.eth/S7ONEka_0RgtKTZ3-dakPmAHQNPvuj15nh0YGKPFriA) - _jmcook.eth 2022_
- [How to: acquistare l'hardware del validatore di Ethereum](https://www.youtube.com/watch?v=C2wwu1IlhDc) - _EthStaker 2022_
- [Passo dopo Passo: come unirsi alla Testnet di Ethereum 2.0](https://kb.beaconcha.in/guides/tutorial-eth2-multiclient) - _Butta_
- [Suggerimenti per la prevenzione dei tagli di Eth2](https://medium.com/prysmatic-labs/eth2-slashing-prevention-tips-f6faa5025f50) - _Raul Jordan 2020_

<QuizWidget quizKey="staking-solo" />
