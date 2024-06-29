"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";

import Heart from "../../public/heart.svg";
import Search from "../../public/search.svg";
import { useCart } from "@/utils/contex-provider";
import MenuIcon from "../../public/svgs/menu.svg";
import { ProfileDropdown } from "./ProfileDropdown";
import ShoppingCart from "../../public/shoppingCart.svg";
import MobileViewHeaderDropdown from "./MobileViewHeaderDropdown";

const Header = () => {
  const router = useRouter();
  const cartContext = useCart();
  const [cartItems, setCartItems] = useState(cartContext.cartItemsNumber);
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    setCartItems(cartContext.cartItemsNumber);
  }, [cartContext.cartItemsNumber]);

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
          className="relative"
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
          {
            <div className="absolute right-[-5px] top-0 flex h-[15px] w-[15px] items-center justify-center rounded-[50%] bg-red-600 p-2 text-[10px] text-white">
              {cartItems}
            </div>
          }
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

  useEffect(() => {
    var prevScrollpos = window.scrollY;
    const onScroll = () => {
      if (!navbarRef.current) return;
      var currentScrollPos = window.scrollY;
      if (prevScrollpos >= currentScrollPos) {
        navbarRef.current.style.top = "0";
      } else {
        navbarRef.current.style.top = "-90px";
      }
      prevScrollpos = currentScrollPos;
    };
    window.addEventListener("wheel", onScroll);
    return () => {
      window.removeEventListener("wheel", onScroll);
    };
  }, []);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    setCartItems(cart && JSON.parse(cart).lines.edges.length);
  }, []);

  return (
    <div
      ref={navbarRef}
      className="fixed  top-0 z-[500]  w-full bg-red-300 transition-all"
    >
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
