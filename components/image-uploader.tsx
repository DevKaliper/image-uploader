"use client"

import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Upload, ImageIcon, Clock, Copy, Check, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface UploadedFile {
  url: string
  filename: string
  size: number
  type: string
  expiresAt?: string
}

export default function ImageUploader() {
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null)
  const [duration, setDuration] = useState("3600") // 1 hour default
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const durationOptions = [
    { value: "300", label: "5 minutes" },
    { value: "1800", label: "30 minutes" },
    { value: "3600", label: "1 hour" },
    { value: "21600", label: "6 hours" },
    { value: "86400", label: "24 hours" },
    { value: "604800", label: "7 days" },
  ]

  const validateFile = (file: File): string | null => {
    const maxSize = 5 * 1024 * 1024 // 5MB in bytes

    if (!file.type.startsWith("image/")) {
      return "Please select an image file"
    }

    if (file.size > maxSize) {
      return "File size must be less than 5MB"
    }

    return null
  }

  const uploadFile = async (file: File) => {
    setUploading(true)
    setUploadProgress(0)
    setError(null)

    try {
      const formData = new FormData()
      formData.append("file", file)
      formData.append("duration", duration)

      const progressInterval = setInterval(() => {
        setUploadProgress((prev) => Math.min(prev + 10, 90))
      }, 100)

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      clearInterval(progressInterval)
      setUploadProgress(100)

      if (!response.ok) {
        throw new Error("Upload failed")
      }

      const result = await response.json()
      setUploadedFile(result)
    } catch (error) {
      console.error("Upload error:", error)
      setError("Upload failed. Please try again.")
    } finally {
      setUploading(false)
      setTimeout(() => setUploadProgress(0), 1000)
    }
  }

  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: any[]) => {
      setError(null)

      if (rejectedFiles.length > 0) {
        setError("Please select a valid image file")
        return
      }

      const file = acceptedFiles[0]
      if (file) {
        const validationError = validateFile(file)
        if (validationError) {
          setError(validationError)
          return
        }

        uploadFile(file)
      }
    },
    [duration],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".gif", ".webp"],
    },
    multiple: false,
    disabled: uploading,
    maxSize: 5 * 1024 * 1024, // 5MB
  })

  const copyToClipboard = async () => {
    if (uploadedFile?.url) {
      await navigator.clipboard.writeText(uploadedFile.url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  return (
    <div className="space-y-6">
      {/* Duration Selection */}
      <Card className="p-6 border-border/50">
        <div className="flex items-center gap-3 mb-4">
          <Clock className="h-5 w-5 text-muted-foreground" />
          <h3 className="text-lg font-semibold text-foreground">URL Duration</h3>
        </div>
        <Select value={duration} onValueChange={setDuration} disabled={uploading}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select duration" />
          </SelectTrigger>
          <SelectContent>
            {durationOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className="text-sm text-muted-foreground mt-2">
          Choose how long the uploaded image URL will remain accessible
        </p>
      </Card>

      {/* Upload Area */}
      <Card className="overflow-hidden border-border/50">
        <div
          {...getRootProps()}
          className={cn(
            "relative p-12 text-center cursor-pointer transition-all duration-200",
            "border-2 border-dashed border-border/50 hover:border-border",
            "bg-gradient-to-br from-background to-muted/20",
            isDragActive && "border-primary bg-primary/5",
            uploading && "cursor-not-allowed opacity-50",
            error && "border-destructive/50 bg-destructive/5",
          )}
        >
          <input {...getInputProps()} />

          <div className="flex flex-col items-center gap-4">
            <div
              className={cn(
                "p-4 rounded-full transition-colors duration-200",
                "bg-muted/50 border border-border/50",
                isDragActive && "bg-primary/10 border-primary/20",
                error && "bg-destructive/10 border-destructive/20",
              )}
            >
              <Upload
                className={cn(
                  "h-8 w-8 transition-colors duration-200",
                  isDragActive ? "text-primary" : "text-muted-foreground",
                  error && "text-destructive",
                )}
              />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">
                {isDragActive ? "Drop your image here" : "Upload an image"}
              </h3>
              <p className="text-muted-foreground">Drag and drop or click to select • PNG, JPG, GIF, WebP • Max 5MB</p>
            </div>

            {!isDragActive && (
              <Button variant="outline" className="mt-2 bg-transparent" disabled={uploading}>
                Choose File
              </Button>
            )}
          </div>

          {/* Upload Progress */}
          {uploading && (
            <div className="absolute inset-x-6 bottom-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Uploading...</span>
                  <span className="text-foreground font-medium">{uploadProgress}%</span>
                </div>
                <Progress value={uploadProgress} className="h-2" />
              </div>
            </div>
          )}
        </div>

        {error && (
          <div className="p-4 bg-destructive/5 border-t border-destructive/20">
            <div className="flex items-center gap-2 text-destructive">
              <AlertCircle className="h-4 w-4" />
              <span className="text-sm font-medium">{error}</span>
            </div>
          </div>
        )}
      </Card>

      {/* Upload Result */}
      {uploadedFile && (
        <Card className="p-6 border-border/50 bg-gradient-to-br from-background to-muted/10">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
              <ImageIcon className="h-6 w-6 text-primary" />
            </div>

            <div className="flex-1 space-y-3">
              <div>
                <h4 className="font-semibold text-foreground">{uploadedFile.filename}</h4>
                <p className="text-sm text-muted-foreground">
                  {formatFileSize(uploadedFile.size)} • {uploadedFile.type}
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Image URL:</label>
                <div className="flex gap-2">
                  <div className="flex-1 p-3 bg-muted/50 border border-border/50 rounded-lg">
                    <code className="text-sm text-foreground break-all">{uploadedFile.url}</code>
                  </div>
                  <Button variant="outline" size="sm" onClick={copyToClipboard} className="shrink-0 bg-transparent">
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              {uploadedFile.expiresAt && (
                <p className="text-sm text-muted-foreground">
                  Expires: {new Date(uploadedFile.expiresAt).toLocaleString()}
                </p>
              )}
            </div>
          </div>
        </Card>
      )}
    </div>
  )
}
