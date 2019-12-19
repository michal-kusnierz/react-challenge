import React from "react";
// import { Segment } from "semantic-ui-react";
import Async from 'react-async';
import { fetchData } from "../services/fetchService";

// const Test = () => (
//   <Segment className="test">test field</Segment>
// );



const Test = props => {
  return (
    <div className="container">
      <Async promiseFn={fetchData}>
        {({ data, err, isLoading }) => {
          if (isLoading) return "Loading..."
          if (err) return `Something went wrong: ${err.message}`

          if (data)
            return (
              <div>
                  <h1>{JSON.parse(JSON.stringify(data.elements.heading.value))}</h1>
              </div>
            )
        }}
      </Async>
    </div>
  );
}



export default Test
