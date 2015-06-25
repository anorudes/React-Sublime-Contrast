import {React, Reflux, reactMixin} from '../init';

class Preview extends React.Component {   
    render() {   
      const {props, state} = this;     
      return (
        <div className="preview">123</div>
      );
    }      
}

export default class Previews extends React.Component { 
  render() {   
    const {props, state} = this;     
    return (
      <section className="previews" >
      </section>
    );
  }
}