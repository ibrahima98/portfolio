export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="space-y-8">
        <div className="h-8 w-64 bg-muted animate-pulse rounded-md" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="space-y-4">
              <div className="aspect-[16/9] bg-muted animate-pulse rounded-lg" />
              <div className="space-y-2">
                <div className="h-6 w-3/4 bg-muted animate-pulse rounded-md" />
                <div className="h-4 w-1/2 bg-muted animate-pulse rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 