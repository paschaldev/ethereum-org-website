---
title: Uzamčení výběrů
description: Stránka shrnující, co jsou výběry push, jak fungují a co musí stakeři udělat, aby získali své odměny
lang: cs
template: staking
image: /images/staking/leslie-withdrawal.png
alt: Nosorožec Leslie se svými vkladovými odměnami
sidebarDepth: 2
summaryPoints:
  - Upgrade Shanghai/Capella umožnil výběry sázek na Ethereum
  - Operátoři validátorů musí pro aktivaci poskytnout adresu pro výběr
  - Odměny jsou automaticky rozdělovány každých několik dní
  - Validátoři, kteří zcela ukončí vklady, obdrží zbývající zůstatek
---

<UpgradeStatus dateKey="page-staking-withdrawals-when">
Výběry vkladů byly povoleny při upgradu Shanghai/Capella, ke kterému došlo 12. dubna 2023.&nbsp;<a href="#when" customEventOptions={{ eventCategory: "Anchor link", eventAction: "When's it shipping?", eventName: "click" }}>Další informace o Šanghaji/Capelle</a>
</UpgradeStatus>

**Výběry vkladů** označují převody ETH z účtu validátoru na konsensuální vrstvě Etherea (Beacon Chain) do realizační vrstvy, kde s nimi lze provádět transakce.

**Výplaty odměny za přebytečný zůstatek** nad 32 ETH budou automaticky a pravidelně zasílány na adresu pro výběr propojenou s každým validátorem, jakmile ji poskytne uživatel. Uživatelé mohou také **úplně ukončit vklady** a odemknout tak svůj plný zůstatek na validátoru.

## Vložení odměn {#staking-rewards}

Platby odměn se automaticky zpracovávají pro aktivní účty validátorů s maximálním efektivním zůstatkem 32 ETH.

Jakýkoli zůstatek nad 32 ETH získaný prostřednictvím odměn ve skutečnosti nepřispívá k jistině ani nezvyšuje váhu tohoto validátoru v síti, a je tak automaticky vybrán jako výplata odměny každých několik dní. Kromě jednorázového poskytnutí adresy pro výběr nevyžadují tyto odměny žádnou akci ze strany operátora validátoru. To vše je zahájeno na konsensuální vrstvě, takže v žádném kroku není vyžadováno žádné palivo (transakční poplatek).

### Jak jsme se sem dostali? {#how-did-we-get-here}

Během několika posledních let Ethereum prošlo několika upgrady sítě a přešlo na síť zabezpečenou samotným ETH namísto energeticky náročné těžby, jak tomu bylo dříve. Účast na konsensu o Ethereu je nyní známá jako „staking“, protože účastníci dobrovolně zablokovali ETH, čímž je „v sázce“ možnost zapojit se do sítě. Uživatelé, kteří dodržují pravidla, budou odměněni, zatímco pokusy o podvádění mohou být penalizovány.

Od zahájení smlouvy o vkladu v listopadu 2020 někteří stateční průkopníci Etherea dobrovolně uzamkli finanční prostředky, aby aktivovali „validátory“, speciální účty, které mají právo formálně potvrzovat a navrhovat bloky podle pravidel sítě.

Před upgradem Shanghai/Capella jste nemohli používat svůj vsazený ETH ani k němu přistupovat. Nyní se však můžete přihlásit k automatickému přijímání odměn na vybraný účet a také můžete kdykoli vybrat své vsazené ETH.

### Jak mohu přispět? {#how-do-i-prepare}

<WithdrawalsTabComparison />

### Důležitá upozornění {#important-notices}

Poskytnutí adresy pro výběr je povinným krokem pro jakýkoli účet validátoru, než bude mít nárok na výběr ETH ze svého zůstatku.

<InfoBanner emoji="⚠️" isWarning>
  <strong>Každému účtu validátoru lze přiřadit pouze jednu adresu pro výběr, a to jednou.</strong> Jakmile je adresa vybrána a odeslána do konsensuální vrstvy, nelze to vrátit zpět ani znovu změnit. Před odesláním znovu zkontrolujte vlastnictví a správnost poskytnuté adresy.
</InfoBanner>

Pokud adresu mezitím neposkytnete, <strong>nehrozí vašim finančním prostředkům žádné ohrožení</strong>, za předpokladu, že vaše mnemotechnická pomůcka nebo fráze zůstala v bezpečí offline a nebyla žádným způsobem kompromitována. Nepřidání přihlašovacích údajů pro výběr jednoduše ponechá ETH uzamčené v účtu validátoru tak, jak bylo, dokud nebyla poskytnuta adresa pro výběr.

