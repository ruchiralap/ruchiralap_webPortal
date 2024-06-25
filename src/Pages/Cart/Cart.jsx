import React from "react";
import { FaOpencart } from "react-icons/fa";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { MdAdd, MdRemove, MdDelete } from "react-icons/md";
import { useCart } from "../../Context/CartContext";

const Cart = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { cart, increaseQuantity, decreaseQuantity, removeProduct } = useCart();

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div
        onClick={toggleDrawer}
        className="hover:cursor-pointer border border-[#EEAB0F] p-1 rounded-md"
      >
        <FaOpencart className="md:text-2xl text-black " />
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        style={{ width: "400px" }} // Adjust the width here
      >
        <div className="p-4">
          <h2 className="text-2xl text-black font-semibold mb-4">Your Cart</h2>
          {cart.length > 0 ? (
            cart.map((product) => (
              <div
                key={product._id}
                className="flex items-center justify-between mb-4 border-b pb-2"
              >
                <div className="flex text-black items-center">
                  <img
                    src={product.product_image}
                    alt={product.product_name}
                    className="w-16 h-16 object-cover rounded-md"
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
      </Drawer>
    </>
  );
};

export default Cart;
