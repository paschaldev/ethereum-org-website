---
title: Akıllı sözleşmeleri test etmek için Echidna nasıl kullanılır
description: Akıllı sözleşmeleri otomatik olarak test etmek için Echidna nasıl kullanılır
author: "Trailofbits"
lang: tr
tags:
  - "solidity"
  - "akıllı kontratlar"
  - "güvenlik"
  - "test etmek"
  - "bulandırma"
skill: advanced
published: 2020-04-10
source: Güvenli sözleşmeler oluşturmak
sourceUrl: https://github.com/crytic/building-secure-contracts/tree/master/program-analysis/echidna
---

## Kurulum {#installation}

Echidna, docker aracılığıyla veya önceden derlenmiş ikili dosya kullanılarak kurulabilir.

### Docker aracılığıyla Echidna {#echidna-through-docker}

```bash
docker pull trailofbits/eth-security-toolbox
docker run -it -v "$PWD":/home/training trailofbits/eth-security-toolbox
```

_Son komut, geçerli dizininize erişimi olan bir docker'da eth-security-toolbox'ı çalıştırır. Dosyaları ana makinenizden değiştirebilir ve dosyalar üzerindeki araçları docker'dan çalıştırabilirsiniz_

Docker'ın içinde şunu çalıştırın:

```bash
solc-select 0.5.11
cd /home/training
```

### İkili {#binary}

