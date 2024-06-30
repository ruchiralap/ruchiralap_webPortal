import React, { useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { Modal } from "antd";
import OrderForm from "./OrderForm";
import { useCart } from "../../Context/CartContext";

const OrderModal = () => {
  const { cart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        type="primary"
        onClick={showModal}
        className="btn w-[100%] text-[#201700] bg-[#EEAB0F] hover:bg-[#EEAB0F] font-semibold flex items-center transition hover:scale-105 border-none rounded-none hover:rounded-md"
      >
        <MdAddShoppingCart className="text-2xl text-center" />
        ক্যাশ অন ডেলিভারিতে অর্ডার করুন <span>({cart?.length})</span>
      </button>
      <Modal
        open={isModalOpen}
        footer={false}
        onOk={handleOk}
        onCancel={handleCancel}
        // style={{ backgroundColor: "#FFFBE8" }}
      >
        <div className="">
          <section>
            <h2 className=" text-center text-3xl font-bold p-5">
              ক্যাশ অন ডেলিভারিতে অর্ডার করতে আপনার তথ্য দিন
            </h2>
            <OrderForm />
          </section>
        </div>
      </Modal>
    </>
  );
};

export default OrderModal;
