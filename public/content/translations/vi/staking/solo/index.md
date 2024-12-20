---
title: Đặt cọc ETH một mình
description: Tổng quan về cách bắt đầu đặt cọc ETH một mình
lang: vi
template: staking
emoji: ":money_with_wings:"
image: /images/staking/leslie-solo.png
alt: Tê giác Leslie trên chip máy tính riêng.
sidebarDepth: 2
summaryPoints:
  - Tận hưởng phần thưởng tối đa trực tiếp từ giao thức khi bạn duy trì nút xác thực hoạt động đúng cách và trực tuyến
  - Việc chạy phần cứng tại nhà và tự mình sẽ gia tăng tính bảo mật và phân quyền của mạng Ethereum
  - Không phải dựa vào ủy thác và không hề phải từ bỏ quyền kiểm soát chìa khóa đối với tiền của bạn
---

## Đặt cọc một mình là gì? {#what-is-solo-staking}

Góp cổ phần một mình là hành động [chạy một nút Ethereum](/run-a-node/) được kết nối với internet và đặt cọc 32 ETH để kích hoạt một [nút xác thực](#faq), cung cấp cho bạn khả năng tham gia trực tiếp vào cơ chế đồng thuận của mạng.

**Đặt cọc một mình làm gia tăng tính phi tập trung của mạng lưới Ethereum**, giúp Ethereum chống kiểm duyệt và tăng khả năng chống chịu các cuộc tấn công. Các phương pháp đặt cọc khác có thể không hỗ trợ mạng lưới theo cách thức tương tự. Đặt cọc một mình là tùy chọn đặt cọc tốt nhất để bảo vệ Ethereum.

Một nút Ethereum bao gồm cả máy khách lớp thực thi (EL), cũng như máy khách lớp đồng thuận (CL). Các máy khách này là phần mềm hoạt động cùng nhau, cùng với một bộ khóa ký hợp lệ, để xác minh các giao dịch và khối, chứng thực người đứng đầu chính xác của chuỗi, tổng hợp chứng thực và đề xuất khối.

Những người góp cổ phần một mình chịu trách nhiệm vận hành phần cứng cần thiết để chạy các máy khách này. Chúng tôi khuyên bạn nên sử dụng một máy chuyên dụng cho việc này mà bạn vận hành tại nhà – điều này cực kỳ có lợi cho sức khỏe của hệ thống mạng.

Những người đặt cọc một mình nhận phần thưởng trực tiếp từ giao thức khi giữ cho nút xác thực của họ hoạt động đúng cách và trực tuyến.

## Tại sao nên đặt cọc một mình? {#why-stake-solo}

Đặt cọc một mình tuy đi kèm với nhiều trách nhiệm hơn, nhưng bù lại bạn có thể tự do thiết lập và hoàn toàn nắm quyền kiểm soát nguồn tiền và cách đặt cọc.

<CardGrid>
  <Card title="Kiếm ETH mới" emoji="💸" description="Earn ETH-denominated rewards directly from the protocol when your validator is online, without any middlemen taking a cut." />
  <Card title="Toàn quyển kiểm soát" emoji="🎛️" description="Keep your own keys. Choose the combination of clients and hardware that allows you to minimize your risk and best contribute to the health and security of the network. Third-party staking services make these decisions for you, and they don't always make the safest choices." />
  <Card title="Bảo mật mạng lưới" emoji="🔐" description="Solo staking is the most impactful way to stake. By running a validator on your own hardware at home, you strengthen the robustness, decentralization, and security of the Ethereum protocol." />
</CardGrid>

## Những điều cần cân nhắc trước khi đặt cọc một mình {#considerations-before-staking-solo}

Mặc dù chúng tôi mong muốn mọi người đều có thể đặt cọc một mình dễ dàng và an toàn, nhưng thực tế lại không lý tưởng như vậy. Trước khi quyết định góp ETH một mình, bạn cần cân nhắc đến một số yếu tố thực tế và quan trọng.

<InfoGrid>
<ExpandableCard title="Nội dung cần đọc" eventCategory="SoloStaking" eventName="clicked required reading">
Khi tự vận hành nút riêng, bạn nên dành thời gian để học cách sử dụng phần mềm đã chọn. Quá trình này bao gồm đọc tài liệu hướng dẫn và theo dõi các kênh thông tin của các nhóm phát triển.

Khi hiểu càng rõ về phần mềm đang chạy và cơ chế hoạt động của Bằng chứng cổ phần, bạn sẽ càng hạn chế được rủi ro khi tham gia góp cổ phần và dễ dàng khắc phục sự cố hơn trong quá trình vận hành nút.
</ExpandableCard>

<ExpandableCard title="Thành thạo máy tính" eventCategory="SoloStaking" eventName="clicked comfortable with computers">
Có thể các công cụ mới ra đời dần dần giúp việc thiết lập nút dễ dàng hơn, nhưng bạn vẫn cần có mức độ thành thạo nhất định khi làm việc với máy tính. Kiến thức về giao diện dòng lệnh sẽ hữu ích nhưng không còn hoàn toàn bắt buộc.

Ngoài ra, bạn cần hiểu về cấu hình phần cứng cơ bản và thông số tối thiểu được khuyến nghị.
</ExpandableCard>

<ExpandableCard title="Quản lý khóa bảo mật" eventCategory="SoloStaking" eventName="clicked secure key management">
Giống như khóa riêng bảo mật địa chỉ Ethereum của bạn, bạn sẽ cần tạo các khóa riêng biệt cho nút xác thực. Bạn phải hiểu cách giữ an toàn vào bảo mật các cụm từ khởi tạo hoặc khóa riêng.{' '}

<a href="/security/">Bảo mật Ethereum và ngăn chặn lừa đảo</a>
</ExpandableCard>

<ExpandableCard title="Maintenance" eventCategory="SoloStaking" eventName="clicked maintenance">
Phần cứng thỉnh thoảng có thể bị lỗi, kết nối mạng có thể gián đoạn và phần mềm máy khách đôi khi cần được nâng cấp. Công tác bảo trì nút là không thể tránh khỏi và đôi khi đòi hỏi bạn phải chú ý. Bạn nên cập nhật thông tin về các đợt nâng cấp mạng lưới dự kiến hoặc các bản nâng cấp máy khách quan trọng khác.
</ExpandableCard>

<ExpandableCard title="Thời gian hoạt động ổn định" eventCategory="SoloStaking" eventName="clicked reliable uptime">
Phần thưởng đặt cọc phụ thuộc vào thời gian nút xác thực của bạn hoạt động trực tuyến và chứng thực thành công. Ngược lại, thời gian ngoại tuyến sẽ dẫn đến hình phạt tỷ lệ thuận với số lượng nút xác thực ngoại tuyến cùng lúc, <a href="#faq">nhưng không dẫn đến việc bị cắt giảm</a>. Băng thông cũng là yếu tố quan trọng, vì phần thưởng sẽ giảm đối với các chứng thực không được tiếp nhận kịp thời. Các yêu cầu có thể thay đổi, nhưng tốc độ tải lên và tải xuống tối thiểu là 10 Mb/s.
</ExpandableCard>

<ExpandableCard title="Rủi ro bị cắt" eventCategory="SoloStaking" eventName="clicked slashing risk">
Khác với hình phạt cho tình trạng ngoại tuyến, <em>cắt giảm</em> là hình phạt nghiêm trọng hơn dành cho các hành vi gian lận. Bằng cách chạy máy khách thiểu số với khóa chỉ được tải trên một máy tính tại một thời điểm, bạn sẽ giảm thiểu nguy cơ bị cắt giảm. Tất cả người đặt cọc theo đó cần nhận thức rõ ràng về rủi ro bị cắt giảm.

<a href="https://medium.com/prysmatic-labs/eth2-slashing-prevention-tips-f6faa5025f50/"> Xem thêm về cắt giảm và vòng đời của nút xác thực</a>
</ExpandableCard>
</InfoGrid>

<StakingComparison page="solo" />

## Cơ chế hoạt động {#how-it-works}

<StakingHowSoloWorks />

Trong thời gian hoạt động, nút xác thực của bạn sẽ tự động tích lũy phần thưởng ETH, được chuyển định kỳ đến địa chỉ rút tiền.

Khi không muốn duy trì vai trò nút xác thực nữa, bạn có thể thoát. Thoát sẽ giúp bạn không bị buộc phải duy trì trạng thái trực tuyến và ngừng nhận phần thưởng. Số dư còn lại sau đó sẽ được rút về địa chỉ rút tiền đã chọn lúc thiết lập.

[Thông tin thêm về rút tiền đặt cọc](/staking/withdrawals/)

## Bắt đầu với Staking Launchpad {#get-started-on-the-staking-launchpad}

Staking Launchpad là ứng dụng mã nguồn mở hỗ trợ bạn trở thành một người đặt cọc. Công cụ này sẽ hướng dẫn bạn lựa chọn máy khách phù hợp, tạo khóa xác thực và gửi ETH vào hợp đồng đặt cọc. Có danh sách kiểm tra để đảm bảo bạn đã làm mọi thứ nhằm thiết lập trình xác thực của mình một cách an toàn.

<StakingLaunchpadWidget />

## Những điều cần lưu ý về công cụ thiết lập nút và máy khách {#node-tool-considerations}

Các giải pháp đặt cọc ETH một mình ngày càng đa dạng, tuy nhiên mỗi giải pháp lại đi kèm với những rủi ro và lợi ích khác nhau.

Các chỉ báo thuộc tính được sử dụng bên dưới để cho biết các điểm mạnh hoặc điểm yếu đáng chú ý của từng công cụ góp cổ phần được liệt kê. Hãy sử dụng phần này để tham khảo định nghĩa các thuộc tính này trong quá trình bạn lựa chọn công cụ phù hợp cho hành trình đặt cọc.

<StakingConsiderations page="solo" />

## Tìm hiểu về nút và bộ công cụ thiết lập máy khách {#node-and-client-tools}

Có nhiều tùy chọn có sẵn để giúp bạn thiết lập. Sử dụng các chỉ báo bên trên để giúp hướng dẫn bạn qua các công cụ bên dưới.

<ProductDisclaimer />

### Bộ công cụ nút

<StakingProductsCardGrid category="nodeTools" />

Xin lưu ý rằng sử dụng [máy khách thiểu số](/developers/docs/nodes-and-clients/client-diversity/) sẽ giúp cải thiện tính bảo mật của mạng lưới và giảm thiểu rủi ro cho bạn. Các công cụ hỗ trợ thiết lập máy khách thiểu số được đánh dấu là <em style={{ textTransform: "uppercase" }}>"nhiều máy khách."</em>

### Trình tạo khóa

Có thể dùng các công cụ này cho [CLI đặt cọc](https://github.com/ethereum/staking-deposit-cli/) để hỗ trợ tạo khóa.

<StakingProductsCardGrid category="keyGen" />

Bạn có đề xuất về một công cụ đặt cọc mà chúng tôi còn thiếu không? Hãy xem [chính sách danh sách sản phẩm](/contributing/adding-staking-products/) của chúng tôi để xem liệu nó có phù hợp hay không và gửi nó để được xem xét.

## Tìm hiểu nội dung hướng dẫn đặt cọc một mình {#staking-guides}

<StakingGuides />

## Những câu hỏi thường gặp {#faq}

Đây là một vài trong số các câu hỏi phổ biến nhất về đặt cọc.

<ExpandableCard title="Người xác thực là gì?">

<em>validator</em> là một thực thể ảo tồn tại trên Ethereum và tham gia vào quá trình đồng thuận của giao thức Ethereum. Mỗi validator được xác định bởi số dư, khóa công khai và các thuộc tính khác. <em>validator client</em> là phần mềm hoạt động thay mặt cho validator bằng cách nắm giữ và sử dụng khóa riêng tư của nó. Một validator client có thể chứa nhiều cặp khóa, do đó kiểm soát nhiều validator.

</ExpandableCard>

<ExpandableCard title="Tôi có thể đặt cọc nhiều hơn 32 ETH không?">
Mỗi cặp khóa liên kết với một nút xác thực yêu cầu chính xác 32 ETH để kích hoạt. Thêm ETH vào cùng một bộ khóa sẽ không làm tăng tiềm năng nhận thưởng vì mỗi nút xác thực chỉ được giới hạn ở <a href="https://www.attestant.io/posts/understanding-validator-effective-balance/">số dư hiệu quả</a> là 32 ETH. Điều này có nghĩa là đặt cọc theo các mức tăng 32 ETH, mỗi mức có bộ khóa và số dư riêng.

Không đặt cọc quá 32 ETH cho một nút xác thực đơn lẻ. Hành động đó sẽ không làm tăng phần thưởng của bạn. Nếu địa chỉ rút tiền đã được thiết lập cho nút xác thực, số dư vượt quá 32 ETH sẽ tự động được rút về địa chỉ này trong <a href="/staking/withdrawals/#validator-sweeping">lần quét nút xác thực</a> tiếp theo.

Nếu góp cổ phần một mình quá phức tạp, bạn có thể cân nhắc sử dụng một nhà cung cấp <a href="/staking/saas/">góp cổ phần dưới dạng dịch vụ</a>, hoặc tham gia các <a href="/staking/pools/">nhóm góp cổ phần</a> nếu số ETH của bạn dưới 32.
</ExpandableCard>

<ExpandableCard title="Tôi có bị cắt giảm không nếu tôi ngoại tuyến? (tóm lại là: Không.)">
Ngoại tuyến khi mạng lưới đang hoàn tất một cách phù hợp sẽ KHÔNG dẫn đến việc bị cắt giảm. Tuy nhiên, nếu nút xác thực của bạn không hoạt động để xác nhận cho một tham số epoch nhất định (mỗi epoch kéo dài 6,4 phút), bạn sẽ phải chịu một <em>khoản phạt nhỏ vì không hoạt động</em>, nhưng tình huống này rất khác với <em>cắt giảm</em>. Mức phạt này sẽ hơi thấp hơn phần thưởng bạn có thể nhận được nếu có nút xác thực để chứng thực, và bạn có thể bù lỗ bằng khoảng thời gian trực tuyến tương tự.

Lưu ý rằng hình phạt vì ngoại tuyến sẽ phụ thuộc vào số lượng nút xác thực ngoại tuyến cùng lúc. Trong trường hợp phần lớn mạng lưới ngoại tuyến cùng một lúc, hình phạt cho mỗi nút xác thực sẽ nặng hơn so với trường hợp chỉ có một nút xác thực không hoạt động.

Trong trường hợp nghiêm trọng, nếu hơn 1/3 số nút xác thực ngoại tuyến khiến mạng lưới ngừng quy trình hoàn tất, những người dùng này sẽ phải chịu <em>rò rỉ do không hoạt động theo cấp số nhân</em>, trong đó ETH bị rút theo cấp số nhân các tài khoản nút xác thực ngoại tuyến. Điều này giúp mạng lưới tự hồi phục bằng cách giảm số ETH của nút xác thực ngoại tuyến cho đến khi số dư của chúng còn lại 16 ETH, lúc đó chúng sẽ tự động bị loại khỏi nhóm của nút xác thực. Cuối cùng, số nút xác thực trực tuyến còn lại sẽ chiếm lại tỷ lệ hơn 2/3 mạng lưới, đủ điều kiện về đa số để một lần nữa hoàn tất chuỗi.
</ExpandableCard>

<ExpandableCard title="Làm sao để tôi chắc chắn tôi không bị cắt giảm?">
Tóm lại, không thể hoàn toàn đảm bảo điều này, nhưng nếu bạn hành động thiện chí, chạy máy khách thiểu số và chỉ giữ khóa ký trên một máy tại một thời điểm, thì rủi ro bị cắt giảm gần như bằng 0.

Chỉ có một vài trường hợp cụ thể có thể khiến nút xác thực bị cắt giảm và loại khỏi mạng lưới. Hiện tại, các trường hợp cắt giảm xảy ra đều là do thiết lập phần cứng dự phòng, trong đó khóa ký được lưu trữ trên hai máy riêng biệt cùng một lúc. Điều này vô tình có thể dẫn đến hiện tượng <em>phiếu đôi</em> từ các khóa của bạn, đây là hành vi vi phạm có thể dẫn đến bị cắt giảm.

Chạy máy khách đa số (bất kỳ máy khách nào được sử dụng bởi hơn 2/3 mạng lưới) cũng có nguy cơ tiềm ẩn bị cắt trong trường hợp máy khách này có lỗi dẫn đến tình trạng phân nhánh chuỗi (chain fork). Điều này có thể dẫn đến một nhánh lỗi được hoàn tất. Để quay lại chuỗi dự định, cần phải gửi một <em>phiếu bao quanh</em> bằng cách cố gắng hoàn tác một khối đã được hoàn tất. Đây cũng là hành vi vi phạm có thể bị cắt giảm và có thể tránh được bằng cách chạy máy khách thiểu số.

Các lỗi tương đương trong <em>máy khách thiểu số sẽ không bao giờ được hoàn tất</em> và do đó sẽ không bao giờ dẫn đến phiếu bao quanh, mà chỉ dẫn đến hình phạt vì không hoạt động chứ <em>không phải hình phạt bị cắt giảm</em>.

<ul>
  <li><a href="https://hackernoon.com/ethereums-client-diversity-problem">Tìm hiểu thêm về tầm quan trọng của chạy máy khách thiểu số.</a></li>
  <li><a href="https://medium.com/prysmatic-labs/eth2-slashing-prevention-tips-f6faa5025f50">Tìm hiểu thêm về biện pháp ngăn chặn cắt giảm</a></li>
</ul>
</ExpandableCard>

<ExpandableCard title="Máy khách nào là tốt nhất?">
Mỗi máy khách được phát triển bởi các nhóm khác nhau, sử dụng các ngôn ngữ lập trình đa dạng, do đó hiệu suất và giao diện người dùng có thể có chút khác biệt. Tuy nhiên, không có máy khách nào được coi là "tốt nhất". Tất cả các máy khách đang hoạt động đều là những phần mềm tuyệt vời, thực hiện các chức năng cốt lõi giống nhau để đồng bộ hóa và tương tác với chuỗi khối.

Mặc dù tất cả các máy khách hoạt động đều cung cấp các tính năng cơ bản giống nhau, nhưng điều quan trọng là bạn phải chọn một <strong>máy khách thiểu số</strong>, nghĩa là bất kỳ máy khách nào KHÔNG được sử dụng bởi phần lớn nút xác thực trên mạng lưới. Nghe có vẻ mâu thuẫn, nhưng chạy máy khách đa số hoặc siêu đa số sẽ khiến bạn có nguy cơ bị cắt giảm cao hơn trong trường hợp máy khách đó có lỗi. Ngược lại, chạy máy khách thiểu số sẽ giảm thiểu đáng kể những rủi ro này.

<a href="https://mirror.xyz/jmcook.eth/S7ONEka_0RgtKTZ3-dakPmAHQNPvuj15nh0YGKPFriA">Đọc thêm về tầm quan trọng của đa dạng máy khách</a>
</ExpandableCard>

<ExpandableCard title="Tôi có thể chỉ sử dụng VPS (máy chủ ảo riêng) không?">
Mặc dù máy chủ ảo riêng (VPS) có thể thay thế phần cứng tại nhà, nhưng quyền truy cập vật lý và vị trí của máy khách nút xác thực của bạn vẫn là <em>vấn đề quan trọng</em>. Các giải pháp đám mây tập trung như Amazon Web Services hoặc Digital Ocean rất tiện lợi khi không cần phải mua và vận hành phần cứng, nhưng đổi lại sẽ làm tăng tính tập trung của mạng lưới.

Số lượng máy khách nút xác thực chạy trên cùng một giải pháp lưu trữ đám mây tập trung càng nhiều thì người dùng càng gặp rủi ro. Bất kỳ sự kiện nào khiến các nhà cung cấp này ngoại tuyến, do tấn công, yêu cầu pháp lý hoặc chỉ đơn giản là mất điện/mất internet, đều dẫn đến việc tất cả các máy khách nút xác thực phụ thuộc vào máy chủ này cũng ngoại tuyến cùng một lúc.

Hình phạt vì ngoại tuyến phụ thuộc vào số lượng nút xác thực khác đang ngoại tuyến cùng một lúc. Sử dụng VPS làm tăng đáng kể nguy cơ làm cho hình phạt vì ngoại tuyến trở nên nghiêm trọng hơn, đồng thời tăng nguy cơ rò rỉ theo cấp số nhân hoặc cắt giảm nếu sự cố ngừng chạy đủ lớn. Để giảm thiểu rủi ro cho chính bạn và cho cả mạng lưới, người dùng nên mua và vận hành phần cứng riêng.
</ExpandableCard>

<ExpandableCard title="Làm sao để tôi mở khóa các phần thưởng hoặc nhận lại ETH?">

Bất kỳ hình thức rút tiền nào từ Beacon Chain cũng yêu cầu thiết lập thông tin xác thực rút tiền.

Người đặt cọc mới sẽ thực hiện bước này tại thời điểm tạo khóa và đặt cọc. Người đặt cọc hiện tại chưa thực hiện thiết lập có thể nâng cấp khóa để hỗ trợ chức năng này.

Sau khi thiết lập thông tin xác thực rút tiền, các khoản thanh toán phần thưởng (ETH tích lũy vượt quá 32 ban đầu) sẽ được phân phối định kỳ tự động đến địa chỉ rút tiền.

Để mở khóa và nhận lại toàn bộ số tiền của bạn, bạn cũng phải hoàn tất quá trình thoát nút xác thực.

<ButtonLink href="/staking/withdrawals/">Thông tin thêm về rút tiền đặt cọc</ButtonLink>
</ExpandableCard>

## Đọc thêm {#further-reading}

- [Thư mục đặt cọc Ethereum](https://www.staking.directory/) - _Eridian và Spacesider_
- [Vấn đề về đa dạng máy khách của Ethereum](https://hackernoon.com/ethereums-client-diversity-problem) - _@emmanuelawosika 2022_
- [Hỗ trợ đa dạng máy khách](https://www.attestant.io/posts/helping-client-diversity/) - _Jim McDonald 2022_
- [Đa dạng máy khách trên lớp đồng thuận của Ethereum](https://mirror.xyz/jmcook.eth/S7ONEka_0RgtKTZ3-dakPmAHQNPvuj15nh0YGKPFriA) - _jmcook.eth 2022_
- [Cách: mua phần cứng nút xác thực của Ethereum](https://www.youtube.com/watch?v=C2wwu1IlhDc) - _EthStaker 2022_
- [Hướng Dẫn Từng Bước: Cách tham gia Testnet Ethereum 2.0](https://kb.beaconcha.in/guides/tutorial-eth2-multiclient) - _Butta_
- [Các mẹo ngăn bị cắt giảm Eth2](https://medium.com/prysmatic-labs/eth2-slashing-prevention-tips-f6faa5025f50) - _Raul Jordan 2020_

<QuizWidget quizKey="staking-solo" />
