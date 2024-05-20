"use client";
import z from "zod";
import Link from "next/link";
import Image from "next/image";
import Toast from "@/components/Toast";
import { useForm } from "react-hook-form";
import React, { ReactNode, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

interface IRegisterForm {
  handleSubmitForm: (
    event: any,
  ) => Promise<{ status?: number; message?: string } | undefined>;
}

const RegisterForm: React.FC<IRegisterForm> = ({ handleSubmitForm }) => {
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [statusCode, setStatusCode] = useState<null | number>(null);
  const registerSchema = z
    .object({
      username: z.string().min(4),
      email: z.string().email(),
      password: z.string().min(5),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Password does not match",
      path: ["confirmPassword"],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registerSchema) });

  const handleValidation = async (data: any) => {
    setLoading(true);
    const result = await handleSubmitForm(data);

    setLoading(false);
    result?.message && setToastMessage(result?.message);
    result?.status && setStatusCode(result?.status);

    setShowToast(true);
  };

  return (
    <>
      <Toast
        statusCode={statusCode}
        message={toastMessage}
        show={showToast}
        setShowToast={setShowToast}
        autoClose={true}
      />

      <main className="flex h-screen flex-row items-center justify-center">
        <div className=" w-3/6">
          <div className="flex flex-col items-center  ">
            <Image
              width={500}
              height={500}
              className="mb-3 w-14"
              src="/tailwand.svg"
              alt="title image"
            />
            <h1 className="font-sans text-2xl font-medium ">Register</h1>
            <form
              className="mb-5 mt-5 flex flex-col   gap-y-3"
              onSubmit={handleSubmit(handleValidation)}
            >
              <div className="flex flex-col ">
                <label htmlFor="" className="font-sans">
                  Username
                </label>
                <input
                  required
                  type="text"
                  placeholder="Jhon Doe"
                  {...register("username")}
                  className="w-72 rounded-md border-2 p-1"
                />
                <sub className="mt-1 text-red-500 ">
                  {errors.username?.message as ReactNode}
                </sub>
              </div>
              <div className="flex flex-col ">
                <label htmlFor="" className="font-sans">
                  Email
                </label>
                <input
                  required
                  placeholder="test@gmail.com"
                  {...register("email")}
                  type="text"
                  className="w-72 rounded-md border-2 p-1"
                />
                <sub className="mt-1 text-red-500">
                  {errors.email?.message as ReactNode}
                </sub>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row justify-between">
                  <label htmlFor="" className="font-sans">
                    Password
                  </label>
                </div>
                <input
                  required
                  type="password"
                  {...register("password")}
                  className="w-72 rounded-md border-2 p-1"
                />
                <sub className="mt-1 text-red-500">
                  {errors.password?.message as ReactNode}
                </sub>
              </div>
              <div className=" flex flex-col">
                <label htmlFor="" className="font-sans">
                  Confirm Password
                </label>
                <input
                  required
                  type="password"
                  {...register("confirmPassword")}
                  className="w-72 rounded-md border-2 p-1"
                />
                <sub className="mt-1 text-red-500">
                  {errors.confirmPassword?.message as ReactNode}
                </sub>
              </div>
              <button
                type="submit"
                className="mt-5 rounded-md bg-cream  p-1 text-darkCream  hover:bg-darkCream hover:text-white"
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
                Register
              </button>
              <div className="mt-2 text-center">
                <p>
                  Already a member ?
                  <span>
                    <Link href="/login" className="text-darkCream">
                      Login Up
                    </Link>
                  </span>
                </p>
              </div>
              {/* </div> */}
            </form>
          </div>
        </div>
        {errors && <p>{errors.root?.message}</p>}
      </main>
    </>
  );
};

export default RegisterForm;
