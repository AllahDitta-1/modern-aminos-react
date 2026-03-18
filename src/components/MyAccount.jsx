import { useState } from "react";

const requiredMessage = "This field is required.";

const accountBanner = {
  breadcrumb: "Home | My Account",
  title: "My Account",
  image: "/images/account-banner.jpg",
};

const loginSection = {
  title: "Login",
  fields: [
    { name: "username", label: "Username or email address", type: "text", placeholder: "" },
    { name: "password", label: "Password", type: "password", placeholder: "" },
  ],
  remember: "Remember me",
  submit: "Log in",
  forgot: { label: "Lost your password?", href: "#" },
  social: [
    { label: "Continue with Google", icon: "/images/icons/google.png" },
    { label: "Continue with Microsoft", icon: "/images/icons/microsoft.png" },
  ],
};

const registerSection = {
  title: "Register",
  fields: [
    { name: "email", label: "Email address", type: "email", placeholder: "", required: true },
    { name: "password", label: "Password", type: "password", placeholder: "", required: true },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "",
      required: true,
    },
    {
      name: "birthday",
      label: "Birthday (optional)",
      type: "text",
      placeholder: "mm/dd/yyyy",
      required: false,
    },
    {
      name: "businessType",
      label: "Business Type",
      type: "text",
      placeholder: "Select Business Type",
      required: true,
    },
  ],
  terms: "I have read and agree to the Terms & Conditions",
  note:
    "Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.",
  submit: "Register",
  social: [
    { label: "Continue with Google", icon: "/images/icons/google.png" },
    { label: "Continue with Microsoft", icon: "/images/icons/microsoft.png" },
  ],
};

export default function MyAccount() {
  const [loginValues, setLoginValues] = useState({
    username: "",
    password: "",
  });
  const [loginErrors, setLoginErrors] = useState({});
  const [registerValues, setRegisterValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    birthday: "",
    businessType: "",
  });
  const [registerErrors, setRegisterErrors] = useState({});

  const handleLoginChange = (name, value) => {
    setLoginValues((prev) => ({ ...prev, [name]: value }));
    if (loginErrors[name]) {
      setLoginErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleRegisterChange = (name, value) => {
    setRegisterValues((prev) => ({ ...prev, [name]: value }));
    if (registerErrors[name]) {
      setRegisterErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleLoginSubmit = () => {
    const nextErrors = {};
    if (!loginValues.username.trim()) nextErrors.username = requiredMessage;
    if (!loginValues.password.trim()) nextErrors.password = requiredMessage;
    setLoginErrors(nextErrors);
  };

  const handleRegisterSubmit = () => {
    const nextErrors = {};
    registerSection.fields.forEach((field) => {
      if (field.required && !registerValues[field.name].trim()) {
        nextErrors[field.name] = requiredMessage;
      }
    });
    setRegisterErrors(nextErrors);
  };

  return (
    <section className="bg-[#f2f3fb] px-5 pb-16 pt-6" id="my-account">
      <div className="mx-auto max-w-[1100px]">
        <div
          className="relative overflow-hidden rounded-[14px] bg-[#0b3f5f] px-6 py-10 text-white shadow-[0_18px_40px_rgba(9,32,56,0.35)] lg:px-10"
          style={{
            backgroundImage: `linear-gradient(rgba(7,39,63,0.88), rgba(7,39,63,0.88)), url(${accountBanner.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] text-slate-100">
            {accountBanner.breadcrumb}
          </div>
          <h1 className="mt-4 text-[32px] font-semibold">{accountBanner.title}</h1>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-[26px] font-semibold text-[#2a2f3a]">
              {loginSection.title}
            </h2>
            <div className="mt-6 rounded-[18px] bg-white p-6 shadow-[0_12px_24px_rgba(12,40,70,0.1)]">
              <form className="space-y-4">
                {loginSection.fields.map((field) => (
                  <label key={field.label} className="block text-[12px] text-slate-700">
                    <span className="mb-2 block font-semibold">
                      {field.label} <span className="text-red-500">*</span>
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
                      className="w-full rounded-md border border-slate-200 bg-[#f2f3fb] px-3 py-2 text-sm"
                    />
                    {loginErrors[field.name] ? (
                      <span className="mt-2 block text-[11px] text-red-600">
                        {loginErrors[field.name]}
                      </span>
                    ) : null}
                  </label>
                ))}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handleLoginSubmit}
                    className="rounded-full bg-[#0b65a3] px-5 py-2 text-xs font-semibold text-white"
                  >
                    {loginSection.submit}
                  </button>
                  <label className="flex items-center gap-2 text-[12px] text-slate-600">
                    <input type="checkbox" className="h-3 w-3" />
                    <span>{loginSection.remember}</span>
                  </label>
                </div>
                <a href={loginSection.forgot.href} className="text-[11px] text-blue-700">
                  {loginSection.forgot.label}
                </a>
              </form>
              <div className="mt-4 space-y-2">
                {loginSection.social.map((social) => (
                  <button
                    key={social.label}
                    type="button"
                    className="flex w-full items-center justify-center gap-2 rounded-md border border-slate-200 bg-white py-2 text-[12px] font-semibold"
                  >
                    <img src={social.icon} alt="" className="h-4 w-4" />
                    {social.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-[26px] font-semibold text-[#2a2f3a]">
              {registerSection.title}
            </h2>
            <div className="mt-6 rounded-[18px] bg-white p-6 shadow-[0_12px_24px_rgba(12,40,70,0.1)]">
              <form className="space-y-4">
                {registerSection.fields.map((field) => (
                  <label key={field.label} className="block text-[12px] text-slate-700">
                    <span className="mb-2 block font-semibold">
                      {field.label} {field.required ? <span className="text-red-500">*</span> : null}
                    </span>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={registerValues[field.name]}
                      onChange={(event) =>
                        handleRegisterChange(field.name, event.target.value)
                      }
                      className="w-full rounded-md border border-slate-200 bg-[#f2f3fb] px-3 py-2 text-sm"
                    />
                    {registerErrors[field.name] ? (
                      <span className="mt-2 block text-[11px] text-red-600">
                        {registerErrors[field.name]}
                      </span>
                    ) : null}
                  </label>
                ))}
                <label className="flex items-start gap-2 text-[11px] text-slate-600">
                  <input type="checkbox" className="mt-1 h-3 w-3" />
                  <span>{registerSection.terms}</span>
                </label>
                <p className="text-[11px] text-slate-500">{registerSection.note}</p>
                <button
                  type="button"
                  onClick={handleRegisterSubmit}
                  className="rounded-full bg-[#0b65a3] px-5 py-2 text-xs font-semibold text-white"
                >
                  {registerSection.submit}
                </button>
              </form>
              <div className="mt-4 space-y-2">
                {registerSection.social.map((social) => (
                  <button
                    key={social.label}
                    type="button"
                    className="flex w-full items-center justify-center gap-2 rounded-md border border-slate-200 bg-white py-2 text-[12px] font-semibold"
                  >
                    <img src={social.icon} alt="" className="h-4 w-4" />
                    {social.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
