/* eslint-disable react/prop-types */
const Input = ({ handleChange, value, title, name, color }) => {
  return (
    <>
      <label className=" flex items-center gap-1 font-medium hover:cursor-pointer">
        <input onChange={handleChange} type="radio" value={value} name={name} />
        <span className="checkmark" style={{ backgroundColor: color }}></span>
        {title}
      </label>
    </>
  );
};

export default Input;
