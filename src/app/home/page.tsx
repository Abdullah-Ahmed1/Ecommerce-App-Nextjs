"use client";
import shopify from "@/utils/shopify";
import { gql } from "graphql-request";
import React, { useEffect } from "react";
import Image from "next/image";
import Compare from "../../../public/compare.svg";
import Share from "../../../public/share.svg";
import Heart from "../../../public/heart.svg";
import { sendGTMEvent } from "@next/third-parties/google";

const CategoryItems = [
  {
    name: "Bedroom",
    image: "/images/bedroom.jpeg",
  },
  {
    name: "Living",
    image: "/images/livingArea.jpeg",
  },
  {
    name: "Dinning",
    image: "/images/dinning.jpeg",
  },
];

const ProducItems = [
  {
    name: "Lolito 1",
    price: "200.000.000",
    discount: false,
    dicountPercent: null,
    disountedPrice: "100.000.000",
    image: "/images/bedroom.jpeg",
  },
  {
    name: "Lolito 2",
    price: "200.000.000",
    discount: false,
    dicountPercent: null,
    disountedPrice: "100.000.000",
    image: "/images/bedroom.jpeg",
  },
  {
    name: "Lolito 3",
    price: "200.000.000",
    discount: false,
    dicountPercent: null,
    disountedPrice: "100.000.000",
    image: "/images/bedroom.jpeg",
  },
  {
    name: "Lolito 4",
    price: "200.000.000",
    discount: false,
    dicountPercent: null,
    disountedPrice: "100.000.000",
    image: "/images/bedroom.jpeg",
  },
  {
    name: "Lolito 5",
    price: "200.000.000",
    discount: false,
    dicountPercent: null,
    disountedPrice: "100.000.000",
    image: "/images/bedroom.jpeg",
  },
];
const Home = () => {
  return (
    <>
      <div className="h-screen">
        <div className="flex flex-1 w-screen  relative h-4/5">
          <Image
            fill
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            src={"/images/Cover.png"}
            alt={"cover"}
          />
          <div className="absolute bottom-40 right-20 bg-cream px-10 py-5">
            <p className="text-xs font-semibold">New Arrival</p>
            <h3 className="text-4xl font-bold text-darkCream mt-2">
              Discover Our <br />
              New Collection{" "}
            </h3>
            <p className="text-sm mt-2">
              Lorem ipsum dolor sit amet <br />
              consectetur adipisicing elit. Perspiciatis accusantium <br />
              dignissimos ducimus maiores ea tempore in,
              <br />
            </p>
            <button className="bg-darkCream px-10 py-2 text-md text-white mt-5">Buy Now</button>
          </div>
        </div>
      </div>
      <div className=" flex flex-1 flex-col items-center transform -translate-y-28">
        <p className="text-xl font-semibold">Browse The Range</p>
        <p className="text-sm ">Check Our Products </p>
        <div className="flex flex-1 flex-row mt-10 gap-x-10">
          {CategoryItems.map((item, index) => {
            return (
              <div key={index} className="flex flex-col">
                <div className="w-80 h-96 relative rounded-md cursor-pointer">
                  <Image
                    className="rounded-md"
                    fill
                    quality={100}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                    src={item.image}
                    alt={item.name}
                  />
                </div>
                <p className="text-center">{item.name}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-14 flex flex-col">
          <p className="text-xl font-semibold text-center">Our Products</p>
          <div className="flex flex-1 flex-wrap flex-row justify-center mt-10 gap-8 px-40">
            {ProducItems.map((item, index) => {
              return (
                <div key={index} className="bg-gray-100 cursor-pointer relative">
                  <>
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
                        <p className="font-bold text-lg">{item.name}</p>
                        <p className="font-light text-xs text-gray-500">Stylish Cafe Chair</p>
                        <p className="text-sm font-semibold">Rp 20.00.000</p>
                      </div>
                    </div>
                    <div className="bg-red-500 absolute  transition duration-300 top-0 w-full h-full flex flex-col justify-center items-center">
                      <button
                        id="test1"
                        onClick={() => sendGTMEvent({ event: "buttonClickedyes", id: "test", productName: item.name })}
                        className="bg-white px-10 py-2 text-darkCream"
                      >
                        Add to cart
                      </button>
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
                  </>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
