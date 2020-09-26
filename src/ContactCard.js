import React from 'react';
import './ContactCard.css';

class ContactCard extends React.Component {
  render() {
    const { fName, lName } = this.props.name;
    return (
      <div className='ContactCard'>
        <h2>Hello, my name is:</h2>
        <ul>
          <li>{fName}</li>
          <li>{lName}</li>
        </ul>
      </div>
    );
  }
}

export default ContactCard;