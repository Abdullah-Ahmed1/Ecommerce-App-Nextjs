import shopify from "@/utils/shopify";
import { gql } from "graphql-request";
import React, { useEffect } from "react";
import Image from "next/image";
import ProductItem from "@/components/ProductItem";
import { IProductItem, IProductItems } from "@/types/GlobalTypes";

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

const Home = async () => {
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
    <>
      <div className="h-screen bg-green-800">
        <div className="flex flex-1 relative w-full  bg-red-500">
          <div className="h-[86vh]">
            <Image
              fill
              quality={100}
              style={{ objectFit: "cover" }}
              // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              src={"/images/Cover.png"}
              // height={500}
              // width={1500}
              alt={"cover"}
            />
          </div>

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
            <button className="bg-darkCream px-10 py-2 text-md text-white mt-5">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col items-center z-50 mt-10 mb-5">
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
            {data?.products?.edges.map((item: any, index) => {
              return <ProductItem key={index} item={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
