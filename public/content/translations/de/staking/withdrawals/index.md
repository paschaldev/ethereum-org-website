---
title: Staking-Auszahlungen
description: Seite mit einer Zusammenfassung zu Staking-Push-Auszahlungen, wie sie funktionieren und was Staker tun müssen, um ihre Belohnungen zu erhalten
lang: de
template: staking
image: /images/staking/leslie-withdrawal.png
alt: Leslie das Nashorn mit ihren Staking-Auszahlungen
sidebarDepth: 2
summaryPoints:
  - Das Shanghai/Capella-Update ermöglichte Staking-Auszahlungen auf Ethereum
  - Validatoren müssen eine Auszahlungsadresse angeben, um sie zu aktivieren
  - Erträge werden alle paar Tage automatisch ausgezahlt
  - Validatoren, die nicht mehr staken, erhalten ihr verbleibendes Guthaben
---

<UpgradeStatus dateKey="page-staking-withdrawals-when">
Staking-Auszahlungen wurden mit dem Shanghai/Capella-Upgrade aktiviert, welches am 12. April 2023 durchgeführt wurde.&nbsp;<a href="#when" customEventOptions={{ eventCategory: "Anchor link", eventAction: "When's it shipping?", eventName: "click" }}>Mehr über Shanghai/Capella erfahren</a>
</UpgradeStatus>

**Staking-Auszahlungen** beziehen sich auf die Übertragung von ETH von einem Validator-Konto in der Konsensschicht von Ethereum (der Beacon Chain) zur Ausführungsschicht, in der damit Transaktionen durchgeführt werden können.

**Belohnungszahlungen für überschüssige Guthaben** über 32 ETH werden automatisch und regelmäßig an eine mit jedem Validator verknüpfte Auszahlungsadresse gesendet, sobald sie vom Benutzer angegeben wurde. Benutzer können auch das **Staking vollständig beenden** und damit ihr gesamtes Validator-Guthaben freigeben.

## Staking-Belohnungen {#staking-rewards}

Belohnungszahlungen werden automatisch für aktive Validator-Konten mit einem ausgeschöpften effektiven Guthaben von 32 ETH verarbeitet.

Ein Guthaben über 32 ETH, das durch Belohnungen verdient wurde, trägt tatsächlich nicht zum Grundkapital bei oder erhöht das Gewicht dieses Validators im Netzwerk. Daher wird es automatisch alle paar Tage als Prämienzahlung abgehoben. Abgesehen von der einmaligen Angabe einer Auszahlungsadresse sind für diese Belohnungen keine weiteren Aktionen vom Validator erforderlich. Dies wird alles auf der Konsensschicht initiiert, daher ist in keinem Schritt Gas (Transaktionsgebühr) erforderlich.

### Wie sind wir an diesem Punkt angelangt? {#how-did-we-get-here}

In den letzten Jahren hat Ethereum mehrere Netzwerk-Upgrades durchlaufen und ist zu einem Netzwerk übergegangen, das durch ETH selbst gesichert ist, anstatt durch energieintensives Mining, wie es früher der Fall war. Die Teilnahme am Konsens auf Ethereum wird nun als „Staking" bezeichnet, da die Teilnehmer freiwillig ETH gesperrt haben und es „aufs Spiel setzen", um am Netzwerk teilnehmen zu können. Benutzer, die sich an die Regeln halten, werden belohnt, während Versuche, das System zu betrügen, bestraft werden können.

Seit der Einführung des Staking-Einzahlungsvertrags im November 2020 haben einige mutige Ethereum-Pioniere freiwillig Gelder gesperrt, um „Validatoren" zu aktivieren, spezielle Konten, die das Recht haben, gemäß den Netzwerkregeln offiziell Blöcke zu beglaubigen und vorzuschlagen.

Vor dem Shanghai/Capella-Upgrade konnten Sie Ihr gestaktes ETH nicht verwenden oder darauf zugreifen. Aber jetzt können Sie sich dafür entscheiden, Ihre Belohnungen automatisch auf ein ausgewähltes Konto zu erhalten, und Sie können auch jederzeit Ihr gestaktes ETH abheben.

### Wie bereite ich mich vor? {#how-do-i-prepare}

<WithdrawalsTabComparison />

### Wichtige Hinweise {#important-notices}

