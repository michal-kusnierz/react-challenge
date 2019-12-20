import React from "react";
import Async from "react-async";
import { fetchData } from "../services/fetchService";
import { Header } from "semantic-ui-react";

const Heading = () => (
  <Async promiseFn={fetchData}>
    {({ data, err, isLoading }) => {
      if (isLoading) return "Loading...";
      if (err) return `Something went wrong: ${err.message}`;

      if (data);
      const headingData = data.elements.heading.value;

      return (
        <Header
          className="heading"
          as="h1"
          color="teal"
          textAlign="center"
          block
        >
          {headingData}
        </Header>
      );
    }}
  </Async>
);

export default Heading;
