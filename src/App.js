import React, { Component, Fragment } from 'react'

import {
  Main,
  Second,
} from './sections'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Main />
        <Second />
      </Fragment>
    );
  }
}

export default App
