import * as React from "react";
import { render } from "react-dom";

import Television from "./Television";
import Guy from "./Guy";

import { Provider, Consumer, Store } from "./storeCenter";

class Index extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <Provider value={Store}>
        <Television />
        <Guy />
      </Provider>
    );
  }
}

render(<Index />, document.getElementById("root"));
