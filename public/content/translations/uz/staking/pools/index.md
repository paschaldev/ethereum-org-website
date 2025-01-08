---
title: Birlashtirilgan staking
description: Umumiy ETH stavkasini qanday boshlash haqida umumiy ma’lumot
lang: uz
template: staking
emoji: ":money_with_wings:"
image: /images/staking/leslie-pool.png
alt: Hovuzda suzayotgan karkidon Lesli.
sidebarDepth: 2
summaryPoints:
  - Boshqalar bilan kuchlarni birlashtirish orqali istalgan miqdordagi ETH bilan pul tiking va mukofotlar oling
  - Qattiq qismni tashlab keting va validator operatsiyasini uchinchi tomonga ishoning
  - Staking tokenlarini o‘z hamyoningizda saqlang
---

## Staking hovuzlari nima? {#what-are-staking-pools}

Staking hovuzlari kichik miqdordagi ETH bilan ko‘pchilikka validator kalitlari to‘plamini faollashtirish uchun zarur bo‘lgan 32 ETH olish imkonini beruvchi hamkorlikdagi yondashuvdir. Birlashtirish funksiyasi protokol doirasida qo‘llab-quvvatlanmaydi, shuning uchun ushbu ehtiyojni hal qilish uchun yechimlar alohida ishlab chiqilgan.

Ba’zi hovuzlar aqlli shartnomalar yordamida ishlaydi, bu yerda mablag‘lar sizning ulushingizni ishonchsiz boshqaradigan va kuzatadigan va sizga ushbu qiymatni ifodalovchi tokenni beradigan shartnomaga qo‘yilishi mumkin. Boshqa hovuzlar aqlli shartnomalarni o‘z ichiga olmasligi mumkin va buning o‘rniga zanjirdan tashqarida vositachilik qiladi.

## Hovuz bilan pul tikishning nima keragi bor? {#why-stake-with-a-pool}

Pul tikishning biz [kirish qismida](/staking/) ta’riflagan afzalliklaridan tashqari, hovuz bilan pul tikish bir qator afzalliklarga ega.

<CardGrid>
  <Card title="Kirish uchun past toʻsiq" emoji="🐟" description="Not a whale? No problem. Most staking pools let you stake virtually any amount of ETH by joining forces with other stakers, unlike staking solo which requires 32 ETH." />
  <Card title="Bugun tikish" emoji=":stopwatch:" description="Staking with a pool is as easy as a token swap. No need to worry about hardware setup and node maintenance. Pools allow you to deposit your ETH which enables node operators to run validators. Rewards are then distributed to contributors minus a fee for node operations." />
  <Card title="Staking tokenlari" emoji=":droplet:" description="Many staking pools provide a token that represents a claim on your staked ETH and the rewards it generates. This allows you to make use of your staked ETH, e.g. as collateral in DeFi applications." />
</CardGrid>

<StakingComparison page="pools" />

## Nimani hisobga olish kerak {#what-to-consider}

Birlashtirilgan yoki topshirilgan stavkalar Ethereum protokoli tomonidan qo‘llab-quvvatlanmaydi, ammo foydalanuvchilarning 32 ETH dan kam stavka qo‘yishi talabini hisobga olgan holda, bu talabga javob beradigan ko‘plab yechimlar ishlab chiqilgan.

Har bir hovuz va ular foydalanadigan vositalar yoki aqlli shartnomalar turli jamoalar tomonidan ishlab chiqilgan va har biri foyda va risklar bilan birga keladi. Hovuzlar foydalanuvchilarga o‘zlarining ETHlarini manfaatdor ETHni ifodalovchi tokenga almashtirish imkonini beradi. Garchi haqiqiy ETH konsensus qatlamida qo‘yilgan bo‘lsa ham, token foydali, chunki u foydalanuvchilarga markazlashmagan birjalarda asosiy ETHga (va aksincha) qo‘llaniladigan stavka mukofotlaridan daromad keltiradigan daromadli tokenning ekvivalent summasiga har qanday ETH miqdorini almashtirish imkonini beradi. Bu daromadli staked-ETH mahsulotdan oldinga va orqaga almashishni anglatadi va “xom ETH” tez, oson va nafaqat 32 ETHning karralilarida mavjud.

Biroq, bu staked-ETH tokenlari kartelga o‘xshash xatti-harakatlarni yaratishga moyil bo‘lib, unda katta miqdordagi ETH bir nechta markazlashtirilgan tashkilotlar nazorati ostida bo‘lib, ko‘plab mustaqil shaxslarga tarqalmaydi. Bu senzura yoki qiymatni ekstraksiya qilish uchun sharoit yaratadi. Garov qo‘yishning oltin standarti har doim imkon qadar o‘z apparatida validatorlarni ishlaydigan shaxslar bo‘lishi kerak.

