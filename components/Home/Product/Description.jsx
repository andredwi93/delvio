import OutlineButton from "@/components/Atoms/OutlineButton";
import PrimaryButton from "@/components/Atoms/PrimaryButton";

export default function Description({
  title,
  desc,
  onGetStart,
  onLearn,
  titlePrimary,
  titleOutline,
}) {
  return (
    <div className="flex-1">
      <h3 className="text-med lg:text-4xl text-dark-green leading-[21px] lg:leading-[57px] font-mono font-semibold">
        {title}
      </h3>
      <p className="text-xsm leading-[18px] lg:text-lg lg:leading-[27px] mt-2 lg:mt-4 text-light-black font-sans font-normal">
        {desc}
      </p>
      <div className="flex flex-col lg:flex-row items-center gap-3 mt-6 lg:mt-8">
        <PrimaryButton className="w-full lg:w-fit" title={titlePrimary} onClick={onGetStart} />
        <OutlineButton className="w-full lg:w-fit" title={titleOutline} onClick={onLearn} />
      </div>
    </div>
  );
}
