import Trans from "next-translate/Trans";
import SecondaryButton from "@/components/Atoms/SecondaryButton";

export default function GetStarted() {
  return (
    <section id="get" className="bg-light-white px-6 py-8 lg:px-0 lg:py-[80px]">
      <div className="wrapper bg-white rounded-[32px] p-6 lg:p-[42px] flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-[60px]">
        <div className="flex-1">
          <h2 className="font-mono font-semibold text-xl leading-7 lg:text-4xl text-dark-green lg:leading-[57px]">
            <Trans
              i18nKey="research:section3.title"
              components={[<span className="text-light-green" />]}
            />
          </h2>
          <p className="font-sans font-normal text-xsm leading-[18px] lg:text-lg text-light-black lg:leading-[27px] mt-2 lg:mt-4">
            <Trans i18nKey="research:section3.desc" components={[<i />]} />
          </p>
          <SecondaryButton
            link
            href="https://api.whatsapp.com/send/?phone=6281930563377&text=Halo!+Saya+tertarik+untuk+mengetahui+lebih+lanjut+tentang+layanan+Delvio.+Bisakah+Anda+membantu+saya?&type=phone_number&app_absent=0"
            title={<Trans i18nKey="common:navbar.contact" />}
            className="mt-6 lg:mt-8 inline-block"
          />
        </div>
        <figure className="w-[275px] h-[160px] lg:w-[350px] lg:h-[203px] object-cover mx-auto">
          <img
            src="/images/research/section-3.webp"
            alt="section-3"
            className="w-full"
          />
        </figure>
      </div>
    </section>
  );
}
