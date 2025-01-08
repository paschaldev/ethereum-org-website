---
title: Cómo visualizar su NFT en su cartera (parte 3/3 de la serie de tutoriales de NFT)
description: '¡Este tutorial describe cómo ver un NFT existente en MetaMask!'
author: "Sumi Mudgil"
tags:
  - "ERC-721"
  - "Alchemy"
  - "Solidity"
skill: beginner
lang: es
published: 2021-04-22
---

Este tutorial es la parte 3/3 en la serie de tutoriales NFT, donde vemos nuestros NFT recién acuñados. Sin embargo, puede utilizar el tutorial general para cualquier token ERC-721 usando MetaMask, incluso en la red principal o cualquier red de prueba. Si quiere aprender a acuñar su propio NFT en Ethereum, debería revisar la [parte 1 en Cómo escribir & desplegar un contrato inteligente NFT](/developers/tutorials/how-to-write-and-deploy-an-nft)!

¡Enhorabuena! Ha llegado a la parte más corta y sencilla de nuestra serie de tutoriales NFT sobre cómo ver su NFT recién acuñado en una cartera virtual. Utilizaremos MetaMask para este ejemplo, ya que es lo que usamos en las dos partes anteriores.

Como requisito previo, ya debería tener MetaMask en su móvil instalado e incluir la cuenta a la que ha acuñado su NFT: puede obtener la aplicación gratis para [iOS](https://apps.apple.com/us/app/metamask-blockchain-wallet/id1438144202) o [Android](https://play.google.com/store/apps/details?id=io.metamask&hl=en_US&gl=US).

## Paso 1: Configurar su red a Sepolia {#set-network-to-sepolia}

En la parte superior de la aplicación, pulse el botón «Wallet» (Cartera) después de lo cual se le pedirá que seleccione una red. Cómo nuestro NFT se minó en la red de Sepolia, tiene que seleccionar Sepolia como su red.

![Cómo establecer Sepolia como su red en la versión móvil de MetaMask](./goerliMetamask.gif)

## Paso 2: Añadir su coleccionable a MetaMask {#add-nft-to-metamask}

Una vez esté en la red Sepolia, seleccione la prestaña «Coleccionables» en la derecha y añada la dirección del contrato inteligente del NFT y la ID del token ERC-721 de su NFT, el cuál debería de poder encontrar en Etherscan, a partir del hash de su transacción del NFT implementado en la Parte II de nuestro tutorial.

![Cómo encontrar el hash de su transacción y el ID de token ERC-721](./findNFTEtherscan.png)

Puede que necesite actualizar un par de veces la pantalla para ver su NFT, ¡pero estará ahí <Emoji text="😄" size={1} />!

![Cómo subir su NFT a MetaMask](./findNFTMetamask.gif)

¡Enhorabuena! Ha acuñado satisfactoriamente un NFT, ¡y ahora puede verlo! ¡Estamos deseando ver cómo va a arrasar en el universo NFT!
