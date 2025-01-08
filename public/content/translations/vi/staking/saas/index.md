---
title: Đặt cọc như là một dịch vụ
description: Tổng quan về cách bắt đầu với đặt cược ETH nhóm
lang: vi
template: staking
emoji: ":money_with_wings:"
image: /images/staking/leslie-saas.png
alt: Tê giác Leslie lơ lửng giữa những đám mây.
sidebarDepth: 2
summaryPoints:
  - Người vận hành nút bên thứ ba xử lý hoạt động của ứng dụng khách xác thực của bạn
  - Tùy chọn tuyệt vời cho bất kỳ ai có 32 ETH mà gặp khó khăn khi xử lý kỹ thuật phức tạp của việc vận hành một nút
  - Không cần đặt quá nhiều niềm tin và có thể duy trì quyền quản lý các khóa rút tiền của bạn
---

## Đặt cọc dưới dạng dịch vụ là gì? {#what-is-staking-as-a-service}

Đặt cọc dưới dạng dịch vụ ("SaaS") đại diện cho một loại dịch vụ đặt cọc trong đó bạn gửi 32 ETH của mình cho nút xác thực, nhưng ủy quyền việc vận hành nút cho một người vận hành bên thứ ba. Quá trình này thường liên quan đến việc được hướng dẫn thiết lập ban đầu, bao gồm tạo khóa và đặt cọc, sau đó tải các khóa chữ ký của bạn lên người vận hành. Điều này cho phép dịch vụ vận hành nút xác thực thay mặt bạn, thường là với một khoản phí hàng tháng.

## Tại sao nên sử dụng đặt cọc dưới dạng dịch vụ? {#why-stake-with-a-service}

Giao thức Ethereum nguyên bản không hỗ trợ ủy quyền đặt cọc, vì vậy các dịch vụ này đã được xây dựng để đáp ứng nhu cầu này. Nếu bạn có 32 ETH để góp, nhưng gặp khó khăn khi xử lý phần cứng, các dịch vụ SaaS cho phép bạn ủy thác phần khó trong khi bạn vẫn kiếm được phần thưởng khối vốn có.

<CardGrid>
  <Card title="Nút xác thực riêng" emoji=":desktop_computer:" description="Deposit your own 32 ETH to activate your own set of signing keys that will participate in Ethereum consensus. Monitor your progress with dashboards to watch those ETH rewards accumulate." />
  <Card title="Dễ dàng bắt đầu" emoji="🏁" description="Forget about hardware specs, setup, node maintenance and upgrades. SaaS providers let you outsource the hard part by uploading your own signing credentials, allowing them to run a validator on your behalf, for a small cost." />
  <Card title="Giới hạn rủi ro" emoji=":shield:" description="In many cases users do not have to give up access to the keys that enable withdrawing or transferring staked funds. These are different from the signing keys, and can be stored separately to limit (but not eliminate) your risk as a staker." />
</CardGrid>

<StakingComparison page="saas" />

## Điều gì cần phải cân nhắc {#what-to-consider}

Ngày càng nhiều nhà cung cấp dịch vụ SaaS ra đời để hỗ trợ đặt cọc ETH, nhưng mỗi nhà cung cấp đều có những lợi ích và rủi ro nhất định. So với tự đặt cọc, tất cả tùy chọn SaaS đòi hỏi bạn phải đặt niềm tin vào nhà cung cấp. Các tùy chọn Saas có thể bổ sung thêm đoạn mã bao bọc các máy khách Ethereum, nhưng đoạn mã này không được công khai hoặc không thể kiểm tra được. SaaS cũng ảnh hưởng tiêu cực đến tính phi tập trung của mạng lưới. Tùy thuộc vào thiết lập, bạn có thể không kiểm soát được nút xác thực của mình. Nhà điều hành có thể không trung thực và sử dụng ETH của bạn.

