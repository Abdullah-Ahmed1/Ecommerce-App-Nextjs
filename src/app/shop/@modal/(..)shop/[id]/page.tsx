"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { gql } from "graphql-request";
import shopify from "../../../../../utils/shopify";
import { useRouter } from "next/navigation";
import LeftIcon from "../../../../../../public/left.svg";
import RightIcon from "../../../../../../public/right.svg";
import Full from "../../../../../../public/svgs/full.svg";

const sizeItems = ["L", "XL", "XS"];
const colorItems = ["red", "blue", "purple"];

interface IParams {
  params: {
    id: string;
  };
}
const PhotoModal: React.FC<IParams> = ({ params }) => {
  const router = useRouter();
  const [product, setProduct] = useState<any>(null);

  const handleRequest = async () => {
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

  useEffect(() => {
    handleRequest().then((response) => {
      setProduct(response.product);
    });
  }, []);

  useEffect(() => {});
  const handleBack = () => {
    router.back();
  };
  const stopPropgation = (event: any) => {
    event.stopPropagation();
  };
  return (
    <div
      onClick={handleBack}
      className="fixed top-0 flex h-[100dvh] w-screen items-center justify-center overflow-y-auto bg-gray-700  bg-opacity-50"
    >
      <div
        onClick={stopPropgation}
        className=" relative flex h-3/4 w-4/5 items-center rounded bg-white  p-5 opacity-100"
      >
        <button
          className="absolute right-0 top-0 mr-4 mt-4"
          aria-label="Open in full"
          onClick={() => {
            window.location.reload();
          }}
        >
          <Image src={Full} alt="open in full" />
        </button>
        {product && (
          <div className="  flex h-full w-full flex-row items-center gap-x-10">
            <div className="relative flex h-full w-full flex-row items-center justify-center rounded">
              <div className="flex flex-col gap-y-6">
                {product.images.edges.map((item: any) => {
                  return (
                    <Image
                      width={200}
                      height={200}
                      src={item.node.url}
                      alt="test"
                    />
                  );
                })}
              </div>
              <div className="flex flex-col items-center justify-between ">
                <div>
                  <Image
                    className="rounded"
                    sizes="(max-width: 800px) 100vw, (max-width: 1290px) 50vw, 33vw"
                    width={800}
                    height={800}
                    src={product.images?.edges[0].node.url}
                    alt={"test"}
                  />
                </div>
                <div className="flex w-full justify-center p-5 ">
                  <Image
                    priority
                    src={LeftIcon}
                    alt={"Left Icon"}
                    className=" cursor-pointer"
                  />
                  <Image
                    priority
                    src={RightIcon}
                    alt={"Right Icon"}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <div className="px-10">
              <p className="my-1 text-2xl">{product.title}</p>
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
                <p className="my-3">Size</p>
                <div className="flex flex-row gap-5">
                  {sizeItems.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex h-8 w-8 items-center justify-center rounded bg-cream"
                      >
                        <p> {item}</p>
                      </div>
                    );
                  })}
                  <div></div>
                </div>
              </div>
              <div>
                <p className="my-3">Color</p>
                <div className="flex flex-row gap-5">
                  {colorItems.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="bg-red flex h-8 w-8 items-center justify-center rounded "
                      ></div>
                    );
                  })}
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoModal;
