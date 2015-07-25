import Reflux from 'reflux';
import Parser from '../api/parser';
import { UPLOAD_THEME, SAVE_THEME, SET_RANGE, BLOCK_COLOR, REMOVE_BLOCK_COLOR } from '../constants/ActionTypes';


let initialState = {
  filePath: null,
  fileName: null,
  saturatePercentage: 50,
  brightnessPercentage: 50,
  showOptions: false,
  themeContentDefault: null,  /* default theme content */
  themeContentNew: null, /* new generated theme content */
  colors: [], /* array of colors */
  blockedColors: []
};

export default function store(state = initialState, action) {
  let newState = {...state};

  let updateTheme = (state) => {
    let generate = Parser.generate(state.themeContent, state.saturatePercentage, state.brightnessPercentage, state.blockedColors);
    state.themeContentNew = generate.newThemeContent;
    state.colors = generate.colors;
  };

  switch (action.type) {
    case UPLOAD_THEME:
      var filePath = action.filePath;
      let themeContent = fs.readFileSync(filePath, 'utf8');
      newState.showOptions = true;
      newState.filePath = filePath;
      newState.fileName = newState.filePath.replace(/^.*[\\\/]/, '');
      newState.themeContent = themeContent;
      updateTheme(newState);
      return newState;

    case BLOCK_COLOR:
      var color = action.color;
      var blockedColors = newState.blockedColors;
      if (blockedColors.indexOf(color) === -1) {
        blockedColors.push(color.toLowerCase());
      }
      newState.blockedColors = blockedColors;
      updateTheme(newState);
      return newState;

    case REMOVE_BLOCK_COLOR:
      var color = action.color;
      var blockedColors = newState.blockedColors;
      let index = blockedColors.indexOf(color);
      blockedColors.splice(index, 1);
      newState.blockedColors = blockedColors;
      updateTheme(newState);
      return newState;

    case SAVE_THEME:
      var filePath = action.filePath;
      let chooser = $('#saveDialog');
      let fileName = newState.fileName;
      let themeContentNew = newState.themeContentNew;
      chooser.change(function(e) {
        let newFilePath = $(this).val();
        newFilePath += newFilePath.indexOf('.tmTheme') > 0 ? "" : ".tmTheme";
        fs.writeFile(newFilePath, themeContentNew);
      });
      chooser.trigger('click');
      return newState;

    case SET_RANGE:
      var saturate = action.saturate;
      var brightness = action.brightness;
      newState.saturatePercentage = saturate;
      newState.brightnessPercentage = brightness;
      updateTheme(newState);
      return newState;

    default:
      return state;
  }
}
