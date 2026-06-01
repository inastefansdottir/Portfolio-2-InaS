import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ProjectLayout({ children, className = "" }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header variant="project" className={className} />

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
}
