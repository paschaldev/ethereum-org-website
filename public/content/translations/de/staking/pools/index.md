---
title: Gepooltes Staking
description: Eine Übersicht darüber, wie man mit ETH-Pool-Staking beginnen kann
lang: de
template: staking
emoji: ":money_with_wings:"
image: /images/staking/leslie-pool.png
alt: Leslie, das Nashorn, wie es im Pool schwimmt.
sidebarDepth: 2
summaryPoints:
  - Staken Sie und verdienen Sie Belohnungen mit jedem ETH-Betrag, indem Sie Ihre Kräfte mit anderen bündeln
  - Überspringen Sie den schwierigen Teil und vertrauen Sie den Validator-Betrieb einem Drittanbieter an
  - Halten Sie Staking-Token in Ihrer eigenen Wallet
---

## Was sind Staking-Pools? {#what-are-staking-pools}

Staking-Pools sind ein kollaborativer Ansatz, um es vielen Menschen mit kleineren ETH-Beträgen zu ermöglichen, die 32 ETH zu erhalten, die zur Aktivierung eines Satzes von Validator-Schlüsseln erforderlich sind. Die Pooling-Funktionalität wird innerhalb des Protokolls nicht nativ unterstützt, daher wurden separate Lösungen entwickelt, um diesen Bedarf zu decken.

Einige Pools arbeiten mit Smart Contracts, bei denen Gelder in einen Vertrag eingezahlt werden können, der Ihren Einsatz (Stake) vertrauenswürdig verwaltet und verfolgt und Ihnen einen Token ausstellt, der diesen Wert widerspiegelt. Andere Pools beinhalten möglicherweise keine Smart Contracts und werden stattdessen außerhalb der Chain vermittelt.

## Warum in einem Pool staken? {#why-stake-with-a-pool}

Zusätzlich zu den Vorteilen, die wir in unserer [Einführung zum Staking](/staking/) beschrieben haben, bietet das Staking mit einem Pool einige konkrete Vorteile.

<CardGrid>
  <Card title="Niedrige Eintrittsbarrieren" emoji="🐟" description="Not a whale? No problem. Most staking pools let you stake virtually any amount of ETH by joining forces with other stakers, unlike staking solo which requires 32 ETH." />
  <Card title="Staken Sie noch heute" emoji=":stopwatch:" description="Staking with a pool is as easy as a token swap. No need to worry about hardware setup and node maintenance. Pools allow you to deposit your ETH which enables node operators to run validators. Rewards are then distributed to contributors minus a fee for node operations." />
  <Card title="Tokens staken" emoji=":droplet:" description="Many staking pools provide a token that represents a claim on your staked ETH and the rewards it generates. This allows you to make use of your staked ETH, e.g. as collateral in DeFi applications." />
</CardGrid>

<StakingComparison page="pools" />

## Bitte beachten {#what-to-consider}

Gepooltes oder delegiertes Staking wird vom Ethereum-Protokoll nicht nativ unterstützt, aber angesichts der Nachfrage nach Benutzern, weniger als 32 ETH einzusetzen, wurde eine wachsende Zahl von Lösungen entwickelt, um diesen Bedarf zu befriedigen.

Jeder Pool und die von verschiedenen Teams entwickelten Tools oder Smart Contracts haben jeweils eigene Vorteile und Risiken. Pools ermöglichen Benutzern, ihr ETH gegen einen Token zu tauschen, der für das ETH steht, das gestaked wurde. Der Token ist nützlich, weil er es den Nutzern ermöglicht, einen beliebigen ETH-Betrag in einen gleichwertigen Betrag eines renditetragenden Tokens zu tauschen, der auf dezentralen Börsen eine Rendite aus den auf die zugrunde liegende eingesetzte ETH angewendeten Staking-Belohnungen generiert (und umgekehrt), auch wenn die eigentliche ETH auf der Konsensebene eingesetzt bleibt. Dies bedeutet, dass Tauschvorgänge zwischen einem zinsbringenden gestaked-ETH-Produkt und "rohem ETH" in beide Richtungen schnell, einfach und nicht nur mit 32 ETH verfügbar sind.

Allerdings kommt es mit diesen gestaketen ETH-Token zu kartellähnlichem Verhalten. Eine große Menge an gestaketem ETH gelangt unter Kontrolle einiger weniger zentralisierter Organisationen, anstatt sich auf viele unabhängige Individuen zu verteilen. Dies schafft die Möglichkeit für Zensur oder Wertentzug. Der Goldstandard für Staking sollte darin bestehen, dass Einzelpersonen Validatoren, wann immer möglich, auf ihrer eigenen Hardware betreiben.

