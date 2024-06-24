"use client";

import { createContext, useContext, useEffect, useState } from "react";

const defaultItemsNumber = 0;
const cartData = localStorage.getItem("cart");
const CartContext = createContext<any>(
  (cartData && JSON.parse(cartData).lines.edges.length) ?? defaultItemsNumber,
);

export const CartDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cartItemsNumber, setCartItemsNumber] = useState(
    (cartData && JSON.parse(cartData).lines.edges.length) ?? defaultItemsNumber,
  );

  useEffect(() => {
    console.debug("##", cartItemsNumber);
  }, [cartItemsNumber]);

  return (
    <CartContext.Provider value={{ cartItemsNumber, setCartItemsNumber }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);
