import { isMobileContext } from "@/context/IsMobile";
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";
import { useContext } from "react";

export default function Banner() {
  const isMobile = useContext(isMobileContext);
  const { lang } = useTranslation();

  return (
    <section
      id="banner"
      className="bg-light-white px-6 lg:px-0 pt-[104px] lg:pt-[192px] pb-8 lg:pb-[80px]"
    >
      <div className="wrapper bg-white rounded-[32px] p-6 lg:p-[42px] flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-[60px]">
        <div className="flex-1">
          <h1 className="font-mono font-semibold text-2xl leading-8 lg:text-3xl lg:leading-[50px] text-dark-green">
            {
              <Trans
                i18nKey="about:banner.title"
                components={[
                  <span
                    className={`text-light-green font-bold ${
                      lang === "id" ? "italic" : ""
                    }`}
                  />,
                ]}
              />
            }
          </h1>
          <p className="mt-2 lg:mt-4 font-sans font-normal text-xsm leading-[18px] lg:text-med lg:leading-[27px] text-light-black">
            {<Trans i18nKey="about:banner.desc" components={[<i />]} />}
          </p>
        </div>
        <figure className="w-full lg:w-[346px] h-[200px] lg:h-[397px] object-cover">
          <img
            src={`/images/about/${isMobile ? "banner-mobile" : "banner"}.webp`}
            alt="banner"
            className="w-full h-[200px] lg:h-auto"
          />
        </figure>
      </div>
    </section>
  );
}
