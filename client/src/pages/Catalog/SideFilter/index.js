import React, { useState, memo, useCallback } from "react";
import Button from "../../../shared/Button";
import { Transition } from "react-transition-group";
import * as Styled from "./styled";
import TouchAppRoundedIcon from '@material-ui/icons/TouchAppRounded';

const defaultMenu = {
  right: -200,
  transition: "all 250ms ease-out",
};
const transitionMenu = {
  entering: { right: -200 },
  entered: { right: 0 },
  exiting: { right: -200 },
  exited: { right: -200 },
};

export default memo(({ clicked, selected }) => {
  const [isShown, setShown] = useState(false);
  const toggleMenu = useCallback(() => setShown(!isShown), [isShown]);
  return (
    <Transition in={isShown} timeout={250}>
      {(state) => (
        <Styled.Menu
          style={{
            ...defaultMenu,
            ...transitionMenu[state],
          }}
        >
          <Button
            type="side-select"
            name="all"
            clicked={clicked}
            isActive={selected === "all"}
          >
            Все товары
          </Button>
          <Button
            type="side-select"
            name="boy"
            clicked={clicked}
            isActive={selected === "boy"}
          >
            Мальчикам
          </Button>
          <Button
            type="side-select"
            name="girl"
            clicked={clicked}
            isActive={selected === "girl"}
          >
            Девочкам
          </Button>
          <Button
            type="side-select"
            name="shoes"
            clicked={clicked}
            isActive={selected === "shoes"}
          >
            Обувь
          </Button>
          <Button
            type="side-select"
            name="other"
            clicked={clicked}
            isActive={selected === "other"}
          >
            Разное
          </Button>
          <Styled.Toggler onClick={toggleMenu}>
            <TouchAppRoundedIcon fontSize="large" />
          </Styled.Toggler>
        </Styled.Menu>
      )}
    </Transition>
  );
});