Die Angabe einer Auszahlungsadresse ist ein erforderlicher Schritt für jedes Validator-Konto, bevor es für die Abhebung von ETH aus seinem Guthaben infrage kommt.

<InfoBanner emoji="⚠️" isWarning>
  <strong>Jedem Validatoren-Konto kann nur eine einzige Abhebungsadresse zugewiesen werden, und zwar nur einmal.</strong> Sobald eine Adresse ausgewählt und an die Konsensus-Ebene übermittelt wurde, lässt sich dieser Vorgang nicht mehr rückgängig machen. Überprüfen Sie die Besitzverhältnisse und die Richtigkeit der angegebenen Adresse, bevor Sie sie einreichen.
</InfoBanner>

In der Zwischenzeit besteht <strong>keine Bedrohung für Ihre Gelder</strong>, wenn Sie dies nicht tun, vorausgesetzt, Ihre Mnemonic-/Seed-Phrase ist offline sicher aufbewahrt und wurde in keiner Weise kompromittiert. Wenn keine Auszahlungsinformationen hinzugefügt werden, bleibt das ETH einfach im Validator-Konto gesperrt, wie es bislang der Fall war, bis eine Auszahlungsadresse angegeben wird.

## Das vollständige Beenden des Staking {#exiting-staking-entirely}

Die Angabe einer Auszahlungsadresse ist erforderlich, bevor _irgendwelche_ Gelder aus dem Guthaben eines Validator-Kontos übertragen werden können.

Benutzer, die das Staking vollständig beenden und ihr gesamtes Guthaben abheben möchten, müssen auch eine „freiwillige Ausstiegsnachricht" mit Validator-Schlüsseln unterzeichnen und übermitteln, die den Prozess des Ausstiegs aus dem Staking einleitet. Der Vorgang erfolgt mit Ihrem Validator-Client und wird an Ihren Konsens-Node übermittelt. Dafür fallen keine Gas-Kosten an.

Der Prozess, bei dem ein Validator aus dem Staking aussteigt, dauert je nachdem, wie viele andere gleichzeitig aussteigen, unterschiedlich lange. Sobald der Vorgang abgeschlossen ist, ist dieses Konto nicht mehr dafür verantwortlich, Validator-Netzwerkaufgaben auszuführen, ist nicht mehr für Belohnungen berechtigt und hat sein ETH nicht mehr „aufs Spiel gesetzt". Zu diesem Zeitpunkt wird das Konto als vollständig „abhebbar" gekennzeichnet.

Sobald ein Konto als „abhebbar" markiert wurde und Auszahlungsinformationen bereitgestellt wurden, gibt es nichts mehr, was ein Benutzer tun muss, außer zu warten. Konten werden automatisch und kontinuierlich von Block-Proposern auf berechtigte freigegebene Gelder durchsucht, und Ihr Kontoguthaben wird in voller Höhe (auch als „vollständiger Abzug" bekannt) während des nächsten <a href="#validator-sweeping" customEventOptions={{ eventCategory: "Anchor link", eventAction: "Exiting staking entirely (sweep)", eventName: "click" }}>Sweeps</a> übertragen.

## Wann sind Staking-Abhebungen aktiviert? {#when}

Staking-Abhebungen sind live! Die Funktionalität für das Abheben wurden als Teil des Shanghai/Capella Upgrades vom 12. April 2023 aktiviert.

Das Shanghai/Capella Upgrade ermöglicht ETH, das gestaked wurde, mit regulären Ethereum-Konten zurückzufordern. Dies schloss den Kreis hinsichtlich der Bereitstellung von Liquidität und brachte Ethereum einen Schritt näher auf seinem Weg, ein nachhaltiges, skalierbares, sicheres dezentralisiertes Ökosystem zu schaffen.

- [Mehr zur Geschichte von Ethereum](/history/)
- [Mehr zur Ethereum-Roadmap](/roadmap/)

## Wie funktionieren Auszahlungen? {#how-do-withdrawals-work}

Ob ein bestimmter Validator zur Auszahlung berechtigt ist oder nicht, wird durch den Zustand des Validator-Kontos selbst bestimmt. Es ist zu keinem Zeitpunkt eine Benutzereingabe erforderlich, um zu bestimmen, ob eine Auszahlung für ein Konto eingeleitet werden sollte oder nicht - der gesamte Prozess wird automatisch von der Konsensschicht in einer kontinuierlichen Schleife durchgeführt.

