import React from "react";
import Async from "react-async";
import { fetchData } from "../services/fetchService";
import { Container } from "semantic-ui-react";

const convertBodyContent = text => {
  return { __html: text };
};
const Body = () => (
  <Async promiseFn={fetchData}>
    {({ data, err, isLoading }) => {
      if (isLoading) return "Loading...";
      if (err) return `Something went wrong: ${err.message}`;

      if (data);
      const bodyData = data.elements.body.values;

      return bodyData.map((elem, index) => (
        <div key={index} className="body_container">
          <Container
            className="body_paragraph"
            dangerouslySetInnerHTML={convertBodyContent(elem)}
            text
            textAlign="justified"
          ></Container>
        </div>
      ));
    }}
  </Async>
);

export default Body;
