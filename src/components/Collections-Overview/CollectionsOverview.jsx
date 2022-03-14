import React from "react";
import "./CollectionsOverview.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../Collection-Preview/Collection-Preview";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";

const CollectionsOverview = ({ shopData }) => {
  return (
    <div className="collections-overview">
      {shopData.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </div>
  );
};

const MapStateToProps = createStructuredSelector({
  shopData: selectCollectionsForPreview,
});

export default connect(MapStateToProps)(CollectionsOverview);
