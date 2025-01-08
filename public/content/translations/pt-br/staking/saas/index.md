---
title: Staking como um serviço
description: Uma visão geral de como começar com os pools de staking de ETH
lang: pt-br
template: staking
emoji: ":money_with_wings:"
image: /images/staking/leslie-saas.png
alt: Leslie, o rinoceronte, flutuando nas nuvens
sidebarDepth: 2
summaryPoints:
  - Operadores de nó terceirizados lidam com a operação de seu cliente validador
  - Uma ótima opção para qualquer pessoa com 32 ETH que não se sinta confortável em lidar com a complexidade técnica da execução de um nó
  - Reduza a confiança, e mantenha a posse de suas chaves de saque
---

## O que é staking como um serviço? {#what-is-staking-as-a-service}

Staking como um serviço ("SaaS") representa uma categoria de serviços de staking onde você deposita seus próprios 32 ETH para um validador, mas delega operações de nó para um operador terceirizado. Este processo geralmente envolve ser guiado pela configuração inicial, incluindo a geração de chaves e depósito, e depois enviar suas chaves de assinatura para o operador. Isso permite que o serviço opere seu validador em seu nome, geralmente com uma taxa mensal.

## Por que fazer staking com um serviço? {#why-stake-with-a-service}

O protocolo Ethereum não suporta nativamente a delegação de stake, portanto esses serviços foram construídos para cumprir esta demanda. Se você tem 32 ETH para stake, mas não se sente à vontade para lidar com hardware, os serviços SaaS permitem que você delegue a parte difícil enquanto ganha recompensas nativas do bloco.

<CardGrid>
  <Card title="Seu próprio validador" emoji=":desktop_computer:" description="Deposit your own 32 ETH to activate your own set of signing keys that will participate in Ethereum consensus. Monitor your progress with dashboards to watch those ETH rewards accumulate." />
  <Card title="Fácil de iniciar" emoji="🏁" description="Forget about hardware specs, setup, node maintenance and upgrades. SaaS providers let you outsource the hard part by uploading your own signing credentials, allowing them to run a validator on your behalf, for a small cost." />
  <Card title="Limite seu risco" emoji=":shield:" description="In many cases users do not have to give up access to the keys that enable withdrawing or transferring staked funds. These are different from the signing keys, and can be stored separately to limit (but not eliminate) your risk as a staker." />
</CardGrid>

<StakingComparison page="saas" />

## O que considerar {#what-to-consider}

Há um número cada vez maior de provedores de SaaS para ajudar você a fazer participação com os seus ETH, mas todos têm benefícios e riscos. Todas as opções de SaaS exigem uma confiança adicional em comparação a fazer staking internamente. As opções SaaS podem ter código adicional envolvendo os clientes Ethereum que não são abertos ou auditáveis. O SaaS também tem um efeito prejudicial na descentralização da rede. Dependendo da configuração, você pode não controlar seu validador — o operador pode agir de forma desonesta usando seu ETH.

Os indicadores de atributo são usados abaixo para sinalizar os pontos fortes ou fracos notáveis que um pool de staking pode ter. Utilize esta seção como referência de como definimos estes atributos enquanto você está escolhendo um serviço para auxiliar em sua jornada de staking.

<StakingConsiderations page="saas" />

## Explore provedores de serviços de staking {#saas-providers}

Abaixo estão alguns provedores de SaaS disponíveis. Use os indicadores acima para guiá-lo pelos serviços abaixo

<ProductDisclaimer />

### Provedores de SaaS

<StakingProductsCardGrid category="saas" />

Observe a importância de escolher um serviço que leve a [diversidade de cliente](/developers/docs/nodes-and-clients/client-diversity/) a sério, à medida que melhora a segurança da rede e limita o seu risco. Os serviços que têm evidências de limitação do uso do cliente majoritário são indicados com <em style={{ textTransform: "uppercase" }}>"diversidade do cliente de execução"</em> e <em style={{ textTransform: "uppercase" }}>"diversidade do cliente de consenso".</em>

### Geradores de chaves

<StakingProductsCardGrid category="keyGen" />

Alguma sugestão de um provedor de SaaS que não foi mencionado? Leia a nossa [política de listagem de produtos](/contributing/adding-staking-products/) para ver se a sugestão é pertinente e para enviá-la para análise.

## Perguntas frequentes {#faq}

