import dynamic from "next/dynamic";
import useTranslation from "next-translate/useTranslation";

const Tabs = dynamic(() => import("./Tab"));

export default function Product() {
  const { t } = useTranslation("home");

  return (
    <section id="product" className="wrapper px-6 lg:px-0 py-8 lg:py-[80px]">
      <h2 className="text-center text-xl leading-7 lg:text-3xl lg:leading-[50px] text-light-black font-mono font-semibold">
        {t("section1.title")}
      </h2>
      <Tabs />
    </section>
  );
}
