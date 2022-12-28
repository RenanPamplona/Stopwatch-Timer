import { Fragment, useState } from "react";
import * as S from "./styles.js";

const Button = (props) => {
  const [pressed, setPressed] = useState(false);

  return (
    <Fragment>
      <S.Button
        isPressed={pressed}
        color={props.color}
        darkerColor={props.darkerColor}
        onClick={() => props.handleClick()}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
      >
        {props.title}
      </S.Button>
    </Fragment>
  );
};

export default Button;
