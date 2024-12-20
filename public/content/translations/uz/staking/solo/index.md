---
title: ETHingizni uyda tikish
description: ETHingizni uyga tikishni qanday boshlash haqida umumiy ma’lumot
lang: uz
template: staking
emoji: ":money_with_wings:"
image: /images/staking/leslie-solo.png
alt: Oʻzining kompyuter chipidagi karkidon Lesli.
sidebarDepth: 2
summaryPoints:
  - Validatoringizning to‘g‘ri ishlashi va onlaynligi uchun bevosita protokoldan maksimal mukofot oling
  - Uy uskunasini ishga tushiring va Ethereum tarmog‘ining xavfsizligi va markazlashtirilmasligiga shaxsan qo‘shing
  - Ishonchni olib tashlang va hech qachon mablag‘laringiz kalitlarini nazorat qilishdan voz kechmang
---

## Uyda tikish nima? {#what-is-solo-staking}

Uyda tikish bu Internetga ulangan [Ethereum tugunini ishga tushirish](/run-a-node/) va [validatorni](#faq) faollashtirish uchun 32 ETH depozit qilish harakati bo‘lib, sizga tarmoq konsensusida bevosita ishtirok etish imkoniyatini beradi.

**Uyda tikish Ethereum tarmog‘ining nomarkazlashuvini kuchaytiradi**, Ethereumni senzuraga chidamli va hujumlarga bardoshli qiladi. Boshqa staking usullari tarmoqqa bir xil tarzda yordam bermasligi mumkin. Uy tikish Ethereumni himoyalash uchun eng yaxshi staking usulidir.

Ethereum tuguni ham ijro qatlami (EL) mijozidan, ham konsensus qatlami (CL) mijozidan iborat. Bu mijozlar bitimlar va bloklarni tekshirish, zanjirning to‘g‘ri rahbarini tasdiqlash, jamlangan attestatlar va bloklarni taklif qilish uchun amaldagi imzolash kalitlari to‘plami bilan birga ishlaydigan dasturiy ta’minotdir.

Uyda tikuvchilar ushbu mijozlarni ishga tushirish uchun zarur bo‘lgan uskunalarni ishlatish uchun javobgardir. Buning uchun uyda ishlaydigan maxsus mashinadan foydalanish tavsiya etiladi — bu tarmoqning sogʻlomligi uchun juda foydali.

Uyda tikuvchi o‘z validatorining to‘g‘ri ishlashi va onlaynligi uchun to‘g‘ridan-to‘g‘ri protokoldan mukofotlar oladi.

## Nega uyda tikish kerak? {#why-stake-solo}

Uyda tikish ko‘proq mas’uliyatni o‘z ichiga oladi, lekin sizga mablag‘laringiz va tikishni sozlash ustidan maksimal nazoratni ta’minlaydi.

<CardGrid>
  <Card title="Yangi ETH ishlab oling" emoji="💸" description="Earn ETH-denominated rewards directly from the protocol when your validator is online, without any middlemen taking a cut." />
  <Card title="Toʻliq nazorat" emoji="🎛️" description="Keep your own keys. Choose the combination of clients and hardware that allows you to minimize your risk and best contribute to the health and security of the network. Third-party staking services make these decisions for you, and they don't always make the safest choices." />
  <Card title="To‘liq nazorat" emoji="🔐" description="Home staking is the most impactful way to stake. By running a validator on your own hardware at home, you strengthen the robustness, decentralization, and security of the Ethereum protocol." />
</CardGrid>

## Uyda tikishdan oldingi mulohazalar {#considerations-before-staking-solo}

Biz uyda tikish hamma uchun qulay va risksiz bo‘lishini xohlasak-da, bu haqiqat emas. ETHingizni uyda tikishdan oldin yodda tutishingiz kerak bo‘lgan ba’zi amaliy va jiddiy mulohazalar mavjud.

<InfoGrid>
<ExpandableCard title="Majburiy o‘qish" eventCategory="SoloStaking" eventName="clicked required reading">
O‘z uzelingizni ishlatayotganda, siz tanlagan dasturiy ta’minotdan foydalanishni o‘rganishga biroz vaqt sarflashingiz kerak. Bu tegishli hujjatlarni o‘qish va ushbu ishlab chiquvchilar guruhlarining aloqa kanallariga rioya qilishni o‘z ichiga oladi.

Siz ishlatayotgan dasturiy ta’minot va uning qanday ishlashini qanchalik ko‘p tushunsangiz, u shunchalik kam riskli bo‘ladi va tugun operatori sifatida yo‘lda paydo bo‘lishi mumkin bo‘lgan har qanday muammolarni hal qilish shunchalik oson bo‘ladi.
</ExpandableCard>

<ExpandableCard title="Komputerlar bilan qulay" eventCategory="SoloStaking" eventName="clicked comfortable with computers">
Tugunlarni sozlash kompyuterlar bilan ishlashda yetarli darajadagi qulaylikni talab qiladi, ammo yangi vositalar vaqt o‘tishi bilan buni osonlashtiradi. Buyruq satri interfeysini tushunish foydali, lekin endi qat’iy talab qilinmaydi.

Shuningdek, u juda oddiy apparat sozlamasini va minimal tavsiya etilgan xususiyatlarni ba’zi tushunishni talab qiladi.
</ExpandableCard>

<ExpandableCard title="Xavfsiz kalit boshqaruvi" eventCategory="SoloStaking" eventName="clicked secure key management">
Shaxsiy kalitlar Ethereum manzilingizni qanday himoya qilgani kabi, siz kalitlarni validatoringiz uchun maxsus yaratishingiz kerak bo‘ladi. Har qanday kalit so‘z yoki maxfiy kalitlarni qanday qilib xavfsiz va xavfsiz saqlashni bilishingiz kerak.{' '}

<a href="/security/">Ethereum xavfsizligi va firibgarlikning oldini olish</a>
</ExpandableCard>

<ExpandableCard title="Maintenance" eventCategory="SoloStaking" eventName="clicked maintenance">
Uskuna vaqti-vaqti bilan ishlamay qoladi, tarmoq aloqasida xatolik yuz beradi va mijoz dasturiy ta’minoti vaqti-vaqti bilan yangilanishi kerak. Tugunga texnik xizmat ko‘rsatish muqarrar va vaqti-vaqti bilan e’tiboringizni talab qiladi. Siz kutilayotgan tarmoq yangilanishlari yoki boshqa muhim mijoz yangilanishlari haqida xabardor bo‘lishni xohlaysiz.
</ExpandableCard>

<ExpandableCard title="Ishonchli ishlash vaqti" eventCategory="SoloStaking" eventName="clicked reliable uptime">
Mukofotlaringiz validator onlayn va to‘g‘ri attestatsiyadan o‘tgan vaqtga mutanosib. Tanaffus bir vaqtning o‘zida qancha boshqa tekshiruvchilar oflayn ekanligiga mutanosib ravishda jarimaga sabab bo‘ladi, lekin <a href="#faq">qisqarishga olib kelmaydi</a>. O‘tkazish qobiliyati ham muhim, chunki o‘z vaqtida olinmagan attestatsiyalar uchun mukofotlar kamayadi. Talablar farq qiladi, lekin kamida 10 Mb/s yuqoriga va pastga tushirish tavsiya etiladi.
</ExpandableCard>

<ExpandableCard title="Slashing risk" eventCategory="SoloStaking" eventName="clicked slashing risk">
Oflayn rejimda bo‘lganlik uchun nofaollik jazosidan farqli o‘laroq, <em>slashing</em> zararli huquqbuzarliklar uchun ancha jiddiy jazo hisoblanadi. Kalitlaringiz bir vaqtda faqat bitta qurilmaga yuklangan minoritar mijozni ishga tushirish orqali slashing riski minimallashtiriladi. Shuni aytish kerakki, barcha manfaatdor tomonlar slashing riskidan xabardor bo‘lishlari kerak.

<a href="https://medium.com/prysmatic-labs/eth2-slashing-prevention-tips-f6faa5025f50/"> Slashing va validator hayotiy sikli haqida batafsil</a>
</ExpandableCard>
</InfoGrid>

<StakingComparison page="solo" />

## Bu qanday ishlaydi {#how-it-works}

<StakingHowSoloWorks />

Faolligida ETH mukofotlarini ishlab olasiz, ular vaqti-vaqti bilan yechib olish manzilingizga depozit qilinadi.

Agar istasangiz, onlayn bo‘lish shartini bekor qiladigan va boshqa mukofotlarni to‘xtatadigan tasdiqlovchi sifatida chiqishingiz mumkin. Keyin qolgan balansingiz sozlash paytida siz belgilagan yechib olish manziliga yechib olinadi.

[Staking yechib olish haqida batafsil](/staking/withdrawals/)

## Staking Launchpadda ishni boshlang {#get-started-on-the-staking-launchpad}

Staking Launchpad ochiq kodli ilova bo‘lib, sizga staker bo‘lishga yordam beradi. U mijozlaringizni tanlashda, kalitlaringizni yaratishda va ETHingizni garovga qo‘yish depozit shartnomasiga kiritishda sizga yordam beradi. Validatoringizni xavfsiz sozlash uchun hamma narsani qamrab olganingizga ishonch hosil qilish uchun nazorat ro‘yxati taqdim etiladi.

<StakingLaunchpadWidget />

## Tugun va mijozni sozlash vositalari bilan nimalarni hisobga olish kerak {#node-tool-considerations}

ETHingizni uyda tikishga yordam beradigan vositalar va xizmatlar soni ortib bormoqda, ammo ularning har biri turli risk va foydalarga ega.

Atribut ko‘rsatkichlari quyida sanab o‘tilgan stavka vositasining kuchli yoki zaif tomonlarini ko‘rsatish uchun ishlatiladi. Qaysi vositalarni tanlashda ushbu atributlarni qanday aniqlashimiz uchun ushbu bo‘limdan ma’lumot sifatida foydalaning.

<StakingConsiderations page="solo" />

## Tugun va mijozni sozlash vositalari bilan tanishing {#node-and-client-tools}

Sozlashda sizga yordam beradigan turli xil variantlar mavjud. Quyidagi vositalar orqali sizga yordam berish uchun yuqoridagi ko‘rsatkichlardan foydalaning.

<ProductDisclaimer />

### Tugun vositalari

<StakingProductsCardGrid category="nodeTools" />

[Minoritar mijozni](/developers/docs/nodes-and-clients/client-diversity/) tanlash muhimligiga e’tibor bering, chunki u tarmoq xavfsizligini yaxshilaydi va riskingizni cheklaydi. Minoritar mijozni sozlash imkonini beruvchi vositalar <em style={{ textTransform: "uppercase" }}>“multi mijoz”</em> deb belgilanadi.

### Asosiy generatorlar

Ushbu vositalardan kalitlarni yaratishda yordam berish uchun [Staking Deposit CLIga](https://github.com/ethereum/staking-deposit-cli/) muqobil sifatida foydalanish mumkin.

<StakingProductsCardGrid category="keyGen" />

Biz o‘tkazib yuborgan staking vositasi uchun taklif bormi? [Mahsulotni kataloglash qoidalari](/contributing/adding-staking-products/) bilan tanishib chiqing va ularni ko‘rib chiqish uchun yuboring.

## Uyda tikish yo‘riqnomalari bilan tanishing {#staking-guides}

<StakingGuides />

## Frequently asked questions {#faq}

Bular garovga qo‘yishning eng keng tarqalgan savollaridan bir nechtasi bo‘lib, ular haqida bilishga arziydi.

<ExpandableCard title="Validator nima?">

<em>Validator</em> — bu Ethereum platformasida yashaydigan va Ethereum protokoli konsensusida ishtirok etadigan virtual obyekt. Validatorlar balans, ochiq kalit va boshqa xususiyatlar bilan ifodalanadi. <em>Validator mijozi</em> — bu uning shaxsiy kalitini ushlab turish va undan foydalanish orqali validator nomidan harakat qiladigan dasturiy ta’minotdir. Bitta validator mijozi ko‘plab validatorlarni nazorat qilib, ko‘plab kalit juftlarini ushlab turishi mumkin.

</ExpandableCard>

<ExpandableCard title="32 ETHdan ortiq depozit qo‘yishim mumkinmi?">
Validator bilan aloqador har bir kalit-juftligi faollashtirilishi uchun aynan 32 ETH talab qilinadi. Bitta kalitlar to‘plamiga depozit qilingan ko‘proq ETH mukofot salohiyatini oshirmaydi, chunki har bir validator 32 ETH <a href="https://www.attestant.io/posts/understanding-validator-effective-balance/">samarali balansi</a> bilan cheklangan. Bu shuni anglatadiki, staking 32 ETH inkrementlarida amalga oshiriladi, ularning har biri o‘z kalitlari to‘plami va muvozanatiga ega.

Bitta validator uchun 32 ETH dan ortiq depozit qo‘ymang. Bu mukofotlaringizni oshirmaydi. Agar validator uchun yechib olish manzili belgilangan bo‘lsa, keyingi <a href="/staking/withdrawals/#validator-sweeping">validator surish</a> paytida 32 ETH dan ortiq ortiqcha mablag‘lar ushbu manzilga avtomatik yechib olinadi.

Agar uyda pul tikish sizga juda qiyin tuyulsa, <a href="/staking/saas/">xizmat sifatida staking</a> provayderidan foydalaning yoki agar 32 ETH dan kam pul tikayotgan bo‘lsangiz, <a href="/staking/pools/">staking hovuzlarini</a> tekshiring.
</ExpandableCard>

<ExpandableCard title="Agar oflayn bo‘lsam, meni slashing qilishadimi? (tldr: Yoʻq.)">
Tarmoq kutilganidek yakunlanayotganida oflayn qilinsa, slashing kuzatilmaydi. Agar validatoringiz ma’lum bir davrni (har 6,4 daqiqada) tasdiqlash uchun mavjud bo‘lmasa, kichik <em>nofaollik uchun jarimalar</em> to‘lanadi, ammo bu <em>slashingdan</em> juda farq qiladi. Bu jarimalar, agar tekshiruvchi tasdiqlashi mumkin bo‘lganida, siz topgan mukofotdan biroz kamroq va yo‘qotishlarni taxminan bir xil vaqt ichida yana Internetga qaytarish mumkin.

E’tibor bering, nofaollik uchun jarimalar bir vaqtning o‘zida qancha tekshiruvchilar oflayn ekaniga mutanosib. Tarmoqning katta qismi bir vaqtning o‘zida oflayn bo‘lgan hollarda, ushbu validatorlarning har biri uchun jarimalar bitta validator mavjud bo‘lmagandagidan kattaroq bo‘ladi.

Favqulodda holatlarda, agar validatorlarning uchdan bir qismidan ko‘prog‘i oflayn bo‘lganligi sababli tarmoq tugatilishini to‘xtatsa, bu foydalanuvchilar <em>kvadratik nofaollik sizib chiqishi</em> deb nomlanuvchi narsaga duchor bo‘ladi, bu esa oflayn validator hisoblaridan ETHning eksponensial oqishi hisoblanadi. Bu tarmoqqa nofaol validatorlarning ETH ni ularning balansi 16 ETH ga yetgunga qadar yoqish orqali oxir-oqibat o‘zini o‘zi davolash imkonini beradi, shunda ular validator fondidan avtomatik ravishda chiqarib tashlanadi. Qolgan onlayn validatorlar oxir-oqibat tarmoqning 2/3 qismidan ortig‘ini tashkil qiladi va zanjirni yana bir bor yakunlash uchun zarur bo‘lgan asosiy qismni qondiradi.
</ExpandableCard>

<ExpandableCard title="Slashingdan qanday himoyalanaman?">
Qisqasi, bu hech qachon to‘liq kafolatlanmaydi, lekin agar siz vijdonan harakat qilsangiz, ozchilik mijozlarni boshqarsangiz va imzo chekish kalitlaringizni bir vaqtning o‘zida faqat bitta mashinada saqlasangiz, ishdan bo‘shatilish riski deyarli nolga teng.

Faqat bir nechta aniq usullar mavjud bo‘lib, ular validatorning tarmoqdan chetlatilishiga olib kelishi mumkin. Yozish paytida sodir bo‘lgan kesishmalar faqat ortiqcha apparat qurilmalari mahsuloti bo‘lib, imzolash kalitlari bir vaqtning o‘zida ikkita alohida mashinada saqlanadi. Bu tasodifan kalitlaringizdan <em>ikki marta ovoz berilishiga</em> olib kelishi mumkin, bu esa jiddiy huquqbuzarlik hisoblanadi.

Juda ko‘p mijozlarni ishga tushirish (tarmoqning 2/3 qismidan ortig‘i tomonidan ishlatiladigan har qanday mijoz) ham ushbu mijozda zanjirli bo‘linishga olib keladigan xato bo‘lsa, potensial slashing riski mavjud. Bu nosoz bo‘linishi tugashiga olib kelishi mumkin. Belgilangan zanjirga qaytish uchun yakuniy blokni bekor qilishga urinish orqali <em>davra ovoz berishni</em> talab qiladi. Bu, shuningdek, jiddiy huquqbuzarlik hisoblanadi va buning o‘rniga ozchilik mijozini ishga tushirish orqali oldini olish mumkin.

<em>Minoritar mijozlardagi ekvivalent baglar hech qachon</em> yakunlanmaydi va shuning uchun hech qachon davra ovoziga olib kelmaydi va shunchaki <em>slashing qilmaslik</em> uchun jazolarga olib keladi.

<ul>
  <li><a href="https://hackernoon.com/ethereums-client-diversity-problem">Minoritar mijozni boshqarishning ahamiyati haqida batafsil.</a></li>
  <li><a href="https://medium.com/prysmatic-labs/eth2-slashing-prevention-tips-f6faa5025f50">Slashingning oldini olish haqida batafsil</a></li>
</ul>
</ExpandableCard>

<ExpandableCard title="Qaysi mijoz eng yaxshi?">
Alohida mijozlar ishlashi va foydalanuvchi interfeysi bo‘yicha biroz farq qilishi mumkin, chunki ularning har biri turli dasturlash tillari yordamida turli jamoalar tomonidan ishlab chiqiladi. Aytgancha, ularning hech biri “eng yaxshi” emas. Barcha ishlab chiqarish mijozlari blokcheyn bilan sinxronlash va o‘zaro ta’sir qilish uchun bir xil asosiy funksiyalarni bajaradigan ajoyib dasturiy ta’minotdir.

Barcha ishlab chiqarish mijozlari bir xil asosiy funksiyalarni taqdim etganligi sababli, aslida siz <strong>minoritar mijozni</strong>, ya’ni hozirda tarmoqda ko‘pchilik validatorlar tomonidan foydalanilMAyotgan har qanday mijozni tanlashingiz juda muhimdir. Bu g‘ayritabiiy tuyulishi mumkin, ammo ko‘pchilik yoki o‘ta ko‘pchilik mijozning ishlashi, agar bu mijozda xato bo‘lsa, sizni slashing riskini oshiradi. Minoritar mijozlarni boshqarish bu risklarni keskin cheklaydi.

<a href="https://mirror.xyz/jmcook.eth/S7ONEka_0RgtKTZ3-dakPmAHQNPvuj15nh0YGKPFriA">Mijozlar xilma-xilligi nima uchun muhimligi haqida batafsil</a>
</ExpandableCard>

<ExpandableCard title="Men shunchaki VPSdan (virtual xususiy server) foydalanishim mumkinmi?">
Virtual shaxsiy server (VPS) uy apparatining o‘rniga ishlatilishi mumkin bo‘lsa-da, validator mijozingizning jismoniy kirishi va joylashuvi <em>muhimdir</em>. Amazon Web Services yoki Digital Ocean kabi markazlashgan bulutli yechimlar tarmoqni markazlashtirish hisobiga uskunalarni sotib olish va ishlatishga hojat qolmasligi uchun qulaylik yaratadi.

Yagona markazlashgan bulutli xotira yechimida ishlaydigan validator mijozlari qanchalik ko‘p bo‘lsa, bu foydalanuvchilar uchun shunchalik riskli bo‘ladi. Bu provayderlarni oflayn qiladigan har qanday hodisa, xoh tajovuz, tartibga solish talablari yoki shunchaki quvvat/internet uzilishlari bo‘lsin, ushbu serverga tayanadigan har bir validator mijozining bir vaqtning o‘zida oflayn bo‘lishiga olib keladi.

Oflayn jarimalar bir vaqtning o‘zida qancha odam oflayn ekaniga mutanosib. VPSdan foydalanish oflayn jarimalarning yanada og‘irroq bo‘lish riskini sezilarli darajada oshiradi va uzilish yetarli darajada katta bo‘lgan taqdirda kvadratik sizib chiqish yoki slashing riskini oshiradi. O‘z riskingizni va tarmoq uchun riskni minimallashtirish uchun foydalanuvchilarga o‘z apparat uskunalarini sotib olish va ulardan foydalanish tavsiya etiladi.
</ExpandableCard>

<ExpandableCard title="Mukofotlarimni qanday ochaman yoki ETHni qaytarib olaman?">

Beacon Chaindan har qanday turdagi yechib olishlar uchun yechib olish hisob ma’lumotlarini sozlash talab qilinadi.

Yangi stakerlar buni kalit yaratish va depozit vaqtida o‘rnatadi. Buni allaqachon o‘rnatmagan mavjud ishtirokchilar ushbu funksiyani qo‘llab-quvvatlash uchun kalitlarini yangilashi mumkin.

Yechib olish ma’lumotlari sozlangach, mukofot to‘lovlari (dastlabki 32 yil ichida to‘plangan ETH) vaqti-vaqti bilan yechib olish manziliga avtomatik ravishda taqsimlanadi.

Butun balansingizni ochish va qaytarib olish uchun siz validatoringizdan chiqish jarayonini ham yakunlashingiz kerak.

<ButtonLink href="/staking/withdrawals/">Staking yechib olish haqida batafsil</ButtonLink>
</ExpandableCard>

## Qo'shimcha o'qish {#further-reading}

- [The Ethereum Staking Directory](https://www.staking.directory/) - _Eridian va Spacesider_
- [Ethereum's Client Diversity Problem](https://hackernoon.com/ethereums-client-diversity-problem) - _@emmanuelawosika 2022_
- [Mijozlar xilma-xilligiga yordam berish](https://www.attestant.io/posts/helping-client-diversity/) - _Jim McDonald 2022_
- [Ethereum konsensus qatlamida mijozlar xilma-xilligi](https://mirror.xyz/jmcook.eth/S7ONEka_0RgtKTZ3-dakPmAHQNPvuj15nh0YGKPFriA) - _jmcook.eth 2022_
- [Qanday: Ethereum validator uskunasini xarid qilish](https://www.youtube.com/watch?v=C2wwu1IlhDc) - _EthStaker 2022_
- [Qadam-baqadam: Ethereum 2.0 test tarmog‘iga qanday qo‘shilish mumkin](https://kb.beaconcha.in/guides/tutorial-eth2-multiclient) - _Butta_
- [Eth2 Slashing oldini olish maslahatlari](https://medium.com/prysmatic-labs/eth2-slashing-prevention-tips-f6faa5025f50) - _Raul Jordan 2020_

<QuizWidget quizKey="staking-solo" />
