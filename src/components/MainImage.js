import React from "react";
import Async from "react-async";
import { fetchData } from "../services/fetchService";
import { Image } from "semantic-ui-react";

const apiUrl = "https://my12.digitalexperience.ibm.com/";

const MainImage = () => (
  <Async promiseFn={fetchData}>
    {({ data, err, isLoading }) => {
      if (isLoading) return "Loading...";
      if (err) return `Something went wrong: ${err.message}`;

      if (data);
      const imageData = data.elements.mainImage.value.leadImage;
      const leadImage = imageData.renditions.lead;
      const imageUrl = leadImage.url;
      const imageAsset = imageData.asset.fileName;

      return (
        <Image
          className="image"
          src={apiUrl + imageUrl}
          alt={imageAsset}
          bordered
          size='huge'
          centered
        ></Image>
      );
    }}
  </Async>
);

export default MainImage;
