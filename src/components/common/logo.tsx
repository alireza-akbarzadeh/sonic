import Image from "next/image";
import Link from "next/link";
import React from "react";

type LogoProps = {
  label?: string;
  href?: string;
};

export function Logo(props: LogoProps) {
  const { label = "Sonic", href = "/" } = props;

  return (
    <Link href={href}>
      {/* <Image /> */}
      <span>{label}</span>
    </Link>
  );
}
