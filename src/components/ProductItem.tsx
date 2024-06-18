"use client";
import Image from "next/image";
import React, { useRef } from "react";
import Share from "../../public/share.svg";
import Heart from "../../public/heart.svg";
import { useRouter } from "next/navigation";
import Compare from "../../public/compare.svg";
import AddToCartButton from "./AddToCartButton";

const ProductItem = ({ item }: any) => {
  const router = useRouter();
  const AddToCartRef = useRef<null | HTMLDivElement>(null);
  const handleClickProduct = (event: any) => {
    if (AddToCartRef.current?.contains(event.target as HTMLElement)) {
      return;
    } else {
      router.push(
        `/shop/${item.node.id.split("/")[item.node.id.split("/").length - 1]}`,
        { scroll: false },
      );
      event.stopPropagation();
    }
  };
  return (
    <div>
      <div
        onClick={handleClickProduct}
        className="relative cursor-pointer bg-gray-100"
      >
        <div>
          <div className="relative h-60 w-60">
            <Image
              fill
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              src={item.node.featuredImage.url}
              alt={"test"}
            />
          </div>
          <div className="flex flex-col gap-1 px-3 py-3">
            <p className="text-lg font-bold">{item.node.title}</p>
            <p className="text-xs font-light text-gray-500">
              Stylish Cafe Chair
            </p>
            <p className="text-sm font-semibold">
              {item.node.priceRange.maxVariantPrice.currencyCode}{" "}
              {item.node.priceRange.maxVariantPrice.amount}
            </p>
          </div>
        </div>
        <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center bg-stone-500 bg-opacity-60 opacity-0 transition duration-300 hover:opacity-100">
          <AddToCartButton ref={AddToCartRef} />
          <div className="mt-5 flex flex-row gap-4">
            <div className="flex flex-row items-center justify-center gap-1">
              <Image
                priority
                src={Share}
                className="invert filter"
                width={14}
                alt={"Cart"}
              />
              <p className="text-xs text-white ">share</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-1">
              <Image
                priority
                src={Compare}
                width={14}
                className="invert filter"
                alt={"Cart"}
              />
              <p className="text-xs text-white">Compare</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-1">
              <Image
                priority
                src={Heart}
                className="invert filter"
                width={14}
                alt={"Cart"}
              />
              <p className="text-xs text-white">Heart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
