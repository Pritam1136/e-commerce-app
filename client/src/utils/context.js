/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [categories, setCategories] = useState(null);
  const [products, setProducts] = useState(null);
  return (
    <Context.Provider
      value={{ categories, setCategories, products, setProducts }}
    >
      {children}
    </Context.Provider>
  );
};
export default AppContext;
