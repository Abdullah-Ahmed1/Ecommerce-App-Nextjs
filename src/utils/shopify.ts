import { GraphQLClient } from "graphql-request";
const shopify = async (query: any, variables: any) => {
  console.log("variables", variables);
  // const endpoint = process.env.SHOPIFY_STORE_DOMAIN;
  // const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
  // console.log("zz", endpoint, token);
  // if (!endpoint || !token) return;
  const graphQLClient = new GraphQLClient("https://bessersol.myshopify.com/api/2024-01/graphql.json", {
    headers: {
      "X-Shopify-Storefront-Access-Token": "331f51625b72f4a66c255aae60185c6e",
    },
  });
  return await graphQLClient.request(query, variables);
};
export default shopify;
