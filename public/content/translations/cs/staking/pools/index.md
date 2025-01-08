---
title: Sdružené uzamčení
description: Přehled, jak začít se zapojením do sdruženého vkládání ETH
lang: cs
template: staking
emoji: ":money_with_wings:"
image: /images/use-cases/defi.png
alt: Nosorožec Leslie plave v bazénu.
sidebarDepth: 2
summaryPoints:
  - Vložte a vydělávejte s jakýmkoliv množství ETH spojením sil s ostatními
  - Přeskočte těžkou část a svěřte operaci validátoru třetí straně
  - Mějte vkladové tokeny ve své peněžence
---

## Co jsou vkladové fondy? {#what-are-staking-pools}

Vkladový fond je přístup založený na spolupráci, který umožňuje mnoha lidem s menším množsvím ETH získat 32 ETH potřebných k aktivaci sady validátorových klíčů. Funkce stakingových fondů není v rámci protokolu nativně podporována, takže řešením byla vytvořena tato samostatná funkce, aby potřebu řešila.

Některé fondy fungují pomocí chytrých kontraktů, kde lze vložit prostředky do kontraktu, který důvěryhodně spravuje a sleduje váš vklad a vydává vám token, který představuje tuto hodnotu. Jiné fondy nemusí zahrnovat chytré kontrakty a jsou místo toho zprostředkovány mimo řetězec.

## Proč vkládat s fondem? {#why-stake-with-a-pool}

Kromě výhod, které jsme nastínili v našem [úvodu do vkládání](/staking/), přináší vkládání s fondem řadu odlišných výhod.

<CardGrid>
  <Card title="Nízká bariéra vstupu" emoji="🐟" description="Not a whale? No problem. Most staking pools let you stake virtually any amount of ETH by joining forces with other stakers, unlike staking solo which requires 32 ETH." />
  <Card title="Vložte dnes" emoji=":stopwatch:" description="Staking with a pool is as easy as a token swap. No need to worry about hardware setup and node maintenance. Pools allow you to deposit your ETH which enables node operators to run validators. Rewards are then distributed to contributors minus a fee for node operations." />
  <Card title="Vkládání tokenů" emoji=":droplet:" description="Many staking pools provide a token that represents a claim on your staked ETH and the rewards it generates. This allows you to make use of your staked ETH, e.g. as collateral in DeFi applications." />
</CardGrid>

<StakingComparison page="pools" />

## Co je třeba zvážit {#what-to-consider}

Sdružené nebo delegované vklady nejsou nativně podporovány protokolem Ethereum, ale vzhledem k poptávce po uživatelích, aby vkládali méně než 32 ETH, byl vytvořen rostoucí počet řešení, která tuto poptávku uspokojí.

Každý fond a nástroje nebo chytré kontrakty, které používají, byly vytvořeny různými týmy a všechny mají jiné výhody a rizika. Fondy umožňují uživatelům směnit ETH za token představující vložený ETH. Tento token je užitečný, protože umožňuje uživatelům směnit jakékoli množství ETH za ekvivalentní částku tokenu nesoucího výnos, který generuje výnos z vložených odměn aplikovaných na podkladové vložené ETH (a naopak) na decentralizovaných burzách, i když skutečný ETH zůstává vložen v konsensuální vrstvě. To znamená, že směny tam a zpět z vloženého ETH nesoucího výnos a „raw ETH“ jsou rychlé, snadné a jsou dostupné i v jiných objemech než jen v násobcích 32 ETH.

Tyto vložené ETH tokeny však mají tendenci vykazovat kartelové chování, kdy velké množství vložených ETH skončí pod kontrolou několika centralizovaných organizací, místo toho aby bylo rozděleno mezi mnoho nezávislých jednotlivců. To vytváří podmínky pro cenzuru nebo extrakci hodnot. Zlatým standardem pro vkládání by vždy měli být jednotlivci provozující validátory na vlastním hardwaru, kdykoli je to možné.

