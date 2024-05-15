import React from "react";
import Image from "next/image";
import shopify from "@/utils/shopify";
import { gql } from "graphql-request";
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
      null,
    )) as IProductItems;
    return results;
  };
  const data: IProductItems = (await handleRequest()) as IProductItems;

  return (
    <>
      <div className="h-screen bg-green-800">
        <div className="relative flex w-full flex-1  bg-red-500">
          <div className="h-[86vh]">
            <Image
              fill
              priority
              quality={100}
              alt={"cover"}
              src={"/images/banner1.png"}
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="absolute bottom-40 right-20 bg-cream px-10 py-5">
            <p className="text-xs font-semibold">New Arrival</p>
            <h3 className="mt-2 text-4xl font-bold text-darkCream">
              Discover Our <br />
              New Collection{" "}
            </h3>
            <p className="mt-2 text-sm">
              Lorem ipsum dolor sit amet <br />
              consectetur adipisicing elit. Perspiciatis accusantium <br />
              dignissimos ducimus maiores ea tempore in,
              <br />
            </p>
            <button className="text-md mt-5 bg-darkCream px-10 py-2 text-white">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="z-50 mb-5 mt-10 flex flex-1 flex-col items-center">
        <p className="text-xl font-semibold">Browse The Range</p>
        <p className="text-sm ">Check Our Products </p>
        <div className="mt-10 flex flex-1 flex-row gap-x-10">
          {CategoryItems.map((item, index) => {
            return (
              <div key={index} className="flex flex-col">
                <div className="relative h-96 w-80 cursor-pointer rounded-md">
                  <Image
                    fill
                    priority
                    quality={100}
                    alt={item.name}
                    src={item.image}
                    className="rounded-md"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <p className="text-center">{item.name}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-14 flex flex-col">
          <p className="text-center text-xl font-semibold">Our Products</p>
          <div className="mt-10 flex flex-1 flex-row flex-wrap justify-center gap-8 px-40">
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
