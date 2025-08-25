# 📸 Image Uploader

Una aplicación web moderna que permite subir imágenes de forma segura y generar URLs temporales con tiempo de expiración personalizable.

## ✨ Características

- 🖼️ **Subida de imágenes** - Soporte para JPEG, PNG, GIF, WebP, BMP y SVG
- ⏰ **Expiración personalizable** - Define cuánto tiempo será accesible la imagen
- 🔒 **URLs seguras** - Genera presigned URLs temporales de AWS S3
- 📏 **Validación de tamaño** - Máximo 5MB por imagen
- 🚀 **Respuesta rápida** - Procesamiento eficiente con AWS Lambda
- 🌐 **CORS habilitado** - Compatible con cualquier frontend

## 🏗️ Arquitectura

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

## 🛠️ Tecnologías utilizadas

### Backend
- **AWS Lambda** - Procesamiento serverless
- **AWS S3** - Almacenamiento de imágenes
- **AWS API Gateway** - API REST
- **Node.js** - Runtime de JavaScript
- **AWS SDK v3** - Integración con servicios AWS

### Frontend
- **Next.js** - Framework React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utilitarios

## ⚠️ Validaciones

### Tipos de archivo permitidos:
- ✅ `image/jpeg`, `image/jpg`
- ✅ `image/png`
- ✅ `image/gif`
- ✅ `image/webp`
- ✅ `image/bmp`
- ✅ `image/svg+xml`

### Restricciones:
- 📏 **Tamaño máximo**: 5MB
- 🕐 **Expiración mínima**: 5 minutos
- 🕐 **Expiración máxima**: 604800 segundos (7 días)

## 🔒 Seguridad

- 🔐 **Bucket privado** - Solo accesible via presigned URLs
- ⏰ **URLs temporales** - Expiran automáticamente
- 🛡️ **Validación estricta** - Solo imágenes válidas
- 🚫 **Sin acceso público** - URLs no predecibles

## 🚀 Deployment

### Con SAM (Recomendado):
```bash
sam build
sam deploy --guided
```

### Manual:
1. Subir función Lambda
2. Configurar API Gateway
3. Deploy frontend a Vercel/Netlify

## 🎨 Uso del frontend

1. **Seleccionar imagen** - Click en el área de drag & drop
2. **Configurar expiración** - Elegir tiempo deseado
3. **Subir** - Click en "Upload Image"
4. **Obtener URL** - Copiar la URL generada

## 🤝 Contribuir

1. Fork el proyecto
2. Crear feature branch (`git checkout -b feature/amazing-feature`)
3. Commit cambios (`git commit -m 'Add amazing feature'`)
4. Push al branch (`git push origin feature/amazing-feature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver `LICENSE` para más detalles.

## 🗺️ Roadmap

- [ ] Soporte para múltiples imágenes
- [ ] Preview de imágenes antes de subir
- [ ] Redimensionado automático
- [ ] Galería de imágenes subidas
- [ ] API de eliminación manual
- [ ] Webhooks para notificaciones


⭐ Si te gustó este proyecto, ¡dale una estrella!