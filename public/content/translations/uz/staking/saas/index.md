---
title: Steyking xizmat sifatida
description: Birlashtirilgan ETH stakingini qanday boshlash kerakligi haqida umumiy ma'lumot
lang: uz
template: staking
emoji: ":money_with_wings:"
image: /images/staking/leslie-saas.png
alt: Bulutlar orasida suzib yurgan karkidon Lesli.
sidebarDepth: 2
summaryPoints:
  - Tashqi tugun operatorlari validator mijozingizning amallarini boshqaradi
  - Tugunning texnik murakkabligi bilan ishlashda o‘zini noqulay his qiladigan 32 ETHli har bir kishi uchun ajoyib tanlov
  - Ishonchni pasaytiring va yechib olish kalitlari saqlanishini ta’minlang
---

## Xizmat sifatida staking nima? {#what-is-staking-as-a-service}

Xizmat sifatida staking (“SaaS”) — bu siz o‘zingizning 32 ETHingizni validatorga depozitga qo‘yadigan, lekin tugun operatsiyalarini tashqi operatorga topshiradigan stavka xizmatlari toifasidir. Bu jarayon odatda kalitlarni yaratish va depozit qilish, keyin imzolash kalitlaringizni operatorga yuklashni o‘z ichiga olgan dastlabki sozlash orqali boshqarishni o‘z ichiga oladi. Bu xizmatga validatorni sizning nomingizdan, odatda oylik to‘lov evaziga ishlatish imkonini beradi.

## Nega xizmat bilan tikish kerak? {#why-stake-with-a-service}

Ethereum protokoli aksiyalarni mahalliy ravishda yuborishni qo‘llab-quvvatlamaydi, shuning uchun ushbu xizmatlar ushbu talabni qondirish uchun yaratilgan. Agar sizda 32 ETH bo‘lsa, lekin apparat bilan ishlashda o‘zingizni noqulay his qilsangiz, SaaS xizmatlari sizga asosiy blok mukofotlarini ishlab olish paytida qiyin qismni topshirish imkonini beradi.

<CardGrid>
  <Card title="Shaxsiy validatoringiz" emoji=":desktop_computer:" description="Deposit your own 32 ETH to activate your own set of signing keys that will participate in Ethereum consensus. Monitor your progress with dashboards to watch those ETH rewards accumulate." />
  <Card title="Boshlash oson" emoji="🏁" description="Forget about hardware specs, setup, node maintenance and upgrades. SaaS providers let you outsource the hard part by uploading your own signing credentials, allowing them to run a validator on your behalf, for a small cost." />
  <Card title="Riskni cheklash" emoji=":shield:" description="In many cases users do not have to give up access to the keys that enable withdrawing or transferring staked funds. These are different from the signing keys, and can be stored separately to limit (but not eliminate) your risk as a staker." />
</CardGrid>

<StakingComparison page="saas" />

## Nimani hisobga olish kerak {#what-to-consider}

ETHingizni tikishga yordam beradigan SaaS provayderlari soni ortib bormoqda, ammo ularning barchasi o‘z foydalari va risklariga ega. Barcha SaaS variantlari uyga qo‘yish bilan taqqoslaganda qo‘shimcha ishonch taxminlarini talab qiladi. Saas opsiyalarida Ethereum mijozlarini qamrab oluvchi ochiq yoki tekshiruvdan o‘tkazilishi mumkin bo‘lmagan qo‘shimcha kod bo‘lishi mumkin. SaaS tarmoqni nomarkazlashtirishga ham salbiy ta’sir ko‘rsatadi. Sozlamaga qarab, siz validatorni boshqara olmasligingiz mumkin — operator ETH orqali noto‘g‘ri harakat qilishi mumkin.

Atribut ko‘rsatkichlari quyida sanab o‘tilgan SaaS provayderining kuchli yoki zaif tomonlarini bildirish uchun ishlatiladi. Staking kampaniyangizda yordam beradigan xizmatni tanlashda ushbu atributlarni qanday aniqlashimiz uchun ushbu bo‘limdan ma’lumot sifatida foydalaning.