[Další informace o rizicích vkladových tokenů](https://notes.ethereum.org/@djrtwo/risks-of-lsd).

Atributové indikátory se používají níže k signalizaci pozoruhodných silných nebo slabých stránek, které může mít uvedený vkladový fond. Tuto část použijte jako referenci, jak definujeme tyto atributy, když vybíráte fond, ke kterému se chcete připojit.

<StakingConsiderations page="pools" />

## Prozkoumejte vkladové fondy {#explore-staking-pools}

K dispozici jsou různé možnosti, které vám pomohou s nastavením. Pomocí výše uvedených indikátorů vás provedou níže uvedenými nástroji.

<ProductDisclaimer />

<StakingProductsCardGrid category="pools" />

Vezměte prosím na vědomí, že je důležité vybrat si službu, která bere [rozmanitost klientů](/developers/docs/nodes-and-clients/client-diversity/) vážně, protože zlepšuje zabezpečení sítě a omezuje vaše riziko. Služby, které prokazatelně omezují většinové klientské používání, jsou označeny <em style={{ textTransform: "uppercase" }}>„rozmanitost exekučního klienta“</em> a <em style={{ textTransform: "uppercase" }}>„rozmanitost konsenzus klienta“.</em>

Máte návrh na vkladový nástroj, který nám chyběl? Podívejte se na naše [zásady pro záznam produktů](/contributing/adding-staking-products/), abyste zjistili, zda by se hodily, a odešlete je ke kontrole.

## Často kladené dotazy {#faq}

<ExpandableCard title="Jak získám odměny?">
Tokeny ERC-20 jsou obvykle vydávány vkladatelům a představují hodnotu jejich vložených ETH společně s odměnami. Mějte na paměti, že různé fondy rozdělují odměny za vklady svým uživatelům mírně odlišnými metodami, ale toto je společné téma.
</ExpandableCard>

<ExpandableCard title="Kdy si mohu vybrat svůj vklad?">
Právě teď! K upgradu sítě Shanghai/Capella došlo v dubnu 2023 a zavedlo výběry vkladů. Účty validátorů, které podporují vkladové fondy, mají nyní možnost opustit a vybrat ETH na jejich určenou adresu pro výběr. To umožňuje možnost vykoupit část svého vkladu za základní ETH. Informujte se u svého poskytovatele, jak tuto funkci podporuje.

Případně fondy, které využívají token ERC-20 pro vkládání, umožňují uživatelům obchodovat s tímto tokenem na otevřeném trhu, což vám umožní prodat svou pozici pro vkládání a efektivně se „stáhnout“, aniž byste skutečně odstranili ETH ze smlouvy o vkládání.

<ButtonLink href="/staking/withdrawals/">Více o výběru vkladů</ButtonLink>
</ExpandableCard>

<ExpandableCard title="Liší se to od vkladů s mojí výměnou?">
Mezi těmito sdruženými vklady a možnostmi a centralizovanými burzami existuje mnoho podobností, jako je schopnost vsadit malá množství ETH a nechat je spojit dohromady, aby se aktivovaly validátory.

Na rozdíl od centralizovaných burz využívá mnoho dalších možností sdruženého vkládání chytré kontrakty a/nebo vkladové tokeny, což jsou obvykle tokeny ERC-20, které lze držet ve vlastní peněžence a kupovat nebo prodávat stejně jako jakýkoli jiný token. To nabízí vrstvu suverenity a zabezpečení tím, že vám dává kontrolu nad vašimi tokeny, ale stále vám nedává přímou kontrolu nad klientem validátoru, který osvědčuje vaším jménem na pozadí.

Některé možnosti sdružování jsou více decentralizované než jiné, pokud jde o uzly, které je podporují. Za účelem podpory zdraví a decentralizace sítě se vkladatelům vždy doporučuje, aby si vybrali službu sdružování, která umožňuje decentralizovanou sadu operátorů uzlů bez povolení.
</ExpandableCard>

## Další četba {#further-reading}

- [Adresář vkládání Etherea](https://www.staking.directory/) – _Eridian a Spacesider_
- [Staking with Rocket Pool – Přehled vkládání](https://docs.rocketpool.net/guides/staking/overview.html) – _Dokumenty RocketPool_
- [Staking Ethereum with Lido](https://help.lido.fi/en/collections/2947324-staking-ethereum-with-lido) – _Lido dokumenty nápovědy_
