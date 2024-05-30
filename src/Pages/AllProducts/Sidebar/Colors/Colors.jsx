/* eslint-disable react/prop-types */
import Input from "../../../../Hooks/Input";

const Colors = ({ handleChange }) => {
  return (
    <>
      <div className=" mt-8">
        <h2 className=" text-2xl font-semibold text-[#201700]">Colors</h2>
        <div className=" mt-5">
          <Input
            handleChange={handleChange}
            value="black"
            title="Black"
            name="test4"
            color="black"
          />

          <Input
            handleChange={handleChange}
            value="blue"
            title="Blue"
            name="test4"
            color="blue"
          />

          <Input
            handleChange={handleChange}
            value="red"
            title="Red"
            name="test4"
            color="red"
          />

          <Input
            handleChange={handleChange}
            value="green"
            title="Green"
            name="test4"
            color="green"
          />
        </div>
      </div>
    </>
  );
};

export default Colors;
