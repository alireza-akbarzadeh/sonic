import React from "react";

type AuthLayoutProps = {
  children: React.ReactNode;
};

export default function Authlayout(props: AuthLayoutProps) {
  const { children } = props;

  return (
    <div className="flex items-center justify-center h-screen">{children}</div>
  );
}
