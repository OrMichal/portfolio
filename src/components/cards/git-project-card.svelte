<script lang="ts">
  import {
    faArrowRight,
    faCopy,
    faShield,
  } from "@fortawesome/free-solid-svg-icons";
  import Link from "../../elements/Link.svelte";
  import SmallHeading from "../../elements/SmallHeading.svelte";
  import type { GitRepo } from "../../lib/GitRepo";
  import { t } from "svelte-i18n";
  import Button from "../../elements/button.svelte";
  import { faGithub } from "@fortawesome/free-brands-svg-icons";
  import { showSnackbar } from "../../lib/utils/snackbar";
  import { onMount } from "svelte";
  import { SlideObserver } from "../../lib/observers/slide-observer";

  export let repo: GitRepo;

  let trigger: HTMLElement;
  onMount(() => {
    SlideObserver.observe(trigger);
  });

  async function setClipBoard(text: string): Promise<void> {
    const type = "text/plain";
    const clipboardItemData = {
      [type]: text,
    };

    const clipboardItem: ClipboardItem = new ClipboardItem(clipboardItemData);
    await navigator.clipboard.write([clipboardItem]);
    showSnackbar($t("snackbar.copied"), "info");
  }
</script>

<div class="card" bind:this={trigger}>
  <div class="content-wrapper">
    <div class="header-wrapper">
      <SmallHeading>{repo.name}</SmallHeading>
      <span class="last-update">
        {$t("sections.projects.git_project_card.last_updated")}:
        {new Date(repo.pushed_at).toLocaleDateString()}
      </span>
    </div>
    <div class="main-wrapper">
      <blockquote class="description">
        {repo.description}
      </blockquote>
      <div class="info-wrapper">
        <span class="created-at"
          >{$t("sections.projects.git_project_card.created_at")}: {new Date(
            repo.created_at,
          ).toLocaleDateString()}</span
        >
        <span class="main-language"
          >{$t("sections.projects.git_project_card.main_programming_language")}: {repo.language}</span
        >
      </div>
      <div class="details-wrapper"></div>
    </div>
  </div>
  <div class="footer-wrapper">
    <div class="links-wrapper">
      <Button
        icon={faCopy}
        onClick={() => {
          setClipBoard(repo.ssh_url);
        }}
      >
        {$t("sections.projects.git_project_card.copy_ssh_path")}
      </Button>
      <Button
        icon={faGithub}
        onClick={() => {
          setClipBoard(repo.git_url);
        }}
      >
        {$t("sections.projects.git_project_card.copy_git_path")}
      </Button>
      <Button
        icon={faShield}
        onClick={() => {
          setClipBoard(repo.svn_url);
        }}
      >
        {$t("sections.projects.git_project_card.copy_svn_path")}
      </Button>
    </div>
    <Link href={`${repo.html_url}`} blankTarget icon={faArrowRight}
      >{$t("sections.projects.git_project_card.show_more")}</Link
    >
  </div>
</div>

<style>
  .card {
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    background-color: #f9f9fa;

    box-sizing: border-box;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 2px 4px 4px #00000040;
  }

  .header-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .footer-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .links-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
  }

  .main-wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .info-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 10px;
    font-weight: 300;
  }

  .description {
    width: 100%;
  }

  @media screen and (max-width: 810px) {
    .links-wrapper {
      display: none;
    }

    .footer-wrapper {
      flex-direction: column;

      :global(& > *) {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 620px) {
    .header-wrapper {
      flex-direction: column;
    }

    .main-wrapper {
      flex-direction: column;
      align-items: start;
    }

    .info-wrapper {
      align-items: start;
    }
  }
</style>
