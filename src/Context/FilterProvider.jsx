/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import useAllProducts from "../Hooks/useAllProducts";
import Card from "../Hooks/Card";

export const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [allProducts] = useAllProducts();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);

  /////////// Pagination function \\\\\\\\\\\

  // Input filter
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // Radio filtering
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Button filtering
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Price range filter handlers
  const handleMinPriceChange = (event) => {
    setMinPrice(parseFloat(event.target.value));
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(parseFloat(event.target.value));
  };

  // Filtering logic
  function filteredData(products, selected, query, minPrice, maxPrice) {
    let filteredProducts = products;

    // Filtering by input query
    if (query) {
      filteredProducts = filteredProducts.filter((product) =>
        product.product_name.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Filtering by category
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category_name }) => category_name === selected
      );
    }

    // Filtering by price range
    filteredProducts = filteredProducts.filter(
      ({ price }) =>
        parseFloat(price) >= minPrice && parseFloat(price) <= maxPrice
    );
    ///product_name, product_image, price, _id,
    return filteredProducts.map((product) => (
      <Card
        key={product?._id}
        product_name={product?.product_name}
        product_image={product?.product_image}
        price={product?.price}
        _id={product?._id}
        product={product}
      />
    ));
  }

  const result = filteredData(
    allProducts,
    selectedCategory,
    query,
    minPrice,
    maxPrice
  );

  const filterData = {
    handleInputChange,
    handleChange,
    handleClick,
    handleMinPriceChange,
    handleMaxPriceChange,
    result,
  };

  return (
    <FilterContext.Provider value={filterData}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
