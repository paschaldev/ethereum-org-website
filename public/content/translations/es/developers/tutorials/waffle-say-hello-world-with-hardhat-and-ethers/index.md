---
title: "Tutorial de Waffle \"Hola, Mundo\" con hardhat y ethers"
description: Haga su primer proyecto de Waffle con hardhat y ethers.js
author: "MiZiet"
tags:
  - "waffle"
  - "contratos inteligentes"
  - "solidity"
  - "pruebas"
  - "hardhat"
  - "ethers.js"
skill: beginner
lang: es
published: 2020-10-16
---

En este tutorial de [Waffle](https://ethereum-waffle.readthedocs.io), aprenderemos cómo configurar un proyecto de contrato inteligente simple "Hola, Mundo" usando [hardhat](https://hardhat.org/) y [ethers](https://docs.ethers.io/v5/). Luego aprenderemos cómo añadir una nueva funcionalidad a nuestro contrato inteligente y cómo hacer pruebas con Waffle.

Empecemos por la creación de un nuevo proyecto:

```bash
yarn init
```

o

```bash
npm init
```

y la instalación de los paquetes necesarios:

```bash
yarn add -D hardhat @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai
```

o

```bash
npm install -D hardhat @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai
```

El siguiente paso es crear un proyecto de hardhat de muestra ejecutando `npx hardhat`.

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

Seleccione `Create a sample project`.

La estructura del proyecto debería verse así:

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

### Ahora hablemos de algunos de estos archivos: {#now-lets-talk}

- Greeter.sol: nuestro contrato inteligente escrito en solidity;

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

Nuestro contrato inteligente se puede dividir en tres partes:

1. constructor: donde declaramos una variable de tipo cadena llamada `greeting`;
2. función greet: una función que devolverá el `greeting` al ser invocada;
3. función setGreeting: una función que nos permite cambiar el valor de `greeting`.

- sample-test.js: nuestro archivo de pruebas

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

### El siguiente paso consiste en compilar nuestro contrato y ejecutar pruebas: {#compiling-and-testing}

Las pruebas de Waffle usan Mocha (un framework de pruebas) con Chai (una biblioteca de afirmaciones). Todo lo que tiene que hacer es ejecutar `npx hardhat test` y esperar a que aparezca el siguiente mensaje.

```bash
✓ Should return the new greeting once it's changed
```

### Todo se ve bien hasta ahora, vamos a añadir un poco más de complejidad a nuestro proyecto <Emoji text=":slightly_smiling_face:" size={1}/> {#adding-complexity}

Imagine una situación en la que alguien añade una cadena vacía como saludo. No sería un saludo cálido, ¿cierto?  
Asegurémonos de que eso no suceda:

Queremos usar `revert` de solidity cuando alguien pase una cadena vacía. Algo bueno es que podemos probar esta funcionalidad fácilmente con el emparejador de chai de Waffle `to.be.revertedWith()`.

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

Parece que nuestra nueva prueba no pasó:

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

Vamos a implementar esta funcionalidad en nuestro contrato inteligente:

```solidity
require(bytes(_greeting).length > 0, "Greeting should not be empty");
```

Ahora, nuestra función setGreeting se ve así:

```solidity
function setGreeting(string memory _greeting) public {
require(bytes(_greeting).length > 0, "Greeting should not be empty");
console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
greeting = _greeting;
}
```

Vamos a ejecutar pruebas de nuevo:

```bash
✓ Should return the new greeting once it's changed (1467ms)
✓ Should revert when passing an empty string (276ms)

2 passing (2s)
```

¡Felicidades! Lo logró :)

### Conclusión {#conclusion}

Hicimos un proyecto sencillo con Waffle, Hardhat y ethers.js. Aprendimos a crear un proyecto, añadir una prueba e implementar nuevas funcionalidades.

Para ver más excelentes emparejadores de chai para probar su contrato inteligente, consulte los [documentos oficiales de Waffle](https://ethereum-waffle.readthedocs.io/en/latest/matchers.html).
