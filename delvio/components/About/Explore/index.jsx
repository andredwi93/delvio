import Trans from "next-translate/Trans";
import Item from "./Item";

export default function Explore() {
  return (
    <section id="explore" className="wrapper px-6 py-8 lg:px-0 lg:py-[80px]">
      <h2 className="text-center font-mono font-semibold text-xl leading-7 lg:text-3xl lg:leading-[49px] text-light-black">
        {<Trans i18nKey="about:contact.title" components={[<i />]} />}
      </h2>
      <p className="text-center font-sans font-normal text-sm leading-5 lg:text-lg lg:leading-[27px] text-grey mt-2 lg:mt-4">
        {<Trans i18nKey="about:contact.desc" components={[<i />]} />}
      </p>
      <div className="mt-6 lg:mt-[42px] flex flex-col lg:flex-row gap-3 lg:gap-4">
        <Item
          href="mailto:delvio.official@gmail.com"
          icon="ic-mail"
          title={<Trans i18nKey="about:contact.email.link" />}
          desc={<Trans i18nKey="about:contact.email.title" />}
          desc2={<Trans i18nKey="about:contact.email.desc" components={[<i />]} />}
        />
        <Item
          href="tel:081930563377"
          icon="ic-phone"
          title={<Trans i18nKey="about:contact.phone.link" />}
          desc={<Trans i18nKey="about:contact.phone.title" />}
          desc2={<Trans i18nKey="about:contact.phone.desc" components={[<i />]} />}
        />
        <Item
          href="https://www.linkedin.com/company/delvio/"
          icon="ic-linkedin"
          title={<Trans i18nKey="about:contact.linkedIn.link" />}
          desc={<Trans i18nKey="about:contact.linkedIn.title" />}
          desc2={<Trans i18nKey="about:contact.linkedIn.desc" components={[<i />]} />}
        />
        <Item
          href="https://www.instagram.com/delvio.co/"
          icon="ic-ig"
          title={<Trans i18nKey="about:contact.instagram.link" />}
          desc={<Trans i18nKey="about:contact.instagram.title" />}
          desc2={<Trans i18nKey="about:contact.instagram.desc" components={[<i />]} />}
        />
      </div>
    </section>
  );
}
