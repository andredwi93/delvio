import dynamic from "next/dynamic";

const Banner = dynamic(() => import("./Banner"));
const WhatYouGet = dynamic(() => import("./WhatYouGet"));
const Offer = dynamic(() => import("./Offer"));
const GetStarted = dynamic(() => import("./GetStarted"));
const Faq = dynamic(() => import("./Faq"));

export default function ResearchPage() {
  return (
    <>
      <Banner />
      <WhatYouGet />
      <Offer />
      <GetStarted />
      <Faq />
    </>
  );
}
