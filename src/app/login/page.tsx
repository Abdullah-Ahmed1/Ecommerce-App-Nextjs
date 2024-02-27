import React from "react";
import LoginForm from "./form";
import shopify from "@/utils/shopify";
import { gql } from "graphql-request";
import DataContainer from "./dataContainer";

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
      mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
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
      const result = await shopify(query, input);
      const error = result?.customerAccessTokenCreate?.customerUserErrors;
      const token = result?.customerAccessTokenCreate?.customerAccessToken;
      if (error) console.log("error is:", error);
      if (token) console.log("token is:", token);
      console.log("result", result);
    } catch (error) {
      console.error("Error:", error);
      return {
        status: 500,
        error: "Error receiving data",
      };
    }
  };

  return (
    <>
      <LoginForm handleSubmit={handleSubmit} />
      <DataContainer />
    </>
  );
};

export default LoginPage;
