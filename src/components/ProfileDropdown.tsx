"use client";

import Profile from "../../public/profile.svg";
import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

import Image from "next/image";
export const ProfileDropdown = () => {
  const router = useRouter();
  const pathname = usePathname();
  const parentRef = useRef<HTMLDivElement | null>(null);
  const [showDropDown, setShowDropDown] = useState(false);

  useEffect(() => {
    const parent = parentRef.current;
    if (!parent) return;

    const listener = (evt: MouseEvent) => {
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
        className=" inline-flex items-center rounded-lg px-0 py-2.5 text-center text-sm font-medium focus:outline-none focus:ring-4 focus:ring-blue-300  "
        type="button"
      >
        <Image src={Profile} alt="Profile" className="w-[40px] sm:w-auto" />
      </button>

      <div
        id="dropdown"
        className={`z-10 ${
          showDropDown ? "" : "hidden"
        } absolute right-0 top-12  w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li
            className="block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => {
              setShowDropDown(false);
              router.push("/home");
            }}
          >
            Dashboard
          </li>
          <li
            className="block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
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
