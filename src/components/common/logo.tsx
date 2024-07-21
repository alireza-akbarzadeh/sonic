import Link from "next/link";
import React from "react";

type LogoProps = {
  label?: string;
  href?: string;
};

export function Logo(props: LogoProps) {
  const { label = "Sonic", href = "/" } = props;

  return (
    <Link href={href} className="font-bold text-green-700 text-xl">
      {label}
    </Link>
  );
}
