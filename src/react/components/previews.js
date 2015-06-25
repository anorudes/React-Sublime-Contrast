import {React, Reflux, reactMixin} from '../init';

class Preview extends React.Component {   
    render() {   
      const {props, state} = this;     
      let style = {
        backgroundColor: props.color
      };
      return (
        <div className="preview" style={style}></div>
      );
    }      
}

export default class Previews extends React.Component { 
  render() {   
    const {props, state} = this;     
    return (
      <section className="previews" >
        <For each="color" of={props.colors}>          
          <Preview color={color} />
        </For>
      </section>
    );
  }
}