---
title: Stakovanie, ako služba
description: Prehľad, ako začať s poolovým stakovaním ETH
lang: sk
template: staking
emoji: ":money_with_wings:"
image: /images/staking/leslie-saas.png
alt: Nosorožec Leslie plávajúci v oblakoch.
sidebarDepth: 2
summaryPoints:
  - Operátori uzlov tretích strán zaisťujú prevádzku vášho klienta validátora
  - Skvelá voľba pre každého s 32 ETH, kto nechce riešiť technickú zložitosť prevádzky uzla
  - Znížte dôveru a udržujte svoje výberové kľúče v úschove
---

## Čo je stakovanie ako služba? {#what-is-staking-as-a-service}

Stakovanie ako služba („SaaS“) predstavuje kategóriu služieb stakovania, kde vkladáte svojich vlastných 32 ETH pre validátora, ale operácie uzla delegujete na operátora tretej strany. Tento proces obvykle zahŕňa vykonanie úvodného nastavenia, vrátane vygenerovania a uloženia kľúča, a potom nahranie vašich podpisových kľúčov operátorovi. To službe umožňuje prevádzkovať váš validátor vašim menom, obvykle za mesačný poplatok.

## Prečo stakovať so službou? {#why-stake-with-a-service}

Protokol Ethereum natívne nepodporuje delegovanie stakovania, takže tieto služby boli vytvorené tak, aby naplnili túto požiadavku. Ak máte 32 ETH, ktoré môžete stakovať, ale necítite sa na prácu s hardvérom, služby SaaS vám umožnia delegovať tú najťažšiu časť, zatiaľ čo získate natívne blokové odmeny.

<CardGrid>
  <Card title="Váš vlastný validátor" emoji=":desktop_computer:" description="Deposit your own 32 ETH to activate your own set of signing keys that will participate in Ethereum consensus. Monitor your progress with dashboards to watch those ETH rewards accumulate." />
  <Card title="Jednoduché spustenie" emoji="🏁" description="Forget about hardware specs, setup, node maintenance and upgrades. SaaS providers let you outsource the hard part by uploading your own signing credentials, allowing them to run a validator on your behalf, for a small cost." />
  <Card title="Obmedzuje vaše riziko" emoji=":shield:" description="In many cases users do not have to give up access to the keys that enable withdrawing or transferring staked funds. These are different from the signing keys, and can be stored separately to limit (but not eliminate) your risk as a staker." />
</CardGrid>

<StakingComparison page="saas" />

## Čo treba zvážiť {#what-to-consider}

Počet poskytovateľov SaaS, ktorí vám pomôžu vložiť vaše ETH, stále rastie. Jednotliví poskytovatelia sa líšia výhodami a rizikami. V porovnaní s domácim stakovaním vyžadujú všetky varianty SaaS ďalšiu dôveru. Možnosti Saas môžu mať ďalší kód obaľujúci klientov Ethereum, ktorý nie je otvorený ani auditovateľný. SaaS má tiež škodlivý vplyv na decentralizáciu siete. V závislosti od nastavenia nemusíte ovládať validotára – operátor by mohol pri používaní vášho ETH konať nečestne.

Atribútové indikátory sa používajú na signalizáciu pozoruhodných silných alebo slabých stránok, ktoré môže mať uvedený poskytovateľ SaaS. Použite túto časť ako referenciu, ako definujeme tieto atribúty, keď si vyberáte službu, ktorá vám pomôže na ceste stakovaním.

<StakingConsiderations page="saas" />

## Preskúmajte poskytovateľov stakingových služieb {#saas-providers}

Nižšie uvádzame niekoľko dostupných poskytovateľov SaaS. Pomocou vyššie uvedených indikátorov sa môžete orientovať v týchto službách

<ProductDisclaimer />

### Poskytovatelia SaaS

<StakingProductsCardGrid category="saas" />

Vezmite prosím na vedomie, že je dôležité podporovať [rozmanitosť klientov](/developers/docs/nodes-and-clients/client-diversity/), pretože zlepšuje zabezpečenie siete a obmedzuje vaše riziko. Služby, ktoré preukázateľne obmedzujú väčšinové klientske používanie, sú označené ako <em style={{ textTransform: "uppercase" }}>„rozmanitosť realizačného klienta“</em> a <em style={{ textTransform: "uppercase" }}>„rozmanitosť klientov konsenzu.“</em>

### Generátory kľúčov

<StakingProductsCardGrid category="keyGen" />

Máte návrh na poskytovateľa stakingových služieb, o ktorom nevieme? Pozrite sa na naše [zásady listovania produktov](/contributing/adding-staking-products/), aby ste zistili, či by sa hodili, a odošlite ich na kontrolu.

## Často kladené otázky {#faq}

<ExpandableCard title="Kto drží moje kľúče?" eventCategory="SaasStaking" eventName="clicked who holds my keys">
Dojednania sa budú u jednotlivých poskytovateľov líšiť, ale zvyčajne vás prevedieme nastavením všetkých potrebných podpisových kľúčov (jeden na 32 ETH) a ich nahraním poskytovateľovi, aby ich mohol overiť vašim menom. Samotné podpisové kľúče nedávajú žiadnu možnosť vybrať, previesť alebo minúť vaše prostriedky. Poskytujú však možnosť odovzdať hlasy smerom ku konsenzu, čo, pokiaľ nie je vykonané správne, môže mať za následok offline penalizáciu alebo slashing.
</ExpandableCard>

