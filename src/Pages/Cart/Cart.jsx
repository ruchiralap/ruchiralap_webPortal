import React from "react";
import { FaOpencart } from "react-icons/fa";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Cart = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div
        onClick={toggleDrawer}
        className=" hover:cursor-pointer border border-[#EEAB0F] p-1 rounded-md"
      >
        <FaOpencart className="md:text-2xl text-black " />
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="bla bla bla"
      >
        <div>Hello World</div>
      </Drawer>
    </>
  );
};

export default Cart;
