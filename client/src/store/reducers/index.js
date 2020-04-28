import * as ACTION_TYPES from "../actions/actionTypes";
import { updateObject } from "../../utils";

const initialState = {
  isPopupShown: false,
  popupContent: null,
  popupID: "",
  chosenLang: localStorage.getItem("webint_lang")
}

const setLanguage = (state, action) => {
  return updateObject(state, { chosenLang: action.payload });
};

const showPopup = (state, action) => {
  return updateObject(state, { isPopupShown: true, popupContent: action.payload, popupID: action.id });
};

const closePopup = (state, action) => {
  return updateObject(state, { isPopupShown: false, popupContent: null });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.POPUP.SHOW:
      return showPopup(state, action);
    case ACTION_TYPES.POPUP.CLOSE:
      return closePopup(state, action);
    case ACTION_TYPES.LANGUAGE.SET:
      return setLanguage(state, action);
    default:
      return state;
  }
};

export default reducer;