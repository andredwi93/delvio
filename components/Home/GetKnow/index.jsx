import SecondaryButton from "@/components/Atoms/SecondaryButton";
import { isMobileContext } from "@/context/IsMobile";
import { useContext } from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";
import Section2Desktop from "../../../public/images/home/section-2.webp";
import Section2Mobile from "../../../public/images/home/section-2-mobile.webp";
import { useRouter } from "next/router";

export default function GetKnow() {
  const isMobile = useContext(isMobileContext);
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <section
      id="getKnow"
      className="bg-light-white pt-8 pb-6 px-6 lg:px-0 lg:pt-[80px] lg:pb-[60px]"
    >
      <div className="wrapper bg-white rounded-[32px] p-6 lg:p-[42px] flex flex-col lg:flex-row items-center gap-6 lg:gap-[60px]">
        <div className="flex-1">
          <h2 className="text-xl leading-7 lg:text-4xl lg:leading-[57px] font-mono font-semibold text-dark-green mb-2 lg:mb-4">
            <Trans
              i18nKey="home:section2.title"
              components={[<span className="font-bold text-light-green" />]}
            />
          </h2>
          <p className="text-xsm leading-[18px] lg:text-lg lg:leading-[27px] text-light-black font-sans font-normal mb-6 lg:mb-8">
            <Trans i18nKey="home:section2.desc" components={[<i />]} />
          </p>
          <SecondaryButton
            title={t("common:navbar.about")}
            onClick={() => router.push("/about")}
          />
        </div>
        <figure className="w-full h-[200px] lg:w-[458px] lg:h-[397px] object-cover">
          <Image
            src={isMobile ? Section2Mobile : Section2Desktop}
            priority="low"
            sizes="100vw"
            style={{
              width: "100%",
              height: isMobile ? 200 : "auto",
            }}
            alt="section to know"
            placeholder="blur"
          />
        </figure>
      </div>
    </section>
  );
}