## Úplné ukončení stakingu {#exiting-staking-entirely}

Před převedením _jakýchkoli_ prostředků ze zůstatku účtu validátoru je vyžadováno zadání adresy pro výběr.

Uživatelé, kteří chtějí zcela ukončit vklady a vybrat zpět svůj celý zůstatek, musí také podepsat a vysílat zprávu „dobrovolný odchod“ s validačními klíči, která zahájí proces ukončení vkladu. To se provádí pomocí vašeho klienta validátoru a předává se vašemu konsensuálnímu uzlu a nevyžaduje palivo.

Proces odchodu validátoru z vkládání trvá různě dlouhou dobu v závislosti na tom, kolik dalších současně odchází. Po dokončení tento účet již nebude odpovědný za plnění povinností sítě validátorů, nebude mít nárok na odměny a nebude již „v sázce“ jejich ETH. V tomto okamžiku bude účet označen jako plně „výběrný“.

Jakmile je účet označen jako „výběrný“ a byly poskytnuty přihlašovací údaje pro výběr, uživatel nemusí kromě čekání dělat nic jiného. Navrhovatelé bloků automaticky a nepřetržitě odstraňují způsobilé vyřazené prostředky a zůstatek na vašem účtu bude převeden v plné výši (známé také jako „úplný výběr“) během příští <a href="#validator-sweeping" customEventOptions={{ eventCategory: "Anchor link", eventAction: "Exiting staking entirely (sweep)", eventName: "click" }}>kontroly</a>.

## Kdy jsou povoleny výběry vkladů? {#when}

Výběry vkladů jsou živé! Funkce výběru byla povolena v rámci upgradu Shanghai/Capella, ke kterému došlo 12. dubna 2023.

Upgrade Shanghai/Capella umožnil získat dříve vložené ETH zpět na běžné účty Ethereum. Tím se uzavřela smyčka v nasazování likvidity a Ethereum se o krok přiblížilo na jeho cestě k vybudování udržitelného, ​​škálovatelného a bezpečného decentralizovaného ekosystému.

- [Více o historii Etherea](/history/)
- [Více o plánu Etherea](/roadmap/)

## Jak fungují platby za výběr? {#how-do-withdrawals-work}

O tom, zda má daný validátor nárok na výběr či nikoli, rozhoduje stav samotného účtu validátoru. K určení, zda má být u účtu zahájen výběr či nikoli, není v žádném okamžiku potřeba žádný uživatelský vstup – celý proces probíhá automaticky konsensuální vrstvou v nepřetržité smyčce.

### Učíte se spíše vizuálně? {#visual-learner}

Podívejte se na toto vysvětlení výběrů z vkladů Ethereum od Finematics:

<YouTube id="RwwU3P9n3uo" />

### Kontrola validátorů {#validator-sweeping}

Když je naplánováno, že validátor navrhne další blok, je nutné sestavit frontu pro výběr až 16 způsobilých výběrů. To se provádí tak, že se původně začne s indexem validátoru 0, určí se, zda pro tento účet existuje způsobilý výběr podle pravidel protokolu, a pokud ano, přidá se do fronty. Validátor nastavený tak, aby navrhoval následující blok, bude pokračovat tam, kde skončil poslední, přičemž postupuje v pořadí neomezeně dlouho.

<InfoBanner emoji="🕛">
Představte si analogové hodiny. Ručička na hodinách ukazuje na hodinu, postupuje jedním směrem, nepřeskakuje žádné hodiny a nakonec se po dosažení posledního čísla opět přetočí na začátek.<br/><br/>
Nyní si místo 1 až 12 představte, že hodiny mají 0 až N <em>(celkový počet účtů validátorů, které kdy byly zaregistrovány na vrstvě konsensu, přes 500 000 k lednu 2023).</em><br/> <br/>
Ručička na hodinách ukazuje na další validátor, u kterého je třeba zkontrolovat oprávněné výběry. Začíná na 0 a postupuje stále dokola, aniž by přeskakovala jakýkoli účet. Když je dosaženo posledního validátoru, cyklus pokračuje zpět na začátek.
</InfoBanner>

#### Kontrola účtu pro výběry {#checking-an-account-for-withdrawals}

Zatímco navrhovatel prochází validátory ohledně možných výběrů, každý kontrolovaný validátor je hodnocen na základě krátké série otázek, aby se určilo, zda by měl být spuštěn výběr, a pokud ano, jaké množství ETH by mělo být odebráno.

