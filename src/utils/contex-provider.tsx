"use client";

import { createContext, useContext, useState } from "react";

const defaultItemsNumber = 0;
const CartContext = createContext<any>(defaultItemsNumber);

export const CartDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cartItemsNumber, setCartItemsNumber] = useState(defaultItemsNumber);

  return (
    <CartContext.Provider value={{ cartItemsNumber, setCartItemsNumber }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);
