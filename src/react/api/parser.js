import ColorApi from './color';

export default class ParserApi {
  static generate(themeContent, saturate, contrast, brightness) {
    let regex =  /(#[0-9a-fA-F]{3,6})\</gi;
    let colors = [];
    return { newThemeContent: themeContent.replace(regex, (match, color) => {       
      let newColor = color;      
      newColor = ColorApi.saturate(newColor, saturate);
      newColor = ColorApi.brightness(newColor, brightness);        
      return newColor; 
    }), colors: colors };
  }
}
