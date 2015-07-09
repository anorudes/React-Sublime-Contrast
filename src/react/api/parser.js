import ColorApi from './color';

export default class ParserApi {
  static generate(themeContent, saturate, brightness, blockedColors) {
    let regex = /(#[0-9a-fA-F]{3,6})/gi;
    let colors = [];
    return {
      newThemeContent: themeContent.replace(regex, (match, color) => {
        color = color.toLowerCase();
        let newColor = color;
        if (blockedColors.indexOf(color) === -1) {
          newColor = (saturate > 50) ? ColorApi.saturate(newColor, (saturate - 50) * 2) : newColor;
          newColor = (saturate < 50) ? ColorApi.desaturate(newColor, (50 - saturate) * 2) : newColor;
          newColor = (brightness > 50) ? ColorApi.brightness(newColor, (brightness - 50) * 2) : newColor;
          newColor = (brightness < 50) ? ColorApi.darken(newColor, (50 - brightness) * 2) : newColor;
        }
        let found = false;
        let foundNewColor;
        colors.forEach(x => {
          if (x.defaultColor === color) {
            found = true;
            foundNewColor = x.newColor;
          }
        });
        if (!found) {
          colors.push({
            newColor: newColor,
            defaultColor: color
          });
          return newColor;
        } else {
          return foundNewColor;
        }
      }),
      colors: colors
    };
  }
}
