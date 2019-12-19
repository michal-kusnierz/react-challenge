import React from "react";
import Async from "react-async";
import { fetchData } from "../services/fetchService";
import { Segment } from "semantic-ui-react";

const Author = () => (
  <Segment className="author">
    <Async promiseFn={fetchData}>
      {({ data, err, isLoading }) => {
        if (isLoading) return "Loading...";
        if (err) return `Something went wrong: ${err.message}`;

        if (data);
        const authorData = data.elements.author.value;

        return (
          <div>
            <p>by: {authorData}</p>
          </div>
        );
      }}
    </Async>
  </Segment>
);

export default Author;
