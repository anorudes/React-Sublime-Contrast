import ColorApi from './color';

export default class ParserApi {
  static generate(themeContent, saturate, contrast, brightness) {
    let regex =  /(#[0-9a-fA-F]{3,6})\</gi;
    let colors = [];
    return { newThemeContent: themeContent.replace(regex, (match, color) => {       
      saturate = saturate / 100;
      let newColor = color;
      newColor = saturate === 1 ? newColor : ColorApi.saturate(color, saturate / 100);      
      colors.push(newColor);      
      return newColor; 
    }), colors: colors };
  }
}
