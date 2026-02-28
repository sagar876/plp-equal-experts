export default function ProductSkeleton() {
  return (
    <div className="border rounded-lg p-4 shadow-sm flex flex-col h-full overflow-hidden">
      <div className="w-full h-48 mb-4 shrink-0 rounded bg-gray-200 relative overflow-hidden">
        <span className="skeleton-shimmer absolute inset-0 block" aria-hidden />
      </div>

      <div className="h-5 mb-2 w-3/4 rounded bg-gray-200 shrink-0 relative overflow-hidden">
        <span className="skeleton-shimmer absolute inset-0 block" aria-hidden />
      </div>

      <div className="space-y-2 mb-4 flex-1 min-h-0">
        <div className="h-3 w-full rounded bg-gray-200 relative overflow-hidden">
          <span className="skeleton-shimmer absolute inset-0 block" aria-hidden />
        </div>
        <div className="h-3 w-full rounded bg-gray-200 relative overflow-hidden">
          <span className="skeleton-shimmer absolute inset-0 block" aria-hidden />
        </div>
        <div className="h-3 w-2/3 rounded bg-gray-200 relative overflow-hidden">
          <span className="skeleton-shimmer absolute inset-0 block" aria-hidden />
        </div>
      </div>

      <div className="flex justify-between items-center shrink-0 gap-4">
        <div className="h-6 w-16 rounded bg-gray-200 relative overflow-hidden">
          <span className="skeleton-shimmer absolute inset-0 block" aria-hidden />
        </div>
        <div className="h-9 w-24 rounded bg-gray-200 relative overflow-hidden">
          <span className="skeleton-shimmer absolute inset-0 block" aria-hidden />
        </div>
      </div>
    </div>
  );
}
