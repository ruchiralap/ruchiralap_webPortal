/* eslint-disable react/prop-types */
import Input from "../../../../Hooks/Input";

const Categories = ({ handleChange }) => {
  return (
    <>
      <div>
        <h2 className=" text-2xl font-semibold text-[#201700]">Categories</h2>
        <div className=" mt-8">
          <div className=" grid space-y-2">
            <Input
              handleChange={handleChange}
              value="all"
              title="All"
              name="test"
            />
            <Input
              handleChange={handleChange}
              value="Organic Oil"
              title="Organic Oil"
              name="test"
            />
            <Input
              handleChange={handleChange}
              value="Honey"
              title="Honey"
              name="test"
            />
            <Input
              handleChange={handleChange}
              value="Nuts & Seeds"
              title="Nuts & Seeds"
              name="test"
            />
            <Input
              handleChange={handleChange}
              value="Local Maghi Sarisha Oil"
              title="Local Maghi Sarisha Oil"
              name="test"
            />
            <Input
              handleChange={handleChange}
              value="Masala"
              title="Masala"
              name="test"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
