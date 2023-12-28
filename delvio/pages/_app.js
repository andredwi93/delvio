import localFont from "next/font/local";
import NextNProgress from "nextjs-progressbar";
import "@/styles/globals.css";
import GlobalProvider from "@/context";

const poppins = localFont({
  src: [
    {
      path: "../public/fonts/Poppins-Thin.ttf",
      weight: "100",
    },
    {
      path: "../public/fonts/Poppins-ExtraLight.ttf",
      weight: "200",
    },
    {
      path: "../public/fonts/Poppins-Light.ttf",
      weight: "300",
    },
    {
      path: "../public/fonts/Poppins-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/Poppins-Medium.ttf",
      weight: "500",
    },
    {
      path: "../public/fonts/Poppins-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../public/fonts/Poppins-Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/Poppins-ExtraBold.ttf",
      weight: "800",
    },
    {
      path: "../public/fonts/Poppins-Black.ttf",
      weight: "900",
    },
  ],
  variable: "--font-poppins",
  preload: true,
});

const avenir = localFont({
  src: [
    {
      path: "../public/fonts/AvenirNextMedium.otf",
      weight: "500",
    },
    {
      path: "../public/fonts/AvenirNextSemibold.otf",
      weight: "600",
    },
    {
      path: "../public/fonts/AvenirNextBold.otf",
      weight: "700",
    },
  ],
  variable: "--font-avenir",
  preload: true,
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${poppins.variable} ${avenir.variable}`}>
      <GlobalProvider>
        <NextNProgress color="#58B276" />
        <Component {...pageProps} />
      </GlobalProvider>
    </main>
  );
}
