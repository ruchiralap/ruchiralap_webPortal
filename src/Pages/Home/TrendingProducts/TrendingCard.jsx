/* eslint-disable react/prop-types */
import Card from "../../../Hooks/Card";

const TrendingCard = ({ items }) => {
  return (
    <>
      <section className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {items?.map((product) => (
          <Card
            key={product?._id}
            product_name={product?.product_name}
            product_image={product?.product_image}
            price={product?.price}
            _id={product?._id}
          />
        ))}
      </section>
    </>
  );
};

export default TrendingCard;
