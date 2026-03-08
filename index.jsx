export default function MyFsbshnikHome() {
  const agent = {
    name: "Куратор №451",
    rank: "Лейтенант",
    level: 5,
    burnout: 68,
    kompromat: 1240,
    coins: 380,
    reputation: 42,
  };

  const quickActions = [
    { label: "Дела", icon: "📂" },
    { label: "Прокачка", icon: "📈" },
    { label: "Кабинет", icon: "🏢" },
    { label: "Слежка", icon: "🕵" },
    { label: "Рейтинг", icon: "🏆" },
    { label: "Магазин", icon: "🛒" },
  ];

  const missions = [
    {
      id: 451,
      title: "Подозрительная переписка",
      reward: "+50 компромата",
      difficulty: "Обычное",
    },
    {
      id: 452,
      title: "Проверка информатора",
      reward: "+20 спец-coin",
      difficulty: "Лёгкое",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-sm flex-col px-4 pb-24 pt-4">
        <header className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              Telegram Mini App
            </p>
            <h1 className="text-2xl font-bold">Мой личный ФСБшник</h1>
          </div>
          <button className="rounded-2xl border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-neutral-300 shadow-sm transition hover:border-neutral-700 hover:bg-neutral-800">
            ⚙️
          </button>
        </header>

        <section className="mb-4 overflow-hidden rounded-3xl border border-neutral-800 bg-gradient-to-b from-neutral-900 to-neutral-950 p-4 shadow-2xl">
          <div className="mb-4 flex items-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-neutral-700 bg-neutral-800 text-4xl shadow-inner">
              🕴️
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-lg font-semibold">{agent.name}</p>
              <p className="text-sm text-neutral-400">
                {agent.rank} · Уровень {agent.level}
              </p>
              <div className="mt-3">
                <div className="mb-1 flex items-center justify-between text-xs text-neutral-400">
                  <span>Выгорание</span>
                  <span>{agent.burnout}%</span>
                </div>
                <div className="h-2 rounded-full bg-neutral-800">
                  <div
                    className="h-2 rounded-full bg-white transition-all"
                    style={{ width: `${agent.burnout}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-3">
              <p className="text-xs text-neutral-500">📁 Компромат</p>
              <p className="mt-1 text-lg font-semibold">{agent.kompromat}</p>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-3">
              <p className="text-xs text-neutral-500">🪙 Спец-coin</p>
              <p className="mt-1 text-lg font-semibold">{agent.coins}</p>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-3">
              <p className="text-xs text-neutral-500">⭐ Репутация</p>
              <p className="mt-1 text-lg font-semibold">{agent.reputation}</p>
            </div>
          </div>

          <button className="mt-4 w-full rounded-2xl bg-white px-4 py-3 text-base font-semibold text-black shadow-lg transition hover:opacity-90 active:scale-[0.99]">
            Новое дело
          </button>
        </section>

        <section className="mb-4">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-neutral-500">
              Быстрые действия
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {quickActions.map((action) => (
              <button
                key={action.label}
                className="rounded-2xl border border-neutral-800 bg-neutral-900 px-3 py-4 text-center shadow-sm transition hover:border-neutral-700 hover:bg-neutral-800 active:scale-[0.98]"
              >
                <div className="text-2xl">{action.icon}</div>
                <div className="mt-2 text-xs font-medium text-neutral-300">
                  {action.label}
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="flex-1">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-neutral-500">
              Актуальные дела
            </h2>
            <button className="text-sm text-neutral-400 transition hover:text-white">
              Все
            </button>
          </div>

          <div className="space-y-3">
            {missions.map((mission) => (
              <article
                key={mission.id}
                className="rounded-3xl border border-neutral-800 bg-neutral-900 p-4 shadow-sm"
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-neutral-500">
                      Дело №{mission.id}
                    </p>
                    <h3 className="mt-1 text-base font-semibold">{mission.title}</h3>
                  </div>
                  <span className="rounded-full border border-neutral-700 px-2 py-1 text-xs text-neutral-300">
                    {mission.difficulty}
                  </span>
                </div>

                <div className="mb-4 flex items-center justify-between text-sm text-neutral-400">
                  <span>Награда</span>
                  <span className="font-medium text-white">{mission.reward}</span>
                </div>

                <button className="w-full rounded-2xl border border-neutral-700 bg-neutral-800 px-4 py-3 text-sm font-semibold transition hover:bg-neutral-700 active:scale-[0.99]">
                  Начать расследование
                </button>
              </article>
            ))}
          </div>
        </section>

        <nav className="fixed bottom-0 left-0 right-0 border-t border-neutral-800 bg-neutral-950/95 backdrop-blur">
          <div className="mx-auto grid max-w-sm grid-cols-5 gap-1 px-3 py-2">
            {[
              ["Главная", "🏠", true],
              ["Дела", "📂", false],
              ["Кабинет", "🏢", false],
              ["Рейтинг", "🏆", false],
              ["Магазин", "🛒", false],
            ].map(([label, icon, active]) => (
              <button
                key={label}
                className={`flex flex-col items-center justify-center rounded-2xl px-2 py-2 text-xs transition ${
                  active
                    ? "bg-white text-black"
                    : "text-neutral-400 hover:bg-neutral-900 hover:text-white"
                }`}
              >
                <span className="text-base">{icon}</span>
                <span className="mt-1">{label}</span>
              </button>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
