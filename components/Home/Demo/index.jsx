import PrimaryButton from "@/components/Atoms/PrimaryButton";
import Input from "./Input";
import { useState } from "react";
import Image from "next/image";
import { JWT } from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet";
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";
import BgDemo from "../../../public/images/home/demo.webp";
import Modal from "@/components/Modal";
import SecondaryButton from "@/components/Atoms/SecondaryButton";
import dayjs from "dayjs";
import { useRouter } from "next/router";

export default function Demo() {
  const { t } = useTranslation();
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [occupation, setOccupation] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const date = dayjs().format("YYYY-MM-DD HH:mm:ss");

    setLoading(true);
    const serviceAccountAuth = new JWT({
      email: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
      key: process.env.NEXT_PUBLIC_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const doc = new GoogleSpreadsheet(
      "1CgOJ6P8ZFvRFhqCLbTs79jGb7VxrFyDJxVx_BsZ40Xk",
      serviceAccountAuth
    );

    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];

    const res = await sheet.addRow({
      name: name,
      emailAdress: emailAddress,
      phoneNumber: phoneNumber,
      companyName: companyName,
      occupation: occupation,
      message: message,
      dateTime: date,
    });
    console.log(res);
    await res.save();
    setLoading(false);
    setShow(true);
  };

  return (
    <section
      id="demo"
      className="wrapper px-6 pt-8 pb-8 lg:pt-[60px] lg:pb-[80px]"
    >
      <div className="py-4 px-4 lg:py-[42px] lg:px-[60px] rounded-[32px] bg-soft-green">
        <h2 className="font-mono font-semibold text-2xl leading-8 lg:text-3xl lg:leading-[50px] text-center text-dark-green">
          <Trans
            i18nKey="home:demo.title"
            components={[<span className="text-light-green" />, <p />]}
          />
        </h2>
        <div className="w-full lg:w-[788px] mx-auto mt-1 lg:mt-4 text-center">
          <p className="font-sans font-normal text-sm leading-5 lg:text-lg lg:leading-7 text-light-black">
            <Trans
              i18nKey="home:demo.desc"
              components={[<i />, <span className="font-bold" />]}
            />
          </p>
        </div>
        <div className="mt-6 lg:mt-[60px] flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-[60px]">
          <figure className="w-[262px] h-[166px] lg:w-[434px] lg:h-[275px] object-cover">
            <Image
              src={BgDemo}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              alt="demo"
              placeholder="blur"
              priority="low"
            />
          </figure>
          <div className="flex-1 w-full">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2 lg:gap-3 mb-4 lg:mb-6">
                <Input
                  placeholder={t("home:demo.form.name")}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  type="number"
                  placeholder={t("home:demo.form.notel")}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <Input
                  type="email"
                  placeholder={t("home:demo.form.email")}
                  onChange={(e) => setEmailAddress(e.target.value)}
                />
                <Input
                  placeholder={t("home:demo.form.job")}
                  onChange={(e) => setOccupation(e.target.value)}
                />
                <Input
                  placeholder={t("home:demo.form.companyName")}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
                <Input
                  placeholder={t("home:demo.form.message")}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <PrimaryButton
                type="submit"
                title={loading ? "Loading..." : t("home:demo.form.btnRequest")}
              />
            </form>
          </div>
        </div>
      </div>
      <Modal show={show}>
        <SecondaryButton
          title={t("common:btnClose")}
          className="w-full"
          padding="py-[11px] px-6"
          onClick={() => router.reload()}
        />
      </Modal>
    </section>
  );
}
