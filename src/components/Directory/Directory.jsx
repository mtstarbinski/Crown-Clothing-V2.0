import MenuItem from "../Menu-Item/Menu-Item";
import "./Directory.styles.scss";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import { createStructuredSelector } from "reselect";
import { CategoryContext } from "../../contexts/category.context";
import { useContext } from "react";

const Directory = () => {
const { category } = useContext(CategoryContext);

  return (
    <div className="directory-menu">
      {category.map(({ id, ...menuItemProps }) => (
        <MenuItem key={id} {...menuItemProps} />
      ))}
    </div>
  );
};

export default Directory;