### Eher der visuelle Lernende? {#visual-learner}

Sehen Sie sich diese Erklärung für die Abhebungen von Ethereum von Finematics an:

<YouTube id="RwwU3P9n3uo" />

### Validator „Sweeping" {#validator-sweeping}

Es ist notwendig, dass ein Validator, der den nächsten Block vorschlagen soll, eine Warteschlange mit bis zu 16 zugelassenen Auszahlungen erstellt. Ursprünglich beginnt man mit dem Validator-Index 0 und prüft, ob es gemäß den Protokollregeln eine berechtigte Auszahlung für dieses Konto gibt. Ist dies der Fall, wird sie zur Warteschlange hinzugefügt. Der für den nächsten Block vorgesehene Validator knüpft ununterbrochen dort an, wo der vorherige aufgehört hat, und verfährt dabei in stetiger Reihenfolge.

<InfoBanner emoji="🕛">
Stellen Sie sich eine analoge Uhr vor. Der Zeiger der Uhr zeigt auf die Stunde, bewegt sich in eine Richtung, lässt keine Stunden aus und kehrt schließlich nach Erreichen der letzten Zahl wieder an den Anfang zurück.<br/><br/>
Stellen Sie sich nun vor, dass die Uhr statt 1 bis 12 die Zahlen 0 bis N hat <em>(die Gesamtzahl der jemals auf der Konsensus-Ebene registrierten Validatoren-Konten, über 500.000 im Januar 2023).</em><br/><br/>
Der Zeiger auf der Uhr zeigt auf den nächstenValidator, der auf zulässige Abhebungen geprüft werden muss. Es beginnt bei 0 und schreitet rundherum fort, ohne irgendwelche Konten zu überspringen. Wenn der letzte Validator erreicht ist, beginnt der Zyklus von vorne.
</InfoBanner>

#### Überprüfung eines Kontos auf Auszahlungen {#checking-an-account-for-withdrawals}

Bei der Durchsicht der Validatoren auf mögliche Auszahlungen bewertet der Vorschlagende jeden überprüften Validator mit einer kurzen Fragenreihe. Auf diese Weise wird entschieden, ob eine Auszahlung ausgelöst werden sollte und falls ja, wie viel ETH abgehoben werden soll.

1. **Wurde eine Auszahlungsadresse angegeben?** Wenn keine Auszahlungsadresse angegeben wurde, wird das Konto übersprungen und keine Auszahlung eingeleitet.
2. **Hat der Validator den Prozess verlassen und ist das Guthaben abhebbar?** Sobald der Validator den Prozess komplett verlassen hat und der Zeitpunkt erreicht ist, in dem das Guthaben des Kontos als „abhebbar" gilt, wird eine vollständige Auszahlung veranlasst. Dies wird das gesamte verbleibende Guthaben an die Auszahlungsadresse übertragen.
3. **Ist der effektive Kontostand auf 32 begrenzt?** Falls das Konto Auszahlungsberechtigungen besitzt, noch nicht vollständig beendet ist und über 32 anstehende Belohnungen hat, wird eine teilweise Auszahlung vorgenommen. Dabei werden lediglich die über 32 hinausgehenden Belohnungen an die Auszahlungsadresse des Benutzers übertragen.

Es gibt nur zwei Aktionen, die von Validatoren während des Lebenszyklus eines Validators durchgeführt werden, die diesen Ablauf direkt beeinflussen:

- Bereitstellung von Auszahlungsberechtigungen, um eine Form von Auszahlung zu ermöglichen
- Verlassen des Netzwerks, was eine vollständige Auszahlung anstößt

### Kostenfreies Gas {#gas-free}

Dieser Ansatz für Staking-Auszahlungen vermeidet, dass Staker manuell eine Transaktion einreichen müssen, die eine bestimmte Menge an ETH zur Auszahlung anfordert. Das bedeutet, dass **kein Gas (Transaktionsgebühr) erforderlich** ist und Auszahlungen auch nicht um den bestehenden Blockplatz der Ausführungsschicht konkurrieren.

### Wie oft erhalte ich meine Staking-Belohnungen? {#how-soon}

