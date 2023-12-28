import Head from "next/head";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/Navbar"));
const Footer = dynamic(() => import("@/components/Footer"));

const PageLayout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{`Delvio - ${title}`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Delvio Projects." />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default PageLayout;
