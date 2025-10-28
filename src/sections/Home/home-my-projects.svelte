<script lang="ts">
  import { t } from "svelte-i18n";
  import Link from "../../elements/Link.svelte";
  import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
  import ProjectCard from "../../components/cards/project-card.svelte";
  import Heading from "../../elements/Heading.svelte";
  import { SlideObserver } from "../../lib/observers/slide-observer";
  import { onMount } from "svelte";

  let trigger: HTMLElement;
  onMount(() => {
    SlideObserver.observe(trigger);
  });
</script>

<section class="wrapper" bind:this={trigger}>
  <Heading>
    {$t("sections.home.projects.t_heading")}
  </Heading>
  <div class="cards">
    <a href="https://github.com/OrMichal/Odmaturuj" target="_blank">
      <ProjectCard
        heading={$t("sections.home.projects.first_project.heading")}
        description={$t("sections.home.projects.first_project.desc")}
        imagePath={"/public/images/Odmaturuj.png"}
      />
    </a>
    <a href="https://github.com/OrMichal/Lingofish" target="_blank">
      <ProjectCard
        heading={$t("sections.home.projects.second_project.heading")}
        description={$t("sections.home.projects.second_project.desc")}
        imagePath={"/public/images/Lingofish.png"}
      />
    </a>
    <a href="https://github.com/OrMichal/AzylWeb" target="_blank">
      <ProjectCard
        heading={$t("sections.home.projects.third_project.heading")}
        description={$t("sections.home.projects.third_project.desc")}
        imagePath={"/public/images/daizy.png"}
      />
    </a>
  </div>
  <Link href={"/projects"} icon={faArrowRight}>
    {$t("sections.home.projects.show_more_b_label")}
  </Link>
</section>

<style>
  section.wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  .cards {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-evenly;
    gap: 15px;

    :global(& > *) {
      width: 100%;
    }
  }

  .heading {
    align-self: start;
    font-size: clamp(1.5em, 3vw, 2em);
    font-weight: 500;
    color: var(--primary-color);
  }

  @media screen and (max-width: 800px) {
    .cards {
      flex-direction: column;
      gap: 15px;
      justify-content: space-between;
    }
  }
</style>
