export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center space-y-4">
          <div className="h-10 w-72 max-w-full mx-auto bg-muted animate-pulse rounded-md" />
          <div className="h-6 w-full max-w-2xl mx-auto bg-muted animate-pulse rounded-md" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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