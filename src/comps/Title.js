import React from 'react';
import { SignOut } from '../firebase/config';

const Title = () => {
  return (
    <div className="title">
      <h1>Kenafrica Pieces</h1>
      <h2>Welcome to Kenafrica's Poetry and Pieces</h2>
      <strong><p>Do you love art and peotic pieces.?</p></strong>
      <div>
        <button className="btn" onClick={SignOut}></button>
      </div>
    </div>
  )
}

export default Title;