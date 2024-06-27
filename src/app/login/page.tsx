import React from "react";
import LoginForm from "./form";
import shopify from "@/utils/shopify";
import { cookies } from "next/headers";
import { cusomterAccessTokenCreateMutation } from "@/graphql/mutations/customerAccessTokenCreate";

interface customerUserError {
  code: string;
  field: any;
  message: string;
}

interface CustomerAccessTokenCreateResult {
  customerAccessTokenCreate: {
    customerUserErrors: customerUserError[] | [];
    customerAccessToken: {
      accesToken: string;
      expiresAt: string;
    };
  };
}

const LoginPage = () => {
  const handleSubmit = async (event: any) => {
    "use server";
    const input = {
      input: {
        email: event.get("email"),
        password: event.get("password"),
      },
    };

    try {
      const result: CustomerAccessTokenCreateResult = (await shopify(
        cusomterAccessTokenCreateMutation,
        input,
      )) as CustomerAccessTokenCreateResult;

      if (result.customerAccessTokenCreate.customerUserErrors.length > 0) {
        return {
          status: 500,
          message:
            result?.customerAccessTokenCreate?.customerUserErrors[0]?.message,
        };
      }
      cookies().set(
        "token",
        result.customerAccessTokenCreate.customerAccessToken.accesToken,
      );
      return {
        status: 200,
        message: "User Created Successfully",
      };
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <>
      <LoginForm handleSubmit={handleSubmit} />
    </>
  );
};

export default LoginPage;
