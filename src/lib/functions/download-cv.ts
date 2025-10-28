import { locale } from "svelte-i18n";
import { get } from "svelte/store";

export function DownloadLocalCV(): void {
  const filename: string = `/public/images/Orsah_cv_${get(locale)}.pdf`;
  console.log(filename);

  const link = document.createElement("a");
  link.href = filename;
  link.target = "_self";
  link.download = "Orsah CV.pdf";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
