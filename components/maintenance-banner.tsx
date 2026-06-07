import { AlertTriangle } from "lucide-react"

export default function MaintenanceBanner() {
  return (
    <div
      role="alert"
      className="mb-4 flex gap-3 rounded-lg border-2 border-amber-500 bg-amber-50 p-4 dark:border-amber-400 dark:bg-amber-950/50"
    >
      <AlertTriangle
        className="mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400"
        aria-hidden="true"
      />
      <div className="space-y-1">
        <p className="font-semibold text-amber-900 dark:text-amber-100">
          Project under maintenance
        </p>
        <p className="text-sm text-amber-800 dark:text-amber-200">
          Some features may not work as expected. Uploads and URL generation could
          be affected.
        </p>
      </div>
    </div>
  )
}
