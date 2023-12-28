import PrimaryButton from "@/components/Atoms/PrimaryButton";
import { isMobileContext } from "@/context/IsMobile";
import useTranslation from "next-translate/useTranslation";
import { useContext } from "react";

export default function Banner() {
  const isMobile = useContext(isMobileContext);
  const { t } = useTranslation();

  return (
    <section
      id="banner"
      className="bg-light-white px-6 lg:px-0 pt-[104px] lg:pt-[192px] pb-8 lg:pb-[80px]"
    >
      <div className="wrapper bg-white rounded-[32px] p-6 lg:p-[42px] flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-[60px]">
        <div className="flex-1">
          <h1 className="font-mono font-bold text-2xl leading-8 lg:text-4xl lg:leading-[58px] text-dark-green">
            {t("research:banner.title")}
          </h1>
          <p className="mt-2 lg:mt-4 font-sans font-normal text-xsm leading-[18px] lg:text-lg lg:leading-[27px] text-light-black">
            {t("research:banner.desc")}
          </p>
          <PrimaryButton
            link
            href="https://api.whatsapp.com/send/?phone=6281930563377&text=Halo!+Saya+tertarik+untuk+mengetahui+lebih+lanjut+tentang+layanan+Delvio.+Bisakah+Anda+membantu+saya?&type=phone_number&app_absent=0"
            title={t("common:navbar.contact")}
            className="mt-6 lg:mt-8 inline-block"
          />
        </div>
        <figure className="w-full h-[200px] lg:w-[346px] lg:h-[397px] object-cover">
          <img
            src={`/images/research/${
              isMobile ? "banner-mobile" : "banner"
            }.webp`}
            alt="banner"
            className="w-full h-[200px] lg:h-auto"
          />
        </figure>
      </div>
    </section>
  );
}
