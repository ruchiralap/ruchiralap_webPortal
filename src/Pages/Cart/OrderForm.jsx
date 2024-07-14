import { useForm } from "react-hook-form";
import { FaUser, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useCart } from "../../Context/CartContext";
import PrivateAxios from "../../Hooks/PrivateAxios";
import Swal from "sweetalert2";

const OrderForm = () => {
  const { cart, removeProduct, clearCart, subtotal } = useCart();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const deliveryOption = watch("deliveryOption", "Dhaka City");

  const calculateTotalPrice = () => {
    const deliveryFee = deliveryOption === "Dhaka City" ? 70 : 130;
    return (subtotal + deliveryFee).toFixed(2);
  };

  const onSubmit = async (data) => {
    const orderDetails = {
      ...data,
      subtotal: subtotal.toFixed(2),
      total: calculateTotalPrice(),
      deliveryFee: deliveryOption === "Dhaka City" ? 70 : 130,
      deliveryOption,
      products: cart.map((product) => ({
        id: product._id,
        name: product.product_name,
        price: product.price,
        quantity: product.quantity,
        weight: product.weight,
      })),
      deliveryStatus: "pending",
    };

    try {
      const response = await PrivateAxios.post("addOrder", orderDetails, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data.insertedId) {
        clearCart();
        Swal.fire({
          title: "Success!",
          text: "Order Placed Successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle errors if any
    }
  };

  return (
    <div className="bg-white">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">আপনার নাম</label>
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              {...register("name", { required: true })}
              className="w-full px-10 py-2 border border-gray-300 rounded-md"
              placeholder="আপনার নাম"
            />
            {errors.name && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">মোবাইল নাম্বার</label>
          <div className="relative">
            <FaPhone className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              {...register("phone", { required: true })}
              className="w-full px-10 py-2 border border-gray-300 rounded-md"
              placeholder="মোবাইল নাম্বার"
            />
            {errors.phone && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">এড্রেস</label>
          <div className="relative">
            <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              {...register("address", { required: true })}
              className="w-full px-10 py-2 border border-gray-300 rounded-md"
              placeholder="এড্রেস"
            />
            {errors.address && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">শিপিং মেথড</label>
          <div className="flex flex-col space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                value="Dhaka City"
                {...register("deliveryOption", { required: true })}
                defaultChecked
                className="form-radio"
              />
              <span className="ml-2">
                ঢাকা, চট্টগ্রাম সিটির ভিতরে - Tk 70.00
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="Outside Dhaka"
                {...register("deliveryOption")}
                className="form-radio"
              />
              <span className="ml-2">ঢাকার বাহিরে - Tk 130.00</span>
            </label>
            {errors.deliveryOption && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
        </div>
        {/* <div className="mb-4">
          <label className="block text-gray-700 mb-2">কুপন কোড</label>
          <input
            type="text"
            {...register("couponCode")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="কুপন কোড"
          />
          <button className="mt-2 w-full px-4 py-2 bg-[#EEAB0F] text-white rounded-md">
            এপ্লাই
          </button>
        </div> */}
        {/* Product Showing */}
        <div className="py-5">
          <section>
            {cart &&
              cart.map((product) => (
                <div key={product?._id}>
                  <hr />
                  <div>
                    <div className="flex text-black items-center justify-between">
                      <div className="flex items-center px-2">
                        <div className="border border-[#FDEFD4] rounded-md my-2 px-2 relative">
                          <img
                            src={product.product_image}
                            alt={product.product_name}
                            className="w-12 h-16 object-cover rounded-md"
                          />
                          <div className="avatar placeholder absolute -top-2 -right-2">
                            <div className="bg-[#FDEFD4] text-black w-6 rounded-full">
                              <span className="text-xs">
                                {product?.quantity}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-semibold">
                            {product.product_name}
                          </h3>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm">Tk {product.price}</p>
                        <button
                          onClick={() => removeProduct(product._id)}
                          className="p-1 ml-4"
                        >
                          <RxCross2 className="text-xl text-red-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            <hr />
          </section>
        </div>
        <div className="mb-4 bg-[#FCEFD4] rounded-md p-2">
          <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
          <div className="flex justify-between items-center border-b pb-2 mb-2">
            <span>সাব টোটাল</span>
            <span>{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2 mb-2">
            <span>ডেলিভারি ফি</span>
            <span>
              {deliveryOption === "Dhaka City" ? "Tk 70.00" : "Tk 130.00"}
            </span>
          </div>
          <div className="flex justify-between items-center font-bold">
            <span>সর্বমোট</span>
            <span>
              {deliveryOption === "Dhaka City" ? (
                <span>Tk {(subtotal + 70).toFixed(2)}</span>
              ) : (
                <span>Tk {(subtotal + 130).toFixed(2)}</span>
              )}
            </span>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Order note</label>
          <input
            type="text"
            {...register("orderNote")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Order note"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-[#EEAB0F] text-white font-bold rounded-md"
        >
          আপনার অর্ডার কমপ্লিট করতে ক্লিক করুন
        </button>
        <p className="mt-2 text-center text-green-600">
          উপরের বাটনে ক্লিক করে আপনার অর্ডারটি সাথে সাথে কমপ্লিট হয়ে যাবে!
        </p>
      </form>
    </div>
  );
};

export default OrderForm;
