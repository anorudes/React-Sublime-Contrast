import tinycolor from './tinycolor';

export default class ColorApi {  
  static saturate(color, percent) {   
  console.log(percent);         
    return tinycolor(color).desaturate(100 - percent).toString(); 
  }    
  static brightness(color, percent) {            
    return tinycolor(color).darken(100 - percent).toString(); 
  }
}
