---
title: Yeni Başlayanlar için Merhaba Dünya Akıllı Sözleşmesi
description: Ethereum üzerinde basit bir akıllı sözleşme yazma ve dağıtmaya yönelik giriş seviyesinde öğretici.
author: "elanh"
tags:
  - "solidity"
  - "hardhat"
  - "alchemy"
  - "akıllı sözleşmeler"
  - "dağıtma"
skill: beginner
lang: tr
published: 2021-03-31
---

Blok zinciri geliştirme konusunda yeniyseniz ve nereden başlayacağınızı bilmiyorsanız veya akıllı sözleşmelerin nasıl dağıtıldığını ve bunlarla nasıl etkileşime geçileceğini anlamak istiyorsanız bu rehber tam size göre. Size Goerli test ağında [MetaMask](https://metamask.io/), [Solidity](https://docs.soliditylang.org/en/v0.8.0/), [Hardhat](https://hardhat.org/) ve [Alchemy](https://alchemyapi.io/eth)'yi kullanarak basit bir akıllı sözleşme oluşturmayı ve dağıtmayı göstereceğiz (bunların ne anlama geldiğini henüz bilmiyorsanız endişelenmeyin, anlatacağız).

> **Uyarı**
>
> 🚧 Kullanımdan Kaldırma Bildirimi
>
> Bu rehberin tamamında, sözleşme oluşturmak ve dağıtmak için Goerli test ağı kullanılacaktır. Yine de, Ethereum Foundation'ın [Goerli'nin yakında kullanımdan kaldırılacağını duyurduğunu](https://www.alchemy.com/blog/goerli-faucet-deprecation) lütfen unutmayın.
>
> Bu öğretici için [Sepolia'yı](https://www.alchemy.com/overviews/sepolia-testnet) ve [Sepolia musluğunu](https://sepoliafaucet.com/) kullanmanızı öneriyoruz.

Bu öğreticinin [2. bölümünde](https://docs.alchemy.com/docs/interacting-with-a-smart-contract) sözleşmemiz burada dağıtıldığında akıllı sözleşmemizle nasıl etkileşim kurabileceğimizi ele alacak ve [3. bölümde](https://docs.alchemy.com/docs/submitting-your-smart-contract-to-etherscan) sözleşmenizi Etherscan'de nasıl yayımlayacağınızı anlatacağız.

Herhangi bir noktada sorularınız varsa, [Alchemy Discord](https://discord.gg/gWuC7zB)'da bize ulaşmaktan çekinmeyin!

## Adım 1: Ethereum ağına bağlanın {#step-1}

Ethereum zincirine istek göndermenin birçok yolu vardır. Basit olması için, kendi düğümlerimizi çalıştırmak zorunda kalmadan Ethereum zinciriyle iletişim kurmamıza izin veren bir blok zinciri geliştirici platformu ve API olan Alchemy'de ücretsiz bir hesap kullanacağız. Platform ayrıca, akıllı sözleşme dağıtımımızda arka planda neler olup bittiğini anlamak için bu öğreticide yararlanacağımız izleme ve analitik için geliştirici araçlarına sahiptir. Henüz bir Alchemy hesabınız yoksa, [buradan ücretsiz kaydolabilirsiniz](https://dashboard.alchemyapi.io/signup).

## Adım 2: Uygulamanızı (ve API anahtarınızı) oluşturun {#step-2}

Bir Alchemy hesabı oluşturduktan sonra, bir uygulama yaratarak bir API anahtarı oluşturabilirsiniz. Bu, Goerli test ağına taleplerde bulunmamızı sağlayacaktır. Eğer test ağlarına aşina değilseniz, [bu sayfaya](/developers/docs/networks/) bakınız.

1.  İmlecinizi gezinme çubuğundaki "Apps"in (Uygulamalar) üzerine gelip "Create App"e (Uygulama Oluştur) tıklayarak Alchemy Gösterge Panelinizdeki "Create App" sayfasına gidin

![Merhaba dünya uygulama oluşturma](./hello-world-create-app.png)

2. Uygulamanıza "Merhaba Dünya" adını verin, kısa bir açıklama yazın, Ortam için "Hazırlama"yı (uygulama muhasebeniz için kullanılır) seçin ve ağınız olarak da "Goerli"yi seçin.

![merhaba dünya görüntüleme uygulamasını oluşturma](./create-app-view-hello-world.png)

3. "Create app"e (Uygulama oluştur) tıklamanız yeterlidir! Uygulamanız aşağıdaki tabloda görünmelidir.

## Adım 3: Bir Ethereum hesabı oluşturun (adres) {#step-3}

İşlem göndermek ve almak için bir Ethereum hesabına ihtiyacımız var. Bu eğitim için, Ethereum hesap adresinizi yönetmek için kullanılan tarayıcı üstü bir sanal cüzdan olan MetaMask'i kullanacağız. [İşlemler](/developers/docs/transactions/) üzerine dahası.

[Buradan](https://metamask.io/download.html) ücretsiz olarak indirebilir ve bir Metamask hesabı oluşturabilirsiniz. Bir hesap oluştururken ya da zaten bir hesabınız varsa, sağ üstten "Goerli Test Ağına" geçin (bu sayede gerçek parayla denemeler yapmayız).

![metamask ropsten örneği](./metamask-ropsten-example.png)

## Adım 4: Bir Musluktan ether ekleyin {#step-4}

Akıllı sözleşmemizi test ağına dağıtmak için biraz sahte Eth'ye ihtiyacımız olacak. Eth alabilmek için [Goerli musluğuna](https://goerlifaucet.com/) gidip Alchemy hesabınıza giriş yapın ve cüzdan adresinizi girin, sonra da "Bana Eth gönder"e tıklayın. Ağ trafiği nedeniyle sahte Eth'nizi almanız biraz zaman alabilir. (Bunu yazarken denediğimizde, 30 dakika civarı sürdü) Eth'yi kısa süre içinde MetaMask hesabınızda görmelisiniz!

## Adım 5: Bakiyenizi kontrol edin {#step-5}

Bakiyemizin yerinde olduğundan emin olmak için [Alchemy düzenleyici arayıcını](https://composer.alchemyapi.io?composer_state=%7B%22network%22%3A0%2C%22methodName%22%3A%22eth_getBalance%22%2C%22paramValues%22%3A%5B%22%22%2C%22latest%22%5D%7D) kullanarak bir [eth_getBalance](https://docs.alchemyapi.io/alchemy/documentation/alchemy-api-reference/json-rpc#eth_getbalance) talebi oluşturalım. Bu, cüzdanımızdaki ETH miktarını döndürür. MetaMask hesap adresinizi girdikten ve "Send Request"e tıkladıktan sonra aşağıdaki gibi bir yanıt görmelisiniz:

```json
{ "jsonrpc": "2.0", "id": 0, "result": "0x2B5E3AF16B1880000" }
```

> **NOT:** Bu sonuç ETH değil, wei cinsindendir. Wei, ether'ın en küçük birimi olarak kullanılır. Wei'den ETH'ye dönüştürme: 1 eth = 10<sup>18</sup> wei şeklindedir. Yani 0x2B5E3AF16B1880000'ı ondalık sayıya dönüştürürsek 5\*10¹⁸ elde ederiz ve bu da 5 ETH'ye eşittir.
>
> Vay be! Tüm sahte paramız yerli yerinde <Emoji text=":money_mouth_face:" size={1} />.

## Adım 6: Projemizi başlatın {#step-6}

Öncelikle projemiz için bir klasör oluşturmamız gerekecek. Komut satırınıza gidin ve şunu yazın:

```
mkdir hello-world
cd hello-world
```

Artık proje klasörümüzün içinde olduğumuza göre, projeyi başlatmak için `npm init` kullanacağız. Hâlihazırda npm kurulu değilse, [bu talimatları izleyin](https://docs.alchemyapi.io/alchemy/guides/alchemy-for-macs#1-install-nodejs-and-npm) (Node.js'ye de ihtiyacımız olacak, onu da indirin!).

```
npm init
```

Kurulum sorularına nasıl cevap verdiğiniz çok önemli değil; referans olması için nasıl yaptığımız aşağıda açıklanmıştır:

```
package name: (hello-world)
version: (1.0.0)
description: hello world smart contract
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to /Users/.../.../.../hello-world/package.json:

{
  "name": "hello-world",
  "version": "1.0.0",
  "description": "hello world smart contract",
  "main": "index.js",
  "scripts": {
     "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

package.json'ı onayladıktan sonra hazırız!

## Adım 7: [Hardhat](https://hardhat.org/getting-started/#overview)'i indirin {#step-7}

Hardhat, Ethereum yazılımınızı derlemek, dağıtmak, test etmek ve hatalarını ayıklamak için bir geliştirme ortamıdır. Bu geliştiricilere canlı zincirde dağıtmadan önce akıllı sözleşmelerini ve merkeziyetsiz uygulamalarını geliştirirken yardımcı olur.

`hello-world` projemizin içinde şunu yürütün:

```
npm install --save-dev hardhat
```

[Kurulum talimatları](https://hardhat.org/getting-started/#overview) hakkında daha fazla ayrıntı için bu sayfaya göz atın.

## Adım 8: Hardhat projesi oluşturun {#step-8}

Proje klasörümüzün içinde şunu yürütün:

```
npx hardhat
```

Daha sonra bir karşılama mesajı ve ne yapmak istediğinizi seçme seçeneği görmelisiniz. "create an empty hardhat.config.js"yi (boş bir hardhat.config.js oluştur) seçin:

```
888    888                      888 888               888
888    888                      888 888               888
888    888                      888 888               888
8888888888  8888b.  888d888 .d88888 88888b.   8888b.  888888
888    888     "88b 888P"  d88" 888 888 "88b     "88b 888
888    888 .d888888 888    888  888 888  888 .d888888 888
888    888 888  888 888    Y88b 888 888  888 888  888 Y88b.
888    888 "Y888888 888     "Y88888 888  888 "Y888888  "Y888

👷 Welcome to Hardhat v2.0.11 👷‍?

Ne yapmak istersin? …
Create a sample project
❯ Create an empty hardhat.config.js
Quit
```

Bu, bizim için bir `hardhat.config.js` dosyası oluşturacak ve burada projemiz için tüm ayarları belirteceğiz (adım 13'te).

## Adım 9: Proje klasörleri ekleyin {#step-9}

Projemizi düzenli tutmak için iki yeni klasör oluşturacağız. Komut satırınızda projenizin kök dizinine gidin ve şunu yazın:

```
mkdir contracts
mkdir scripts
```

- `contracts/` merhaba dünya akıllı sözleşme kod dosyamızı tutacağımız yerdir
- `scripts/`, sözleşmemizi dağıtmak ve etkileşim kurmak için komut dosyalarını tutacağımız yerdir

## Adım 10: Sözleşmemizi yazın {#step-10}

Ne zaman kod yazmaya başlayacağınızı merak ediyor olabilirsiniz. Evet, Adım 10'a kadar geldik.

Favori düzenleyicinizde hello-world projesini açın. (biz [VSCode](https://code.visualstudio.com/)'u tercih ediyoruz). Akıllı sözleşmeler, HelloWorld.sol akıllı sözleşmemizi yazmak için kullanacağımız Solidity adlı bir dilde yazılır.‌

1.  "Sözleşmeler" klasörüne gidin ve HelloWorld.sol adlı yeni bir dosya oluşturun
2.  Aşağıda, bu öğretici için kullanacağımız Ethereum Vakfı'ndan örnek bir Hello World akıllı sözleşmesi bulunmaktadır. Aşağıdaki içeriği kopyalayıp HelloWorld.sol dosyanıza yapıştırın ve bu sözleşmenin ne yaptığını anlamak için yorumları okuduğunuzdan emin olun:

```solidity
// Specifies the version of Solidity, using semantic versioning.
// Learn more: https://solidity.readthedocs.io/en/v0.5.10/layout-of-source-files.html#pragma
pragma solidity ^0.7.0;

// Defines a contract named `HelloWorld`.
// A contract is a collection of functions and data (its state). Once deployed, a contract resides at a specific address on the Ethereum blockchain. Learn more: https://solidity.readthedocs.io/en/v0.5.10/structure-of-a-contract.html
contract HelloWorld {

   // Declares a state variable `message` of type `string`.
   // State variables are variables whose values are permanently stored in contract storage. The keyword `public` makes variables accessible from outside a contract and creates a function that other contracts or clients can call to access the value.
   string public message;

   // Similar to many class-based object-oriented languages, a constructor is a special function that is only executed upon contract creation.
   // Constructors are used to initialize the contract's data. Learn more:https://solidity.readthedocs.io/en/v0.5.10/contracts.html#constructors
   constructor(string memory initMessage) {

      // Accepts a string argument `initMessage` and sets the value into the contract's `message` storage variable).
      message = initMessage;
   }

   // A public function that accepts a string argument and updates the `message` storage variable.
   function update(string memory newMessage) public {
      message = newMessage;
   }
}
```

Bu, oluşturulduktan sonra bir mesaj depolayan ve `update` fonksiyonu çağrılarak güncellenebilen süper basit bir akıllı sözleşmedir.

## Adım 11: MetaMask ve Alchemy'i projenize bağlayın {#step-11}

Bir MetaMask cüzdanı ile Alchemy hesabı oluşturduk ve akıllı sözleşmemizi yazdık, şimdi üçünü birleştirme zamanı.

Sanal cüzdanınızdan gönderilen her işlem, benzersiz özel anahtarınızı kullanan bir imza gerektirir. Programımıza bu izni sağlamak için özel anahtarımızı (ve Alchemy API anahtarımızı) bir ortam dosyasında güvenle saklayabiliriz.

> İşlem gönderme hakkında daha fazla bilgi edinmek için web3 kullanarak işlem göndermeyle ilgili [bu öğreticiye](/developers/tutorials/sending-transactions-using-web3-and-alchemy/) bakın.

İlk önce dotenv paketini proje dizininize kurun:

```
npm install dotenv --save
```

Ardından projemizin kök dizininde bir `.env` dosyası oluşturun ve buna Metamask özel anahtarınızı ve HTTP Alchemy API URL'nizi ekleyin.

- Özel anahtarınızı almak için [şu talimatları](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key) takip edin
- HTTP Alchemy API URL'sini almak için aşağıya göz atın

![alchemy api anahtarı alma](./get-alchemy-api-key.gif)

Alchemy API URL'sini kopyalayın

`.env` dosyanız şu şekilde görünmelidir:

```
API_URL = "https://eth-goerli.alchemyapi.io/v2/your-api-key"
PRIVATE_KEY = "your-metamask-private-key"
```

Bunları kodumuza gerçekten bağlamak için, adım 13'te `hardhat.config.js` dosyamızda bu değişkenlere başvuracağız.

<InfoBanner isWarning>
<code>.env</code> doyasını taahhüt etmeyin! Lütfen <code>.env</code> dosyanızı asla kimseyle paylaşmadığınızdan veya ifşa etmediğinizden emin olun, çünkü bunu yaparken sırlarınızı tehlikeye atıyorsunuz. Sürüm kontrolü kullanıyorsanız, <code>.env</code> dosyanızı bir <a href="https://git-scm.com/docs/gitignore">gitignore</a> dosyasına ekleyin.
</InfoBanner>

## Adım 12: Ethers.js'yi kurun {#step-12-install-ethersjs}

Ethers.js, [standart JSON-RPC yöntemlerini](/developers/docs/apis/json-rpc/) daha kullanıcı dostu yöntemlerle birleştirerek Ethereum'la etkileşimde bulunmayı ve Ethereum'a istek göndermeyi kolaylaştıran bir kütüphanedir.

Hardhat, ek araçlar ve genişletilmiş işlevsellik için [Eklentiler](https://hardhat.org/plugins/)'i entegre etmeyi çok kolaylaştırır. Sözleşme dağıtımı için [Ethers eklentisinden](https://hardhat.org/plugins/nomiclabs-hardhat-ethers.html) yararlanacağız ([Ethers.js](https://github.com/ethers-io/ethers.js/)'nin bazı aşırı temiz sözleşme dağıtım yöntemleri vardır).

Proje klasörünüzde şunu yazın:

```
npm install --save-dev @nomiclabs/hardhat-ethers "ethers@^5.0.0"
```

Bir sonraki adımda `hardhat.config.js`'mizde de ether'lara ihtiyacımız olacak.

## Adım 13: hardhat.config.js'yi güncelleyin {#step-13-update-hardhatconfigjs}

Şimdiye kadar birkaç bağımlılık ve eklenti ekledik, şimdi projemizin bunların hepsini tanıması için `hardhat.config.js`'yi güncellememiz gerekiyor.

`hardhat.config.js` dosyanızı şöyle görünecek şekilde güncelleyin:

```
require('dotenv').config();

require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;

/**
* @type import('hardhat/config').HardhatUserConfig
*/
module.exports = {
   solidity: "0.7.3",
   defaultNetwork: "goerli",
   networks: {
      hardhat: {},
      goerli: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
}
```

## Adım 14: Sözleşmemizi derleyin {#step-14-compile-our-contracts}

Şimdiye kadar yaptığımız her şeyin çalıştığından emin olmak için sözleşmemizi derleyelim. `compile` görevi, yerleşik hardhat görevlerden biridir.

Komut satırından şunu yürütün:

```
npx hardhat compile
```

`SPDX license identifier not provided in source file` uyarısı (Kaynak dosyada verilmeyen SPDX lisans tanımlayıcısı) alabilirsiniz, ancak bunun için endişelenmenize gerek yok, geri kalan her şey düzgün olacaktır! Düzgün değilse, istediğiniz zaman [Alchemy discord](https://discord.gg/u72VCg3)'da mesaj gönderebilirsiniz.

## Adım 15: Dağıtım komut dosyamızı yazın {#step-15-write-our-deploy-scripts}

Artık sözleşmemiz yazıldığına ve yapılandırma dosyamız kullanıma hazır olduğuna göre, sözleşme dağıtım komut dosyanızı yazmanın zamanı geldi.

`scripts/` klasörüne gidin ve aşağıdaki içeriği ekleyerek `deploy.js` adlı yeni bir dosya oluşturun:

```
async function main() {
   const HelloWorld = await ethers.getContractFactory("HelloWorld");

   // Start deployment, returning a promise that resolves to a contract object
   const hello_world = await HelloWorld.deploy("Hello World!");
   console.log("Contract deployed to address:", hello_world.address);}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
```

Hardhat, bu kod satırlarının her birinin ne işe yaradığını [Sözleşme öğreticisinde](https://hardhat.org/tutorial/testing-contracts.html#writing-tests) harika bir şekilde açıklıyor, Hardhat açıklamalarını buraya aktardık.

```
const HelloWorld = await ethers.getContractFactory("HelloWorld");
```

Ethers.js'deki bir `ContractFactory`, yeni akıllı sözleşmeleri dağıtmak için kullanılan bir soyutlamadır, bu nedenle `HelloWorld`, merhaba dünya sözleşmemizin örnekleri için bir fabrikadır. `hardhat-ethers` eklentisini kullanırken `ContractFactory` ve `Contract` örnekleri varsayılan olarak ilk imzalayana bağlanır.

```
const hello_world = await HelloWorld.deploy();
```

Bir `ContractFactory` üzerinde `deploy()` öğesinin çağrılması, dağıtımı başlatır ve bir `Contract` olarak çözümlenen bir `Promise` döndürür. Bu, akıllı sözleşme fonksiyonlarımızın her biri için bir yöntemi olan nesnedir.

## Adım 16: Sözleşmemizi dağıtın {#step-16-deploy-our-contract}

Sonunda akıllı sözleşmemizi uygulamaya hazırız! Komut satırına gidin ve şunu yürütün:

```
npx hardhat run scripts/deploy.js --network goerli
```

Daha sonra şöyle bir şey görmelisiniz:

```
Contract deployed to address: 0x6cd7d44516a20882cEa2DE9f205bF401c0d23570
```

[Goerli etherscan](https://goerli.etherscan.io/)'e gider ve sözleşme adresimizi aratırsak başarıyla dağıtılmış olduğunu görürüz. İşlem şunun gibi gözükecektir:

![etherscan sözleşmesi](./etherscan-contract.png)

`From` (gönderen) adresi, MetaMask hesap adresinizle eşleşmelidir ve To (alıcı) adresinde "Contract Creation" (Sözleşme Oluşturma) yazacaktır ancak işleme tıklarsak `To` alanında sözleşme adresimizi göreceğiz:

![etherscan işlemi](./etherscan-transaction.png)

Tebrikler! Ethereum zincirine bir akıllı sözleşme dağıttınız 🎉

Perde arkasında neler olduğunu anlamak için [Alchemy gösterge panelimizde](https://dashboard.alchemyapi.io/explorer) Explorer (Gezgin) sekmesine gidelim. Birden fazla Alchemy uygulamanız varsa, uygulamaya göre filtreleme yaptığınızdan ve "Hello World"ü seçtiğinizden emin olun. ![merhaba dünya gezgini](./hello-world-explorer.png)

Burada, `.deploy()` fonksiyonunu çağırdığımızda Hardhat/Ethers'ın bizim için arka planda yaptığı bir avuç JSON-RPC çağrısı göreceksiniz. Burada belirtilmesi gereken iki önemli şey, akıllı sözleşmemizi Goerli zincirine yazma isteği olan [`eth_sendRawTransaction`](https://docs.alchemyapi.io/alchemy/documentation/alchemy-api-reference/json-rpc#eth_sendrawtransaction) ve karma değerine göre işlemimiz hakkındaki bilgileri okuma isteği olan (işlem gönderirken sık kullanılan bir şablon) [`eth_getTransactionByHash`](https://docs.alchemyapi.io/alchemy/documentation/alchemy-api-reference/json-rpc#eth_gettransactionbyhash) öğeleridir. İşlem gönderme hakkında daha fazlasını öğrenmek için, [Web3 kullanarak işlem gönderme](/developers/tutorials/sending-transactions-using-web3-and-alchemy/) üzerine olan şu öğreticiye göz atın

Öğreticinin 1. bölümü bu kadar, 2. bölümde ilk mesajımızı güncelleyerek [akıllı sözleşmemizle gerçekten etkileşime geçeceğiz](https://docs.alchemyapi.io/alchemy/tutorials/hello-world-smart-contract#part-2-interact-with-your-smart-contract) ve 3. bölümde herkesin akıllı sözleşmemizle nasıl [etkileşimde bulunacağını bilmesi için akıllı sözleşmemizi Etherscan'da](https://docs.alchemyapi.io/alchemy/tutorials/hello-world-smart-contract#optional-part-3-publish-your-smart-contract-to-etherscan) yayınlayacağız.

**Alchemy hakkında daha fazla bilgi edinmek mi istiyorsunuz? [Web sitemize](https://alchemyapi.io/eth) göz atın. Hiç bir güncellemeyi kaçırmak istemiyor musunuz? Bültenimize [buradan](https://www.alchemyapi.io/newsletter) abone olun! Ayrıca [Twitter'ımızı](https://twitter.com/alchemyplatform) takip ettiğinizden ve [Discord'umuza](https://discord.com/invite/u72VCg3) katıldığınızdan da emin olun**.
