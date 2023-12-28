import Link from "next/link";

export default function ProductItem({ href, icon, title, desc, isActive }) {
  return (
    <li className="flex-1">
      <Link
        href={href}
        className={`flex gap-2 hover:bg-soft-green p-3 rounded-xl ${
          isActive ? "bg-soft-green" : "bg-white"
        }`}
      >
        <figure className="w-6 h-6 object-cover">
          <img
            src={`/images/icons/ic-product-${icon}.svg`}
            alt={`ic-${icon}`}
            className="w-full h-full"
          />
        </figure>
        <div>
          <h3 className="font-sans font-semibold text-xsm leading-5 text-dark-green">
            {title}
          </h3>
          <p className="font-sans font-normal text-2xsm leading-[15px] text-grey">
            {desc}
          </p>
        </div>
      </Link>
    </li>
  );
}
