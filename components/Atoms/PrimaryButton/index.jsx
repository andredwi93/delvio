export default function PrimaryButton({
  title,
  onClick,
  type = "button",
  padding = "py-[11px] px-5 lg:py-[13px] lg:px-[32px]",
  className,
  href,
  link,
}) {
  return link ? (
    <a
      href={href}
      target="_blank"
      className={`${padding} ${className} text-white text-xsm lg:text-reg leading-[18px] mdleading-[21px] poppins font-semibold bg-dark-green rounded-[100px] hover:bg-light-green transition-all ease-in-out`}
    >{title}</a>
  ) : (
    <button
      type={type}
      onClick={onClick}
      className={`${padding} ${className} text-white text-xsm lg:text-reg leading-[18px] mdleading-[21px] poppins font-semibold bg-dark-green rounded-[100px] hover:bg-light-green transition-all ease-in-out`}
    >
      {title}
    </button>
  );
}
