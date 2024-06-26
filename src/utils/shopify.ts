const shopify = async (query: any, variables: any) => {
  const token =
    process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN ??
    process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;
  const domain =
    process.env.SHOPIFY_STORE_DOMAIN ??
    process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
  if (!token || !domain) return;

  const headers = new Headers();
  headers.set("Content-Type", "application/json");
  headers.set("X-Shopify-Storefront-Access-Token", token);

  const response = await fetch(domain, {
    next: { revalidate: 3600 },
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      query: query,
      variables: variables,
    }),
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }

  const result = await response.json();
  return result.data;
};

export default shopify;
