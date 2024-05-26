import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

import CloseIcon from "../../public/svgs/close.svg";

interface IconItem {
  name: string;
  icon: any;
}
interface MenuItem {
  name: string;
  link: string;
}

interface IMobileViewHeaderDropdown {
  IconItems: IconItem[];
  MenuItems: MenuItem[];
  setShowDropdown: Dispatch<SetStateAction<any>>;
}
const MobileViewHeaderDropdown: React.FC<IMobileViewHeaderDropdown> = ({
  IconItems,
  MenuItems,
  setShowDropdown,
}) => {
  const router = useRouter();

  const handleLinkClick = (link: string) => {
    router.push(link);
    setShowDropdown(false);
  };

  return (
    <div className="absolute left-0 top-0 z-[100] flex h-screen w-screen flex-col bg-white">
      <div className="flex flex-row justify-between bg-white px-[64px] py-[20px]">
        <h1>Logo</h1>
        <Image
          src={CloseIcon}
          alt="Close Icon"
          className="cursor-pointer"
          onClick={() => setShowDropdown(false)}
        />
      </div>
      <ul className="mt-[10px] flex flex-row justify-center gap-x-[10px]">
        {IconItems.map((icon, index) => (
          <div key={index} className="flex content-center">
            {icon.icon}
          </div>
        ))}
      </ul>
      <ul className="mt-[20px] flex w-screen flex-col items-center gap-y-[10px] ">
        {MenuItems.map((item, index) => (
          <li
            className=" flex w-full cursor-pointer flex-col items-center hover:bg-cream hover:text-darkCream"
            key={index}
          >
            <div
              onClick={() => handleLinkClick(item.link)}
              className="text-[20px]"
            >
              {item.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileViewHeaderDropdown;
