import { locale } from "svelte-i18n";
import { get } from "svelte/store";

export function DownloadLocalCV(): void {
  const filename: string = `/images/Orsah_cv_${get(locale)}.pdf`;

  const link = document.createElement("a");
  link.href = filename;
  link.download = "Orsah CV.pdf";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
