import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className="bold-32 !font-extrabold">
      S. <span className=" text-primary">Folio</span>
    </Link>
  );
};

export default Logo;
