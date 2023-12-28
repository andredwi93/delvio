import dynamic from "next/dynamic";
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";

const Tab = dynamic(() => import("@/components/Tabs"));
const ListVarious = dynamic(() => import("./ListVarious"));
const ListFields = dynamic(() => import("./ListFields"));

export default function Offer() {
  const { t } = useTranslation("research");
  return (
    <section id="offer" className="px-6 py-8 lg:px-0 lg:py-[80px]">
      <div className="wrapper">
        <div className="w-full lg:w-[745px] mx-auto text-center">
          <h2 className="font-mono font-medium text-xl leading-7 lg:text-3xl lg:leading-[60px] text-light-black">
            <Trans
              i18nKey="research:section2.title"
              components={[<span className="font-bold text-light-green" />]}
            />
          </h2>
        </div>
        <div className="mt-6 lg:mt-[42px]">
          <Tab
            title1={t("section2.btnTab.tab1")}
            title2={t("section2.btnTab.tab2")}
            content1={<ListVarious />}
            content2={<ListFields />}
          />
        </div>
      </div>
    </section>
  );
}
