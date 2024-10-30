---
title: Stakuj solo swoje ETH
description: Przegląd tego, jak rozpocząć samodzielne stakowanie ETH
lang: pl
template: staking
emoji: ":money_with_wings:"
image: /images/staking/leslie-solo.png
alt: Nosorożec Leslie na własnym chipie komputerowym.
sidebarDepth: 2
summaryPoints:
  - Otrzymuj maksymalne nagrody bezpośrednio z protokołu za utrzymywanie prawidłowego działania walidatora w trybie online
  - Korzystaj z własnego sprzętu i osobiście zwiększaj bezpieczeństwo i decentralizację sieci Ethereum
  - Wyeliminuj potrzebę zaufania i nigdy nie rezygnuj z kontroli nad kluczami do swoich funduszy
---

## Czym jest solo staking? {#what-is-solo-staking}

Solo staking polega na [uruchomieniu węzła Ethereum](/run-a-node/) podłączonego do Internetu i zdeponowaniu 32 ETH w celu aktywacji [walidatora](#faq), co daje możliwość bezpośredniego uczestniczenia w konsensusie sieci.

**Solo staking zwiększa decentralizację sieci Ethereum**, dzięki czemu Ethereum jest bardziej odporne na cenzurę i ataki. Inne metody stakowania mogą nie pomóc sieci w ten sam sposób. Solo staking jest najlepszą opcją stakingu do zabezpieczania Ethereum.

Węzeł Ethereum składa się zarówno z klienta warstwy wykonawczej (EL), jak i klienta warstwy konsensusu (CL). Ci klienci są oprogramowaniem, które współpracuje, wraz z prawidłowym zestawem kluczy podpisujących, w celu weryfikacji transakcji i bloków, poświadczania prawidłowej pozycji łańcucha, agregowania poświadczeń i proponowania bloków.

Solo stakerzy są odpowiedzialni za obsługę sprzętu potrzebnego do uruchomienia tych klientów. Zaleca się używanie do tego celu dedykowanej maszyny obsługiwanej z domu — jest to niezwykle korzystne dla zdrowia sieci.

Solo staker otrzymuje nagrody bezpośrednio z protokołu za utrzymywanie swojego walidatora prawidłowo działającego i online.

## Dlaczego stakować solo? {#why-stake-solo}

Staking solo wiąże się z większą odpowiedzialnością, ale zapewnia maksymalną kontrolę nad środkami i konfiguracją stakingu.

<CardGrid>
  <Card title="Zarabiaj świeże ETH" emoji="💸" description="Earn ETH-denominated rewards directly from the protocol when your validator is online, without any middlemen taking a cut." />
  <Card title="Pełna kontrola" emoji="🎛️" description="Keep your own keys. Choose the combination of clients and hardware that allows you to minimize your risk and best contribute to the health and security of the network. Third-party staking services make these decisions for you, and they don't always make the safest choices." />
  <Card title="Bezpieczeństwo sieci" emoji="🔐" description="Solo staking is the most impactful way to stake. By running a validator on your own hardware at home, you strengthen the robustness, decentralization, and security of the Ethereum protocol." />
</CardGrid>

## Rozważania przed solo stakingiem {#considerations-before-staking-solo}

Chociaż chcielibyśmy, aby staking solo był dostępny i wolny od ryzyka dla każdego, nie jest to jednak rzeczywistością. Istnieje kilka praktycznych i poważnych kwestii, o których należy pamiętać przed podjęciem decyzji o samodzielnym stakowaniu ETH.

<InfoGrid>
<ExpandableCard title="Obowiązkowa lektura" eventCategory="SoloStaking" eventName="clicked required reading">
Podczas obsługi własnego węzła należy poświęcić trochę czasu na naukę obsługi wybranego oprogramowania. Obejmuje to czytanie odpowiedniej dokumentacji i bycie na bieżąco z kanałami komunikacji tych zespołów programistów.

Im więcej wiesz o oprogramowaniu, które uruchamiasz i jak działa dowód stawki (proof-of-stake), tym mniej ryzykowne będzie to jako staker i tym łatwiej będzie naprawić wszelkie problemy, które mogą pojawić się po drodze jako operator węzła.
</ExpandableCard>

<ExpandableCard title="Komfort w obsłudze komputera" eventCategory="SoloStaking" eventName="clicked comfortable with computers">
Konfiguracja węzła wymaga rozsądnego poziomu komfortu podczas pracy z komputerami, chociaż nowe narzędzia z czasem to ułatwiają. Zrozumienie interfejsu wiersza poleceń jest pomocne, ale nie jest już wymagane.

Wymaga również bardzo podstawowej konfiguracji sprzętu i pewnego zrozumienia minimalnych zalecanych specyfikacji.
</ExpandableCard>

<ExpandableCard title="Bezpieczne zarządzanie kluczem" eventCategory="SoloStaking" eventName="clicked secure key management">
Podobnie jak w przypadku kluczy prywatnych zabezpieczających adres Ethereum, konieczne będzie wygenerowanie kluczy specjalnie dla walidatora. Musisz wiedzieć, jak bezpiecznie przechowywać wszelkie frazy odzyskiwania lub klucze prywatne.{' '}

<a href="/security/">Bezpieczeństwo Ethereum i zapobieganie oszustwom</a>
</ExpandableCard>

<ExpandableCard title="Maintenance" eventCategory="SoloStaking" eventName="clicked maintenance">
Sprzęt czasami zawodzi, połączenia sieciowe ulegają awarii, a oprogramowanie klienta czasami wymaga aktualizacji. Konserwacja węzła jest nieunikniona i od czasu do czasu będzie wymagać uwagi użytkownika. Musisz mieć pewność, że będziesz na bieżąco z wszelkimi przewidywanymi aktualizacjami sieci lub innymi krytycznymi aktualizacjami klienta.
</ExpandableCard>

<ExpandableCard title="Niezawodny czas działania" eventCategory="SoloStaking" eventName="clicked reliable uptime">
Nagrody są proporcjonalne do czasu, w którym walidator jest online i prawidłowo poświadcza. Przestój wiąże się z karami proporcjonalnymi do tego, ile innych walidatorów jest offline w tym samym czasie, ale <a href="#faq">nie powoduje cięcia</a>. Przepustowość również ma znaczenie, ponieważ nagrody są zmniejszane za zaświadczenia, które nie są otrzymywane na czas. Wymagania będą się różnić, ale zalecane jest co najmniej 10 Mb/s wysyłania i pobierania.
</ExpandableCard>

<ExpandableCard title="Ryzyko cięcia" eventCategory="SoloStaking" eventName="clicked slashing risk">
W odróżnieniu od kar za bycie offline, <em>cięcie</em> jest znacznie poważniejszą karą zarezerwowaną dla złośliwych wykroczeń. Uruchamiając klienta mniejszościowego z kluczami załadowanymi tylko na jednej maszynie w danym czasie, ryzyko odcięcia jest zminimalizowane. Biorąc to pod uwagę, wszyscy stakerzy muszą być świadomi ryzyka związanego z odcięciem.

<a href="https://medium.com/prysmatic-labs/eth2-slashing-prevention-tips-f6faa5025f50/">Więcej o cięciu i cyklu życia walidatora</a>
</ExpandableCard>
</InfoGrid>

<StakingComparison page="solo" />

## Jak to działa {#how-it-works}

<StakingHowSoloWorks />

Podczas aktywności będziesz zdobywać nagrody ETH, które będą okresowo wpłacane na Twój adres wypłaty.

Jeśli chcesz, możesz wyjść jako walidator, co eliminuje wymóg bycia online i zatrzymuje wszelkie dalsze nagrody. Pozostałe saldo zostanie następnie wypłacone na adres wypłaty wskazany podczas konfiguracji.

[Więcej o wypłatach ze stakingu](/staking/withdrawals/)

## Rozpocznij na Staking Launchpad {#get-started-on-the-staking-launchpad}

Staking Launchpad to aplikacja open source, która pomoże ci zostać stakerem. Poprowadzi cię przez wybór klientów, wygenerowanie kluczy i zdeponowanie ETH w kontrakcie depozytu na staking. Lista kontrolna jest dostęna, aby upewnić się, że wszystko zostało uwzględnione w celu bezpiecznego skonfigurowania walidatora.

<StakingLaunchpadWidget />

## Co wziąć pod uwagę w przypadku narzędzi do konfiguracji węzłów i klientów {#node-tool-considerations}

Powstaje coraz więcej narzędzi i usług, które pomagają w samodzielnym stakowaniu ETH, ale każde z nich wiąże się z innym ryzykiem i korzyściami.

Wskaźniki atrybutów są używane poniżej, aby zasygnalizować godne uwagi mocne lub słabe strony, jakie może mieć wymienione narzędzie do stakowania. Użyj tej sekcji jako odniesienia do sposobu definiowania tych atrybutów podczas wybierania narzędzi, które pomogą Ci w Twojej przygodzie ze stakingiem.

<StakingConsiderations page="solo" />

## Poznaj narzędzia konfiguracji węzła i klienta {#node-and-client-tools}

Dostępnych jest wiele opcji ułatwiających konfigurację. Skorzystaj z powyższych wskaźników, które oprowadzą cię z poniższymi narzędziami.

<ProductDisclaimer />

### Narzędzia węzła

<StakingProductsCardGrid category="nodeTools" />

Należy pamiętać o znaczeniu wybrania [klienta mniejszościowego](/developers/docs/nodes-and-clients/client-diversity/), ponieważ poprawia to bezpieczeństwo sieci i ogranicza ryzyko. Narzędzia, które pozwalają na konfigurację klienta mniejszościowego, są oznaczone jako <em style={{ textTransform: "uppercase" }}>„multi-klient”.</em>

### Generatory kluczy

Narzędzia te mogą być używane jako alternatywa dla [CLI depozytu stakingu](https://github.com/ethereum/staking-deposit-cli/), aby pomóc w generowaniu kluczy.

<StakingProductsCardGrid category="keyGen" />

Masz sugestię dotyczącą narzędzia do stakingu, które pominęliśmy? Zapoznaj się z naszymi [zasadami umieszczania produktów na liście](/contributing/adding-staking-products/), aby sprawdzić, czy są one odpowiednie i przesłać je do recenzji.

## Zapoznaj się z przewodnikami solo stakingu {#staking-guides}

<StakingGuides />

## Często zadawane pytania {#faq}

Oto kilka najczęściej zadawanych pytań dotyczących stakingu, o których warto wiedzieć.

<ExpandableCard title="Czym jest walidator?">

<em>Walidator</em> to wirtualny podmiot, który żyje w Ethereum i uczestniczy w konsensusie protokołu Ethereum. Walidatory są reprezentowane przez saldo, klucz publiczny i inne właściwości. <em>Klient walidatora</em> to oprogramowanie, które działa w imieniu walidatora, przechowując i używając jego klucza prywatnego. Pojedynczy klient walidatora może przechowywać wiele par kluczy, kontrolując wiele walidatorów.

</ExpandableCard>

<ExpandableCard title="Czy mogę zdeponować więcej niż 32 ETH?">
Każda para kluczy powiązana z walidatorem wymaga dokładnie 32 ETH do aktywacji. Więcej ETH zdeponowanych w jednym zestawie kluczy nie zwiększa potencjału nagród, ponieważ każdy walidator jest ograniczony do <a href="https://www.attestant.io/posts/understanding-validator-effective-balance/">efektywnego salda</a> 32 ETH. Oznacza to, że staking odbywa się w przyrostach 32 ETH, każdy z własnym zestawem kluczy i saldem.

Nie należy deponować więcej niż 32 ETH dla jednego walidatora. Nie zwiększy to twoich nagród. Jeśli dla walidatora ustawiono adres wypłaty, nadwyżka środków powyżej 32 ETH zostanie automatycznie wypłacona na ten adres podczas następnego <a href="/staking/withdrawals/#validator-sweeping">przeniesienia walidatora</a>.

Jeśli solo staking wydaje ci się zbyt wymagający, rozważ skorzystanie z <a href="/staking/saas/">usług stakingowych</a> lub jeśli masz mniej niż 32 ETH, sprawdź <a href="/staking/pools/">stakowanie w puli</a>.
</ExpandableCard>

<ExpandableCard title="Czy zostanę odcięty, jeśli przejdę w tryb offline? (tldr: Nie.)">
Przejście w tryb offline, podczas poprawnej finalizacji sieci, NIE spowoduje odcięcia. Niewielkie <em>kary za brak aktywności</em> są naliczane, jeśli walidator nie jest dostępny do poświadczania w danej epoce (każda o długości 6,4 minuty), ale różni się to znacznie od <em>cięcia</em>. Kary te są nieco niższe niż nagroda, którą można by uzyskać, gdyby walidator był dostępny do poświadczenia, a straty można odzyskać w przybliżeniu w takim samym czasie, jak w przypadku powrotu do trybu online.

Należy pamiętać, że kary za brak aktywności są proporcjonalne do liczby walidatorów znajdujących się w trybie offline w tym samym czasie. W przypadkach, gdy duża część sieci jest jednocześnie offline, kary dla każdego z tych walidatorów będą większe niż w przypadku niedostępności pojedynczego walidatora.

W skrajnych przypadkach, jeśli sieć przestanie finalizować w wyniku tego, że ponad jedna trzecia walidatorów jest offline, użytkownicy ci ucierpią z powodu tak zwanego <em>kwadratowego wycieku nieaktywności</em>, który jest wykładniczym odpływem ETH z kont walidatorów offline. Pozwala to sieci na samoleczenie poprzez spalanie ETH nieaktywnych walidatorów, aż ich saldo osiągnie 16 ETH, w którym to momencie zostaną oni automatycznie usunięci z puli walidatorów. Pozostałe walidatory online ostatecznie ponownie obejmą ponad 2/3 sieci, spełniając większość potrzebną do ponownego sfinalizowania łańcucha.
</ExpandableCard>

<ExpandableCard title="Jak mogę się upewnić, że nie zostanę odcięty?">
W skrócie mówiąc, nigdy nie można tego w pełni zagwarantować, ale jeśli działasz w dobrej wierze, uruchamiasz klienta mniejszościowego i przechowujesz klucze podpisujące tylko na jednym komputerze naraz, ryzyko odcięcia jest prawie zerowe.

Istnieje tylko kilka konkretnych sposobów, które mogą spowodować, że walidator zostanie odcięty i wyrzucony z sieci. W chwili pisania tego tekstu, cięcia, które miały miejsce, były wyłącznie wynikiem zbędnych konfiguracji sprzętowych, w których klucze podpisujące były przechowywane na dwóch oddzielnych komputerach jednocześnie. Może to nieumyślnie spowodować <em>podwójne głosowanie</em> z Twoich kluczy, co jest wykroczeniem podlegającym odcięciu.

Uruchomienie klienta superwiększościowego (dowolnego klienta używanego przez ponad 2/3 sieci) wiąże się również z ryzykiem potencjalnego odcięcia w przypadku, gdy klient ten ma błąd, który skutkuje rozwidleniem łańcucha. Może to skutkować błędnym forkiem, który zostanie sfinalizowany. Korekta z powrotem do zamierzonego łańcucha wymagałaby przesłania <em>głosowania zaokrąglonego</em> poprzez próbę cofnięcia sfinalizowanego bloku. Jest to również wykroczenie, za które można zostać odciętym, którego można uniknąć, po prostu uruchamiając klienta mniejszościowego.

Równoważne błędy w <em>kliencie mniejszościowym nigdy nie zostałyby sfinalizowane</em>, a zatem nigdy nie skutkowałyby głosowaniem zaokrąglonym i po prostu skutkowałyby karami za brak aktywności, a <em>nie cięciem</em>.

<ul>
  <li><a href="https://hackernoon.com/ethereums-client-diversity-problem">Dowiedz się więcej o znaczeniu klienta mniejszościowego.</a></li>
  <li><a href="https://medium.com/prysmatic-labs/eth2-slashing-prevention-tips-f6faa5025f50">Dowiedz się więcej o zapobieganiu cięciom</a></li>
</ul>
</ExpandableCard>

<ExpandableCard title="Który klient jest najlepszy?">
Poszczególne klienty mogą nieznacznie różnić się pod względem wydajności i interfejsu użytkownika, ponieważ każdy z nich jest opracowywany przez różne zespoły przy użyciu różnych języków programowania. To powiedziawszy, żaden z nich nie jest „najlepszy”. Wszyscy klienci produkcyjni są doskonałymi oprogramowaniami, które wykonuje te same podstawowe funkcje synchronizacji i interakcji z blockchainem.

Ponieważ wszyscy klienci produkcyjni zapewniają tę samą podstawową funkcjonalność, bardzo ważne jest, aby wybrać <strong>klienta mniejszościowego</strong>, czyli dowolnego klienta, który NIE jest obecnie używany przez większość walidatorów w sieci. Może to zabrzmieć nieintuicyjnie, ale uruchomienie klienta większościowego lub superwiększościowego zwiększa ryzyko cięcia w przypadku błędu w tym kliencie. Korzystanie z klienta mniejszościowego drastycznie ogranicza to ryzyko.

<a href="https://mirror.xyz/jmcook.eth/S7ONEka_0RgtKTZ3-dakPmAHQNPvuj15nh0YGKPFriA">Dowiedz się więcej, dlaczego różnorodność klientów ma kluczowe znaczenie</a>
</ExpandableCard>

<ExpandableCard title="Czy mogę po prostu użyć VPS (wirtualny serwer prywatny)?">
Chociaż wirtualny serwer prywatny (VPS) może być używany jako zamiennik sprzętu domowego, fizyczny dostęp i lokalizacja klienta walidatora <em>ma znaczenie</em>. Scentralizowane rozwiązania chmurowe, takie jak Amazon Web Services lub Digital Ocean, zapewniają wygodę polegającą na braku konieczności pozyskiwania i obsługi sprzętu kosztem centralizacji sieci.

Im więcej klientów walidatora działa na jednym scentralizowanym rozwiązaniu pamięci w chmurze, tym bardziej niebezpieczne staje się to dla tych użytkowników. Każde zdarzenie, które spowoduje przejście w tryb offline tych dostawców, czy to przez atak, wymogi regulacyjne, czy po prostu przerwy w dostawie prądu/internetu, spowoduje, że każdy klient walidatora, który polega na tym serwerze, zostanie wyłączony w tym samym czasie.

Kary za bycie offline są proporcjonalne do tego, ile innych osób jest offline w tym samym czasie. Korzystanie z VPS znacznie zwiększa ryzyko, że kary za bycie offline będą bardziej dotkliwe, a także zwiększa ryzyko kwadratowego wycieku lub cięcia w przypadku, gdy przerwa jest wystarczająco duża. Aby zminimalizować własne ryzyko i ryzyko dla sieci, użytkownicy są zdecydowanie zachęcani do uzyskania i obsługi własnego sprzętu.
</ExpandableCard>

<ExpandableCard title="Jak mogę odblokować nagrody lub odzyskać ETH?">

Wypłaty wszelkiego rodzaju z łańcucha śledzącego wymagają ustawienia poświadczeń wypłaty.

Nowi stakerzy ustawiają to w czasie generowania klucza i deponowania. Obecni stakerzy, którzy jeszcze tego nie ustawili, mogą zaktualizować swoje klucze, aby obsługiwały tę funkcję.

Po ustawieniu poświadczeń wypłaty, płatności nagród (skumulowane ETH przez początkowe 32) będą okresowo automatycznie dystrybuowane na adres wypłaty.

Aby odblokować i otrzymać całe saldo z powrotem, należy również zakończyć proces zamykania walidatora.

<ButtonLink href="/staking/withdrawals/">Więcej o wypłatach ze stakingu</ButtonLink>
</ExpandableCard>

## Dalsza lektura {#further-reading}

- [Katalog stakingu Ethereum](https://www.staking.directory/) — _Eridian i Spacesider_
- [Problem różnorodności klientów Ethereum](https://hackernoon.com/ethereums-client-diversity-problem) — _@emmanuelawosika 2022 r._
- [Wspieranie różnorodności klientów](https://www.attestant.io/posts/helping-client-diversity/) — _Jim McDonald 2022 r._
- [Różnorodność klientów w warstwie konsensusu Ethereum](https://mirror.xyz/jmcook.eth/S7ONEka_0RgtKTZ3-dakPmAHQNPvuj15nh0YGKPFriA) — _jmcook.eth 2022 r._
- [Zakup sprzętu do walidacji Ethereum](https://www.youtube.com/watch?v=C2wwu1IlhDc) — _EthStaker 2022 r._
- [Krok po kroku: jak dołączyć do sieci testowej Ethereum 2.0](https://kb.beaconcha.in/guides/tutorial-eth2-multiclient) — _Butta_
- [Wskazówki dotyczące zapobieganiu cięciu Eth2](https://medium.com/prysmatic-labs/eth2-slashing-prevention-tips-f6faa5025f50) — _Raul Jordan 2020 r._

<QuizWidget quizKey="solo-staking" />
