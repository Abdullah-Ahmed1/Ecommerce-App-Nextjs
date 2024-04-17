import React from "react";
import Search from "../../public/search.svg";
import Delete from "../../../public/delete.svg";
import Image from "next/image";

const Cart = () => {
  return (
    <div>
      <div className="bg-red-500 w-full h-80 relative">
        <div className="absolute top-0 left-0 flex flex-col justify-center items-center w-full h-80 gap-5">
          <p className="text-3xl font-bold">Cart</p>
          <p>{"Home > Cart"}</p>
        </div>
      </div>
      <div className="flex justify-center py-5">
        <div className="flex flex-row gap-5">
          <div>
            <table className="w-full text-sm text-left rtl:text-right">
              <thead className="text-xs text-gray-700 uppercase bg-cream">
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
                <tr className="bg-white  ">
                  <th scope="row" className="px-6 py-4 font-medium text-xs ">
                    <div className="relative w-16 rounded h-16">
                      <Image
                        fill
                        className="rounded"
                        quality={100}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                        src={"/images/livingArea.jpeg"}
                        alt={"test"}
                      />
                    </div>
                  </th>
                  <th scope="row" className="px-6 py-4 font-medium text-xs ">
                    Apple MacBook Pro 17"
                  </th>
                  <td className="px-6 py-4 text-xs ">Silver</td>
                  <td className="px-6 py-4 text-xs ">Laptop</td>
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
              </tbody>
            </table>
          </div>
          <div className="flex flex-col items-center bg-cream py-5 px-5 gap-y-5">
            <h1 className="text-xl font-semibold">Cart Totals</h1>
            <div className=" flex gap-3 flex-col items-start">
              <div className="flex flex-row gap-5 justify-start text-sm">
                <p>Subtotal</p>
                <p>Rs 250,000,000</p>
              </div>
              <div className="flex flex-row gap-5 justify-start text-sm">
                <p>Total</p>
                <p>Rs 250,000,000</p>
              </div>
              <button className="self-center border rounded-md border-gray-500 px-6 py-1 mt-2 text-sm">
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
