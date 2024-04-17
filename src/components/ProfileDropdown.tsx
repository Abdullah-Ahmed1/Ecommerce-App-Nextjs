"use client";

import { useEffect, useRef, useState } from "react";
import Profile from "../../public/profile.svg";
import { useRouter, usePathname } from "next/navigation";

import Image from "next/image";
export const ProfileDropdown = () => {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  console.log("pathname:", pathname);
  const [showDropDown, setShowDropDown] = useState(false);

  useEffect(() => {
    const parent = parentRef.current;
    if (!parent) return;

    const listener = (evt: MouseEvent) => {
      console.debug("Clicked:", evt.target);
      if (parent.contains(evt.target as HTMLElement)) return;
      setShowDropDown(false);
    };

    document.body.addEventListener("click", listener);

    return () => {
      document.body.removeEventListener("click", listener);
    };
  }, []);
  return (
    <div className="relative" ref={parentRef}>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        data-dropdown-trigger="hover"
        onClick={() => setShowDropDown(true)}
        className=" focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  "
        type="button"
      >
        <Image src={Profile} alt="Profile" />
      </button>

      <div
        id="dropdown"
        className={`z-10 ${
          showDropDown ? "" : "hidden"
        } absolute top-12 right-0  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li
            className="block px-4 py-2 hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => {
              setShowDropDown(false);
              router.push("/home");
            }}
          >
            Dashboard
          </li>
          <li
            className="block px-4 py-2 hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => {
              setShowDropDown(false);
              router.push("/shop");
            }}
          >
            Settings
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Earnings
            </a>
          </li>
          {pathname !== "/login" && (
            <li
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => {
                setShowDropDown(false);
                router.push("/login");
              }}
            >
              Sign Out
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
