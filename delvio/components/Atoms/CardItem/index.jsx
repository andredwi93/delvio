export default function CardItem({ icon, title, desc, path }) {
  return (
    <div className="w-full bg-light-white p-4 lg:p-6 rounded-xl flex items-center gap-3 lg:gap-6">
      <figure className="w-[42px] h-[42px] lg:w-[60px] lg:h-[60px] object-cover">
        <img
          src={`/images/${path}/${icon}.svg`}
          alt={icon}
          className="w-full"
        />
      </figure>
      <div className="flex-1">
        <h3 className="font-sans font-semibold text-xsm leading-[18px] lg:text-med lg:leading-6 text-dark-green">
          {title}
        </h3>
        <p className="font-sans font-normal text-2xsm leading-[15px] lg:text-xsm lg:leading-[18px] text-grey mt-[2px] lg:mt-2">
          {desc}
        </p>
      </div>
    </div>
  );
}
