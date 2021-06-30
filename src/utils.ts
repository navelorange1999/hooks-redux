import { createContext, useContext } from "react";

export const initState = {
  color: "blue"
};

export const ColorContext = createContext({
  state: initState,
  actions: {
    updateColor: (color: string): void => {}
  }
});

export enum ColorActionTypes {
  UPDATE_COLOR = "UPDATE_COLOR"
}

export const reducer = (state, action) => {
  switch (action.type) {
    case ColorActionTypes.UPDATE_COLOR:
      return {
        ...state,
        color: action.color
      };
    default:
      return state;
  }
};

export const useColorContext = () => {
  const { state, actions } = useContext(ColorContext);
  const updateColor = (color) => actions.updateColor(color);
  return {
    color: state.color,
    updateColor
  };
};
