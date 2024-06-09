import React from "react";
import Image from "next/image";
import shopify from "@/utils/shopify";
import { gql } from "graphql-request";
import twColors from "tailwindcss/colors";

interface IParams {
  params: {
    id: string;
  };
}

const sizeItems = ["L", "XL", "XS"];
const colorItems = ["red", "blue", "purple"];
const productInfo = {
  SKU: "SS001",
  Category: "Sofas",
  Tags: "Sofa, Chair, Home, Shop",
};

const SingleProduct: React.FC<IParams> = async ({ params }) => {
  const handleRequest = async () => {
    "use server";
    const query = gql`
    query getSingleProduct {
      product(id: "gid://shopify/Product/${params.id}") {
        id
        title

        featuredImage {
          url
          id
        }
        images(first: 5) {
          edges {
            node {
              url
              id
            }
          }
        }
      }
    }`;

    const results: any = (await shopify(query, null)) as any;
    return results;
  };
  const data: any = (await handleRequest()) as any;

  return (
    <div>
      <div className="flex flex-row bg-cream p-5 ">
        <div className="flexx-row flex gap-x-3 px-5 ">
          <p className="text-newGray">Home</p>
          <p>{">"}</p>
          <p className="text-newGray">Shop</p>
          <p>{">"}</p>
          <div className="border-l-2 border-newGray px-5">
            {data.product.title}
          </div>
        </div>
      </div>
      <div className="p-10">
        <div className="mt-10 flex  flex-1 flex-row gap-8 px-10">
          <div className="flex flex-col gap-y-5">
            {data.product.images.edges.map((item: any, index: number) => (
              <div key={index} className="relative h-16 w-16 rounded">
                <Image
                  className="rounded"
                  fill
                  quality={100}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  src={item.node.url}
                  alt={"test"}
                />
              </div>
            ))}
          </div>
          <div className="relative h-80 w-6/12 rounded">
            <Image
              className="rounded"
              fill
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              src={data.product.images.edges[0].node.url}
              alt={"test"}
            />
          </div>
          <div>
            <div className="px-10">
              <p className="my-1 text-2xl">{data.product.title}</p>
              <p className="text-md my-1  text-newGray"> Rs 25,0000</p>
              <div className="flex h-8 flex-row gap-5">
                <div className="mb-1 flex items-center space-x-1 rtl:space-x-reverse">
                  <svg
                    className="h-4 w-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="h-4 w-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="h-4 w-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="h-4 w-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="h-4 w-4 text-gray-300 dark:text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>
                <div className="border-l-2 px-5">
                  <p>5 customers review</p>
                </div>
              </div>
              <div className="w-9/12">
                Setting the bar as one of the loudest speakers in its class, the
                Kilburn is a compact, stout-hearted hero with a well-balanced
                audio which boasts a clear midrange and extended highs for a
                sound.
              </div>
              <div>
                <p className="my-3">Color</p>
                <div className="flex flex-row gap-5">
                  {colorItems.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className={`flex h-8 w-8 items-center justify-center rounded-full `}
                        style={{
                          backgroundColor:
                            twColors[item as keyof typeof twColors]["700"],
                        }}
                      ></div>
                    );
                  })}
                </div>
                <div className="mt-5 flex flex-row gap-x-5">
                  <div className="flex flex-row items-center gap-x-5 rounded-md border border-black p-2">
                    <button>-</button>
                    <p>1</p>
                    <button>+</button>
                  </div>
                  <button className="rounded-xl border border-black px-5 py-4">
                    Add to Cart
                  </button>
                  <button className="rounded-xl border border-black px-5 py-4">
                    + Compare
                  </button>
                </div>
                <div className="mt-10 h-px w-full bg-gray-300"></div>
                <div className="mt-10">
                  <ul className="flex flex-col gap-y-3">
                    {Object.entries(productInfo).map(([key, value], index) => {
                      return (
                        <li key={index} className="text-sm">
                          <span className="inline-block w-20 text-sm ">
                            {key}{" "}
                          </span>
                          : {value}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
