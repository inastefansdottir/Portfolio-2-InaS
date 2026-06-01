import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DarkLayout({ children, logoHidden = false }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header variant="dark" logoHidden={logoHidden} />

      <main className="flex-1 flex justify-center">{children}</main>

      <Footer />
    </div>
  );
}
