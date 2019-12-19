import React from "react";
import Async from "react-async";
import { fetchData, fetchImageData } from "../services/fetchService";
import { Image } from "semantic-ui-react";

const ImageContent = () => (
  <Async promiseFn={fetchData}>
    {({ data, err, isLoading }) => {
      if (isLoading) return "Loading...";
      if (err) return `Something went wrong: ${err.message}`;

      if (data);
      const imageData = data.elements.mainImage.value;
      const leadImage = imageData.leadImage.renditions.lead;
      const leadImageCaption = imageData.leadImageCaption.value;
      console.log(leadImageCaption);

      return (
        <Image className="image">
          {leadImageCaption}
        </Image>
      );
    }}
  </Async>
);

export default ImageContent;
