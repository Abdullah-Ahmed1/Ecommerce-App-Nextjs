"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

import Heart from "../../public/heart.svg";
import Search from "../../public/search.svg";
import MenuIcon from "../../public/svgs/menu.svg";
import { ProfileDropdown } from "./ProfileDropdown";
import ShoppingCart from "../../public/shoppingCart.svg";
import MobileViewHeaderDropdown from "./MobileViewHeaderDropdown";

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
      link: "/contact",
    },
  ];
  const IconItems = [
    {
      name: "ShoppingCart",
      icon: (
        <button
          onClick={() => {
            router.push("/cart", { scroll: false });
          }}
        >
          <Image
            priority
            src={ShoppingCart}
            alt={"ShoppingCart"}
            className="w-[40px] fill-darkCream sm:w-auto"
          />
        </button>
      ),
    },
    {
      name: "Search",
      icon: (
        <button>
          <Image
            priority
            src={Search}
            alt={"Search"}
            className="w-[40px] sm:w-auto"
          />
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
          <Image
            priority
            src={Heart}
            alt={"Heart"}
            className="w-[40px] sm:w-auto"
          />
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

  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="fixed top-0 z-[500]  w-full bg-white">
      {showDropdown && (
        <MobileViewHeaderDropdown
          IconItems={IconItems}
          MenuItems={MenuItems}
          setShowDropdown={setShowDropdown}
        />
      )}

      <div className="flex flex-row px-16 py-5  lg:bg-white">
        <div className="flex flex-1 flex-row items-center justify-between">
          <div>Logo</div>
          <div>
            <ul className="hidden md:flex  md:gap-x-8  lg:gap-x-16 ">
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
            <ul className="hidden gap-x-5 md:flex">
              {IconItems.map((item, index) => {
                return (
                  <div key={index} className="flex content-center">
                    {item.icon}
                  </div>
                );
              })}
            </ul>
          </div>
          <div
            onClick={() => setShowDropdown(true)}
            className=" flex cursor-pointer md:hidden "
          >
            <Image src={MenuIcon} alt="Menu Icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
