import ColorApi from './color';

export default class ParserApi {
  static generate(themeContent, saturate) {
    let regex =  /#.{6}/gi; 
    let result;
    let newThemeContent = themeContent;    
    while((result = regex.exec(themeContent))!= null){           
      let color = result[0];
      color = ColorApi.saturate(color, saturate);      
    }
    return newThemeContent;
  }
}
