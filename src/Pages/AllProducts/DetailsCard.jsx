/* eslint-disable react/prop-types */

const DetailsCard = ({ productDetail }) => {
  const { product_name, category_name, price, product_image, description } =
    productDetail || {};

  return (
    <>
      <section>
        <div>
          <img className=" w-full" src={product_image} alt="" />
        </div>
      </section>
    </>
  );
};

export default DetailsCard;
