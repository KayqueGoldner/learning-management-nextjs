import { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { NonDashboardNavbar } from "@/components/NonDashboardNavbar";

export default function NonDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="nondashboard-layout">
      <NonDashboardNavbar />
      <main className="nondashboard-layout__main">{children}</main>
      <Footer />
    </div>
  );
}
