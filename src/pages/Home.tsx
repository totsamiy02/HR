import "./Home.css";

export const Home = () => {
  return (
    <>
      
      <main className="home">
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">
                Управление персоналом стало проще
              </h1>
              <p className="hero-subtitle">
                Современная HR-платформа для управления задачами, KPI и эффективностью команды
              </p>
              <div className="hero-buttons">
                <button className="btn btn-primary">
                  <span>Начать бесплатно</span>
                  <span className="btn-icon">→</span>
                </button>
                <button className="btn btn-outline">
                  <span>Узнать подробнее</span>
                  <span className="btn-icon">▶</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Role Selection - ДВЕ КАРТОЧКИ */}
        <section className="role-selection">
          <div className="container">
            <div className="section-header">
              <h2>Начните работу с платформой</h2>
              <p>Выберите подходящий вариант для вашей роли в компании</p>
            </div>
            
            <div className="role-cards">
              <div className="role-card">
                <div className="role-icon">👤</div>
                <h3>Для сотрудников</h3>
                <p>
                  Полный доступ к вашим задачам, графику работы, 
                  KPI и личным целям. Отслеживайте прогресс и достигайте результатов.
                </p>
                <div className="role-features">
                  <div className="feature">
                    <span>📅</span>
                    <span>Личный календарь и график</span>
                  </div>
                  <div className="feature">
                    <span>✅</span>
                    <span>Управление задачами и сроками</span>
                  </div>
                  <div className="feature">
                    <span>📊</span>
                    <span>Отслеживание KPI и целей</span>
                  </div>
                  <div className="feature">
                    <span>🏆</span>
                    <span>Мои достижения и прогресс</span>
                  </div>
                </div>
                <div className="role-buttons">
                  <button className="btn btn-primary full-width">
                    <span>Создать аккаунт</span>
                  </button>
                  <button className="btn btn-outline full-width">
                    <span>Войти в систему</span>
                  </button>
                </div>
              </div>

              <div className="role-card featured">
                <div className="role-icon">👑</div>
                <h3>Для руководителей</h3>
                <p>
                  Полный контроль над командой, назначение задач, оценка эффективности 
                  и аналитика производительности в реальном времени.
                </p>
                <div className="role-features">
                  <div className="feature">
                    <span>📈</span>
                    <span>Аналитика работы команды</span>
                  </div>
                  <div className="feature">
                    <span>🎯</span>
                    <span>Постановка и контроль задач</span>
                  </div>
                  <div className="feature">
                    <span>📋</span>
                    <span>Управление проектами и KPI</span>
                  </div>
                  <div className="feature">
                    <span>📊</span>
                    <span>Детальные отчеты и статистика</span>
                  </div>
                </div>
                <div className="role-buttons">
                  <button className="btn btn-primary full-width">
                    <span>Начать управление</span>
                  </button>
                  <button className="btn btn-outline full-width">
                    <span>Демо для руководителя</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="key-features">
          <div className="container">
            <div className="section-header">
              <h2>Ключевые возможности</h2>
              <p>Все необходимое для эффективного управления персоналом</p>
            </div>
            
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon task">✅</div>
                <h3>Управление задачами</h3>
                <p>
                  Создавайте, назначайте и отслеживайте задачи. 
                  Установите приоритеты, сроки и контролируйте прогресс.
                </p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon calendar">📅</div>
                <h3>Календарь и график</h3>
                <p>
                  Планируйте рабочие процессы, управляйте отпусками 
                  и контролируйте график работы сотрудников.
                </p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon kpi">📊</div>
                <h3>KPI и эффективность</h3>
                <p>
                  Настройте ключевые показатели эффективности, 
                  отслеживайте результаты и мотивируйте команду.
                </p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon analytics">📈</div>
                <h3>Аналитика и отчеты</h3>
                <p>
                  Получайте детальные отчеты, анализируйте 
                  продуктивность и принимайте обоснованные решения.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="pricing">
          <div className="container">
            <div className="section-header">
              <h2>Тарифные планы</h2>
              <p>Выберите подходящий вариант для вашего бизнеса</p>
            </div>
            
            <div className="pricing-cards">
              <div className="pricing-card">
                <div className="pricing-header">
                  <h3>Базовый</h3>
                  <div className="price">
                    <span className="amount">Бесплатно</span>
                  </div>
                  <p>Для небольших команд до 5 человек</p>
                </div>
                <div className="pricing-features">
                  <div className="feature">
                    <span>✓</span>
                    <span>Управление задачами</span>
                  </div>
                  <div className="feature">
                    <span>✓</span>
                    <span>Личный календарь</span>
                  </div>
                  <div className="feature">
                    <span>✓</span>
                    <span>Базовые KPI</span>
                  </div>
                  <div className="feature">
                    <span>—</span>
                    <span>Расширенная аналитика</span>
                  </div>
                  <div className="feature">
                    <span>—</span>
                    <span>Приоритетная поддержка</span>
                  </div>
                </div>
                <button className="btn btn-outline full-width">
                  <span>Начать бесплатно</span>
                </button>
              </div>

              <div className="pricing-card recommended">
                <div className="recommended-badge">ПОПУЛЯРНЫЙ</div>
                <div className="pricing-header">
                  <h3>Профессиональный</h3>
                  <div className="price">
                    <span className="amount">990₽</span>
                    <span className="period">/месяц за пользователя</span>
                  </div>
                  <p>Для растущих компаний</p>
                </div>
                <div className="pricing-features">
                  <div className="feature">
                    <span>✓</span>
                    <span>Все функции Базового</span>
                  </div>
                  <div className="feature">
                    <span>✓</span>
                    <span>Расширенная аналитика</span>
                  </div>
                  <div className="feature">
                    <span>✓</span>
                    <span>Интеграции с сервисами</span>
                  </div>
                  <div className="feature">
                    <span>✓</span>
                    <span>Приоритетная поддержка</span>
                  </div>
                  <div className="feature">
                    <span>✓</span>
                    <span>Безлимитное хранилище</span>
                  </div>
                </div>
                <button className="btn btn-primary full-width">
                  <span>Выбрать тариф</span>
                </button>
              </div>

              <div className="pricing-card">
                <div className="pricing-header">
                  <h3>Корпоративный</h3>
                  <div className="price">
                    <span className="amount">Индивидуально</span>
                  </div>
                  <p>Для крупных организаций</p>
                </div>
                <div className="pricing-features">
                  <div className="feature">
                    <span>✓</span>
                    <span>Все функции Профессионального</span>
                  </div>
                  <div className="feature">
                    <span>✓</span>
                    <span>Кастомизация под бизнес</span>
                  </div>
                  <div className="feature">
                    <span>✓</span>
                    <span>White-label решение</span>
                  </div>
                  <div className="feature">
                    <span>✓</span>
                    <span>API доступ</span>
                  </div>
                  <div className="feature">
                    <span>✓</span>
                    <span>Персональный менеджер</span>
                  </div>
                </div>
                <button className="btn btn-outline full-width">
                  <span>Обсудить проект</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="how-it-works">
          <div className="container">
            <div className="section-header">
              <h2>Простой процесс работы</h2>
              <p>Всего несколько шагов для начала работы</p>
            </div>
            
            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Регистрация</h3>
                <p>
                  Создайте аккаунт для себя или компании. 
                  Выберите подходящий тарифный план.
                </p>
              </div>
              
              <div className="step">
                <div className="step-number">2</div>
                <h3>Настройка</h3>
                <p>
                  Добавьте сотрудников, настройте KPI, 
                  создайте проекты и определите задачи.
                </p>
              </div>
              
              <div className="step">
                <div className="step-number">3</div>
                <h3>Эффективная работа</h3>
                <p>
                  Начинайте работать продуктивно. 
                  Контролируйте прогресс и достигайте целей.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta">
          <div className="container">
            <div className="cta-content">
              <h2>Начните управлять эффективно уже сегодня</h2>
              <p>
                Присоединяйтесь к компаниям, которые уже улучшили 
                процессы управления персоналом с помощью нашей платформы
              </p>
              <div className="cta-buttons">
                <button className="btn btn-primary large">
                  <span>Попробовать бесплатно 14 дней</span>
                </button>
                <button className="btn btn-outline large">
                  <span>Посмотреть тарифы</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
    </>
  );
};