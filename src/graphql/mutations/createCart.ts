import { gql } from "graphql-request";

export const createCartMutation = `
mutation CART_CREATE{
  cartCreate{
    cart{
      checkoutUrl
      id
    }
  }
}
`;
