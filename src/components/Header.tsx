"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Heart from "../../public/heart.svg";
import Search from "../../public/search.svg";
import Profile from "../../public/profile.svg";
import ShoppingCart from "../../public/shoppingCart.svg";
import { ProfileDropdown } from "./ProfileDropdown";
import { useRouter, usePathname } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const MenuItems = [
    {
      name: "Home",
      link: "/home",
    },
    {
      name: "Shop",
      link: "/shop",
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
      icon: (
        <button
          onClick={() => {
            router.push("/cart");
          }}
        >
          <Image priority src={ShoppingCart} alt={"ShoppingCart"} />
        </button>
      ),
    },
    {
      name: "Search",
      icon: (
        <button>
          <Image priority src={Search} alt={"Search"} />
        </button>
      ),
    },
    {
      name: "Heart",
      icon: (
        <button
          onClick={() => {
            router.push("/favourites");
          }}
        >
          <Image priority src={Heart} alt={"Heart"} />
        </button>
      ),
    },
    {
      name: "icon",
      icon: (
        <>
          <ProfileDropdown />
        </>
      ),
    },
  ];
  return (
    <div className="bg-white flex flex-row px-16 py-5">
      <div className="flex flex-1 flex-row justify-between items-center">
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
                <>{item.icon}</>
                // <li key={index} className="cursor-pointer">
                //   {/* <Image priority src={item.icon} alt={item.name} /> */}
                //   <button>ClassName</button>
                // </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
