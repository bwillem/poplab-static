import React, { Component, Fragment } from 'react'

import {
  Main,
  Second,
  Third,
  Fourth,
  Fifth,
} from './sections'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Main />
        <Second />
        <Third /> 
        <Fourth />
        <Fifth />
      </Fragment>
    );
  }
}

export default App
