import React from "react";
import Image from "next/image";
import Star from "../../../public/svgs/star.svg";

const sizeItems = ["L", "XL", "XS"];
const colorItems = ["red", "blue", "purple"];
const SingleProduct = () => {
  return (
    <div>
      <div className="flex flex-row p-5 bg-cream ">
        <div className="px-5 flex flexx-row gap-x-3 ">
          <p className="text-newGray">Home</p>
          <p>{">"}</p>
          <p className="text-newGray">Shop</p>
          <p>{">"}</p>
          <div className="px-5 border-l-2 border-newGray"> Product Name</div>
        </div>
      </div>
      <div className="p-10">
        <div className="flex flex-1  flex-row mt-10 gap-8 px-10">
          <div className="flex flex-col gap-y-5">
            <div className="relative w-16 h-16 rounded">
              <Image
                className="rounded"
                fill
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                src={"/images/livingArea.jpeg"}
                alt={"test"}
              />
            </div>
            <div className="relative w-16 h-16 rounded">
              <Image
                className="rounded"
                fill
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                src={"/images/livingArea.jpeg"}
                alt={"test"}
              />
            </div>
            <div className="relative w-16 h-16 rounded">
              <Image
                className="rounded"
                fill
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                src={"/images/livingArea.jpeg"}
                alt={"test"}
              />
            </div>
          </div>
          <div className="relative w-6/12 h-80 rounded">
            <Image
              className="rounded"
              fill
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              src={"/images/livingArea.jpeg"}
              alt={"test"}
            />
          </div>
          <div>
            <div className="px-10">
              <p className="text-2xl my-1">Product Name</p>
              <p className="text-md text-newGray  my-1"> Rs 25,0000</p>
              <div className="flex flex-row gap-5 h-8">
                <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                  <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-gray-300 dark:text-gray-500"
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
                Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio
                which boasts a clear midrange and extended highs for a sound.
              </div>
              <div>
                <p className="my-3">Size</p>
                <div className="flex flex-row gap-5">
                  {sizeItems.map((item, index) => {
                    return (
                      <div key={index} className="bg-cream h-8 w-8 flex justify-center items-center rounded">
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
                      <div key={index} className="bg-red h-8 w-8 flex justify-center items-center rounded ">
                        {item}
                      </div>
                    );
                  })}
                  <div></div>
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
