---
title: Uzamčení jako služba
description: Přehled, jak začít se zapojením do sdruženého vkládání ETH
lang: cs
template: staking
emoji: ":money_with_wings:"
image: /images/staking/leslie-saas.png
alt: Nosorožec Leslie plovoucí v oblacích.
sidebarDepth: 2
summaryPoints:
  - Operátoři uzlů třetích stran zajišťují provoz vašeho klienta validátoru
  - Skvělá volba pro každého s 32 ETH, kdo se nechce řešit technickou složitost provozu uzlu
  - Snižte důvěru a udržujte své výběrové klíče v úschově
---

## Co je vklad jako služba? {#what-is-staking-as-a-service}

Vklad jako služba („SaaS“) představuje kategorii služeb vkladů, kde vkládáte svých vlastních 32 ETH pro validátorství, ale operace uzlu delegujete na operátora třetí strany. Tento proces obvykle zahrnuje provedení úvodního nastavení, včetně vygenerování a uložení klíče, a poté nahrání vašich podpisových klíčů operátorovi. To službě umožňuje provozovat váš validátor vaším jménem, ​​obvykle za měsíční poplatek.

## Proč vklady se službou? {#why-stake-with-a-service}

Protokol Ethereum nativně nepodporuje delegování vkladu, takže tyto služby byly vytvořeny tak, aby naplnily tento požadavek. Pokud máte vložit 32 ETH, ale necítíte se na  práci s hardwarem, služby SaaS vám umožní delegovat tu nejtěžší část, zatímco získáte nativní blokové odměny.

<CardGrid>
  <Card title="Váš vlastní validátor" emoji=":desktop_computer:" description="Deposit your own 32 ETH to activate your own set of signing keys that will participate in Ethereum consensus. Monitor your progress with dashboards to watch those ETH rewards accumulate." />
  <Card title="Snadné spuštění" emoji="🏁" description="Forget about hardware specs, setup, node maintenance and upgrades. SaaS providers let you outsource the hard part by uploading your own signing credentials, allowing them to run a validator on your behalf, for a small cost." />
  <Card title="Omezte své riziko" emoji=":shield:" description="In many cases users do not have to give up access to the keys that enable withdrawing or transferring staked funds. These are different from the signing keys, and can be stored separately to limit (but not eliminate) your risk as a staker." />
</CardGrid>

<StakingComparison page="saas" />

## Co je třeba zvážit {#what-to-consider}

Počet poskytovatelů SaaS, kteří vám pomohou vložit vaše ETH, stále roste. Jednotliví poskytovatelé se liší výhodami a riziky. Ve srovnání s domácím vkládáním vyžadují všechny varianty SaaS další důvěru. Možnosti Saas mohou mít další kód obalující klienty Ethereum, který není otevřený ani auditovatelný. SaaS má také škodlivý vliv na decentralizaci sítě. V závislosti na nastavení nemusíte své validátorství ovládat – operátor by mohl při používání vašeho ETH jednat nečestně.

Atributové indikátory se používají níže k signalizaci pozoruhodných silných nebo slabých stránek, které může mít uvedený poskytovatel SaaS. Použijte tuto část jako referenci, jak definujeme tyto atributy, když si vybíráte službu, která vám pomůže s vaší cestou vkladů.

<StakingConsiderations page="saas" />

## Prozkoumejte poskytovatele služeb vkladů {#saas-providers}

Níže uvádíme několik dostupných poskytovatelů SaaS. Pomocí výše uvedených indikátorů vás provedou těmito službami

<ProductDisclaimer />

### Poskytovatelé SaaS

<StakingProductsCardGrid category="saas" />

Vezměte prosím na vědomí, že je důležité podporovat [rozmanitost klientů](/developers/docs/nodes-and-clients/client-diversity/), protože zlepšuje zabezpečení sítě a omezuje vaše riziko. Služby, které prokazatelně omezují většinové klientské používání, jsou označeny <em style={{ textTransform: "uppercase" }}>„rozmanitost realizačního klienta“</em> a <em style={{ textTransform: "uppercase" }}>„rozmanitost klientů konsensu“.</em>

### Generátory klíčů

<StakingProductsCardGrid category="keyGen" />

Máte návrh na poskytovatele vkladu jako služby, kterého jsme vynechali? Podívejte se na naše [zásady pro záznam produktů](/contributing/adding-staking-products/), abyste zjistili, zda by se hodily, a odešlete je ke kontrole.

## Často kladené otázky {#faq}

