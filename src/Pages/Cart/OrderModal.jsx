import React from "react";
import { MdAddShoppingCart } from "react-icons/md";

const OrderModal = () => {
  return (
    <>
      <button
        onClick={() => document.getElementById("my_modal_5").showModal()}
        className="btn w-[100%] text-[#201700] bg-[#EEAB0F] hover:bg-[#EEAB0F] font-semibold flex items-center transition hover:scale-105 border-none rounded-none hover:rounded-md"
      >
        <MdAddShoppingCart className="text-2xl text-center" />
        ক্যাশ অন ডেলিভারিতে অর্ডার করুন
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default OrderModal;