[Tokenlarni qo‘yish risklari haqida batafsil](https://notes.ethereum.org/@djrtwo/risks-of-lsd).

Atribut ko‘rsatkichlari quyida sanab o‘tilgan stavka fondi kuchli yoki zaif tomonlariga ishora qilish uchun ishlatiladi. Qo‘shilish uchun hovuzni tanlashda ushbu atributlarni qanday aniqlashimiz uchun ushbu bo‘limdan ma’lumot sifatida foydalaning.

<StakingConsiderations page="pools" />

## Staking hovuzlari bilan tanishish {#explore-staking-pools}

Sozlashda sizga yordam beradigan turli xil variantlar mavjud. Quyidagi vositalar orqali sizga yordam berish uchun yuqoridagi ko‘rsatkichlardan foydalaning.

<ProductDisclaimer />

<StakingProductsCardGrid category="pools" />

[Mijozlar xilma-xilligini](/developers/docs/nodes-and-clients/client-diversity/) jiddiy qabul qiladigan xizmatni tanlash muhimligini yodda tuting, chunki u tarmoq xavfsizligini yaxshilaydi va risklaringizni cheklaydi. Aksariyat mijozlarning foydalanishini cheklaydigan dalillarga ega xizmatlar <em style={{ textTransform: "uppercase" }}>“ijro mijozlari xilma-xilligi”</em> va <em style={{ textTransform: "uppercase" }}>“konsensus mijozlar xilma-xilligi”</em> bilan ko‘rsatiladi.

Biz o‘tkazib yuborgan staking vositasi uchun taklif bormi? [Mahsulotni kataloglash qoidalari](/contributing/adding-staking-products/) bilan tanishib chiqing va ularni ko‘rib chiqish uchun yuboring.

## Tez-tez beriladigan savollar {#faq}

<ExpandableCard title="Mukofotlarni qanday olaman?">
Odatda, ERC-20 staking tokenlari ishtirokchilarga beriladi va ular tikkan ETH qiymati va mukofotlarini ifodalaydi. Shuni yodda tutingki, turli pullar o‘z foydalanuvchilariga staking mukofotlarini biroz boshqacha usullar bilan tarqatadi, ammo bu umumiy mavzu.
</ExpandableCard>

<ExpandableCard title="Qachon garovimni yechib olishim mumkin?">
Hoziroq! Shanxay/Kapella tarmog‘ini yangilash 2023-yil aprel oyida bo‘lib o‘tdi va staking yechib olishni joriy qildi. Endi qayta tikish pullari mavjud bo‘lgan validator hisoblari ETHdan chiqish va belgilangan yechib olish manziliga yechib olish imkoniyatiga ega. Bu asosiy ETH uchun ulushingizning bir qismini ayirboshlash imkoniyatini beradi. Bu funksiyani qanday dastaklashini bilish uchun provayderingiz bilan tanishing.

Shu bilan bir qatorda, ERC-20 staking tokendan foydalanadigan hovuzlar foydalanuvchilarga ushbu tokenni ochiq bozorda sotishga imkon beradi, bu sizga tikish pozitsiyasini sotishga imkon beradi va ETH staking shartnomasidan haqiqatan ham olib tashlamasdan samarali “chiqish“ imkonini beradi.

<ButtonLink href="/staking/withdrawals/">Staking yechib olish haqida batafsil</ButtonLink>
</ExpandableCard>

<ExpandableCard title="Bu mening ayirboshlashim bilan staking farq qiladimi?">
Ushbu jamlangan staking variantlari va markazlashgan birjalar o‘rtasida ko‘plab o‘xshashliklar mavjud, masalan, kichik miqdordagi ETHni qo‘yish va ularni validatorlarni faollashtirish uchun birlashtirish imkoniyati.

Markazlashgan birjalardan farqli o‘laroq, boshqa ko‘plab qo‘shma stavkalar aqlli shartnomalar va/yoki stavka tokenlaridan foydalanadi, ular odatda o‘z hamyoningizda saqlanishi mumkin bo‘lgan ERC-20 tokenlari bo‘lib, boshqa tokenlar kabi sotib olinadi yoki sotiladi. Bu tokenlaringiz ustidan nazoratni berish orqali suverenitet va xavfsizlik qatlamini taklif qiladi, lekin baribir fonda sizning nomingizdan tasdiqlaydigan tasdiqlash mijozi ustidan bevosita nazoratni bermaydi.

Ba’zi birlashish variantlari ularni qo‘llab-quvvatlovchi tugunlarga kelganda boshqalariga qaraganda ko‘proq markazlashmagan. Tarmoqning sog‘lig‘i va nomarkazlashtirilishini rag‘batlantirish uchun manfaatdor tomonlar har doim ruxsatsiz markazlashmagan tugun operatorlari to‘plamini yaratishga imkon beradigan birlashtirish xizmatini tanlashga rag‘batlantiriladi.
</ExpandableCard>

## Qo'shimcha o'qish {#further-reading}

- [The Ethereum Staking Directory](https://www.staking.directory/) - _Eridian va Spacesider_
- [Rocket Pool bilan Staking - Staking xulosasi](https://docs.rocketpool.net/guides/staking/overview.html) - _RocketPool hujjatlari_
- [Ethereumni Lido bilan tikish](https://help.lido.fi/en/collections/2947324-staking-ethereum-with-lido) - _Lido yordam hujjatlari_
