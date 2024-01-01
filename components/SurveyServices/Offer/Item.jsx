export default function Item({title, desc}) {
  return (
    <li className="w-full flex gap-3">
      <figure className="w-6 h-6 object-cover">
        <img
          src="/images/icons/ic-green-check.svg"
          alt="icon"
          className="w-full"
        />
      </figure>
      <div className="flex-1">
        <h4 className="font-sans font-semibold text-xsm leading-[18px] lg:text-reg lg:leading-[21px] text-grey">
          {title}
        </h4>
        <p className="font-sans font-normal text-2xsm leading-[15px] lg:text-reg lg:leading-[21px] text-grey">
          {desc}
        </p>
      </div>
    </li>
  );
}
