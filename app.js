import { store } from "./store.js";
      wrongHits: 0,
      selectedSeverity: "medium",
      isFinished: false,
      clickedWords: [],
    },
    rewardClaimed: false,
  }));

  go("minigame");
}

function render() {
  const state = store.getState();

  if (state.route === "home") {
    app.innerHTML = renderHome(state);
  } else if (state.route === "board") {
    app.innerHTML = renderBoard(state);
  } else if (state.route === "preview") {
    app.innerHTML = renderMissionPreview(state);
  } else if (state.route === "minigame") {
    app.innerHTML = renderMinigame(state);
  } else if (state.route === "result") {
    app.innerHTML = renderResult(state);
  }

  bindEvents();
}

function bindEvents() {
  document.querySelectorAll("[data-nav]").forEach((el) => {
    el.addEventListener("click", () => go(el.dataset.nav));
  });

  document.querySelectorAll("[data-back]").forEach((el) => {
    el.addEventListener("click", back);
  });

  document.querySelectorAll("[data-filter]").forEach((el) => {
    el.addEventListener("click", () => {
      store.setState({ boardFilter: el.dataset.filter });
    });
  });

  document.querySelectorAll("[data-open-mission]").forEach((el) => {
    el.addEventListener("click", () => {
      store.setState({ selectedMissionId: Number(el.dataset.openMission), previewMode: "normal" });
      go("preview");
    });
  });

  const startMissionBtn = document.getElementById("startMissionBtn");
  if (startMissionBtn) {
    startMissionBtn.addEventListener("click", startMission);
  }
}

store.subscribe(render);
render();

if (window.Telegram && window.Telegram.WebApp) {
  window.Telegram.WebApp.ready();
  window.Telegram.WebApp.expand();
}