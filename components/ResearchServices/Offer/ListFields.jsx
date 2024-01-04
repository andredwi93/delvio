import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";
import Item from "./Item";

export default function ListFields() {
  const { t } = useTranslation("research");
  
  const data = [
    {
      id: 1,
      title: t("section2.tab2.list1.title"),
      desc: t("section2.tab2.list1.desc"),
    },

    {
      id: 3,
      title: t("section2.tab2.list2.title"),
      desc: t("section2.tab2.list2.desc"),
    },
    {
      id: 5,
      title: t("section2.tab2.list3.title"),
      desc: t("section2.tab2.list3.desc"),
    },
    {
      id: 7,
      title: (
        <Trans
          i18nKey="research:section2.tab2.list4.title"
          components={[<i />]}
        />
      ),
      desc: (
        <Trans
          i18nKey="research:section2.tab2.list4.desc"
          components={[<i />]}
        />
      ),
    },
  ];

  const data2 = [
    {
      id: 2,
      title: t("section2.tab2.list5.title"),
      desc: <Trans
      i18nKey="research:section2.tab2.list5.desc"
      components={[<i />]}
    />,
    },
    {
      id: 4,
      title: t("section2.tab2.list6.title"),
      desc: t("section2.tab2.list6.desc"),
    },

    {
      id: 6,
      title: t("section2.tab2.list7.title"),
      desc: t("section2.tab2.list7.desc"),
    },

    {
      id: 8,
      title: t("section2.tab2.list8.title"),
      desc: t("section2.tab2.list8.desc"),
    },
  ];

  return (
    <div>
      <h3 className="font-mono font-semibold text-reg leading-5 lg:text-xl lg:leading-7 text-dark-green">
        {t("section2.tab2.title")}
      </h3>
      <div className="mt-3 lg:mt-6 grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-[42px]">
        <ul className="flex flex-col gap-2 lg:gap-3">
          {data.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </ul>
        <ul className="flex flex-col gap-2 lg:gap-3">
          {data2.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