In einem einzigen Block können maximal 16 Auszahlungen verarbeitet werden. Mit dieser Rate können pro Tag 115.200 Validator-Auszahlungen verarbeitet werden (vorausgesetzt, es werden keine Slots verpasst). Wie oben erwähnt, werden Validatoren ohne berechtigte Auszahlungen übersprungen, was die Zeit bis zum Abschluss des Durchlaufs verkürzt.

Indem wir diese Berechnung erweitern, können wir die Zeit abschätzen, die benötigt wird, um eine bestimmte Anzahl von Auszahlungen zu verarbeiten:

<TableContainer>

| Anzahl der Auszahlungen | Zeit bis zum Abschluss |
| :-------------------:   | :--------------:       |
|        400,000          |     3,5 Tage           |
|        500,000          |     4,3 Tage           |
|        600,000          |     5,2 Tage           |
|        700,000          |     6,1 Tage           |
|        800,000          |     7,0 Tage           |

</TableContainer>

Wie Sie sehen, verlangsamt sich dieser Prozess, wenn mehr Validatoren im Netzwerk sind. Eine Zunahme von verpassten Slots könnte dies proportional verlangsamen, aber dies wird im Allgemeinen die langsamere Seite der möglichen Ergebnisse darstellen.

## Häufig gestellte Fragen {#faq}

<ExpandableCard
title="Sobald ich eine Auszahlungsadresse angegeben habe, kann ich diese dann auf eine alternative Auszahlungsadresse ändern?"
eventCategory="FAQ"
eventAction="Once I have provided a withdrawal address, can I change it to an alternative withdrawal address?"
eventName="read more">
Nein, der Prozess zur Bereitstellung von Auszahlungsberechtigungen ist ein einmaliger Prozess und kann nach der Einreichung nicht mehr geändert werden.
</ExpandableCard>

<ExpandableCard
title="Warum kann eine Auszahlungsadresse nur einmal festgelegt werden?"
eventCategory="FAQ"
eventAction="Why can a withdrawal address only be set once?"
eventName="read more">
Durch die Einstellung einer Ausführungsebene wurden die Auszahlungsberechtigungen für diesen Validator dauerhaft geändert. Das bedeutet, dass die alten Berechtigungen nicht mehr funktionieren, und die neuen Berechtigungen zu einem Ausführungsschicht-Konto führen.

Abhebungsadressen können entweder ein intelligenter Vertrag sein (durch seinen Code kontrolliert), oder ein externes Konto (EOA, kontrolliert durch seinen privaten Schlüssel). Aktuell existiert keine Möglichkeit für diese Konten, eine Nachricht zur Konsensschicht zurückzusenden, die eine Änderung der Validator-Anmeldeinformationen anzeigen würde. Eine solche Funktion einzuführen, würde das Protokoll unnötig komplizieren.

Als Alternative zur Änderung der Auszahlungsadresse für einen bestimmten Validator können sich Benutzer dafür entscheiden, einen intelligenten Vertrag als ihre Auszahlungsadresse festzulegen, der Schlüsselrotationen handhaben könnte, wie zum Beispiel ein Safe. Benutzer, die ihre Mittel auf ihr eigenes extern kontrolliertes Konto (EOA) setzen, können einen vollständigen Ausstieg durchführen, um all ihre gestakten Mittel abzuheben, und dann mit neuen Anmeldeinformationen erneut staken.
</ExpandableCard>

<ExpandableCard
title="Was ist, wenn ich Staking-Token habe oder am Pool-Staking teilnehme"
eventCategory="FAQ"
eventAction="What if I participate in staking tokens or pooled staking"
eventName="read more">

Wenn Sie Teil eines <a href="/staking/pools/">Staking-Pools</a> sind oder Staking-Token besitzen, sollten Sie sich bei Ihrem Anbieter erkundigen, wie Staking-Auszahlungen gehandhabt werden, da jeder Dienst anders funktioniert.

Im Allgemeinen sollten Benutzer in der Lage sein, ihr zugrundeliegendes gestaktes ETH zurückzufordern oder zu ändern, welchen Staking-Anbieter sie nutzen. Wenn ein bestimmter Pool zu groß wird, können Mittel abgezogen, eingelöst und mit einem <a href="https://rated.network/">kleineren Anbieter</a> neu gestaked werden. Oder, wenn Sie genug ETH angesammelt haben, könnten Sie <a href="/staking/solo/">von zu Hause aus staken</a>.

</ExpandableCard>

