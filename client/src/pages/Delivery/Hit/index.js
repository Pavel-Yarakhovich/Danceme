import React from "react";
import { ITEMS } from "../../../config/consts";
import Button from "../../../shared/Button";
import { withRouter } from "react-router-dom";
import * as Styled from "./styled";

import ThumbUpIcon from '@material-ui/icons/ThumbUp';

export default withRouter(({ history }) => {
  return (
    <Styled.Feature>
      {ITEMS.slice(0, 1).map(({ id, image, desc }, i) => (
        <Styled.HitItem src={image} key={i}>
          <Button type="hit-details" clicked={() => history.push("/products")}>Перейти в каталог</Button>
        </Styled.HitItem>
      ))}
      <Styled.HitMark><ThumbUpIcon fontSize="large"/></Styled.HitMark>
    </Styled.Feature>
  );
});
