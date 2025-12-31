import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="container headerContent">
        <div className="logo">HR&nbsp;Platform</div>

        <nav className="nav">
          <a href="#" className="navLink">Вход</a>
          <a href="#" className="navButton">Регистрация</a>
        </nav>
      </div>
    </header>
  );
};
