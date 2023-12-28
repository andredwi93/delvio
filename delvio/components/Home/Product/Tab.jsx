import dynamic from "next/dynamic";
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";

const Tab = dynamic(() => import("@/components/Tabs"));
const Research = dynamic(() => import("./Research"));
const Survey = dynamic(() => import("./Survey"));

export default function TabComponent() {
  const { t } = useTranslation("home");

  return (
    <Tab
      title1={t("section1.tabBtn.tab1")}
      title2={
        <Trans i18nKey="home:section1.tabBtn.tab2" components={[<i />]} />
      }
      content1={<Research />}
      content2={<Survey />}
      marginTop="mt-6 lg:mt-[60px]"
    />
  );
}
