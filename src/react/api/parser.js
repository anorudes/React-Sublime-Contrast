import ColorApi from './color';

export default class ParserApi {
  static generate(themeContent, saturate, brightness) {
    let regex =  /(#[0-9a-fA-F]{3,6})\</gi;
    let colors = [];
    return { newThemeContent: themeContent.replace(regex, (match, color) => {       
      let newColor = color;      
      newColor = ColorApi.saturate(newColor, saturate);
      newColor = ColorApi.brightness(newColor, brightness);          
      colors.push(newColor);
      return newColor; 
    }), colors: colors };
  }
}