<StakingConsiderations page="saas" />

## Staking xizmati provayderlari bilan tanishing {#saas-providers}

Quyida mavjud SaaS provayderlari keltirilgan. Yuqoridagi ko‘rsatkichlardan ushbu xizmatlar orqali sizga yordam berish uchun foydalaning

<ProductDisclaimer />

### SaaS provayderlari

<StakingProductsCardGrid category="saas" />

[Mijozlar xilma-xilligini](/developers/docs/nodes-and-clients/client-diversity/) qo‘llab-quvvatlash muhimligini yodda tuting, chunki u tarmoq xavfsizligini yaxshilaydi va riskingizni cheklaydi. Aksariyat mijozlarning foydalanishini cheklaydigan dalillarga ega xizmatlar <em style={{ textTransform: "uppercase" }}>“ijro mijozlari xilma-xilligi”</em> va <em style={{ textTransform: "uppercase" }}>“konsensus mijozlar xilma-xilligi”</em> bilan ko‘rsatiladi.

### Asosiy generatorlar

<StakingProductsCardGrid category="keyGen" />

Biz o‘tkazib yuborgan xizmat sifatida staking provayderi uchun taklif bormi? [Mahsulotni kataloglash qoidalari](/contributing/adding-staking-products/) bilan tanishib chiqing va ularni ko‘rib chiqish uchun yuboring.

## Frequently asked questions {#faq}

<ExpandableCard title="Mening kalitlarim kimda boʻladi?" eventCategory="SaasStaking" eventName="clicked who holds my keys">
Kelishishlar provayderdan provayderga farq qiladi, lekin odatda sizga kerakli imzolash kalitlarini sozlash (32 ETH uchun bitta) va ularni provayderingizga yuklash orqali ular sizning nomingizdan tasdiqlanishiga ruxsat beriladi. Imzolash kalitlarining o‘zi mablag‘larni yechib olish, o‘tkazish yoki sarflash imkonini bermaydi. Biroq, ular konsensusga ovoz berish imkoniyatini beradi, agar bu to‘g‘ri amalga oshirilmasa, oflayn jarimalar yoki qisqartirishga olib kelishi mumkin.
</ExpandableCard>

<ExpandableCard title="Demak, ikkita kalit toʻplami boʻlar ekan-da?" eventCategory="SaasStaking" eventName="clicked so there are two sets of keys">
Ha. Har bir hisob BLS <em>imzolash</em> kalitlari va BLS <em>yechib olish</em> kalitlaridan iborat. Validator zanjirning holatini tasdiqlashi, sinxronizatsiya qo‘mitalarida ishtirok etishi va bloklarni taklif qilishi uchun imzolash kalitlari validator mijozi tomonidan osonlikcha olinishi kerak. Ular qandaydir shaklda Internetga ulanishi kerak va shuning uchun tabiiy ravishda “issiq” kalitlar hisoblanadi. Bu tasdiqlovchining tasdiqlash qobiliyatiga ega bo‘lishi uchun talabdir va shuning uchun mablag‘larni o‘tkazish yoki yechib olish uchun ishlatiladigan kalitlar xavfsizlik nuqtai nazaridan ajratilgan.

BLS yechib olish kalitlari bir martalik xabarni imzolash uchun ishlatiladi, unda qaysi ijro darajasidagi hisobda pul tikish mukofotlari va chiqarilgan mablag‘lar borishi kerakligi aytiladi. Bu xabar efirga uzatilgandan keyin <em>BLS yechib olish</em> kalitlari ortiq kerak bo‘lmaydi. Buning o‘rniga, yechib olingan mablag‘lar ustidan nazorat siz kiritgan manzilga doimiy ravishda topshiriladi. Bu sizga o‘z xotirangiz orqali himoyalangan yechib olish manzilini sozlash imkonini beradi, hatto kimdir validatorni imzolash kalitlarini nazorat qilsa ham, validator mablag‘laringiz uchun riskini minimallashtiradi.

