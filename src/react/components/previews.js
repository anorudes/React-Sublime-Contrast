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
  componentWillUpdate() {    
    this._resize();
  }
  componentDidMount() {       
   this._resize();
  }  
  _resize() {
    WindowApi.setHeight( Math.ceil(this.props.colors.length / 13) * 100 + 130);     
  }
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