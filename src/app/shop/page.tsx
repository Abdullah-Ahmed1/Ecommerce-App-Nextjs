import React from "react";
import Tune from "../../../public/svgs/tune.svg";
import Dots from "../../../public/svgs/fourDots.svg";
import Box from "../../../public/svgs/box.svg";
import Image from "next/image";

const Shop = () => {
  return (
    <div>
      <div className="bg-red-500 w-full h-80 relative">
        <div className="absolute top-0 left-0 flex flex-col justify-center items-center w-full h-80 gap-5">
          <p className="text-3xl font-bold">Shop</p>
          <p>{"Home > Shop"}</p>
        </div>
      </div>
      <div className="bg-cream flex flex-1 flex-row justify-between p-5 px-20">
        <div className="flex flex-row gap-x-5 items-center">
          <Image priority src={Tune} alt={"Tune icon"} />
          <p>Filter</p>
          <Image priority src={Dots} alt={"Dots icon"} width={20} height={20} />
          <Image priority src={Box} alt={"Box icon"} />
          <div className="border-newGray border-l-2 px-4">
            Showing 1-16 of 32 results
          </div>
        </div>
        <div className="flex flex-row items-center gap-x-5">
          <div className="flex flex-row gap-x-3  items-center">
            <p>Show</p>
            <input className="w-10 h-10 pl-3 " placeholder="16" type="text" />
          </div>
          <div className="flex flex-row gap-x-3  items-center">
            <p>Short by</p>
            <input
              className="w-20 h-10 pl-3 "
              placeholder="Default"
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
