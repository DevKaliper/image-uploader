import ImageUploader from "@/components/image-uploader"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Image Uploader</h1>
            <p className="text-muted-foreground">Upload your images with customizable presigned URL duration</p>
          </div>
          <ImageUploader />
        </div>
      </main>

      <Footer />
    </div>
  )
}
