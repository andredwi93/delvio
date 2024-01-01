import * as AlertDialog from "@radix-ui/react-alert-dialog";
import useTranslation from "next-translate/useTranslation";
import localFont from "next/font/local";

const poppins = localFont({
  src: [
    {
      path: "../../public/fonts/Poppins-Thin.ttf",
      weight: "100",
    },
    {
      path: "../../public/fonts/Poppins-ExtraLight.ttf",
      weight: "200",
    },
    {
      path: "../../public/fonts/Poppins-Light.ttf",
      weight: "300",
    },
    {
      path: "../../public/fonts/Poppins-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Poppins-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/Poppins-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../../public/fonts/Poppins-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/Poppins-ExtraBold.ttf",
      weight: "800",
    },
    {
      path: "../../public/fonts/Poppins-Black.ttf",
      weight: "900",
    },
  ],
  variable: "--font-poppins",
  preload: true,
});

export default function Modal({ show, setShow, children }) {
  const { t } = useTranslation("common");
  return (
    <AlertDialog.Root open={show} onOpenChange={setShow}>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="fixed z-50 top-0 left-0 right-0 bottom-0 bg-[#000] bg-opacity-50 overflow-y-auto place-items-center grid py-10" />
        <AlertDialog.Content className={`${poppins.variable} bg-white transition-all ease-in-out w-[320px] lg:w-[420px] p-6 lg:p-8 rounded-3xl fixed top-[50%] left-[50%] z-50 translate-x-[-50%] translate-y-[-70%]`}>
          <figure className="w-[140px] h-[110px] lg:w-[200px] lg:h-[157px] mx-auto">
            <img
              src="/images/home/popup-demo.webp"
              alt="popup"
              className="w-full"
            />
          </figure>
          <div className="mt-4 mb-6 lg:mb-8 text-center">
            <h2 className="modal font-semibold text-reg lg:text-med leading-6 text-dark-green">
              {t("demo.title")}
            </h2>
            <p className="mt-[2px] lg:mt-1 modal font-normal text-2xsm leading-[15px] lg:text-xsm lg:leading-[18px] text-light-black">
              {t("demo.desc")}
            </p>
          </div>
          {children}
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
