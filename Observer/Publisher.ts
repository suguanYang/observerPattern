const _subscribers: unique symbol = Symbol("subscribers");

export interface PubliserI {
  name: string;
  addSubscriber(subscriberName: string, fn: (msg: string) => void): number;

  removeSubscriber(subscriberName: string, index: number): void;

  // update(msg: string): void;
}

export default abstract class Publiser implements PubliserI {
  name: string;
  constructor(name: string) {
    this.name = name;
    this[_subscribers] = [];
  }

  addSubscriber(subscriberName: string, fn: (msg: string) => void) {
    if (this[_subscribers][subscriberName] === undefined) {
      this[_subscribers][subscriberName] = [];
    }
    this[_subscribers][subscriberName].push(fn);

    return this[_subscribers][subscriberName].indexOf(fn);
  }

  removeSubscriber(subscriberName: string, index: number) {
    this[_subscribers][subscriberName].splice(index, 1);
  }

  protected update(msg: string, specialSub?: string) {
    if (specialSub) {
      this[_subscribers][specialSub].map((fn: Function) => fn(msg));
      return;
    }
    Object.keys(this[_subscribers]).map(subName => {
      this[_subscribers][subName].map((fn: Function) => fn(msg));
    });
  }
}
