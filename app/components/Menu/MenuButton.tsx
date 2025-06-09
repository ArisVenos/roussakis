"use client";

import { redirection } from "./redirect";

export function MenuButton({
  label,
  target,
}: {
  label: string;
  target: string;
}) {
  return (
    <button
      className="h-full text-black-900 hover:bg-red-500 font-bold m-3 px-5 cursor-pointer"
      onClick={() => redirection({ target })}
    >
      {label}
    </button>
  );
}
