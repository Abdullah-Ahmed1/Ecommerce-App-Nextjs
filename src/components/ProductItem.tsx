import Link from "next/link";
import Image from "next/image";
import React, { FC } from "react";
import Share from "../../public/share.svg";
import Heart from "../../public/heart.svg";
import Compare from "../../public/compare.svg";
import AddToCartButton from "./AddToCartButton";
import { IProductItem } from "@/types/GlobalTypes";

const ProductItem = ({ item }: any) => {
  console.log("item");
  return (
    <div className="bg-gray-100 cursor-pointer relative">
      <Link href={"/shop/12"} passHref>
        <div>
          <div className="relative w-60 h-60">
            <Image
              fill
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              src={"/images/livingArea.jpeg"}
              alt={"test"}
            />
          </div>
          <div className="px-3 py-3 flex gap-1 flex-col">
            <p className="font-bold text-lg">{item.node.title}</p>
            <p className="font-light text-xs text-gray-500">Stylish Cafe Chair</p>
            <p className="text-sm font-semibold">
              {item.node.priceRange.maxVariantPrice.currencyCode} {item.node.priceRange.maxVariantPrice.amount}
            </p>
          </div>
        </div>
        <div className="bg-stone-500 opacity-0 hover:opacity-100 bg-opacity-60 absolute transition duration-300 top-0 w-full h-full flex flex-col justify-center items-center">
          <AddToCartButton item={item} />
          <div className="mt-5 flex flex-row gap-4">
            <div className="flex flex-row items-center justify-center gap-1">
              <Image priority src={Share} className="filter invert" width={14} alt={"Cart"} />
              <p className="text-xs text-white ">share</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-1">
              <Image priority src={Compare} width={14} className="filter invert" alt={"Cart"} />
              <p className="text-xs text-white">Compare</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-1">
              <Image priority src={Heart} className="filter invert" width={14} alt={"Cart"} />
              <p className="text-xs text-white">Heart</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
