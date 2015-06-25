import ColorApi from './color';

export default class ParserApi {
  static generate(themeContent, saturate, brightness) {
    let regex =  /(#[0-9a-fA-F]{3,6})\</gi;
    let colors = [];
    return { newThemeContent: themeContent.replace(regex, (match, color) => {       
      let newColor = color;      
      newColor = (saturate > 50) ? ColorApi.saturate(newColor, (saturate - 50) * 2) : newColor;
      newColor = (saturate < 50) ? ColorApi.desaturate(newColor, (50 - saturate) * 2) : newColor;

      newColor = (brightness > 50) ? ColorApi.brightness(newColor, (brightness - 50) * 2) : newColor;
      newColor = (brightness < 50) ? ColorApi.darken(newColor, (50 - brightness) * 2) : newColor;
      
      colors.push(newColor);
      return newColor; 
    }), colors: colors };
  }
}
