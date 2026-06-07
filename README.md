# 📸 Image Uploader

A modern web application that allows secure image uploads and generates temporary URLs with customizable expiration times.

## ✨ Features

- 🖼️ **Image upload** - Support for JPEG, PNG, GIF, WebP, BMP and SVG
- ⏰ **Customizable expiration** - Define how long the image will be accessible
- 🔒 **Secure URLs** - Generate temporary AWS S3 presigned URLs
- 📏 **Size validation** - Maximum 5MB per image
- 🚀 **Fast response** - Efficient processing with AWS Lambda
- 🌐 **CORS enabled** - Compatible with any frontend

## 🏗️ Architecture

```
Frontend (Web App) 
     ↓
API Gateway
     ↓
AWS Lambda (Validation + Upload)
     ↓
AWS S3 (Private Bucket)
     ↓
Presigned URL (Temporary Access)
```

## 🛠️ Technologies Used

### Backend
- **AWS Lambda** - Serverless processing
- **AWS S3** - Image storage
- **AWS API Gateway** - REST API
- **Node.js** - JavaScript runtime
- **AWS SDK v3** - AWS services integration

### Frontend
- **Next.js** - React framework
- **TypeScript** - Static typing
- **Tailwind CSS** - Utility-first CSS

## ⚠️ Validations

### Allowed file types:
- ✅ `image/jpeg`, `image/jpg`
- ✅ `image/png`
- ✅ `image/gif`
- ✅ `image/webp`
- ✅ `image/bmp`
- ✅ `image/svg+xml`

### Restrictions:
- 📏 **Maximum size**: 5MB
- 🕐 **Minimum expiration**: 5 minutes
- 🕐 **Maximum expiration**: 604800 seconds (7 days)

## 🔒 Security

- 🔐 **Private bucket** - Only accessible via presigned URLs
- ⏰ **Temporary URLs** - Automatically expire
- 🛡️ **Strict validation** - Only valid images allowed
- 🚫 **No public access** - Non-predictable URLs


## 🎨 Frontend Usage

1. **Select image** - Click on the drag & drop area
2. **Configure expiration** - Choose desired time
3. **Upload** - Click on "Upload Image"
4. **Get URL** - Copy the generated URL

## 🤝 Contributing

1. Fork the project
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License. See `LICENSE` for more details.

---

⭐ If you liked this project, give it a star!
