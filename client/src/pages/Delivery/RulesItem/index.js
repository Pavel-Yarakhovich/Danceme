import React, { useState, memo } from "react";
import * as Styled from "./styled";
import ShowMoreButton from "../../../shared/Button/ShowMoreButton";
import { Transition } from "react-transition-group";
import { useWindowWidth } from "../../../utils/useWindowWidth";



export default memo(({ logo, description }) => {
  const width = useWindowWidth();
  const [showMore, setShowMore] = useState(false);
  const handleShowMoreClick = () => setShowMore(!showMore);

  const defaultStyle = {
    height: 0,
    overflow: "hidden",
    transition: "all 250ms ease",
  };
  const transitionStyles = {
    entering: { height: 0 },
    entered: { height: width > 550 ? "auto" : "auto" },
    exiting: { height: 0 },
    exited: { height: 0 },
  };

  return (
    <Styled.Feature  expanded={showMore}>
      <Styled.Top>
        <Styled.Feature_Logo expanded={showMore}>
          {logo}
        </Styled.Feature_Logo>
        <ShowMoreButton clicked={handleShowMoreClick} expanded={showMore ? true : false}>
          Подробнее
        </ShowMoreButton>
      </Styled.Top>
      <Transition in={showMore || width > 550} timeout={250} mountOnEnter unmountOnExit>
        {(state) => (
          <Styled.DescriptionBlock
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            {description.map((desc, i) => <Styled.Feature_Description key={i}>{desc}</Styled.Feature_Description>)}
          </Styled.DescriptionBlock>
        )}
      </Transition>
    </Styled.Feature>
  );
});
