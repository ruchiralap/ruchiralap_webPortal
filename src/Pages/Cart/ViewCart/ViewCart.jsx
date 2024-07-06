import { useCart } from "../../../Context/CartContext";
import { MdAdd, MdRemove, MdDelete } from "react-icons/md";
import OrderModal from "../OrderModal";

const ViewCart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeProduct, subtotal } =
    useCart();

  return (
    <>
      <div className="p-5 lg:p-8 mx-auto max-w-7xl mt-8">
        <div>
          <section className=" grid grid-cols-7 gap-10">
            <div className=" col-span-full md:col-span-4">
              {cart?.length > 0 ? (
                cart?.map((product) => (
                  <div key={product._id}>
                    <div className="bg-[#FCEFD4] shadow-md border-b border-[#EEAB0F] p-1 md:p-4 flex items-center gap-2 text-center justify-between">
                      <div className="">
                        <img
                          className="w-44"
                          src={product.product_image}
                          alt=""
                        />
                      </div>
                      <div className=" flex-1 grid space-y-3 lg:flex items-center justify-between">
                        <div>
                          <h3 className="lg:text-lg lg:font-semibold">
                            {product.product_name} (
                            <span>{product.weight && product.weight}</span>)
                          </h3>
                        </div>
                        <div className=" flex items-center gap-3 px-6">
                          <p className="text-sm text-[#EEAB0F] font-semibold">
                            Tk {product.price}
                          </p>
                          <button
                            onClick={() => removeProduct(product._id)}
                            className="p-1"
                          >
                            <MdDelete className="text-xl text-red-500" />
                          </button>
                        </div>
                        <div className=" flex items-center gap-3">
                          <button
                            onClick={() => decreaseQuantity(product._id)}
                            className="p-2 hover:bg-[#f5e28a] bg-[#FFF3BC]"
                          >
                            <MdRemove className="text-xl" />
                          </button>
                          <span className="mx-2 font-semibold">
                            {product.quantity}
                          </span>
                          <button
                            onClick={() => increaseQuantity(product._id)}
                            className="p-2 hover:bg-[#f5e28a] bg-[#FFF3BC]"
                          >
                            <MdAdd className="text-xl" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className=" flex flex-col h-screen items-center justify-center">
                  <p className="text-black text-3xl font-extrabold">
                    Your cart is empty.
                  </p>
                </div>
              )}
            </div>
            <div className=" col-span-full md:col-span-3">
              <div className="border-none p-4 bg-[#FCEFD4]">
                <h3 className=" text-2xl font-bold">Order Summary</h3>
                <div className=" flex items-center justify-between mt-3">
                  <p className=" font-semibold">
                    Subtotal ( <span>{cart?.length}</span> items )
                  </p>
                  <p className=" font-semibold">
                    Tk <span>{subtotal.toFixed(2)}</span>
                  </p>
                </div>
                <div className=" flex items-center justify-between font-bold mt-5">
                  <p>Shipping Fee</p>
                  <p>Tk 100</p>
                </div>
                <div className=" flex items-center justify-between mt-5 font-semibold">
                  <p>Total</p>
                  <p>
                    <span>Tk {(subtotal + 100).toFixed(2)}</span>
                  </p>
                </div>
                <div className=" mt-8">
                  <OrderModal />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ViewCart;
