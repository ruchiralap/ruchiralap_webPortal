import React, { useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { Modal } from "antd";

const OrderModal = () => {
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
        ক্যাশ অন ডেলিভারিতে অর্ডার করুন
      </button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default OrderModal;
