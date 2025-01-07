---
title: ETH를 솔로 스테이킹하기
description: ETH 솔로 스테이킹을 시작하는 방법에 대한 개요
lang: ko
template: staking
emoji: ":money_with_wings:"
image: /images/staking/leslie-solo.png
alt: 컴퓨터 칩 위의 코뿔쏘 레슬리
sidebarDepth: 2
summaryPoints:
  - 검증자가 온라인에서 올바르게 작동하도록 유지하여 프로토콜에서 직접 최대 보상을 받으세요.
  - 가정용 컴퓨터를 실행하고 이더리움 네트워크의 보안과 탈중앙화에 기여해 보세요.
  - 특정 주체를 신뢰하지 않고 자금에 대한 제어권을 유지하세요.
---

## 솔로 스테이킹이란 무엇인가요? {#what-is-solo-staking}

솔로 스테이킹은 인터넷에 연결된 [이더리움 노드를 실행](/run-a-node/)하고 32 ETH를 예치하여 [검증자](#faq)를 활성화하며, 네트워크 합의에 직접 참여할 수 있게 하는 기능입니다.

**솔로 스테이킹은 이더리움 네트워크의 탈중앙성을 높여** 이더리움의 검열 저항성을 높이고 네트워크 공격을 더욱 어렵게 만듭니다. 다른 스테이킹 수단은 네트워크에 동일한 도움을 주지 않을 수 있습니다. 솔로 스테이킹은 이더리움 보안에 기여하는 최상의 스테이킹 옵션입니다.

이더리움 노드는 실행 계층(EL) 클라이언트와 합의 계층(CL) 클라이언트로 이루어져 있습니다. 해당하는 클라이언트는 유효한 서명 키와 함께 작동하는 소프트웨어이며, 블록과 거래를 확인하고, 올바른 체인의 헤드를 증명, 증명을 관리하거나 블록을 제안합니다.

솔로 스테이커는 이러한 클라이언트를 실행하기 위해 필요한 하드웨어를 운영하는 역할을 맞습니다. 이 작업을 위해 집에서 작동하는 전용 컴퓨터를 사용할 것을 강력하게 추천합니다. 네트워크 상태에 큰 도움이 되기 때문입니다.

솔로 스테이커는 검증자가 온라인에서 올바르게 작동하도록 유지하여 프로토콜에서 직접 보상을 받을 수 있습니다.

## 솔로 스테이킹이 왜 필요한가요? {#why-stake-solo}

솔로 스테이킹에는 더 많은 책임이 따르지만 자금 및 스테이킹 설정과 관련하여 최대한의 관리 권한을 누릴 수 있습니다.

<CardGrid>
  <Card title="새로운 ETH 얻기" emoji="💸" description="Earn ETH-denominated rewards directly from the protocol when your validator is online, without any middlemen taking a cut." />
  <Card title="완벽한 제어" emoji="🎛️" description="Keep your own keys. Choose the combination of clients and hardware that allows you to minimize your risk and best contribute to the health and security of the network. Third-party staking services make these decisions for you, and they don't always make the safest choices." />
  <Card title="네트워크 보안성" emoji="🔐" description="Solo staking is the most impactful way to stake. By running a validator on your own hardware at home, you strengthen the robustness, decentralization, and security of the Ethereum protocol." />
</CardGrid>

## 솔로 스테이킹 전에 고려할 사항 {#considerations-before-staking-solo}

솔로 스테이킹에 모두 접근할 수 있고 위험 부담이 없기를 바라지만, 현실은 이와 다릅니다. ETH를 솔로 스테이킹하기 전에 염두에 두어야 할 실용적이고 중요한 고려 사항이 있습니다.

<InfoGrid>
<ExpandableCard title="중요한 읽을거리" eventCategory="SoloStaking" eventName="clicked required reading">
자신의 노드를 직접 운영할 때 선택한 소프트웨어를 사용하는 방법에 대해 알아봐야 합니다. 여기에는 관련 문서를 읽거나 해당하는 개발 팀의 통신 채널에 주목하는 것도 포함됩니다.

실행하는 소프트웨어와 지분 증명 작동의 원리를 잘 이해할수록 스테이커로서의 위험 부담이 낮아지며 노드 운영자로서 도중에 발생할 수 있는 문제를 더 쉽게 해결할 수 있습니다.
</ExpandableCard>

<ExpandableCard title="컴퓨터와 익숙하게" eventCategory="SoloStaking" eventName="clicked comfortable with computers">
새로운 도구를 통해 작업이 더 쉬워지더라도 노드를 설치하려면 컴퓨터를 사용하는 작업에 어느 정도 친숙해야 합니다. 명령줄 인터페이스를 이해하는 것이 도움은 되지만 더 이상 반드시 필요한 것은 아닙니다.

또한 매우 기초적인 하드웨어 설치 및 최소 권장 사양에 대해 어느 정도 이해하고 있어야 합니다.
</ExpandableCard>

<ExpandableCard title="안전한 키 관리" eventCategory="SoloStaking" eventName="clicked secure key management">
개인 키가 이더리움 주소를 보호하는 방법처럼 검증자를 위한 특별한 키를 생성해야 합니다. 시드 문구 또는 개인 키를 안전하게 보호하는 방법을 반드시 숙지해야 합니다.{' '}

<a href="/security/">이더리움 보안 및 스캠 예방</a>
</ExpandableCard>

<ExpandableCard title="유지 보수" eventCategory="SoloStaking" eventName="clicked maintenance">
가끔 하드웨어에 문제가 발생하고, 네트워크 연결에 오류가 생길 때 클라이언트 소프트웨어는 주기적으로 업그레이드해야 합니다. 노드를 유지 관리하는 작업은 꼭 필요하며 가끔 주의를 기울여야 합니다. 예상되는 네트워크 업그레이드 또는 기타 중요한 클라이언트 업그레이드에 대해 알고 있는 것이 좋습니다.
</ExpandableCard>

<ExpandableCard title="지속 가능한 가동 시간" eventCategory="SoloStaking" eventName="clicked reliable uptime">
보상은 검증자가 온라인 상태일 때 적절하게 증명 작업에 소요한 시간에 비례합니다. 가동 중지 시간이 발생하면 동일한 시간에 오프라인인 다른 검증자의 수에 비례하여 불이익을 받지만 <a href="#faq">슬래싱을 당하지는 않습니다</a>. 적시에 받지 못한 증명이 있는 경우 보상이 줄어들기 때문에 대역폭 또한 중요합니다. 요구 사항은 달라질 수 있지만 최소 10Mb/s 내외의 대역폭이 권장됩니다.
</ExpandableCard>

<ExpandableCard title="슬래싱 리스크" eventCategory="SoloStaking" eventName="clicked slashing risk">
오프라인 상태가 되어 받는 비활동 상태에 대한 불이익과는 달리, <em>슬래싱</em>은 악의적 행동에 대한 훨씬 심각한 불이익입니다. 한 번에 하나의 시스템에만 로드된 키를 사용하여 소수의 클라이언트를 실행하면 슬래시 처리될 위험성이 최소화됩니다. 이를 통해 알 수 있듯이 모든 스테이커는 슬래싱의 위험성을 주의해야 합니다.

<a href="https://medium.com/prysmatic-labs/eth2-slashing-prevention-tips-f6faa5025f50/"> 슬래싱 및 검증자의 주기 자세히 알아보기</a>
</ExpandableCard>
</InfoGrid>

<StakingComparison page="solo" />

## 작동 방법 {#how-it-works}

<StakingHowSoloWorks />

활동을 유지하는 동안 ETH 보상이 지급됩니다. 보상은 주기적으로 출금 주소로 지급됩니다.

필요한 경우 검증자 역할을 그만두고 오프라인으로 전환할 수 있으며, 더 이상 보상받지 않을 수 있습니다. 이후 잔여 잔액은 설정 시 지정한 출금 주소로 출금됩니다.

[스테이킹 출금에 대한 자세한 내용](/staking/withdrawals/)

## 스테이킹 런치패드 시작하기 {#get-started-on-the-staking-launchpad}

스테이킹 런치패드는 스테이커가 되는 것을 도와주는 오픈소스 애플리케이션입니다. 이는 클라이언트를 선택하고, 키를 생성하거나, 스테이킹 계약에 ETH를 예치하는 등의 작업을 안내합니다. 검증자를 안전하게 설정하기 위한 체크리스트도 제공됩니다.

<StakingLaunchpadWidget />

## 노드 및 클라이언트 설정 도구에서 고려할 사항 {#node-tool-considerations}

ETH 솔로 스테이킹을 지원하는 도구와 서비스는 점점 많아지고 있지만, 다양한 이점과 리스크가 존재합니다.

아래의 속성 지표는 현재 목록에 있는 스테이킹 도구의 대표적인 강점 또는 약점을 나타내기 위해 사용되었습니다. 스테이킹 여정을 지원하는 도구를 선택할 때 이 섹션을 참고하여 이러한 속성이 정의되는 방법을 알아보세요.

<StakingConsiderations page="solo" />

## 노드 및 클라이언트 설정 도구 살펴보기 {#node-and-client-tools}

설정에 도움이 되는 다양한 옵션이 있습니다. 상단의 지표를 사용하여 아래 도구에 대한 안내를 받으세요.

<ProductDisclaimer />

### 노드 도구

<StakingProductsCardGrid category="nodeTools" />

참고로, [소수 클라이언트](/developers/docs/nodes-and-clients/client-diversity/)는 네트워크의 보안을 강화하고 위험성을 최소화할 수 있으므로 매우 중요합니다. 소수 클라이언트를 설정하기 위한 도구를 <em style={{ textTransform: "uppercase" }}>"멀티 클라이언트"</em>라고 부릅니다.

### 키 생성기

이러한 도구는 키를 생성하는 데 있어 [스테이킹 입금 CLI](https://github.com/ethereum/staking-deposit-cli/)의 대안으로 사용될 수 있습니다.

<StakingProductsCardGrid category="keyGen" />

저희가 놓친 다른 스테이킹 도구가 있습니까? 이더리움 [제품 나열 정책](/contributing/adding-staking-products/)을 확인하고 정책에 맞는 제품인 경우 검토를 위해 제출해 주세요.

## 솔로 스테이킹 가이드 살펴보기 {#staking-guides}

<StakingGuides />

## 자주 묻는 질문 {#faq}

다음은 참고하면 좋을 스테이킹에 대한 가장 일반적인 질문입니다.

<ExpandableCard title="검증자란 무엇인가요?">

<em>검증자</em>는 이더리움상에 존재하고 이더리움 프로토콜의 합의에 참여하는 가상 주체입니다. 검증자는 잔고, 공개 키 및 기타 속성으로 나타납니다. <em>검증자 클라이언트</em>는 검증자를 대신하여 개인 키를 소유하고 사용하는 소프트웨어입니다. 하나의 검증자 클라이언트는 여러 개의 키 페어를 보유하며 여러 검증자를 제어할 수 있습니다.

</ExpandableCard>

<ExpandableCard title="32 ETH 이상을 예치할 수 있습니까?">
검증자와 연계된 각각의 키 쌍이 활성화되려면 정확히 32 ETH가 필요합니다. 검증자마다 32 ETH의 <a href="https://www.attestant.io/posts/understanding-validator-effective-balance/">유효 잔고</a> 제한이 있기 때문에 한 개의 키 세트에 ETH를 더 예치해도 보상이 증가하지는 않습니다. 이는 스테이킹은 32 ETH 단위로 이루어지며 각각 고유한 키와 잔고가 있음을 의미합니다.

하나의 검증자에 32 ETH보다 더 많은 금액을 예치하지 마세요. 그렇다고 보상이 증가하지는 않습니다. 검증자용 출금 주소가 설정된 경우 32 ETH를 초과한 자산은 자동으로 다음 <a href="/staking/withdrawals/#validator-sweeping">검증자 정리</a> 중에 이 주소로 자동 출금됩니다.

솔로 스테이킹이 너무 부담스럽다면 <a href="/staking/saas/">스테이킹 서비스</a> 제공 업체의 이용을 고려해 보세요. 또는 32 ETH보다 적은 금액을 스테이킹하려면 <a href="/staking/pools/">스테이킹 풀</a>을 확인해 보세요.
</ExpandableCard>

<ExpandableCard title="오프라인이 되는 경우 슬래싱되나요? (답 요약: 아니오)">
네트워크가 적절하게 최종 확정될 때 오프라인 상태가 된다고 슬래싱되지는 않습니다. 작은 <em>비활동 패널티</em>는 검증자가 특정 에폭(각 6.4분 길이)에 대해 증명할 수 없는 경우에 발생하지만, 이는 <em>슬래싱</em>과는 완전히 다릅니다. 이 패널티는 검증자가 정상적으로 증명할 수 있는 경우의 보상보다 약간 낮게 설정되며, 손실은 동일한 시간만큼 다시 온라인 연결이 되었을 때 메꿀 수 있습니다.

비활동 패널티의 정도는 같은 시간 동안 오프라인이었던 검증자의 수에 비례한다는 점을 참고하세요. 네트워크의 대부분이 한꺼번에 모두 오프라인이 된 경우, 각 검증자에 대한 불이익은 한 개의 검증자를 사용할 수 없는 경우에 비해 더 큽니다.

극단적으로 만약 1/3 이상의 검증자가 한꺼번에 오프라인이 되어 네트워크가 멈추게 된다면, 각 사용자는 이른바 <em>2차 비활동 누출</em>을 겪게 되며, 오프라인 검증자 계정에서 ETH를 기하급수적으로 잃게 됩니다. 이는 해당하는 비활성 검증자의 잔고가 16 ETH가 되어 검증자 풀에서 자동으로 탈락될 때까지 ETH를 계속 제거함으로써 결국엔 네트워크가 자생할 수 있도록 합니다. 나머지 온라인 검증자들이 다시 네트워크의 2/3 이상을 차지하게 되면 체인은 다시 작동하기 시작합니다.
</ExpandableCard>

<ExpandableCard title="슬래싱을 안 당하려면 어떻게 해야 하나요?">
요약하자면 (물론 100% 확신은 불가하지만) 지침에 따라 한 번에 한 기계에만 서명 키를 유지하는 방식으로 소수 클라이언트를 실행한다면, 슬래싱이 일어날 확률은 거의 0에 가까워지게 됩니다.

검증자가 네트워크에서 슬래싱되어 제거되는 이유는 몇 개밖에 없습니다. 현시점에서 슬래싱은 서명 키가 동시에 두 개의 서로 다른 기계에 보관되는 중복성 하드웨어 설정이 이유였던 경우가 대부분이었습니다. 이는 실수로 키에서 <em>2중 투표</em>가 일어나는 원인이 될 수 있으며, 이러한 경우에 슬래싱 대상으로 간주되기 때문입니다.

대규모 클라이언트(네트워크의 2/3 이상을 사용하는 클라이언트)를 운영하는 경우에도 슬래싱을 당할 수 있으며, 이 클라이언트에 체인 포크를 야기하는 버그가 있을 경우에 발생합니다. 오류로 인한 포크가 일어나서 최종 확정될 수 있습니다. 원래의 체인으로 되돌리려면 확정된 블록을 취소하기 위한 <em>서라운드 투표</em>를 제출해야 합니다. 이 또한 슬래싱의 원인이 될 수 있으며, 단순히 소수 클라이언트를 실행함으로써 피할 수 있습니다.

<em>소수 클라이언트에서 유사한 버그가 발생할지라도 최종 확정되지 않으므로</em> 서라운드 투표 및 <em>슬래싱은 발생하지 않으며</em>, 그저 비활동 패널티로만 그치게 됩니다.

<ul>
  <li><a href="https://hackernoon.com/ethereums-client-diversity-problem">소수 클라이언트 실행의 중요성에 대해 자세히 알아보기</a></li>
  <li><a href="https://medium.com/prysmatic-labs/eth2-slashing-prevention-tips-f6faa5025f50">슬래싱 예방에 대해 자세히 알아보기</a></li>
</ul>
</ExpandableCard>

<ExpandableCard title="어떤 클라이언트가 최고입니까?">
개별 클라이언트는 다양한 팀들이 다양한 언어로 개발한 것이므로 성능과 사용성 면에서 차이를 보일 수 있습니다. 즉, "최고"의 클라이언트는 존재하지 않습니다. 모든 프로덕션 클라이언트는 우수한 소프트웨어이며 블록체인을 활용하고 동기화하기 위한 동일한 핵심 기능을 제공합니다.

모든 프로덕션 클라이언트에서 동일한 기본 기능을 제공하기 때문에 <strong>소수 클라이언트</strong>를 선택하는 것이 매우 중요합니다. 즉, 현재 네트워크 상에서 아직 검증자들이 많이 사용하고 있지 않은 클라이언트를 선택하는 것이 중요합니다. 처음에는 와닿지 않을 수 있지만, 대다수 혹은 대규모 클라이언트를 실행하면 해당 클라이언트에 버그가 있는 경우에 슬래싱될 가능성이 높아집니다. 소수 클라이언트를 실행하면 이 리스크를 크게 줄입니다.

<a href="https://mirror.xyz/jmcook.eth/S7ONEka_0RgtKTZ3-dakPmAHQNPvuj15nh0YGKPFriA">클라이언트 다양성이 중요한 이유에 대해 자세히 알아보기</a>
</ExpandableCard>

<ExpandableCard title="단순히 VPS(가상 사설 서버)를 사용해도 되나요?">
가상 사설 서버(VPS: Virtual Private Server)가 가정용 하드웨어 대신 사용될 수는 있지만, 검증자 클라이언트의 물리적인 액세스 및 위치가 <em>실제로 중요</em>합니다. 아마존 웹 서비스나 디지털 오션과 같은 중앙화된 클라우드 솔루션은 하드웨어를 직접 소유하고 운영하지 않아도 된다는 편리함을 제공하지만, 네트워크를 중앙화한다는 단점이 있습니다.

하나의 중앙화된 클라우드 스토리지 솔루션에서 더 많은 검증자 클라이언트가 실행될수록 해당 사용자들은 위험해집니다. 해킹, 규제 또는 단순한 정전/인터넷 오류에 의해 해당 서비스가 오프라인이 되는 경우, 이 서버를 사용하는 모든 검증자 클라이언트도 동시에 오프라인이 됩니다.

오프라인 패널티의 정도는 동시에 오프라인 상태에 있는 클라이언트 수에 비례합니다. 따라서 VPS를 사용하면 오프라인 패널티에 대한 리스크를 현저히 증가시키며, 고장이 대규모인 경우에 2차적 누출이나 슬래싱을 당할 리스크 또한 키웁니다. 귀하의 리스크와 네트워크의 리스크를 최소화하기 위해 사용자는 자신의 하드웨어를 확보하고 운영할 것을 강력히 권장합니다.
</ExpandableCard>

<ExpandableCard title="보상의 잠금을 해제하고 ETH를 돌려받는 방법은 무엇인가요?">

비콘 체인에서 출금하려면 출금 자격 증명의 설정이 필요합니다.

신규 스테이커는 키를 생성하고 예치할 때 이를 설정합니다. 출금 자격 증명을 아직 설정하지 않은 기존 스테이커는 키를 업그레이드하여 이 기능을 지원할 수 있습니다.

출금 자격 증명이 설정되면 주기적으로 보상(초기 32 ETH에 대해 누적된 ETH)이 출금 주소로 자동 지급됩니다.

전체 잔액을 잠금 해제하고 수령하려면 검증자 탈퇴 프로세스도 완료해야 합니다.

<ButtonLink href="/staking/withdrawals/">스테이킹 출금에 대한 자세한 내용</ButtonLink>
</ExpandableCard>

## 더 읽을거리 {#further-reading}

- [이더리움 스테이킹 디렉터리](https://www.staking.directory/) - _Eridian and Spacesider_
- [이더리움의 클라이언트 다양성 문제](https://hackernoon.com/ethereums-client-diversity-problem) - _@emmanuelawosika 2022_
- [클라이언트 다양성 개선](https://www.attestant.io/posts/helping-client-diversity/) - _Jim McDonald 2022_
- [이더리움 합의 계층에서의 클라이언트 다양성](https://mirror.xyz/jmcook.eth/S7ONEka_0RgtKTZ3-dakPmAHQNPvuj15nh0YGKPFriA) - _jmcook.eth 2022_
- [사용법: 이더리움 검증자용 하드웨어 구매하기](https://www.youtube.com/watch?v=C2wwu1IlhDc) - _EthStaker 2022_
- [단계별: 이더리움 2.0 테스트넷에 참여하는 방법](https://kb.beaconcha.in/guides/tutorial-eth2-multiclient) - _Butta_
- [Eth2 슬래싱 방지 팁](https://medium.com/prysmatic-labs/eth2-slashing-prevention-tips-f6faa5025f50) - _Raul Jordan 2020_

<QuizWidget quizKey="staking-solo" />
