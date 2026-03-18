import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import MyAccount from "../components/MyAccount.jsx";

export default function MyAccountPage() {
  return (
    <div className="min-h-screen bg-[#f2f3fb]">
      <Header />
      <main className="pt-[76px]">
        <MyAccount />
      </main>
      <Footer />
    </div>
  );
}
