import React from "react";
import Async from "react-async";
import { fetchData } from "../services/fetchService";
import { Segment } from "semantic-ui-react";

const Author = () => (
    <Async promiseFn={fetchData}>
      {({ data, err, isLoading }) => {
        if (isLoading) return "Loading...";
        if (err) return `Something went wrong: ${err.message}`;

        if (data);
        const authorData = data.elements.author.value;

        return (
          <Segment className="author">
            by: {authorData}
          </Segment>
        );
      }}
    </Async>
);

export default Author;
