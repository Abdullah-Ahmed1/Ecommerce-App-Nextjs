import React from "react";
import Image from "next/image";

import shopify from "@/utils/shopify";
import Box from "../../../public/svgs/box.svg";
import Tune from "../../../public/svgs/tune.svg";
import ProductItem from "@/components/ProductItem";
import Dots from "../../../public/svgs/fourDots.svg";
import { IProductItems, IProductItem } from "@/types/GlobalTypes";
import { getAllProductsQuery } from "@/graphql/queries/allProducts";

const Shop = async () => {
  const handleRequest = async () => {
    "use server";
    const results: IProductItems = (await shopify(
      getAllProductsQuery,
      null,
    )) as IProductItems;
    return results;
  };
  const data: IProductItems = (await handleRequest()) as IProductItems;

  return (
    <div>
      <div className="relative h-80 w-full bg-red-500">
        <div className="absolute left-0 top-0 flex h-80 w-full flex-col items-center justify-center gap-5">
          <p className="text-3xl font-bold">Shop</p>
          <p>{"Home > Shop"}</p>
        </div>
      </div>
      <div className="flex flex-1 flex-row justify-between bg-cream p-5 px-20">
        <div className="flex flex-row items-center gap-x-5">
          <Image
            className="cursor-pointer"
            priority
            src={Tune}
            alt={"Tune icon"}
          />
          <p>Filter</p>

          <Image
            className="cursor-pointer"
            priority
            src={Dots}
            alt={"Dots icon"}
            width={20}
            height={20}
          />
          <Image
            className="cursor-pointer"
            priority
            src={Box}
            alt={"Box icon"}
          />
          <div className="border-l-2 border-newGray px-4">
            Showing 1-16 of 32 results
          </div>
        </div>
        <div className="flex flex-row items-center gap-x-5">
          <div className="flex flex-row items-center  gap-x-3">
            <p>Show</p>
            <input className="h-10 w-10 pl-3 " placeholder="16" type="text" />
          </div>
          <div className="flex flex-row items-center  gap-x-3">
            <p>Short by</p>
            <input
              className="h-10 w-20 pl-3 "
              placeholder="Default"
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="p-10">
        <div className="mt-10 flex flex-1 flex-row flex-wrap justify-center gap-8 px-20">
          {data?.products?.edges.map((item: IProductItem, index: number) => {
            return <ProductItem key={index} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
