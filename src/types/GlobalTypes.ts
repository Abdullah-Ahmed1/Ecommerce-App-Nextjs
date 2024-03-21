export interface IProductItem {
  node: {
    id: string;
    title: string;
    priceRange: {
      maxVariantPrice: {
        amount: string;
        currencyCode: string;
      };
    };
    featuredImage: {
      id: string;
      url: string;
    };
    images: {
      nodes: {
        id: string;
        url: string;
      }[];
    };
  };
}

export interface IProductItems {
  products: {
    edges: IProductItem[];
  };
}
