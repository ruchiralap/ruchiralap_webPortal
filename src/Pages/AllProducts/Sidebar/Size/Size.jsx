/* eslint-disable react/prop-types */
import Input from "../../../../Hooks/Input";

const Size = ({ handleChange }) => {
  return (
    <>
      <div className=" mt-10">
        <h2 className=" text-2xl font-semibold text-[#201700]">Size</h2>
        <div className=" mt-8 flex flex-wrap items-center gap-5">
          <label className=" flex items-center gap-1 font-medium hover:cursor-pointer">
            <input onChange={handleChange} type="radio" value="" name="test2" />
            <span className="checkmark"></span>All
          </label>
          <Input
            handleChange={handleChange}
            value={500}
            title="500g"
            name="taste3"
          />
          <Input
            handleChange={handleChange}
            value={2}
            title="1kg"
            name="taste3"
          />
          <Input
            handleChange={handleChange}
            value={2}
            title="2kg"
            name="taste3"
          />
          <Input
            handleChange={handleChange}
            value={5}
            title="5kg"
            name="taste3"
          />
        </div>
      </div>
    </>
  );
};

export default Size;
