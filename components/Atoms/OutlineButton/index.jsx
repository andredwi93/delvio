export default function OutlineButton({
  title,
  onClick,
  padding = "py-[11px] px-5 lg:py-[13px] lg:px-[32px]",
  className
}) {
  return (
    <button
      onClick={onClick}
      className={`${padding} ${className} text-dark-green text-xsm lg:text-reg leading-[18px] lg:leading-[21px] poppins font-semibold rounded-[100px] border border-light-white hover:bg-light-white hover:border hover:border-dark-green transition-all ease-in-out`}
    >
      {title}
    </button>
  );
}
