import { UPLOAD_THEME, SAVE_THEME, SET_RANGE, BLOCK_COLOR, REMOVE_BLOCK_COLOR, SET_RANGE } from '../constants/ActionTypes';

export function upload() {
  return {
    type: UPLOAD_THEME,
    filePath
  };
}

export function save() {
  return {
    type: SAVE_THEME,
    filePath
  };
}

export function blockColor() {
  return {
    type: BLOCK_COLOR,
    color
  };
}

export function removeBlockColor() {
  return {
    type: REMOVE_BLOCK_COLOR,
    color
  };
}

export function setRange() {
  return {
    type: SET_RANGE,
    saturate,
    brightness
  };
}



