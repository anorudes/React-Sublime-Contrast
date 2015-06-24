import ColorApi from './color';

export default class ParserApi {
  static generate(themeContent, saturate) {
    let regex =  /(#.{3,6})\</gi; 
    let result;
    let newThemeContent = themeContent;    
    while((result = regex.exec(themeContent)) != null) {        
      let color = result[1];      
      let newColor = ColorApi.saturate(color, saturate);      
      newThemeContent = newThemeContent.replace(/\color/g, newColor);
    }
    return newThemeContent;
  }
}
