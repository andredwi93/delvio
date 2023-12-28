import Link from "next/link";

export default function ItemSolution({href, title}) {
  return (
    <Link
      href={href}
      className="font-sans font-medium text-2xsm leading-[15px] lg:text-sm lg:leading-5 text-grey hover:text-light-green"
    >
      {title}
    </Link>
  );
}
