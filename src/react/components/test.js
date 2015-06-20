import {React, Reflux, reactMixin} from '../init';
import testStore from '../stores/test';
import testActions from '../actions/test';

@reactMixin.decorate(Reflux.connect(testStore))
export default class Test extends React.Component {
  render() {    
  const {props, state} = this;
    return (      
      <div>
        Hello, { state.text }
        <br />        
        <button onClick={testActions.changeName.bind(this)}>change name</button>
      </div>
    );
 }  
}

