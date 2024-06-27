"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import shopify from "@/utils/shopify";
import Search from "../../public/search.svg";
import Delete from "../../../public/delete.svg";
import { useCart } from "@/utils/contex-provider";
import Spinner from "@/components/shared/Spinner";
import { getCartQuery } from "@/graphql/queries/getCart";
import Skeleton from "./skeleton";

const Cart = () => {
  const cartContext = useCart();
  const cart = localStorage.getItem("cart");
  const [cartData, setCartData] = useState<any>(null);
  const [checkoutUrl, setCheckoutUrl] = useState(false);
  const [cartUpdated, setCartUpdated] = useState(true);
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

  useEffect(() => {
    // if (!cartData) return;
    console.debug("%%%", JSON.stringify(cartData));
  }, [cartData]);

  return (
    <div>
      <div className="relative h-80 w-full bg-red-500">
        <div className="absolute left-0 top-0 flex h-80 w-full flex-col items-center justify-center gap-5">
          <p className="text-3xl font-bold">Cart</p>
          <p>{"Home > Cart"}</p>
        </div>
      </div>
      <div className="flex justify-center py-5">
        <div className="flex flex-row gap-5">
          <div>
            <table className="w-full text-left text-sm rtl:text-right">
              <thead className="bg-cream text-xs uppercase text-gray-700">
                <tr>
                  <th scope="col" className="px-6 py-3 text-cream">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Subtotal
                  </th>
                  <th scope="col" className="px-6 py-3">
                    {" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartData ? (
                  cartData?.lines.edges.length > 0 ? (
                    cartData?.lines.edges.map((item: any, index: number) => (
                      <tr key={index} className="bg-white  ">
                        <th
                          scope="row"
                          className="px-6 py-4 text-xs font-medium "
                        >
                          <div className="relative h-16 w-16 rounded">
                            <Image
                              fill
                              className="rounded"
                              quality={100}
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              priority
                              src={
                                item.node.merchandise.product.images.edges[0]
                                  .node.url
                              }
                              alt={"test"}
                            />
                          </div>
                        </th>
                        <th
                          scope="row"
                          className="px-6 py-4 text-xs font-medium "
                        >
                          {item.node.merchandise.product.title}
                        </th>
                        <td className="px-6 py-4 text-xs ">500</td>
                        <td className="px-6 py-4 text-xs ">2</td>
                        <td className="px-6 py-4 text-xs ">$2999</td>
                        <td className="px-6 py-4 text-xs ">
                          <Image
                            className="cursor-pointer"
                            width={15}
                            priority
                            src={Delete}
                            alt={"Delete"}
                          />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <div>empty</div>
                  )
                ) : (
                  Array.from({ length: 3 }).map(() => <Skeleton />)
                )}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col items-center gap-y-5 bg-cream px-5 py-5">
            <h1 className="text-xl font-semibold">Cart Totals</h1>
            <div className=" flex flex-col items-start gap-3">
              <div className="flex flex-row justify-start gap-5 text-sm">
                <p>Subtotal</p>
                <p>Rs 250,000,000</p>
              </div>
              <div className="flex flex-row justify-start gap-5 text-sm">
                <p>Total</p>
                <p>Rs 250,000,000</p>
              </div>
              <button className="mt-2 self-center rounded-md border border-gray-500 px-6 py-1 text-sm">
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
