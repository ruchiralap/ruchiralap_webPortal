import { useState } from "react";
import Card from "../../Hooks/Card";
import Sidebar from "./Sidebar/Sidebar";
import useAllProducts from "../../Hooks/useAllProducts";

const AllProducts = () => {
  const [allProducts] = useAllProducts();

  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  // const handleInputChange = (event) => {
  //   setQuery(event.target.value);
  // };

  const filteredItems = allProducts?.filter(
    (product) =>
      product.product_name.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  // const handleClick = (event) => {
  //   setSelectedCategory(event.target.value);
  // };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category_name, price, product_name }) =>
          category_name === selected ||
          price === selected ||
          product_name === selected
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

  return (
    <>
      <div className=" mt-10">
        <Sidebar result={result} handleChange={handleChange} />
      </div>
    </>
  );
};

export default AllProducts;
