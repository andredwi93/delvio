import Description from "./Description";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import Section1R from "../../../public/images/home/section-1-research.webp";
import { useRouter } from "next/router";

export default function Research() {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-[60px] text-center lg:text-left">
      <Description
        title={t("home:section1.tab1.title")}
        desc={t("home:section1.tab1.desc")}
        titlePrimary={t("common:getStarted")}
        titleOutline={t("common:learnMore")}
        onGetStart={() => router.push("/#demo")}
        onLearn={() => router.push("/research")}
      />
      <figure className="w-[180px] h-[117px] lg:w-[400px] lg:h-[259px] object-cover">
        <Image
          src={Section1R}
          priority="low"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          alt="section research"
          placeholder="blur"
        />
      </figure>
    </div>
  );
}
