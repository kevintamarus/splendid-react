import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CreateGame extends Component {

  render() {
    return (
      <div>
        <div>
          This is the Create Game Page
        </div>
        <div><Link to='/waiting-room'>Waiting Room</Link></div>
      </div>
    )
  }
}

export default CreateGame;