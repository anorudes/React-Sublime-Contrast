import ColorApi from './color';

export default class ParserApi {
  static generate(themeContent, saturate) {
    let regex =  /(#[0-9a-fA-F]{3,6})\</gi;
    return themeContent.replace(regex, (match, color) => ColorApi.saturate(color, saturate / 100));
  }
}
