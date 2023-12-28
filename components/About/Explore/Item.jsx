export default function Item({href, icon, title, desc, desc2}) {
  return (
    <a
      href={href}
      target="_blank"
      className="flex-1 bg-soft-green rounded-[12px] p-4 lg:p-6"
    >
      <figure className="w-8 h-8 lg:w-[42px] lg:h-[42px] object-cover">
        <img src={`/images/about/${icon}.svg`} alt={icon} className="w-full" />
      </figure>
      <div className="mt-3 lg:mt-4">
        <p className="font-sans font-semibold text-reg leading-6 text-light-black">
          {title}
        </p>
        <p className="font-sans font-semibold text-xsm lg:text-sm leading-6 text-light-green">
          {desc}
        </p>
        <p className="font-sans font-normal text-2xsm leading-[15px] lg:text-xsm lg:leading-[18px] text-grey">
          {desc2}
        </p>
      </div>
    </a>
  );
}
