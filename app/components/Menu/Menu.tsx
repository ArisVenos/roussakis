"use client";

import { MenuButton } from "./MenuButton";
import { redirection } from "./redirect";

export default function Menu() {
  return (
    <div className="flex self-end place-items-center place-content-center h-30 w-full">
      <img
        className="mr-30 w-50 cursor-pointer"
        src="/logo for site.png"
        alt="Logo"
        onClick={() => redirection({ target: "/" })}
      />
      <MenuButton label="ΑΡΧΙΚΗ" target="/" />
      <MenuButton label="ΑΕΡΙΑ" target="/Gases" />
      <MenuButton label="ΔΕΛΤΙΑ ΑΣΦΑΛΕΙΑΣ" target="/MSDS" />
      <MenuButton label="ΠΛΗΡΟΦΟΡΙΕΣ" target="/Information" />
      <MenuButton label="ΕΠΙΚΟΙΝΩΝΙΑ" target="/Contact" />
    </div>
  );
}
