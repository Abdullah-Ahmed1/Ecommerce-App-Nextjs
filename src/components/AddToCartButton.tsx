"use client";
import React, { FC, ForwardedRef, forwardRef } from "react";
import { IProductItem } from "@/types/GlobalTypes";
import { sendGTMEvent } from "@next/third-parties/google";

const AddToCartButton = forwardRef(({ props, customRef }: any) => {
  const handleAddToCart = () => {};
  return (
    <button
      ref={customRef}
      id="test1"
      onClick={(event) => {
        alert("hello");
        sendGTMEvent({
          event: "buttonClickedyes",
          id: "test",
        });
        event.stopPropagation();
      }}
      className="bg-white px-10 py-2 text-darkCream"
    >
      Add to cart
    </button>
  );
});

export default AddToCartButton;
