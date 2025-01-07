---
title: Výber stakingu
description: Stránka zahŕňajúca, čo sú výbery push, ako fungujú a čo musia stakeri urobiť, aby získali svoje odmeny
lang: sk
template: staking
image: /images/staking/leslie-withdrawal.png
alt: Nosorožec Leslie so svojimi odmenami za stakovanie
sidebarDepth: 2
summaryPoints:
  - Upgrade Shanghai/Capella umožnil výbery stakovania na Ethereum
  - Operátori validátorov musia pre aktiváciu poskytnúť adresu pre výber
  - Odmeny sú automaticky rozdeľované každých pár dní
  - Validátori, ktorí úplne ukončia stakovanie, dostanú zostávajúci zostatok
---

<UpgradeStatus dateKey="page-staking-withdrawals-when">
Výbery vkladov boli povolené pri upgrade Shanghai/Capella, ku ktorému došlo 12. apríla 2023. &nbsp;<a href="#when" customEventOptions={{ eventCategory: "Anchor link", eventAction: "When's it shipping?", eventName: "click" }}>Ďalšie informácie o Shanghai/Capella</a>
</UpgradeStatus>

**Výbery stakovania** označujú prevody ETH z účtu validátora na konsenzuálnej vrstve Etherea (Beacon Chain) do realizačnej vrstvy, kde s nimi možno vykonávať transakcie.

**Výplaty odmeny za prebytočný zostatok** nad 32 ETH budú automaticky a pravidelne zasielané na adresu pre výber prepojenú s každým validátorom, akonáhle ju používateľ poskytne. Užívatelia môžu tiež **úplne ukončiť stakovanie** a odomknúť tak svoj plný zostatok na validátore.

## Odmeny za stakovanie {#staking-rewards}

Platby odmien sa automaticky spracovávajú pre aktívne účty validátorov s maximálnym efektívnym zostatkom 32 ETH.

Akýkoľvek zostatok nad 32 ETH získaný prostredníctvom odmien v skutočnosti neprispieva k istine ani nezvyšuje váhu tohto validátora v sieti, a je tak automaticky vybraný ako výplata odmeny každých pár dní. Okrem jednorazového poskytnutia adresy pre výber nevyžadujú tieto odmeny žiadnu akciu zo strany operátora validátora. To všetko je zahájené na konsenzuálnej vrstve, takže v žiadnom kroku nie je vyžadovaný žiaden gas (transakčný poplatok).

### Ako sme sa sem dostali? {#how-did-we-get-here}

Počas niekoľkých posledných rokov Ethereum prešlo niekoľkými upgradmi siete a prešlo na sieť zabezpečenú samotným ETH namiesto energeticky náročnej ťažby, ako to bolo predtým. Účasť na konsenze o Ethereu je teraz známa ako „staking“, pretože účastníci dobrovoľne zablokovali ETH, čím je „v stávke“ a majú možnosť zapojiť sa do siete. Užívatelia, ktorí dodržiavajú pravidlá, budú odmenení, zatiaľ čo pokusy o podvádzanie môžu byť penalizované.

Od začatia zmluvy o stakovaní v novembri 2020 niektorí statoční priekopníci Etherea dobrovoľne uzamkli finančné prostriedky, aby aktivovali „validátorov“, špeciálne účty, ktoré majú právo formálne potvrdzovať a navrhovať bloky podľa pravidiel siete.

Pred upgradom Shanghai/Capella ste nemohli používať svoj vsadený ETH ani k nemu pristupovať. Teraz sa však môžete prihlásiť na automatické prijímanie odmien na vybraný účet a tiež môžete kedykoľvek vybrať svoje stakované ETH.

### Ako sa pripraviť? {#how-do-i-prepare}

<WithdrawalsTabComparison />

### Dôležitá poznámky {#important-notices}

Poskytnutie adresy pre výber je povinným krokom pre akýkoľvek účet validátora, než bude mať nárok na výber ETH zo svojho zostatku.

<InfoBanner emoji="⚠️" isWarning>
  <strong>Každému účtu validátora je možné priradiť iba jednu adresu pre výber, a to raz.</strong> Akonáhle je adresa vybraná a odoslaná do konsenzuálnej vrstvy, nemožno to vrátiť späť ani znovu zmeniť. Pred odoslaním znova skontrolujte vlastníctvo a správnosť poskytnutej adresy.
</InfoBanner>

Pokiaľ adresu medzitým neposkytnete, <strong>nehrozí vašim finančným prostriedkom žiadne ohrozenie</strong>, za predpokladu, že vaša mnemotechnická/seed fráza zostala v bezpečí offline a nebola žiadnym spôsobom kompromitovaná. Nepridanie prihlasovacích údajov pre výber jednoducho ponechá ETH uzamknuté v účte validátora tak, ako bolo, kým nebola poskytnutá adresa pre výber.

