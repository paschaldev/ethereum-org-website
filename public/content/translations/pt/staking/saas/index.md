---
title: Participação como um serviço
description: Uma visão global de como começar a utilizar o staking de ETH em pool
lang: pt
template: staking
emoji: ":money_with_wings:"
image: /images/staking/leslie-saas.png
alt: Leslie, o rinoceronte, a flutuar nas nuvens.
sidebarDepth: 2
summaryPoints:
  - Os operadores de nós de terceiros tratam do funcionamento do seu cliente validador
  - Excelente opção para quem tem 32 ETH e não se sente à vontade para lidar com a complexidade técnica de gerir um nó
  - Reduza a confiança e mantenha a custódia das suas chaves de levantamento
---

## O que é o staking como um serviço? {#what-is-staking-as-a-service}

O staking como serviço ("SaaS") representa uma categoria de serviços de staking em que o utilizador deposita os seus próprios 32 ETH para um validador, mas delega operações de nó a um operador terceiro. Este processo envolve geralmente ser guiado através da configuração inicial, incluindo a geração de chaves e o depósito, para depois carregar as suas chaves de assinatura para o operador. Isto permite que o serviço opere o seu validador em seu nome, por norma mediante o pagamento de uma taxa mensal.

## Porquê participar num serviço, com staking? {#why-stake-with-a-service}

O protocolo Ethereum não suporta nativamente a delegação de stake, pelo que estes serviços foram criados para satisfazer esta lacuna. Se tem 32 ETH para aplicar, mas não se sente confortável a lidar com hardware, os serviços SaaS permitem-lhe delegar a parte difícil enquanto ganha recompensas nativas por bloco.

<CardGrid>
  <Card title="O seu próprio validador" emoji=":desktop_computer:" description="Deposit your own 32 ETH to activate your own set of signing keys that will participate in Ethereum consensus. Monitor your progress with dashboards to watch those ETH rewards accumulate." />
  <Card title="Fácil de começar" emoji="🏁" description="Forget about hardware specs, setup, node maintenance and upgrades. SaaS providers let you outsource the hard part by uploading your own signing credentials, allowing them to run a validator on your behalf, for a small cost." />
  <Card title="Limite o seu risco" emoji=":shield:" description="In many cases users do not have to give up access to the keys that enable withdrawing or transferring staked funds. These are different from the signing keys, and can be stored separately to limit (but not eliminate) your risk as a staker." />
</CardGrid>

<StakingComparison page="saas" />

## Considerações a ter {#what-to-consider}

Há um número crescente de fornecedores de SaaS para o ajudar a colocar o seu ETH, mas todos eles têm os seus próprios benefícios e riscos. Todas as opções de SaaS requerem pressupostos de confiança adicionais em comparação com "home-staking". As opções SaaS podem ter código adicional não aberto ou auditável que envolva os clientes Ethereum. O SaaS também tem um efeito prejudicial na descentralização da rede. Dependendo da configuração, pode não controlar o seu validador - o operador pode agir de forma fraudulenta utilizando o seu ETH.

Os indicadores de atributos são utilizados abaixo para assinalar pontos fortes ou fracos relevantes que um fornecedor de SaaS listado possa ter. Utilize esta rúbrica como referência para saber como definimos estes atributos enquanto escolhe um serviço para o ajudar na sua abordagem de staking.

<StakingConsiderations page="saas" />

## Explore os fornecedores de serviços de staking {#saas-providers}

Seguem-se alguns fornecedores de SaaS disponíveis. Utilize os indicadores acima para o guiar através destes serviços

<ProductDisclaimer />

### Fornecedores de SaaS

<StakingProductsCardGrid category="saas" />

Observe a importância de apoiar a [diversidade de clientes](/developers/docs/nodes-and-clients/client-diversity/), pois otimiza a segurança da rede e limita os riscos. Os serviços que apresentam indícios de limitação da utilização por parte da maioria dos clientes são indicados com <em style={{ textTransform: "uppercase" }}>"execution client diversity"</em> e <em style={{ textTransform: "uppercase" }}>"consensus client diversity."</em>

### Geradores de chaves

<StakingProductsCardGrid category="keyGen" />

Tem alguma sugestão para um fornecedor de staking-as-a-service que nos tenha escapado? Consulte a nossa [política de listagem de ferramentas](/contributing/adding-staking-products/) para ver se é adequado e para o submeter a análise.

## Frequently asked questions {#faq}

