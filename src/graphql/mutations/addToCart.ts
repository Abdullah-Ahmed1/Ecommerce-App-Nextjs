export const addToCartMutation = `
mutation AddToCart($cartId: ID!, $merchandiseId: ID!, $quantity: Int!) {
  cartLinesAdd(cartId: $cartId, lines: [{ merchandiseId: $merchandiseId, quantity: $quantity }]) {
    cart {
      id
      lines(first: 10) {
        edges {
          node {
            id
            quantity
            merchandise {
              ... on ProductVariant {
                id
                title
                price {
                  amount
                  currencyCode
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
}
`;
