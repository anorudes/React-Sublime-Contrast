import { UPLOAD_THEME, SAVE_THEME, SET_RANGE, BLOCK_COLOR, REMOVE_BLOCK_COLOR, SET_RANGE } from '../constants/ActionTypes';

export function upload(filePath) {
  return {
    type: UPLOAD_THEME,
    filePath
  };
}

export function save(filePath) {
  return {
    type: SAVE_THEME,
    filePath
  };
}

export function blockColor(color) {
  return {
    type: BLOCK_COLOR,
    color
  };
}

export function removeBlockColor(color) {
  return {
    type: REMOVE_BLOCK_COLOR,
    color
  };
}

export function setRange(saturate, brightness) {
  return {
    type: SET_RANGE,
    saturate,
    brightness
  };
}



