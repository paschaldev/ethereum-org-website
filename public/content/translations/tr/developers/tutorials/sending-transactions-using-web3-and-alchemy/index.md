---
title: Web3 Kullanarak İşlem Gönderme
description: "Bu, Web3 kullanarak Ethereum işlemlerini gönderme hakkında, yeni başlayanlara uygun bir rehberdir. Ethereum blok zincirine bir işlem göndermek için üç ana adım vardır: oluşturma, imzalama ve yayınlama. Üçünden de bahsedeceğiz."
author: "Elan Halpern"
tags:
  - "işlemler"
  - "web3.js"
  - "alchemy"
skill: beginner
lang: tr
published: 2020-11-04
source: Alchemy belgeleri
sourceUrl: https://docs.alchemy.com/alchemy/tutorials/sending-txs
---

Bu, web3 kullanarak Ethereum işlemlerini göndermek için yeni başlayanlara uygun bir rehberdir. Ethereum blok zincirine bir işlem göndermek için üç ana adım vardır: oluşturma, imzalama ve yayınlama. Üçünü de gözden geçirerek aklınızdaki soruları cevaplamayı umuyoruz! Bu öğreticide, işlemlerimizi Ethereum zincirine göndermek için [Alchemy](https://www.alchemy.com/) kullanacağız. [Buradan ücretsiz bir Alchemy hesabı oluşturabilirsiniz](https://auth.alchemyapi.io/signup).

**NOT:** Bu kılavuz, uygulamanızın _arka yüzündeki_ işlemlerinizi imzalamak içindir. İşlemlerinizi imzalamayı ön yüze entegre etmek istiyorsanız [Web3'ü bir tarayıcı sağlayıcısı](https://docs.alchemy.com/reference/api-overview#with-a-browser-provider) ile entegre etmeye göz atın.

## Temel Bilgiler {#the-basics}

Çoğu blok zinciri geliştiricisi ilk başladıklarında olduğu gibi, bir işlemin nasıl gönderileceği konusunda (oldukça basit olması gereken bir şey) biraz araştırma yapmış ve her biri farklı şeyler söyleyen ve sizi biraz bunaltıp kafanızı karıştıran çok sayıda kılavuza rastlamış olabilirsiniz. Bu durumdaysanız merak etmeyin, hepimiz o yollardan geçtik! O zaman başlamadan önce birkaç şeyi açıklığa kavuşturalım:

### 1\. Alchemy özel anahtarlarınızı saklamaz {#alchemy-does-not-store-your-private-keys}

- Bu, Alchemy'nin sizin adınıza işlemleri imzalayamayacağı ve gönderemeyeceği anlamına gelir. Bunun nedeni güvenlik amaçlıdır. Simya asla özel anahtarınızı paylaşmanızı istemez ve özel anahtarınızı asla barındırılan bir düğümle (veya bu konuda herhangi biri ile) paylaşmamalısınız.
- Alchemy'nin çekirdek API'sini kullanarak blok zincirinden okuma yapabilirsiniz, ancak blok zincirine yazmak için işlemlerinizi Alchemy aracılığıyla göndermeden önce onları imzalamak için başka bir şey kullanmanız gerekir (bu, diğer tüm [düğüm hizmetleri](/developers/docs/nodes-and-clients/nodes-as-a-service/) için aynıdır).

### 2\. Bir "imzalayıcı" nedir? {#what-is-a-signer}

- İmzalayıcılar, özel anahtarınızı kullanarak işlemleri sizin için imzalar. Bu öğreticide, işlemimizi imzalamak için [Alchemy web3](https://docs.alchemyapi.io/alchemy/documentation/alchemy-web3)'ü kullanacağız, ancak başka herhangi bir web3 kitaplığını da kullanabilirsiniz.
- Ön yüzde, işlemleri sizin adınıza imzalayıp gönderen [MetaMask](https://metamask.io/) imzalayıcının iyi bir örneğidir.

### 3\. İşlemlerimi neden imzalamam gerekiyor? {#why-do-i-need-to-sign-my-transactions}

- Ethereum ağında bir işlem göndermek isteyen her kullanıcı, işlemin kaynağının iddia ettiği kişi olduğunu doğrulamak için işlemi (özel anahtarını kullanarak) imzalamalıdır.
- Bu özel anahtarı korumak çok önemlidir, çünkü erişime sahip olmak Ethereum hesabınız üzerinde tam kontrol sağlayarak sizin (veya erişimi olan herhangi birinin) sizin adınıza işlem gerçekleştirmesine izin verir.

### 4\. Özel anahtarımı nasıl korurum? {#how-do-i-protect-my-private-key}

- Özel anahtarınızı korumanın ve işlemleri göndermek için kullanmanın birçok yolu vardır. Bu öğreticide bir `.env` dosyası kullanacağız. Ancak, özel anahtarları depolayan, bir anahtar deposu dosyası kullanan veya diğer seçenekleri kullanan ayrı bir sağlayıcı da kullanabilirsiniz.

### 5\. `eth_sendTransaction` ve `eth_sendRawTransaction` arasındaki fark nedir? {#difference-between-send-and-send-raw}

`eth_sendTransaction` ve `eth_sendRawTransaction`, gelecekteki bir bloğa eklenmesi için Ethereum ağına bir işlem yayınlayan Ethereum API fonksiyonlarıdır. İşlemlerin imzalanmasını nasıl ele aldıkları konusunda farklılık gösterirler.

- [`eth_sendTransaction`](https://docs.web3js.org/api/web3-eth/function/sendTransaction), _imzasız_ işlemleri göndermek için kullanılır, yani işlemi zincire yayınlamadan önce imzalayabilmesi için gönderdiğiniz düğüm sizin özel anahtarınızı yönetmelidir. Alchemy, kullanıcının özel anahtarlarını tutmadığından bu yöntemi desteklemez.
- [`eth_sendRawTransaction`](https://docs.alchemyapi.io/documentation/alchemy-api-reference/json-rpc#eth_sendrawtransaction) hâlihazırda imzalanmış işlemleri yayınlamak için kullanılır. Yani ilk olarak [`signTransaction(tx, private_key)`](https://docs.web3js.org/api/web3-eth-accounts/function/signTransaction) kullanmanız, sonrasında sonucunu `eth_sendRawTransaction` içine aktarmanız gerekir.

Web3 kullanırken `eth_sendRawTransaction` erişimi, [web3.eth.sendSignedTransaction](https://docs.web3js.org/api/web3-eth/function/sendSignedTransaction) fonksiyonu çağrılarak sağlanır.

Bu öğreticide kullanacağımız şey budur.

### 6\. Web3 kütüphanesi nedir? {#what-is-the-web3-library}

- Web3.js, Ethereum geliştirmede kullanımı oldukça yaygın olan standart JSON-RPC çağrıları etrafında bir paketleyici kütüphanedir.
- Farklı diller için birçok web3 kütüphanesi bulunur vardır. Bu öğreticide JavaScript ile yazılmış olan [Alchemy Web3](https://docs.alchemy.com/reference/api-overview)'ü kullanacağız. [ethers.js](https://docs.ethers.org/v5/) gibi diğer seçeneklere [buradan](https://docs.alchemyapi.io/guides/getting-started#other-web3-libraries) göz atabilirsiniz.

Pekala, şimdi bu sorulardan birkaçını aradan çıkardığımıza göre, öğreticiye geçelim. Alchemy ile ilgili sorularınızı herhangi bir zaman [discord](https://discord.gg/gWuC7zB)'umuzda sormaktan çekinmeyin!

### 7\. Güvenli, gaz açısından optimize edilmiş ve özel işlemler nasıl gönderilir? {how-to-send-secure-gas-optimized-and-private-transactions}

- [Alchemy, bir Transact API'leri paketi sunar](https://docs.alchemy.com/reference/transact-api-quickstart). Bunları kullanarak takviyeli işlemler gönderebilir, işlemlerin gerçekleşmeden önce simülasyonunu yapabilir, özel işlemler ve gaz tasarruflu işlemler gönderebilirsiniz
- Ayrıca işleminizin bellek havuzundan çekilip zincire eklenmesi durumunda bildirim almak için [Notify API](https://docs.alchemy.com/docs/alchemy-notify)'sini de kullanabilirsiniz

**NOT:** Bu kılavuz bir Alchemy hesabı, bir Ethereum adresi veya MetaMask cüzdanı, NodeJ'ler ve npm'nin kurulu olmasını gerektirir. Kurulu değilse şu adımları takip edin:

1.  [Ücretsiz bir Alchemy hesabı oluşturun](https://auth.alchemyapi.io/signup)
2.  [MetaMask hesabı oluşturun](https://metamask.io/) (veya bir Ethereum adresi alın)
3.  [NodeJ'leri ve NPM'yi yüklemek için bu adımları izleyin](https://docs.alchemy.com/alchemy/guides/alchemy-for-macs)

## İşleminizi Gönderme Adımları {#steps-to-sending-your-transaction}

### 1\. Sepolia test ağında Alchemy uygulaması oluşturma {#create-an-alchemy-app-on-the-sepolia-testnet}

[Alchemy Dashboard'a](https://dashboard.alchemyapi.io/) gidin ve ağınızı Sepolia seçerek (ya da başka bir test ağı) yeni bir uygulama yaratın.

### 2\. Sepolia musluğundan ETH isteme {#request-eth-from-sepolia-faucet}

ETH almak için [Alchemy Sepolia musluğundaki](https://www.sepoliafaucet.com/) talimatları izleyin. **Sepolia** Ethereum adresinizi (MetaMask'ten) eklediğinizden ve başka bir ağda olmadığınızdan emin olun. Talimatları uyguladıktan sonra, cüzdanınıza ETH'yi alıp almadığınızı iki kez kontrol edin.

### 3\. Yeni bir proje dizini oluşturun ve içine `cd` ekleyin {#create-a-new-project-direction}

Komut satırından (mac'ler için terminal) yeni bir proje dizini oluşturun ve içine gidin:

```
mkdir sendtx-example
cd sendtx-example
```

### 4\. Alchemy Web3'ü kurun (veya herhangi bir web3 kütüphanesi) {#install-alchemy-web3}

[Alchemy Web3](https://docs.alchemy.com/reference/api-overview) indirmek için proje klasörünüzde şu komutu çalıştırın:

Ether.js kitaplığını kullanmak istiyorsanız [buradaki talimatları izleyin](https://docs.alchemy.com/docs/how-to-send-transactions-on-ethereum).

```
npm install @alch/alchemy-web3
```

### 5\. Dotenv kurun {#install-dotenv}

API anahtarımızı ve özel anahtarımızı güvenli bir şekilde saklamak için bir `.env` dosyası kullanacağız.

```
npm install dotenv --save
```

### 6\. `.env` dosyasını oluşturun {#create-the-dotenv-file}

Proje dizininizde bir `.env` dosyası oluşturun ve şunu ekleyin ("`api-url`" ve "`your-private-key` yerine" ")

- Alchemy API URL'nizi bulmak için, kontrol panelinizde az önce oluşturduğunuz uygulamanın uygulama ayrıntıları sayfasına gidin, sağ üst köşedeki "View Key"'e (Anahtarı Görüntüle) tıklayın ve HTTP URL'sini alın.
- MetaMask kullanarak özel anahtarınızı bulmak için bu [rehbere](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key) göz atın.

```
API_URL = "your-api-url"
PRIVATE_KEY = "your-private-key"
```

<InfoBanner isWarning>
<code>.env</code> taahhüt etmeyin! Lütfen <code>.env</code> dosyanızı asla kimseyle paylaşmadığınızdan veya ifşa etmediğinizden emin olun, çünkü bunu yaparken sırlarınızı tehlikeye atıyorsunuz. Sürüm kontrolü kullanıyorsanız, <code>.env</code> dosyanızı bir <a href="https://git-scm.com/docs/gitignore">gitignore</a> dosyasına ekleyin.
</InfoBanner>

### 7\. `sendTx.js` dosyası oluşturun {#create-sendtx-js}

Harika, artık hassas verilerimizi bir `.env` dosyasında koruduğumuza göre kodlamaya başlayalım. Gönderme işlemi örneğimiz içi ETH'yi Sepolia musluğuna geri göndereceğiz.

Örnek işlemimizi yapılandırıp göndereceğimiz bir `sendTx.js` dosyası oluşturun ve buna aşağıdaki kod satırlarını ekleyin:

```
async function main() {
    require('dotenv').config();
    const { API_URL, PRIVATE_KEY } = process.env;
    const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
    const web3 = createAlchemyWeb3(API_URL);
    const myAddress = '0x610Ae88399fc1687FA7530Aac28eC2539c7d6d63' //TODO: replace this address with your own public address

    const nonce = await web3.eth.getTransactionCount(myAddress, 'latest'); // nonce starts counting from 0

    const transaction = {
     'to': '0x31B98D14007bDEe637298086988A0bBd31184523', // faucet address to return eth
     'value': 1000000000000000000, // 1 ETH
     'gas': 30000,
     'nonce': nonce,
     // optional data field to send message or execute smart contract
    };

    const signedTx = await web3.eth.accounts.signTransaction(transaction, PRIVATE_KEY);

    web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(error, hash) {
    if (!error) {
      console.log("🎉 The hash of your transaction is: ", hash, "\n Check Alchemy's Mempool to view the status of your transaction!");
    } else {
      console.log("❗Something went wrong while submitting your transaction:", error)
    }
   });
}

main();
```

**6. satırdaki** adresi kendi genel adresinizle değiştirdiğinizden emin olun.

Şimdi, bu kodu çalıştırmaya geçmeden önce, burada bazı bileşenlerden bahsedelim.

- `nonce`: nonce değeri şartnamesi, adresinizden gönderilen işlemlerin sayısını takip etmek için kullanılır. Güvenlik amaçlı ve [tekrar saldırılarını](https://docs.alchemyapi.io/resources/blockchain-glossary#account-nonce) önlemek için buna ihtiyacımız var. Adresinizden gönderilmiş işlem sayısını almak için [getTransactionCount](https://docs.alchemyapi.io/documentation/alchemy-api-reference/json-rpc#eth_gettransactioncount) kullanırız.
- `transaction`: İşlem nesnesinin belirtmemiz gereken birkaç yönü var
  - `to`: Bu, ETH göndermek istediğimiz adrestir. Bu durumda ETH'yi başlangıçta talep ettiğimiz [Sepolia musluğuna](https://sepoliafaucet.com/) geri gönderiyoruz.
  - `value`: Bu, 10^18 wei = 1 ETH olmak üzere wei'de belirtilen, göndermek istediğimiz miktardır
  - `gas`: İşleminize dahil edilecek doğru gaz miktarını belirlemenin birçok yolu vardır. Alchemy, benzin fiyatı belirli bir eşiğe düştüğünde sizi bilgilendirmek için bir [gaz fiyatı web kancasına](https://docs.alchemyapi.io/guides/alchemy-notify#address-activity-1) bile sahiptir. Ana Ağ işlemlerinde, dahil edilecek doğru gaz miktarını belirlemek için [ETH Gaz İstasyonu](https://ethgasstation.info/) gibi bir gaz tahmincisine göz atmak iyi bir uygulamadır. 21000, Ethereum'da bir işlemin kullanacağı minimum gaz miktarıdır, bu nedenle işlemimizin gerçekleştirilmesini sağlamak için buraya 30000 koyduk.
  - `nonce`: yukarıdaki nonce tanımına bakın. Nonce değeri, saymaya sıfırdan başlar.
  - [OPTIONAL] veri: Transferinizle birlikte ek bilgi göndermek veya akıllı sözleşme aramak için kullanılır, bakiye transferleri için gerekli değildir, aşağıdaki nota bakın.
- `SignedTx`: İşlem nesnemizi imzalamak için `PRIVATE_KEY` ile `signTransaction` yöntemini kullanacağız
- `sendSignedTransaction`: İmzalanmış bir işlemimiz olduğunda, `sendSignedTransaction` kullanarak sonraki bir bloğa dahil edilmesi için gönderebiliriz

**Veriler hakkında bir not** Ethereum'da gönderilebilecek iki ana işlem türü vardır.

- Bakiye transferi: Eth'i bir adresten diğerine gönderin. Herhangi bir veri alanı gerekli değildir, ancak işleminizin yanında ek bilgiler göndermek isterseniz, bu bilgileri bu alana HEX formatında ekleyebilirsiniz.
  - Örneğin, değişmez bir zaman damgası vermek için bir IPFS belgesinin hash değerini ethereum zincirine yazmak istediğimizi varsayalım. Veri alanımız daha sonra veri gibi görünmelidir: `web3.utils.toHex(‘IPFS hash‘)`. Artık herkes zinciri sorgulayabilir ve bu belgenin ne zaman eklendiğini görebilir.
- Akıllı sözleşme işlemi: Zincirde bazı akıllı sözleşme kodlarını yürütün. Bu durumda veri alanı, herhangi bir parametrenin yanında yürütmek istediğiniz akıllı fonksiyonu içermelidir.
  - Pratik bir örnek için, şu [Merhaba Dünya Öğreticindeki](https://docs.alchemyapi.io/alchemy/tutorials/hello-world-smart-contract#step-8-create-the-transaction) 8. Adıma bakın.

### 8\. `node sendTx.js` kullanarak kodu çalıştırın {#run-the-code-using-node-sendtx-js}

Terminalinize veya komut satırınıza geri dönün ve şunu çalıştırın:

```
node sendTx.js
```

### 9\. İşleminizi Bellek Havuzunda görün {#see-your-transaction-in-the-mempool}

Alchemy panelinizde [Mempool sayfasını](https://dashboard.alchemyapi.io/mempool) (Bellek Havuzu) açın ve işleminizi bulmak için oluşturduğunuz uygulama ile filtreleyin. Bekleme durumundan kazılmış (başarılıysa) veya başarısız olursa düşmüş duruma geçişimizi buradan izleyebiliriz. "mined" (kazılmış), "beklemede" (pending) ve "düşmüş" işlemleri yakalamak için "All" (Tümü) üzerinde tuttuğunuzdan emin olun. `0x31b98d14007bdee637298086988a0bbd31184523` adresine gönderilen işlemlere bakarak da işleminizi arayabilirsiniz.

İşleminizin ayrıntılarını bulduktan sonra görüntülemek için, sizi şuna benzeyen bir görünüme götürecek tx hash değerini seçin:

![Bellek Havuzu izleyici ekran görüntüsü](./mempool.png)

Buradan, kırmızı daire içine alınmış simgeye tıklayarak işleminizi Etherscan'de görüntüleyebilirsiniz!

**Oley! Alchemy kullanarak ilk Ethereum işleminizi gönderdiniz 🎉**

_Bu rehberle ilgili geri bildirim ve öneriler için lütfen Alchemy'nin [Discord](https://discord.gg/A39JVCM)'u üzerinden Elan'a mesaj gönderin!_

_Aslen [https://docs.alchemyapi.io/tutorials/sending-transactions-using-web3-and-alchemy](https://docs.alchemyapi.io/tutorials/sending-transactions-using-web3-and-alchemy) adresinde yayınlandı_
