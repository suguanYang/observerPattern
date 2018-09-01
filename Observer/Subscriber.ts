import { PubliserI } from "./Publisher";

const _publisher: unique symbol = Symbol("subscribers");
const _unSubscribe: unique symbol = Symbol("unSubscribe");

export interface ISubscriber {
  name: string;
  subscribe(publisher: PubliserI, fn: () => {}): (type: string) => void;
}

export default abstract class Subscriber implements ISubscriber {
  name: string;
  constructor(name: string) {
    this.name = name;
    this[_publisher] = {};
  }

  subscribe(publisher: PubliserI, fn: (msg: string) => void) {
    this[_publisher][publisher.name] = publisher;
    const index = publisher.addSubscriber(this.name, fn);

    return () => {
      this[_unSubscribe](publisher, index);
    };
  }

  [_unSubscribe](publisher: PubliserI, index: number) {
    publisher.removeSubscriber(this.name, index);
  }
}
