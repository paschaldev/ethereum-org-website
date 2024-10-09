---
title: Diversidade dos clientes
description: Uma explicação de alto nível sobre a importância da diversidade de clientes do Ethereum.
lang: pt-br
sidebarDepth: 2
---

O comportamento de um nó Ethereum é controlado pelo software do cliente que ele executa. Existem vários clientes Ethereum em nível de produção, cada um desenvolvido e mantido em diferentes idiomas por equipes separadas. Os clientes são construídos para uma especificação comum que garante que os clientes se comuniquem perfeitamente entre si e tenham a mesma funcionalidade e forneçam uma experiência de usuário equivalente. No entanto, no momento, a distribuição de clientes entre os nós não é igual o suficiente para realizar essa fortificação de rede em todo o seu potencial. O ideal é que os usuários se dividam de forma aproximadamente igualitária entre os vários clientes para trazer o máximo de diversidade de clientes possível para a rede.

## Pré-requisitos {#prerequisites}

Se você ainda não entende o que são nós e clientes, confira [nós e clientes](/developers/docs/nodes-and-clients/). As camadas de [execução](/glossary/#execution-layer) e [consenso](/glossary/#consensus-layer) estão definidas no glossário.

## Por que existem vários clientes? {#why-multiple-clients}

Vários clientes desenvolvidos e mantidos de forma independente existem porque a diversidade do cliente torna a rede mais resiliente a ataques e bugs. Vários clientes são uma força única para o Ethereum – outras cadeias de blocos dependem da infalibilidade de um único cliente. No entanto, não basta simplesmente ter vários clientes disponíveis, eles têm que ser adotados pela comunidade e o total de nós ativos distribuídos de forma relativamente uniforme entre eles.

## Por que a diversidade de clientes é importante? {#client-diversity-importance}

Ter muitos clientes desenvolvidos e mantidos de forma independente é vital para a saúde de uma rede descentralizada. Vamos explorar as razões do porquê.

### Bugs {#bugs}

Um bug em um cliente individual é um risco menor para a rede ao representar uma minoria de nós Ethereum. Com uma distribuição aproximadamente uniforme de nós entre muitos clientes, a probabilidade de a maioria dos clientes sofrer de um problema compartilhado é pequena e, como resultado, a rede é mais robusta.

### Resiliência a ataques {#resilience}

A diversidade de clientes também oferece resiliência a ataques. Por exemplo, um ataque que [engana um determinado cliente](https://twitter.com/vdWijden/status/1437712249926393858) em um determinado ramo da cadeia, provavelmente não será bem-sucedido porque é improvável que outros clientes sejam explorados da mesma forma e a cadeia canônica permanece incorruptível. A baixa diversidade de clientes aumenta o risco associado a um hack no cliente dominante. A diversidade de clientes já provou ser uma defesa importante contra ataques maliciosos na rede, por exemplo, o ataque de negação de serviço do Shanghai em 2016 foi possível porque os invasores foram capazes de enganar o cliente dominante (Geth) para executar uma operação lenta de E/S de disco dezenas de milhares de vezes por bloco. Como clientes alternativos também estavam online e não compartilharam a vulnerabilidade, o Ethereum foi capaz de resistir ao ataque e continuar operando enquanto a vulnerabilidade no Geth foi corrigida.

### Finalidade da prova de participação {#finality}

Um erro em um cliente de consenso com mais de 33% dos nós Ethereum poderia impedir a finalização da camada de consenso, e isso deixaria os utilizadores em dúvida com respeito à probabilidade de as transações não serem revertidas ou alteradas em algum momento. Isso seria muito problemático para muitos dos aplicativos construídos em cima do Ethereum, particularmente o DeFi.

<Emoji text="🚨" className="mr-4" /> Pior ainda, um bug crítico em um cliente com uma maioria de dois terços poderia fazer com que a cadeia <a href="https://www.symphonious.net/2021/09/23/what-happens-if-beacon-chain -consensus-fails/" target="_blank">se dividisse e finalizasse incorretamente</a>, gerando um grande conjunto de validadores que ficam presos em uma cadeia inválida. Se quiserem voltar a integrar à cadeia correta, esses validadores enfrentam cortes ou uma lenta e cara retirada e reativação voluntária. A magnitude de uma escala de remoção com o número de nós culpáveis com uma maioria de dois terços reduzido ao máximo (32 ETH).

Embora estes sejam cenários improváveis, o ecossistema Ethereum pode mitigar seus riscos nivelando a distribuição de clientes entre os nós ativos. Idealmente, nenhum cliente de consenso chegaria a uma participação de 33% dos nós totais.

### Responsabilidade compartilhada {#responsibility}

Há também um custo humano para ter a maioria dos clientes. Isso coloca excesso de tensão e responsabilidade em uma pequena equipe de desenvolvimento. Quanto menor a diversidade de clientes, maior a carga de responsabilidade para os desenvolvedores que mantêm a maioria dos clientes. Promover essa responsabilidade em várias equipes é bom tanto para a saúde da rede de nós do Ethereum quanto para sua rede de pessoas.

## Diversidade do cliente atual {#current-client-diversity}

![Gráfico de pizza mostrando a diversidade do cliente](./client-diversity.png) _Dados do diagrama de [ethernodes.org](https://ethernodes.org) e [clientdiversity.org](https://clientdiversity.org/)_

Os dois gráficos de pizza acima mostram imagens da diversidade atual do cliente para as camadas de execução e consenso (no momento da escrita em janeiro de 2022). A camada de execução é dominada esmagadoramente por [Geth](https://geth.ethereum.org/), com [Open Ethereum](https://openethereum.github.io/) a um segundo de distância, [Erigon](https://github.com/ledgerwatch/erigon) em terceiro e [Nethermind](https://nethermind.io/) em quarto, com outros clientes compostos por menos de 1% da rede. O cliente mais comumente usado na camada de consenso – [Prysm](https://prysmaticlabs.com/#projects) – não é tão dominante quanto o Geth, mas ainda representa mais de 60% da rede. [Lighthouse](https://lighthouse.sigmaprime.io/) e [Teku](https://consensys.net/knowledge-base/ethereum-2/teku/) compõem ~20% e ~14% respectivamente, e outros clientes são raramente usados.

Os dados da camada de execução foram obtidos da [Ethernodes](https://ethernodes.org) em 23/01/2022. Os dados para clientes de consenso foram obtidos de [Michael Sproul](https://github.com/sigp/blockprint). Os dados dos clientes de consenso são mais difíceis de obter porque os clientes da camada de consenso nem sempre têm traços inequívocos que possam ser utilizados para identificá-los. Os dados foram gerados usando um algoritmo de classificação que confunde às vezes alguns dos clientes minoritários (consulte [aqui](https://twitter.com/sproulM_/status/1440512518242197516) para obter mais detalhes). No diagrama acima, essas classificações ambíguas são tratadas com um rótulo (por exemplo, Nimbus/Teku). No entanto, é claro que a maior parte da rede está executando o Prysm. Os dados são um retrato sobre um conjunto fixo de blocos (neste caso, blocos Beacon nos espaços 2048001 a 2164916) e o domínio do Prysm às vezes foi maior, excedendo 68%. Apesar de serem apenas capturas, os valores no diagrama fornecem uma boa noção geral do estado atual da diversidade do cliente.

Os dados da diversidade do cliente atualizados para a camada de consenso agora estão disponíveis em [clientdiversity.org](https://clientdiversity.org/).

## Camada de execução {#execution-layer}

Até agora, a conversação em torno da diversidade do cliente tem se concentrado principalmente na camada de consenso. No entanto, o cliente de execução [Geth](https://geth.ethereum.org) atualmente representa cerca de 85% de todos os nós. Essa porcentagem é problemática pelos mesmos motivos dos clientes de consenso. Por exemplo, um bug no Geth afetando a manipulação de transações ou a construção de cargas de execução pode fazer com que clientes de consenso finalizem transações problemáticas ou com bugs. Portanto, o Ethereum seria mais saudável com uma distribuição mais uniforme dos clientes de execução, idealmente sem nenhum cliente representando mais de 33% da rede.

## Use um cliente minoritário {#use-minority-client}

Endereçar a diversidade do cliente requer mais do que usuários individuais para escolher clientes minoritários – requer pools de mineração/validadores e instituições como os principais dapps e exchanges para mudar também os clientes. No entanto, todos os usuários podem fazer sua parte para reparar o desequilíbrio atual e normalizar o uso de todo o software Ethereum disponível. Após A Fusão, todos os operadores de nó serão obrigados a executar um cliente de execução e um cliente de consenso. Escolher combinações dos clientes sugeridos abaixo ajudará a aumentar a diversidade do cliente.

### Clientes de execução {#execution-clients}

[Besu](https://www.hyperledger.org/use/besu)

[Nethermind](https://downloads.nethermind.io/)

[Erigon](https://github.com/ledgerwatch/erigon)

[Go-Ethereum](https://geth.ethereum.org/)

### Clientes de consenso {#consensus-clients}

[Nimbus](https://nimbus.team/)

[Lighthouse](https://github.com/sigp/lighthouse)

[Teku](https://consensys.net/knowledge-base/ethereum-2/teku/)

[Lodestar](https://github.com/ChainSafe/lodestar)

[Prysm](https://docs.prylabs.network/docs/getting-started)

Os usuários técnicos podem ajudar a acelerar esse processo escrevendo mais tutoriais e documentações para clientes minoritários e encorajando seus pares operacionais de nó a migrar para longe dos clientes dominantes. Guias para mudar para um cliente de consenso minoritário estão disponíveis em [clientdiversity.org](https://clientdiversity.org/).

## Painéis de diversidade de clientes {#client-diversity-dashboards}

Vários painéis fornecem estatísticas de diversidade de cliente em tempo real para a camada de execução e consenso.

**Camada de consenso:**

- [Rated.network](https://www.rated.network/)
- [clientdiversity.org](https://clientdiversity.org/) **Camada de execução:**

- [supermajority.info](https://supermajority.info//)
- [Ethernodes](https://ethernodes.org/)

## Leitura adicional {#further-reading}

- [Diversidade de clientes na camada de consenso do Ethereum](https://mirror.xyz/jmcook.eth/S7ONEka_0RgtKTZ3-dakPmAHQNPvuj15nh0YGKPFriA)
- [A Fusão do Ethereume: execute o cliente majoritário por sua conta e risco!](https://dankradfeist.de/ethereum/2022/03/24/run-the-majority-client-at-your-own-peril.html) – _Dankrad Fest, 24 de março de 2022_
- [Importância da diversidade de cliente](https://our.status.im/the-importance-of-client-diversity/)
- [Lista dos serviços de nós Ethereum](https://ethereumnodes.com/)
- ["Cinco porquês" do problema da diversidade de clientes](https://notes.ethereum.org/@afhGjrKfTKmksTOtqhB9RQ/BJGj7uh08)
- [Diversidade do Ethereum e como resolvê-la (YouTube)](https://www.youtube.com/watch?v=1hZgCaiqwfU)
- [clientdiversity.org](https://clientdiversity.org/)

## Tópicos relacionados {#related-topics}

- [Executando um nó Ethereum](/run-a-node/)
- [Nós e clientes](/developers/docs/nodes-and-clients/)
