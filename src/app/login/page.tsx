import React from "react";
import LoginForm from "./form";
import shopify from "@/utils/shopify";
import { gql } from "graphql-request";
import { cookies } from "next/headers";

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
    const query = gql`
      mutation customerAccessTokenCreate(
        $input: CustomerAccessTokenCreateInput!
      ) {
        customerAccessTokenCreate(input: $input) {
          customerUserErrors {
            code
            field
            message
          }
          customerAccessToken {
            accessToken
            expiresAt
          }
        }
      }
    `;
    try {
      const result: CustomerAccessTokenCreateResult = (await shopify(
        query,
        input,
      )) as CustomerAccessTokenCreateResult;

      console.debug("login", result.customerAccessTokenCreate);
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