Các chỉ báo thuộc tính được sử dụng dưới đây cho thấy những điểm mạnh hoặc điểm yếu đáng chú ý của một nhà cung cấp SaaS. Tham khảo tài liệu này để biết cách chúng tôi xác định các thuộc tính này khi bạn đang chọn dịch vụ để hỗ trợ cho quá trình đặt cọc.

<StakingConsiderations page="saas" />

## Tìm hiểu về nhà cung cấp dịch vụ đặt cọc {#saas-providers}

Dưới đây là một số nhà cung cấp SaaS có sẵn. Sử dụng các chỉ báo trên để làm hướng dẫn về các dịch vụ này

<ProductDisclaimer />

### Nhà cung cấp SaaS

<StakingProductsCardGrid category="saas" />

Vui lòng lưu ý tầm quan trọng của [máy khách đa dạng](/developers/docs/nodes-and-clients/client-diversity/) vì nó hỗ trợ nâng cao bảo mật mạng và hạn chế rủi ro cho bạn. Các dịch vụ có dấu hiệu hạn chế sử dụng máy khách đa số được đánh dấu bằng <em style={{ textTransform: "uppercase" }}>"đa dạng máy khách thực thi"</em> và <em style={{ textTransform: "uppercase" }}>"đa dạng máy khách đồng thuận."</em>

### Trình tạo khóa

<StakingProductsCardGrid category="keyGen" />

Bạn có đề xuất nào về một nhà cung cấp tùy chọn đặt cọc dưới dạng dịch vụ mà chúng tôi còn thiếu không? Hãy xem [chính sách danh sách sản phẩm](/contributing/adding-staking-products/) của chúng tôi để xem liệu nó có phù hợp hay không và gửi nó để được xem xét.

## Những câu hỏi thường gặp {#faq}

<ExpandableCard title="Ai giữ khóa của tôi?" eventCategory="SaasStaking" eventName="clicked who holds my keys">
Các thỏa thuận sẽ khác nhau giữa các nhà cung cấp, nhưng thông thường, bạn sẽ được hướng dẫn cách thiết lập bất kỳ khóa ký nào bạn cần (một khóa trên 32 ETH) và tải chúng lên nhà cung cấp để cho phép họ xác thực thay mặt bạn. Chỉ riêng các khóa ký không cung cấp khả năng rút, chuyển hoặc chi tiêu tiền của bạn. Tuy nhiên, chúng giúp bạn bỏ phiếu theo hướng đồng thuận, mà nếu không thực hiện đúng cách có thể dẫn đến các hình phạt ngoại tuyến hoặc bị cắt số Eth đã góp.
</ExpandableCard>

<ExpandableCard title="Vậy là có hai bộ khóa?" eventCategory="SaasStaking" eventName="clicked so there are two sets of keys">
Đúng vậy. Mỗi tài khoản đều bao gồm cả khóa <em>ký</em> BLS, và khóa <em>rút tiền</em> BLS. Để một nút xác thực chứng thực trạng thái chuỗi, tham gia các ủy ban đồng bộ và đề xuất khối, máy khách xác thực cần có quyền truy cập nhanh chóng vào khóa ký. Chúng phải được kết nối với internet dưới một số hình thức, và do đó vốn dĩ được coi là các phím "nóng". Đây là yêu cầu đối với trình xác thực của bạn để có thể chứng thực và do đó, các khóa được sử dụng để chuyển hoặc rút tiền được tách biệt vì lý do bảo mật.

Khóa rút tiền BLS được sử dụng để ký một tin nhắn một lần, thông báo về việc phần thưởng đặt cọc và số tiền rút sẽ được chuyển đến tài khoản nào trên lớp thực thi. Sau khi tin nhắn này được đưa ra, khóa <em>rút tiền BLS</em> sẽ không còn cần thiết nữa. Thay vào đó, quyền kiểm soát đối với số tiền rút ra được ủy quyền vĩnh viễn cho địa chỉ mà bạn đã cung cấp. Điều này cho phép bạn thiết lập một địa chỉ rút tiền được bảo mật bằng kho lưu trữ lạnh riêng, giảm thiểu rủi ro cho tiền trong nút xác thực của bạn, ngay cả khi người khác kiểm soát khóa ký nút xác thực của bạn.

