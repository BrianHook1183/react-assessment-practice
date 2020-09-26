import React from 'react';

class NewNameForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label htmlFor="fname">new first name</label>
        <input type="text" id="fname" />
        <br />
        <label htmlFor="lname">new Last name</label>
        <input type="text" id="lname" />
        <br />
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default NewNameForm;