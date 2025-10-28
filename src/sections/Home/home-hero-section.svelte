<script lang="ts">
  import { faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";
  import Button from "../../elements/button.svelte";
  import Link from "../../elements/Link.svelte";
  import { t } from "svelte-i18n";
  import { showSnackbar } from "../../lib/utils/snackbar";
  import { DownloadLocalCV } from "../../lib/functions/download-cv";

  function DownloadCV() {
    DownloadLocalCV();
    showSnackbar($t("snackbar.cv_downloaded"));
  }
</script>

<section class="section-wrapper">
  <div class="desc-wrapper">
    <div class="desc">
      <span class="desc-main">
        {$t("sections.home.hero_section.t_heading")}
      </span>
      <span class="desc-small">{$t("sections.home.hero_section.t_desc")}</span>
    </div>
    <div class="desc-buttons">
      <Button stretchWidth icon={faDownload} type="button" onClick={DownloadCV}>
        {$t("sections.home.hero_section.buttons.t_download_cv")}
      </Button>
      <Link stretchWidth href="/about" icon={faArrowRight}>
        {$t("sections.home.hero_section.buttons.t_learn_more")}
      </Link>
    </div>
  </div>
  <img class="image" alt="Michal Orsah image" src="/images/orsah.jpg" />
</section>

<style>
  .section-wrapper {
    width: 100%;
    animation: forwards linear 300ms slide-in;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 100px;
    padding: 100px 0;
    box-sizing: border-box;
  }

  .desc-wrapper {
    width: 100%;
    align-self: stretch;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0;
    gap: 40px;
    justify-content: space-between;
  }

  .desc {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    & .desc-main {
      font-size: clamp(1.3rem, 2vw, 1.8rem);
      text-wrap: nowrap;
      font-weight: 500;
    }

    & .desc-small {
      font-weight: 300;
      font-size: clamp(1rem, 1vw, 1.3rem);
    }
  }

  .desc-buttons {
    box-sizing: border-box;
    width: 75%;
    display: flex;
    flex-direction: row;
    gap: 50px;
  }

  .image {
    width: clamp(400px, 50%, 600px);
    height: auto;
    border-radius: 25px;
  }

  @keyframes slide-in {
    from {
      opacity: 0;
      transform: translateX(100px);
    }
    to {
      transform: translateX(0px);
      opacity: 1;
    }
  }

  @media screen and (max-width: 700px) {
    .section-wrapper {
      flex-direction: column-reverse;
      align-items: center;
      gap: 20px;
      padding-top: 20px;
    }
  }

  @media screen and (max-width: 820px) {
    .image {
      display: none;
    }

    .section-wrapper {
      padding: 30px 0;
    }
  }

  @media screen and (max-width: 1030px) {
    .desc-buttons {
      flex-direction: column;
      gap: 10px;
    }
  }
</style>