Cập nhật thông tin xác thực rút tiền là bước bắt buộc để kích hoạt tính năng rút tiền\*. Quá trình này bao gồm việc tạo khóa rút tiền sử dụng cụm từ khởi tạo mnemonic của bạn.

<strong>Hãy chắc chắn sao lưu cụm từ khởi tạo này một cách an toàn, nếu không bạn sẽ không thể tạo khóa rút tiền khi cần.</strong>

\*Những người đặt cọc đã cung cấp địa chỉ rút tiền cùng với khoản tiền gửi ban đầu không cần thực hiện bước này. Hãy kiểm tra với nhà cung cấp dịch vụ SaaS của bạn để biết hướng dẫn về cách thức chuẩn bị validator của bạn.
</ExpandableCard>

<ExpandableCard title="Khi nào tôi có thể rút?" eventCategory="SaasStaking" eventName="clicked when can I withdraw">
Tính năng rút tiền đặt cọc đã được triển khai trong bản nâng cấp Shanghai/Capella vào tháng 4 năm 2023. Những người đặt cọc cần phải cung cấp địa chỉ rút tiền (nếu chưa cung cấp khi gửi tiền ban đầu) và phần thưởng sẽ bắt đầu được phân phối tự động theo định kỳ vài ngày một lần.

Nút xác thực cũng có thể hoàn toàn rời khỏi vai trò nút xác thực, dẫn đến số dư ETH còn lại được mở khóa để rút. Tài khoản đã cung cấp địa chỉ rút tiền trên lớp thực thi và hoàn thành quy trình thoát sẽ nhận được toàn bộ số dư vào địa chỉ rút đã cung cấp trong lần quét nút xác thực tiếp theo.

<ButtonLink href="/staking/withdrawals/">Thông tin thêm về rút tiền đặt cọc</ButtonLink>
</ExpandableCard>

<ExpandableCard title="Điều gì xảy ra nếu tôi bị cắt giảm nút xác thực?" eventCategory="SaasStaking" eventName="clicked what happens if I get slashed">
Bằng cách sử dụng nhà cung cấp SaaS, bạn đang ủy thác việc vận hành nút của mình cho người khác. Điều này đi kèm với nguy cơ hiệu suất nút kém, không nằm trong tầm kiểm soát của bạn. Trong trường hợp nút xác thực của bạn bị cắt giảm, số dư nút xác thực của bạn sẽ bị phạt và buộc bị gỡ khỏi nhóm nút xác thực.

Sau khi hoàn thành quá trình cắt giảm/thoát, số tiền này sẽ được chuyển đến địa chỉ rút tiền được gán cho nút xác thực. Để kích hoạt tính năng này, bạn cần cung cấp địa chỉ rút tiền. Bạn có thể đã cung cấp địa chỉ này khi đặt cọc ban đầu. Nếu chưa, bạn cần sử dụng khóa rút tiền nút xác thực để ký một tin nhắn xác định địa chỉ rút tiền. Nếu không cung cấp địa chỉ rút tiền, số tiền sẽ vẫn bị khóa cho đến khi bạn thực hiện thao tác này.

Vui lòng liên hệ với nhà cung cấp dịch vụ SaaS để biết thêm chi tiết về chính sách bảo lãnh hoặc tùy chọn bảo hiểm, cũng như cách thức cung cấp địa chỉ rút tiền. Nếu bạn muốn có toàn quyền kiểm soát thiết lập nút xác thực của mình, <a href="/staking/solo/">hãy tìm hiểu thêm về cách đặt cọc ETH một mình</a>.
</ExpandableCard>

## Đọc thêm {#further-reading}

- [Thư mục đặt cọc Ethereum](https://www.staking.directory/) - _Eridian và Spacesider_
- [Đánh giá các dịch vụ đặt cọc](https://www.attestant.io/posts/evaluating-staking-services/) - _Jim McDonald 2020_
