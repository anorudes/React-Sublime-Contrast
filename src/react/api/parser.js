import ColorApi from './color';

export default class ParserApi {
  static generate(themeContent, contrast, brightness) {
    // ColorApi.contrast(color, contrast)
    // ColorApi.brightness(color, contrast)    
    let regex =  /#.{6}/gi; 
    let result;
    let newThemeContent = themeContent;    
    while((result = regex.exec(themeContent))!= null){           
      let color = result[0];
      color = ColorApi.brightness(color, brightness);
      color = ColorApi.contrast(color, contrast);
    }
    return newThemeContent;
  }
}
