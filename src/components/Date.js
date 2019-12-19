import React from "react";
import Async from "react-async";
import moment from "moment";
import { fetchData } from "../services/fetchService";
import { Segment } from "semantic-ui-react";

const Date = () => (
  <Async promiseFn={fetchData}>
    {({ data, err, isLoading }) => {
      if (isLoading) return "Loading...";
      if (err) return `Something went wrong: ${err.message}`;

      if (data);
      const dateData = data.elements.date.value;
      const momentDate = moment(dateData).calendar();

      return (
        <Segment className="date" compact color="teal" inverted tertiary>
          written: {momentDate}
        </Segment>
      );
    }}
  </Async>
);

export default Date;
