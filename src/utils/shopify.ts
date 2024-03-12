import { GraphQLClient } from "graphql-request";

const shopify = async (query: any, variables: any) => {
  const headers = new Headers();
  headers.set("X-Shopify-Storefront-Access-Token", process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN || "");
  const graphQLClient = new GraphQLClient("https://bessersol.myshopify.com/api/2024-01/graphql.json", {
    headers,
  });
  return await graphQLClient.request(query, variables);
};
export default shopify;