## Úplné ukončenie stakovania {#exiting-staking-entirely}

Pred prevedením _akýchkoľvek_ prostriedkov zo zostatku účtu validátora je vyžadované zadanie adresy pre výber.

Užívatelia, ktorí chcú úplne ukončiť stakovanie a vybrať späť svoj celý zostatok, musia tiež podpísať a vysielať správu o „dobrovoľnom odchode“ s validačnými kľúčmi, ktorá začne proces ukončenia vkladu. To sa vykonáva pomocou vášho klienta validátora a odovzdáva sa vášmu konsenzuálnemu uzlu a nevyžaduje transakčné poplatky.

Proces odchodu validátora zo stakovania trvá rôzne dlhú dobu v závislosti od toho, koľko ďalších súčasne odchádza. Po dokončení tento účet už nebude zodpovedný za plnenie povinností siete validátorov, nebude mať nárok na odmeny a nebude už jeho ETH „v stávke“. V tomto okamihu bude účet označený ako plne „možný výberu“.

Akonáhle je účet označený ako „možný výberu“ a boli poskytnuté prihlasovacie údaje pre výber, už používateľ nemusí okrem čakania nič viac robiť. Navrhovatelia blokov automaticky a nepretržite odstraňujú oprávnené vyradené prostriedky účtov a zostatok na vašom účte bude prevedený v plnej výške (známej tiež ako „úplný výber“) počas nasledujúcej <a href="#validator-sweeping" customEventOptions={{ eventCategory: "Anchor link", eventAction: "Exiting staking entirely (sweep)", eventName: "click" }}>kontroly</a>.

## Kedy sú povolené výbery stakovania? {#when}

Výbery stakovania sú živé! Funkcia výberu bola povolená v rámci upgradu Shanghai/Capella, ku ktorému došlo 12. apríla 2023.

Upgrade Shanghai/Capella umožnil získať skôr vložené ETH späť na bežné účty Ethereum. Tým sa uzavrela slučka v stakovaní likvidity a Ethereum sa o krok priblížilo na jeho ceste k vybudovaniu udržateľného, ​​škálovateľného a bezpečného decentralizovaného ekosystému.

- [Viac o histórii Etherea](/history/)
- [Viac o pláne realizácie Etherea](/roadmap/)

## Ako fungujú výbery? {#how-do-withdrawals-work}

O tom, či má daný validátor nárok na výber alebo nie, rozhoduje stav samotného účtu validátora. Na určenie, či má byť pri účte zahájený výber alebo nie, nie je v žiadnom momente potrebný žiadny užívateľský vstup – celý proces prebieha automaticky konsenzuálnou vrstvou v nepretržitej slučke.

### More of a visual learner? {#visual-learner}

Pozrite sa na toto vysvetlenie výberov zo stakovania Ethereum od Finematics:

<YouTube id="RwwU3P9n3uo" />

### „Upratovanie“ validátorov {#validator-sweeping}

Keď je naplánované, že validátor navrhne ďalší blok, je nutné zostaviť front pre výber až 16 oprávnených výberov. To sa robí tak, že sa pôvodne začne s indexom validátora 0, určí sa, či pre tento účet existuje oprávnený výber podľa pravidiel protokolu, a ak áno, pridá sa do frontu. Validátor nastavený tak, aby navrhoval nasledujúci blok, bude pokračovať tam, kde skončil posledný, pričom postupuje v poradí neobmedzene dlho.

<InfoBanner emoji="🕛">
Predstavte si analógové hodiny. Ručička na hodinách ukazuje na hodinu, postupuje jedným smerom, nepreškoči žiadnu hodinu a nakoniec sa po dosiahnutí posledného čísla opäť pretočí na začiatok.<br/><br/>
Teraz si namiesto 1 až 12 predstavte, že hodiny majú 0 až N<em>(celkový počet účtov validátorov, ktoré kedy boli zaregistrované na vrstve konsenzu – k januáru 2023 ich je cez 500 000).</em><br/><br/>
Ručička na hodinách ukazuje na ďalší validátor, pri ktorom je potrebné skontrolovať oprávnené výbery. Začína na 0 a postupuje stále dookola bez toho, aby preskočila akýkoľvek účet. Keď je dosiahnutý posledný validátor, cyklus pokračuje od začiatku.
</InfoBanner>

#### Kontrola účtu pre výbery {#checking-an-account-for-withdrawals}

Zatiaľ čo navrhovateľ prechádza validátormi ohľadom možných výberov, každý kontrolovaný validátor je hodnotený na základe krátkej série otázok, aby sa určilo, či by mal byť spustený výber, a ak áno, aké množstvo ETH by sa malo odobrať.

