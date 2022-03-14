import MenuItem from "../Menu-Item/Menu-Item";
import "./Directory.styles.scss";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import { createStructuredSelector } from "reselect";

const Directory = ({sections}) => {

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...menuItemProps }) => (
        <MenuItem key={id} {...menuItemProps} />
      ))}
    </div>
  );
};

const MapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(MapStateToProps)(Directory);
