import React from "react";
import Async from "react-async";
import moment from 'moment';
import { fetchData } from "../services/fetchService";
import { Segment } from "semantic-ui-react";

const Date = () => (
  
  <Segment className="author">
    <Async promiseFn={fetchData}>
      {({ data, err, isLoading }) => {
        if (isLoading) return "Loading...";
        if (err) return `Something went wrong: ${err.message}`;

        if (data);
        const dateData = data.elements.date.value;
        const momentDate = moment(dateData).calendar();
        
        return (
          <div>
            <p>written: {momentDate}</p>
          </div>
        );
      }}
    </Async>
  </Segment>
);

export default Date;
