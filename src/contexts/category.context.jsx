import { createContext, useState } from "react";

import section from "../redux/directory/directory.data";

export const CategoryContext = createContext({
  category: [],
});

export const CategoryProvider = ({ children }) => {
  const [category, setcategory] = useState(section);
  const value = { category };
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
