import { useParams } from "react-router-dom";
import useAllProducts from "../../Hooks/useAllProducts";
import DetailsCard from "./DetailsCard";
import BestProducts from "../Home/BestProducts";
import { PiCaretUpThin, PiCaretDownLight } from "react-icons/pi";
import { useState } from "react";

const ProductDetails = () => {
  const [allProducts] = useAllProducts();
  const { id } = useParams();

  const productDetail = allProducts.find((itm) => itm._id === id);
  if (!productDetail) {
    return (
      <div className=" flex items-center justify-center h-screen text-red-500 text-3xl">
        <p>Loading...</p>
      </div>
    );
  }

  const features = [
    {
      id: 1,
      icon: "/payment-method.png",
      title: "নিরাপদ পেমেন্ট",
      description: "বিভিন্ন পেমেন্ট পদ্ধতি থেকে বেছে নিন",
    },
    {
      id: 2,
      icon: "/fast-delivery.png",
      title: "গ্রিন ডেলিভারি",
      description: "৩-৫ দিনের মধ্যে আপনার পন্য পৌছে যাবে",
    },
    {
      id: 3,
      icon: "/eco-friendly.png",
      title: "১০০% ন্যাচারাল",
      description: "প্রাকৃতিক উপাদান ব্যবহার করতে আমরা প্রতিশ্রুতিবদ্ধ",
    },
  ];

  const AccordionItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className=" border-b-2 border-[#F6CF0F] mt-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-between items-center w-full p-4 focus:outline-none"
        >
          <span className="md:text-lg font-semibold text-start">{title}</span>
          <span>
            {isOpen ? (
              <PiCaretUpThin className=" text-2xl" />
            ) : (
              <PiCaretDownLight className=" text-2xl" />
            )}
          </span>
        </button>
        {isOpen && <div className="p-4">{children}</div>}
      </div>
    );
  };

  return (
    <>
      <section className="p-5 lg:p-8 mx-auto max-w-7xl">
        <div>
          <DetailsCard
            productDetail={productDetail}
            AccordionItem={AccordionItem}
          />
        </div>
        <div></div>
      </section>
      <section className="bg-[#FFF3BC] py-8 mt-8">
        <div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div key={feature.id} className="text-center">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="mx-auto w-28 mb-4"
                  />
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <BestProducts />
      </section>
    </>
  );
};

export default ProductDetails;