<ExpandableCard
title="Erfolgen Belohnungszahlungen (Teilauszahlungen) automatisch?"
eventCategory="FAQ"
eventAction="Do reward payments (partial withdrawals) happen automatically?"
eventName="read more">
Ja, solange Ihr Validator eine Auszahlungsadresse bereitgestellt hat. Diese muss einmal bereitgestellt werden, um Auszahlungen zu ermöglichen, danach werden Belohnungszahlungen automatisch alle paar Tage mit jedem Durchlauf des Validators ausgelöst.
</ExpandableCard>

<ExpandableCard
title="Erfolgen vollständige Auszahlungen automatisch?"
eventCategory="FAQ"
eventAction="Do full withdrawals happen automatically?"
eventName="read more">

Nein, wenn Ihr Validator noch aktiv im Netzwerk ist, erfolgt keine automatische Auszahlung. Dies erfordert das manuelle Einleiten eines freiwilligen Ausstiegs.

Sobald ein Validator den Ausstiegsprozess abgeschlossen hat und vorausgesetzt, das Konto verfügt über Auszahlungsberechtigungen, wird das verbleibende Guthaben <em>dann</em> während des nächsten <a href="#validator-sweeping">Validator-Durchlaufs</a> abgehoben.

</ExpandableCard>

<ExpandableCard title="Kann ich einen individuellen Betrag abheben?"
eventCategory="FAQ"
eventAction="Can I withdraw a custom amount?"
eventName="read more">
Auszahlungen sind darauf ausgelegt, automatisch durchgeführt zu werden und jegliches ETH zu übertragen, das nicht aktiv zum Staking beiträgt. Dies beinhaltet vollständige Salden für Konten, die den Ausstiegsprozess abgeschlossen haben.

Es ist nicht möglich, manuell spezifische Mengen an ETH zur Auszahlung anzufordern.
</ExpandableCard>

<ExpandableCard
title="Ich betreibe einen Validator. Wo kann ich mehr Informationen zur Aktivierung von Auszahlungen finden?"
eventCategory="FAQ"
eventAction="I operate a validator. Where can I find more information on enabling withdrawals?"
eventName="read more">

Validator-Betreibern wird empfohlen, die Seite <a href="https://launchpad.ethereum.org/withdrawals/">Startplattform für Staking-Auszahlungen</a> zu besuchen. Dort können sie mehr Details darüber erfahren, wie Sie Ihren Validator auf Auszahlungen vorbereiten, sowie Informationen zum Zeitpunkt der Ereignisse und zur Funktionsweise von Auszahlungen erhalten.

Um Ihr Setup zuerst auf einem Testnet auszuprobieren, besuchen Sie das <a href="https://holesky.launchpad.ethereum.org">Holesky Testnet Staking Launchpad</a>, um zu beginnen.

</ExpandableCard>

<ExpandableCard
title="Kann ich meinen Validator nach dem Verlassen durch Einzahlung von mehr ETH wieder aktivieren?"
eventCategory="FAQ"
eventAction="Can I re-activate my validator after exiting by depositing more ETH?"
eventName="read more">
Nein. Sobald ein Validator ausgetreten ist und sein gesamtes Guthaben abgehoben wurde, werden alle zusätzlichen Einzahlungen auf diesen Validator automatisch während des nächsten Validator-Durchlaufs an die Auszahlungsadresse übertragen. Um ETH erneut zu staken, muss ein neuer Validator aktiviert werden.
</ExpandableCard>

## Weiterführende Informationen {#further-reading}

- [Startplattform für Staking-Auszahlungen](https://launchpad.ethereum.org/withdrawals)
- [EIP-4895: Beacon-Kette implementiert Abhebungen als Operationen](https://eips.ethereum.org/EIPS/eip-4895)
- [Ethereum Cat Herders - Shanghai](https://www.ethereumcatherders.com/shanghai_upgrade/index.html)
- [PEEPanEIP #94: Auszahlung von gestaktem ETH (Testing) mit Potuz & Hsiao-Wei Wang](https://www.youtube.com/watch?v=G8UstwmGtyE)
- [PEEPanEIP#68: EIP-4895: Auszahlungen per Beacon Chain Push als Operationen mit Alex Stokes](https://www.youtube.com/watch?v=CcL9RJBljUs)
- [Verständnis der effektiven Bilanz des Validators](https://www.attestant.io/posts/understanding-validator-effective-balance/)
