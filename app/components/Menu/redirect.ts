import { redirect } from "next/navigation";

export function redirection({target} : {target:string}) {
    redirect(target);
}