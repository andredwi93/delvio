import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";

export default function ProductItem({ href, icon, title, desc, isActive }) {
  return (
    <li className="flex-1">
      <NavigationMenu.Link asChild>
        <Link
          href={href}
          className={`font-sans text-reg font-medium text-light-black flex flex-col gap-4 bg-white hover:bg-soft-green p-6 rounded-xl`}
        >
          <figure className="w-[42px] h-[42px] object-cover">
            <img
              src={`/images/icons/ic-product-${icon}.svg`}
              alt={`ic-${icon}`}
              className="w-full"
            />
          </figure>
          <div>
            <h3 className="font-sans font-semibold text-reg leading-5 text-dark-green">
              {title}
            </h3>
            <p className="font-sans font-normal text-sm leading-5 text-grey">
              {desc}
            </p>
          </div>
        </Link>
      </NavigationMenu.Link>
    </li>
  );
}
