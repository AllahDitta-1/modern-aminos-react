const guaranteeImage = "/images/modern.webp";
const guaranteeTitle = "The Modern Aminos Guarantee";
const guaranteeSubtitle = "3rd Party Multi Vial Batch Tested";
const guaranteeDescription =
  "At Modern Aminos, we prioritize the quality and authenticity of every product we offer. Each product undergoes third-party, multi-vial batch testing to verify purity, compound identity, quantity, and endotoxin levels. In addition to this rigorous testing process, every vial includes a unique batch number, allowing you to directly match your product to its corresponding laboratory testing report.";
const guaranteeCtaEyebrow = "Login for the full experience";
const guaranteeCtaLabel = "Login";

export default function Features() {
  return (
    <section className="bg-[#f2f3fb] px-5 py-10" id="guarantee">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="text-center text-[28px] font-semibold text-[#0b2239] lg:text-[34px]">
          {guaranteeTitle}
        </h2>
        <div className="mt-8 grid items-center gap-8 rounded-[16px] bg-white p-6 shadow-[0_12px_26px_rgba(12,40,70,0.08)] lg:grid-cols-[1.15fr_1fr] lg:p-8">
          <div className="overflow-hidden rounded-[16px]">
            <img
              src={guaranteeImage}
              alt="Modern Aminos lab"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-[18px] font-semibold text-[#0b2239] lg:text-[20px]">
              {guaranteeSubtitle}
            </h3>
            <p className="mt-4 text-[16px] leading-7 text-[#282828] [font-family:'Montserrat',sans-serif]">
              {guaranteeDescription}
            </p>
            <p className="mt-6 text-[12px] font-semibold text-slate-600">
              {guaranteeCtaEyebrow}
            </p>
            <button className="mt-3 rounded-full bg-[#0b65a3] px-6 py-2 text-[12px] font-semibold text-white">
              {guaranteeCtaLabel}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
