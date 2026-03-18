const serviceTitle = "Customer Service and Experience Always Comes First";
const serviceDescription =
  "We understand that even though high quality research materials allows for the best most reliable results in labratory settinsg, things like slow shipping, and poor customer service can make already tedious research more of a headache. That is why here at Modern Aminos our customer service and shipping teams work around the clock to ensure that you are getting your material fast, and any shipping related inquries handled";
const serviceCtaEyebrow = "Login for the full experience.";
const serviceCtaLabel = "Login";
const serviceImage = "/images/customer%20services.webp";
const serviceCards = [
  {
    title: "3rd Party Lab Tested",
    text: "Third Party Multi Vial Batch Tested: Our products undergo rigorous third-party, multi-vial batch testing to ensure exceptional safety, purity, and quality. Batch testing also allows you to easily match each peptide to its corresponding Certificate of Analysis (COA).",
    icon: "/images/icons/assurance-2048x2048.webp",
  },
  {
    title: "Fast Shipping",
    text: "Same-Day Shipping Monday through Friday when you order before 12 PM CST! At Modern Aminos, we take pride in our fast, reliable shipping to ensure your order arrives without delay.",
    icon: "/images/icons/fast-delivery-1-e1735300713966.webp",
  },
  {
    title: "24/7 Customer Support",
    text: "Our dedicated customer service team is available Monday through Friday, and for most of the day on weekends, to ensure your needs are handled quickly and efficiently.",
    icon: "/images/icons/support-2048x2048.png",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#f2f3fb] px-5 py-12" id="services">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid items-center gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h2 className="text-[16px] font-semibold text-[#0b2239] [font-family:'Montserrat',sans-serif]">
              {serviceTitle}
            </h2>
            <p className="mt-3 text-[16px] leading-7 text-[#282828] [font-family:'Montserrat',sans-serif]">
              {serviceDescription}
            </p>
            <p className="mt-5 text-[14px] font-semibold text-[#0b2239] [font-family:'Montserrat',sans-serif]">
              {serviceCtaEyebrow}
            </p>
            <button className="mt-2 rounded-full bg-[#0b65a3] px-4 py-1.5 text-[11px] font-semibold text-white">
              {serviceCtaLabel}
            </button>
          </div>
          <div className="overflow-hidden rounded-[12px]">
            <img src={serviceImage} alt="Modern Aminos lab" className="w-full" />
          </div>
        </div>

        <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((card, index) => (
            <div
              key={card.title}
              className={`h-full rounded-[20px] bg-[#0b2f45] p-6 text-white shadow-[0_18px_36px_rgba(10,38,66,0.18)] lg:p-8 ${
                index === serviceCards.length - 1 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="mb-5 flex flex-col items-center text-center">
                <img
                  src={card.icon}
                  alt=""
                  className="h-[44px] w-[77.53px] object-contain"
                />
                <h4 className="mt-5 text-[22px] font-semibold text-white">
                  {card.title}
                </h4>
              </div>
              <p className="text-center text-[14px] leading-7 text-slate-200">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
