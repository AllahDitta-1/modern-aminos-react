const footerLogo = "/images/icons/logo-svg%20(1).png";
const footerTagline = "Quality products and exceptional service are very important to us";
const contactTitle = "Contact Us";
const contactEmail = "cs@modernaminos.com";
const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Contact Us", href: "/contact" },
];
const subscribeTitle = "Subscribe now to save 15%";
const subscribeText = "Subscribe and Get Exclusive Updates";
const subscribeSubtext = "Straight to your Inbox for Free";
const subscribePlaceholder = "Email";
const subscribeButton = "Send";
const disclaimers = [
  "Peptide technologies are not regulated by FDA and are strictly intended for educational and scientific research purposes. The thoughts, views, and opinions expressed on this website belong solely to the author and do not necessarily reflect those of the company.",
  "Products and information found in the site are not intended to replace professional medical advice or treatment.",
];
const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Refund Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Terms of Service", href: "#" },
];
const copyright =
  "Copyright 2026, All Rights Reserved.";

export default function Footer() {
  return (
    <footer className="bg-[#123a56] px-6 pb-10 pt-10 text-white">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-7">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr_1.2fr]">
          <div>
            <div className="mb-3 leading-tight">
              <div className="text-[16px] font-semibold uppercase tracking-wide text-white">
                Modern Aminos
              </div>
              <div className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#9fd0f0]">
                Quality Products With Quality Service
              </div>
            </div>
            <p className="max-w-[320px] text-[13px] leading-6 text-slate-100">
              {footerTagline}
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="mb-2 text-[16px] font-semibold text-white">
                {contactTitle}
              </h4>
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center gap-2 text-[13px] text-slate-100"
              >
                <span className="text-white/80">✉</span>
                {contactEmail}
              </a>
            </div>

            <div>
              <h4 className="mb-2 text-[16px] font-semibold text-white">
                Quick Links
              </h4>
              <ul className="grid gap-2 text-[13px] text-slate-100">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-[18px] font-semibold text-white">
              {subscribeTitle}
            </h4>
            <p className="text-[13px] text-slate-100">{subscribeText}</p>
            <p className="text-[13px] text-slate-100">{subscribeSubtext}</p>
            <div className="mt-5 flex overflow-hidden rounded-full border border-white/60">
              <input
                placeholder={subscribePlaceholder}
                className="flex-1 bg-transparent px-5 py-3 text-sm text-white placeholder:text-slate-200"
              />
              <button
                type="button"
                className="flex items-center gap-2 bg-white px-5 text-sm font-semibold text-[#123a56]"
              >
                <img src="/images/icons/send.png" alt="" className="h-4 w-4" />
                {subscribeButton}
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-3 text-[12px] leading-6 text-slate-100">
          {disclaimers.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 text-[12px] text-slate-100">
          <p>{copyright}</p>
          <div className="flex flex-wrap gap-6">
            {legalLinks.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
