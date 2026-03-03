import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col bg-background bg-gradient-surface">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);
