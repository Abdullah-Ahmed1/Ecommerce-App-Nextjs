"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import shopify from "@/utils/shopify";
import { useCart } from "@/utils/contex-provider";
import Cross from "../../../public/svgs/close.svg";
import { getCartQuery } from "@/graphql/queries/getCart";
import { cartLinesRemoveMutation } from "@/graphql/mutations/cartLinesRemove";
import Spinner from "./Spinner";

const CartModal = () => {
  const router = useRouter();
  const cartContext = useCart();
  const cart = localStorage.getItem("cart");
  const [cartData, setCartData] = useState<any>(null);
  const [cartUpdated, setCartUpdated] = useState(true);
  const [checkoutUrl, setCheckoutUrl] = useState(null);
  const [loading, setLoading] = useState<{
    loading: boolean;
    id: string | null;
  }>({ loading: false, id: null });

  const variables = {
    cartId: (cart && JSON.parse(cart)?.id) || null,
  };

  useEffect(() => {
    if (!cartUpdated) return;
    shopify(getCartQuery, variables).then((response) => {
      setCheckoutUrl(response.cart.checkoutUrl);
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
    setLoading({ loading: true, id });
    const cartId = cart && JSON.parse(cart)?.id;
    const cartLinesRemoveVariables = {
      cartId,
      lineIds: id,
    };
    await shopify(cartLinesRemoveMutation, cartLinesRemoveVariables);
    setCartUpdated(true);
    setLoading({ loading: false, id: null });
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
        <div className="mt-4 flex h-full flex-col pb-4">
          <div className="flex flex-1 flex-col gap-y-[10px]">
            {// cartData ? (
            cartData?.lines.edges.map((item: any, index: number) => (
              <div
                key={index}
                className="flex  flex-row items-center justify-between"
              >
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
                {!loading.loading && (
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
                )}
                {loading.loading && loading.id === item.node.id && <Spinner />}
                {loading.loading && loading.id !== item.node.id && (
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
                )}
              </div>
            ))
            // ) : (
            // <h2>nothing to show</h2>
            // )
            }
          </div>
          <section className="flex flex-col items-center">
            <div className="mx-[20px] flex w-full justify-between">
              <p>Subtotal</p>
              <p>25000</p>
            </div>
            <div className="my-[20px] h-[1px] w-full bg-gray-400"></div>
            <div className="flex items-center justify-center">
              {checkoutUrl && (
                <button
                  onClick={() => {
                    checkoutUrl &&
                      window.open(
                        "https://ecommerce-store10001.myshopify.com/checkouts/cn/Z2NwLWFzaWEtc291dGhlYXN0MTowMUoxMkIyMjBFTVMwVkszNzBHU1dWSzRYUg",
                        "_blank",
                      );
                  }}
                  className="rounded border-[2px] border-gray-400 px-[100px] py-[5px]"
                >
                  Checkout
                </button>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
