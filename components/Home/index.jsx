import dynamic from "next/dynamic";

const Banner = dynamic(() => import("./Banner"));
const Product = dynamic(() => import("./Product"));
const GetKnow = dynamic(() => import("./GetKnow"));
const Why = dynamic(() => import("./Why"));
const Faq = dynamic(() => import("./Faq"));
const Demo = dynamic(() => import("./Demo"));

export default function HomePage() {
  return (
    <>
      <Banner />
      <Product />
      <GetKnow />
      <Why />
      <Faq />
      <Demo />
    </>
  );
}
