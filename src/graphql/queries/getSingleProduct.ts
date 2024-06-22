export const getSingleProductQuery = `
  query getSingleProduc($productId: ID!) {
    product(id: $productId) {
      id
      title
      variants(first: 20) {
        edges {
          node {
            id
          }
        }
      }
      featuredImage {
        url
        id
      }
      images(first: 5) {
        edges {
          node {
            url
            id
          }
        }
      }
    }
  }
`;
