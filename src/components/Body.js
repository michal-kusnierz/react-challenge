import React from "react";
import Async from "react-async";
import { fetchData } from "../services/fetchService";
import { Container } from "semantic-ui-react";

const Body = () => (
  <Async promiseFn={fetchData}>
    {({ data, err, isLoading }) => {
      if (isLoading) return "Loading...";
      if (err) return `Something went wrong: ${err.message}`;

      if (data);
      const bodyObj = data.elements.body
      const bodyData = bodyObj.values;
      console.log(bodyData[0]);

      return bodyData.map((elem,index) => (
        <div key={index} className="body-container">
          <Container className="body-paragraph" text={true}>
            {elem}
          </Container>
        </div>
      ));
    }}
  </Async>
);

export default Body;
