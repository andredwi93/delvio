import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";
import Item from "./Item";

export default function ListVarious() {
  const { t } = useTranslation("research");

  const data = [
    {
      id: 1,
      title: (
        <Trans
          i18nKey="research:section2.tab1.list1.title"
          components={[<i />]}
        />
      ),
      desc: (
        <Trans
          i18nKey="research:section2.tab1.list1.desc"
          components={[<i />]}
        />
      ),
    },
    {
      id: 3,
      title: (
        <Trans
          i18nKey="research:section2.tab1.list2.title"
          components={[<i />]}
        />
      ),
      desc: (
        <Trans
          i18nKey="research:section2.tab1.list2.desc"
          components={[<i />]}
        />
      ),
    },

    {
      id: 5,
      title: t("section2.tab1.list3.title"),
      desc: t("section2.tab1.list3.desc"),
    },
    {
      id: 7,
      title: t("section2.tab1.list4.title"),
      desc: t("section2.tab1.list4.desc"),
    },
    {
      id: 9,
      title: (
        <Trans
          i18nKey="research:section2.tab1.list5.title"
          components={[<i />]}
        />
      ),
      desc: (
        <Trans
          i18nKey="research:section2.tab1.list5.desc"
          components={[<i />]}
        />
      ),
    },
    {
      id: 11,
      title: (
        <Trans
          i18nKey="research:section2.tab1.list6.title"
          components={[<i />]}
        />
      ),
      desc: <Trans i18nKey="research:section2.tab1.list6.desc" />,
    },
  ];

  const data2 = [
    {
      id: 2,
      title: (
        <Trans
          i18nKey="research:section2.tab1.list7.title"
          components={[<i />]}
        />
      ),
      desc: <Trans i18nKey="research:section2.tab1.list7.desc" />,
    },
    {
      id: 4,
      title: t("section2.tab1.list8.title"),
      desc: t("section2.tab1.list8.desc"),
    },
    {
      id: 6,
      title: <Trans i18nKey="research:section2.tab1.list9.title" />,
      desc: (
        <Trans
          i18nKey="research:section2.tab1.list9.desc"
          components={[<i />]}
        />
      ),
    },

    {
      id: 8,
      title: t("section2.tab1.list10.title"),
      desc: t("section2.tab1.list10.desc"),
    },

    {
      id: 10,
      title: t("section2.tab1.list11.title"),
      desc: t("section2.tab1.list11.desc"),
    },

    {
      id: 12,
      title: t("section2.tab1.list12.title"),
      desc: t("section2.tab1.list12.desc"),
    },
  ];

  return (
    <div>
      <h3 className="font-mono font-semibold text-reg leading-5 lg:text-xl lg:leading-7 text-dark-green">
        {t("section2.tab1.title")}
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
