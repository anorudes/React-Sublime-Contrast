import Color from 'color';

export default class ColorApi {  
  static saturate(color, percent) {    
    Color(color).saturate(percent);
  }
}
