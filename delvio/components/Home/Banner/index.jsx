import PrimaryButton from "@/components/Atoms/PrimaryButton";
import SecondaryButton from "@/components/Atoms/SecondaryButton";
import { isMobileContext } from "@/context/IsMobile";
import { useContext } from "react";
import Image from "next/image";
import Trans from "next-translate/Trans";
import useTranslation from "next-translate/useTranslation";
import BannerDesktop from "../../../public/images/home/banner.webp";
import BannerMobile from "../../../public/images/home/banner-mobile.webp";
import { useRouter } from "next/router";

export default function Banner() {
  const { t, lang } = useTranslation();
  const router = useRouter();
  const isMobile = useContext(isMobileContext);

  return (
    <section
      id="banner"
      className="w-full bg-light-white pt-[72px] lg:pt-[112px] lg:pt-[120px]"
    >
      <div className="wrapper pt-8 lg:pt-[80px] pb-8 lg:pb-[100px] px-6 lg:px-0">
        <h1 className="text-center text-2xl lg:text-4xl font-mono leading-8 lg:leading-[60px] font-medium text-light-black">
          <Trans
            i18nKey="home:banner.title"
            components={[
              <span
                className={`font-bold text-light-green ${
                  lang === "id" ? "italic" : ""
                }`}
              />,
            ]}
          />
        </h1>
        <p className="text-center font-sans font-normal text-xsm lg:text-lg text-light-black leading-[18px] lg:leading-[28px] w-full lg:w-[852px] mx-auto mt-3 lg:mt-4">
          {t("home:banner.desc")}
        </p>
        <div className="flex justify-center gap-3 lg:gap-6 mt-8">
          <PrimaryButton
            title={t("common:tryFree")}
            onClick={() => router.push("/#demo")}
          />
          <SecondaryButton
            title={t("common:explore")}
            onClick={() => router.push("/#product")}
          />
        </div>

        <figure className="mt-6 lg:mt-[60px] w-full h-[240px] lg:h-[300px] object-cover">
          <Image
            src={isMobile ? BannerMobile : BannerDesktop}
            priority="low"
            sizes="100vw"
            style={{
              width: "100%",
              height: isMobile ? 240 : "auto",
            }}
            alt="banner"
            placeholder="blur"
          />
        </figure>
      </div>
    </section>
  );
}
