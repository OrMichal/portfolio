<script lang="ts">
  import {
    faDownload,
    faFilePdf,
    faPrint,
  } from "@fortawesome/free-solid-svg-icons";
  import Button from "../../elements/button.svelte";
  import ContentSection from "../../elements/content-section.svelte";
  import { locale, t } from "svelte-i18n";
  import CvMotivation from "../../sections/cv/cv-motivation.svelte";
  import CvQuality from "../../sections/cv/cv-quality.svelte";
  import CvContact from "../../sections/cv/cv-contact.svelte";
  import { DownloadLocalCV } from "../../lib/functions/download-cv";
  import { showSnackbar } from "../../lib/utils/snackbar";
  import { get } from "svelte/store";

  function DownloadCV(): void {
    DownloadLocalCV();
    showSnackbar($t("snackbar.cv_downloaded"));
  }

  function PrintCV(): void {
    const filepath: string = `/images/Orsah_cv_${get(locale)}.pdf`; // public path should be relative to server root
    const iframe = document.createElement("iframe");

    iframe.style.display = "none"; // hide it
    iframe.src = filepath;

    document.body.appendChild(iframe);

    iframe.onload = () => {
      iframe.contentWindow?.focus();
      iframe.contentWindow?.print();
    };
  }

  function OpenCV(): void {
    const filepath: string = `/images/Orsah_cv_${get(locale)}.pdf`;
    window.open(filepath, "_blank");
  }
</script>

<div class="wrapper">
  <div class="hero-wrapper">
    <ContentSection>
      {$t("sections.cv.cv_section.first_paragraph")}
    </ContentSection>
    <div class="cv-buttons">
      <Button icon={faDownload} onClick={DownloadCV}>
        {$t("sections.cv.cv_section.download_cv")}
      </Button>
      <Button icon={faPrint} onClick={PrintCV}>
        {$t("sections.cv.cv_section.print_cv")}
      </Button>
      <Button icon={faFilePdf} onClick={OpenCV}>
        {$t("sections.cv.cv_section.open_cv")}
      </Button>
    </div>
  </div>
  <CvMotivation />
  <div class="qualities">
    {#each $t("sections.cv.motivation.reasons") as any as reason}
      <div id={reason.anchor.substring(1)}>
        <CvQuality heading={reason.heading} reasons={reason.descs} />
      </div>
    {/each}
  </div>
  <CvContact />
</div>

<style>
  .wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 75px;
    padding: 0 30px;
    box-sizing: border-box;
  }

  .hero-wrapper {
    align-self: start;
  }

  .cv-buttons {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    gap: 25px;
  }

  .qualities {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  @media screen and (max-width: 560px) {
    .cv-buttons {
      flex-direction: column;
    }
  }
</style>
