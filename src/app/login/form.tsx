import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ILoginForm {
  handleSubmit: (event: any) => Promise<void>;
}
const LoginForm: React.FC<ILoginForm> = ({ handleSubmit }) => {
  return (
    <main className="flex justify-center items-center  h-screen flex-row  h bg-white-800">
      <div className=" w-3/6 h-96">
        <div className="flex flex-col items-center  ">
          <Image
            width={500}
            height={500}
            className="w-14 mb-3"
            src="/tailwand.svg"
            alt="title image"
          />
          <h1 className="text-2xl font-sans font-medium ">
            SignIn to your Account
          </h1>
          <form className="mt-3" action={handleSubmit}>
            <div className="flex flex-col mt-4">
              <label htmlFor="" className="font-sans">
                Email
              </label>
              <input
                name="email"
                type="text"
                className="border-2 rounded-md p-1 w-72"
              />
            </div>
            <div className="flex flex-col mt-4">
              <div className="flex flex-row justify-between">
                <label htmlFor="" className="font-sans">
                  Password
                </label>
                <a
                  href=""
                  className="font-sans text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
              <input
                name="password"
                type="password"
                className="border-2 rounded-md p-1 w-72"
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-500 p-1 text-white rounded-md mt-5"
              >
                Sign in
              </button>
              <div className="text-center mt-2">
                <p>
                  Not a member?
                  <span>
                    <Link href="/register" className="text-indigo-600">
                      Sign Up
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default LoginForm;
