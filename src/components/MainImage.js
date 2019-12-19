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
      const imageData = data.elements.mainImage.value;
      const leadImage = imageData.leadImage.renditions.lead;
      const imageUrl = leadImage.url;

      return <Image className="image" src={apiUrl + imageUrl}></Image>;
    }}
  </Async>
);

export default MainImage;
