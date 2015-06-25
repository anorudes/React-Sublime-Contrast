import ColorApi from './color';

export default class ParserApi {
  static generate(themeContent, saturate) {
    let regex =  /(#[0-9a-fA-F]{3,6})\</gi;
    let colors = [];
    return { newThemeContent: themeContent.replace(regex, (match, color) => {       
      let newColor = ColorApi.saturate(color, saturate / 100);
      colors.push(newColor);      
      return newColor; 
    }), colors: colors };
  }
}
