(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const n of c.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(a){if(a.ep)return;a.ep=!0;const c=s(a);fetch(a.href,c)}})();const d={state:{route:"home",history:[],player:{energy:5,energyMax:20,compromats:482,coins:1200,reputation:10,level:7,rank:"Майор",xp:62,xpMax:100},selectedMissionId:451,boardFilter:"all",previewMode:"normal",minigame:null,result:null,rewardClaimed:!1},listeners:new Set,getState(){return this.state},setState(t){this.state={...this.state,...t},this.emit()},update(t){this.state=t(this.state),this.emit()},subscribe(t){return this.listeners.add(t),()=>this.listeners.delete(t)},emit(){this.listeners.forEach(t=>t(this.state))}};function l(t){d.update(e=>({...e,history:e.route===t?e.history:[...e.history,e.route].slice(-20),route:t}))}function h(){const t=d.getState();if(!t.history.length){l("home");return}const e=[...t.history],s=e.pop();d.update(i=>({...i,route:s,history:e}))}const m=[{id:451,title:"Подозрительная переписка",short:"Проверить диалог, найти подозрительные фразы и подготовить сводку.",type:"urgent",rarity:"urgent",difficulty:"Высокая",difficultyTag:"hard",energy:3,time:25,kind:"Текст",rewards:{compromats:50,coins:20,reputation:2},chanceText:"10% шанс редкой улики",description:"Система перехватила диалог между двумя объектами. В переписке могут содержаться кодовые слова, намёки и скрытые формулировки. Твоя задача — быстро просмотреть фрагменты, отметить подозрительные элементы и отправить отчёт без ошибок.",tags:["Текстовая мини-игра","Аналитика","Срочное дело"],objectives:[["Найти ключевые слова","Отметь подозрительные выражения и фразы, которые могут указывать на скрытый смысл."],["Не пропустить ложные следы","Часть слов будет выглядеть опасно, но окажется нейтральной. Избегай штрафа за лишние отметки."],["Подготовить финальную сводку","В конце выбери, насколько переписка действительно подозрительна."]],risks:[["Штраф за ошибку","-1 ☕ энергия","Если отметить слишком много ложных слов, часть награды сгорит."],["Минимальный уровень","Ур. 5","Текущий уровень подходит, задание доступно без ограничений."]],textWords:["Завтра","нужно","забрать","товар","около","старого","моста","после","девяти","вечера","и","не","пиши","сюда","больше"],suspects:["забрать","старого","моста","не"],correctSeverity:"high"},{id:212,title:"Сортировка досье",short:"Разложить карточки объектов по категориям и отметить совпадения.",type:"normal",rarity:"normal",difficulty:"Низкая",difficultyTag:"easy",energy:1,time:15,kind:"Пазл",rewards:{compromats:15,coins:10,reputation:1},chanceText:"Без редких бонусов",description:"Простая тестовая миссия-заглушка.",tags:["Пазл","Обычное дело"],objectives:[["Сортировка","Разложи карточки по категориям."]],risks:[["Штраф","Нет","Это базовая миссия."]]},{id:777,title:"Редкое расследование",short:"Сопоставить цепочку событий и вычислить ключевую фигуру.",type:"rare",rarity:"rare",difficulty:"Высокая",difficultyTag:"hard",energy:4,time:30,kind:"Логика",rewards:{compromats:90,coins:50,reputation:3},chanceText:"Редкий трофей",description:"Редкая миссия-заглушка.",tags:["Логика","Редкое дело"],objectives:[["Анализ","Сопоставь события."]],risks:[["Штраф","Средний","Редкая миссия сложнее обычной."]]},{id:304,title:"Проверка звонков",short:"Прослушать фрагменты и отметить подозрительные интонации.",type:"normal",rarity:"normal",difficulty:"Низкая",difficultyTag:"easy",energy:2,time:20,kind:"Аудио",rewards:{compromats:20,coins:15,reputation:1},chanceText:"Небольшой бонус точности",description:"Аудио-миссия-заглушка.",tags:["Аудио","Обычное дело"],objectives:[["Прослушка","Отметь подозрительные фразы."]],risks:[["Штраф","Низкий","Базовая сложность."]]}];function v(t){return`
    <section class="resources">
      <div class="resource"><div class="resource__icon">☕</div><div class="resource__value">${t.energy}/${t.energyMax}</div><div class="resource__label">Энергия</div></div>
      <div class="resource"><div class="resource__icon">📁</div><div class="resource__value">${t.compromats}</div><div class="resource__label">Компромат</div></div>
      <div class="resource"><div class="resource__icon">🪙</div><div class="resource__value">${t.coins}</div><div class="resource__label">Спец-coin</div></div>
      <div class="resource"><div class="resource__icon">⭐</div><div class="resource__value">${t.reputation}%</div><div class="resource__label">Репутация</div></div>
    </section>
  `}function _(t){const e=["board","preview","result"].includes(t);return`
    <nav class="nav">
      <button class="nav__btn ${t==="home"?"active":""}" data-nav="home">
        <div class="nav__icon">🏠</div><div>HOME</div>
      </button>
      <button class="nav__btn ${e?"active":""}" data-nav="board">
        <div class="nav__icon">📋</div><div>BOARD</div>
      </button>
      <button class="nav__btn" data-stub="rating">
        <div class="nav__icon">🏆</div><div>Рейтинг</div>
      </button>
      <button class="nav__btn" data-stub="report">
        <div class="nav__icon">📨</div><div>Донос</div>
      </button>
    </nav>
  `}function M(t){return`
    <section class="screen active">
      ${v(t.player)}

      <section class="hero">
        <div class="top-spread">
          <div class="brand">
            <div class="brand__logo">🛡️</div>
            <div>
              <div class="brand__eyebrow">Telegram Mini App</div>
              <div class="brand__title">Мой личный<br />ФСБшник</div>
            </div>
          </div>
          <div class="badge-level">Ур. ${t.player.level} • ${t.player.rank}</div>
        </div>

        <div class="agent" style="margin-top:14px;">
          <div class="agent__avatar">🕵️</div>
          <div>
            <div class="agent__name">Агент Суровый</div>
            <div class="agent__rank">Личный куратор • готов к работе</div>
            <div class="speech">Сегодня у нас 4 подозрительных дела. Не подведи.</div>
          </div>
        </div>

        <div class="hero__footer">
          <div class="task-info">
            <div class="task-info__label">Срочное поручение</div>
            <div class="task-info__value">Проверить подозрительную переписку</div>
            <div class="task-info__sub">Награда: +50 компромата • срочное дело</div>
          </div>
          <button class="btn btn--primary" data-nav="board">Новое дело</button>
        </div>
      </section>

      <div class="section-label">Основные разделы</div>
      <section class="cards">
        <button class="card" data-nav="board"><div><div class="card__icon">📋</div><div class="card__title">Доска дел</div></div><div class="card__sub">Новые задания и расследования.</div></button>
        <button class="card" data-stub="cabinet"><div><div class="card__icon">🏢</div><div class="card__title">Кабинет</div></div><div class="card__sub">Апгрейды комнаты и объектов.</div></button>
        <button class="card" data-stub="progression"><div><div class="card__icon">📈</div><div class="card__title">Прокачка</div></div><div class="card__sub">Навыки, уровни, бонусы.</div></button>
        <button class="card" data-stub="shop"><div><div class="card__icon">🛒</div><div class="card__title">Магазин</div></div><div class="card__sub">Бустеры и косметика.</div></button>
      </section>

      ${_(t.route)}
    </section>
  `}const k=[["all","Все"],["urgent","Срочные"],["normal","Обычные"],["rare","Редкие"],["easy","Легкие"],["hard","Сложные"]];function L(t,e){const s=e.filter(i=>t.boardFilter==="all"?!0:i.type===t.boardFilter||i.difficultyTag===t.boardFilter);return`
    <section class="screen active">
      <header class="topbar">
        <button class="icon-btn" data-back>←</button>
        <div class="titlebar">
          <div class="titlebar__eyebrow">Telegram Mini App</div>
          <div class="titlebar__title">Доска дел</div>
        </div>
        <button class="icon-btn" id="boardRefreshBtn">⟳</button>
      </header>

      ${v(t.player)}

      <section class="summary">
        <div class="summary__head">
          <div>
            <div class="summary__title">Новые поручения доступны</div>
            <div class="summary__sub">Выбирай дело по сложности, награде и срочности.</div>
          </div>
          <div class="badge">00:42</div>
        </div>

        <div class="filters">
          ${k.map(([i,a])=>`<button class="chip ${t.boardFilter===i?"active":""}" data-filter="${i}">${a}</button>`).join("")}
        </div>
      </section>

      <section class="mission-list">
        ${s.map(i=>`
          <article class="mission">
            <div class="mission__top">
              <div>
                <div class="mission__id">Дело №${i.id}</div>
                <div class="mission__title">${i.title}</div>
                <div class="mission__desc">${i.short}</div>
              </div>
              <div class="badge">${i.type==="urgent"?"Срочно":i.type==="rare"?"Редкое":"Обычное"}</div>
            </div>

            <div class="mission__meta">
              <div class="meta-box"><div class="meta-box__label">Сложность</div><div class="meta-box__value">${i.difficulty}</div></div>
              <div class="meta-box"><div class="meta-box__label">Энергия</div><div class="meta-box__value">${i.energy} ☕</div></div>
              <div class="meta-box"><div class="meta-box__label">Время</div><div class="meta-box__value">${i.time} сек</div></div>
              <div class="meta-box"><div class="meta-box__label">Тип</div><div class="meta-box__value">${i.kind}</div></div>
            </div>

            <div class="mission__footer">
              <div class="reward"><strong>Награда</strong> +${i.rewards.compromats} компромата • +${i.rewards.coins} спец-coin</div>
              <button class="btn btn--primary" data-open-mission="${i.id}">Открыть</button>
            </div>
          </article>
        `).join("")}
      </section>

      ${_(t.route)}
    </section>
  `}function E(t,e){const s=e.find(i=>i.id===t.selectedMissionId);return`
    <section class="screen active">
      <header class="topbar">
        <button class="icon-btn" data-back>←</button>
        <div class="titlebar">
          <div class="titlebar__eyebrow">Mission Preview</div>
          <div class="titlebar__title">Карточка задания</div>
        </div>
        <button class="icon-btn">⤴</button>
      </header>

      ${v(t.player)}

      <section class="hero">
        <div class="hero__top">
          <div>
            <div class="mission-id">Дело №${s.id}</div>
            <div class="mission-title">${s.title}</div>
            <div class="mission-sub">${s.short}</div>
          </div>
          <div class="badge">${s.type==="urgent"?"Срочно":s.type==="rare"?"Редкое":"Обычное"}</div>
        </div>

        <div class="hero__meta">
          <div class="meta-box"><div class="meta-box__label">Сложность</div><div class="meta-box__value">${s.difficulty}</div></div>
          <div class="meta-box"><div class="meta-box__label">Энергия</div><div class="meta-box__value">${s.energy} ☕</div></div>
          <div class="meta-box"><div class="meta-box__label">Время</div><div class="meta-box__value">${s.time} сек</div></div>
          <div class="meta-box"><div class="meta-box__label">Тип</div><div class="meta-box__value">${s.kind}</div></div>
        </div>
      </section>

      <section class="panel">
        <div class="panel__title">О чём это дело</div>
        <div class="panel__text">${s.description}</div>
      </section>

      <section class="panel">
        <div class="panel__title">Выбери режим входа</div>
        <div class="choices">
          <button class="choice ${t.previewMode==="normal"?"active":""}" data-mode="normal">
            <div class="panel__title" style="font-size:14px; margin-bottom:3px;">Стандартный режим</div>
            <div class="panel__text">Полная награда, обычная сложность.</div>
          </button>
          <button class="choice ${t.previewMode==="safe"?"active":""}" data-mode="safe">
            <div class="panel__title" style="font-size:14px; margin-bottom:3px;">Осторожный режим</div>
            <div class="panel__text">Ошибки прощаются легче, но награда ниже.</div>
          </button>
        </div>
      </section>

      <section class="action-bar">
        <div class="cost-box">
          <div class="cost-box__label">Стоимость входа</div>
          <div class="cost-box__value">${s.energy} ☕ энергии${t.previewMode==="safe"?" • награда -20%":""}</div>
        </div>
        <button class="btn btn--primary" id="startMissionBtn">Начать мини-игру</button>
      </section>

      ${_(t.route)}
    </section>
  `}function B(t,e){const s=t.minigame;if(!e||!s)return`
      <section class="screen active">
        <header class="topbar">
          <button class="icon-btn" data-back>←</button>
          <div class="titlebar">
            <div class="titlebar__eyebrow">Minigame</div>
            <div class="titlebar__title">Анализ переписки</div>
          </div>
          <button class="icon-btn">?</button>
        </header>
        ${v(t.player)}
        <section class="panel">
          <div class="panel__title">Мини-игра не запущена</div>
          <div class="panel__text">Вернись к карточке задания и начни операцию заново.</div>
        </section>
      </section>
    `;const i=Math.min(100,Math.round(s.correctHits/e.suspects.length*100));return`
    <section class="screen active">
      <header class="topbar">
        <button class="icon-btn" data-back>←</button>
        <div class="titlebar">
          <div class="titlebar__eyebrow">Minigame</div>
          <div class="titlebar__title">Анализ переписки</div>
        </div>
        <button class="icon-btn" id="minigameHintBtn">?</button>
      </header>

      ${v(t.player)}

      <section class="hud">
        <div class="hud-card"><div class="hud-card__label">Таймер</div><div class="hud-card__value">${s.timeLeft}</div><div class="hud-card__sub">секунд осталось</div></div>
        <div class="hud-card"><div class="hud-card__label">Ошибки</div><div class="hud-card__value">${s.wrongHits} / 3</div><div class="hud-card__sub">лимит до штрафа</div></div>
        <div class="hud-card"><div class="hud-card__label">Найдено</div><div class="hud-card__value">${s.correctHits} / ${e.suspects.length}</div><div class="hud-card__sub">подозрительных слов</div></div>
      </section>

      <section class="game-panel">
        <div class="mission-meta">
          <div>
            <div class="mission-meta__id">Дело №${e.id}</div>
            <div class="mission-meta__title">${e.title}</div>
            <div class="mission-meta__desc">Нажимай на слова, которые выглядят подозрительно.</div>
          </div>
          <div class="badge">Счёт: ${s.score}</div>
        </div>

        <div class="progress-top"><span>Прогресс анализа</span><span>${i}%</span></div>
        <div class="progress-bar"><div class="progress-bar__fill" style="width:${i}%"></div></div>

        <div class="chat-card" style="margin-top:12px;">
          <div class="chat-head">
            <div>
              <div class="chat-head__title">Перехваченный фрагмент</div>
              <div class="chat-head__sub">Источник: закрытый чат</div>
            </div>
            <div class="badge">${s.correctHits===e.suspects.length?"Ключевые слова найдены":"Анализ идёт"}</div>
          </div>

          <div class="message">
            ${e.textWords.map(a=>{const c=s.clickedWords.includes(a),n=e.suspects.includes(a);return`<span class="${c?`word selected ${n?"correct":"wrong"}`:"word"}" data-word="${a}">${a}</span>`}).join("")}
          </div>
        </div>
      </section>

      <section class="severity-panel">
        <div class="severity-panel__title">Итоговая оценка угрозы</div>
        <div class="severity-options">
          <button class="severity-btn ${s.selectedSeverity==="low"?"active":""}" data-severity="low"><div class="panel__title" style="font-size:14px;">Низкая</div></button>
          <button class="severity-btn ${s.selectedSeverity==="medium"?"active":""}" data-severity="medium"><div class="panel__title" style="font-size:14px;">Средняя</div></button>
          <button class="severity-btn ${s.selectedSeverity==="high"?"active":""}" data-severity="high"><div class="panel__title" style="font-size:14px;">Высокая</div></button>
        </div>
      </section>

      <section class="footer-bar">
        <button class="btn btn--ghost" id="resetGameBtn">Сбросить</button>
        <div class="footer-status">
          <div class="footer-status__label">Статус</div>
          <div class="footer-status__value">${s.correctHits===e.suspects.length?"Все ключевые слова найдены. Выбери угрозу и заверши.":"Выбери слова и заверши анализ"}</div>
        </div>
        <button class="btn btn--primary" id="finishGameBtn">Завершить</button>
      </section>
    </section>
  `}function T(t){return{threatLabel:t.severity==="high"?"Высокая":t.severity==="medium"?"Средняя":"Низкая",statusLabel:t.rank==="D"?"Нестабильно":"Успешно"}}function S(t){const e=t.result,s=T(e);return`
    <section class="screen active">
      <header class="topbar">
        <button class="icon-btn" data-back>←</button>
        <div class="titlebar">
          <div class="titlebar__eyebrow">Mission Result</div>
          <div class="titlebar__title">Результат задания</div>
        </div>
        <button class="icon-btn">⤴</button>
      </header>

      ${v(t.player)}

      <section class="hero">
        <div class="hero__top">
          <div>
            <div class="hero__eyebrow">Дело №${e.missionId} • ${e.missionTitle}</div>
            <div class="hero__title">Операция завершена</div>
            <div class="hero__sub">Система оценила точность анализа и подготовила награду.</div>
          </div>
          <div class="badge-level">Ранг: ${e.rank}</div>
        </div>

        <div class="hero__stats">
          <div class="stat-box"><div class="stat-box__label">Счёт</div><div class="stat-box__value">${e.finalScore}</div></div>
          <div class="stat-box"><div class="stat-box__label">Точность</div><div class="stat-box__value">${e.accuracy}%</div></div>
          <div class="stat-box"><div class="stat-box__label">Время</div><div class="stat-box__value">${e.timeLeft}с</div></div>
        </div>
      </section>

      <section class="panel">
        <div class="summary-grid">
          <div class="summary-card"><div class="summary-card__label">Правильных триггеров</div><div class="summary-card__value">${e.correctHits} / ${e.totalSuspects}</div><div class="summary-card__sub">Система проверила найденные слова.</div></div>
          <div class="summary-card"><div class="summary-card__label">Ложных кликов</div><div class="summary-card__value">${e.wrongHits} / 3</div><div class="summary-card__sub">Чем их меньше, тем выше итог.</div></div>
          <div class="summary-card"><div class="summary-card__label">Итоговая угроза</div><div class="summary-card__value">${s.threatLabel}</div><div class="summary-card__sub">Сравнивается с оценкой системы.</div></div>
          <div class="summary-card"><div class="summary-card__label">Статус операции</div><div class="summary-card__value">${s.statusLabel}</div><div class="summary-card__sub">Следующее поручение уже ждёт на доске.</div></div>
        </div>
      </section>

      <section class="action-bar">
        <button class="btn btn--success" id="claimRewardsBtn">${t.rewardClaimed?"Награда получена":"Забрать награду"}</button>
        <button class="btn btn--primary" id="nextMissionBtn">Следующее дело</button>
      </section>

      ${_(t.route)}
    </section>
  `}function g(t){return{timeLeft:t.time,startTime:t.time,score:0,correctHits:0,wrongHits:0,selectedSeverity:"medium",isFinished:!1,clickedWords:[],final:null}}function H(t){return g(t)}function I(t,e,s){if(t.isFinished||t.clickedWords.includes(s))return t;const i=e.suspects.includes(s);return{...t,clickedWords:[...t.clickedWords,s],correctHits:i?t.correctHits+1:t.correctHits,wrongHits:i?t.wrongHits:t.wrongHits+1,score:i?t.score+25:Math.max(0,t.score-10)}}function A(t,e,s,i="manual"){let a=t.score;t.selectedSeverity===e.correctSeverity?a+=20:t.selectedSeverity==="medium"?a+=5:a-=10,t.correctHits===e.suspects.length&&(a+=15),t.wrongHits>=3&&(a-=15),i==="timeout"&&(a-=10),s==="safe"&&(a=Math.round(a*.8)),a=Math.max(0,a);const c=t.correctHits+t.wrongHits,n=c?Math.round(t.correctHits/c*100):0;let o="D";return a>=115?o="S":a>=90?o="A":a>=65?o="B":a>=40&&(o="C"),{reason:i,finalScore:a,accuracy:n,rank:o,timeLeft:t.timeLeft,correctHits:t.correctHits,totalSuspects:e.suspects.length,wrongHits:t.wrongHits,severity:t.selectedSeverity,missionId:e.id,missionTitle:e.title,rewards:{compromats:s==="safe"?Math.round(e.rewards.compromats*.8):e.rewards.compromats,coins:s==="safe"?Math.round(e.rewards.coins*.8):e.rewards.coins,reputation:s==="safe"?Math.max(1,Math.round(e.rewards.reputation*.8)):e.rewards.reputation,xpGain:s==="safe"?14:18}}}function R(t,e){return{...t,compromats:t.compromats+e.rewards.compromats,coins:t.coins+e.rewards.coins,reputation:t.reputation+e.rewards.reputation,xp:Math.min(t.xpMax,t.xp+e.rewards.xpGain)}}function W(){const t=document.getElementById("toast-root");t.innerHTML=`
    <div class="toast" id="toast">
      <strong id="toastTitle">Готово</strong>
      <span id="toastText">Действие выполнено.</span>
    </div>
  `}function r(t,e){const s=document.getElementById("toast"),i=document.getElementById("toastTitle"),a=document.getElementById("toastText");!s||!i||!a||(i.textContent=t,a.textContent=e,s.classList.add("show"),clearTimeout(r.timer),r.timer=setTimeout(()=>s.classList.remove("show"),1800))}function C(){const t=document.getElementById("modal-root");t.innerHTML='<div class="modal" id="appModal"></div>'}function F(t){const e=document.getElementById("appModal");e&&(e.innerHTML=t,e.classList.add("show"))}function p(){const t=document.getElementById("appModal");t&&(t.classList.remove("show"),t.innerHTML="")}function q(){window.Telegram&&window.Telegram.WebApp&&(window.Telegram.WebApp.ready(),window.Telegram.WebApp.expand())}function O(t,e){if(!(window.Telegram&&window.Telegram.WebApp))return;const s=window.Telegram.WebApp;if(t==="home"){s.BackButton.hide();return}s.BackButton.show(),s.BackButton.onClick(e)}const u=document.getElementById("app");W();C();q();let f=null;function b(){const t=d.getState();return m.find(e=>e.id===t.selectedMissionId)||m[0]}function y(){clearInterval(f),f=null}function $(){y(),f=setInterval(()=>{const t=d.getState();if(!t.minigame||t.minigame.isFinished){y();return}const e=Math.max(0,t.minigame.timeLeft-1);if(e===0){d.update(s=>({...s,minigame:{...s.minigame,timeLeft:0}})),x("timeout");return}d.update(s=>({...s,minigame:{...s.minigame,timeLeft:e}}))},1e3)}function j(){const t=d.getState(),e=b();if(!e.textWords||!e.suspects){r("Недоступно",`Полная мини-игра собрана пока только для дела №${m[0].id}.`);return}if(t.player.energy<e.energy){r("Недостаточно энергии",`Нужно минимум ${e.energy} ☕, чтобы начать дело.`);return}d.update(s=>({...s,player:{...s.player,energy:s.player.energy-e.energy},minigame:g(e),result:null,rewardClaimed:!1})),l("minigame"),$()}function x(t="manual"){const e=d.getState(),s=b();if(!e.minigame||e.minigame.isFinished)return;y();const i=A(e.minigame,s,e.previewMode,t);d.update(a=>({...a,minigame:{...a.minigame,isFinished:!0},result:i})),F(`
    <div class="modal-card">
      <div class="modal-card__title">${t==="timeout"?"Время вышло":"Анализ завершён"}</div>
      <div class="modal-card__text">${t==="timeout"?"Таймер закончился. Система сохранила промежуточный результат.":"Система подсчитала итог по мини-игре."}</div>
      <div class="summary-grid">
        <div class="reward-box"><div class="summary-card__label">Счёт</div><div class="summary-card__value">${i.finalScore}</div></div>
        <div class="reward-box"><div class="summary-card__label">Точность</div><div class="summary-card__value">${i.accuracy}%</div></div>
        <div class="reward-box"><div class="summary-card__label">Ранг</div><div class="summary-card__value">${i.rank}</div></div>
      </div>
      <div class="action-bar" style="margin-top:14px;">
        <button class="btn btn--ghost" id="closeModalBtn">Закрыть</button>
        <button class="btn btn--primary" id="goResultBtn">RESULT</button>
      </div>
    </div>
  `),document.getElementById("closeModalBtn")?.addEventListener("click",p),document.getElementById("goResultBtn")?.addEventListener("click",()=>{p(),l("result")})}function N(){const t=d.getState();if(t.result){if(t.rewardClaimed){r("Награда уже получена","Повторно забрать ресурсы нельзя.");return}d.update(e=>({...e,player:R(e.player,e.result),rewardClaimed:!0})),r("Награда зачислена","Ресурсы добавлены, прогресс звания обновлён.")}}function w(){const t=d.getState(),e=b();t.route==="home"?u.innerHTML=M(t):t.route==="board"?u.innerHTML=L(t,m):t.route==="preview"?u.innerHTML=E(t,m):t.route==="minigame"?u.innerHTML=B(t,e):t.route==="result"&&(u.innerHTML=S(t)),G(),O(t.route,h)}function G(){document.querySelectorAll("[data-nav]").forEach(t=>{t.addEventListener("click",()=>{const e=t.dataset.nav;e==="home"||e==="board"?l(e):r("Скоро",`Экран ${e.toUpperCase()} будет добавлен позже.`)})}),document.querySelectorAll("[data-stub]").forEach(t=>{t.addEventListener("click",()=>{r("Скоро",`Экран ${t.dataset.stub.toUpperCase()} будет добавлен позже.`)})}),document.querySelectorAll("[data-back]").forEach(t=>{t.addEventListener("click",()=>{p(),h()})}),document.querySelectorAll("[data-filter]").forEach(t=>{t.addEventListener("click",()=>{d.setState({boardFilter:t.dataset.filter})})}),document.querySelectorAll("[data-open-mission]").forEach(t=>{t.addEventListener("click",()=>{d.setState({selectedMissionId:Number(t.dataset.openMission),previewMode:"normal"}),l("preview")})}),document.querySelectorAll("[data-mode]").forEach(t=>{t.addEventListener("click",()=>{d.setState({previewMode:t.dataset.mode})})}),document.querySelectorAll("[data-word]").forEach(t=>{t.addEventListener("click",()=>{const e=d.getState(),s=b();!e.minigame||!s||d.update(i=>({...i,minigame:I(i.minigame,s,t.dataset.word)}))})}),document.querySelectorAll("[data-severity]").forEach(t=>{t.addEventListener("click",()=>{d.update(e=>({...e,minigame:{...e.minigame,selectedSeverity:t.dataset.severity}}))})}),document.getElementById("boardRefreshBtn")?.addEventListener("click",()=>{r("Обновление","Список дел обновлён.")}),document.getElementById("minigameHintBtn")?.addEventListener("click",()=>{r("Подсказка","Ищи слова, связанные с местом, действием и скрытностью.")}),document.getElementById("startMissionBtn")?.addEventListener("click",j),document.getElementById("finishGameBtn")?.addEventListener("click",()=>x("manual")),document.getElementById("resetGameBtn")?.addEventListener("click",()=>{const t=b();d.update(e=>({...e,minigame:H(t)})),$()}),document.getElementById("claimRewardsBtn")?.addEventListener("click",N),document.getElementById("nextMissionBtn")?.addEventListener("click",()=>l("board"))}d.subscribe(w);w();
