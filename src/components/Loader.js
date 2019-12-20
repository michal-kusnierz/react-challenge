import React from "react";
import { Dimmer, Loader, Segment } from "semantic-ui-react";

const ShowLoader = () => (
  <div>
    <Segment>
      <Dimmer active className="loader_container">
        <Loader indeterminate>Preparing Files</Loader>
      </Dimmer>
    </Segment>
  </div>
);

export default ShowLoader;