<ExpandableCard title="Kdo drží moje klíče?" eventCategory="SaasStaking" eventName="clicked who holds my keys">
Ujednání se budou u jednotlivých poskytovatelů lišit, ale obvykle vás provedeme nastavením všech potřebných podpisových klíčů (jeden na 32 ETH) a jejich nahráním poskytovateli, aby je mohl ověřit vaším jménem. Samotné podpisové klíče nedávají žádnou možnost vybrat, převést nebo utratit vaše prostředky. Poskytují však možnost odevzdat hlasy směrem ke konsenzu, což, pokud není provedeno správně, může mít za následek offline penalizaci nebo trest.
</ExpandableCard>

<ExpandableCard title="Takže existují dvě sady klíčů?" eventCategory="SaasStaking" eventName="clicked so there are two sets of keys">
Ano. Každý účet zahrnuje <em>podpisové </em> klíče BLS i klíče <em>pro výběr</em>. Aby mohl validátor ověřovat stav řetězce, účastnit se synchronizačních výborů a navrhovat bloky, musí být podpisové klíče snadno dostupné pro klienta validátoru. Ty musí být nějakou formou připojeny k internetu, a jsou tedy neodmyslitelně považovány za „horké“ klávesy. Tento požadavek váš validátor potřebuje k potvrzení, a proto jsou klíče používané k převodu nebo výběru prostředků z bezpečnostních důvodů odděleny.

Výběrové klíče BLS se používají k podepsání jednorázové zprávy, která deklaruje, na kterou prováděcí vrstvu by odměny za vklady na účet a vyřazené prostředky měly jít. Jakmile je tato zpráva odvysílána, klíče <em>pro výběr BLS</em> již nejsou potřeba. Místo toho je kontrola nad vybranými prostředky trvale delegována na adresu, kterou jste uvedli. To vám umožňuje nastavit adresu pro výběr zabezpečenou prostřednictvím vašeho vlastního chladného úložiště, čímž se minimalizuje riziko pro vaše prostředky validátoru, i když někdo jiný ovládá vaše podpisové klíče validátoru.

Aktualizace přihlašovacích údajů pro výběr je nezbytným krokem k povolení výběrů\*. Tento proces zahrnuje generování klíčů pro výběr pomocí vaší mnemotechnické počáteční fráze.

<strong>Ujistěte se, že tuto počáteční frázi bezpečně zálohujete, jinak nebudete moci vygenerovat klíče pro výběr, až přijde čas.</strong>

\*Vkladatelé, kteří poskytli adresu pro výběr s počátečním vkladem, toto nastavovat nemusí. Ověřte si u svého poskytovatele SaaS podporu ohledně přípravy validátoru.
</ExpandableCard>

<ExpandableCard title="Kdy mohu provést výběr?" eventCategory="SaasStaking" eventName="clicked when can I withdraw">
Výběry vkladů byly provedeny v rámci aktualizace Šanghaj/Capella v dubnu 2023. Vkladatelé musí zadat adresu pro výběr (pokud není uvedena při počátečním vkladu) a výplaty odměn se začnou automaticky rozdělovat pravidelně každých několik dní.

Validátoři mohou také plně odejít jako validátor, který odemkne jejich zbývající ETH zůstatek pro výběr. Účty, které uvedly adresu pro provedení výběru a dokončily proces ukončení, obdrží celý zůstatek na adresu pro výběr uvedenou během příštího ověřovacího testu.

<ButtonLink href="/staking/withdrawals/">Více o výběru vkladů</ButtonLink>
</ExpandableCard>

<ExpandableCard title="Co se stane, když dostanu trest?" eventCategory="SaasStaking" eventName="clicked what happens if I get slashed">
Používáním poskytovatele SaaS svěřujete provoz svého uzlu někomu jinému. To přichází s rizikem špatného výkonu uzlu, který nemůžete ovlivnit. V případě, že je váš validátor potrestán, váš zůstatek validátoru bude penalizován a násilně odstraněn z fondu validátorů.

Po dokončení procesu trestání/opuštění budou tyto prostředky převedeny na adresu pro výběr přidělenou validátoru. To vyžaduje poskytnutí adresy pro výběr. To může být poskytnuto při počátečním vkladu. Pokud ne, bude nutné použít klíče pro výběr validátoru k podepsání zprávy deklarující adresu pro výběr. Pokud nebyla zadána žádná adresa pro výběr, prostředky zůstanou uzamčeny, dokud je nezadáte.

Obraťte se na jednotlivého poskytovatele SaaS pro další podrobnosti o jakýchkoli zárukách nebo možnostech pojištění a pro pokyny, jak zadat adresu pro výběr. Pokud chcete mít nastavení validátoru pod plnou kontrolou, <a href="/staking/solo/">přečtěte si další informace o tom, jak samostatně vložit ETH</a>.
</ExpandableCard>

## Další četba {#further-reading}

- [Adresář vkládání Etherea](https://www.staking.directory/) – _Eridian a Spacesider_
- [Vyhodnocení služeb vkládání](https://www.attestant.io/posts/evaluating-staking-services/) – _Jim McDonald 2020_
