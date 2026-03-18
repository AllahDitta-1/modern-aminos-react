const faqItems = [
  {
    question: " Do you ship internationally? ",
    answer:
      "At the moment we only ship to the USA. ",
  },
  {
    question: " Why do I need an account to view the site? ",
    answer:
      "This is to help ensure that all researchers who are browsing on our site are authorized researchers. This helps us to maintain compliance. ",
  },
  {
    question: " How long do orders take to arrive? ",
    answer:
    "Orders typically ship the same day and take 3–5 business days to arrive, depending on the courier.",
  },
 
  {
    question: " I think my package may be lost, or I’m having an order issue,  what should I do? ",
    answer:
      "Please contact our service team at cs@modernaminos.com with your full name, order #, and issue with as much description as possible so that they may assist you.",
  },
];
const quoteText = "Quality products and exceptional service are very important to us";

export default function CTA() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-[#f2f3fb] px-5 py-12" id="contact">
      <div className="mx-auto max-w-[1100px]">
        <div className="text-center">
          <h2 className="text-[32px] font-semibold text-[#0b2239] lg:text-[40px]">
            Need Help?
          </h2>
        </div>

        <div className="mx-auto mt-6 max-w-[860px] rounded-[28px] bg-white p-6 shadow-[0_20px_50px_rgba(10,38,66,0.15)] lg:p-8">
          <div className="rounded-[18px] bg-[#0b2f45] py-4 text-center text-[12px] font-semibold uppercase text-white">
            General Questions
          </div>
          <div className="mt-6 space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.question}
                  className="rounded-[18px] bg-[#0b2f45] px-6 py-4 text-white"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between text-left text-[13px] font-medium"
                  >
                    <span>{item.question}</span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/70 text-[14px]">
                      {isOpen ? "–" : "+"}
                    </span>
                  </button>
                  {isOpen ? (
                    <p className="mt-3 text-[12px] leading-6 text-slate-200">
                      {item.answer}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
import { useState } from "react";
