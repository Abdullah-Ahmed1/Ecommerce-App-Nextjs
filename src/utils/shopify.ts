import { GraphQLClient } from "graphql-request";

const shopify = async (query: any, variables: any) => {
  const token =
    process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN ??
    process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;
  const domain =
    process.env.SHOPIFY_STORE_DOMAIN ??
    process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
  if (!token || !domain) return;
  const headers = new Headers();
  headers.set("X-Shopify-Storefront-Access-Token", token);
  const graphQLClient = new GraphQLClient(domain, {
    headers,
  });

  return await graphQLClient.request(query, variables);
};
export default shopify;
