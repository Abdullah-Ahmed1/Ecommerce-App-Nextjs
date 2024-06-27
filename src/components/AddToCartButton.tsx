"use client";
import React, { FC, ForwardedRef, forwardRef, useState } from "react";
import { sendGTMEvent } from "@next/third-parties/google";
import Spinner from "./shared/Spinner";
import { useCart } from "@/utils/contex-provider";
import { addToCart } from "@/utils/addToCart";

const AddToCartButton = forwardRef(({ product }: any, ref: any) => {
  const cartContext = useCart();
  const [Loading, setLoading] = useState(false);
  return (
    <button
      ref={ref}
      id="test1"
      onClick={async (event) => {
        sendGTMEvent({
          event: "buttonClickedyes",
          id: "test",
        });
        setLoading(true);
        await addToCart({ cartContext, product });
        setLoading(false);

        event.stopPropagation();
      }}
      className="flex h-[40px] w-[80%]  items-center justify-center bg-white px-10 py-2 text-darkCream"
    >
      {!Loading && "Add to cart"}
      {Loading && <Spinner />}
    </button>
  );
});

export default AddToCartButton;
