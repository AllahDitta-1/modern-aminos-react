import { useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const requiredMessage = "This field is required.";

export default function ContactPage() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = () => {
    const nextErrors = {};
    if (!values.name.trim()) nextErrors.name = requiredMessage;
    if (!values.email.trim()) nextErrors.email = requiredMessage;
    if (!values.subject.trim()) nextErrors.subject = requiredMessage;
    if (!values.message.trim()) nextErrors.message = requiredMessage;
    setErrors(nextErrors);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-[76px]">
        <section className="bg-[#0b2f45] py-12 text-center text-white">
          <h1 className="text-[24px] font-semibold">Contact</h1>
          <p className="mt-2 text-[12px] text-slate-200">
            Contact us for product information, support, or general inquiries.
          </p>
        </section>

        <section className="bg-white px-5 py-12">
          <div className="mx-auto max-w-[1050px]">
            <h2 className="text-[20px] font-semibold text-[#0b2239]">
              Stay <span className="text-[#0b65a3] font-semibold">Connected</span>
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="min-h-[156px] rounded-[12px] bg-[#f6f9fc] px-[20px] py-[21px] shadow-[0_4px_10px_rgba(12,40,70,0.06)]">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0b65a3] shadow-sm">
                  ✉
                </div>
                <p className="text-[12px] font-semibold text-[#0b2239]">
                  Email Address:
                </p>
                <p className="text-[12px] text-slate-500">
                  cs@modernaminos.com
                </p>
              </div>
              <div className="min-h-[156px] rounded-[12px] bg-[#f6f9fc] px-[20px] py-[21px] shadow-[0_4px_10px_rgba(12,40,70,0.06)]">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0b65a3] shadow-sm">
                  <img src="/images/icons/needhelp.webp" alt="" className="h-5 w-5" />
                </div>
                <p className="text-[12px] font-semibold text-[#0b2239]">
                  Need Help?
                </p>
                <p className="text-[12px] text-slate-500">
                  Do you have a question? Visit <span className="text-[#0b65a3]">FAQ</span>
                </p>
              </div>
              <div className="min-h-[156px] rounded-[12px] bg-[#f6f9fc] px-[20px] py-[21px] shadow-[0_4px_10px_rgba(12,40,70,0.06)]">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0b65a3] shadow-sm">
                  <img src="/images/icons/resultreview.webp" alt="" className="h-5 w-5" />
                </div>
                <p className="text-[12px] font-semibold text-[#0b2239]">
                  Results Review:
                </p>
                <p className="text-[12px] text-slate-500">
                  Visit our <span className="text-[#0b65a3]">Quality Assurance</span>
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-[14px] bg-white p-6 shadow-[0_12px_24px_rgba(12,40,70,0.1)]">
              <h3 className="text-[18px] font-semibold text-[#0b2239]">
                Get in Touch
              </h3>
              <form className="mt-6 grid gap-4 md:grid-cols-2">
                <label className="block text-[12px] text-slate-700">
                  <span className="mb-2 block font-semibold">
                    Name: <span className="text-red-500">*</span>
                  </span>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    value={values.name}
                    onChange={(event) => handleChange("name", event.target.value)}
                    className="w-full rounded-md border border-slate-200 bg-[#fbfcff] px-3 py-2 text-sm"
                  />
                  {errors.name ? (
                    <span className="mt-2 block text-[11px] text-red-600">
                      {errors.name}
                    </span>
                  ) : null}
                </label>
                <label className="block text-[12px] text-slate-700">
                  <span className="mb-2 block font-semibold">
                    Email: <span className="text-red-500">*</span>
                  </span>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    value={values.email}
                    onChange={(event) => handleChange("email", event.target.value)}
                    className="w-full rounded-md border border-slate-200 bg-[#fbfcff] px-3 py-2 text-sm"
                  />
                  {errors.email ? (
                    <span className="mt-2 block text-[11px] text-red-600">
                      {errors.email}
                    </span>
                  ) : null}
                </label>
                <label className="block text-[12px] text-slate-700 md:col-span-2">
                  <span className="mb-2 block font-semibold">
                    Subject: <span className="text-red-500">*</span>
                  </span>
                  <input
                    type="text"
                    placeholder="Enter Subject"
                    value={values.subject}
                    onChange={(event) => handleChange("subject", event.target.value)}
                    className="w-full rounded-md border border-slate-200 bg-[#fbfcff] px-3 py-2 text-sm"
                  />
                  {errors.subject ? (
                    <span className="mt-2 block text-[11px] text-red-600">
                      {errors.subject}
                    </span>
                  ) : null}
                </label>
                <label className="block text-[12px] text-slate-700 md:col-span-2">
                  <span className="mb-2 block font-semibold">
                    Message: <span className="text-red-500">*</span>
                  </span>
                  <textarea
                    rows="6"
                    placeholder="Write a message"
                    value={values.message}
                    onChange={(event) => handleChange("message", event.target.value)}
                    className="w-full rounded-md border border-slate-200 bg-[#fbfcff] px-3 py-2 text-sm"
                  />
                  {errors.message ? (
                    <span className="mt-2 block text-[11px] text-red-600">
                      {errors.message}
                    </span>
                  ) : null}
                </label>
                <div className="md:col-span-2">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="rounded-full bg-[#0b65a3] px-8 py-2 text-xs font-semibold text-white"
                  >
                    Send Message →
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
