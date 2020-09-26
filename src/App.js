import React, { Component, Fragment } from 'react';
import ContactCard from './ContactCard';
import NameForm from './NameForm';
import GrandChildNeedsContext from './GrandChildNeedsContext';
import NewNameForm from './NewNameForm';
import NameContext from './NameContext';
import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: 'Brian',
      lName: 'Hook'
    }
  }

  updateName(fname, lname) {
    this.setState({
      fName: fname,
      lName: lname
    })
  }
  addNewName(fname, lname) {
    this.setState({
      fnanme2: fname,
      lname2: lname
    })
  }
  handleFormSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName } = event.target;
    this.updateName(firstName.value, lastName.value);
  }
  handleNewFormSubmit = (event) => {
    event.preventDefault();
    console.log('handleNewFormSubmit ran', event.target);
    const fname = event.target.fname.value;
    const lname = event.target.lname.value;
    this.addNewName(fname, lname);
  }

  render() {
    const { fName, lName } = this.state;
    const contextValue = {
      firstName: fName,
      lastName: lName
    }
    return (
      <Fragment>
        <h1>The App is here</h1>
        <ContactCard name={this.state} />
        <NameForm handleSubmit={this.handleFormSubmit} />
        <NameContext.Provider value={contextValue}>
          <GrandChildNeedsContext />
        </NameContext.Provider>

        <Link to='/new' >Go to new form</Link>
        <br />
        <Link to='/' >Go Home</Link>

        {/* normal */}
        <Route path='/new' component={NewNameForm} />
        {/* Render prop */}
        <Route
          exact path="/props-through-render"
          render={(props) =>
            <PropsPage {...props}
              title={`Props through render`}
              onAddBookmark={this.addBookmark}
            />
          }
        />


        <NewNameForm handleSubmit={this.handleNewFormSubmit} />
      </Fragment>
    );
  }
}

export default App;