"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

import shopify from "@/utils/shopify";
import Heart from "../../public/heart.svg";
import Search from "../../public/search.svg";
import MenuIcon from "../../public/svgs/menu.svg";
import { ProfileDropdown } from "./ProfileDropdown";
import ShoppingCart from "../../public/shoppingCart.svg";
import MobileViewHeaderDropdown from "./MobileViewHeaderDropdown";

const getCartQuery = `
query getCart($cartId: ID!) {
  cart(id: $cartId) {
    id
    createdAt
    updatedAt
    lines(first: 10) {
      edges {
        node {
          id
          quantity
          merchandise {
            ... on ProductVariant {
              id
              title
              product {
                title
                handle
                images(first:12){
                  edges{
                    node{
                      url
                      id
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    cost {
      totalAmount {
        amount
        currencyCode
      }
      subtotalAmount {
        amount
        currencyCode
      }
      totalTaxAmount {
        amount
        currencyCode
      }
    }
  }
}
`;

const Header = () => {
  const router = useRouter();
  const cart = localStorage.getItem("cart");
  const [showDropdown, setShowDropdown] = useState(false);
  const [cartItems, setCartItems] = useState(null);

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
          {cartItems && (
            <div className="absolute right-[-5px] top-0 flex h-[15px] w-[15px] items-center justify-center rounded-[50%] bg-red-600 p-2 text-[10px] text-white">
              {cartItems}
            </div>
          )}
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
    if (!cart) return;
    const variables = {
      cartId: JSON.parse(cart).id,
    };
    shopify(getCartQuery, variables).then((response) => {
      setCartItems(response.cart.lines.edges.length);
    });
  }, []);

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
