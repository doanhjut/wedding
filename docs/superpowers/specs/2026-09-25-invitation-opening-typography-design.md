# Điều chỉnh mở thiệp và typography

## Mục tiêu

Giúp người xem có đủ thời gian đọc tấm thiệp khi mở, đồng thời bảo đảm các tiêu đề quan trọng không xuống dòng và thông tin lễ vu quy hiển thị chính xác.

## Phạm vi

### Trang mở thiệp

- Tổng nhịp mở thiệp khoảng 4 giây.
- Triện và nắp phong bì mở trước, tấm thiệp trượt lên rồi giữ rõ khoảng 1,5 giây.
- Sau thời gian giữ, phong bì mờ dần trong khi ảnh cưới xuất hiện để tạo chuyển cảnh liên tục.
- Chỉ kết thúc trạng thái mở khi animation chính của nền ảnh hoàn tất; animation con không được kết thúc sớm trạng thái.
- Tên “Minh Trang” luôn nằm trên một dòng ở desktop và mobile. Cỡ chữ được giảm linh hoạt trên màn hình hẹp để không tràn.
- Chế độ giảm chuyển động tiếp tục mở ngay, không bắt người dùng chờ animation.

### Thông tin đám cưới

- Tiêu đề “Thông tin đám cưới” luôn nằm trên một dòng và co giãn theo chiều rộng màn hình.
- Dòng sự kiện đầu tiên lấy dữ liệu theo mã `vu-quy`, không phụ thuộc vị trí phần tử trong mảng.
- Nội dung hiển thị là “Lễ vu quy · 25/10/2026”.
- Số giờ trong thiệp dùng Be Vietnam Pro và chữ số tabular để số `1` dễ phân biệt.

## Kiểm thử

- Thêm kiểm thử hồi quy cho nội dung lễ vu quy và tên/tiêu đề một dòng thông qua class chuyên biệt.
- Kiểm tra trạng thái mở thiệp không kết thúc bởi animation con.
- Chạy toàn bộ test và build production.
- Kiểm tra trực quan ở desktop và mobile 390px, bao gồm tràn ngang và khả năng đọc tên/tiêu đề.

## Ngoài phạm vi

- Không thay đổi dữ liệu các sự kiện còn lại.
- Không đổi hình ảnh, màu sắc hoặc bố cục các section khác.
