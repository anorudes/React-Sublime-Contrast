import tinycolor from './tinycolor';

export default class ColorApi {  
  static saturate(color, percent) {     
    return tinycolor(color).saturate(percent).toString(); 
  }    

  static brightness(color, percent) {            
    return tinycolor(color).brighten(percent).toString(); 
  }

  static desaturate(color, percent) {     
    return tinycolor(color).desaturate(percent).toString(); 
  }    

  static darken(color, percent) {            
    return tinycolor(color).darken(percent).toString(); 
  }  
}
