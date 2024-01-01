export default function SecondaryButton({
  title,
  onClick,
  padding = "py-[11px] px-5 lg:py-[13px] lg:px-8",
  className,
  href,
  link,
}) {
  return link ? (
    <a
      href={href}
      target="_blank"
      className={`${padding} ${className} text-dark-green text-xsm lg:text-reg leading-[18px] lg:leading-[21px] poppins font-semibold bg-white rounded-[100px] border border-dark-green hover:bg-soft-green transition-all ease-in-out`}
    >
      {title}
    </a>
  ) : (
    <button
      onClick={onClick}
      className={`${padding} ${className} text-dark-green text-xsm lg:text-reg leading-[18px] lg:leading-[21px] poppins font-semibold bg-white rounded-[100px] border border-dark-green hover:bg-soft-green transition-all ease-in-out`}
    >
      {title}
    </button>
  );
}
