import Head from "next/head";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/Navbar"));
const Footer = dynamic(() => import("@/components/Footer"));

const PageLayout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{`Delvio - ${title}`}</title>
        <link
          rel="canonical"
          href="https://delvio.co"
          key="canonical"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Delvio Projects." />
        <meta name="robots" content="all" />
        <meta name="googlebot" content="all" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default PageLayout;
