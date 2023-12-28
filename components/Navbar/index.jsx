import { isMobileContext } from "@/context/IsMobile";
import setLanguage from "next-translate/setLanguage";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Select, { components } from "react-select";
import Logo from "../../public/images/icons/logo.svg";
import { customStyles } from "./CustomSelectStyle";
import NavMobile from "./NavMobile";
import NavigationMenuComponent from "./NavigationMenu";

const options = [
  { value: "id", label: "Indonesia", icon: "indo-flag.svg" },
  { value: "en", label: "English", icon: "english-flag.svg" },
];

const { Option, DropdownIndicator, SingleValue } = components;
const IconOption = (props) => {
  return (
    <Option {...props}>
      <div className="flex items-center gap-2 lg:gap-3 cursor-pointer">
        <div className="flex-1 flex items-center gap-3">
          <img
            src={`/images/icons/${props.data.icon}`}
            className="w-[18px] h-[18px] lg:w-[22px] lg:h-[22px]"
            alt={props.data.label}
          />
          <span className="font-sans font-medium text-sm lg:text-reg leading-5 lg:leading-[21px] text-grey">
            {props.data.label}
          </span>
        </div>
        {props.isSelected && (
          <figure className="w-4 h-4 lg:w-[18px] lg:h-[18px] object-cover">
            <img
              src="/images/icons/ic-green-check.svg"
              alt="icon"
              className="w-full"
            />
          </figure>
        )}
      </div>
    </Option>
  );
};

const Single = (props) => (
  <SingleValue {...props}>
    <div className="flex items-center gap-2 lg:gap-3">
      <img
        src={`/images/icons/${props.data.icon}`}
        className="w-[18px] h-[18px] lg:w-[22px] lg:h-[22px]"
        alt={props.data.label}
      />
      <span className="font-sans font-medium text-sm lg:text-reg leading-5 lg:leading-[21px] text-grey">
        {props.data.label}
      </span>
    </div>
  </SingleValue>
);

const DdIndicator = (props) => (
  <DropdownIndicator {...props}>
    <img
      src={`/images/icons/arrow-down.svg`}
      className="w-[18px] h-[18px]"
      alt="ic-down"
    />
  </DropdownIndicator>
);

export default function Navbar() {
  const { t, lang } = useTranslation();
  
  const isMobile = useContext(isMobileContext);

  const [isShowMenu, setIsShowMenu] = useState(false);

  const setLanguanges = async (lang) => {
    await setLanguage(lang ?? "id");
  };

  useEffect(() => {
    const lang = sessionStorage.getItem("lang");
    if (lang) {
      setLanguanges(JSON.parse(lang).value);
    }
  }, []);

  const changeLang = async (val) => {
    sessionStorage.setItem("lang", JSON.stringify(val));
    setIsShowMenu(false);
    await setLanguage(val.value);
  };

  console.log(isShowMenu);

  return (
    <nav className="fixed top-4 lg:top-8 left-0 right-0 px-4 lg:px-0 z-50">
      <div
        className={`w-full lg:w-[1120px] mx-auto flex items-center gap-3 z-10 lg:gap-6 px-4 py-3 lg:px-[42px] lg:py-[18px] bg-white rounded-[100px] ${
          isShowMenu ? "shadow-none" : "shadow-3xl"
        }`}
      >
        <Link href="/">
          <figure className="w-[66px] h-7 lg:w-[100px] lg:h-[42px] object-cover">
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

        <div className="hidden lg:flex flex-1">
          <NavigationMenuComponent />
        </div>

        <div className="w-full lg:w-fit flex items-center justify-end gap-3 lg:gap-6">
          <div className="w-fit">
            <Select
              isClearable={false}
              isSearchable={false}
              options={options}
              styles={customStyles}
              value={lang === "en" ? options[1] : options[0]}
              onChange={changeLang}
              className="w-full"
              components={{
                Option: IconOption,
                DropdownIndicator: DdIndicator,
                SingleValue: Single,
              }}
              id="method-value-select"
              instanceId="method-value-select"
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary: "#DEF2E6",
                  primary25: "#fff",
                },
              })}
            />
          </div>
          <a
            href="https://api.whatsapp.com/send/?phone=6281930563377&text=Halo!+Saya+tertarik+untuk+mengetahui+lebih+lanjut+tentang+layanan+Delvio.+Bisakah+Anda+membantu+saya?&type=phone_number&app_absent=0"
            target="_blank"
            className="hidden lg:flex bg-soft-green py-[10px] px-6 font-sans font-semibold text-sm leading-5 text-dark-green rounded-[100px]"
          >
            {t("common:navbar.contact")}
          </a>
          <div className="box-toggle flex lg:hidden">
            <input
              type="checkbox"
              id="checkbox"
              checked={isShowMenu}
              onChange={() => setIsShowMenu((prev) => !prev)}
            />
            <label htmlFor="checkbox" className="toggle">
              <div className="bars" id="bar1"></div>
              <div className="bars" id="bar2"></div>
              <div className="bars" id="bar3"></div>
            </label>
          </div>
        </div>
      </div>
      {isMobile && isShowMenu && (
        <div className="absolute top-4 left-0 right-0 px-4 -z-10 transition-all ease-in duration-300">
          <div className="bg-white w-full rounded-3xl px-4 pt-4 pb-3 h-auto overflow-auto max-h-[450px] shadow-3xl">
            <NavMobile />
          </div>
        </div>
      )}
    </nav>
  );
}
