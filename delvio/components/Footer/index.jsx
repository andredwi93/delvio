import Link from "next/link";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";
import Logo from "../../public/images/icons/logo.svg";
import AppStore from "../../public/images/icons/ic-app-store.svg";
import Google from "../../public/images/icons/ic-google-play.svg";
import ListItem from "./ListItem";

export default function Footer() {
  const { t } = useTranslation("common");
  const date = new Date();
  const year = date.getFullYear()

  return (
    <footer id="footer">
      <div className="py-0 lg:py-8 border-t border-light-white">
        <div className="wrapper p-6 lg:p-0">
          <Link href="/">
            <figure className="w-[72px] lg:w-[100px] h-[30px] lg:h-[42px] object-cover cursor-pointer">
              <Image
                src={Logo}
                priority
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt="logo"
              />
            </figure>
          </Link>
          <div className="mt-4 lg:mt-3 flex flex-col-reverse lg:flex-row gap-0 lg:gap-6">
            <div className="w-full lg:w-[357px]">
              <p className="font-mono font-medium text-2xsm lg:text-xsm leading-[13px] lg:leading-4 text-light-black">
                {t("footer.title")}
              </p>
              <h3 className="mt-1 font-sans font-semibold text-sm leading-[19px] lg:text-reg lg:leading-[21px] text-light-green">
                {t("footer.desc")}
              </h3>
              <div className="flex gap-2 lg:gap-3 mt-3">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd_2uI3rUrKQWp3ZgdSXv6oaK8qKtAIi-PC5OWfATOZMva4rg/viewform?usp=sf_link"
                  target="_blank"
                >
                  <figure className="w-[96px] h-8 lg:w-[109px] lg:h-9 object-cover">
                    <Image
                      src={Google}
                      priority
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                      alt="logo"
                    />
                  </figure>
                </a>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd_2uI3rUrKQWp3ZgdSXv6oaK8qKtAIi-PC5OWfATOZMva4rg/viewform?usp=sf_link"
                  target="_blank"
                >
                  <figure className="w-[96px] h-8 lg:w-[109px] lg:h-9 object-cover">
                    <Image
                      src={AppStore}
                      priority
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                      alt="logo"
                    />
                  </figure>
                </a>
              </div>
            </div>
            <div className="block lg:hidden w-full h-[1px] bg-light-white my-4"></div>
            <div className="flex-1 flex gap-8 lg:gap-6">
              <div className="flex-1">
                <h2 className="font-sans font-semibold text-sm lg:text-med leading-5 lg:leading-6 text-light-black">
                  {t("footer.product.title")}
                </h2>
                <ul className="flex flex-col gap-2 mt-2">
                  <ListItem
                    href="/research"
                    title={t("footer.product.link1")}
                  />
                  <ListItem
                    href="/survey"
                    title={
                      <Trans
                        i18nKey="common:footer.product.link2"
                        components={[<i />]}
                      />
                    }
                  />
                </ul>
              </div>
              <div className="flex-1">
                <h2 className="font-sans font-semibold text-sm lg:text-med leading-5 lg:leading-6 text-light-black">
                  {t("footer.info.title")}
                </h2>
                <ul className="flex flex-col gap-2 mt-2">
                  <ListItem href="/#faq" title={t("footer.info.link1")} />
                  <ListItem
                    outLink
                    href="https://api.whatsapp.com/send/?phone=6281930563377&text=Halo!+Saya+tertarik+untuk+mengetahui+lebih+lanjut+tentang+layanan+Delvio.+Bisakah+Anda+membantu+saya?&type=phone_number&app_absent=0"
                    title={t("footer.info.link2")}
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3 lg:py-4 bg-[#F2F7F4] text-center">
        <p className="font-sans font-medium text-2xsm leading-[15px] lg:text-sm mdleading-5 text-dark-green">
          Copyright © {year} Delvio | Research & Survey Platform
        </p>
      </div>
    </footer>
  );
}
