import React from "react";
import Async from 'react-async';
import { fetchData } from "../services/fetchService";
import { Header } from "semantic-ui-react";

const Heading = () => (
  <Header className="heading">
    <Async promiseFn={fetchData}>
      {({ data, err, isLoading }) => {
        if (isLoading) return "Loading...";
        if (err) return `Something went wrong: ${err.message}`;

        if (data);
        const headingData = data.elements.heading.value;

          return (
            <div>
              <h1>{headingData}</h1>
            </div>
          );
      }}
    </Async>
  </Header>
);

export default Heading;
