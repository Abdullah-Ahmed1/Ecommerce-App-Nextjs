import React from "react";
import RegisterForm from "./form";
import shopify from "@/utils/shopify";
import { gql } from "graphql-request";

const Register = () => {
  const handleSubmit = async (event: any) => {
    "use server";
    const input = {
      input: {
        email: event.get("email"),
        password: event.get("password"),
      },
    };
    const query = gql`
      mutation customerCreate($input: CustomerCreateInput!) {
        customerCreate(input: $input) {
          customerUserErrors {
            code
            field
            message
          }
          customer {
            id
          }
        }
      }
    `;

    try {
      const result = await shopify(query, input);
    } catch (error) {
      console.error("Error:", error);
      return {
        status: 500,
        error: "Error receiving data",
      };
    }
  };

  return <RegisterForm handleSubmit={handleSubmit} />;
};

export default Register;
