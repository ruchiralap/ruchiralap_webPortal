/* eslint-disable react/prop-types */
import { createContext } from "react";

export const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const filterData = {};

  return (
    <FilterContext.Provider value={filterData}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
