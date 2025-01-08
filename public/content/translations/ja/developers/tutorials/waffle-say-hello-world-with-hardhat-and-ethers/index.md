---
title: "WaffleでHardhatとethersを使って「Hello world!」と出力するチュートリアル"
description: Hardhatとethers.jsを使って、はじめてのWaffleプロジェクトを作成する
author: "MiZiet"
tags:
  - "Waffle"
  - "スマートコントラクト"
  - "Solidity"
  - "テスト"
  - "Hardhat"
  - "ethers.js"
skill: beginner
lang: ja
published: 2020-10-16
---

この[Waffle](https://ethereum-waffle.readthedocs.io)チュートリアルでは、[Hardhat](https://hardhat.org/)と[ethers.js](https://docs.ethers.io/v5/)を使用して、「Hello world」と表示するシンプルなスマートコントラクトのプロジェクトを作成する方法を学びます。 さらに、Waffle上で作成したスマートコントラクトに新たな機能を追加し、テストする方法を学びます。

まずはじめに新しいプロジェクトを作成しましょう。

```bash
yarn init
```

あるいは、

```bash
npm init
```

必要なパッケージをインストールします：

```bash
yarn add -D hardhat @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai
```

以下を実行してもよいです：

```bash
npm install -D hardhat @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai
```

次に、`npx hardhat`を実行して、サンプルのHardhatプロジェクトを作成します。

```bash
888    888                      888 888               888
888    888                      888 888               888
888    888                      888 888               888
8888888888  8888b.  888d888 .d88888 88888b.   8888b.  888888
888    888     "88b 888P"  d88" 888 888 "88b     "88b 888
888    888 .d888888 888    888  888 888  888 .d888888 888
888    888 888  888 888    Y88b 888 888  888 888  888 Y88b.
888    888 "Y888888 888     "Y88888 888  888 "Y888888  "Y888

👷 Welcome to Hardhat v2.0.3 👷‍

? What do you want to do? …
❯ Create a sample project
Create an empty hardhat.config.js
Quit
```

`Create a sample project`を選択します。

プロジェクトの構造は、以下のようになっているはずです：

```
MyWaffleProject
├── contracts
│   └── Greeter.sol
├── node_modules
├── scripts
│   └── sample-script.js
├── test
│   └── sample-test.js
├── .gitattributes
├── .gitignore
├── hardhat.config.js
└── package.json
```

### 次に、これらのファイルのいくつかを説明します。 {#now-lets-talk}

- Greeter.solは、このチュートリアルで使用するSolidityで書かれたスマートコントラクトです。

```solidity
contract Greeter {
string greeting;

constructor(string memory _greeting) public {
console.log("Deploying a Greeter with greeting:", _greeting);
greeting = _greeting;
}

function greet() public view returns (string memory) {
return greeting;
}

function setGreeting(string memory _greeting) public {
console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
greeting = _greeting;
}
}
```

このスマートコントラクトは、以下の3つの要素に分解できます：

1. コンストラクタ：`greeting`という名前の文字列型の変数を宣言する場所です。
2. greet関数：`greeting`を返す関数です。
3. setGreeting関数：`greeting`の値を変更する関数です。

- sample-test.js：テストを実行するファイルです。

```js
describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter")
    const greeter = await Greeter.deploy("Hello, world!")

    await greeter.deployed()
    expect(await greeter.greet()).to.equal("Hello, world!")

    await greeter.setGreeting("Hola, mundo!")
    expect(await greeter.greet()).to.equal("Hola, mundo!")
  })
})
```

### 次に、コントラクトをコンパイルし、テストを実行します。 {#compiling-and-testing}

Waffleでは、Mocha（テスト用フレームワーク）およびChai（アサーションライブラリ）を使ってテストを実行します。 `npx hardhat test`を実行して、以下のメッセージが表示されるまで待つだけです。

```bash
✓ Should return the new greeting once it's changed
```

### 今のところ順調ですので、プロジェクトにもう少し機能を付け加えてみましょう<Emoji text=":slightly_smiling_face:" size={1}/> {#adding-complexity}

他のユーザーが、挨拶の代わりに空の文字列を追加したと想定してみましょう。 無言の挨拶は嬉しくありませんね！  
ですから、このようなことが起こらないようにします：

空の文字列が渡された場合に、Solidityの`revert`機能を利用できるようにします。 この機能は、Waffleのchaiマッチャーである`to.be.revertedWith()`で簡単にテストできます。

```js
it("Should revert when passing an empty string", async () => {
  const Greeter = await ethers.getContractFactory("Greeter")
  const greeter = await Greeter.deploy("Hello, world!")

  await greeter.deployed()
  await expect(greeter.setGreeting("")).to.be.revertedWith(
    "Greeting should not be empty"
  )
})
```

このテストには、合格しなかったようです。

```bash
Deploying a Greeter with greeting: Hello, world!
Changing greeting from 'Hello, world!' to 'Hola, mundo!'
    ✓ Should return the new greeting once it's changed (1514ms)
Deploying a Greeter with greeting: Hello, world!
Changing greeting from 'Hello, world!' to ''
    1) Should revert when passing an empty string


  1 passing (2s)
  1 failing
```

さっそくこの機能を、先ほど作成したスマートコントラクトに追加しましょう：

```solidity
require(bytes(_greeting).length > 0, "Greeting should not be empty");
```

これにより、setGreeting関数は以下のようになっているはずです：

```solidity
function setGreeting(string memory _greeting) public {
require(bytes(_greeting).length > 0, "Greeting should not be empty");
console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
greeting = _greeting;
}
```

もう一度、テストを実行してみましょう：

```bash
✓ Should return the new greeting once it's changed (1467ms)
✓ Should revert when passing an empty string (276ms)

2 passing (2s)
```

おめでとうございます！ テストが完成しました :)

### まとめ {#conclusion}

Waffle、Hardhat、およびethers.jsを使った簡単なプロジェクトを作成しました。 このチュートリアルでは、プロジェクトを開始し、テストを追加し、さらに新たな機能を実装する方法について学びました。

スマートコントラクトのテストに大活躍するChaiマッチャーについてさらに知りたい場合は、[Waffleの公式文書](https://ethereum-waffle.readthedocs.io/en/latest/matchers.html)を参照してください。
