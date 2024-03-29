import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { components, mainFaqs } from "../styles";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const Investment = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  return (
  <section className="py-[126px] bg-#030D14">
      <div className={`${components.containerb}`}>
      <h2 className="text-center text-white text-3xl font-medium leading-[90%] mb-8 md:text-[42px]">FAQ</h2>

      {/* grid */}
      <div className="grid grid-cols-1 md:gap-10 md:grid-cols-2">
        {/* left */}
        <div>
          {mainFaqs.slice(0, 5).map((faq) => {
            return (
              <Accordion animate={CUSTOM_ANIMATION} open={open === faq.id} icon={<Icon id={faq.id} open={open} />}>
                <AccordionHeader className="text-white/90 text-base hover:text-white/80 p-5" onClick={() => handleOpen(faq.id)}>
                  {faq.title}
                </AccordionHeader>
                <AccordionBody>
                  {faq.text}
                </AccordionBody>
              </Accordion>
            );
          })}
        </div>

        {/* right */}
        <div>
          {mainFaqs.slice(5).map((faq) => {
            return (
              <Accordion animate={CUSTOM_ANIMATION} open={open === faq.id} icon={<Icon id={faq.id} open={open} />}>
                <AccordionHeader className="text-white/90 text-base hover:text-white/80 p-5" onClick={() => handleOpen(faq.id)}>
                  {faq.title}
                </AccordionHeader>
                <AccordionBody>
                  {faq.text}
                </AccordionBody>
              </Accordion>
            );
          })}
        </div>
      </div>
    </div>
  </section>
  );
};

export default Investment;
