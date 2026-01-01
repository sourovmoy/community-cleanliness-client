const SkeletonIssueCard = () => {
  return (
    <div className="rounded-2xl shadow-lg overflow-hidden h-98 animate-pulse">
      {/* Image Skeleton */}
      <div className="relative">
        <div className="w-full h-48 bg-gray-300 dark:bg-gray-700" />

        {/* Category Badge Skeleton */}
        <div className="absolute top-3 left-3 w-20 h-6 bg-gray-200 dark:bg-gray-600 rounded-full" />
      </div>

      <div className="p-5 space-y-3">
        {/* Title Skeleton */}
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4" />
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2" />

        {/* Status Badge Skeleton */}
        <div className="w-24 h-6 bg-gray-200 dark:bg-gray-600 rounded-full" />

        {/* Location & Budget */}
        <div className="flex items-center justify-between mt-3">
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-28" />
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-24" />
        </div>

        {/* Button Skeleton */}
        <div className="mt-4">
          <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded-xl w-32" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonIssueCard;
