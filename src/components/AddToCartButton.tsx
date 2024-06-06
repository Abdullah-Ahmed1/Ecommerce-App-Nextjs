"use client";
import React, { FC, ForwardedRef, forwardRef } from "react";
import { IProductItem } from "@/types/GlobalTypes";
import { sendGTMEvent } from "@next/third-parties/google";

const AddToCartButton = forwardRef(({ item, props, ref }: any) => {
  return (
    <button
      id="test1"
      onClick={(event) => {
        alert("hello");
        sendGTMEvent({
          event: "buttonClickedyes",
          id: "test",
          productName: item.name,
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
