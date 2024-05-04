import React from "react";
import RegisterForm from "./form";
import shopify from "@/utils/shopify";
import { gql } from "graphql-request";

const Register = () => {
  const handleSubmit = async (data: any) => {
    "use server";
    const input = {
      input: {
        email: data.email,
        password: data.password,
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
      const result: any = await shopify(query, input);
      if (result?.customerCreate?.customerUserErrors.length == 0) {
        return {
          status: 200,
          message: "User created successfully",
        };
      } else {
        return {
          status: 600,
          message: result.customerCreate.customerUserErrors[0].message,
        };
      }
    } catch (error) {
      console.error("Error:", error);
      return {
        status: 500,
        message: "Error receiving data",
      };
    }
  };

  return <RegisterForm handleSubmitForm={handleSubmit} />;
};

export default Register;
