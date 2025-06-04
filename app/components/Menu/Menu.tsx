import { MenuButton } from "./MenuButton";

export default function Menu() {
  return (
    <div className="flex self-end place-items-center place-content-center h-30 w-full">
      <img className="mr-30" src="/favicon.ico" alt="Logo" />
      <MenuButton label="ΑΡΧΙΚΗ" target="/" />
      <MenuButton label="ΕΠΙΚΟΙΝΩΝΙΑ" target="/Contact" />
      <MenuButton label="ΠΛΗΡΟΦΟΡΙΕΣ" target="information" />
    </div>
  );
}
