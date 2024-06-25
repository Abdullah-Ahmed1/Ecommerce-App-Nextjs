export const cartLinesRemoveMutation = `
mutation cartLinesRemove($cartId:ID!,$lineIds:[ID!]!){
    cartLinesRemove(cartId :$cartId,lineIds:$lineIds){
          cart{
          id
          lines(first:12){
            edges{
              node{
                id
                quantity
              }
            }
          }
        }
    }
  }`;
