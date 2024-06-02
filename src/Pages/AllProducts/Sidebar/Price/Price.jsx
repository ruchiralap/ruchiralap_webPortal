/* eslint-disable react/prop-types */
import Input from "../../../../Hooks/Input";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className=" mt-10">
        <h2 className=" text-2xl font-semibold text-[#201700]">Price Range</h2>
        <div className=" mt-8 grid space-y-2">
          <label className=" flex items-center gap-1 font-medium hover:cursor-pointer">
            <input onChange={handleChange} type="radio" value="" name="test2" />
            <span className="checkmark"></span>All
          </label>
          <Input
            handleChange={handleChange}
            value={450}
            title="100 tk - 500 tk"
            name="test2"
          />
          <Input
            handleChange={handleChange}
            value={1000}
            title="500 tk - 1000 tk"
            name="test2"
          />
          <Input
            handleChange={handleChange}
            value={1500}
            title="700 tk - 1500 tk"
            name="test2"
          />
          <Input
            handleChange={handleChange}
            value={2000}
            title="1500 tk - 2000 tk"
            name="test2"
          />
        </div>
      </div>
    </>
  );
};

export default Price;
