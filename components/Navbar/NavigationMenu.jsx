import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";
import ProductItem from "./ProductItem";
import ItemSolution from "./ItemSolution";
import { useRouter } from "next/router";

const NavigationMenuComponent = () => {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <NavigationMenu.Root className="relative z-[1] flex-1 flex justify-center">
      <NavigationMenu.List className="center m-0 flex items-center gap-[42px] list-none">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger
            className={`font-sans font-medium text-reg leading-[21px] text-grey data-[state=open]:text-light-green group select-none flex items-center gap-3 ${
              router.pathname === "/research" || router.pathname === "/survey"
                ? "text-light-green"
                : "text-grey"
            }`}
          >
            {t("navbar.product")}
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180 fill-grey group-data-[state=open]:fill-light-green ${
                router.pathname === "/research" || router.pathname === "/survey"
                  ? "fill-light-green"
                  : "fill-grey"
              }`}
            >
              <path d="M9 9.67809L13.071 5.58279C13.5121 5.13907 14.2281 5.13907 14.6692 5.58279C15.1103 6.02651 15.1103 6.74675 14.6692 7.19047L9.75326 12.1357C9.33668 12.5548 8.66226 12.5548 8.24674 12.1357L3.33082 7.19047C2.88973 6.74675 2.88973 6.02651 3.33082 5.58279C3.77191 5.13907 4.48788 5.13907 4.92897 5.58279L9 9.67809Z" />
            </svg>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
            <ul className="p-6 flex gap-6 w-[720px]">
              <ProductItem
                isActive={router.pathname === "/research"}
                href="/research"
                icon="research"
                title={t("navbar.ddProduct.card1.title")}
                desc={t("navbar.ddProduct.card1.desc")}
              />
              <ProductItem
                isActive={router.pathname === "/survey"}
                href="/survey"
                icon="survey"
                title={
                  <Trans
                    i18nKey="common:navbar.ddProduct.card2.title"
                    components={[<i />]}
                  />
                }
                desc={t("navbar.ddProduct.card2.desc")}
              />
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="font-sans font-medium text-reg leading-[21px] text-grey data-[state=open]:text-light-green group select-none flex items-center gap-3">
            {t("navbar.solution")}
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180 fill-grey group-data-[state=open]:fill-light-green"
            >
              <path d="M9 9.67809L13.071 5.58279C13.5121 5.13907 14.2281 5.13907 14.6692 5.58279C15.1103 6.02651 15.1103 6.74675 14.6692 7.19047L9.75326 12.1357C9.33668 12.5548 8.66226 12.5548 8.24674 12.1357L3.33082 7.19047C2.88973 6.74675 2.88973 6.02651 3.33082 5.58279C3.77191 5.13907 4.48788 5.13907 4.92897 5.58279L9 9.67809Z" />
            </svg>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
            <ul className="p-8 w-[800px] flex gap-8">
              <li className="flex-1">
                <NavigationMenu.Link asChild>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <h4 className="font-sans font-semibold text-reg leading-[21px] text-light-black">
                        {t("navbar.ddSolution.left.title")}
                      </h4>
                      <div className="px-2 py-1 bg-[#3E6FE61A] bg-opacity-10 rounded-[100px] text-dark-blue font-sans font-semibold text-2xsm leading-5">
                        {t("navbar.coming")}
                      </div>
                    </div>
                    <div className="mt-3 grid grid-cols-2 gap-4">
                      <div className="w-full flex flex-col gap-3">
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
                      <div className="w-full flex flex-col gap-3">
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
                          title={t("navbar.ddSolution.left.list8")}
                        />
                        <ItemSolution
                          href="#"
                          title={t("navbar.ddSolution.left.list9")}
                        />
                        <ItemSolution
                          href="#"
                          title={t("navbar.ddSolution.left.list10")}
                        />
                        <ItemSolution
                          href="#"
                          title={t("navbar.ddSolution.left.list11")}
                        />
                        <ItemSolution
                          href="#"
                          title={t("navbar.ddSolution.left.list12")}
                        />
                      </div>
                    </div>
                  </div>
                </NavigationMenu.Link>
              </li>
              <li className="w-[1px] h-[220px] bg-light-white"></li>
              <li className="flex-1">
                <NavigationMenu.Link asChild>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <h4 className="font-sans font-semibold text-reg leading-[21px] text-light-black">
                        {t("navbar.ddSolution.right.title")}
                      </h4>
                      <div className="px-2 py-1 bg-[#3E6FE61A] bg-opacity-10 rounded-[100px] text-dark-blue font-sans font-semibold text-2xsm leading-5">
                        {t("navbar.coming")}
                      </div>
                    </div>
                    <div className="mt-3 grid grid-cols-2 gap-4">
                      <div className="w-full flex flex-col gap-3">
                        <ItemSolution
                          href="#"
                          title={t("navbar.ddSolution.right.list1")}
                        />
                        <ItemSolution
                          href="#"
                          title={t("navbar.ddSolution.right.list2")}
                        />
                        <ItemSolution
                          href="#"
                          title={t("navbar.ddSolution.right.list3")}
                        />
                        <ItemSolution
                          href="#"
                          title={t("navbar.ddSolution.right.list4")}
                        />
                      </div>
                      <div className="w-full flex flex-col gap-3">
                        <ItemSolution
                          href="#"
                          title={t("navbar.ddSolution.right.list5")}
                        />
                        <ItemSolution
                          href="#"
                          title={t("navbar.ddSolution.right.list6")}
                        />
                        <ItemSolution
                          href="#"
                          title={t("navbar.ddSolution.right.list7")}
                        />
                        <ItemSolution
                          href="#"
                          title={t("navbar.ddSolution.right.list8")}
                        />
                      </div>
                    </div>
                  </div>
                </NavigationMenu.Link>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <Link
            href="/about"
            className={`font-sans font-medium text-reg leading-[21px] text-grey hover:text-light-green ${
              router.pathname === "/about" ? "text-light-green" : "text-grey"
            }`}
          >
            {t("navbar.about")}
          </Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute top-full left-0 flex w-auto justify-center">
        <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full shadow-lg origin-[top_center] overflow-hidden rounded-[24px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );
};

export default NavigationMenuComponent;
