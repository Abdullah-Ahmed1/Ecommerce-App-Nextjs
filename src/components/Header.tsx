import React from "react";
import Link from "next/link";
import Image from "next/image";
import Heart from "../../public/heart.svg";
import Search from "../../public/search.svg";
import Profile from "../../public/profile.svg";
import ShoppingCart from "../../public/shoppingCart.svg";

const MenuItems = [
  {
    name: "Home",
    link: "/home",
  },
  {
    name: "Shop",
    link: "#",
  },
  {
    name: "About",
    link: "#",
  },
  {
    name: "Contact",
    link: "#",
  },
];
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
                <li
                  className="inline cursor-pointer hover:text-cream"
                  key={index}
                >
                  <Link href={item.link}>{item.name}</Link>
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
