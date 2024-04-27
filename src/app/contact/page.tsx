import React from "react";
import Location from "../../../public/location.svg";
import Phone from "../../../public/phone.svg";
import Clock from "../../../public/clock.svg";
import Quality from "../../../public/svgs/trophy.svg";
import Warranty from "../../../public/svgs/guarantee.svg";
import Shipping from "../../../public/svgs/shipping.svg";
import Support from "../../../public/svgs/customer-support.svg";
import Image from "next/image";

const Contact = () => {
  const offfering = [
    {
      id: 1,
      title: "High Quality",
      text: "crafted from top materials",
      icon: Quality,
    },
    {
      id: 2,
      title: "Warranty Protection",
      text: "Over 2 years",
      icon: Warranty,
    },
    {
      id: 3,
      title: "Free shipping",
      text: "order over 150$",
      icon: Shipping,
    },
    {
      id: 4,
      title: "24/7 support",
      text: "Dedicated support",
      icon: Support,
    },
  ];

  return (
    <div>
      <div className="bg-red-500 w-full h-80 relative">
        <div className="absolute top-0 left-0 flex flex-col justify-center items-center w-full h-80 gap-5">
          <p className="text-3xl font-bold">Contact</p>
          <p>{"Home > Contact"}</p>
        </div>
      </div>
      <div className="bd-red-500 flex flex-col items-center">
        <div className="flex flex-col w-[90%] ">
          <div className="flex flex-col items-center py-20">
            <p className="text-2xl font-bold">Get In Touch With Us</p>
            <p className="text-center text-gray-400">
              For more information about our product and services.Please feel
              free to Drop us <br />
              an email. Our staff always be there to help you
            </p>
          </div>
          <div className="flex flex-row mb-5">
            <div className="flex flex-col items-center  w-1/2 text-sm px-20 gap-y-5">
              <div className="flex flex-row items-start gap-x-1 w-1/2 ">
                <Image
                  priority
                  height={15}
                  className="mt-1 "
                  src={Location}
                  alt={"Location"}
                />
                <div className="flex flex-col">
                  <p className="text-lg font-bold">Address</p>
                  <p>236 5th SE Avenue, New York NY10000, United States</p>
                </div>
              </div>

              <div className="flex flex-row items-start gap-x-1  w-1/2">
                <Image
                  priority
                  height={15}
                  className="mt-1"
                  src={Phone}
                  alt={"Location"}
                />
                <div className="flex flex-col">
                  <p className="text-lg font-bold">Phone</p>
                  <p>
                    Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-start gap-x-1  w-1/2">
                <Image
                  priority
                  height={15}
                  className="mt-1"
                  src={Clock}
                  alt={"Location"}
                />
                <div className="flex flex-col">
                  <p className="text-lg font-bold">Working Time</p>
                  <p className="text-slim">
                    Monday-Friday: 9:00 - 22:00 <br /> Saturday-Sunday: 9:00 -
                    21:00
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-1/2 ">
              <div className="flex flex-col w-full gap-y-5">
                <div className="flex flex-col w-[60%]">
                  <label htmlFor="fullname" className="text-sm">
                    Your name
                  </label>
                  <input
                    name="fullname"
                    type="text"
                    className=" py-3 px-1 border border-sm border-black  rounded"
                    placeholder="name"
                  />
                </div>
                <div className="flex flex-col w-[60%]">
                  <label htmlFor="fullname" className="text-sm">
                    Your Email
                  </label>
                  <input
                    name="fullname"
                    type="text"
                    className="py-3 px-1 border border-sm border-black  rounded"
                    placeholder="name"
                  />
                </div>
                <div className="flex flex-col w-[60%] ">
                  <label htmlFor="fullname" className="text-sm">
                    Your Phone
                  </label>
                  <input
                    name="fullname"
                    type="text"
                    className="py-3 px-1 border border-sm border-black  rounded"
                    placeholder="name"
                  />
                </div>
                <div className="flex flex-col w-[60%]">
                  <label htmlFor="fullname" className="text-sm">
                    Your Test
                  </label>
                  <textarea
                    name="fullname"
                    className=" py-3 px-1 border border-sm border-black  rounded"
                    placeholder="name"
                  />
                </div>
                <button className="bg-darkCream px-6 w-[30%] py-1 rounded-sm text-white">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-x-1 bg-cream w-full justify-around py-10">
          {offfering.map((item, index) => (
            <div key={index} className="flex flexx-row gap-x-1">
              <div>
                <Image src={item.icon} width={40} alt="quality" />
              </div>
              <div className="flex flex-col">
                <p className="p-0 m-0 text-lg font-bold">{item.title}</p>
                <p className="text-[10px] text-gray-500">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
