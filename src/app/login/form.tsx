"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Toast from "@/components/Toast";

interface ILoginForm {
  handleSubmit: (
    event: any,
  ) => Promise<{ status?: number; message?: string } | undefined>;
}

const LoginForm: React.FC<ILoginForm> = ({ handleSubmit }) => {
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [statusCode, setStatusCode] = useState<number | null>(null);
  const handleFormSubmit = async (event: any) => {
    setLoading(true);
    const result = await handleSubmit(event);
    setLoading(false);
  };
  return (
    <>
      <Toast
        show={showToast}
        setShowToast={setShowToast}
        autoClose={true}
        statusCode={statusCode}
        message="This is the test message"
      />
      <main className="h bg-white-800 flex  h-screen flex-row  items-center justify-center">
        <div className=" h-96 w-3/6">
          <div className="flex flex-col items-center  ">
            <Image
              width={500}
              height={500}
              className="mb-3 w-14"
              src="/tailwand.svg"
              alt="title image"
            />
            <h1 className="font-sans text-2xl font-medium ">
              SignIn to your Account
            </h1>
            <form className="mt-3" action={handleFormSubmit}>
              <div className="mt-4 flex flex-col">
                <label htmlFor="" className="font-sans">
                  Email
                </label>
                <input
                  name="email"
                  required
                  type="text"
                  className="w-72 rounded-md border-2 p-1 focus:border focus:border-cream"
                />
              </div>
              <div className="mt-4 flex flex-col">
                <div className="flex flex-row justify-between">
                  <label htmlFor="" className="font-sans">
                    Password
                  </label>
                  <a href="" className="font-sans text-darkCream">
                    Forgot password?
                  </a>
                </div>
                <input
                  name="password"
                  type="password"
                  required
                  className="w-72 rounded-md border-2 p-1"
                />
                <button
                  type="submit"
                  className="mt-5 rounded-md  bg-cream p-1 text-darkCream hover:bg-darkCream hover:text-white"
                >
                  {loading && (
                    <svg
                      aria-hidden="true"
                      role="status"
                      className="me-3 inline h-4 w-4 animate-spin text-darkCream"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                  )}
                  Sign in
                </button>
                <div className="mt-2 text-center">
                  <p>
                    Not a member?
                    <span>
                      <Link href="/register" className="text-darkCream">
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
    </>
  );
};

export default LoginForm;
