import { ReactNode } from "react";

import { Footer } from "./Footer";
import { Navbar } from "./navbar";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <a
        href="#main-content"
        className="
          sr-only
          focus:not-sr-only
          focus:absolute
          focus:z-[100]
          focus:m-4
          focus:rounded-xl
          focus:bg-primary
          focus:px-5
          focus:py-3
          focus:text-white
          focus:shadow-2xl
          focus:outline-none
          focus:ring-2
          focus:ring-primary/50
        "
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">{children}</main>

      <Footer />
    </>
  );
}