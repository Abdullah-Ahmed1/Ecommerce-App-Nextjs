"use client";
import Image from "next/image";
import twColors from "tailwindcss/colors";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import shopify from "../../../../../utils/shopify";
import Full from "../../../../../../public/svgs/full.svg";
import { getCartQuery } from "@/graphql/queries/getCartQuery";
import { addToCartMutation } from "@/graphql/mutations/addToCartMutation";
import { createCartMutation } from "@/graphql/mutations/createCartMutation";
import { getSingleProductQuery } from "@/graphql/queries/getSingleProduct";
import { useCart } from "@/utils/contex-provider";

const sizeItems = ["L", "XL", "XS"];
const colorItems = ["red", "blue", "purple"];

interface IParams {
  params: {
    id: string;
  };
}

const PhotoModal: React.FC<IParams> = ({ params }) => {
  const cartContext = useCart();
  const router = useRouter();
  const [product, setProduct] = useState<any>(null);
  const [currentFeatured, setCurrentFeatured] = useState<any>(null);

  const handleAddToCart = async () => {
    const cart = localStorage.getItem("cart");

    if (cart) {
      const variables = {
        cartId: JSON.parse(cart)?.id,
      };
      const responseGetCart = await shopify(getCartQuery, variables);
      if (responseGetCart.cart) {
        const addToCartVaraibles = {
          cartId: responseGetCart.cart.id,
          quantity: 1,
          merchandiseId: product.variants.edges[0].node.id,
        };
        try {
          const addToCartResponse = await shopify(
            addToCartMutation,
            addToCartVaraibles,
          );
          const getCartResponse = await shopify(getCartQuery, {
            cartId: addToCartResponse.cartLinesAdd.cart.id,
          });
          cartContext.setCartItemsNumber(
            getCartResponse.cart.lines.edges.length,
          );
          localStorage.setItem("cart", JSON.stringify(getCartResponse.cart));
        } catch (err) {
          console.log(err);
        }
      } else {
        // here add cart again
        const response = await shopify(createCartMutation, null);
        localStorage.setItem("cart", JSON.stringify(response.data.cartCreate));
        const addToCartVaraibles = {
          cartId: response.data.cartCreate.cart.id,
          quantity: 1,
          merchandiseId: product.variants.edges[0].node.id,
        };
        try {
          const addToCartResponse = await shopify(
            addToCartMutation,
            addToCartVaraibles,
          );

          const getCartResponse = await shopify(getCartQuery, {
            cartId: addToCartResponse.data.cartLinesAddcart.id,
          });

          cartContext.setCartItemsNumber(
            getCartResponse.cart.lines.edges.length,
          );
          localStorage.setItem("cart", JSON.stringify(getCartResponse.cart));
        } catch (err) {
          console.log(err);
        }
      }
    } else {
      const response = await shopify(createCartMutation, null);

      const addToCartVaraibles = {
        cartId: response.cartCreate.cart.id,
        quantity: 1,
        merchandiseId: product.variants.edges[0].node.id,
      };
      try {
        await shopify(addToCartMutation, addToCartVaraibles);

        const getCartResponse = await shopify(getCartQuery, {
          cartId: response.cartCreate.cart.id,
        });
        localStorage.setItem("cart", JSON.stringify(getCartResponse.cart));
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleRequest = async () => {
    const variables = {
      productId: `gid://shopify/Product/${params.id}`,
    };
    const results: any = (await shopify(
      getSingleProductQuery,
      variables,
    )) as any;
    return results;
  };

  useEffect(() => {
    handleRequest().then((response) => {
      setProduct(response.product);
      setCurrentFeatured(response.product.images.edges[0].node);
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
      className="fixed top-0 z-[900] flex h-[100dvh] w-screen items-center justify-center overflow-y-auto bg-gray-700  bg-opacity-50"
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
        {product && currentFeatured && (
          <div className="flex h-full w-full flex-row items-center gap-x-10">
            <div className="relative flex h-full w-full flex-row items-center justify-center rounded">
              <div className="flex flex-col gap-y-6">
                {product.images.edges.map((item: any) => {
                  return (
                    <Image
                      onClick={() => setCurrentFeatured(item.node)}
                      width={200}
                      className="cursor-pointer"
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
                    src={currentFeatured?.url}
                    alt={"test"}
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
                        style={{
                          backgroundColor:
                            twColors[item as keyof typeof twColors]["700"],
                        }}
                        key={index}
                        className="bg-red flex h-8 w-8 items-center justify-center rounded"
                      ></div>
                    );
                  })}
                  <div></div>
                </div>
              </div>
              <button
                onClick={handleAddToCart}
                className="mt-4 cursor-pointer rounded border-[1px] border-gray-400 p-2"
              >
                Add to Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoModal;