<ExpandableCard title="Quem guarda as minhas chaves?" eventCategory="SaasStaking" eventName="clicked who holds my keys">
As disposições diferem de provedor para provedor, mas geralmente você será guiado pela configuração de quaisquer chaves de assinatura que você precise (uma a cada 32 ETH), e terá que enviar estas para o seu provedor para permitir que validem em seu nome. Só as chaves de assinatura não oferecem nenhuma possibilidade de saque, transferência ou gasto dos seus fundos. Entretanto, elas proporcionam a capacidade de votar em consensos, o que, se não for feito adequadamente, pode resultar em sanções ou em cortes off-line.
</ExpandableCard>

<ExpandableCard title="Então, há dois conjuntos de chaves?" eventCategory="SaasStaking" eventName="clicked so there are two sets of keys">
Sim. Cada conta é composta por ambas chaves <em>de assinatura</em> BLS, e as chaves de <em>saque</em> BLS. Para que um validador ateste o estado da cadeia, participe de comitês de sincronização e proponha blocos, as chaves de assinatura devem estar prontamente acessíveis por um cliente validador. Elas devem estar conectadas à internet de alguma forma, portanto, são inerentemente consideradas chaves "quentes". Este é um requisito para as confirmações do seu validador, portanto, as chaves usadas para transferir ou sacar fundos são separadas por razões de segurança.

As chaves de retirada BLS são usadas para assinar uma mensagem de uso único que declara para qual conta de execução de uma conta de recompensas de participação e fundos sacados elas devem ir. Uma vez que essa mensagem é transmitida, as chaves de <em>saque de BLS</em> não são mais necessárias. Em vez disso, o controle sobre os fundos retirados é permanentemente delegado ao endereço que você forneceu. Isso permite que você defina um endereço de retirada protegido por meio do seu próprio armazenamento frio, minimizando o risco para seus fundos de validador, mesmo se outra pessoa controlarem suas chaves de assinatura de validador.

A atualização das credenciais de saque é uma etapa necessária para habilitar saques\*. Esse processo envolve gerar as chaves de retirada usando sua frase semente mnemônica.

<strong>Certifique-se de fazer backup dessa frase de recuperação com segurança ou você não conseguirá gerar suas chaves de saque quando precisar.</strong>

\*Os stakers que forneceram um endereço de saque com depósito inicial não precisam definir isso. Consulte com seu provedor SaaS para obter suporte sobre como preparar seu validador.
</ExpandableCard>

<ExpandableCard title="Quando posso sacar?" eventCategory="SaasStaking" eventName="clicked when can I withdraw">
Os saques de staking foram implementados na atualização Shanghai/Capella em abril de 2023. Os stakers precisam fornecer um endereço de saque (se não tiver sido fornecido no depósito inicial) e os pagamentos de recompensa começarão a ser distribuídos de forma automática periodicamente em intervalos de alguns dias.

Os validadores também podem sair totalmente como validadores, o que desbloqueará seus saldos de ETH restantes para saque. As contas que forneceram um endereço de saque para execução e concluíram o processo de saída receberão todo o seu saldo no endereço de saque fornecido durante a próxima varredura do validador.

<ButtonLink href="/staking/withdrawals/">Mais sobre saques de participação</ButtonLink>
</ExpandableCard>

<ExpandableCard title="O que acontece se eu for cortado?" eventCategory="SaasStaking" eventName="clicked what happens if I get slashed">
Usando um provedor SaaS, você está confiando a operação do seu nó a um terceiro. Isto implica o risco de um desempenho deficiente, que não está sob o seu controle. Caso seu validador seja cortado, seu saldo do validador será penalizado e removido à força da pool do validador.

Após a conclusão do processo de remoção/saída, esses fundos serão transferidos para o endereço de saque atribuído ao validador. Para isso, é necessário habilitar um endereço de saque. Ela pode ter sido fornecida no depósito inicial. Caso contrário, será necessário usar as chaves de saque do validador para assinar uma mensagem declarando um endereço de saque. Os fundos permanecerão bloqueados até um endereço de saque ser fornecido.

Entre em contato com o provedor de SaaS para obter mais detalhes sobre quaisquer garantias ou opções de seguro e instruções sobre como fornecer um endereço de saque. Se você preferir estar no controle total da sua configuração do validador, <a href="/staking/solo/">saiba mais sobre como fazer staking individual de seu ETH</a>.
</ExpandableCard>

## Leitura adicional {#further-reading}

- [O diretório de staking Ethereum](https://www.staking.directory/) - _Eridian e Spacesider_
- [Avaliando os Serviços de Staking](https://www.attestant.io/posts/evaluating-staking-services/) - _Jim McDonald 2020_
