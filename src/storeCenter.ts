import * as React from "react";

interface AppStore {
  guys: App.Guy[];
  clearGuys(): void;
  addGuys(guy: App.Guy): void;
}

export const Store: AppStore = {
  guys: [],
  clearGuys: () => {
    Store.guys = [];
  },
  addGuys: (guy: App.Guy) => {
    Store.guys.push(guy);
  }
};

export const { Provider, Consumer } = React.createContext(Store);
