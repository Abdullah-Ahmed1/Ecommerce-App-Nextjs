import shopify from "./shopify";
import { getCartQuery } from "@/graphql/queries/getCart";
import { addToCartMutation } from "@/graphql/mutations/addToCart";
import { createCartMutation } from "@/graphql/mutations/createCart";

export const addToCart = async ({
  product,
  cartContext,
}: {
  product: any;
  cartContext: any;
}) => {
  const cart = localStorage.getItem("cart");

  if (cart) {
    const variables = {
      cartId: JSON.parse(cart)?.id,
    };
    const responseGetCart: any = await shopify(getCartQuery, variables);
    if (responseGetCart.cart) {
      const addToCartVaraibles = {
        cartId: responseGetCart.cart.id,
        quantity: 1,
        merchandiseId: product.variants.edges[0].node.id,
      };
      try {
        const addToCartResponse = await shopify(
          addToCartMutation,
          addToCartVaraibles,
        );
        const getCartResponse = await shopify(getCartQuery, {
          cartId: addToCartResponse.cartLinesAdd.cart.id,
        });
        cartContext.setCartItemsNumber(getCartResponse.cart.lines.edges.length);
        localStorage.setItem("cart", JSON.stringify(getCartResponse.cart));
      } catch (err) {
        console.log(err);
      }
    } else {
      // here add cart again
      const response = await shopify(createCartMutation, null);
      localStorage.setItem("cart", JSON.stringify(response.data.cartCreate));
      const addToCartVaraibles = {
        cartId: response.data.cartCreate.cart.id,
        quantity: 1,
        merchandiseId: product.variants.edges[0].node.id,
      };
      try {
        const addToCartResponse = await shopify(
          addToCartMutation,
          addToCartVaraibles,
        );

        const getCartResponse = await shopify(getCartQuery, {
          cartId: addToCartResponse.data.cartLinesAddcart.id,
        });

        cartContext.setCartItemsNumber(getCartResponse.cart.lines.edges.length);
        localStorage.setItem("cart", JSON.stringify(getCartResponse.cart));
      } catch (err) {
        console.log(err);
      }
    }
  } else {
    const response = await shopify(createCartMutation, null);

    const addToCartVaraibles = {
      cartId: response.cartCreate.cart.id,
      quantity: 1,
      merchandiseId: product.variants.edges[0].node.id,
    };
    try {
      await shopify(addToCartMutation, addToCartVaraibles);

      const getCartResponse = await shopify(getCartQuery, {
        cartId: response.cartCreate.cart.id,
      });
      localStorage.setItem("cart", JSON.stringify(getCartResponse.cart));
    } catch (err) {
      console.log(err);
    }
  }
};
