import { IssueCardContainer } from "../Card/Card";

const SkeletonIssueCard = () => {
  return (
    <IssueCardContainer>
      {/* Image Skeleton - Fixed Height (matches IssueCard) */}
      <div className="relative h-48 flex-shrink-0">
        <div className="w-full h-full bg-gray-300 dark:bg-gray-700 animate-pulse" />
        {/* Category Badge Skeleton (matches IssueCard position) */}
        <div className="absolute top-3 left-3 w-20 h-6 bg-gray-200 dark:bg-gray-600 rounded-full animate-pulse" />
      </div>

      {/* Content Skeleton - Matches IssueCard structure exactly */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Title Skeleton - Fixed Height (matches IssueCard h-12) */}
        <div className="h-12 mb-2">
          <div className="space-y-2">
            <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-3/4 animate-pulse" />
            <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/2 animate-pulse" />
          </div>
        </div>

        {/* Location & Budget Skeleton - Fixed Height (matches IssueCard h-8) */}
        <div className="flex items-center justify-between mb-4 h-8">
          <div className="flex items-center gap-1">
            {/* Location icon placeholder */}
            <div className="w-4 h-4 bg-gray-300 dark:bg-gray-700 rounded animate-pulse flex-shrink-0" />
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-20 animate-pulse" />
          </div>
          <div className="flex items-center gap-1">
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-16 animate-pulse" />
            {/* Currency icon placeholder */}
            <div className="w-4 h-4 bg-gray-300 dark:bg-gray-700 rounded animate-pulse flex-shrink-0" />
          </div>
        </div>

        {/* Button Skeleton - Fixed at Bottom (matches IssueCard) */}
        <div className="mt-auto">
          <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded-xl w-full animate-pulse" />
        </div>
      </div>
    </IssueCardContainer>
  );
};

export default SkeletonIssueCard;
