const UserSkeleton = () => {
  return (
    <div className="flex w-96 flex-col mt-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="flex w-96 h-40 p-4 border rounded-md shadow-md mt-4">
          <div className="ml-4 flex flex-col space-y-2 w-full gap-3">
            <p className="skeleton h-4 w-3/4"></p>
            <p className="skeleton h-4 w-3/4"></p>
            <p className="skeleton h-4 w-3/4"></p>
            <p className="skeleton h-4 w-3/4"></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserSkeleton;
