import { createContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <ProductContext.Provider value={{ searchValue, setSearchValue, selectedProduct, setSelectedProduct }}>
      {children}
    </ProductContext.Provider>
  );
};



export default ProductContext;