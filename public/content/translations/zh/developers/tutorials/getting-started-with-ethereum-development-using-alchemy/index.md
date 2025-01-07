---
title: 以太坊开发入门
description: "这是一份针对以太坊开发入门的初学者指南。 我们将带领你从启动一个 API 终端节点开始，到提出一个命令行请求，再到编写你的第一个 web3 脚本。 无需区块链的开发经验！"
author: "Elan Halpern"
tags:
  - "javascript"
  - "ethers.js"
  - "节点"
  - "querying"
  - "alchemy"
skill: beginner
lang: zh
published: 2020-10-30
source: Medium
sourceUrl: https://medium.com/alchemy-api/getting-started-with-ethereum-development-using-alchemy-c3d6a45c567f
---

![以太坊和Alchemy徽标](./ethereum-alchemy.png)

这是一份关于以太坊开发的初学者指南。 在本教程中，我们将使用[ Alchemy](https://alchemyapi.io/)，这是一个领先的区块链开发者平台，为 70% 的顶级区块链应用程序（包括 Maker、0x、MyEtherWallet、Dharma 和 Kyber）的数百万用户提供支持。 Alchemy 使我们能够访问以太坊链上的 API 端点，这样我们就可以读写交易。

我们将带你注册Alchemy来编写你的第一个web3 脚本！ 无需区块链的开发经验！

## 1. 注册免费Alchemy帐户 {#sign-up-for-a-free-alchemy-account}

创建 Alchemy 帐户很容易，[点击此处免费注册](https://auth.alchemyapi.io/signup)。

## 2. 创建一个Alchemy应用程序 {#create-an-alchemy-app}

为了与以太坊通信，以及为了使用 Alchemy 的产品，你需要一个 API 密钥来验证你的请求。

你可以通过[仪表板](http://dashboard.alchemyapi.io/)创建API密钥。 要创建一个新密钥，导航到如下所示的“Create App”：

特别感谢[_ShapeShift_](https://shapeshift.com/)_让我们展示他们的仪表板！_

![Alchemy仪表板](./alchemy-dashboard.png)

填写“Create App”下的详细信息以获取你的新密钥。 在此处还可以看到你以前创建的应用以及你的团队创建的应用。 通过点击任何应用的“View Key”来查看现有密钥。

![使用Alchemy创建应用程序的截图](./create-app.png)

你也可以通过将鼠标悬停在“Apps”上并选择一个来获取现有API密钥。 你可以在这里“查看密钥”，以及“编辑应用程序”来特定域名加入白名单、查看几个开发者工具，并查看分析。

![显示用户如何获取API密钥的GIF图](./pull-api-keys.gif)

## 3. 在命令行中发送请求 {#make-a-request-from-the-command-line}

使用JSON-RPC和curl通过Alchemy与以太坊区块链交互。

对于手动请求，我们建议通过`JSON RPC`发送`POST`请求来进行交互。 只需传入`Content-Type: application/json`标头和查询作为`POST`主体，具有以下字段：

- `jsonrpc`: JSON-RPC版本，目前只支持`2.0`。
- `method`：ETH API方法。 [请参阅API参考。](https://docs.alchemyapi.io/documentation/alchemy-api-reference/json-rpc)
- `params`：要传递到方法的参数列表。
- `id`：请求的ID。 将通过响应返回，这样就可以跟踪一个响应属于哪个请求。

这是一个可通过命令行运行的示例，用于查询当前燃气价格：

```bash
curl https://eth-mainnet.alchemyapi.io/v2/demo \
-X POST \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0","method":"eth_gasPrice","params":[],"id":73}'
```

_**注意：**将 [https://eth-mainnet.alchemyapi.io/v2/demo](https://eth-mainnet.alchemyapi.io/jsonrpc/demo) 替换成你自己的应用程序接口密钥 `https://eth-mainnet.alchemyapi.io/v2/**your-api-key`。_

**结果：**

```json
{ "id": 73,"jsonrpc": "2.0","result": "0x09184e72a000" // 10000000000000 }
```

## 4. 设置Web3客户端 {#set-up-your-web3-client}

**如果你已有客户端，** 将你当前的节点提供商的 URL 更改为你的 API 密钥的 Alchemy URL： `“https://eth-mainnet.alchemyapi.io/v2/your-api-key”`

**_注意：_**下面的脚本需要在一个**节点环境**中运行或**保存到一个文件运行**，而不是通过命令行运行。 如果你尚未安装节点或npm ，请查看此适用于mac的快速设置指南。

许多 [Web3 库](https://docs.alchemyapi.io/guides/getting-started#other-web3-libraries)都可以和 Alchemy 集成。但是，我们建议使用 [Alchemy Web3](https://docs.alchemy.com/reference/api-overview)，它是 web3.js 的替代插件，可与 Alchemy 无缝协作。 这个库有很多优点，例如自动重试和可靠的WebSocket支持。

要安装 AlchemyWeb3.js，请**导航到项目目录**并运行：

**使用yarn：**



```
yarn add @alch/alchemy-web3
```


**使用NPM：**



```
npm install @alch/alchemy-web3
```


要与Alchemy的节点基础设施交互，请在NodeJS中运行或将其添加到JavaScript文件：



```js
const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(
  "https://eth-mainnet.alchemyapi.io/v2/your-api-key"
)
```




## 5. 编写你的第一个Web3脚本！ {#write-your-first-web3-script}

现在用一个小的web3编程来练习，我们将编写一个简单的脚本，用于打印出以太坊主网中最新的区块高度。

**1. 在终端中创建一个新的项目目录并通过 cd 命令进入该目录（如果尚未这样做）：**



```
mkdir web3-example
cd web3-example
```


**2. 在项目中安装 Alchemy Web3（或任何 Web3）依赖项（如果尚未这样做）：**



```
npm install @alch/alchemy-web3
```


**3. 创建一个名为 `index.js` 的文件并添加以下内容：**



> 最终应将`demo`替换为你的Alchemy HTTP API密钥 。



```js
async function main() {
  const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
  const web3 = createAlchemyWeb3("https://eth-mainnet.alchemyapi.io/v2/demo")
  const blockNumber = await web3.eth.getBlockNumber()
  console.log("The latest block number is " + blockNumber)
}
main()
```


不熟悉 async 函数？ 来看看这篇 [Medium 文章](https://medium.com/better-programming/understanding-async-await-in-javascript-1d81bb079b2c)。

**4. 使用节点在终端中运行该脚本**



```
node index.js
```


**5. 现在应该会在控制台中看到最新的区块编号输出结果！**



```
The latest block number is 11043912
```


**哇！ 恭喜！ 你刚刚使用 Alchemy 编写了你的第一个 Web3 脚本🎉**

不知道下一步该怎么做？ 尝试部署你的第一个智能合约，开始练习 Solidity 编程同时参阅我们的 [Hello World 智能合约指南](https://docs.alchemyapi.io/tutorials/hello-world-smart-contract)，或使用 [Dashboard Demo App](https://docs.alchemyapi.io/tutorials/demo-app) 测试你的仪表板知识！

免费_[注册 Alchemy](https://auth.alchemyapi.io/signup)，查看我们的[相关文档](https://docs.alchemyapi.io/)，并关注我们的 [Twitter](https://twitter.com/AlchemyPlatform)_ 了解最新消息。
