import { GraphQLClient } from "graphql-request";

const shopify = async (query: any, variables: any) => {
  const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
  if (!token) return;
  const headers = new Headers();
  headers.set("X-Shopify-Storefront-Access-Token", token);
  const graphQLClient = new GraphQLClient(
    "https://taste-test-thrill-seekers.myshopify.com/api/2024-04/graphql.json",
    {
      headers,
    },
  );
  return await graphQLClient.request(query, variables);
};
export default shopify;
