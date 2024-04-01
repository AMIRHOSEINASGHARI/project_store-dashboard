import Link from "next/link";
import { Fragment } from "react";

const PageHeader = ({ title, links, subLink }) => {
  return (
    <div className="mb-10">
      <h1 className="sm:text-[35px] text-[20px] font-[700]">{title}</h1>
      <div className="flex items-center gap-2 text-[14px]">
        {links.map((link, index) => (
          <Fragment key={index}>
            <Link
              href={link.route}
              className="font-[400] text-gray-600 border-b border-transparent hover:border-gray-400"
            >
              {link.name}
            </Link>
            {links.length > index && (
              <div className="w-[4px] h-[4px] bg-gray-600 rounded-full" />
            )}
          </Fragment>
        ))}
        <p className="font-[400] text-gray-400">{subLink}</p>
      </div>
    </div>
  );
};

export default PageHeader;