[Mehr zu den Risiken von Staking-Token](https://notes.ethereum.org/@djrtwo/risks-of-lsd).

Attributindikatoren werden unten verwendet, um auf nennenswerte Stärken oder Schwächen hinzuweisen, die ein gelisteter Staking-Pool enthalten kann. Verwenden Sie diesen Abschnitt als Referenz dafür, wie wir diese Attribute definieren, während Sie einen Pool auswählen, dem Sie beitreten möchten.

<StakingConsiderations page="pools" />

## Staking-Pools entdecken {#explore-staking-pools}

Es gibt eine Vielzahl von Optionen, die Ihnen bei der Einrichtung helfen. Anhand der Indikatoren oben können Sie die Tools unten besser beurteilen.

<ProductDisclaimer />

<StakingProductsCardGrid category="pools" />

Hinweis: Es ist wichtig, einen Dienst zu wählen, der [Client-Diversität](/developers/docs/nodes-and-clients/client-diversity/) ernst nimmt, da das die Sicherheit des Netzwerks verbessert und Ihr Risiko begrenzt. Dienste, die nachweislich die Nutzung von Mehrheits-Clients einschränken, sind gekennzeichnet mit <em style={{ textTransform: "uppercase" }}>"Vielfalt der Ausführungs-Clients"</em> and <em style={{ textTransform: "uppercase" }}>"Vielfalt der Konsens-Clients"</em>.

Haben Sie einen Vorschlag für einen Staking-Tool, der noch fehlt? Machen Sie sich mit unserer [Richtlinie zum Aufführen von Produkten](/contributing/adding-staking-products/) vertraut, um beurteilen zu können, ob Ihr Vorschlag geeignet ist. Senden Sie ihn uns dann zur Prüfung zu.

## Häufig gestellte Fragen {#faq}

<ExpandableCard title="Wie erhalte ich Belohnungen?">
Typischerweise werden ERC-20-Staking-Token an die Staker ausgegeben und repräsentieren den Wert ihres eingesetzten ETH sowie Belohnungen. Denken Sie daran, dass Staking-Belohnungen grundsätzlich etabliert sind, verschiedene Pools Staking-Belohnungen allerdings nach leicht unterschiedlichen Methoden an ihre Benutzer verteilen.
</ExpandableCard>

<ExpandableCard title="Wann kann ich meinen Einsatz zurückziehen?">
Sofort! Die Aktualisierung des Netzwerks auf Shanghai/Capella erfolgte im April 2023 und führte das Auszahlen von Staking-Mitteln ein. Validatoren haben nun die Möglichkeit, Staking-Pools, die sie unterstützen, zu verlassen und eine Auszahlung von ETH an ihre angegebene Adresse anzuweisen. Dies macht es möglich, Ihren Anteil am Stake gegen das zugrundeliegende ETH einzulösen. Bitte wenden Sie sich an Ihren Anbieter, um zu erfahren, wie er diese Funktionalität unterstützt.

Alternativ dazu ermöglichen Pools, die einen ERC-20 Staking-Token verwenden, den Handel mit diesem Token auf dem freien Markt, so dass Sie Ihre Staking-Position verkaufen können, ohne tatsächlich ETH aus dem Staking-Vertrag zu entnehmen.

<ButtonLink href="/staking/withdrawals/">Mehr zum Abheben von Staking</ButtonLink>
</ExpandableCard>

<ExpandableCard title="Ist dies anders als Staking auf meiner Börse?">
Es gibt viele Ähnlichkeiten zwischen diesen gepoolten Staking-Optionen und zentralisierten Börsen, wie z. B. die Möglichkeit, kleine ETH-Beträge zu staken und sie zu bündeln, um Validatoren zu aktivieren.

Im Gegensatz zu zentralisierten Börsen nutzen viele andere gepoolte Staking-Optionen Smart Contracts und/oder Staking-Token, bei denen es sich in der Regel um ERC-20-Token handelt, die Sie in Ihrer eigenen Wallet halten und wie jeden anderen Token kaufen oder verkaufen können. Dies bietet eine gewisse Souveränität und Sicherheit, da Sie die Kontrolle über Ihre Token besitzen. Allerdings haben Sie immer noch keine direkte Kontrolle über den Validator-Client, der in Ihrem Namen im Hintergrund Attestierungen ausgibt.

Einige Pooling-Optionen sind im Hinblick auf die Nodes, die sie unterstützen, stärker dezentralisiert als andere. Um die Gesundheit und Dezentralisierung des Netzwerks zu fördern, werden Staker immer dazu ermutigt, einen Pooling-Service auszuwählen, der eine genehmigungsfreie, dezentrale Gruppe von Node-Betreibern ermöglicht.
</ExpandableCard>

## Weiterführende Informationen {#further-reading}

- [Das Ethereum-Staking-Verzeichnis](https://www.staking.directory/) - _Eridian und Spacesider_
- [Staking mit Rocket Pool – Staking-Übersicht](https://docs.rocketpool.net/guides/staking/overview.html) – _RocketPool-Dokumentation_
- [Staking von Ethereum mit Lido](https://help.lido.fi/en/collections/2947324-staking-ethereum-with-lido) - _Lido Hilfedokumente_
