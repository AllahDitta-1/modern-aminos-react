import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
const navItems = [
  { label: "Home", href: "#home" },
  { label: "Contact Us", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-[76px] max-w-[1180px] items-center justify-between px-6">
        <a className="flex items-center gap-3" href="#home" aria-label="Modern Aminos">
          <div className="leading-tight">
            <div className="text-[16px] font-semibold uppercase tracking-wide text-[#0b2239]">
              Modern Aminos
            </div>
            <div className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#0b65a3]">
              Quality Products With Quality Service
            </div>
          </div>
        </a>

        <nav
          className={`${
            mobileMenuOpen ? "flex" : "hidden"
          } absolute left-0 top-[76px] w-full flex-col items-start gap-0 border-b border-slate-200 bg-white px-6 py-4 md:static md:flex md:w-auto md:flex-row md:items-center md:gap-4 md:border-0 md:bg-transparent md:p-0`}
        >
          {navItems.map((item) => {
            const href =
              item.href === "#contact" ? "/contact" : `/${item.href}`;
            const isPrimary = item.label === "Home";
            return (
              <a
                key={item.label}
                href={href}
                className={`w-full py-3 text-xs font-semibold md:w-auto md:px-4 md:py-2 ${
                  isPrimary
                    ? "rounded-full bg-[#e9f1f8] text-[#0b65a3]"
                    : "text-slate-900"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <Link
          to="/contact"
          className="hidden h-8 w-8 items-center justify-center rounded-full border border-[#0b65a3] text-[#0b65a3] md:flex"
          aria-label="Account"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="8" r="3" />
            <path d="M4 20c1.8-3.3 5-5 8-5s6.2 1.7 8 5" />
          </svg>
        </Link>

        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
