---
title: Stakovanie v pooloch
description: Prehľad, ako začať s poolovým stakovaním ETH
lang: sk
template: staking
emoji: ":money_with_wings:"
image: /images/staking/leslie-pool.png
alt: Nosorožeč Leslie plávajúci v bazéne.
sidebarDepth: 2
summaryPoints:
  - Vložte a zarábajte s akýmkoľvek množstvom ETH spojením síl s ostatnými
  - Preskočte ťažkú ​​časť a zverte operáciu validátora tretej strane
  - Majte vkladové tokeny vo svojej peňaženke
---

## Čo sú pool fondy? {#what-are-staking-pools}

Pool fond je prístup založený na spolupráci, ktorý umožňuje mnohým ľuďom s menším množstvom ETH získať 32 ETH potrebných na aktiváciu sady kľúčov validátora. Funkcia pooling fondov nie je v rámci protokolu natívne podporovaná, takže riešením bola vytvorená táto samostatná funkcia, aby potrebu riešila.

Niektoré pooly fungujú pomocou smart kontraktov, kde je možné vložiť prostriedky do kontraktu, ktorá dôveryhodne spravuje a sleduje váš vklad a vydáva vám token, ktorý predstavuje túto hodnotu. Iné pooly nemusia zahŕňať smart kontrakty a sú namiesto toho sprostredkované mimo reťazca.

## Prečo stakovať s poolom? {#why-stake-with-a-pool}

Okrem výhod, ktoré sme načrtli v našom [úvode do stakingu](/staking/), prináša vkladanie s poolom množstvo odlišných výhod.

<CardGrid>
  <Card title="Nízka bariéra vstupu" emoji="🐟" description="Not a whale? No problem. Most staking pools let you stake virtually any amount of ETH by joining forces with other stakers, unlike staking solo which requires 32 ETH." />
  <Card title="Stakujte dnes" emoji=":stopwatch:" description="Staking with a pool is as easy as a token swap. No need to worry about hardware setup and node maintenance. Pools allow you to deposit your ETH which enables node operators to run validators. Rewards are then distributed to contributors minus a fee for node operations." />
  <Card title="Stakovanie tokenov" emoji=":droplet:" description="Many staking pools provide a token that represents a claim on your staked ETH and the rewards it generates. This allows you to make use of your staked ETH, e.g. as collateral in DeFi applications." />
</CardGrid>

<StakingComparison page="pools" />

## Čo treba zvážiť {#what-to-consider}

Poolové alebo delegované vklady nie sú natívne podporované protokolom Ethereum, ale vzhľadom na dopyt používateľoch, aby stakovali menej ako 32 ETH, bol vytvorený rastúci počet riešení, ktoré tento dopyt uspokojujú.

Každý pool a nástroje alebo smart kontrakty, ktoré používajú, boli vytvorené rôznymi tímami a všetky majú iné výhody a riziká. Pooly umožňujú používateľom vymeniť ETH za token predstavujúci vložený ETH. Tento token je užitočný, pretože umožňuje používateľom zmeniť akékoľvek množstvo ETH za ekvivalentnú čiastku tokenu nesúceho výnos, ktorý generuje výnos z vložených odmien aplikovaných na podkladové vložené ETH (a naopak) na decentralizovaných burzách, aj keď skutočný ETH zostáva vložený v konsenzuálnej vrstve. To znamená, že zmeny tam a späť z vloženého ETH nesúceho výnos a „raw ETH“ sú rýchle, jednoduché a sú dostupné aj v iných objemoch než len v násobkoch 32 ETH.

Tieto vložené ETH tokeny však majú tendenciu vykazovať kartelové správanie, kedy veľké množstvo vložených ETH skončí pod kontrolou niekoľkých centralizovaných organizácií, namiesto toho, aby bolo rozdelené medzi mnoho nezávislých jednotlivcov. To vytvára podmienky pre cenzúru alebo extrakciu hodnôt. Zlatým štandardom pre vkladanie by vždy mali byť jednotlivci prevádzkujúci validátory na vlastnom hardvéri, kedykoľvek je to možné.

