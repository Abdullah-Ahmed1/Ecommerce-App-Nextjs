"use client";

const CartModalSkeleton = () => {
  return (
    <div className="flex  flex-row items-center justify-between">
      <div className="flex w-full flex-row items-center gap-x-8 ">
        <div className="h-[50px] w-[50px] animate-pulse rounded bg-gray-400" />
        <div className="h-[20px] w-[90%] animate-pulse rounded bg-gray-400" />
      </div>
      <div className="ml-4 flex h-[20px] w-[20px] animate-pulse items-center justify-center rounded-[50%] bg-gray-500 " />
    </div>
  );
};

export default CartModalSkeleton;
