import React from "react";
import Image from "next/image";
import ShoppingCart from "../../public/shoppingCart.svg";
import Search from "../../public/search.svg";
import Heart from "../../public/heart.svg";
import Profile from "../../public/profile.svg";

const MenuItems = ["Home", "Shop", "About", "Contact"];
const IconItems = [
  {
    name: "ShoppingCart",
    icon: ShoppingCart,
  },
  {
    name: "Search",
    icon: Search,
  },
  {
    name: "Heart",
    icon: Heart,
  },
  {
    name: "profile",
    icon: Profile,
  },
];
const Header = () => {
  return (
    <div className="bg-white flex flex-1 flex-row px-16 py-5">
      <div className="flex flex-1 flex-row justify-between">
        <div>Logo</div>
        <div>
          <ul className="flex gap-x-16">
            {MenuItems.map((item, index) => {
              return (
                <li className="inline cursor-pointer" key={index}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <ul className="flex gap-x-5">
            {IconItems.map((item, index) => {
              return (
                <li key={index} className="cursor-pointer">
                  <Image priority src={item.icon} alt={item.name} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
