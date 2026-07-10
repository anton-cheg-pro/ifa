import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import "./PageLayout.css";

type PageLayoutProps = {
  children: ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="page-layout">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
