import React, {Component} from 'react';
import {RouteHandler} from 'react-router';
import Radium, {Style} from 'radium';

import globalStyles from './styles/global';

@Radium.Enhancer
export default class App extends Component {

  render () {

    return (
      <div>
        <Style rules={globalStyles} />
        <RouteHandler/>
      </div>
    );
  }
}
