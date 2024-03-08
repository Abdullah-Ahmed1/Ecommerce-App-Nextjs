"use client";
import React, { FC } from "react";
import { sendGTMEvent } from "@next/third-parties/google";
import { IProductItem } from "@/types/GlobalTypes";

const AddToCartButton: FC<IProductItem> = ({ item }) => {
  return (
    <button
      id="test1"
      onClick={() =>
        sendGTMEvent({
          event: "buttonClickedyes",
          id: "test",
          productName: item.name,
        })
      }
      className="bg-white px-10 py-2 text-darkCream"
    >
      Add to cart
    </button>
  );
};

export default AddToCartButton;