1. **Bola zadaná adresa pre výber?** Ak nebola zadaná žiadna adresa pre výber, účet bude preskočený a výber sa nezačne.
2. **Je validátor ukončený a je možné ho vybrať?** Pokiaľ validátor úplne skončil a my sme dosiahli epochu, kedy je ich účet považovaný za „možný výberu“, dôjde k úplnému výberu. Tým sa celý zostávajúci zostatok prevedie na adresu pre výber.
3. **Je efektívny zostatok maximálnych 32?** Ak má účet prihlasovacie údaje k výberu, nie je úplne ukončený a čakajú odmeny vo vyššom počte ako 32, bude spracovaný čiastočný výber, ktorý prevedie iba odmeny nad 32 na adresu výberu užívateľa.

Operátori validátora v priebehu životného cyklu validátora vykonávajú iba dve akcie, ktoré priamo ovplyvňujú tento tok:

- poskytujú prihlasovacie údaje pre výber, aby umožnili akúkoľvek formu výberu,
- opustenie siete, čo spôsobí úplný výber.

### Bez poplatku za gas {#gas-free}

Tento prístup k výberom stakovania zabraňuje tomu, aby stakeri museli ručne odoslať transakciu požadujúcu výber konkrétnej sumy ETH. To znamená, že nie je vyžadovaný **žiadny gas (transakčný poplatok**) a výbery tiež nesúťažia o existujúci blokový priestor vykonávacej vrstvy.

### Ako často dostanem odmeny za stakovanie? {#how-soon}

Maximálny počet výberov, ktoré je možné spracovať v jednom bloku je 16. Pri tomto tempe je možné spracovať 115 200 výberov validátorov za deň (za predpokladu, že nie sú žiadne vynechané sloty). Ako je uvedené vyššie, validátori bez oprávnených výberov budú preskočení, čím sa skráti čas na dokončenie kontroly.

Po rozšírení tohto výpočtu môžeme odhadnúť dobu, ktorú bude trvať spracovanie daného počtu výberov:

<TableContainer>

| Počet výberov | Čas na dokončenie | 
| :-------------------: | :--------------:| 
| 400 000 | 3,5 dňa | 
| 500 000 | 4,3 dňa | 
| 600 000 | 5,2 dňa | 
| 700 000 | 6,1 dňa | 
| 800 000 | 7,0 dní |

</TableContainer>

Ako vidíte, čím viac validátorov je na sieti, tým je proces pomalší. Nárast vynechaných slotov by to mohol úmerne spomaliť, ale to bude všeobecne predstavovať spomalenie možných výsledkov.

## Často kladené otázky {#faq}

<ExpandableCard
title="Môžem zadanú adresu pre výber zmeniť na alternatívnu adresu pre výber?"
eventCategory="FAQ"
eventAction="Once I have provided a withdrawal address, can I change it to an alternative withdrawal address?"
eventName="read more">
Nie, proces poskytnutia prihlasovacích údajov pre výber je jednorazový proces a nemožno ho po odoslaní zmeniť.
</ExpandableCard>

<ExpandableCard
title="Prečo je možné adresu pre výber nastaviť iba raz?"
eventCategory="FAQ"
eventAction="Why can a withdrawal address only be set once?"
eventName="read more">
Nastavením adresy pre vyberanie vykonávacej vrstvy boli prihlasovacie údaje pre tento validátor trvalo zmenené. To znamená, že staré prihlasovacie údaje už nebudú fungovať a nové prihlasovacie údaje budú presmerované na účet vykonávacej vrstvy.

Adresy pre výber môžu byť buď smart kontrakt (riadené svojim kódom), alebo externe vlastnený účet (EOA, riadený svojim súkromným kľúčom). V súčasnej dobe tieto účty nemajú žiadny spôsob, ako odovzdať správu späť do konsenzuálnej vrstvy, ktorá by signalizovala zmenu poverenia validátora, a pridanie tejto funkcie by pridalo zbytočné zložitosti protokolu.

Ako alternatívu k zmene adresy pre výber u konkrétneho validátora sa používatelia môžu rozhodnúť nastaviť ako adresu pre výber smart kontrakt, ktorý zvládne rotáciu kľúčov, ako je Safe. Používatelia, ktorí nastavia svoje prostriedky na vlastné EOA, môžu vykonať úplný odchod, aby mohli vybrať všetky svoje stakované prostriedky, a potom znova stakovať pomocou nových poverení.
</ExpandableCard>

<ExpandableCard
title="Čo keď sa zúčastňujem stakovania tokenov alebo pool stakovania"
eventCategory="FAQ"
eventAction="What if I participate in staking tokens or pooled staking"
eventName="read more">

