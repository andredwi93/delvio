import dynamic from "next/dynamic";

const Banner = dynamic(() => import("./Banner"));
const Explore = dynamic(() => import("./Explore"));

export default function AboutPage() {
  return (
    <>
      <Banner />
      <Explore />
    </>
  );
}
