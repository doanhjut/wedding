# Kết nối RSVP với Google Forms

1. Tạo Google Form mới với các câu hỏi gợi ý:
   - Họ và tên
   - Bạn sẽ tham dự chứ?
   - Bạn tham dự tiệc nhà trai hay nhà gái?
   - Số người tham dự
   - Lời nhắn dành cho cô dâu chú rể
2. Trong tab **Câu trả lời**, chọn biểu tượng Google Sheets để tạo bảng nhận dữ liệu.
3. Chọn **Gửi**, sao chép đường dẫn công khai có dạng:
   `https://docs.google.com/forms/d/e/.../viewform`
4. Mở `src/data.js` và gán đường dẫn đó cho `rsvpConfig.formUrl`.
5. Khi cần file Excel, mở Google Sheets rồi chọn **Tệp → Tải xuống → Microsoft Excel (.xlsx)**.

Không đặt mật khẩu, API key hoặc quyền chỉnh sửa Google Sheets trong mã React.
