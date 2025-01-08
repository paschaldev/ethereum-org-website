---
title: Como usar o Echidna para testar contratos inteligentes
description: Como usar o Echidna para testar automaticamente contratos inteligentes
author: "Trailofbits"
lang: pt-br
tags:
  - "solidez"
  - "smart contracts"
  - "segurança"
  - "testando"
  - "fuzzing"
skill: advanced
published: 2020-04-10
source: Construindo contratos seguros
sourceUrl: https://github.com/crytic/building-secure-contracts/tree/master/program-analysis/echidna
---

## Instalação {#installation}

Echidna pode ser instalado através do docker ou usando o binário pré-compilado.

### Echidna com docker {#echidna-through-docker}

```bash
docker pull trailofbits/eth-security-toolbox
docker run -it -v "$PWD":/home/training trailofbits/eth-security-toolbox
```

_O último comando roda a eth-security-toolbox em um docker que tem acesso ao seu diretório atual. Você pode alterar os arquivos do seu host e executar as ferramentas nos arquivos através do docker_

Dentro do docker, execute :

```bash
solc-select 0.5.11
cd /home/training
```

### Binário {#binary}

[https://github.com/crytic/echidna/releases/tag/v1.4.0.0](https://github.com/crytic/echidna/releases/tag/v1.4.0.0)

## Introdução a fuzzing baseado em propriedade {#introduction-to-property-based-fuzzing}

Echidna é um fuzzer baseado em propriedades, descrevemos em nossos posts anteriores ([1](https://blog.trailofbits.com/2018/03/09/echidna-a-smart-fuzzer-for-ethereum/), [2](https://blog.trailofbits.com/2018/05/03/state-machine-testing-with-echidna/), [3](https://blog.trailofbits.com/2020/03/30/an-echidna-for-all-seasons/)).

### Fuzzing {#fuzzing}

[Fuzzing](https://wikipedia.org/wiki/Fuzzing) é uma técnica bem conhecida na comunidade de segurança. It consists of generating inputs that are more or less random to find bugs in the program. Fuzzers por software tradicional (como [AFL](http://lcamtuf.coredump.cx/afl/) ou [LibFuzzer](https://llvm.org/docs/LibFuzzer.html)) são conhecidos por serem ferramentas eficientes para encontrar bugs.

Além da geração aleatória de entradas, há muitas técnicas e estratégias para gerar bons inputs, incluindo:

- Obtenha feedback de cada execução e geração de guias usando-o. Por exemplo, se uma entrada recém-gerada leva à descoberta de um novo caminho, ele pode fazer sentido para gerar novas entradas fechadas a ele.
- Geração da entrada respeitando uma restrição estrutural. Por exemplo, se a sua entrada contiver um cabeçalho com uma soma de verificação, fará sentido deixar o difusor gerar uma entrada validando a soma de verificação.
- Usando entradas conhecidas para gerar novas entradas: se você tem acesso a um grande conjunto de dados de entrada válida, seu difusor pode gerar novas entradas a partir deles, ao invés de começar sua geração do zero. Eles geralmente são chamados de _seeds_.

### Fuzzing baseado em propriedade {#property-based-fuzzing}

Echidna pertence a uma família específica de fuzzer: fuzzing baseada em propriedades fortemente inspirada pelo [QuickCheck](https://wikipedia.org/wiki/QuickCheck). Em contraste com o fuzzing clássico que tentará encontrar falhas, Echidna tentará quebrar invariantes definidos pelo usuário.

Nos contratos inteligentes, invariantes são funções Solidity, que podem representar qualquer estado incorreto ou inválido que o contrato possa alcançar, incluindo:

- Controle de acesso incorreto: quem ataca tornou-se o proprietário do contrato.
- Máquina de estado incorreta: os tokens podem ser transferidos enquanto o contrato é pausado.
- Aritmética incorreta: o usuário pode passar abaixo do saldo e obter tokens gratuitos ilimitados.

### Testando uma propriedade com Echidna {#testing-a-property-with-echidna}

Veremos como testar um contrato inteligente com o Echidna. O alvo é o seguinte contrato inteligente [`exemplo.sol`](https://github.com/crytic/building-secure-contracts/blob/master/program-analysis/echidna/example/token.sol):

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

Assumiremos que esse token deve ter as seguintes propriedades:

- Qualquer um pode ter no máximo 1000 tokens
- O token não pode ser transferido (não é um token ERC20)

### Escrever uma propriedade {#write-a-property}

Propriedades do Echidna são funções de Solidity. Uma propriedade deve:

- Ter nenhum argumento
- Retornar `verdadeiro` se for bem sucedido
- Tenha seu nome começando com `echidna`

Echidna irá:

- Gera automaticamente transações arbitrárias para testar a propriedade.
- Relata quaisquer transações que levem uma propriedade para retornar `` falso ou lançar um erro.
- Descartar efeito lateral ao chamar uma propriedade (ou seja, se a propriedade altera uma variável de estado, ela é descartada após o teste)

A propriedade a seguir verifica que o "caller" não possui mais do que 1000 tokens:

```solidity
function echidna_balance_under_1000() public view returns(bool){
      return balances[msg.sender] <= 1000;
}
```

Use herança para separar seu contrato de suas propriedades:

```solidity
contract TestToken is Token{
      function echidna_balance_under_1000() public view returns(bool){
            return balances[msg.sender] <= 1000;
      }
  }
```

[`token.sol`](https://github.com/crytic/building-secure-contracts/blob/master/program-analysis/echidna/example/token.sol) implementa a propriedade e herda do token.

### Iniciar um contrato {#initiate-a-contract}

Echidna precisa de um [constructor](/developers/docs/smart-contracts/anatomy/#constructor-functions) sem argumento. Se seu contrato precisa de uma inicialização específica, você precisa fazê-lo no construtor.

Há alguns endereços específicos no Echidna:

- `0x00a329c0648769A73afAc7F9381E08FB43dBEA72` que chama o constructor.
- `0x10000`, `0x20000`, e `0x00a329C0648769a73afAC7F9381e08fb43DBEA70` que aleatoriamente chama as outras funções.

Nós não precisamos de nenhuma inicialização específica em nosso exemplo atual, como resultado, nosso construtor está vazio.

### Executando Echidna {#run-echidna}

Echidna foi lançado com:

```bash
echidna-test contract.sol
```

Se o contract.sol contém múltiplos contratos, você pode especificar o alvo:

```bash
echidna-test contract.sol --contract MyContract
```

### Resumo: Testando uma propriedade {#summary-testing-a-property}

O seguinte resumo é a execução de Echidna no nosso exemplo:

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

Echidna descobriu que a propriedade é violada se `backdoor` é chamada.

## Filtrando funções para chamar durante uma campanha de fuzzing {#filtering-functions-to-call-during-a-fuzzing-campaign}

Veremos como filtrar as funções a serem "fuzzed". O alvo é o seguinte contrato inteligente:

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

Este pequeno exemplo força Echidna a encontrar uma determinada sequência de transações para alterar uma variável de estado. Isso é difícil para um fuzzer (é recomendado usar uma ferramenta de execução simbólica como [Manticore](https://github.com/trailofbits/manticore)). Podemos executar o Echidna para verificar isto:

```bash
echidna-test multi.sol
...
echidna_state4: passed! 🎉
Seed: -3684648582249875403
```

### Filtrando funções {#filtering-functions}

Echidna tem problemas para encontrar a sequência correta para testar esse contrato, porque as duas funções de redefinição (`reset1` e `reset2`) definirão todas as variáveis de estado como `false`. No entanto, podemos usar um recurso especial Echidna para ou para a lista negra redefinir a função ou apenas para a lista branca `f`, `g`, `h` e `i` funções.

Para funções da lista negra, podemos usar esse arquivo de configuração:

```yaml
filterBlacklist: true
filterFunctions: ["reset1", "reset2"]
```

Outra abordagem para as funções de filtro é listar as funções na lista branca. Para fazer isso, podemos usar este arquivo de configuração:

```yaml
filterBlacklist: false
filterFunctions: ["f", "g", "h", "i"]
```

- `filterBlacklist` é `verdadeiro` por padrão.
- A filtragem será executada apenas por nome (sem parâmetros). Se você tiver `f()` e `f(uint256)`, o filtro `"f"` corresponderá a ambas as funções.

### Executar Echidna {#run-echidna-1}

Para executar Echidna com um arquivo de configuração `blacklist.yaml`:

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

Echidna vai encontrar a sequência de transações para falsificar a propriedade quase de forma mesquinha.

### Resumo: Filtrando funções {#summary-filtering-functions}

Echidna pode ser chamada na lista negra ou na lista branca durante uma campanha de fuzzing:

```yaml
filterBlacklist: true
filterFunctions: ["f1", "f2", "f3"]
```

```bash
echidna-test contract.sol --config config.yaml
...
```

Echidna inicia uma campanha de fuzzing em qualquer blacklist `f1`, `f2` e `f3` ou apenas chamando a eles, de acordo com o valor do booleano `filterBlacklist`.

## Como testar a asserção de Solidity com Echidna {#how-to-test-soliditys-assert-with-echidna}

Neste breve tutorial, vamos mostrar como usar o Echidna para testar a verificação de asserção em contratos. Vamos supor que tenhamos um contrato como este:

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

### Escreva uma asserção {#write-an-assertion}

Queremos ter certeza de que `tmp` é menor ou igual a `contador` depois de retornar a sua diferença. Nós poderíamos escrever uma propriedade de Echidna, mas precisaremos armazenar o valor de `tmp` em algum lugar. Em vez disso, poderíamos usar uma asserção como esta:

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

### Executando Echidna {#run-echidna-2}

Para habilitar o teste de falha de asserção, crie um arquivo de configuração [Echidna](https://github.com/crytic/echidna/wiki/Config) `config.yaml`:

```yaml
checkAsserts: true
```

Quando executamos este contrato em Echidna, obtemos os resultados esperados:

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

Como você pode ver, Echidna relata algumas falhas de afirmação na função `inc`. Adicionar mais de uma asserção por função é possível, mas Echidna não pode dizer qual afirmação falhou.

### Quando e como usar asserções {#when-and-how-use-assertions}

As asserções podem ser usadas como alternativas às propriedades explícitas, se as condições a serem verificadas estão diretamente relacionadas com o uso correto de alguma operação `f`. Adicionar asserções após algum código forçará que a verificação ocorra imediatamente após sua execução:

```solidity
function f(..) public {
    // some complex code
    ...
    assert (condition);
    ...
}

```

Pelo contrário, usando uma propriedade Echidna explícita irá executar transações aleatoriamente e não há maneira fácil de aplicar exatamente quando elas serão verificadas. Ainda é possível fazer esta solução alternativa:

```solidity
function echidna_assert_after_f() public returns (bool) {
    f(..);
    return(condition);
}
```

Entretanto, existem alguns problemas: %{issues}:

- Ele falha se `f` é declarado como `interno` ou `externo`.
- Não está claro quais argumentos devem ser usados para chamar `f`.
- Se `f` reverter, a propriedade irá falhar.

Em geral, recomendamos seguir a recomendação de [John Regehr](https://blog.regehr.org/archives/1091) sobre como usar asserções:

- Não force qualquer efeito colateral durante a verificação de asserção. Por exemplo: `assert(ChangeStateAndReturn() == 1)`
- Não faça asserções óbvias. Por exemplo, `assert(var >= 0)` onde `var` é declarado como `uint`.

Finalmente, **não use** `require` em vez de `assert`, já que Echidna não será capaz de detectá-lo (mas o contrato será revertido mesmo assim).

### Resumo: checando a asserção {#summary-assertion-checking}

O seguinte resumo é a execução de Echidna no nosso exemplo:

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

Echidna percebeu que a asserção em `inc` pode falhar se essa função é chamada várias vezes com argumentos grandes.

## Coletando e modificando um corpus Echidna {#collecting-and-modifying-an-echidna-corpus}

Veremos como coletar e usar um corpus de transações com Echidna. O alvo é o seguinte contrato inteligente [`exemplo.sol`](https://github.com/crytic/building-secure-contracts/blob/master/program-analysis/echidna/example/magic.sol):

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

Este pequeno exemplo força Echidna a encontrar uma determinada sequência de transações para alterar uma variável de estado. Isso é difícil para um fuzzer (é recomendado usar uma ferramenta de execução simbólica como [Manticore](https://github.com/trailofbits/manticore)). Podemos executar o Echidna para verificar isto:

```bash
echidna-test magic.sol
...

echidna_magic_values: passed! 🎉

Seed: 2221503356319272685
```

No entanto, ainda podemos usar o Echidna para coletar corpus na condução desta campanha de fuzzing.

### Coletando um corpus {#collecting-a-corpus}

Para habilitar a coleção de corpus, crie um diretório corpus:

```bash
mkdir corpus-magic
```

E um [arquivo de configuração Echidna](https://github.com/crytic/echidna/wiki/Config) `config.yaml`:

```yaml
coverage: true
corpusDir: "corpus-magic"
```

Agora podemos rodar nossa ferramenta e checar o corpus coletado:

```bash
echidna-test magic.sol --config config.yaml
```

Echidna ainda não conseguiu encontrar os valores mágicos corretos, mas podemos olhar para o corpus que ele coletou. Por exemplo, um desses arquivos foi:

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

Claramente, esse input não causará falha em nossa propriedade. No entanto, no próximo passo, veremos como modificá-lo nesse sentido.

### Semeando um corpus {#seeding-a-corpus}

Echidna precisa de ajuda para lidar com a função `mágica`. Vamos copiar e modificar a entrada para usar os parâmetros adequados para ele:

```bash
cp corpus/2712688662897926208.txt corpus/new.txt
```

Nós iremos modificar `new.txt` para chamar `mágica(42,129,333,0)`. Agora, podemos reexecutar o Echidna:

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

Desta vez, constatou que a propriedade é violada imediatamente.

## Localizando transações com alto consumo de gas {#finding-transactions-with-high-gas-consumption}

Veremos como encontrar as transações com alto consumo de gas com o Echidna. O alvo é o seguinte contrato inteligente:

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

Aqui `caro` pode ter um grande consumo de gas.

Atualmente, Echidna sempre precisa de uma propriedade para testar: aqui `echidna_test` sempre retorna `true`. Podemos executar o Echidna para verificar isto:

```
echidna-test gas.sol
...
echidna_test: passed! 🎉

Seed: 2320549945714142710
```

### Medição do consumo de gas {#measuring-gas-consumption}

Para habilitar o consumo de gas com Echidna, crie um arquivo de configuração `config.yaml`:

```yaml
estimateGas: true
```

Neste exemplo, também reduziremos o tamanho da sequência de transações para facilitar a compreensão dos resultados:

```yaml
seqLen: 2
estimateGas: true
```

### Executando Echidna {#run-echidna-3}

Assim que tivermos o arquivo de configuração criado, poderemos executar o Echidna assim:

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

- O gas mostrado é um cálculo fornecido por [HEVM](https://github.com/dapphub/dapptools/tree/master/src/hevm#hevm-).

### Filtrando Chamadas com Redução de Gas {#filtering-out-gas-reducing-calls}

O tutorial sobre **funções de filtragem para chamar durante uma campanha de difusão** acima mostra como remover algumas funções de seu teste.  
Isso pode ser fundamental para obter uma estimativa de gas precisa. Considere o seguinte exemplo:

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

Se Echidna pode chamar todas as funções, ele não encontrará facilmente transações com alto custo de gas:

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

Isso porque o custo depende do tamanho dos `addrs` e chamadas aleatórias tendem a deixar o array quase vazio. Lista negra `pop` e `limpa`, no entanto, nos dá resultados muito melhores:

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

### Localizando transações com alto consumo de gás {#summary-finding-transactions-with-high-gas-consumption}

Echidna pode encontrar transações com alto consumo de gás usando a opção de configuração `estimateGas`:

```yaml
estimateGas: true
```

```bash
echidna-test contract.sol --config config.yaml
...
```

Echidna irá relatar uma sequência com o consumo máximo de gas para cada função, uma vez terminada a campanha de fuzzing.
