import React from 'react';
import NameContext from './NameContext';

class GrandChildNeedsContext extends React.Component {
static contextType = NameContext;
  render() { 
    return ( 
    <p>Grandkis: "hi i'm {this.context.firstName} {this.context.lastName}</p> 
    );
  }
}
 
export default GrandChildNeedsContext;