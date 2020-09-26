import React from 'react';

class NameForm extends React.Component {
  state = {
    firstName: '',
    lastName: ''
  }

  handleChange = (event) => {
    const name = event.target;
    this.setState({
      // important to remember these square brackets
      [event.target.id]: name.value,
    })
  }

  render() {

    return (
      <>
        <form onSubmit={this.props.handleSubmit}>
          <label htmlFor='firstName'>First Name</label>
          <input type='text' id='firstName' onChange={this.handleChange} value={this.state.firstName} />
          <br />
          <label htmlFor='lastName' >Last Name</label>
          <input type='text' id='lastName' onChange={this.handleChange} value={this.state.lastName} />
          <br />
          <button type='submit' >Submit</button>
        </form>
        <br />
        <p>{this.state.firstName}</p>
        <p>{this.state.lastName}</p>
      </>
    );
  }
}

export default NameForm;