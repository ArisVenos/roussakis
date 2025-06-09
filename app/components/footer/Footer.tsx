import { FooterContact } from "./FooterContact";

export function Footer() {
  return (
    <center className="border-t pt-3 border-red-500 flex p-10">
      <img src="/isos for site.png" className="w-200 pt-3" />
      <FooterContact />
    </center>
  );
}
