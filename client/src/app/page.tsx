import LandingPage from "@/app/(nondashboard)/landing/page";
import { Footer } from "@/components/Footer";
import { NonDashboardNavbar } from "@/components/NonDashboardNavbar";

export default function Home() {
  return (
    <div className="nondashboard-layout">
      <NonDashboardNavbar />
      <main className="nondashboard-layout__main">
        <LandingPage />
      </main>
      <Footer />
    </div>
  );
}
