import React from "react";
import { FaOpencart } from "react-icons/fa";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { MdAdd, MdRemove, MdDelete } from "react-icons/md";
import { useCart } from "../../Context/CartContext";
import OrderModal from "./OrderModal";

const Cart = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { cart, increaseQuantity, decreaseQuantity, removeProduct } = useCart();

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };

  const subtotal = calculateSubtotal();

  return (
    <>
      <div
        onClick={toggleDrawer}
        className="hover:cursor-pointer border border-[#EEAB0F] p-1 rounded-md"
      >
        <FaOpencart className="md:text-2xl text-black " />
      </div>
      <div className="flex overflow-y-auto whitespace-nowrap">
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          style={{ width: "400px", backgroundColor: "#FFFBE8" }}
          lockBackgroundScroll={true}
        >
          <div className="h-full flex flex-col justify-between">
            <div className=" p-4">
              <h2 className="text-2xl text-black font-semibold mb-4">
                Your Shopping Cart
              </h2>
              {cart.length > 0 ? (
                cart.map((product) => (
                  <div
                    key={product._id}
                    className="flex overflow-y-auto whitespace-nowrap items-center justify-between mb-4 border-b pb-2"
                  >
                    <div className="flex text-black items-center">
                      <img
                        src={product.product_image}
                        alt={product.product_name}
                        className="w-24 h-16 object-cover rounded-md"
                      />
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold">
                          {product.product_name}
                        </h3>
                        <p className="text-sm">Tk {product.price}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-black">
                      <button
                        onClick={() => decreaseQuantity(product._id)}
                        className="p-1"
                      >
                        <MdRemove className="text-xl" />
                      </button>
                      <span className="mx-2">{product.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(product._id)}
                        className="p-1"
                      >
                        <MdAdd className="text-xl" />
                      </button>
                      <button
                        onClick={() => removeProduct(product._id)}
                        className="p-1 ml-4"
                      >
                        <MdDelete className="text-xl text-red-500" />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-black">Your cart is empty.</p>
              )}
            </div>

            <section className=" bg-[#FBEFD4]">
              {cart.length > 0 && (
                <div className=" p-4">
                  <div className="flex items-center justify-between text-black font-semibold">
                    <p>Subtotal</p>
                    <p>
                      Tk <span>{subtotal.toFixed(2)}</span>
                    </p>
                  </div>
                  <div className="mt-8">
                    <OrderModal />
                  </div>
                  <div>
                    <button className="btn w-[100%] bg-[#FBEFD4] border-none shadow-none hover:bg-[#FBEFD4] hover:shadow-none text-black text-xl font-medium mt-2 underline">
                      View Cart
                    </button>
                  </div>
                </div>
              )}
            </section>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default Cart;