[https://github.com/crytic/echidna/releases/tag/v1.4.0.0](https://github.com/crytic/echidna/releases/tag/v1.4.0.0)

## Özellik tabanlı bulandırmaya giriş {#introduction-to-property-based-fuzzing}

Echidna, önceki blog yazılarımızda tanımladığımız bir özellik tabanlı bulandırıcıdır ([1](https://blog.trailofbits.com/2018/03/09/echidna-a-smart-fuzzer-for-ethereum/), [2](https://blog.trailofbits.com/2018/05/03/state-machine-testing-with-echidna/), [3](https://blog.trailofbits.com/2020/03/30/an-echidna-for-all-seasons/)).

### Bulandırma {#fuzzing}

[Bulandırma ](https://wikipedia.org/wiki/Fuzzing) (Fuzzing), güvenlik topluluğunda iyi bilinen bir tekniktir. Programdaki hataları bulmak için hemen hemen rastgele girdiler oluşturmayı içerir. Geleneksel yazılım için bulandırıcılar ([AFL](http://lcamtuf.coredump.cx/afl/) veya [LibFuzzer](https://llvm.org/docs/LibFuzzer.html) gibi) hata tespiti için verimli araçlar olarak bilinirler.

Tamamen rastgele girdi oluşturmanın ötesinde, iyi girdiler üretmek için aşağıdakiler de dahil olmak üzere birçok teknik ve strateji vardır:

- Her yürütmeden geri bildirim alın ve bunu, oluşturmaya rehberlik etmek için kullanın. Örneğin, yeni oluşturulan bir girdi yeni bir yolun keşfine yol açıyorsa, ona yakın yeni girdiler oluşturmak mantıklı olabilir.
- Yapısal bir kısıtlamaya göre girdi oluşturma. Örneğin, girdiniz sağlama toplamı olan bir başlık içeriyorsa, bulandırıcının sağlama toplamını doğrulayan girdi oluşturmasına izin vermek mantıklı olacaktır.
- Yeni girdiler oluşturmak için bilinen girdileri kullanma: Eğer büyük bir geçerli girdi veri setine erişiminiz varsa, bulandırıcınız sıfırdan üretime başlamak yerine onlardan yeni girdiler üretebilir. Bunlara genellikle _tohum_ denir.

### Özellik temelli bulandırma {#property-based-fuzzing}

Echidna spesifik bir bulandırıcı ailesine mensuptur: özellik temelli bulandırma çoğunlukla [QuickCheck](https://wikipedia.org/wiki/QuickCheck)'ten ilham almıştır. Çökmeleri bulmaya çalışan klasik bulandırıcının aksine Echidna, kullanıcı tanımlı değişmezleri kırmaya çalışacaktır.

Akıllı sözleşmelerde değişmezler, sözleşmenin ulaşabileceği herhangi bir yanlış veya geçersiz durumu temsil edebilen Solidity fonksiyonlarıdır:

- Hatalı erişim denetimi: Saldırgan sözleşmenin sahibi oldu.
- Hatalı durum makinesi: Sözleşme duraklatılmışken token'lar aktarılabilir.
- Hatalı aritmetik: Kullanıcı bakiyesini yetersiz gösterip sınırsız ücretsiz token alabilir.

### Echidna ile bir özelliği test etme {#testing-a-property-with-echidna}

Echidna ile akıllı bir sözleşmenin nasıl test edileceğini göreceğiz. Hedef, aşağıdaki akıllı sözleşme [`token.sol`'dür](https://github.com/crytic/building-secure-contracts/blob/master/program-analysis/echidna/example/token.sol):

```solidity
contract Token{
  mapping(address => uint) public balances;
  function airdrop() public{
      balances[msg.sender] = 1000;
  }
  function consume() public{
      require(balances[msg.sender]>0);
      balances[msg.sender] -= 1;
  }
  function backdoor() public{
      balances[msg.sender] += 1;
  }
}
```

Bu token'ın aşağıdaki özelliklere sahip olması gerektiği varsayımını yapacağız:

- Herkes en fazla 1000 token'a sahip olabilir
- Token transfer edilemez (bir ERC20 token'ı değildir)

### Bir özellik yazın {#write-a-property}

Echidna özellikleri, Solidity fonksiyonlarıdır. Bir özellikte şunlar bulunmalı:

- Argümanı olmamalı
- Başarılıysa `true` döndürmeli
- Adı `echidna` ile başlıyor olmalı

Echidna şunları yapacaktır:

- Özelliği test etmek için otomatik olarak rastgele işlemler oluşturacak.
- Bir özelliğin `false` döndürmesine veya bir hata vermesine neden olan tüm işlemleri bildirecek.
- Bir özelliği çağırırken yan etkiyi atacak (yani özellik bir durum değişkenini değiştirirse, testten sonra atılır)

Aşağıdaki özellik, çağıranın 1000'den fazla token'a sahip olup olmadığını kontrol eder:

```solidity
function echidna_balance_under_1000() public view returns(bool){
      return balances[msg.sender] <= 1000;
}
```

Sözleşmenizi özelliklerinizden ayırmak için kalıtımı kullanın:

```solidity
contract TestToken is Token{
      function echidna_balance_under_1000() public view returns(bool){
            return balances[msg.sender] <= 1000;
      }
  }
```

[`token.sol`](https://github.com/crytic/building-secure-contracts/blob/master/program-analysis/echidna/example/token.sol) özelliği uygular ve token'dan kalıtım gerçekleştirir.

### Bir sözleşme başlatın {#initiate-a-contract}

Echidna, argümanı olmayan bir [yapıcıya](/developers/docs/smart-contracts/anatomy/#constructor-functions) ihtiyaç duyar. Sözleşmenizin özel bir başlatmaya ihtiyacı varsa, bunu yapıcıda yapmanız gerekir.

Echidna'da bazı özel adresler vardır:

- `0x00a329c0648769A73afAc7F9381E08FB43dBEA72` yapıcıyı çağırır.
- `0x10000`, `0x20000`, ve `0x00a329C0648769a73afAC7F9381e08fb43DBEA70` diğer fonksiyonları rastgele çağırır.

Mevcut örneğimizde herhangi bir özel başlatmaya ihtiyacımız yok, bu yüzden yapıcımız boş.

### Echidna'yı çalıştırın {#run-echidna}

Echidna şöyle başlatılır:

```bash
echidna-test contract.sol
```

Contract.sol birden fazla sözleşme içeriyorsa hedefi belirtebilirsiniz:

```bash
echidna-test contract.sol --contract MyContract
```

### Özet: Bir özelliği test etme {#summary-testing-a-property}

Aşağıdaki, örneğimizde echidna'nın çalışmasını özetler:

```solidity
contract TestToken is Token{
    constructor() public {}
        function echidna_balance_under_1000() public view returns(bool){
          return balances[msg.sender] <= 1000;
        }
  }
```

```bash
echidna-test testtoken.sol --contract TestToken
...

echidna_balance_under_1000: failed!💥
  Call sequence, shrinking (1205/5000):
    airdrop()
    backdoor()

...
```

Echidna, `backdoor` çağrılırsa özelliğin ihlal edildiğini tespit etti.

## Bir bulandırma işlemi sırasında çağrılacak filtreleme işlevleri {#filtering-functions-to-call-during-a-fuzzing-campaign}

Bulandırılacak fonksiyonların nasıl filtreleneceğini göreceğiz. Hedef, aşağıdaki akıllı sözleşmedir:

```solidity
contract C {
  bool state1 = false;
  bool state2 = false;
  bool state3 = false;
  bool state4 = false;

  function f(uint x) public {
    require(x == 12);
    state1 = true;
  }

  function g(uint x) public {
    require(state1);
    require(x == 8);
    state2 = true;
  }

  function h(uint x) public {
    require(state2);
    require(x == 42);
    state3 = true;
  }

 function i() public {
    require(state3);
    state4 = true;
  }

  function reset1() public {
    state1 = false;
    state2 = false;
    state3 = false;
    return;
  }

  function reset2() public {
    state1 = false;
    state2 = false;
    state3 = false;
    return;
  }

  function echidna_state4() public returns (bool) {
    return (!state4);
  }
}
```

Bu küçük örnek, Echidna'yı bir durum değişkenini değiştirmek için belirli bir işlem dizisini bulmaya zorlar. Bu bir bulandırıcı için zordur ([Manticore](https://github.com/trailofbits/manticore) gibi sembolik bir yürütme aracı kullanılması önerilir). Bunu doğrulamak için Echidna'yı çalıştırabiliriz:

```bash
echidna-test multi.sol
...
echidna_state4: passed! 🎉
Seed: -3684648582249875403
```

### Fonksiyonları filtreleme {#filtering-functions}

Echidna, iki sıfırlama fonksiyonu (`reset1` ve `reset2`) tüm durum değişkenlerini `false` olarak ayarlayacağından, bu sözleşmeyi test etmek için doğru sırayı bulmakta zorlanıyor. Ancak, sıfırlama fonksiyonunu kara listeye almak veya yalnızca `f`, `g`, `h` ve `i` fonksiyonlarını beyaz listeye almak için özel bir Echidna özelliğini kullanabiliriz.

İşlevleri kara listeye almak için bu yapılandırma dosyasını kullanabiliriz:

```yaml
filterBlacklist: true
filterFunctions: ["reset1", "reset2"]
```

Fonksiyonları filtrelemek için başka bir yaklaşım, beyaz listeye alınan fonksiyonları listelemektir. Bunu yapmak için şu yapılandırma dosyasını kullanabiliriz:

```yaml
filterBlacklist: false
filterFunctions: ["f", "g", "h", "i"]
```

- `filterBlacklist` varsayılan olarak `true` hâldedir.
- Filtreleme sadece ada göre yapılacaktır (parametreler olmadan). Eğer `f()` ve `f(uint256)` varsa, `"f"` filtresi iki fonksiyon ile de eşleşecektir.

### Echidna'yı çalıştırın {#run-echidna-1}

Echidna'yı bir `blacklist.yaml` yapılandırma dosyası ile çalıştırmak için:

```bash
echidna-test multi.sol --config blacklist.yaml
...
echidna_state4: failed!💥
  Call sequence:
    f(12)
    g(8)
    h(42)
    i()
```

Echidna, özelliği tahrif edecek işlemlerin sırasını neredeyse anında bulacaktır.

### Özet: Fonksiyonları filtreleme {#summary-filtering-functions}

Echidna, aşağıdakileri kullanarak bulanıklaştırma çalışması sırasında çağrılacak fonksiyonları kara veya beyaz listeye alabilir:

```yaml
filterBlacklist: true
filterFunctions: ["f1", "f2", "f3"]
```

```bash
echidna-test contract.sol --config config.yaml
...
```

Echidna, `f1`, `f2` ve `f3`'ü kara listeye alarak veya `filterBlacklist` boolean değerine göre yalnızca bunları çağırarak bir bulanıklaştırma çalışması başlatır.

## Solidity'nin teyidi Echidna ile nasıl test edilir {#how-to-test-soliditys-assert-with-echidna}

Bu kısa öğreticide, sözleşmelerde teyit kontrolünü test etmek için Echidna'nın nasıl kullanılacağını göstereceğiz. Diyelim ki şuna benzer bir sözleşmemiz var:

```solidity
contract Incrementor {
  uint private counter = 2**200;

  function inc(uint val) public returns (uint){
    uint tmp = counter;
    counter += val;
    // tmp <= counter
    return (counter - tmp);
  }
}
```

### Bir teyit yazın {#write-an-assertion}

Farkını döndürdükten sonra `tmp` öğesinin `counter` değerinden küçük veya eşit olduğundan emin olmak istiyoruz. Bir Echidna özelliği yazabiliriz, ancak `tmp` değerini bir yerde saklamamız gerekecek. Onun yerine, bunun gibi bir teyit kullanabilirdik:

```solidity
contract Incrementor {
  uint private counter = 2**200;

  function inc(uint val) public returns (uint){
    uint tmp = counter;
    counter += val;
    assert (tmp <= counter);
    return (counter - tmp);
  }
}
```

### Echidna'yı çalıştırın {#run-echidna-2}

Teyit hatası testini etkinleştirmek için bir [Echidna yapılandırma dosyası](https://github.com/crytic/echidna/wiki/Config) `config.yaml` oluşturun:

```yaml
checkAsserts: true
```

Bu sözleşmeyi Echidna'da çalıştırdığımızda, beklenen sonuçları elde ediyoruz:

```bash
echidna-test assert.sol --config config.yaml
Analyzing contract: assert.sol:Incrementor
assertion in inc: failed!💥
  Call sequence, shrinking (2596/5000):
    inc(21711016731996786641919559689128982722488122124807605757398297001483711807488)
    inc(7237005577332262213973186563042994240829374041602535252466099000494570602496)
    inc(86844066927987146567678238756515930889952488499230423029593188005934847229952)

Seed: 1806480648350826486
```

Gördüğünüz gibi, Echidna `inc` fonksiyonunda bazı onaylama hataları bildiriyor. Fonksiyon başına birden fazla teyit eklemek mümkündür, ancak Echidna hangi iddianın başarısız olduğunu söyleyemez.

### Teyitler nerede ve nasıl kullanılır {#when-and-how-use-assertions}

Teyitler, özellikle kontrol edilecek koşullar bazı `f` işlemlerinin doğru kullanımıyla doğrudan ilgiliyse, açık özelliklere alternatif olarak kullanılabilir. Bazı kodlardan sonra teyitler eklemek, kontrolün yürütüldükten hemen sonra yapılmasını zorunlu kılar:

```solidity
function f(..) public {
    // some complex code
    ...
    assert (condition);
    ...
}

```

Aksine, açık bir echidna özelliği kullanmak işlemleri rastgele yürütecektir ve tam olarak ne zaman kontrol edileceğini zorlamanın kolay bir yolu yoktur. Bu geçici çözümü yapmak hâlâ mümkündür:

```solidity
function echidna_assert_after_f() public returns (bool) {
    f(..);
    return(condition);
}
```

Ancak, bazı sorunlar vardır:

- `f` `internal` veya `external` olarak duyurulursa başarısız olur.
- `f`'u çağırmak için hangi bağımsız değişkenlerin kullanılması gerektiği açık değil.
- `f` geri dönerse, özellik başarısız olur.

Genel olarak, teyitlerin nasıl kullanılacağına ilişkin [John Regehr'in tavsiyesini](https://blog.regehr.org/archives/1091) izlemenizi öneririz:

- Teyit kontrolü sırasında herhangi bir yan etkiyi zorlamayın. Örnek olarak: `assert(ChangeStateAndReturn() == 1)`
- Açık ifadeleri teyit etmeyin. Örnek olarak `var`'ın `uint` olarak duyurulduğu yerde `assert(var >= 0)` olması gibi.

Son olarak, Echidna bunu algılamayacağı (ancak sözleşme yine de geri dönecek) için lütfen `assert` yerine `require` **kullanmayın**.

### Özet: Teyit Kontrolü {#summary-assertion-checking}

Aşağıdakiler, örneğimizde echidna'nın çalışmasını özetler:

```solidity
contract Incrementor {
  uint private counter = 2**200;

  function inc(uint val) public returns (uint){
    uint tmp = counter;
    counter += val;
    assert (tmp <= counter);
    return (counter - tmp);
  }
}
```

```bash
echidna-test assert.sol --config config.yaml
Analyzing contract: assert.sol:Incrementor
assertion in inc: failed!💥
  Call sequence, shrinking (2596/5000):
    inc(21711016731996786641919559689128982722488122124807605757398297001483711807488)
    inc(7237005577332262213973186563042994240829374041602535252466099000494570602496)
    inc(86844066927987146567678238756515930889952488499230423029593188005934847229952)

Seed: 1806480648350826486
```

Echidna, bu fonksiyon büyük argümanlarla birden çok kez çağrılırsa `inc` içindeki teyidin başarısız olabileceğini buldu.

## Bir Echidna korpusunu toplama ve değiştirme {#collecting-and-modifying-an-echidna-corpus}

Echidna ile bir işlem korpusunun nasıl toplanıp kullanılacağını göreceğiz. Hedef, aşağıdaki akıllı sözleşme [`magic.sol`'dur](https://github.com/crytic/building-secure-contracts/blob/master/program-analysis/echidna/example/magic.sol):

```solidity
contract C {
  bool value_found = false;
  function magic(uint magic_1, uint magic_2, uint magic_3, uint magic_4) public {
    require(magic_1 == 42);
    require(magic_2 == 129);
    require(magic_3 == magic_4+333);
    value_found = true;
    return;
  }

  function echidna_magic_values() public returns (bool) {
    return !value_found;
  }

}
```

Bu küçük örnek, Echidna'yı bir durum değişkenini değiştirmek için belirli değerleri bulmaya zorlar. Bu, bir bulandırıcı için zordur ([Manticore](https://github.com/trailofbits/manticore) gibi sembolik bir yürütme aracı kullanılması önerilir). Bunu doğrulamak için Echidna'yı çalıştırabiliriz:

```bash
echidna-test magic.sol
...

echidna_magic_values: passed! 🎉

Seed: 2221503356319272685
```

Ancak, bu bulandırma çalışmasını yürütürken korpus toplamak için hâlâ Echidna'yı kullanabiliriz.

### Bir korpus toplama {#collecting-a-corpus}

Korpus toplamayı etkinleştirmek için bir korpus dizini oluşturun:

```bash
mkdir corpus-magic
```

Bir [Echidna konfigürasyon dosyası](https://github.com/crytic/echidna/wiki/Config) `config.yaml` da oluşturun:

```yaml
coverage: true
corpusDir: "corpus-magic"
```

Şimdi aracımızı çalıştırabilir ve toplanan korpusu kontrol edebiliriz:

```bash
echidna-test magic.sol --config config.yaml
```

Echidna hâlâ doğru sihirli değerleri bulamıyor ancak topladığı korpusa bakabiliriz. Örneğin bu dosyalardan biri şuydu:

```json
[
  {
    "_gas'": "0xffffffff",
    "_delay": ["0x13647", "0xccf6"],
    "_src": "00a329c0648769a73afac7f9381e08fb43dbea70",
    "_dst": "00a329c0648769a73afac7f9381e08fb43dbea72",
    "_value": "0x0",
    "_call": {
      "tag": "SolCall",
      "contents": [
        "magic",
        [
          {
            "contents": [
              256,
              "93723985220345906694500679277863898678726808528711107336895287282192244575836"
            ],
            "tag": "AbiUInt"
          },
          {
            "contents": [256, "334"],
            "tag": "AbiUInt"
          },
          {
            "contents": [
              256,
              "68093943901352437066264791224433559271778087297543421781073458233697135179558"
            ],
            "tag": "AbiUInt"
          },
          {
            "tag": "AbiUInt",
            "contents": [256, "332"]
          }
        ]
      ]
    },
    "_gasprice'": "0xa904461f1"
  }
]
```

Bu girdinin özelliğimizdeki başarısızlığı tetiklemeyeceği açıktır. Ancak bir sonraki adımda bunun için nasıl yapılandırılabileceğini göreceğiz.

### Bir korpus tohumlama {#seeding-a-corpus}

Echidna'nın `magic` fonksiyonuyla başa çıkabilmesi için biraz yardıma ihtiyacı var. Bunun için uygun parametreleri kullanmak için girdiyi kopyalayıp değiştireceğiz:

```bash
cp corpus/2712688662897926208.txt corpus/new.txt
```

`magic(42,129,333,0)` çağırması için `new.txt`'yi düzenleyeceğiz. Şimdi, Echidna'yı yeniden çalıştırabiliriz:

```bash
echidna-test magic.sol --config config.yaml
...
echidna_magic_values: failed!💥
  Call sequence:
    magic(42,129,333,0)


Unique instructions: 142
Unique codehashes: 1
Seed: -7293830866560616537

```

Bu kez, özelliğin ihlal edildiğini hemen tespit etti.

## Yüksek gaz tüketimi olan işlemleri bulma {#finding-transactions-with-high-gas-consumption}

Echidna ile yüksek gaz tüketimi olan işlemleri nasıl bulacağımızı göreceğiz. Hedef, aşağıdaki akıllı sözleşmedir:

```solidity
contract C {
  uint state;

  function expensive(uint8 times) internal {
    for(uint8 i=0; i < times; i++)
      state = state + i;
  }

  function f(uint x, uint y, uint8 times) public {
    if (x == 42 && y == 123)
      expensive(times);
    else
      state = 0;
  }

  function echidna_test() public returns (bool) {
    return true;
  }

}
```

Burada `expensive` büyük bir gaz tüketimine sahip olabilir.

Şu anda Echidna'nın test etmek için her zaman bir özelliğe ihtiyacı vardır: burada `echidna_test` her zaman `true` değerini döndürür. Bunu doğrulamak için Echidna'yı çalıştırabiliriz:

```
echidna-test gas.sol
...
echidna_test: passed! 🎉

Seed: 2320549945714142710
```

### Gaz Tüketimini Hesaplama {#measuring-gas-consumption}

Echidna ile gaz tüketimini etkinleştirmek için bir `config.yaml` yapılandırma dosyası oluşturun:

```yaml
estimateGas: true
```

Bu örnekte, sonuçların anlaşılmasını kolaylaştırmak için işlem sırasının boyutunu da azaltacağız:

```yaml
seqLen: 2
estimateGas: true
```

### Echidna'yı çalıştırın {#run-echidna-3}

Yapılandırma dosyasını oluşturduktan sonra Echidna'yı şu şekilde çalıştırabiliriz:

```bash
echidna-test gas.sol --config config.yaml
...
echidna_test: passed! 🎉

f used a maximum of 1333608 gas
  Call sequence:
    f(42,123,249) Gas price: 0x10d5733f0a Time delay: 0x495e5 Block delay: 0x88b2

Unique instructions: 157
Unique codehashes: 1
Seed: -325611019680165325

```

- Gösterilen gaz [HEVM](https://github.com/dapphub/dapptools/tree/master/src/hevm#hevm-) tarafından sağlanan bir tahmindir.

### Gaz Düşürücü Çağrıları Filtreleme {#filtering-out-gas-reducing-calls}

Yukarıdaki **bir bulandırma çalışması sırasında çağrılacak fonksiyonları filtreleme** hakkındaki öğretici, bazı fonksiyonların testinizden nasıl kaldırılacağını gösterir.  
Bu, doğru bir gaz tahmini elde etmek için kritik öneme sahiptir. Aşağıdaki örneği göz önünde bulundurun:

```solidity
contract C {
  address [] addrs;
  function push(address a) public {
    addrs.push(a);
  }
  function pop() public {
    addrs.pop();
  }
  function clear() public{
    addrs.length = 0;
  }
  function check() public{
    for(uint256 i = 0; i < addrs.length; i++)
      for(uint256 j = i+1; j < addrs.length; j++)
        if (addrs[i] == addrs[j])
          addrs[j] = address(0x0);
  }
  function echidna_test() public returns (bool) {
      return true;
  }
}
```

Echidna tüm fonksiyonları çağırabilirse yüksek gaz maliyeti olan işlemleri kolayca bulamaz:

```
echidna-test pushpop.sol --config config.yaml
...
pop used a maximum of 10746 gas
...
check used a maximum of 23730 gas
...
clear used a maximum of 35916 gas
...
push used a maximum of 40839 gas
```

Bunun nedeni, maliyetin `addrs` boyutuna bağlı olması ve rastgele aramaların diziyi neredeyse boş bırakma eğiliminde olmasıdır. Ancak `pop` ve `clear`'ı kara listeye almak bize çok daha iyi sonuçlar verir:

```yaml
filterBlacklist: true
filterFunctions: ["pop", "clear"]
```

```
echidna-test pushpop.sol --config config.yaml
...
push used a maximum of 40839 gas
...
check used a maximum of 1484472 gas
```

### Özet: Yüksek gaz tüketimi olan işlemleri bulma {#summary-finding-transactions-with-high-gas-consumption}

Echidna, `estimateGas` yapılandırma seçeneğini kullanarak yüksek gaz tüketimi olan işlemleri bulabilir:

```yaml
estimateGas: true
```

```bash
echidna-test contract.sol --config config.yaml
...
```

Echidna, bulandırma çalışması sona erdiğinde her fonksiyon için maksimum gaz tüketimine sahip bir dizi raporlayacaktır.
