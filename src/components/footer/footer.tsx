import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footerContent">
        <div className="footerLinks">
          <a href="#">FAQ</a>
          <a href="#">О сервисе</a>
          <a href="#">Контакты</a>
          <a href="#">Политика</a>
        </div>

        <div className="footerCopy">
          © 2025 HR Platform
        </div>
      </div>
    </footer>
  );
};
