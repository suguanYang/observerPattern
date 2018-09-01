import * as React from "react";
import Publisher from "../Observer/Publisher";
import styled, { css } from "react-emotion";
const Container = styled("div")`
  background: #fff;
`;

const televisionCon = css`
  display: flex;
  width: 100%;
  height 100px;
  background-color: #f6f6f6;
`;

const img = css`
  height 100%;
`;

const showsList = css`
  display: flex;
  overflow:hidden;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const btn = css`
  width: 100px;
  height: 20px;
  margin-left: 10px;
  background-color: #342123;
  line-height: 20px;
  text-align: center;
  color: #fff;
  cursor: pointer;
`;

const televisionShows = [
  "天线宝宝",
  "花园宝宝",
  "海绵宝宝",
  "迪迦奥特曼",
  "光能使者",
  "舒克贝塔",
  "猫和老鼠"
];

class TelevisionPublisher extends Publisher {
  constructor(name: string) {
    super(name);
  }

  play(msg: string, specialSub?: string) {
    this.update(msg, specialSub);
  }
}

export const televisionPublisher = new TelevisionPublisher("Television");

interface TelevisionProps {
  publisher: typeof televisionPublisher;
}

export default class Television extends React.Component<{}, {}>
  implements TelevisionProps {
  publisher: typeof televisionPublisher;

  constructor(props: {}) {
    super(props);
    this.publisher = televisionPublisher;
  }

  render() {
    return (
      <Container>
        <div className={televisionCon}>
          <div className={img}>
            <img className={img} src="./images/television.jpeg" />
          </div>
          <div className={showsList}>
            {televisionShows.map(show => (
              <div className={btn} onClick={() => this.publisher.play(show)}>
                {show}
              </div>
            ))}
          </div>
        </div>
      </Container>
    );
  }
}
