import * as ACTION_TYPES from "./actionTypes";

export const showPopup = (content) => {
  return {
    type: ACTION_TYPES.POPUP.SHOW,
    payload: content,
  }
}

export const closePopup = () => {
  return {
    type: ACTION_TYPES.POPUP.CLOSE
  }
}