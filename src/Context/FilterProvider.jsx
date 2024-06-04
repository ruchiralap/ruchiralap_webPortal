/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import useAllProducts from "../Hooks/useAllProducts";
import Card from "../Hooks/Card";

export const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [allProducts] = useAllProducts();
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = allProducts?.filter(
    (product) =>
      product.product_name.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category_name, price }) =>
          category_name === selected || price === selected
      );
    }

    return filteredProducts.map(
      ({ product_name, product_image, price, _id }) => (
        <Card
          key={Math.random()}
          product_name={product_name}
          product_image={product_image}
          price={price}
          _id={_id}
        />
      )
    );
  }

  const result = filteredData(allProducts, selectedCategory, query);

  const filterData = {
    handleInputChange,
    filteredItems,
    handleChange,
    handleClick,
    result,
  };

  return (
    <FilterContext.Provider value={filterData}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
