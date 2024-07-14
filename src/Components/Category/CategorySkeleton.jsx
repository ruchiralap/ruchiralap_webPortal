import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CategorySkeleton = () => {
  return (
    <div className="skeleton-card">
      <Skeleton height={250} />
      <Skeleton circle={true} height={250} width={250} />
      <Skeleton height={20} width={150} />
    </div>
  );
};

export default CategorySkeleton;
