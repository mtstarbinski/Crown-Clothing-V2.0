import DirectoryCard from "../Directory-Card/DirectoryCard"
import { DirectoryContainer } from "./Directory.styles";
import category from "../../data/category.data";

const Directory = () => {

  return (
    <DirectoryContainer>
      {category.map(({ id, ...menuItemProps }) => (
        <DirectoryCard key={id} {...menuItemProps} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