<ExpandableCard title="Takže existujú dve sady kľúčov?" eventCategory="SaasStaking" eventName="clicked so there are two sets of keys">
Áno. Každý účet zahŕňa <em>podpisové</em> kľúče BLS aj kľúče BLS pre <em>výber</em>. Aby mohol validátor overovať stav reťazca, zúčastňovať sa synchronizačných výborov a navrhovať bloky, musia byť podpisové kľúče ľahko dostupné pre klienta validátora. Tie musia byť nejakou formou pripojené k internetu, a sú teda neodmysliteľne považované za kľúče, o ktoré je „záujem“. Túto požiadavku váš validátor potrebuje na potvrdenie, a preto sú kľúče používané na prevod alebo výber prostriedkov z bezpečnostných dôvodov oddelené.

Výberové kľúče BLS sa používajú na podpísanie jednorazovej správy, ktorá deklaruje, na ktorú vykonávaciu vrstvu by odmeny za vklady na účet a vyradené prostriedky mali ísť. Akonáhle je táto správa odvysielaná, kľúče pre <em>výber BLS</em> už nie sú potrebné. Namiesto toho je kontrola nad vybranými prostriedkami trvale delegovaná na adresu, ktorú ste uviedli. To vám umožňuje nastaviť adresu pre výber zabezpečenú prostredníctvom vášho vlastného chladného úložiska, čím sa minimalizuje riziko pre vaše prostriedky validátora, aj keď niekto iný ovláda vaše podpisové kľúče validátora.

Aktualizácia prihlasovacích údajov pre výber je nevyhnutným krokom na povolenie výberov\*. Tento proces zahŕňa generovanie kľúčov pre výber pomocou vašej mnemotechnickej počiatočnej frázy.

<strong>Uistite sa, že túto počiatočnú frázu bezpečne zálohujete, inak nebudete môcť vygenerovať kľúče pre výber, až príde čas.</strong>

\*Vkladatelia, ktorí poskytli adresu pre výber s počiatočným vkladom, toto nastavovať nemusia. Overte si u svojho poskytovateľa SaaS podporu ohľadom prípravy validátora.
</ExpandableCard>

<ExpandableCard title="Kedy môžem urobiť výber?" eventCategory="SaasStaking" eventName="clicked when can I withdraw">
Výbery stakovania boli vykonané v rámci aktualizácie Shanghai/Capella v apríli 2023. Stakeri musia zadať adresu pre výber (pokiaľ nie je uvedená pri počiatočnom vklade) a výplaty odmien sa začnú automaticky rozdeľovať pravidelne každých pár dní.

Validátori môžu tiež úplne ukončiť svoju funkciu ako validátori, čo odomkne ich zostávajúci ETH zostatok pre výber. Účty, ktoré uviedli adresu pre vykonanie výberu a dokončili proces ukončenia, dostanú celý zostatok na adresu pre výber uvedenú počas nasledujúcej kontroly validátorov.

<ButtonLink href="/staking/withdrawals/">Viac o výbere staknutých vkladov</ButtonLink>
</ExpandableCard>

<ExpandableCard title="Čo sa stane, keď dostanem trest?" eventCategory="SaasStaking" eventName="clicked what happens if I get slashed">
Používaním poskytovateľa SaaS zverujete prevádzku svojho uzla niekomu inému. To je spojené s rizikom zlého výkonu uzla, ktorý nemôžete ovplyvniť. V prípade, že je váš validátor potrestaný, váš zostatok validátora bude penalizovaný a násilne odstránený z fondu validátorov.

Po dokončení procesu slashing/opustenia budú tieto prostriedky prevedené na adresu pre výber pridelenú validátorovi. To si vyžaduje poskytnutie adresy pre výber. Tá môže byť poskytnutá pri počiatočnom vklade. Ak nie, na podpísanie správy deklarujúcu adresu pre výber bude potrebné použiť kľúče validátora pre výber. Ak nebola zadaná žiadna adresa pre výber, prostriedky zostanú uzamknuté, kým ju nezadáte.

Obráťte sa na jednotlivého poskytovateľa SaaS pre ďalšie podrobnosti o akýchkoľvek zárukách alebo možnostiach poistenia a pre pokyny, ako zadať adresu pre výber. Pokiaľ chcete mať nastavenie validátora pod plnou kontrolou, prečítajte si <a href="/staking/solo/">ďalšie informácie o tom, ako sólo stakovať ETH</a>.
</ExpandableCard>

## Ďalšie zdroje informácií {#further-reading}

- [Adresár stakovania Etherea](https://www.staking.directory/) – _Eridian a Spacesider_
- [Vyhodnotenie služieb stakovania](https://www.attestant.io/posts/evaluating-staking-services/) – _Jim McDonald 2020_
