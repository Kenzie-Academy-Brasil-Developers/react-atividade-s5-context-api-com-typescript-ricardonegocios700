import { ReactNode } from "react";
import { CartProvider } from "./Cart/cart";

interface ProviderProps {
  children: ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  return <CartProvider>{children}</CartProvider>;
};

export default Provider;
