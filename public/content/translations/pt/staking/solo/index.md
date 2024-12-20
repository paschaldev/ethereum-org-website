---
title: Efetuar o stake individual do seu ETH
description: Uma visão global de como começar a fazer staking individual do seu ETH
lang: pt
template: staking
emoji: ":money_with_wings:"
image: /images/staking/leslie-solo.png
alt: Leslie, o rinoceronte, no seu próprio chip de computador.
sidebarDepth: 2
summaryPoints:
  - Receba recompensas máximas diretamente do protocolo por manter o seu validador a funcionar corretamente e online
  - Opere hardware doméstico e contribua pessoalmente para a segurança e descentralização da rede Ethereum
  - Elimine a dependência e nunca abandone o controlo das chaves dos seus fundos
---

## O que é o staking individual? {#what-is-solo-staking}

O staking individual é o ato de [executar um nó Ethereum](/run-a-node/) ligado à Internet e depositar 32 ETH para ativar um [validador](#faq), dando-lhe a possibilidade de participar diretamente no consenso da rede.

O **Staking individual aumenta a descentralização da rede Ethereum**, tornando o Ethereum mais resistente à censura e robusto contra ataques. Outros métodos de staking podem não ajudar a rede da mesma forma. O staking individual é a melhor opção de staking para salvaguardar o seu Ethereum.

Um nó Ethereum é composto por um cliente da camada de execução (EL) e por um cliente da camada de consenso (CL). Estes clientes são programas que trabalham em conjunto, juntamente com um conjunto válido de chaves de assinatura, para verificar transacções e blocos, atestar o correto início da cadeia, agregar certificações e propor blocos.

Os stakers individuais são responsáveis pela operação do hardware necessário para executar esses clientes. Recomenda-se vivamente a utilização de um computador dedicado para este efeito, que pode ser operado a partir de casa - isto é extremamente benéfico para a saúde da rede.

Um staker individual recebe recompensas diretamente do protocolo por manter o seu validador a funcionar corretamente e online.

## Porquê criar o seu próprio staking? {#why-stake-solo}

O staking individual acarreta mais responsabilidades, mas proporciona-lhe o máximo controlo sobre os seus fundos e a configuração do staking.

<CardGrid>
  <Card title="Ganhe ETH grátis" emoji="💸" description="Earn ETH-denominated rewards directly from the protocol when your validator is online, without any middlemen taking a cut." />
  <Card title="Controlo total" emoji="🎛️" description="Keep your own keys. Choose the combination of clients and hardware that allows you to minimize your risk and best contribute to the health and security of the network. Third-party staking services make these decisions for you, and they don't always make the safest choices." />
  <Card title="Sistemas de Segurança de Rede" emoji="🔐" description="Solo staking is the most impactful way to stake. By running a validator on your own hardware at home, you strengthen the robustness, decentralization, and security of the Ethereum protocol." />
</CardGrid>

## Considerações a ter em conta antes de criar o seu próprio staking {#considerations-before-staking-solo}

Por muito que desejássemos que o staking individual fosse acessível e isento de riscos para todos, esta não é a realidade. Há algumas considerações práticas e sérias a ter em conta antes de optar por colocar o seu ETH individualmente.

<InfoGrid>
<ExpandableCard title="Leitura obrigatória" eventCategory="SoloStaking" eventName="clicked required reading">
Ao executar o seu próprio nó, deve dedicar algum tempo a aprender a utilizar o software que escolheu. Isto pressupõe ler a documentação relevante e estar atento aos canais de comunicação dessas equipas de desenvolvimento.

Quanto mais compreender o software que está a executar e como funciona a prova de participação, menos arriscará como staker e mais facilmente resolverá quaisquer problemas que possam surgir ao longo do caminho como operador de nó.
</ExpandableCard>

<ExpandableCard title="Confortável com computadores" eventCategory="SoloStaking" eventName="clicked comfortable with computers">
A configuração de nós requer um nível razoável de familiaridade com o trabalho com computadores, embora as novas ferramentas estejam a facilitar este processo ao longo do tempo. A familiaridade com a interface de linha de comandos é útil, mas já não é estritamente necessária.

Também requer uma configuração de hardware bastante básica e algum conhecimento das especificações mínimas recomendadas.
</ExpandableCard>

<ExpandableCard title="Gestão segura de chaves" eventCategory="SoloStaking" eventName="clicked secure key management">
Tal como as chaves privadas protegem o seu endereço Ethereum, terá de gerar chaves especificamente para o seu validador. Deve compreender como manter quaisquer seed phrases ou chaves privadas seguras e protegidas.{' '}

<a href="/security/">Segurança do Ethereum e prevenção de fraudes</a>
</ExpandableCard>

<ExpandableCard title="Maintenance" eventCategory="SoloStaking" eventName="clicked maintenance">
Ocasionalmente, o hardware avaria, as ligações de rede falham e o software do cliente precisa de ser eventualmente atualizado. A manutenção dos nós é inevitável e, ocasionalmente, exigirá a sua intervenção. Deve certificar-se de que está a par de quaisquer atualizações de rede programadas ou de outras atualizações críticas de clientes.
</ExpandableCard>

<ExpandableCard title="Tempo de atividade fiável" eventCategory="SoloStaking" eventName="clicked reliable uptime">
As suas recompensas são proporcionais ao tempo que o seu validador está online e a atestar corretamente. O tempo de inatividade incorre em penalizações proporcionais ao número de outros validadores que estão offline ao mesmo tempo, mas <a href="#faq">não resulta em cortes</a>. A largura de banda também é importante, uma vez que as recompensas são reduzidas para os registos que não são recebidos a tempo. Os requisitos variam, mas recomenda-se um mínimo de 10 Mb/s de upload e download.
</ExpandableCard>

<ExpandableCard title="Redução dos riscos" eventCategory="SoloStaking" eventName="clicked slashing risk">
Diferente das penalidades de inatividade por estar offline, <em>cortar (slashing)</em> é uma penalidade muito mais séria e reservada para violações maliciosas. Ao executar um cliente secundário com as suas chaves carregadas em apenas uma máquina de cada vez, o risco de ser cortado é minimizado. Dito isto, todos os utilizadores devem estar conscientes dos riscos do corte.

<a href="https://medium.com/prysmatic-labs/eth2-slashing-prevention-tips-f6faa5025f50/">Mais informações sobre corte e ciclo de vida do validador</a>
</ExpandableCard>
</InfoGrid>

<StakingComparison page="solo" />

## Como funciona {#how-it-works}

<StakingHowSoloWorks />

Enquanto estiver ativo, ganhará recompensas ETH, que serão periodicamente depositadas no seu endereço de saque.

Se desejar, pode retirar-se como validador, o que elimina a necessidade de estar online e impede a obtenção de mais prémios. O saldo restante será então levantado para o endereço de saque que designou durante a configuração.

[Mais informações sobre levantamentos de staking](/staking/withdrawals/)

## Comece a utilizar a plataforma de lançamento de staking {#get-started-on-the-staking-launchpad}

A plataforma de lançamento de staking é uma aplicação de código aberto que o ajudará a tornar-se um staker. Irá guiá-lo através da escolha dos seus clientes, gerar as suas chaves e depositar o seu ETH no contrato de depósito de staking. É fornecida uma lista de verificação para se certificar de que cobriu tudo o que é necessário para instalar o validador em segurança.

<StakingLaunchpadWidget />

## O que deve ser considerado nas ferramentas de configuração de nós e clientes {#node-tool-considerations}

Há um número crescente de ferramentas e serviços para o ajudar a efetuar o stake individual do seu ETH, mas cada um apresenta riscos e benefícios distintos.

Os indicadores de atributos são utilizados abaixo para assinalar pontos fortes ou fracos relevantes que uma ferramenta de staking listada possa ter. Utilize esta secção como orientação para saber como definimos estes atributos enquanto escolhe as ferramentas que o ajudarão na sua jornada de staking.

<StakingConsiderations page="solo" />

## Explorar ferramentas de configuração de nós e clientes {#node-and-client-tools}

Há uma vasta gama de opções disponíveis para o ajudar na sua configuração. Utilize os indicadores acima referidos para o orientar através das ferramentas que se seguem.

<ProductDisclaimer />

### Ferramentas de nós

<StakingProductsCardGrid category="nodeTools" />

Tenha em atenção a importância de escolher um [cliente não dominante](/developers/docs/nodes-and-clients/client-diversity/), uma vez que melhora a segurança da rede e limita o seu risco. As ferramentas que permitem a configuração de clientes não dominantes são designadas por <em style={{ textTransform: "uppercase" }}>"multi-cliente"</em>

### Geradores de chaves

Essas ferramentas podem ser usadas como uma alternativa ao [Staking Deposit CLI](https://github.com/ethereum/staking-deposit-cli/) para ajudar na geração de chaves.

<StakingProductsCardGrid category="keyGen" />

Tem alguma sugestão para uma ferramenta de staking que nos tenha escapado? Consulte a nossa [política de listagem de ferramentas](/contributing/adding-staking-products/) para ver se é adequado e para o submeter a análise.

## Explore os guias de staking individual {#staking-guides}

<StakingGuides />

## Frequently asked questions {#faq}

Estas são algumas das perguntas mais comuns sobre o staking que vale a pena conhecer.

<ExpandableCard title="O que é um validador?">

Um <em>validador</em> é uma entidade virtual que reside no Ethereum e participa no consenso do protocolo Ethereum. Os validadores são representados por um balanço, uma chave pública e outras propriedades. Um <em>cliente validador</em> é o software que age em nome do validador, detendo e utilizando a sua chave privada. Um único cliente validador pode conter diversos pares de chaves, controlando muitos validadores.

</ExpandableCard>

<ExpandableCard title="Posso depositar mais de 32 ETH?">
Cada par de chaves associado a um validador requer exatamente 32 ETH para ser ativado. Mais ETH depositados num único conjunto de chaves não aumenta o potencial de recompensas, uma vez que cada validador está limitado a um <a href="https://www.attestant.io/posts/understanding-validator-effective-balance/">saldo efetivo</a> de 32 ETH. Isto significa que o staking é feito em incrementos de 32 ETH, cada um com o seu próprio conjunto de chaves e balanço.

Nunca deposite mais de 32 ETH para um único validador. Não aumentará as recompensas. Se um endereço de saque tiver sido definido para o validador, os fundos em excesso acima de 32 ETH serão automaticamente transferidos para este endereço durante o próximo <a href="/staking/withdrawals/#validator-sweeping">ciclo de validação do validador</a>.

Se o staking individual parecer demasiado exigente, considere a utilização de um fornecedor de <a href="/staking/saas/">staking-as-a-service</a>, ou se estiver a trabalhar com menos de 32 ETH, consulte os <a href="/staking/pools/">pools de staking</a>.
</ExpandableCard>

<ExpandableCard title="Serei cortado se ficar offline? (tldr: Não.)">
Ficar offline quando a rede está a funcionar corretamente NÃO resulta em cortes. Pequenas <em>penalidades por inatividade</em> serão incorridas se o seu validador não estiver disponível para atestar em um determinado período (cada uma com 6,4 minutos de duração), mas isso é muito diferente de <em>cortar</em>. Estas penalizações são ligeiramente inferiores à recompensa que teria ganho se o validador estivesse disponível para atestar, e as perdas podem ser recuperadas com aproximadamente a mesma quantidade de tempo de volta à rede.

Tenha em atenção que as penalizações por inatividade são proporcionais ao número de validadores que estão offline em simultâneo. Nos casos em que uma grande parte da rede está offline ao mesmo tempo, as penalizações para cada um destes validadores serão maiores do que quando um único validador está indisponível.

Em casos extremos, se a rede parar de finalizar como resultado de mais de um terço dos validadores estarem offline, estes utilizadores sofrerão o que é conhecido como uma <em>fuga de inatividade quadrática</em>, que é uma drenagem exponencial de ETH de contas de validadores offline. Isto permite que a rede se auto-regenere, queimando os ETH dos validadores inativos até que o seu saldo atinja 16 ETH, altura em que serão automaticamente expulsos da reserva de validadores. Os restantes validadores da rede acabarão por englobar novamente mais de 2/3 da rede, satisfazendo a grande maioria necessária para finalizar mais uma vez a cadeia.
</ExpandableCard>

<ExpandableCard title="Como é que me posso assegurar de que não sou cortado?">
Em suma, isto nunca pode ser totalmente garantido, mas se agir de boa-fé, executar um cliente minoritário e mantiver as suas chaves de assinatura apenas numa máquina de cada vez, o risco de ser cortado é quase nulo.

Existem apenas algumas formas específicas que podem fazer com que um validador seja cortado e expulso da rede. No momento em que este artigo foi escrito, os cortes que ocorreram foram exclusivamente um produto de configurações de hardware redundantes em que as chaves de assinatura são armazenadas em duas máquinas separadas em simultâneo. Isto pode resultar inadvertidamente num <em>voto duplo</em> das suas chaves, o que é uma infração passível de ser cortada.

A execução de um cliente super-maioritário (qualquer cliente utilizado por mais de 2/3 da rede) também acarreta o risco de potencial slashing no caso de este cliente ter um bug que resulte num fork da cadeia. Isto pode resultar numa bifurcação inválida que é finalizada. Para voltar à cadeia pretendida, seria necessário submeter uma <em>votação em círculo</em>, tentando desfazer um bloco finalizado. Esta é também uma infração passível de corte e pode ser evitada simplesmente executando um cliente minoritário.

Bugs equivalentes num <em>cliente minoritário nunca seriam finalizados</em> e portanto, nunca resultariam numa votação cm círculo, e simplesmente resultariam em penalidades por inatividade, <em>não em cortes</em>.

<ul>
  <li><a href="https://hackernoon.com/ethereums-client-diversity-problem">Mais informações sobre a importância de gerir um cliente minoritário.</a></li>
  <li><a href="https://medium.com/prysmatic-labs/eth2-slashing-prevention-tips-f6faa5025f50">Mais informações sobre a prevenção de cortes</a></li>
</ul>
</ExpandableCard>

<ExpandableCard title="Qual o melhor cliente?">
Os clientes individuais podem variar ligeiramente em termos de desempenho e interface do utilizador, uma vez que cada um é desenvolvido por equipas diferentes utilizando uma série de linguagens de programação. Dito isto, nenhum deles é o "melhor". Todos os clientes de produção são excelentes peças de software, que executam as mesmas funções essenciais para sincronizar e interagir com a blockchain.

Uma vez que todos os clientes de produção fornecem a mesma funcionalidade básica, é realmente muito importante que escolha um <strong>cliente minoritário</strong>, ou seja, qualquer cliente que NÃO esteja atualmente a ser utilizado pela maioria dos validadores na rede. Isto pode parecer pouco intuitivo, mas o fato de ter um cliente maioritário ou super maioritário aumenta o risco de ser cortado no caso de um bug nesse cliente. Gerir um cliente minoritário limita drasticamente estes riscos.

<a href="https://mirror.xyz/jmcook.eth/S7ONEka_0RgtKTZ3-dakPmAHQNPvuj15nh0YGKPFriA">Saiba mais sobre a razão pela qual a diversidade de clientes é fundamental</a>
</ExpandableCard>

<ExpandableCard title="Posso simplesmente utilizar um VPS (servidor privado virtual)?">
Embora um servidor privado virtual (VPS) possa ser usado como substituto do hardware doméstico, o acesso físico e a localização do seu cliente validador <em>é importante</em>. As soluções de nuvem centralizadas, como a Amazon Web Services ou a Digital Ocean, permitem a conveniência de não ter de obter e operar hardware, à custa da centralização da rede.

Quantos mais clientes validadores estiverem a funcionar numa única solução centralizada de armazenamento na nuvem, mais perigoso se torna para estes utilizadores. Qualquer evento que coloque estes fornecedores offline, seja por um ataque, por exigências regulamentares ou apenas por falhas de energia/internet, fará com que todos os clientes validadores que dependem deste servidor fiquem offline em simultâneo.

As penalizações por estar offline são proporcionais ao número de participantes que estão offline em simultâneo. A utilização de uma VPS aumenta muito o risco de as penalizações offline serem mais severas e aumenta o risco de fugas quadráticas ou de cortes no caso de a interrupção ser suficientemente grande. Para minimizar o seu próprio risco e o risco para a rede, os utilizadores são fortemente encorajados a adquirir e utilizar o seu próprio hardware.
</ExpandableCard>

<ExpandableCard title="Como é que desbloqueio as minhas recompensas ou recupero o meu ETH?">

Qualquer tipo de levantamento da cadeia de beacons requer a definição de credenciais de levantamento.

Os novos stakers definem-no no momento da geração e depósito da chave. Os stakers existentes que ainda não o tenham definido podem atualizar as suas chaves para suportar esta funcionalidade.

Assim que as credenciais de saque forem definidas, os pagamentos de recompensa (ETH acumulado ao longo dos 32 iniciais) serão automaticamente distribuídos periodicamente para o endereço de saque.

Para desbloquear e receber a totalidade do seu balanço, deve também concluir o processo de saída do seu validador.

<ButtonLink href="/staking/withdrawals/">Mais informações sobre levantamentos de staking</ButtonLink>
</ExpandableCard>

## Leitura adicional {#further-reading}

- [O diretório de staking Ethereum](https://www.staking.directory/) - _Eridian e Spacesider_
- [O problema da diversidade de clientes do Ethereum](https://hackernoon.com/ethereums-client-diversity-problem) - _@emmanuelawosika 2022_
- [Ajuda à diversidade dos clientes](https://www.attestant.io/posts/helping-client-diversity/) - _Jim McDonald 2022_
- [Diversidade de clientes na camada de consenso do Ethereum](https://mirror.xyz/jmcook.eth/S7ONEka_0RgtKTZ3-dakPmAHQNPvuj15nh0YGKPFriA) - _jmcook.eth 2022_
- [Como: Adquirir hardware para validador Ethereum](https://www.youtube.com/watch?v=C2wwu1IlhDc) - _EthStaker 2022_
- [Passo a passo: Como aderir ao Ethereum 2.0 Testnet](https://kb.beaconcha.in/guides/tutorial-eth2-multiclient) - _Butta_
- [Dicas de prevenção de corte de Eth2](https://medium.com/prysmatic-labs/eth2-slashing-prevention-tips-f6faa5025f50) - _Raul Jordan 2020_

<QuizWidget quizKey="staking-solo" />
