import * as Accordion from "@radix-ui/react-accordion";
import Image from "next/image";
import IcFaq from "../../../public/images/icons/ic-faq-close.svg";
import styles from "./faq.module.css";

export default function ListAccordion({ item, title, desc }) {
  return (
    <Accordion.Item
      value={item}
      className="py-4 px-4 lg:py-6 lg:px-8 bg-light-white data-[state=open]:bg-soft-green rounded-3xl mb-3 lg:mb-4"
    >
      <Accordion.Header>
        <Accordion.Trigger
          className={`flex items-center gap-6 w-full text-left ${styles.AccordionTrigger}`}
        >
          <h3 className="flex-1 font-mono font-semibold text-sm leading-[18px] lg:text-xl lg:leading-7 text-light-black">
            {title}
          </h3>
          <figure
            className={`w-8 h-8 lg:w-[42px] lg:h-[42px] object-cover ${styles.AccordionChevron}`}
          >
            <Image
              src={IcFaq}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              alt="ic-faq"
            />
          </figure>
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content>
        <p className="font-sans font-medium text-2xsm leading-[15px] lg:text-reg lg:leading-[21px] text-light-black mt-1 lg:mt-3">
          {desc}
        </p>
      </Accordion.Content>
    </Accordion.Item>
  );
}
