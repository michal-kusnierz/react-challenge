import React from "react";
// import { Segment } from "semantic-ui-react";
import Async from 'react-async';
import { fetchData } from "../services/fetchService";

// const Test = () => (
//   <Segment className="test">test field</Segment>
// );



const Test = () => {
  return (
    <div className="container">
      <Async promiseFn={fetchData}>
        {({ data, err, isLoading }) => {
          if (isLoading) return "Loading..."
          if (err) return `Something went wrong: ${err.message}`

          if (data)
            return (
              <div>
                <div>
                  <h2>React Async - Random Users</h2>
                </div>
                {data.map(user=> (
                  <div key={user.username} className="row">
                    <div className="col-md-12">
                      <p>{user.name}</p>
                      <p>{user.email}</p>
                    </div>
                  </div>
                ))}
              </div>
            )
        }}
      </Async>
    </div>
  );
}



export default Test
