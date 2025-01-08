---
title: Cómo escribir & desplegar un NFT (parte 1/3 de la serie de tutoriales sobre NFT)
description: Este tutorial es la parte 1 de una serie sobre NFT que le indicará cómo escribir y desplegar un contrato inteligente de un token no fungible o NFT (ERC-721 token) paso a paso usando Ethereum y el sistema de archivos interplanetario (IPFS).
author: "Sumi Mudgil"
tags:
  - "ERC-721"
  - "Alchemy"
  - "Solidity"
  - "contratos inteligentes"
skill: beginner
lang: es
published: 2021-04-22
---

Con toda la atención pública hacia la cadena de bloques que han supuesto los NFT, ¡esta es una excelente ocasión para entender el furor que han causado, publicando su propio contrato NFT (ERC-721 Token) en la cadena de bloques de Ethereum.

Alchemy se enorgullece de promocionar a los protagonistas del espacio NFT, incluyendo Makersplace (que recientemente logró una venta récord de obras de arte digitales en Christie's por 69 millones de dólares), Dapper Labs (creadores de NBA Top Shot & Crypto Kitties), OpenSea (el mayor mercado de NFT del mundo), Zora, Super Rare, NFTfi, Foundation, Enjin, Origin Protocol e Immutable, entre muchos otros.

En este tutorial, recorreremos la creación e implementación de un contrato inteligente ERC-721 en la red de pruebas de Sepolia usando [MetaMask](https://metamask.io/), [Solidity](https://docs.soliditylang.org/en/v0.8.0/), [Hardhat](https://hardhat.org/), [Pinata](https://pinata.cloud/) y [Alchemy](https://alchemy.com/signup/eth) (no se preocupe si aún no entiende lo que significa esto, ¡lo explicaremos!).

En la parte 2 de este tutorial, explicaremos cómo podemos utilizar nuestro contrato inteligente para acuñar un NFT, y en la parte 3 explicaremos cómo ver su NFT en MetaMask.

Y, por supuesto, si le surge alguna duda en cualquier momento, no dude en consultar [Alchemy Discord](https://discord.gg/gWuC7zB) o visitar [los documentos de la API de NFT en Alchemy](https://docs.alchemy.com/alchemy/enhanced-apis/nft-api)!

## Paso 1: Conectarse a la red Ethereum {#connect-to-ethereum}

Hay muchas maneras de hacer peticiones a la cadena de bloques Ethereum, pero para simplificarnos la vida, usaremos una cuenta gratuita en [Alchemy](https://alchemy.com/signup/eth), una plataforma de desarrollo de cadena de bloques y API que nos permite comunicarnos con la cadena Ethereum sin tener que ejecutar nuestros propios nodos.

En este tutorial, también aprovecharemos las herramientas de desarrollo de Alchemy para monitorizar y analizar lo que está ocurriendo dentro de nuestro despliegue de contratos inteligentes. Si aún no tiene una cuenta de Alchemy, puede registrarse gratis en [aquí](https://alchemy.com/signup/eth).

## Paso 2: Crear su aplicación (y llave API) {#make-api-key}

Una vez que haya creado una cuenta de Alchemy, puede generar una clave de API creando una aplicación. Esto nos permitirá realizar solicitudes a la red de pruebas de Sepolia. Consulte [esta guía](https://docs.alchemyapi.io/guides/choosing-a-network) si tiene curiosidad para saber más sobre redes de pruebas.

1. Navegue a la página «Crear App» en su tablero Alchemy pasando el cursor sobre «Apps» en la barra de navegación y haciendo clic en «Crear App».

![Crear su app](./create-your-app.png)

2. Dele un nombre a su aplicación (Nosotros elegimos «¡Mi primer NFT!»), incluya una breve descripción, seleccione «Ethereum» para la cadena y «Sepolia» para su red. Desde La Fusión, las otras redes de pruebas han quedado obsoletas.

![Configure y publíque su aplicación](./alchemy-explorer-sepolia.png)

3. ¡Haga clic en «Crear app» y eso es todo! Su aplicación debería aparecer en el tablero de abajo.

## Paso 3: Crear una cuenta Ethereum (dirección) {#create-eth-address}

Necesitamos una cuenta Ethereum para enviar y recibir transacciones. Para este tutorial, usaremos Metamask, una cartera virtual en el navegador usada para manejar la dirección de su cuenta Ethereum. Si quiere más información sobre cómo funcionan las transacciones en Ethereum, eche un vistazo a [esta página](/developers/docs/transactions/) de Ethereum Foundation.

Puede descargar y crear una cuenta Metamask gratis [aquí](https://metamask.io/download.html). Cuando esté creando una cuenta, o si ya tiene una cuenta, asegurese de alternar a la «red de pruebas Sepolia» en la parte superior derecha (para que no estemos usando dinero real).

![Establezca Sepolia como su red](./metamask-goerli.png)

## Paso 4: Añadir ether de un faucet {#step-4-add-ether-from-a-faucet}

Para desarrollar nuestro contrato inteligente en la red de prueba, necesitaremos algunos ETH de prueba. Para conseguir ETH, puede ir a la [Faucet (o grifo) Sepolia](https://sepoliafaucet.com/) hospedado por Alchemy, iniciar sesión e introducir la dirección de su cuenta y luego hacer clic en «Send Me ETH» (Enviarme ETH). Deberían aparecer ETH en su cuenta de Metamask poco después.

## Paso 5: Comprobar su balance {#check-balance}

Para comprobar que nuestro balance está ahí, hagamos una solicitud de [eth_getBalance](https://docs.alchemyapi.io/alchemy/documentation/alchemy-api-reference/json-rpc#eth_getbalance) usando [la herramienta de composición de Alchemy](https://composer.alchemyapi.io?composer_state=%7B%22network%22%3A0%2C%22methodName%22%3A%22eth_getBalance%22%2C%22paramValues%22%3A%5B%22%22%2C%22latest%22%5D%7D). Esto devolverá la cantidad de ETH a nuestra cartera. Después de introducir la dirección de su cuenta de Metamask y hacer clic en «Send Request» (Enviar Solicitud), debería ver una respuesta como esta:

    `{"jsonrpc": "2.0", "id": 0, "result": "0xde0b6b3a7640000"}`

> **Nota** Este resultado es en wei, no ETH. Wei se usa como la denominación más pequeña de Ether. La conversión de wei a ETH es 1 eth = 10<sup>18</sup> wei. Así que si convertimos 0xde0b6b3a7640000 a decimal, obtenemos 1\*10<sup>18</sup> wei, que es igual a 1 ETH.

¡Fiu! Nuestro dinero de prueba está ahí sano y salvo.

## Paso 6: Iniciar su proyecto {#initialize-project}

Primero, necesitaremos crear una carpeta para nuestro proyecto. Vaya a su línea de comando y escriba:

    mkdir my-nft
    cd my-nft

Ahora que estamos dentro de nuestra carpeta de proyecto, usaremos npm init para iniciar el proyecto. Si no tiene instalado npm, siga [estas instrucciones](https://docs.alchemyapi.io/alchemy/guides/alchemy-for-macs#1-install-nodejs-and-npm) (también necesitaremos [Node.js](https://nodejs.org/en/download/), así que ¡descárgueselo también!).

    npm init

Realmente no importa la respuesta que dé a las preguntas de instalación, he aquí un ejemplo de cómo lo hicimos nosotros:

    package name: (my-nft)
    version: (1.0.0)
    description: My first NFT!
    entry point: (index.js)
    test command:
    git repository:
    keywords:
    author:
    license: (ISC)
    About to write to /Users/thesuperb1/Desktop/my-nft/package.json:
    
    {
      "name": "my-nft",
      "version": "1.0.0",
      "description": "My first NFT!",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "",
      "license": "ISC"
    }

Apruebe package.json y ¡ya puede comenzar!

## Paso 7: Instalar [Hardhat](https://hardhat.org/getting-started/#overview) {#install-hardhat}

Hardhat es un entorno de desarrollo para compilar, implementar, probar y depurar su software de Ethereum. Ayuda a los desarrolladores cuando crean contratos inteligentes y dApps localmente antes de la implementación en la cadena real.

Dentro de nuestro proyecto my-nft, ejecute:

    npm install --save-dev hardhat

Revise esta página para obtener más información acerca de las [intrucciones de instalación](https://hardhat.org/getting-started/#overview).

## Paso 8: Crear proyecto Hardhat {#create-hardhat-project}

Dentro de la carpeta de nuestro proyecto, ejecute:

    npx hardhat

Debería aparecer un mensaje de bienvenida y la opción de seleccionar lo que desee hacer. Seleccione «create an empty hardhat.config.js»:

    888    888                      888 888               888
    888    888                      888 888               888
    888    888                      888 888               888
    8888888888  8888b.  888d888 .d88888 88888b.   8888b.  888888
    888    888     "88b 888P"  d88" 888 888 "88b     "88b 888
    888    888 .d888888 888    888  888 888  888 .d888888 888
    888    888 888  888 888    Y88b 888 888  888 888  888 Y88b.
    888    888 "Y888888 888     "Y88888 888  888 "Y888888  "Y888
    👷 Welcome to Hardhat v2.0.11 👷‍
    ? What do you want to do? …
    Create a sample project
    ❯ Create an empty hardhat.config.js
    Quit

Esta acción nos creará un archivo hardhat.config.js, que es donde especificaremos todos los ajustes para nuestro proyecto (en el paso 13).

## Paso 9: Añadir carpetas de proyecto {#add-project-folders}

Para mantener nuestro proyecto organizado, crearemos dos nuevas carpetas. Navegue al directorio raíz de su proyecto en su línea de comandos y escriba:

    mkdir contracts
    mkdir scripts

- contratos/es donde guardaremos nuestro código de contrato inteligente NFT

- scripts/ es donde mantendremos scripts para desplegar e interactuar con nuestro contrato inteligente

## Paso 10: Escribir nuestro contrato {#write-contract}

Ahora que nuestro entorno está configurado, es hora de dedicarse a cosas más emocionantes, como por ejemplo, _¡escribir nuestro código de contrato inteligente!_

Abra el proyecto my-nft en su editor favorito (a nosotros nos gusta [VSCode](https://code.visualstudio.com/)). Los contratos inteligentes están escritos en un lenguaje llamado Solidity que es el que utilizaremos para escribir nuestro contrato inteligente MyNFT.sol

1. Vaya a la carpeta `contratos` y cree un nuevo archivo llamado MyNFT.sol

2. A continuación se muestra nuestro código NFT de contrato inteligente, el cual se basa en la implementación ERC-721 de la biblioteca [OpenZeppelin](https://docs.openzeppelin.com/contracts/3.x/erc721). Copie y pegue el contenido de abajo en su archivo MyNFT.sol.

   ```solidity
   //Contract based on [https://docs.openzeppelin.com/contracts/3.x/erc721](https://docs.openzeppelin.com/contracts/3.x/erc721)
   // SPDX-License-Identifier: MIT
   pragma solidity ^0.8.0;

   import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
   import "@openzeppelin/contracts/utils/Counters.sol";
   import "@openzeppelin/contracts/access/Ownable.sol";
   import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

   contract MyNFT is ERC721URIStorage, Ownable {
       using Counters for Counters.Counter;
       Counters.Counter private _tokenIds;

       constructor() ERC721("MyNFT", "NFT") {}

       function mintNFT(address recipient, string memory tokenURI)
           public onlyOwner
           returns (uint256)
       {
           _tokenIds.increment();

           uint256 newItemId = _tokenIds.current();
           _mint(recipient, newItemId);
           _setTokenURI(newItemId, tokenURI);

           return newItemId;
       }
   }
   ```

3. Como estamos heredando clases de la biblioteca de contratos de OpenZeppelin, en la línea de comandos, ejecute `npm install @openzeppelin/contracts` para instalar la biblioteca en nuestra carpeta.

Entonces, ¿qué _hace_ exactamente este código? Desglosémoslo, línea por línea.

En la parte superior de nuestro contrato inteligente, importamos tres clases de contrato inteligente de [OpenZeppelin](https://openzeppelin.com/):

- @openzeppelin/contracts/token/ERC721/ERC721.sol contiene la implementación del estándar ERC-721, que nuestro contrato NFT heredará. (Para ser un NFT válido, su contrato inteligente debe implementar todos los métodos del estándar ERC-721.) Para obtener más información sobre las funciones ERC-721 heredadas, consulte la definición de interfaz [aquí](https://eips.ethereum.org/EIPS/eip-721).

- @openzeppelin/contracts/utils/Counters.sol proporciona contadores que sólo pueden aumentar o disminuir un valor. Nuestro contrato inteligente utiliza un contador para hacer un seguimiento del número total de NFT acuñados y establecer el ID único en nuestro nuevo NFT. (A cada NFT acuñado usando un contrato inteligente se le debe asignar un identificador único—aquí nuestro identificador único sólo está determinado por el número total de NFT en existencia. Por ejemplo, el primer NFT que acuñamos con nuestro contrato inteligente tiene «1» por ID, nuestro segundo NFT tiene «2», etc.)

- @openzeppelin/contracts/access/Ownable.sol establece un [control de acceso](https://docs.openzeppelin.com/contracts/3.x/access-control) en nuestro contrato inteligente, por lo que solo el propietario del contrato inteligente (usted) puede acuñar NFT. (Nota, incluir el control de acceso es totalmente una preferencia. Si quiere que alguien pueda acuñar un NFT usando su contrato inteligente, elimine la palabra «Ownable» [apropiable] en la línea 10 y «onlyOwner» [solo el propietario] en la línea 17.)

Después de nuestras declaraciones de importación, tenemos nuestro contrato inteligente NFT personalizado, que es sorprendentemente corto, ¡sólo contiene un contador, un constructor y una sola función! Esto es gracias a nuestros contratos de OpenZeppelin heredados, los cuales implementan la mayoría de los métodos que necesitamos para crear un NFT, como `ownerOf` (dueño de) que indica el dueño del NFT, y `transferFrom` (transferir desde), que transfiere la propiedad del NFT de una cuenta a otra.

En nuestro constructor ERC-721, notará que pasamos 2 cadenas, «MyNFT» y «NFT». La primera variable es el nombre del contrato inteligente, y la segunda es su símbolo. ¡Puede darle el nombre que quiera a cada una de estas variables!

Por último, tenemos nuestra función `mintNFT(address recipient, string memory tokenURI)` que nos permite acuñar un NFT. Notará que esta función toma dos variables:

- `address recipient` especifica la dirección que recibirá su NFT recién acuñado

- `string memory tokenURI` es una cadena que debe resolver un documento JSON que describe los metadatos de NFT. Los metadatos de un NFT es realmente lo que lo lleva a la vida, permitiéndole tener características configurables, como el nombre, descripción, imagen y otros atributos. En la parte 2 de este tutorial, describiremos cómo configurar estos metadatos.

`mintNFT` activa algunos métodos de la biblioteca ERC-721 heredada, y en última instancia muestra un número que representa la ID del NFT recién acuñado.

## Paso 11: Conectar MetaMask & Alchemy a su proyecto {#connect-metamask-and-alchemy}

Ahora que hemos creado una cartera de MetaMask, una cuenta de Alchemy y hemos escrito nuestro contrato inteligente, es hora de conectarlos a los tres.

Cada transacción enviada desde su billetera virtual requiere una firma utilizando su clave privada única. Para proporcionar este permiso a nuestro programa, podemos almacenar de manera segura nuestra clave privada (y clave Alchemy API) en un archivo de entorno.

Si quiere ahondar sobre el envío de transacciones, consulte [este tutorial](/developers/tutorials/sending-transactions-using-web3-and-alchemy/) sobre el envío de transacciones usando web3.

Primero, instale el paquete dotenv en su directorio de proyecto:

    npm install dotenv --save

Después, cree un archivo `.env` en el directorio raíz de nuestro proyecto, y añádale la llave inteligente de Metamask y la API URL de HTTP Alchemy.

- Siga [estas instrucciones](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key) para exportar tu clave privada desde MetaMask

- Vea las indicaciones siguientes para obtener la URL de la API de Alchemy HTTP y cópiela en su portapapeles

![Copie el URL de su API Alchemy](./copy-alchemy-api-url.gif)

Su `.env` debería ser parecido a:

    API_URL="https://eth-sepolia.g.alchemy.com/v2/your-api-key"
    PRIVATE_KEY="your-metamask-private-key"

Para conectarlos a nuestro código, haremos referencia a estas variables en nuestro archivo hardhat.config.js en el paso 13.

<EnvWarningBanner />

## Paso 12: Instalar Ethers.js {#install-ethers}

Ethers.js es una biblioteca que facilita la interacción y la realización de solicitudes a Ethereum agrupando [métodos JSON-RPC estándar](/developers/docs/apis/json-rpc/) con métodos más fáciles para el usuario.

Hardhat hace que integrar [plugins](https://hardhat.org/plugins/) sea ultrafácil para herramientas adicionales y funcionalidades ampliadas. Aprovecharemos el [plugin Ethers](https://hardhat.org/plugins/nomiclabs-hardhat-ethers.html) para la implementación de contratos ([Ethers.js](https://github.com/ethers-io/ethers.js/) tiene algunos métodos de implementación de contratos ultralimpios).

En el directorio de su proyecto, teclee:

    npm install --save-dev @nomiclabs/hardhat-ethers ethers@^5.0.0

También necesitaremos ethers en nuestro hardhat.config.js en el siguiente paso.

## Paso 13: Actualizar hardhat.config.js {#update-hardhat-config}

Hasta el momento, hemos añadido varias dependencias y plugins, ahora necesitamos actualizar hardhat.config.js para que nuestro proyecto los reconozca.

Actualice su hardhat.config.js para que tenga este aspecto:

    /**
    * @type import('hardhat/config').HardhatUserConfig
    */
    require('dotenv').config();
    require("@nomiclabs/hardhat-ethers");
    const { API_URL, PRIVATE_KEY } = process.env;
    module.exports = {
       solidity: "0.8.1",
       defaultNetwork: "sepolia",
       networks: {
          hardhat: {},
          sepolia: {
             url: API_URL,
             accounts: [`0x${PRIVATE_KEY}`]
          }
       },
    }

## Paso 14: Compilar nuestro contrato {#compile-contract}

Para asegurarnos de que todo funciona correctamente hasta ahora, compilemos nuestro contrato. La tarea de compilación es una de las tareas de Hardhat incorporadas.

Desde la linea de comandos, ejecute:

    npx hardhat compile

Puede que reciba una advertencia sobre el identificador de licencia SPDX no proporcionado en el archivo fuente, pero no se preocupe si la recibe, ¡esperemos que todo lo demás esté correcto! Si no es así, siempre puede escribir un mensaje en [Alchemy discord](https://discord.gg/u72VCg3).

## Paso 15: Escribir nuestro script de despliegue {#write-deploy}

Ahora que nuestro contrato está escrito y nuestro archivo de configuración está listo, es momento de escribir nuestro script de implementación del contrato.

Vaya a la carpeta `scripts/` y cree un nuevo archivo llamado `deploy.js`, añadiendo los siguientes contenidos:

```js
async function main() {
  const MyNFT = await ethers.getContractFactory("MyNFT")

  // Start deployment, returning a promise that resolves to a contract object
  const myNFT = await MyNFT.deploy()
  await myNFT.deployed()
  console.log("Contract deployed to address:", myNFT.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
```

Hardhat hace un trabajo increíble al explicar lo que hace cada una de estas líneas de código en su [tutorial de contratos](https://hardhat.org/tutorial/testing-contracts.html#writing-tests), aquí hemos asumido sus explicaciones.

    const MyNFT = await ethers.getContractFactory("MyNFT");

Un ContractFactory en ethers.js es una abstracción utilizada para implementar nuevos contratos inteligentes, por lo que MyNFT aquí es una fábrica para las instancias de nuestro contrato NFT. Cuando se utiliza el plugin ContractFactory y las instancias de contrato del plugin de hardhat-ethers están conectadas al primer firmante por defecto.

    const myNFT = await MyNFT.deploy();

Ejecutar un despliegue() en un ContractFactory iniciará el despliegue y devolverá una Promesa que se resuelva a un Contrato. Este es el objeto que tiene un método para cada una de nuestras funciones de contrato inteligente.

## Paso 16: Desplegar nuestro contrato {#deploy-contract}

¡Por fin estamos listos para desplegar nuestro contrato inteligente! Navegue de nuevo a la raíz del directorio de su proyecto, y en la línea de comando ejecute:

    npx hardhat --network sepolia run scripts/deploy.js

Debería mostrarse algo parecido a esto:

    Contract deployed to address: 0x4C5266cCc4b3F426965d2f51b6D910325a0E7650

Si vamos a [Sepolia etherscan](https://sepolia.etherscan.io/) y buscamos nuestra dirección de contrato deberíamos de poder ver que se ha implementado de forma exitosa. Si no puede verlo inmediatamente, por favor espere unos instantes, ya que puede llevar algún tiempo. El objeto de la transacción tendrá un aspecto parecido a esto:

![Visualice la dirección de su transacción en Etherscan](./etherscan-sepoila-contract-creation.png)

La dirección de origen debe coincidir con la dirección de su cuenta de MetaMask y la dirección de destino dirá «Contract Creation» (Creación de contrato). Si hacemos clic en la transacción, veremos la dirección de nuestro contrato en la casilla To (para):

![Ver la dirección de su contrato en Etherscan](./etherscan-sepolia-tx-details.png)

¡Síííííí! ¡Acaba de implementar su contrato inteligente NFT en la cadena de Ethereum (red de pruebas)!

Para entender lo que está pasando internamente, vayamos a la pestaña de Explorer en nuestro [panel Alchemy](https://dashboard.alchemyapi.io/explorer). Si dispone de varias aplicaciones de Alchemy, asegúrese de filtrar por aplicación y seleccione «MyNFT».

![Ver las activaciones realizadas internamente con el panel del explorador de Alchemy](./alchemy-explorer-goerli.png)

Aquí verá un puñado de activaciones JSON-RPC que Hardhat/Ethers ha realizado internamente cuando ejecutamos a la función .deploy(). Dos cosas importantes que se deben recalcar aquí son [eth_sendRawTransaction](/developers/docs/apis/json-rpc/#eth_sendrawtransaction), que es la solicitud para escribir realmente nuestro contrato inteligente en la cadena Sepolia, y [eth_getTransactionByHash](/developers/docs/apis/json-rpc/#eth_gettransactionbyhash), que es una solicitud para leer información sobre nuestra transacción dado el hash (un patrón típico al enviar transacciones). Para ahondar más sobre el envío de transacciones, consulte este tutorial en [Envío de transacciones mediante Web3](/developers/tutorials/sending-transactions-using-web3-and-alchemy/).

Y así concluye la parte 1 de este tutorial. En la [parte 2,  interactuaremos con nuestro contrato inteligente acuñando un NFT](/developers/tutorials/how-to-mint-an-nft/), y en la [parte 3 le enseñaremos a ver su NFT en su cartera de Ethereum](/developers/tutorials/how-to-view-nft-in-metamask/).
