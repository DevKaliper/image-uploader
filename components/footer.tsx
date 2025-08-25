export default function Footer() {
  return (
    <footer className="border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-center px-4">
        <div className="text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Image Uploader. All rights reserved. Licensed under MIT.</p>
        </div>
      </div>
    </footer>
  )
}
