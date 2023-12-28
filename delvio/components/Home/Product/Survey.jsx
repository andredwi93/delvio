import Description from "./Description";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";
import Section1S from "../../../public/images/home/section-1-survey.webp";
import { useRouter } from "next/router";

export default function Survey() {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-[60px] text-center lg:text-left">
      <Description
        title={
          <Trans i18nKey="home:section1.tab2.title" components={[<i />]} />
        }
        desc={<Trans i18nKey="home:section1.tab2.desc" components={[<i />]} />}
        titlePrimary={t("tryFree")}
        titleOutline={t("btnFitur")}
        onGetStart={() => router.push("/#demo")}
        onLearn={() => router.push("/survey")}
      />
      <figure className="w-[180px] h-[138px] lg:w-[400px] lg:h-[306px] object-cover">
        <Image
          src={Section1S}
          priority="low"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          alt="section survey"
          placeholder="blur"
        />
      </figure>
    </div>
  );
}
