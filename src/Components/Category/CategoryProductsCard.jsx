/* eslint-disable react/prop-types */
import Card from "../../Hooks/Card";

const CategoryProductsCard = ({ product }) => {
  const { product_name, product_image, price, _id } = product || {};
  return (
    <>
      <Card
        _id={_id}
        product_name={product_name}
        product_image={product_image}
        price={price}
        product={product}
      />
    </>
  );
};

export default CategoryProductsCard;
