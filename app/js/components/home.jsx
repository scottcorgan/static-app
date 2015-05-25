import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export default class Home extends Component {

  render () {

    return (
      <div>
        Home <Link to="contact">Contact</Link>
      </div>
    );
  }
}
