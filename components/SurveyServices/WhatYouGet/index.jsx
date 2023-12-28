import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";
import CardItem from "@/components/Atoms/CardItem";

export default function WhatYouGet() {
  const { t } = useTranslation("service");
  return (
    <section id="whatyouget" className="py-8 px-6 lg:py-[80px] lg:px-0">
      <div className="wrapper">
        <div className="text-center">
          <h2 className="font-mono font-semibold text-xl leading-7 lg:text-3xl lg:leading-[50px] text-light-black">
            {t("section1.title")}
          </h2>
          <p className="mt-2 lg:mt-4 font-sans font-normal text-sm leading-5 lg:text-lg lg:leading-[27px] text-grey">
            {t("section1.desc")}
          </p>
        </div>
        <div className="mt-6 lg:mt-[42px] grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-6">
          <div className="w-full flex flex-col gap-3 lg:gap-6">
            <CardItem
              path="survey"
              icon="ic-user"
              title={
                <Trans
                  i18nKey="service:section1.card1.title"
                  components={[<i />]}
                />
              }
              desc={
                <Trans
                  i18nKey="service:section1.card1.desc"
                  components={[<i />]}
                />
              }
            />
            <CardItem
              path="survey"
              icon="ic-analysis"
              title={<Trans i18nKey="service:section1.card2.title" />}
              desc={
                <Trans
                  i18nKey="service:section1.card2.desc"
                  components={[<i />]}
                />
              }
            />
            <CardItem
              path="survey"
              icon="ic-rapid"
              title={<Trans i18nKey="service:section1.card3.title" />}
              desc={
                <Trans
                  i18nKey="service:section1.card3.desc"
                  components={[<i />]}
                />
              }
            />
          </div>
          <div className="w-full flex flex-col gap-3 lg:gap-6">
            <CardItem
              path="survey"
              icon="ic-flexible"
              title={<Trans i18nKey="service:section1.card4.title" />}
              desc={
                <Trans
                  i18nKey="service:section1.card4.desc"
                  components={[<i />]}
                />
              }
            />
            <CardItem
              path="survey"
              icon="ic-tech"
              title={<Trans i18nKey="service:section1.card5.title" />}
              desc={
                <Trans
                  i18nKey="service:section1.card5.desc"
                  components={[<i />]}
                />
              }
            />
            <CardItem
              path="survey"
              icon="ic-support"
              title={<Trans i18nKey="service:section1.card6.title" />}
              desc={<Trans i18nKey="service:section1.card6.desc" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
