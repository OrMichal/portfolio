<script lang="ts">
  import GitProjectCard from "../../components/cards/git-project-card.svelte";
  import ErrorBox from "../../components/status-boxes/error-box.svelte";
  import WarningBox from "../../components/status-boxes/warning-box.svelte";
  import Heading from "../../elements/Heading.svelte";
  import type { GitRepo } from "../../lib/GitRepo";
  import { t } from "svelte-i18n";
  import ProjectsLoadingPlaceholder from "./projects-loading-placeholder.svelte";
  import ProjectsPlaceholderShowcase from "./projects-placeholder-showcase.svelte";

  async function getRepos(): Promise<Array<GitRepo> | null> {
    const res = await fetch("https://api.github.com/users/OrMichal/repos", {
      headers: {
        Accept: "application/vnd.github.mercy-preview+json",
      },
    });
    if (res.status === 403) return null;
    const data: GitRepo[] = await res.json();
    return data;
  }

  function filterReposByTag(repos: GitRepo[], tag: string): GitRepo[] {
    return repos.filter((r) => r.topics?.includes(...[tag]));
  }
</script>

<section class="wrapper">
  {#await getRepos()}
    <ProjectsLoadingPlaceholder />
  {:then repos}
    {#if repos === null}
      <WarningBox
        heading={$t("sections.projects.warning_box.heading")}
        description={$t("sections.projects.warning_box.desc")}
      />
      <ProjectsPlaceholderShowcase />
    {:else}
      <div class="repos-wrapper">
        <div id="web_apps" class="section-wrapper">
          <Heading>Web</Heading>
          {#each filterReposByTag(repos!, "web") as repo}
            <GitProjectCard {repo} />
          {/each}
        </div>
        <div id="gui_apps" class="section-wrapper">
          <Heading>GUI</Heading>
          {#each filterReposByTag(repos!, "gui") as repo}
            <GitProjectCard {repo} />
          {/each}
        </div>
        <div id="tui_apps" class="section-wrapper">
          <Heading>TUI</Heading>
          {#each filterReposByTag(repos!, "tui") as repo}
            <GitProjectCard {repo} />
          {/each}
        </div>
        <div id="libs" class="section-wrapper">
          <Heading>libs</Heading>
          {#each filterReposByTag(repos!, "library") as repo}
            <GitProjectCard {repo} />
          {/each}
        </div>
      </div>
    {/if}
  {:catch error}
    <ErrorBox
      heading={$t("sections.projects.error_box.heading")}
      description={error}
    />
  {/await}
</section>

<style>
  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .repos-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  .section-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
</style>
