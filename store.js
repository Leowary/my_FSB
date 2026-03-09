export const store = {
  state: {
    route: "home",
    history: [],
    player: {
      energy: 5,
      energyMax: 20,
      compromats: 482,
      coins: 1200,
      reputation: 10,
      level: 7,
      rank: "Майор",
      xp: 62,
      xpMax: 100,
    },
    selectedMissionId: 451,
    boardFilter: "all",
    previewMode: "normal",
    minigame: null,
    result: null,
    rewardClaimed: false,
  },

  listeners: new Set(),

  getState() {
    return this.state;
  },

  setState(patch) {
    this.state = { ...this.state, ...patch };
    this.emit();
  },

  update(updater) {
    const nextState = updater(this.state);
    this.state = nextState;
    this.emit();
  },

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  },

  emit() {
    this.listeners.forEach((listener) => listener(this.state));
  },
};