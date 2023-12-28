import Link from "next/link";

export default function ListItem({ title, href, outLink }) {
  return (
    <li className="font-sans font-medium text-xsm leading-[18px] lg:text-sm lg:leading-[22px] text-grey">
      {outLink ? (
        <a href={href} target="_blank">
          {title}
        </a>
      ) : (
        <Link href={href}>{title}</Link>
      )}
    </li>
  );
}
