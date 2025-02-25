# 🚀 My Node.js Application

## 📌 Prerequisites

Trước khi chạy ứng dụng, hãy đảm bảo bạn đã cài đặt:
- [Node.js](https://nodejs.org/) (Phiên bản 16+)
- [MongoDB](https://www.mongodb.com/) (Hoặc sử dụng MongoDB Atlas)
- [Git](https://git-scm.com/)

## 📂 Project Structure

```
📦 project-root
 ┣ 📂 src
 ┃ ┣ 📂 controllers
 ┃ ┣ 📂 models
 ┃ ┣ 📂 routes
 ┃ ┣ 📜 index.ts
 ┣ 📜 .env
 ┣ 📜 package.json
 ┣ 📜 tsconfig.json
 ┣ 📜 README.md
```

## 🔧 Configuration

### 1️⃣ Clone Repository
```sh
git clone https://github.com/your-username/your-repo.git
cd Problem5
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Setup Environment Variables
Tạo file `.env` trong thư mục gốc và thêm cấu hình:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/testdb
```
(Nếu dùng MongoDB Atlas, thay `MONGO_URI` bằng URL kết nối của bạn.)

### 4️⃣ Compile TypeScript (Nếu dùng TypeScript)
```sh
npm run build
```

## ▶️ Running the Application

### 1️⃣ Development Mode (Hot Reload với Nodemon)
```sh
npm run dev
```

### 2️⃣ Production Mode
```sh
npm start
```

## 🔥 API Endpoints

### 📝 Resource API
| Method | Endpoint         | Description         |
|--------|----------------|---------------------|
| GET    | `/api/students` | Lấy danh sách sinh viên theo từ khóa |
| GET    | `/api/students/:id` | Lấy thông tin sinh viên theo ID |
| POST   | `/api/students` | Tạo mới sinh viên |
| PUT    | `/api/students/:id` | Cập nhật sinh viên |
| DELETE | `/api/students/:id` | Xóa sinh viên |

## ✅ Linting & Formatting
```sh
npm run lint      # Kiểm tra lỗi lint
npm run format    # Định dạng mã nguồn
```

## 🛠️ Troubleshooting

- **Lỗi kết nối MongoDB**: Kiểm tra `MONGO_URI` trong `.env`
- **Cổng bị chiếm dụng**: Chạy `lsof -i :5000` để kiểm tra


