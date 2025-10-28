<script lang="ts">
  import GitProjectCard from "../../components/cards/git-project-card.svelte";
  import ErrorBox from "../../components/status-boxes/error-box.svelte";
  import WarningBox from "../../components/status-boxes/warning-box.svelte";
  import Heading from "../../elements/Heading.svelte";
  import type { GitRepo } from "../../lib/GitRepo";
  import { t } from "svelte-i18n";
  import ProjectsLoadingPlaceholder from "./projects-loading-placeholder.svelte";

  const repos: GitRepo[] = [
    {
      id: 972035856,
      node_id: "R_kgDOOfAXEA",
      name: "Odmaturuj",
      full_name: "OrMichal/Odmaturuj",
      private: false,
      html_url: "https://github.com/OrMichal/Odmaturuj",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/OrMichal/Odmaturuj",
      git_url: "git://github.com/OrMichal/Odmaturuj.git",
      ssh_url: "git@github.com:OrMichal/Odmaturuj.git",
      clone_url: "https://github.com/OrMichal/Odmaturuj.git",
      svn_url: "https://github.com/OrMichal/Odmaturuj",
      updated_at: "2025-10-26T17:00:13Z",
      pushed_at: "2025-10-26T17:00:09Z",
      created_at: "2025-04-24T12:44:39Z",
      language: "JavaScript",
      topics: ["web"],
    },
    {
      id: 887469874,
      node_id: "R_kgDONOW3Mg",
      name: "File_Explorer",
      full_name: "OrMichal/File_Explorer",
      private: false,
      html_url: "https://github.com/OrMichal/File_Explorer",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/OrMichal/File_Explorer",
      git_url: "git://github.com/OrMichal/File_Explorer.git",
      ssh_url: "git@github.com:OrMichal/File_Explorer.git",
      clone_url: "https://github.com/OrMichal/File_Explorer.git",
      svn_url: "https://github.com/OrMichal/File_Explorer",
      updated_at: "2025-10-26T15:10:22Z",
      pushed_at: "2025-01-30T18:26:52Z",
      created_at: "2024-11-12T19:54:21Z",
      language: "C#",
      topics: ["tui"],
    },
    {
      id: 1078281990,
      node_id: "R_kgDOQEVHBg",
      name: "c-stdlib",
      full_name: "OrMichal/c-stdlib",
      private: false,
      html_url: "https://github.com/OrMichal/c-stdlib",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/OrMichal/c-stdlib",
      git_url: "git://github.com/OrMichal/c-stdlib.git",
      ssh_url: "git@github.com:OrMichal/c-stdlib.git",
      clone_url: "https://github.com/OrMichal/c-stdlib.git",
      svn_url: "https://github.com/OrMichal/c-stdlib",
      updated_at: "2025-10-26T15:08:53Z",
      pushed_at: "2025-10-17T20:30:52Z",
      created_at: "2025-10-17T13:41:34Z",
      language: "C",
      topics: ["library"],
    },
    {
      id: 1063072200,
      node_id: "R_kgDOP10xyA",
      name: "uml-diagram",
      full_name: "OrMichal/uml-diagram",
      private: false,
      html_url: "https://github.com/OrMichal/uml-diagram",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/OrMichal/uml-diagram",
      git_url: "git://github.com/OrMichal/uml-diagram.git",
      ssh_url: "git@github.com:OrMichal/uml-diagram.git",
      clone_url: "https://github.com/OrMichal/uml-diagram.git",
      svn_url: "https://github.com/OrMichal/uml-diagram",
      updated_at: "2025-10-26T15:10:04Z",
      pushed_at: "2025-10-12T10:06:14Z",
      created_at: "2025-09-24T06:07:39Z",
      language: "C#",
      topics: ["gui"],
    },
  ];

  function filterReposByTag(repos: GitRepo[], tag: string): GitRepo[] {
    return repos.filter((r) => r.topics?.includes(...[tag]));
  }
</script>

<section class="wrapper">
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
