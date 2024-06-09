/* eslint-disable react/prop-types */

const SectionTitle = ({ title, details }) => {
  return (
    <>
      <div className="space-y-2">
        <h1 className=" text-4xl font-extrabold text-[#201700]">{title}</h1>
        <p className="md:w-1/2">{details}</p>
      </div>
    </>
  );
};

export default SectionTitle;
