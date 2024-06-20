"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Cross from "../../../public/svgs/close.svg";
import Dummy from "../../../public/images/dinning.jpeg";

const CartItems = [
  {
    id: 1,
    image: "//",
    title: "test1",
    Quantity: "2",
    Price: 123,
  },
  {
    id: 2,
    image: "//",
    title: "test1",
    Quantity: "2",
    Price: 123,
  },
];

const CartModal = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  const handleModalClick = (event: any) => {
    event.stopPropagation();
  };

  return (
    <div
      onClick={handleBack}
      className="fixed  right-0 top-0 z-[10000] flex h-screen w-screen justify-end  bg-gray-700  bg-opacity-50"
    >
      <div
        onClick={handleModalClick}
        className="flex h-[500px] w-[400px] flex-col bg-white px-4 "
      >
        <div className="flex flex-row justify-between border-b-[1px] border-gray-400 py-[20px]">
          <h2>Shopping Cart</h2>
          <Image
            onClick={handleBack}
            src={Cross}
            alt="Close"
            className="cursor-pointer"
          />
        </div>
        <div className="mt-4 flex h-full flex-col justify-between  pb-4">
          <div className="flex flex-col gap-y-[10px]">
            {CartItems.map((item) => (
              <div className="flex  flex-row items-center justify-between">
                <div className="flex w-full flex-row items-center gap-x-8 ">
                  <Image src={Dummy} alt="image" width={50} height={50} />
                  <div className="flex flex-col">
                    <p>Asgaard Sofa</p>
                    <div className="flex flex-row">
                      <p>1 x</p>
                      <p>{item.Price} + Rs</p>
                    </div>
                  </div>
                </div>

                <div className="flex h-[20px] w-[20px] items-center justify-center rounded-[50%] bg-gray-500 ">
                  <Image
                    src={Cross}
                    alt="cross"
                    width={14}
                    height={14}
                    className="cursor-pointer invert filter"
                  />
                </div>
              </div>
            ))}
          </div>
          <section className="flex w-1/2 flex-row justify-between">
            <p>Subtotal</p>
            <p>25000</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
