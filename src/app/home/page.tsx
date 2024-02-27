"use client";
import shopify from "@/utils/shopify";
import { gql } from "graphql-request";
import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const handleFetch = async () => {
      const endpoint = process.env.SHOPIFY_STORE_DOMAIN;
      const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
      const input = {
        input: {
          email: "rabiabusry1005@gmail.com",
          password: "wdjnwkejfn2345",
        },
      };
      const input2 = {
        input: {
          email: "user@example.com",
          password: "HiZqFuDvDdQ7",
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
        console.log("results");
      } catch (error) {
        console.error("Error:", error);
        return {
          status: 500,
          error: "Error receiving data",
        };
      }
    };
    handleFetch();
  }, []);

  return <div>Home12355</div>;
};

export default Home;
