import React from "react";

const linkItems = ["Home", "Shop", "About", "Contact"];
const HelpItems = ["Payment Options", "Returns", "Privacy Policies"];
const Footer = () => {
  return (
    <div className="flex flex-col items-center  border-t border-gray-200">
      <div className="lg:gap-y-auto flex w-5/6 flex-col justify-between gap-y-[60px] border-b  border-gray-200 bg-white p-7 lg:flex-row">
        <div className="flex flex-col gap-y-10 self-center lg:self-auto">
          <p className="font-bold">Furniro.</p>
          <div className="w-80 text-sm text-gray-500">
            400 University Drive Suite 200 Coral Gables,
            <br /> FL 33134 USA
          </div>
        </div>
        <div className="flex  flex-row items-start justify-between lg:w-[30%] ">
          <div className="flex flex-col  gap-6">
            <p className="font-[500]">Links</p>
            <ul className="flex flex-col gap-6">
              {linkItems.map((item, index) => {
                return (
                  <li key={index} className="cursor-pointer">
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <p className="font-[500]">Help</p>
            <ul className="flex flex-col gap-6">
              {HelpItems.map((item, index) => {
                return (
                  <li key={index} className="cursor-pointer">
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-y-10 self-center  lg:self-auto">
          <p className="font-[500]">Newsletter</p>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter your Email Address"
              className=" w-60 border-b-2  border-black focus:border-none"
            />
            <button className="border-b-2  border-black text-sm">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <div className=" flex w-5/6 justify-center py-6 lg:justify-start">
        <p className=" text-sm text-gray-500 ">
          2023 furino. All rights reverved
        </p>
      </div>
    </div>
  );
};

export default Footer;
