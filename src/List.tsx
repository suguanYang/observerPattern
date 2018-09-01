import * as React from "react";
import styled, { css } from "react-emotion";
// import Publisher from "../Observer/Publisher";
// import Subscriber from "../Observer/Subscriber";

import { Consumer } from "./index";

const Container = styled("div")`
  background: #fff;
`;

const list = css`
  display: flex;
  width: 100%;
  height 60px;
  border-radius: 10px;
  background-color: #f6f6f6;
  margin: 10px 0;
`;

const nameStyle = css`
  width: 20%;
  height: 100%;
  line-height: 60px;
  padding: 0 10px;
`;

const msgStyle = css`
  width: 70%;
  height: 100%;
  line-height: 60px;
`;

const iconStyle = css`
  display: flex;
  align-items: center;
  width: 10%;
  height: 100%;
  line-height: 60px;
  padding-left: 10px;
  cursor: pointer;
`;

const icon = css`
  width: 20px;
  height: 20px;
`;

interface ListProps {
  name: string;
  msg?: string;
  doThing?: () => void;
}

export default class List extends React.Component<ListProps, {}> {
  constructor(props: ListProps) {
    super(props);
  }

  render() {
    const { name, msg, doThing } = this.props;
    return (
      <Container>
        <div className={list}>
          <div className={iconStyle} onClick={doThing}>
            <img className={icon} src="./images/TV.png" />
          </div>
          <div className={nameStyle}>{name}:</div>
          <div className={msgStyle}>{msg}</div>
        </div>
      </Container>
    );
  }
}