<ExpandableCard title="Quem guarda as minhas chaves?" eventCategory="SaasStaking" eventName="clicked who holds my keys">
As disposições variam de fornecedor para fornecedor, mas geralmente será orientado na definição das chaves de assinatura necessárias (uma por cada 32 ETH) e no carregamento das mesmas para o seu fornecedor, para que este possa validar em seu nome. As chaves de assinatura, por si só, não permitem levantar, transferir ou gastar os seus fundos. Contudo, permitem votar para obter um consenso, o que, se não for feito corretamente, pode resultar em penalizações ou cortes offline.
</ExpandableCard>

<ExpandableCard title="Então há dois conjuntos de chaves?" eventCategory="SaasStaking" eventName="clicked so there are two sets of keys">
Sim. Cada conta é composta por chaves de <em>assinatura</em> do BLS e chaves de <em>saque</em> do BLS. Para que um validador possa atestar o estado da cadeia, participar em comités de sincronização e propor blocos, as chaves de assinatura devem ser facilmente consultáveis por um cliente validador. Estas devem estar ligadas à Internet de alguma forma, sendo por isso inerentemente consideradas chaves "quentes". Trata-se de um requisito para que o seu validador possa atestar, pelo que as chaves utilizadas para transferir ou levantar fundos são separadas por razões de segurança.

As chaves de levantamento BLS são utilizadas para assinar uma mensagem única que declara para que camada de execução devem ir as recompensas de staking da conta e os fundos sacados. Quando esta mensagem é difundida, as chaves de <em>saque da BLS</em> deixam de ser necessárias. Em vez disso, o controlo sobre os fundos sacados é permanentemente delegado no endereço que forneceu. Isto permite-lhe definir um endereço de saque protegido através do seu próprio armazenamento seguro, minimizando o risco para os fundos do seu validador, mesmo que outra pessoa controle as chaves de assinatura do validador.

A atualização das credenciais de levantamento é um passo necessário para permitir saques\*. Este processo envolve a geração de chaves de saque utilizando a sua seed phrase mnemónica.

<strong >Certifique-se de que faz um backup seguro desta seed phrase ou não conseguirá gerar as suas chaves de saque quando chegar esse momento.</strong>

\*Os depositantes que forneceram um endereço de saque com o depósito inicial não precisam definir isso. Consulte o seu fornecedor de SaaS para obter apoio sobre como preparar o seu validador.
</ExpandableCard>

<ExpandableCard title="Quando é que posso efetuar um saque?" eventCategory="SaasStaking" eventName="clicked when can I withdraw">
Os saques de stakes foram implementados com a atualização Shanghai/Capella em abril de 2023. Os participantes têm de fornecer um endereço de saque (se não tiver sido fornecido no depósito inicial) e os pagamentos de prémios começarão a ser distribuídos automaticamente, de forma periódica, a intervalos de alguns dias.

Os validadores também podem sair completamente como validador, o que desbloqueará o seu saldo restante de ETH para saque. As contas que forneceram um endereço de saque e concluíram o processo de saída receberão todo o seu saldo no endereço de saque fornecido durante a seguinte ronda de validação.

<ButtonLink href="/staking/withdrawals/">Mais informações sobre levantamentos de staking</ButtonLink>
</ExpandableCard>

<ExpandableCard title="O que é que acontece se o meu stake for cortado?" eventCategory="SaasStaking" eventName="clicked what happens if I get slashed">
Ao recorrer a um fornecedor de SaaS, está a confiar o controlo do seu nó a outra entidade. Isto implica o risco de um deficiente desempenho do nó, que não está sob o seu controlo. Na eventualidade de o seu validador ser cortado, o seu saldo de validador será penalizado e retirado à força do conjunto de validadores.

Após a conclusão do processo de corte/saída, estes fundos serão transferidos para o endereço de saque atribuído ao validador. Para o efeito, é necessário fornecer um endereço de saque. Este pode ter sido fornecido aquando do depósito inicial. Caso contrário, as chaves de saque do validador terão de ser utilizadas para assinar uma mensagem que declare um endereço de saque. Se não tiver sido fornecido um endereço de saque, os fundos permanecerão bloqueados até que seja fornecido um endereço.

Contacte o seu fornecedor SaaS para obter mais informações sobre quaisquer garantias ou opções de seguro e para obter instruções sobre como fornecer um endereço de saque. Se preferir ter o controlo total da configuração do seu validador, <a href="/staking/solo/">saiba sobre como fazer um stake individual do seu ETH</a>.
</ExpandableCard>

## Leitura adicional {#further-reading}

- [O diretório de staking Ethereum](https://www.staking.directory/) - _Eridian e Spacesider_
- [Avaliação dos serviços de staking](https://www.attestant.io/posts/evaluating-staking-services/) - _Jim McDonald 2020_
