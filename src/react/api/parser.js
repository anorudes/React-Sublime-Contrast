import ColorApi from './color';

export default class ParserApi {
  static generate(themeContent, contrast, brightness) {
    // ColorApi.contrast(color, contrast)
    // ColorApi.brightness(color, contrast)        
    let color;
    while((color = /#.{6}/gi.exec(themeContent))!= null){       
      console.log(color[0]); 
    }
  }
}
