import Color from 'color';
import hexrgb from 'hexrgb';

export default class ColorApi {  
  static saturate(color, percent) {    
    let rgb = Color(color).saturate(percent).rgb();    
    let newColor = hexrgb.rgb2hex(`rgb(${rgb.r},${rgb.g},${rgb.b})`);        
    return newColor;    
  }
}
