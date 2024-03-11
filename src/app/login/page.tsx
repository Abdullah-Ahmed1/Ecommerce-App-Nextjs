import React from "react";
import LoginForm from "./form";
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
  };

  return (
    <>
      <LoginForm handleSubmit={handleSubmit} />
      <DataContainer />
    </>
  );
};

export default LoginPage;
