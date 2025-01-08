---
title: Pooled staking
description: Áttekintés a letéti alapok használatáról
lang: hu
template: staking
emoji: ":money_with_wings:"
image: /images/staking/leslie-pool.png
alt: Leslie, a rinocérosz a medencében fürdik.
sidebarDepth: 2
summaryPoints:
  - Helyezzen letétbe bármennyi ETH-t és szerezzen jutalmakat másokkal együtt
  - Hagyja a nehézségeket és bízza a validátor működtetését harmadik félre
  - Tartsa a letétbe helyezett összegnek megfelelő tokeneket a saját tárcájában
---

## Mik azok a letéti alapok (staking pool)? {#what-are-staking-pools}

A letéti alap egy olyan kollaboratív megközelítés, mely lehetővé teszi, hogy sok kis összegű ETH révén elérjék a 32 ETH küszöbértéket, ahol már fel tudnak állítani validátort. A letéti alap nem a protokoll része, más megoldások épültek ki, hogy ezt az igényt kielégítsék.

Néhány letéti alap okosszerződéseket használ, ahol a pénzeszközöket a szerződésbe helyezik letétbe, így bizalomigény nélkül kezeli és követi a letét alakulását, és egy tokent ad, mely a letét értékét képviseli. Más alapok nem használnak okosszerződést, hanem a láncon kívül közvetítenek.

## Miért jó a letéti alap használata? {#why-stake-with-a-pool}

A [bevezetés a letétbe helyezésbe](/staking/) során elhangzott előnyök mellett a letéti alapok számos haszonnal járnak.

<CardGrid>
  <Card title="Alacsony küszöb a csatlakozásnál" emoji="🐟" description="Not a whale? No problem. Most staking pools let you stake virtually any amount of ETH by joining forces with other stakers, unlike staking solo which requires 32 ETH." />
  <Card title="Helyezzen letétbe ma" emoji=":stopwatch:" description="Staking with a pool is as easy as a token swap. No need to worry about hardware setup and node maintenance. Pools allow you to deposit your ETH which enables node operators to run validators. Rewards are then distributed to contributors minus a fee for node operations." />
  <Card title="Letéti tokenek" emoji=":droplet:" description="Many staking pools provide a token that represents a claim on your staked ETH and the rewards it generates. This allows you to make use of your staked ETH, e.g. as collateral in DeFi applications." />
</CardGrid>

<StakingComparison page="pools" />

## Mit kell figyelembe venni {#what-to-consider}

A letéti alap vagy a delegáción alapuló letétbe helyezés nem része az Ethereum-protokollnak. Ugyanakkor a felhasználók igénye mentén, hogy 32 ETH-nál kisebb összeget adjanak letétbe, egyre több megoldás épül ki.

Minden egyes alapot és az általuk használt eszközöket vagy okosszerződéseket különböző csapatok fejlesztik, így mind rendelkezik előnyökkel és kockázatokkal. Az alap lehetővé teszi, hogy a felhasználó egy tokent kapjon, ami a letétbe helyezett ETH-t reprezentálja. A token azért hasznos, mert a felhasználó bármennyi ETH-t átválthat egy azonos összegű, jövedelmet generáló tokenre, ami a háttérben lévő ETH letétbe helyezési jutalmaiból ad bevételt (és fordítva) a decentralizált tőzsdéken, még akkor is, ha az aktuális ETH a konszenzusrétegen van letétben. Eszerint a jövedelmet generáló, letétbe helyezett ETH-termék és az eredeti, nyers ETH között gyors és könnyű oda-vissza váltás lehetséges, és nem csak 32 ETH többszöröse érhető el.

Ugyanakkor ezek a letétbe helyezett ETH tokenek kartellszerű viselkedésre hajlamosítanak, amikor ebből nagyobb összegek kevés centralizált szervezet kontrollja alá kerülnek, ahelyett hogy számtalan egyén között oszlanának el. Ez cenzúrára vagy értéklefölözésre ad lehetőséget. A letétbe helyezés aranyszabálya az, hogy egyének futtatják a validátorokat a saját hardverjükön.

