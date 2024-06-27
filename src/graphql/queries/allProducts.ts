import { gql } from "graphql-request";

export const getAllProductsQuery = gql`
  query getAllProducts {
    products(first: 5) {
      edges {
        node {
          id
          title
          variants(first: 5) {
            edges {
              node {
                id
              }
            }
          }
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
