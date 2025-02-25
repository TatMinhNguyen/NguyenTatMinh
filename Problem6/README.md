# Đặc tả API Bảng Xếp Hạng

## Tổng Quan
Tài liệu này mô tả mô-đun API để cập nhật và truy xuất điểm số của người dùng trong hệ thống bảng xếp hạng theo thời gian thực. API sẽ đảm bảo cập nhật điểm số một cách an toàn và cung cấp thông tin về top 10 người chơi.

## Tính Năng
1. Lấy danh sách 10 người có điểm số cao nhất.
2. Cập nhật điểm số của người dùng một cách bảo mật sau khi hoàn thành một hành động.
3. Ngăn chặn hành vi gian lận trong việc cập nhật điểm.
4. Cung cấp cập nhật thời gian thực cho bảng xếp hạng.

## API Endpoints

### 1. Lấy Top 10 Điểm Cao Nhất
**Endpoint:** `GET /api/leaderboard`

**Mô Tả:**
Truy xuất danh sách 10 người chơi có điểm số cao nhất.

**Phản Hồi:**
```json
{
  "leaderboard": [
    { "userId": "123", "username": "player1", "score": 1500 },
    { "userId": "456", "username": "player2", "score": 1450 },
    { "userId": "765", "username": "player3", "score": 1400 },
    { "userId": "222", "username": "player4", "score": 1350 },
    { "userId": "434", "username": "player5", "score": 1250 },
    { "userId": "131", "username": "player6", "score": 1150 },
    { "userId": "555", "username": "player7", "score": 1100 },
    { "userId": "523", "username": "player8", "score": 1050 },
    { "userId": "678", "username": "player9", "score": 1000 },
    { "userId": "111", "username": "player10", "score": 900 },
  ]
}
```

### 2. Cập Nhật Điểm Số Người Dùng
**Endpoint:** `POST /api/score`

**Mô Tả:**
Cập nhật điểm số của người chơi sau khi hoàn thành một hành động hợp lệ.

**Yêu Cầu:**
```json
{
  "userId": "123",
  "actionToken": "valid-action-token"
}
```

**Phản Hồi:**
```json
{
  "message": "Điểm số cập nhật thành công",
  "newScore": 1600
}
```

## Biện Pháp Bảo Mật
- **Xác Thực & Phân Quyền:**
  - Mỗi yêu cầu phải bao gồm token xác thực hợp lệ (JWT hoặc session-based).
- **Xác Minh Hành Động:**
  - Sử dụng `actionToken` để kiểm tra hành động hợp lệ trước khi cập nhật điểm.
- **Giới Hạn Tốc Độ (Rate Limiting):**
  - Ngăn chặn việc spam API bằng các yêu cầu cập nhật điểm liên tục.
- **Sử Dụng WebSockets Cho Cập Nhật Trực Tiếp:**
  - Gửi thông báo đến frontend khi bảng xếp hạng thay đổi.

## Luồng Thực Thi
Luồng xử lý điểm số được thực hiện như sau:

1. Người dùng hoàn thành một hành động trên frontend.
2. Frontend gửi yêu cầu `POST /api/score` với `userId` và `actionToken`.
3. Backend kiểm tra:
   - Token xác thực hợp lệ.
   - `actionToken` có hợp lệ không.
4. Nếu hợp lệ, điểm số người dùng được cập nhật trong cơ sở dữ liệu.
5. Điểm số mới được kiểm tra xem có lọt vào top 10 không.
6. Nếu bảng xếp hạng thay đổi, một sự kiện WebSocket được kích hoạt để thông báo đến tất cả client.

## Đề Xuất
- **Áp dụng bộ nhớ đệm (Redis)** để tối ưu truy vấn bảng xếp hạng.
- **Sử dụng hàng đợi tin nhắn (RabbitMQ, Kafka)** để xử lý cập nhật điểm số với tải lớn.
- **Cơ chế phát hiện gian lận** (ví dụ: phát hiện tăng điểm bất thường).

Tài liệu này cung cấp cơ sở cho nhóm kỹ sư backend triển khai một API bảng xếp hạng an toàn và hiệu quả.

