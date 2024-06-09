"use client";
import React, { FC, ForwardedRef, forwardRef } from "react";
import { sendGTMEvent } from "@next/third-parties/google";

const AddToCartButton = forwardRef((props, ref: any) => {
  return (
    <button
      ref={ref}
      id="test1"
      onClick={(event) => {
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