1. **Byla zadána adresa pro výběr?** Pokud nebyla zadána žádná adresa pro výběr, účet bude přeskočen a výběr nebude zahájen.
2. **Je validátor ukončen a lze jej vybrat?** Pokud validátor zcela skončil a my jsme dosáhli epochy, kdy je jejich účet považován za „výběrný“, dojde k úplnému výběru. Tím se celý zbývající zůstatek převede na adresu pro výběr.
3. **Je efektivní zůstatek maximálních 32?** Pokud má účet přihlašovací údaje k výběru, není úplně ukončen a čekají odměny ve vyšším počtu než 32, bude zpracován částečný výběr, který převede pouze odměny nad 32 na adresu výběru uživatele.

Operátoři validátoru v průběhu životního cyklu validátoru provádějí pouze dvě akce, které přímo ovlivňují tento tok:

- Poskytněte přihlašovací údaje pro výběr, abyste umožnili jakoukoli formu výběru.
- Opusťte síť, což způsobí úplný výběr.

### Bez paliva {#gas-free}

Tento přístup k výběrům vkladů zabraňuje tomu, aby satkeři museli ručně odeslat transakci požadující výběr konkrétní částky ETH. To znamená, že **není vyžadováno žádné palivo (transakční poplatek)** a výběry také nesoutěží o stávající blokový prostor prováděcí vrstvy.

### Jak často dostanu odměny za vklady? {#how-soon}

Maximální počet výběrů, které je možné zpracovat v jednom bloku. Při tomto tempu lze zpracovat 115 200 výběrů validátorů za den (za předpokladu, že nejsou žádné vynechané sloty). Jak je uvedeno výše, validátoři bez způsobilých výběrů budou přeskočeni, čímž se zkrátí čas na dokončení kontroly.

Po rozšíření tohoto výpočtu můžeme odhadnout dobu, kterou bude trvat zpracování daného počtu výběrů:

<TableContainer>

| Počet výběrů | Čas na dokončení |
| :--------------------: | :---------------: |
| 400 000 | 3,5 dne |
| 500 000 | 4,3 dne |
| 600 000 | 5,2 dne |
| 700 000 | 6,1 dne |
| 800 000 | 7,0 dnů |

</TableContainer>

Jak vidíte, toto se zpomaluje, protože je v síti více validátorů. Nárůst vynechaných slotů by to mohl úměrně zpomalit, ale to bude obecně představovat pomalejší možné výsledky.

## Často kladené dotazy {#faq}

<ExpandableCard
title="Mohu zadanou adresu pro výběr změnit na alternativní adresu pro výběr?"
eventCategory="FAQ"
eventAction="Once I have provided a withdrawal address, can I change it to an alternative withdrawal address?"
eventName="read more">
Ne, proces poskytnutí přihlašovacích údajů pro výběr je jednorázový proces a nelze jej po odeslání změnit.
</ExpandableCard>

<ExpandableCard
title="Proč lze adresu pro výběr nastavit pouze jednou?"
eventCategory="FAQ"
eventAction="Why can a withdrawal address only be set once?"
eventName="read more">
Nastavením adresy pro stažení prováděcí vrstvy byly přihlašovací údaje pro tento validátor trvale změněny. To znamená, že staré přihlašovací údaje již nebudou fungovat a nové přihlašovací údaje budou přesměrovány na účet prováděcí vrstvy.

Adresy pro výběr mohou být buď chytrý kontrakt (řízený svým kódem), nebo externě vlastněný účet (EOA, řízený svým privátním klíčem). V současné době tyto účty nemají žádný způsob, jak předat zprávu zpět do konsensuální vrstvy, která by signalizovala změnu pověření validátoru, a přidání této funkce by přidalo zbytečné složitosti protokolu.

Jako alternativu ke změně adresy pro výběr u konkrétního validátoru se uživatelé mohou rozhodnout nastavit jako adresu pro výběr chytrý kontrakt, který zvládne rotaci klíčů, jako je Trezor. Uživatelé, kteří nastaví své prostředky na vlastní EOA, mohou provést úplný odchod, aby mohli vybrat všechny své vložené prostředky, a poté znovu vložit pomocí nových pověření.
</ExpandableCard>

<ExpandableCard
title="Co když se účastním vkladových tokenů nebo sdružených vkladů"
eventCategory="FAQ"
eventAction="What if I participate in staking tokens or pooled staking"
eventName="read more">

