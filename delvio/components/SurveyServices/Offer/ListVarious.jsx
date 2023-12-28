import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";
import Item from "./Item";

export default function ListVarious() {
  const { t } = useTranslation("service");

  const data = [
    {
      id: 1,
      title: t("section2.tab1.list1.title"),
      desc: t("section2.tab1.list1.desc"),
    },
    {
      id: 2,
      title: t("section2.tab1.list2.title"),
      desc: (
        <Trans
          i18nKey="service:section2.tab1.list2.desc"
          components={[<i />]}
        />
      ),
    },
    {
      id: 3,
      title: t("section2.tab1.list3.title"),
      desc: t("section2.tab1.list3.desc"),
    },
  ];

  return (
    <div>
      <h3 className="font-mono font-semibold text-reg leading-5 lg:text-xl lg:leading-7 text-dark-green">
        {t("section2.tab1.title")}
      </h3>
      <div className="mt-3 lg:mt-6">
        <ul className="flex flex-col gap-2 lg:gap-3">
          {data.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
