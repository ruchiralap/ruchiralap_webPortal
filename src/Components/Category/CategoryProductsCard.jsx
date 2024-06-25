import IsProductCard from "../../Hooks/IsProductCard";

const CategoryProductsCard = ({ product }) => {
  const { product_name, product_image, price, _id } = product || {};
  return (
    <>
      <IsProductCard
        _id={_id}
        product_name={product_name}
        product_image={product_image}
        price={price}
      />
    </>
  );
};

export default CategoryProductsCard;