Ak ste súčasťou <a href="/staking/pools/">stakovacie poolu</a> alebo držíte stakovacie tokeny, mali by ste sa u svojho poskytovateľa informovať o tom, ako sa nakladá s výbermi stakovanej sumy, pretože každá služba funguje inak.

Vo všeobecnosti by používatelia mali mať možnosť získať späť svoje základné stakované ETH alebo zmeniť poskytovateľa stakovania, ktorého využívajú. Ak je konkrétny pool príliš veľký, je možné prostriedky opustiť, uplatniť a znovu stakovať u menšieho <a href="https://rated.network/">poskytovateľa</a>. Alebo, ak ste nazhromaždili dostatok ETH, môžete <a href="/staking/solo/">stakovať ako jednotlivec</a>.

</ExpandableCard>

<ExpandableCard
title="Prebiehajú výplaty odmien (čiastočné výbery) automaticky?"
eventCategory="FAQ"
eventAction="Do reward payments (partial withdrawals) happen automatically?"
eventName="read more">
Áno, pokiaľ váš validátor poskytol adresu pre výber. Tá musí byť poskytnutá raz, aby bolo možné spočiatku vykonávať akékoľvek výbery, potom budú platby odmien automaticky spustené každých niekoľko dní s každým validátorom.
</ExpandableCard>

<ExpandableCard
title="Prebiehajú úplné výbery automaticky?"
eventCategory="FAQ"
eventAction="Do full withdrawals happen automatically?"
eventName="read more">

Nie, pokiaľ je váš validátor stále aktívny v sieti, k úplnému výberu nedôjde automaticky. To si vyžaduje ručné spustenie dobrovoľného ukončenia.

Hneď ako validátor dokončí proces ukončenia a za predpokladu, že účet má prihlasovacie údaje k výberu, bude zostávajúci zostatok <em>potom</em> vybraný počas nasledujúcej <a href="#validator-sweeping">kontroly validátorov</a>.

</ExpandableCard>

<ExpandableCard title="Môžem zvoliť vlastnú výšku výberu?"
eventCategory="FAQ"
eventAction="Can I withdraw a custom amount?"
eventName="read more">
Výbery sú navrhnuté tak, aby boli spúšťané automaticky a prevádzali akékoľvek ETH, ktoré aktívne neprispievajú ku stakovaniu. To zahŕňa úplné zostatky účtov, ktoré dokončili proces ukončenia.

Nie je možné ručne vyžiadať určité množstvo ETH na výber.
</ExpandableCard>

<ExpandableCard
title="Prevádzkujem validátor. Kde nájdem viac informácií o povolení výberov?"
eventCategory="FAQ"
eventAction="I operate a validator. Where can I find more information on enabling withdrawals?"
eventName="read more">

Prevádzkovateľom validátorov odporúčame navštíviť stránku <a href="https://launchpad.ethereum.org/withdrawals/">Výbery zo Staking Launchpadu</a>, kde nájdete ďalšie podrobnosti o príprave validátora na výbery, načasovanie udalostí a ďalšie podrobnosti o fungovaní výberov.

Ak chcete svoje nastavenie najprv vyskúšať na testovacej sieti, navštívte <a href="https://holesky.launchpad.ethereum.org">Holesky Testnet Staking Launchpad</a> a začnite.

</ExpandableCard>

<ExpandableCard
title="Môžem znova aktivovať svoj validátor po ukončení vložením viacerých ETH?"
eventCategory="FAQ"
eventAction="Can I re-activate my validator after exiting by depositing more ETH?"
eventName="read more">
Nie. Hneď ako validátor skončí a vyberie sa jeho celý zostatok, všetky dodatočné prostriedky vložené na tomto validátore budú automaticky prevedené na adresu pre výber počas nasledujúcej kontroly tohto validátora. Ak chcete znovu stakovať ETH, musí byť aktivovaný nový validátor.
</ExpandableCard>

## Ďalšie zdroje informácií {#further-reading}

- [Výbery zo Staking Launchpadu](https://launchpad.ethereum.org/withdrawals)
- [EIP-4895: nútené výbery beacon chainu výberu ako operácia](https://eips.ethereum.org/EIPS/eip-4895)
- [Ethereum Cat Herders – Shanghai](https://www.ethereumcatherders.com/shanghai_upgrade/index.html)
- [PEEPanEIP #94: výber stakovaných ETH (testovanie) s Potuz & Hsiao-Wei Wang](https://www.youtube.com/watch?v=G8UstwmGtyE)
- [PEEPanEIP#68: EIP-4895: nútené výbery beacon chainu ako operácia s Alexom Stokesom](https://www.youtube.com/watch?v=CcL9RJBljUs)
- [Porozumenie efektívnemu zostatku validátora](https://www.attestant.io/posts/understanding-validator-effective-balance/)
