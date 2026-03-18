import { useState } from "react";

const heroBackground = "/images/hero-background.jpg";
const heroTitle = "Thank you for Visiting Modern Aminos";
const heroDescription =
  "At Modern Aminos, we are committed to maintaining a highly compliant and researcher-friendly experience. To support this commitment, we now require researchers to log in to their user account in order to view our full selection of research materials. If you do not have an existing account with us please register below.";
const heroDisclaimer =
  "Please be advised: All compounds and research materials provided by Modern Aminos are strictly for laboratory and research use only. They are not approved for human consumption by the Food and Drug Administration (FDA). These products should not be used for any form of in vivo experimentation or for any other non-laboratory purpose. By purchasing these products, you acknowledge that they will be used exclusively within a controlled and qualified research environment.";
const heroPrimaryCtaLabel = "Register Now";
const heroPrimaryCtaHref = "/my-account";
const loginTitle = "Login";
const requiredMessage = "This field is required.";
const loginFields = [
  {
    name: "username",
    label: "Username or Email Address",
    type: "text",
    placeholder: "Username or Email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter password",
  },
];
const loginRemember = "Remember Me";
const loginSubmit = "Log In";
const loginLinks = [
  { label: "Lost your password?", href: "#" },
  { label: "Register", href: "#register" },
];
const loginSocial = [
  {
    label: "Continue with Google",
    name: "Google",
    href: "/my-account",
    icon: "/images/icons/google.png",
  },
  {
    label: "Continue with Microsoft",
    name: "Microsoft",
    href: "/my-account",
    icon: "/images/icons/microsoft.png",
  },
];

export default function Hero() {
  const [loginValues, setLoginValues] = useState({
    username: "",
    password: "",
  });
  const [loginErrors, setLoginErrors] = useState({});

  const handleLoginChange = (name, value) => {
    setLoginValues((prev) => ({ ...prev, [name]: value }));
    if (loginErrors[name]) {
      setLoginErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleLoginSubmit = () => {
    const nextErrors = {};
    if (!loginValues.username.trim()) nextErrors.username = requiredMessage;
    if (!loginValues.password.trim()) nextErrors.password = requiredMessage;
    setLoginErrors(nextErrors);
  };

  return (
    <section className="bg-[#f2f3fb] px-5 pb-12 pt-8">
      <div className="mx-auto max-w-[1100px]">
        <div
          className="relative overflow-hidden rounded-[24px] bg-[#072f4a] px-7 py-12 text-white shadow-[0_20px_45px_rgba(9,32,56,0.35)] lg:px-12 lg:py-14"
          style={{
            backgroundImage: `linear-gradient(rgba(7,39,63,0.9), rgba(7,39,63,0.9)), url(${heroBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h1 className="text-[30px] font-bold leading-[1.2] lg:text-[40px]">
                {heroTitle}
              </h1>
              <p className="mt-5 text-[13px] leading-7 text-slate-200">
                {heroDescription}
              </p>
              <p className="mt-5 text-[12px] leading-6 text-slate-300">
                {heroDisclaimer}
              </p>
              <a
                href={heroPrimaryCtaHref}
                className="mt-7 inline-flex items-center rounded-full border border-white/40 px-6 py-2 text-xs font-semibold"
              >
                {heroPrimaryCtaLabel}
              </a>
            </div>

            <div className="rounded-[18px] border border-white/10 bg-[#0a2a40]/85 p-7 shadow-[0_10px_24px_rgba(0,0,0,0.18)]">
              <h2 className="mb-6 text-center text-[16px] font-semibold">
                {loginTitle}
              </h2>
              <form className="space-y-4">
                {loginFields.map((field) => (
                  <label key={field.label} className="block text-[11px]">
                    <span className="mb-2 block text-slate-200">
                      {field.label} *
                    </span>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={loginValues[field.name]}
                      onChange={(event) =>
                        handleLoginChange(field.name, event.target.value)
                      }
                      autoComplete={
                        field.type === "password"
                          ? "current-password"
                          : "username"
                      }
                      className="w-full rounded-md border border-white/15 bg-[#0b324d] px-4 py-2.5 text-xs text-white placeholder:text-slate-400"
                    />
                    {loginErrors[field.name] ? (
                      <span className="mt-2 block text-[10px] text-red-300">
                        {loginErrors[field.name]}
                      </span>
                    ) : null}
                  </label>
                ))}
                <label className="flex items-center gap-2 text-[11px] text-slate-200">
                  <input type="checkbox" className="h-3.5 w-3.5" />
                  <span>{loginRemember}</span>
                </label>
                <button
                  type="button"
                  onClick={handleLoginSubmit}
                  className="w-full rounded-full bg-[#0b65a3] py-2.5 text-xs font-semibold"
                >
                  {loginSubmit}
                </button>
              </form>
              <div className="mt-4 flex justify-between text-[10px] text-slate-300">
                {loginLinks.map((link) => (
                  <a key={link.label} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="mt-4 space-y-2">
                {loginSocial.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="flex w-full items-center justify-center gap-2 rounded-md bg-white/10 py-2.5 text-[11px] text-white"
                  >
                    <img src={social.icon} alt="" className="h-4 w-4" />
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