[Ďalšie informácie o rizikách vkladových tokenov](https://notes.ethereum.org/@djrtwo/risks-of-lsd).

Atribútové indikátory sa používajú nižšie na signalizáciu pozoruhodných silných alebo slabých stránok, ktoré môže mať uvedený staking pool. Túto časť použite ako referenciu, ako definujeme tieto atribúty, keď vyberáte pool, ku ktorému sa chcete pripojiť.

<StakingConsiderations page="pools" />

## Preskúmajte staking pooly {#explore-staking-pools}

K dispozícii sú rôzne možnosti, ktoré vám pomôžu s nastavením. Pomocou vyššie uvedených indikátorov sa môžete orientovať v týchto nástrojoch.

<ProductDisclaimer />

<StakingProductsCardGrid category="pools" />

Dbajte na to, že je dôležité vybrať si službu, ktorá berie [rozmanitosť klientov](/developers/docs/nodes-and-clients/client-diversity/) vážne, pretože zlepšuje zabezpečenie siete a obmedzuje vaše riziko. Služby, ktoré preukázateľne obmedzujú väčšinové klientske používanie, sú označené ako <em style={{ textTransform: "uppercase" }}>„rozmanitosť realizačného klienta“</em> a <em style={{ textTransform: "uppercase" }}>„rozmanitosť klientov konsenzu.“</em>

Máte návrh na staking nástroj, ko ktorom nevieme? Pozrite sa na naše [zásady listovania produktov](/contributing/adding-staking-products/), aby ste zistili, či by sa hodili, a odošlite ich na kontrolu.

## Často kladené otázky {#faq}

<ExpandableCard title="Ako získam odmeny?">
Tokeny ERC-20 sú obvykle vydávané vkladateľom a predstavujú hodnotu ich vložených ETH spoločne s odmenami. Majte na pamäti, že rôzne pooly rozdeľujú odmeny za vklady svojim užívateľom mierne odlišnými metódami, ale táto téma je spoločná.
</ExpandableCard>

<ExpandableCard title="Kedy si môžem vybrať svoj vklad?">
Práve teraz! K upgradu siete Shangai/Capella došlo v apríli 2023 a zaviedlo výbery staknutých vkladov. Účty validátorov, ktoré podporujú staking pooly, majú teraz možnosť opustiť a vybrať ETH na ich určenú adresu pre výber. To umožňuje možnosť vykúpiť časť svojho vkladu za základnú ETH. Informujte sa u svojho poskytovateľa, ako túto funkciu podporuje.

Prípadne pooly, ktoré využívajú na stakovanie token ERC-20, umožňujú používateľom obchodovať s týmto tokenom na otvorenom trhu, čo vám umožní predať svoju pozíciu na vkladanie a efektívne sa „stiahnuť“ bez toho, aby ste skutočne odstránili ETH zo zmluvy o vkladaní.

<ButtonLink href="/staking/withdrawals/">Viac o výbere staknutých vkladov</ButtonLink>
</ExpandableCard>

<ExpandableCard title="Líši sa to od stakovania s mojou burzou?">
Medzi týmito možnosťami pool stakovania a centralizovanými burzami existuje mnoho podobností, ako je schopnosť staviť malé množstvá ETH a nechať ich spojiť dohromady, aby sa aktivovali validátory.

Na rozdiel od centralizovaných búrz mnohé iné možnosti pool stakovania využívajú smart kontrakty a/alebo vkladové tokeny, čo sú obvykle tokeny ERC-20, ktoré je možné držať vo vlastnej peňaženke a kupovať alebo predávať rovnako ako akýkoľvek iný token. To ponúka vrstvu suverenity a zabezpečenia tým, že vám dáva kontrolu nad vašimi tokenmi, ale stále vám nedáva priamu kontrolu nad klientom validátora, ktorý osvedčuje vašim menom na pozadí.

Niektoré možnosti poolovania sú viac decentralizované ako iné, pokiaľ ide o uzly, ktoré ich podporujú. Na podporu zdravia a decentralizácie siete sa vkladateľom vždy odporúča, aby si vybrali službu poolovania, ktorá umožňuje decentralizovanú sadu operátorov uzlov bez povolenia.
</ExpandableCard>

## Ďalšie zdroje informácií {#further-reading}

- [Adresár stakovania Etherea](https://www.staking.directory/) – _Eridian a Spacesider_
- [Stakovanie s RocketPool – prehľad stakovania](https://docs.rocketpool.net/guides/staking/overview.html) – _dokumenty RocketPool_
- [Stakovanie Etherea s Lidom](https://help.lido.fi/en/collections/2947324-staking-ethereum-with-lido) – _dokumenty Lido_