Yechib olish ma’lumotlarini yangilash yechib olishni yoqish uchun zaruriy qadam\*. Bu jarayon mnemonik urug‘ iborangiz yordamida yechib olish kalitlarini yaratishni o‘z ichiga oladi.

<strong>Bu asosiy iborani xavfsiz saqlashga ishonch hosil qiling, aks holda vaqti kelganda yechib olish kalitlarini yarata olmaysiz.</strong>

\*Dastlabki depozit bilan yechib olish manzilini taqdim etgan ishtirokchilarga buni o‘rnatish shart emas. Validatorni qanday tayyorlash haqida yordam olish uchun SaaS provayderingizga murojaat qiling.
</ExpandableCard>

<ExpandableCard title="Qachon yechib olishim mumkin?" eventCategory="SaasStaking" eventName="clicked when can I withdraw">
Staking yechib olish 2023-yil aprel oyida Shanxay/Kapella yangilanishida amalga oshirildi. Stakerlar yechib olish manzilini taqdim etishlari kerak (agar dastlabki depozitda taqdim etilmagan bo‘lsa) va mukofot to‘lovlari har bir necha kunda davriy avtomatik ravishda taqsimlana boshlaydi.

Validatorlar ham validator sifatida to‘liq chiqishlari mumkin, bu ularning qolgan ETH balansini yechib olish uchun ochadi. Ijro yechib olish manzilini taqdim etgan va chiqish jarayonini yakunlagan hisoblar keyingi tekshiruv paytida taqdim etilgan yechib olish manziliga butun balansini oladi.

<ButtonLink href="/staking/withdrawals/">Staking yechib olish haqida batafsil</ButtonLink>
</ExpandableCard>

<ExpandableCard title="Men slashga uchragan taqdirda nima sodir bo‘ladi?" eventCategory="SaasStaking" eventName="clicked what happens if I get slashed">
Pul tikish haqida batafsil SaaS provayderidan foydalangan holda, siz uzelingizning ishlashini boshqa birovga ishonib topshirasiz. Bu sizning nazoratingiz ostida bo‘lmagan tugunning yomon ishlashi riski bilan bog‘liq. Agar validatoringiz qisqartirilgan bo‘lsa, validator balansingiz jarimaga tortiladi va validator hovuzidan majburan olib tashlanadi.

Kesish/chiqish jarayoni tugagandan so‘ng, ushbu mablag‘lar validatorga tayinlangan yechib olish manziliga o‘tkaziladi. Bu yoqilishi uchun yechib olish manzilini kiritish talab qilinadi. Bu dastlabki depozitda taqdim etilgan bo‘lishi mumkin. Aks holda, yechib olish manzilini e’lon qiluvchi xabarni imzolash uchun validator yechib olish kalitlaridan foydalanish kerak bo‘ladi. Agar yechib olish manzili taqdim etilmagan bo‘lsa, taqdim etilgunga qadar mablag‘lar qulflangan holda qoladi.

Har qanday kafolat yoki sug‘urta variantlari haqida batafsil ma’lumot olish va yechib olish manzilini taqdim etish bo‘yicha ko‘rsatmalar olish uchun SaaS provayderiga murojaat qiling. Agar siz validator sozlamalarini to‘liq nazorat qilishni istasangiz, <a href="/staking/solo/">ETHingizni qanday yakka tartibda qo‘yish haqida batafsil bilib oling</a>.
</ExpandableCard>

## Qo'shimcha o'qish {#further-reading}

- [The Ethereum Staking Directory](https://www.staking.directory/) - _Eridian va Spacesider_
- [Evaluating Staking Services](https://www.attestant.io/posts/evaluating-staking-services/) - _Jim McDonald 2020_
