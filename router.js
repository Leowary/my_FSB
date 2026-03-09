import { store } from "./store.js";

export function go(route) {
  store.update((state) => ({
    ...state,
    history: state.route === route ? state.history : [...state.history, state.route].slice(-20),
    route,
  }));
}

export function back() {
  const state = store.getState();
  if (!state.history.length) {
    go("home");
    return;
  }

  const history = [...state.history];
  const previousRoute = history.pop();

  store.update((current) => ({
    ...current,
    route: previousRoute,
    history,
  }));
}