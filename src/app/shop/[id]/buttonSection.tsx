"use client";
import { addToCart } from "@/utils/addToCart";
import { useCart } from "@/utils/contex-provider";

const ButtonSection = ({ data }: any) => {
  const cartContext = useCart();
  return (
    <div className="mt-5 flex flex-row gap-x-5">
      <div className="flex flex-row items-center gap-x-5 rounded-md border border-black p-2">
        <button>-</button>
        <p>1</p>
        <button>+</button>
      </div>
      <button
        onClick={() => addToCart({ product: data.product, cartContext })}
        className="rounded-xl border border-black px-5 py-4"
      >
        Add to Cart
      </button>
      <button className="rounded-xl border border-black px-5 py-4">
        + Compare
      </button>
    </div>
  );
};

export default ButtonSection;
