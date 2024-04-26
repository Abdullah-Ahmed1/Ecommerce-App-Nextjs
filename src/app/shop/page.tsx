import React from "react";
import Image from "next/image";
import { gql } from "graphql-request";

import Box from "../../../public/svgs/box.svg";
import Tune from "../../../public/svgs/tune.svg";
import ProductItem from "@/components/ProductItem";
import Dots from "../../../public/svgs/fourDots.svg";
import shopify from "@/utils/shopify";
import { IProductItems, IProductItem } from "@/types/GlobalTypes";
interface IData {
  products: {
    edges: {
      node: {
        id: string;
        title: string;
        priceRange: {
          maxVariantPrice: {
            amount: string;
            currencyCode: string;
          };
        };
        featuredImage: {
          id: string;
          url: string;
        };
        images: {
          nodes: {
            id: string;
            url: string;
          };
        };
      };
    }[];
  };
}

const ProducItems = [
  {
    name: "Lolito 1",
    price: "200.000.000",
    discount: false,
    dicountPercent: "10000",
    disountedPrice: "100.000.000",
    image: "/images/bedroom.jpeg",
  },
  {
    name: "Lolito 2",
    price: "200.000.000",
    discount: false,
    dicountPercent: "10000",
    disountedPrice: "100.000.000",
    image: "/images/bedroom.jpeg",
  },
  {
    name: "Lolito 3",
    price: "200.000.000",
    discount: false,
    dicountPercent: "10000",
    disountedPrice: "100.000.000",
    image: "/images/bedroom.jpeg",
  },
  {
    name: "Lolito 4",
    price: "200.000.000",
    discount: false,
    dicountPercent: "10000",
    disountedPrice: "100.000.000",
    image: "/images/bedroom.jpeg",
  },
  {
    name: "Lolito 5",
    price: "200.000.000",
    discount: false,
    dicountPercent: "10000",
    disountedPrice: "100.000.000",
    image: "/images/bedroom.jpeg",
  },
];
const Shop = async () => {
  const handleRequest = async () => {
    "use server";
    const query = gql`
      query getAllProducts {
        products(first: 5) {
          edges {
            node {
              id
              title
              priceRange {
                maxVariantPrice {
                  amount
                  currencyCode
                }
              }
              featuredImage {
                id
                url
              }
              images(first: 5) {
                nodes {
                  id
                  url
                }
              }
            }
          }
        }
      }
    `;
    const results: IProductItems = (await shopify(
      query,
      null
    )) as IProductItems;
    console.log("results", results);
    return results;
  };
  const data: IProductItems = (await handleRequest()) as IProductItems;

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
      <div className="p-10">
        <div className="flex flex-1 flex-wrap flex-row justify-center mt-10 gap-8 px-20">
          {data?.products?.edges.map((item: IProductItem, index: number) => {
            return <ProductItem key={index} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
