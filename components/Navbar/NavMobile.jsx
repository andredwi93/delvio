import * as Accordion from "@radix-ui/react-accordion";
import Trans from "next-translate/Trans";
import useTranslation from "next-translate/useTranslation";
import ListAccordion from "./ListAccordion";
import ProductItem from "./ListAccordion/ProductItem";
import ItemSolution from "./ItemSolution";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavMobile() {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <>
      <Accordion.Root type="single" collapsible className="mt-8 mb-3">
        <ListAccordion
          item="item-1"
          title={t("common:navbar.product")}
          isActive={
            router.pathname === "/research" || router.pathname === "/survey"
          }
        >
          <ul className="w-full flex flex-col gap-2 mt-3">
            <ProductItem
              isActive={router.pathname === "/research"}
              href="/research"
              icon="research"
              title={t("common:navbar.ddProduct.card1.title")}
              desc={t("common:navbar.ddProduct.card1.desc")}
            />
            <ProductItem
              isActive={router.pathname === "/survey"}
              href="/survey"
              icon="survey"
              title={t("common:navbar.ddProduct.card2.title")}
              desc={t("common:navbar.ddProduct.card2.desc")}
            />
          </ul>
        </ListAccordion>
        <ListAccordion item="item-2" title={t("common:navbar.solution")}>
          <ul className="w-full flex flex-col gap-3 mt-2">
            <li className="flex-1">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <h4 className="font-sans font-semibold text-xsm leading-[18px] text-light-black">
                    {t("common:navbar.ddSolution.left.title")}
                  </h4>
                  <div className="px-2 py-1 bg-[#3E6FE61A] bg-opacity-10 rounded-[100px] text-dark-blue font-sans font-semibold text-2xsm leading-[15px]">
                    {t("common:navbar.coming")}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-full flex flex-col gap-2">
                    <ItemSolution
                      href="#"
                      title={
                        <Trans
                          i18nKey="common:navbar.ddSolution.left.list1"
                          components={[<i />]}
                        />
                      }
                    />
                    <ItemSolution
                      href="#"
                      title={
                        <Trans
                          i18nKey="common:navbar.ddSolution.left.list2"
                          components={[<i />]}
                        />
                      }
                    />
                    <ItemSolution
                      href="#"
                      title={
                        <Trans i18nKey="common:navbar.ddSolution.left.list3" />
                      }
                    />
                    <ItemSolution
                      href="#"
                      title={
                        <Trans i18nKey="common:navbar.ddSolution.left.list4" />
                      }
                    />
                    <ItemSolution
                      href="#"
                      title={
                        <Trans
                          i18nKey="common:navbar.ddSolution.left.list5"
                          components={[<i />]}
                        />
                      }
                    />
                    <ItemSolution
                      href="#"
                      title={
                        <Trans
                          i18nKey="common:navbar.ddSolution.left.list6"
                          components={[<i />]}
                        />
                      }
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <ItemSolution
                      href="#"
                      title={
                        <Trans
                          i18nKey="common:navbar.ddSolution.left.list7"
                          components={[<i />]}
                        />
                      }
                    />
                    <ItemSolution
                      href="#"
                      title={t("common:navbar.ddSolution.left.list8")}
                    />
                    <ItemSolution
                      href="#"
                      title={t("common:navbar.ddSolution.left.list9")}
                    />
                    <ItemSolution
                      href="#"
                      title={t("common:navbar.ddSolution.left.list10")}
                    />
                    <ItemSolution
                      href="#"
                      title={t("common:navbar.ddSolution.left.list11")}
                    />
                    <ItemSolution
                      href="#"
                      title={t("common:navbar.ddSolution.left.list12")}
                    />
                  </div>
                </div>
              </div>
            </li>
            <li className="flex-1">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <h4 className="font-sans font-semibold text-xsm leading-[18px] text-light-black">
                    {t("common:navbar.ddSolution.right.title")}
                  </h4>
                  <div className="px-2 py-1 bg-[#3E6FE61A] bg-opacity-10 rounded-[100px] text-dark-blue font-sans font-semibold text-2xsm leading-[15px]">
                    {t("common:navbar.coming")}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-full flex flex-col gap-2">
                    <ItemSolution
                      href="#"
                      title={t("common:navbar.ddSolution.right.list1")}
                    />
                    <ItemSolution
                      href="#"
                      title={t("common:navbar.ddSolution.right.list2")}
                    />
                    <ItemSolution
                      href="#"
                      title={t("common:navbar.ddSolution.right.list3")}
                    />
                    <ItemSolution
                      href="#"
                      title={t("common:navbar.ddSolution.right.list4")}
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <ItemSolution
                      href="#"
                      title={t("common:navbar.ddSolution.right.list5")}
                    />
                    <ItemSolution
                      href="#"
                      title={t("common:navbar.ddSolution.right.list6")}
                    />
                    <ItemSolution
                      href="#"
                      title={t("common:navbar.ddSolution.right.list7")}
                    />
                    <ItemSolution
                      href="#"
                      title={t("common:navbar.ddSolution.right.list8")}
                    />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </ListAccordion>
      </Accordion.Root>
      <Link
        href="/about"
        className={`font-sans font-medium text-sm leading-5 text-grey hover:text-light-green ${
          router.pathname === "/about" ? "text-light-green" : "text-grey"
        }`}
      >
        {t("common:navbar.about")}
      </Link>
    </>
  );
}
