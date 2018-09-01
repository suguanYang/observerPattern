import Subscriber from "../Observer/Subscriber";
import * as React from "react";

import List from "./List";

import { televisionPublisher } from "./Television";

class Guys extends Subscriber {
  doing: string;
  unSub: (() => void) | undefined;
  constructor(name: string) {
    super(name);
    this.doing = "";
  }

  updateDoing(msg: string) {
    this.doing = msg;
  }

  watchTv() {
    console.log("unSub", this.unSub);
    if (this.unSub) {
      this.unSub();
      this.unSub = undefined;
      this.updateDoing("关闭了电视");
      return;
    }
    this.updateDoing("打开了电视");
    this.unSub = this.subscribe(televisionPublisher, msg =>
      this.updateDoing("正在观看" + msg)
    );
  }
}

const xiaoming = new Guys("小明");

interface IGuy {
  guy: typeof xiaoming;
  cancelSub(): void;
}

type GuyStates = {
  doing: string;
};

export default class Guy extends React.Component<{}, GuyStates>
  implements IGuy {
  guy: typeof xiaoming;
  cancelSub: () => void;

  constructor(props: {}) {
    super(props);
    this.guy = xiaoming;
    this.guy.updateDoing = this.updateDoing;
    this.cancelSub = () => {};
    this.state = {
      doing: ""
    };
  }

  updateDoing = (msg: string) => {
    this.setState(() => {
      return {
        doing: msg
      };
    });
  };

  render() {
    const { doing } = this.state;
    return (
      <List
        name={this.guy.name}
        doThing={() => this.guy.watchTv()}
        msg={doing}
      />
    );
  }
}
