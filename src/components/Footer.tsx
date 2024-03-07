import React from "react";

const linkItems = ["Home", "Shop", "About", "Contact"];
const HelpItems = ["Payment Options", "Returns", "Privacy Policies"];
const Footer = () => {
  return (
    <div className="flex flex-col items-center  border-t border-gray-200">
      <div className="bg-white flex  flex-row justify-between  w-5/6 p-7 border-b border-gray-200">
        <div className="flex flex-col gap-y-10 ">
          <p className="font-bold">Furniro.</p>
          <div className="w-80 text-gray-500 text-sm">
            400 University Drive Suite 200 Coral Gables,
            <br /> FL 33134 USA
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <p>Links</p>
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
          <p>Help</p>
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
        <div className="flex flex-col gap-y-10 ">
          <p>Newsletter</p>
          <div className="flex gap-2">
            <input type="text" placeholder="Enter your Email Address" className=" w-60 border-b-2  border-black focus:border-none" />
            <button className="border-b-2  border-black text-sm">SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div className=" flex justify-start w-5/6 py-6">
        <p className="text-gray-500 text-sm">2023 furino. All rights reverved</p>
      </div>
    </div>
  );
};

export default Footer;
