---
title: イーサリアム開発入門
description: "この文書は、はじめてイーサリアム開発を行う初心者用のガイドです。 APIエンドポイントの立ち上げ、コマンドライン・リクエストの作成、さらにweb3スクリプトの作成までをステップごとに説明します。 ブロックチェーンの開発経験は必要ありません！"
author: "Elan Halpern"
tags:
  - "JavaScript"
  - "ethers.js"
  - "ノード"
  - "クエリ"
  - "Alchemy"
skill: beginner
lang: ja
published: 2020-10-30
source: Medium
sourceUrl: https://medium.com/alchemy-api/getting-started-with-ethereum-development-using-alchemy-c3d6a45c567f
---

![イーサリアムおよび Alchemyのロゴ](./ethereum-alchemy.png)

この記事は、はじめてイーサリアム開発を行う初心者向けのガイドです。 このチュートリアルでは、[Alchemy](https://alchemyapi.io/)を使用します。Alchemyは、何百万人ものユーザーを持つ代表的なブロックチェーン開発者向けプラットフォームで、最も人気が高いブロックチェーンアプリ（ Maker、0x、MyEtherWallet、Dharma、Kyberなど）のうち7割がAlchemyを使用しています。 Alchemyを使用するとイーサリアムチェーン上でAPIエンドポイントにアクセスできるため、トランザクションの読み書きが可能になります。

このチュートリアルでは、Alchemyにサインアップする方法から、最初のweb3 スクリプトを作成するまでを学習します。 ブロックチェーンの開発経験は必要ありません！

## 1. 無料のAlchemyアカウントにサインアップする {#sign-up-for-a-free-alchemy-account}

Alchemyのアカウントを作成するのは簡単です。 [こちら](https://auth.alchemyapi.io/signup)から無料でサインアップしてください。

## 2. Alchemy アプリを作成する {#create-an-alchemy-app}

イーサリアムチェーンと通信し、Alchemy製品を使用するには、あなたのリクエストを認証するためのAPIキーが必要になります。

APIキーは、[ダッシュボード](http://dashboard.alchemyapi.io/)で作成できます。 新規キーを作成するには、以下の手順で「Create App」に移動します。

ダッシュボードの表示を許可していただいた[_ShapeShift_](https://shapeshift.com/) _に感謝します！_

![Alchemyダッシュボード](./alchemy-dashboard.png)

「Create App」の下にある詳細情報に記入して、新規キーを取得してください。 ここでは、あなたが以前に作成したアプリや、あなたのチームが作成したアプリも確認できます。 どのアプリについても、「View Key（キーを表示）」をクリックすると既存のキーを取得できます。

![Alchemyのスクリーンショットでアプリを作成する](./create-app.png)

あるいは、カーソルを「Apps（アプリ）」の部分に移動させ、希望するアプリを選択する方法でも既存のAPIキーを取得することができます。 ここでは、「View Key（キーを表示）」できる他、「Edit App（アプリを編集）」して、特定のドメインをホワイトリストに追加したり、開発者ツールを参照したり、アナリティクスを確認することができます。

![APIキーの取得方法をユーザーに表示するGIF画像](./pull-api-keys.gif)

## 3. コマンドラインでリクエストを作成する {#make-a-request-from-the-command-line}

JSON-RPCとcurlを使用して、Alchemy経由でイーサリアムブロックチェーンとのやり取りを行います。

マニュアルでリクエストを作成する場合は、`JSON-RPC`の`POST`リクエストを使ってやりとりすることをお勧めします。 `Content-Type: application/json`のヘッダーと、クエリの`POST`本文に、以下のフィールドを入力してください：

- `jsonrpc`：JSON-RPC のバージョン - 現在対応しているのは バージョン`2.0` のみです。
- `method`：ETH APIメソッド。 [APIリファレンスを参照してください。](https://docs.alchemyapi.io/documentation/alchemy-api-reference/json-rpc)
- `params`: メソッドに渡すパラメータのリストです。
- `id`: このリクエストのIDです。 この値は応答によって返されるため、どのリクエストに対する応答なのかを追跡できます。

以下の例は、コマンドラインから現在のガス代の情報を取得するコードです。

```bash
curl https://eth-mainnet.alchemyapi.io/v2/demo \
-X POST \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0","method":"eth_gasPrice","params":[],"id":73}'
```

_**注意：** [https://eth-mainnet.alchemyapi.io/v2/demo](https://eth-mainnet.alchemyapi.io/jsonrpc/demo)は、`https://eth-mainnet.alchemyapi.io/v2/**your-api-key` など、あなた自身のAPIキーと置き換えてください。_

**出力：**

```json
{ "id": 73,"jsonrpc": "2.0","result": "0x09184e72a000" // 10000000000000 }
```

## 4. Web3 クライアントを設定する {#set-up-your-web3-client}

**すでにクライアントをインストール済みの場合は、** 現在のノードプロバイダーのURLを、APIキーを含むAlchemyのURL（ `"https://eth-mainnet.alchemyapi.io/v2/your-api-key"`など）に変更します。

**_注意：_** 以下のスクリプトは、 コマンドラインで実行するのではなく、**ノードコンテキスト**または**ファイルに保存した形で**実行する必要があります。 Nodeまたはnpmがインストールされていない場合は、[Mac用設定ガイド](https://app.gitbook.com/@alchemyapi/s/alchemy/guides/alchemy-for-macs) をご覧ください。

Alchemyと統合可能な[Web3ライブラリ](https://docs.alchemyapi.io/guides/getting-started#other-web3-libraries)は無数に存在しますが、このチュートリアルでは、Alchemyとシームレスに動作するように構築・設定されたweb3.jsの完全互換版である[Alchemy Web3](https://docs.alchemy.com/reference/api-overview)をお勧めします。 Alchemy Web3は、自動リトライや WebScoket に対する充実したサポートなどの利点を持っています。

Alchemy Web3.jsをインストールするには、 **プロジェクトディレクトリに移動して**、以下を実行します。

**Yarnの場合：**

```
yarn add @alch/alchemy-web3
```

**NPMの場合：**

```
npm install @alch/alchemy-web3
```

Alchemyのノードインフラとやり取りするには、Node.jsで実行するか、JavaScriptファイルに以下の行を追加します：

```js
const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(
  "https://eth-mainnet.alchemyapi.io/v2/your-api-key"
)
```

## 5. はじめてのWeb3スクリプトを作成しましょう！ {#write-your-first-web3-script}

それではさっそく、実際にweb3のプログラミングを始めましょう。まずは、イーサリアム・メインネットにおける最新のブロック番号を出力する簡単なスクリプトを作成します。

**1. すでに実行していない場合、ターミナルで新規のプロジェクトディレクトリを作成し、cdコマンドで移動します。**

```
mkdir web3-example
cd web3-example
```

**2. まだ実行していない場合、Alchemy web3（または任意の web3）の依存関係をプロジェクトにインストールします。**

```
npm install @alch/alchemy-web3
```

**3. `index.js`という名称のファイルを作成し、以下の内容を追加します：**

> 最終的には、`demo`をあなたのAlchemy HTTP API keyに置き換える必要があります。

```js
async function main() {
  const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
  const web3 = createAlchemyWeb3("https://eth-mainnet.alchemyapi.io/v2/demo")
  const blockNumber = await web3.eth.getBlockNumber()
  console.log("The latest block number is " + blockNumber)
}
main()
```

非同期関数についてよく理解していない場合は、 この[Mediumの記事](https://medium.com/better-programming/understanding-async-await-in-javascript-1d81bb079b2c)を参照してください。

**4. ノードを使用して、ターミナルで実行します。**

```
node index.js
```

**5. コンソールに、最新のブロック番号が出力されるはずです。**

```
The latest block number is 11043912
```

**よくできました！ おめでとうございます！ Alchemyを使用した最初のweb3スクリプトが完成しました 🎉**

次は何を学べば良いのかわからない場合は、 [「ハローワールド・スマートコントラクトガイド」](https://docs.alchemyapi.io/tutorials/hello-world-smart-contract)を使って、はじめてのスマートコントラクトのデプロイとSolidityプログラミングに挑戦するか、[ダッシュボード・デモアプリ](https://docs.alchemyapi.io/tutorials/demo-app)でダッシュボードに関するあなたの知識をテストしてみましょう！

_[Alchemyに無料登録し](https://auth.alchemyapi.io/signup)、[ドキュメンテーション](https://docs.alchemyapi.io/)を確認してください。また、[Twitter](https://twitter.com/AlchemyPlatform)_をフォローして、最新ニュースをチェックしてください。
