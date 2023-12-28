import * as Accordion from "@radix-ui/react-accordion";
import useTranslation from "next-translate/useTranslation";
import List from "@/components/Atoms/ListAccordion";

export default function Faq() {
  const { t } = useTranslation("home");

  return (
    <section id="faq" className="wrapper px-6 lg:px-0 py-8 lg:py-[80px]">
      <h2 className="font-mono font-semibold text-xl leading-7 lg:text-3xl lg:leading-[50px] text-center">
        {t("faq.title")}
      </h2>
      <Accordion.Root type="single" collapsible className="mt-6 lg:mt-[42px]">
        <List
          item="item-1"
          title={t("faq.card1.title")}
          desc={t("faq.card1.desc")}
        />
        <List
          item="item-2"
          title={t("faq.card2.title")}
          desc={t("faq.card2.desc")}
        />
      </Accordion.Root>
    </section>
  );
}