[A letétbe helyezést képviselő tokenek további kockázatairól](https://notes.ethereum.org/@djrtwo/risks-of-lsd).

Alább különböző jellemzők mentén mutatjuk be a jelentős erősségeket vagy gyengeségeket, melyekkel a listázott letéti alapok rendelkezhetnek. Ez alapján Ön is megértheti, hogy e jellemzőket hogyan határoztuk meg, és így könnyebben választhat a letéti alapokból.

<StakingConsiderations page="pools" />

## Fedezze fel a letéti alapokat {#explore-staking-pools}

Számos olyan opció érhető el, amely biztosan kielégíti minden igényét. A fenti jellemzőket használva megértheti az alábbi eszközökben rejlő lehetőségeket.

<ProductDisclaimer />

<StakingProductsCardGrid category="pools" />

Olyan szolgáltatást válasszon, amely komolyan veszi a [kliensek diverzitását](/developers/docs/nodes-and-clients/client-diversity/), mert ez egyszerre javítja a hálózat biztonságát, és csökkenti az Ön kockázatát. Azok a szolgáltatók, akik korlátozzák a többségi klienseket használatát, a következő jellemzők alapján szűrhetők ki: <em style={{ textTransform: "uppercase" }}>végrehajtási kliens sokrétűsége</em> és <em style={{ textTransform: "uppercase" }}>konszenzusos kliens sokrétűgése</em>

Hiányolja valamelyik letétbe helyezési eszközt? Ha a [terméklistázó szabályzat](/contributing/adding-staking-products/) alapján úgy véli, hogy egy adott eszköz illeszkedne ide, akkor jelezze felénk.

## Gyakran ismételt kérdések {#faq}

<ExpandableCard title="Hogyan kapok jutalmakat?">
A letétbe helyezők ERC-20 letéti tokeneket kapnak, és ezeket a letétbe adott ETH-t képviselik, megnövelve azt a jutalmakkal. A különféle alapok a letéti jutalmakat különböző módon adják át a felhasználóknak, a folyamat lényege ugyanakkor közös.
</ExpandableCard>

<ExpandableCard title="Mikor tudom visszavonni a letétemet?">
Most azonnal! A Shanghai/Capella-hálózatfrissítés 2023. áprilisban végbement, mely elérhetővé tette a letétek visszavonását. A letéti alapokhoz tartozó validátorszámlák ki tudnak lépni a letétbe helyezésből és vissza tudják vonni az ETH-t a megadott visszavonási címükre. Ez lehetővé teszi, hogy visszavegye a letétrészt a mögöttes ETH-ért cserébe. Ellenőrizze, hogy az adott szolgáltató hogyan támogatja ezt a funkcionalitást.

Alternatívaként a letéti alapok ERC-20 letéti tokeneket használnak, hogy a felhasználó kereskedni tudjon azokkal a nyitott piacon. Ezzel eladhatja a letéti helyzetét, visszavonva a letétet anélkül, hogy a letéti szerződésben lévő ETH bárhova is átkerülne.

<ButtonLink href="/staking/withdrawals/">Bővebben a letétbe helyezés visszavonásáról</ButtonLink>
</ExpandableCard>

<ExpandableCard title="Miben különbözik ez a tőzsdén való letétbe helyezéstől?">
Számos hasonló vonás van a letéti alapok opciói és a centralizált tőzsdék között, mivel kis összeggel is részt lehet venni, melyek együtt hoznak létre egy validátort.

A centralizált tőzsdékhez képes számos letéti alap használ okosszerződést és/vagy letéti tokeneket, olyan ERC-20 tokeneket, melyeket a felhasználó a tárcájában tarthat, és bármikor vehet vagy adhat el azokból. Ez függetlenséget és biztonságot jelent, mivel a felhasználó kontrollálja a tokenjeit, de még mindig nem tudja irányítani a validátorklienst, ami az ő nevében készít tanúsítást a háttérben.

Néhány letéti alap sokkal decentralizáltabb, amikor az általuk használt csomópontokról van szó. A hálózat egészséges állapota és decentralizációja érdekében a letétbe helyezők olyan letéti alapokat válasszanak, amelyek engedélymentes, decentralizált csomópont-operátorokkal működnek.
</ExpandableCard>

## További olvasnivaló {#further-reading}

- [Ethereum letétbe helyezési jegyzék](https://www.staking.directory/) – _Eridian és Spacesider_
- [Letétbe helyezés a Rocket Poollal – Áttekintés](https://docs.rocketpool.net/guides/staking/overview.html) – _RocketPool docs_
- [Letétbe helyezés az Ethereumon a Lidoval](https://help.lido.fi/en/collections/2947324-staking-ethereum-with-lido) - _Lido help docs_
