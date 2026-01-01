const SkeletonDetail = () => {
  return (
    <div className="flex flex-col lg:flex-row animate-pulse">
      {/* Image Skeleton */}
      <div className="lg:w-1/2 bg-gray-300 dark:bg-gray-700 h-72 lg:h-full relative">
        <div className="absolute top-4 left-4 w-24 h-6 bg-gray-400 dark:bg-gray-600 rounded-full" />
      </div>

      {/* Details Skeleton */}
      <div className="lg:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4" />
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full" />
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6" />

          {/* Grid Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="h-12 bg-gray-200 dark:bg-gray-600 rounded" />
            <div className="h-12 bg-gray-200 dark:bg-gray-600 rounded" />
            <div className="h-12 bg-gray-200 dark:bg-gray-600 rounded" />
            <div className="h-12 bg-gray-200 dark:bg-gray-600 rounded" />
          </div>

          <div className="h-6 w-24 bg-gray-200 dark:bg-gray-600 rounded-full" />
        </div>

        {/* Button Skeleton */}
        <div className="h-10 w-full bg-gray-300 dark:bg-gray-700 rounded-lg mt-6" />
      </div>
    </div>
  );
};

export default SkeletonDetail;
