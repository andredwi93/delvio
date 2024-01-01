import * as Accordion from "@radix-ui/react-accordion";
import styles from "./faq.module.css";

export default function ListAccordion({ item, title, children, isActive }) {
  return (
    <Accordion.Item value={item} className="py-3 border-b border-b-light-white">
      <Accordion.Header>
        <Accordion.Trigger
          className={`flex items-center gap-3 w-full group text-left ${styles.AccordionTrigger}`}
        >
          <h3
            className={`flex-1 font-sans font-medium text-sm leading-5 text-grey group-data-[state=open]:text-light-green ${
              isActive ? "text-light-green" : "text-grey"
            }`}
          >
            {title}
          </h3>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180 fill-grey group-data-[state=open]:fill-light-green ${
              isActive ? "fill-light-green" : "fill-grey"
            }`}
          >
            <path d="M9 9.67809L13.071 5.58279C13.5121 5.13907 14.2281 5.13907 14.6692 5.58279C15.1103 6.02651 15.1103 6.74675 14.6692 7.19047L9.75326 12.1357C9.33668 12.5548 8.66226 12.5548 8.24674 12.1357L3.33082 7.19047C2.88973 6.74675 2.88973 6.02651 3.33082 5.58279C3.77191 5.13907 4.48788 5.13907 4.92897 5.58279L9 9.67809Z" />
          </svg>
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content>{children}</Accordion.Content>
    </Accordion.Item>
  );
}
