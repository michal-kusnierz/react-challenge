import React from "react";
import Async from "react-async";
import { fetchData } from "../services/fetchService";
import { Label } from "semantic-ui-react";

const ImageLabel = () => (
  <Async promiseFn={fetchData}>
    {({ data, err, isLoading }) => {
      if (isLoading) return "Loading...";
      if (err) return `Something went wrong: ${err.message}`;

      if (data);
      const imageData = data.elements.mainImage.value;
      const leadImageCaption = imageData.leadImageCaption.value;
      return (
        <div className="image_label">
          <Label size="medium">{leadImageCaption}</Label>
        </div>
      );
    }}
  </Async>
);

export default ImageLabel;