Pokud jste součástí <a href="/staking/pools/">vkladového fondu</a> nebo držíte vkladové tokeny, měli byste se u svého poskytovatele informovat o tom, jak se nakládá s výběry vkladů, protože každá služba funguje jinak.

Obecně by uživatelé měli mít možnost získat zpět své základní vložené ETH nebo změnit poskytovatele vkladů, kterého využívají. Pokud je konkrétní fond příliš velký, lze prostředky opustit, uplatnit a znovu vložit u <a href="https://rated.network/">menšího poskytovatele</a>. Nebo, pokud jste nashromáždili dostatek ETH, můžete <a href="/staking/solo/">vložit z domova</a>.

</ExpandableCard>

<ExpandableCard
title="Probíhají výplaty odměn (částečné výběry) automaticky?"
eventCategory="FAQ"
eventAction="Do reward payments (partial withdrawals) happen automatically?"
eventName="read more">
Ano, pokud váš validátor poskytl adresu pro výběr. Ta musí být poskytnuta jednou, aby bylo možné zpočátku provádět jakékoli výběry, poté budou platby odměn automaticky spuštěny každých několik dní s každým validátorem.
</ExpandableCard>

<ExpandableCard
title="Probíhají úplné výběry automaticky?"
eventCategory="FAQ"
eventAction="Do full withdrawals happen automatically?"
eventName="read more">

Ne, pokud je váš validátor stále aktivní v síti, k úplnému výběru nedojde automaticky. To vyžaduje ruční spuštění dobrovolného ukončení.

Jakmile validátor dokončí proces ukončení a za předpokladu, že účet má přihlašovací údaje k výběru, bude zbývající zůstatek <em>pak</em> vybrán během příští <a href="#validator-sweeping">kontroly validátorem</a>.

</ExpandableCard>

<ExpandableCard title="Mohu vybrat vlastní částku?"
eventCategory="FAQ"
eventAction="Can I withdraw a custom amount?"
eventName="read more">
Výběry jsou navrženy tak, aby byly spouštěny automaticky a převáděly jakékoli ETH, které aktivně nepřispívají ke vkladu. To zahrnuje úplné zůstatky účtů, které dokončily proces ukončení.

Není možné ručně vyžádat určité množství ETH k výběru.
</ExpandableCard>

<ExpandableCard
title="Provozuji validátor. Kde najdu více informací o povolení výběrů?"
eventCategory="FAQ"
eventAction="I operate a validator. Where can I find more information on enabling withdrawals?"
eventName="read more">

Provozovatelům validátorů doporučujeme navštívit stránku <a href="https://launchpad.ethereum.org/withdrawals/">Výběry z vkladového spouštěcího panelu</a>, kde najdete další podrobnosti o přípravě validátoru na výběry, načasování událostí a další podrobnosti o fungování výběrů.

Chcete-li své nastavení nejprve vyzkoušet na testovací síti, navštivte <a href="https://holesky.launchpad.ethereum.org">Holesky Testnet Staking Launchpad</a> a začněte.

</ExpandableCard>

<ExpandableCard
title="Mohu znovu aktivovat svůj validátor po ukončení vložením více ETH?"
eventCategory="FAQ"
eventAction="Can I re-activate my validator after exiting by depositing more ETH?"
eventName="read more">
Ne. Jakmile validátor skončí a vybere se jeho celý zůstatek, veškeré dodatečné prostředky vložené na tomto validátoru budou automaticky převedeny na adresu pro výběr během příští kontroly validátoru. Chcete-li znovu vložit ETH, musí být aktivován nový validátor.
</ExpandableCard>

## Další informace {#further-reading}

- [Výběry z vkladového spouštěcího panelu](https://launchpad.ethereum.org/withdrawals)
- [EIP-4895: Řetězová vazba výběru jako operace](https://eips.ethereum.org/EIPS/eip-4895)
- [Ethereum Cat Herders – Šanghaj](https://www.ethereumcatherders.com/shanghai_upgrade/index.html)
- [PEEPanEIP #94: Výběr vložených ETH (testování) s Potuz & Hsiao-Wei Wang](https://www.youtube.com/watch?v=G8UstwmGtyE)
- [PEEPanEIP#68: EIP-4895: Výběry pomocí řetězové vazby jako operace s Alexem Stokesem](https://www.youtube.com/watch?v=CcL9RJBljUs)
- [Porozumění efektivnímu zůstatku validátoru](https://www.attestant.io/posts/understanding-validator-effective-balance/)
