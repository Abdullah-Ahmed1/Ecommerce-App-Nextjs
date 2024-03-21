"use client";
import shopify from "@/utils/shopify";
import { gql } from "graphql-request";

import React, { useEffect } from "react";

const Test = () => {
  useEffect(() => {
    const query = gql`
      query getAllProducts {
        products(first: 5) {
          edges {
            node {
              id
              title
              priceRange {
                maxVariantPrice {
                  amount
                  currencyCode
                }
              }
              featuredImage {
                id
                url
              }
              images(first: 5) {
                nodes {
                  id
                  url
                }
              }
            }
          }
        }
      }
    `;
    const handleRequest = async () => {
      const result = await shopify(query, null);
    };
    handleRequest();
  }, []);
  return <div>Test</div>;
};

export default Test;
