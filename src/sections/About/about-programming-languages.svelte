<script lang="ts">
  import { onMount } from "svelte";
  import ContentSection from "../../elements/content-section.svelte";
  import Heading from "../../elements/Heading.svelte";
  import { t } from "svelte-i18n";
  import { SlideObserver } from "../../lib/observers/slide-observer";

  let trigger: HTMLElement;
  onMount(() => {
    SlideObserver.observe(trigger);
  });
</script>

<section class="wrapper" id="programming_languages" bind:this={trigger}>
  <Heading>
    {$t("sections.about.programming_languages.heading")}
  </Heading>
  <ContentSection>
    {$t("sections.about.programming_languages.description")}
  </ContentSection>
  <div class="cards">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1067px-Logo_C_sharp.svg.png"
      alt=""
    />
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/926px-C_Programming_Language.svg.png"
      alt=""
    />
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
      alt=""
    />
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
      alt=""
    />
    <img src="https://rustacean.net/assets/rustacean-flat-happy.png" alt="" />
  </div>
</section>

<style>
  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .cards {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-items: center;
  }

  .cards img {
    height: 70px;
  }
</style>
