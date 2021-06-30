import { FC, useReducer } from "react";

import { ColorContext, reducer, initState, ColorActionTypes } from "./utils";

const ColorProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const updateColor = (color: string) =>
    dispatch({
      type: ColorActionTypes.UPDATE_COLOR,
      color
    });
  const actions = {
    updateColor
  };
  return (
    <ColorContext.Provider value={{ state, actions }}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorProvider;
