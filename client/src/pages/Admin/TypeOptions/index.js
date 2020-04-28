import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import { themes } from "../../../config/themes";
import * as Styled from "./styled";

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    border: `1px solid ${themes.regular.violet}`,
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: `${themes.regular.dark_violet}`,
    },
  },
  checkedIcon: {
    backgroundColor: `${themes.regular.gold}`,
    borderColor: `${themes.regular.gold}`,
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: `${themes.regular.gold}`,
    },
  },
  group: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  label: {
    color: `${themes.regular.main_text}`,
  },
});

function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

export default function CustomizedRadios({ changedRadio, defaultValue }) {
  const classes = useStyles();
  return (
    <FormControl component="fieldset">
      <Styled.Label component="legend">
        Пожалуйста, выберите тип товара:
      </Styled.Label>
      <RadioGroup
        className={classes.group}
        defaultValue={defaultValue}
        aria-label="gender"
        name="type-options"
        onChange={changedRadio}
      >
        <FormControlLabel
          className={classes.label}
          value="boy"
          control={<StyledRadio />}
          label="Для мальчиков"
        />
        <FormControlLabel
          className={classes.label}
          value="girl"
          control={<StyledRadio />}
          label="Для девочек"
        />
        <FormControlLabel
          className={classes.label}
          value="shoes"
          control={<StyledRadio />}
          label="Обувь"
        />
        <FormControlLabel
          className={classes.label}
          value="other"
          control={<StyledRadio />}
          label="Другое"
        />
      </RadioGroup>
    </FormControl>
  );
}
