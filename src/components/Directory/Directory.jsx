import MenuItem from "../Menu-Item/Menu-Item";
import "./Directory.styles.scss";
import category from "../../data/category.data";

const Directory = () => {

  return (
    <div className="directory-menu">
      {category.map(({ id, ...menuItemProps }) => (
        <MenuItem key={id} {...menuItemProps} />
      ))}
    </div>
  );
};

export default Directory;
