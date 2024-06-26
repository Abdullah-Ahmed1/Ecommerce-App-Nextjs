export const getCartQuery = `
query getCart($cartId: ID!) {
  cart(id: $cartId) {
    id
    createdAt
    checkoutUrl
    updatedAt
    lines(first: 10) {
      edges {
        node {
          id
          quantity
          merchandise {
            ... on ProductVariant {
              id
              title
              product {
                title
                handle
                images(first:12){
                  edges{
                    node{
                      url
                      id
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    cost {
      totalAmount {
        amount
        currencyCode
      }
      subtotalAmount {
        amount
        currencyCode
      }
      totalTaxAmount {
        amount
        currencyCode
      }
    }
  }
}
`;
