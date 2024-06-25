"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import shopify from "@/utils/shopify";
import { useCart } from "@/utils/contex-provider";
import Cross from "../../../public/svgs/close.svg";
import { getCartQuery } from "@/graphql/queries/getCart";
import { cartLinesRemoveMutation } from "@/graphql/mutations/cartLinesRemove";

const CartModal = () => {
  const router = useRouter();
  const cartContext = useCart();
  const [cartData, setCartData] = useState<any>(null);
  const [cartUpdated, setCartUpdated] = useState(true);
  const cart = localStorage.getItem("cart");

  const variables = {
    cartId: (cart && JSON.parse(cart)?.id) || null,
  };

  useEffect(() => {
    if (!cartUpdated) return;
    shopify(getCartQuery, variables).then((response) => {
      setCartData(response.cart);
      localStorage.setItem("cart", JSON.stringify(response.cart));
      cartContext.setCartItemsNumber(response.cart.lines.edges.length);
      setCartUpdated(false);
    });
  }, [cartUpdated]);

  const handleBack = () => {
    router.back();
  };

  const handleRemoveItemFromCart = async (id: string) => {
    const cartId = cart && JSON.parse(cart)?.id;
    const cartLinesRemoveVariables = {
      cartId,
      lineIds: id,
    };
    await shopify(cartLinesRemoveMutation, cartLinesRemoveVariables);
    setCartUpdated(true);
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
            {// cartData ? (
            cartData?.lines.edges.map((item: any) => (
              <div className="flex  flex-row items-center justify-between">
                <div className="flex w-full flex-row items-center gap-x-8 ">
                  <Image
                    src={item.node.merchandise.product.images.edges[0].node.url}
                    alt="image"
                    width={50}
                    height={50}
                  />
                  <div className="flex flex-col">
                    <p>{item.node.merchandise.product.title}</p>
                    <div className="flex flex-row">
                      <p>1 x</p>
                      <p>{item.Price} + Rs</p>
                    </div>
                  </div>
                </div>

                <div
                  onClick={() => handleRemoveItemFromCart(item.node.id)}
                  className="flex h-[20px] w-[20px] items-center justify-center rounded-[50%] bg-gray-500 "
                >
                  <Image
                    src={Cross}
                    alt="cross"
                    width={14}
                    height={14}
                    className="cursor-pointer invert filter"
                  />
                </div>
              </div>
            ))
            // ) : (
            // <h2>nothing to show</h2>
            // )
            }
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
