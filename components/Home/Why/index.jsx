import { isMobileContext } from "@/context/IsMobile";
import { useContext } from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import Section31Desktop from "../../../public/images/home/section-3-1.webp";
import Section31Mobile from "../../../public/images/home/section-3-1-mobile.webp";
import Section32Desktop from "../../../public/images/home/section-3-2.webp";
import Section32Indo from "../../../public/images/home/section-3-2-indo.webp";
import Section32Mobile from "../../../public/images/home/section-3-2-mobile.webp";
import Section33Desktop from "../../../public/images/home/section-3-3.webp";
import Section33Mobile from "../../../public/images/home/section-3-3-mobile.webp";
import Section34Desktop from "../../../public/images/home/section-3-4.webp";
import Section34Mobile from "../../../public/images/home/section-3-4-mobile.webp";
import Section34Indo from "../../../public/images/home/section-3-4-indo.webp";

export default function Why() {
  const isMobile = useContext(isMobileContext);

  const { t, lang } = useTranslation("home");

  return (
    <section
      id="why"
      className="bg-light-white pt-4 lg:pt-[60px] pb-8 lg:pb-[80px]"
    >
      <div className="wrapper px-6 lg:px-0">
        <div className="px-6 py-3 lg:p-8 bg-white rounded-[32px] w-full">
          <h2 className="text-center text-med lg:text-3xl text-light-black leading-5 lg:leading-[50px] font-mono font-semibold">
            {t("section3.title")}
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-8 mt-3 lg:mt-8">
          <div className="flex flex-1 flex-col gap-3 lg:gap-8 mb-3 lg:mb-0">
            <div className="bg-white p-4 lg:p-[42px] rounded-[32px] text-center">
              <h3 className="font-mono font-bold text-sm lg:text-2xl leading-[18px] lg:leading-8 text-light-green">
                {t("section3.card1.title")}
              </h3>
              <div className="mt-1 lg:mt-3 px-0 lg:px-1">
                <p className="font-sans font-normal text-2xsm lg:text-reg leading-[15px] lg:leading-[21px] text-light-black">
                  {t("section3.card1.desc")}
                </p>
              </div>
              <figure className="mt-3 lg:mt-6 w-full h-[117px] object-cover">
                <Image
                  src={isMobile ? Section31Mobile : Section31Desktop}
                  priority="low"
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: isMobile ? 117 : "auto",
                  }}
                  alt="section 3-1"
                  placeholder="blur"
                />
              </figure>
            </div>
            <div className="bg-white p-4 lg:p-[42px] rounded-[32px] flex items-center justify-between gap-6 lg:gap-8">
              <div className="w-full flex-1 lg:flex-none lg:w-[190px]">
                <h3 className="font-mono font-bold text-sm lg:text-2xl leading-[18px] lg:leading-8 text-light-green">
                  {t("section3.card2.title")}
                </h3>
                <p className="font-sans font-normal text-2xsm lg:text-reg leading-[15px] lg:leading-[21px] text-light-black mt-1 lg:mt-3">
                  {t("section3.card2.desc")}
                </p>
              </div>
              <figure className="w-[100px] h-[100px] lg:w-[205px] lg:h-[195px] object-cover">
                <Image
                  src={isMobile ? Section33Mobile : Section33Desktop}
                  priority="low"
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: isMobile ? 100 : "auto",
                  }}
                  alt="section 3-2"
                  placeholder="blur"
                />
              </figure>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-3 lg:gap-8">
            <div className="bg-white p-4 lg:p-[42px] rounded-[32px] flex items-center lg:items-start gap-4 lg:gap-8">
              <div className="flex-1 w-full lg:w-[280px]">
                <h3 className="font-mono font-bold text-sm lg:text-2xl leading-[18px] lg:leading-8 text-light-green">
                  {t("section3.card3.title")}
                </h3>
                <p className="font-sans font-normal text-2xsm lg:text-reg leading-[15px] lg:leading-[21px] text-light-black mt-1 lg:mt-2">
                  {t("section3.card3.desc")}
                </p>
              </div>
              <figure
                className={`w-[100px] h-[100px] lg:w-[172px] lg:h-[${
                  lang === "en" ? "158px" : "212px"
                }] object-cover`}
              >
                <Image
                  src={
                    isMobile
                      ? Section32Mobile
                      : lang === "en"
                      ? Section32Desktop
                      : Section32Indo
                  }
                  priority="low"
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  alt="section 3-3"
                  placeholder="blur"
                />
              </figure>
            </div>
            <div className="bg-white flex flex-row lg:flex-col items-center lg:items-start gap-3 lg:gap-6 p-4 lg:p-[42px] rounded-[32px]">
              <figure
              // className={`w-[100px] h-[100px] lg:w-[231px] lg:h-[${
              //   lang === "en" ? "166px" : "112px"
              // }]`}
              >
                <Image
                  src={isMobile ? Section34Mobile : Section34Desktop}
                  priority="low"
                  sizes="100vw"
                  style={{
                    width: isMobile
                      ? 100
                      : lang === "en" && !isMobile
                      ? 231
                      : 162,
                    height: isMobile
                      ? 100
                      : lang === "en" && !isMobile
                      ? 166
                      : 112,
                  }}
                  alt="section 3-4"
                  placeholder="blur"
                />
              </figure>
              <div className="flex-1">
                <h3 className="font-mono font-bold text-sm lg:text-2xl leading-[18px] lg:leading-8 text-light-green">
                  {t("section3.card4.title")}
                </h3>
                <p className="font-sans font-normal text-2xsm lg:text-reg leading-[15px] lg:leading-[21px] text-light-black mt-1 lg:mt-2">
                  {t("section3.card4.desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
