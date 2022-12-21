import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode | ReactNode[];
}

function PageLayout({ children }: PageLayoutProps) {
  return <div className="mx-8 py-4">{children}</div>;
}

export default PageLayout;
