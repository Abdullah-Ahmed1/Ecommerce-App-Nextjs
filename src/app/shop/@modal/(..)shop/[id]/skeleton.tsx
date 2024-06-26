const Skeleton = () => {
  return (
    <div className="flex h-full w-full flex-row items-center gap-x-10 ">
      <div className="relative flex h-full w-[50%] flex-row items-center justify-center gap-x-[10px] rounded ">
        <div className="flex flex-col gap-y-6">
          {Array.from({ length: 3 }).map((item: any) => {
            return (
              <div className="h-[50px] w-[50px] animate-pulse rounded bg-gray-400" />
            );
          })}
        </div>
        <div className="flex flex-col items-center justify-between ">
          <div className="h-[350px] w-[350px] animate-pulse rounded bg-gray-400" />
        </div>
      </div>
      <div className="w-full px-10">
        <div className="h-[22px] w-[50%] animate-pulse rounded bg-gray-400" />
        <div className="mt-2 h-[20px] w-[30%] animate-pulse rounded bg-gray-400" />
        <div className=" flex h-8 flex-row gap-5">
          <div className="mb-1 flex h-[20px] animate-pulse items-center space-x-1 bg-gray-400 rtl:space-x-reverse " />
        </div>
        <div className="w-full">
          {Array.from({ length: 4 }).map(() => (
            <div className="mt-2 h-[20px] w-[90%] animate-pulse bg-gray-400" />
          ))}
        </div>
        <div>
          <div className="my-2  mt-4 h-[20px] w-[30%] animate-pulse rounded bg-gray-400" />
          <div className="flex flex-row gap-5">
            {Array.from({ length: 3 }).map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex h-8 w-8 animate-pulse items-center justify-center rounded bg-gray-400"
                ></div>
              );
            })}
          </div>
        </div>
        <div>
          <div className="my-2  mt-4 h-[20px] w-[30%] animate-pulse rounded bg-gray-400" />
          <div className="flex flex-row gap-5">
            {Array.from({ length: 3 }).map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex h-8 w-8 animate-pulse items-center justify-center rounded bg-gray-400"
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
