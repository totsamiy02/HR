import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <header>
        <h1>HR Система</h1>
      </header>
      <main>{children}</main>
      <footer>© 2025 HR Project</footer>
    </div>
  );
};

export default MainLayout;