import { gql } from "graphql-request";

export const getAllProductsQuery = gql`
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
