<script lang="ts">
  import { onMount } from "svelte";
  import ImgCard from "../../components/cards/img-card.svelte";
  import ContentSection from "../../elements/content-section.svelte";
  import Heading from "../../elements/Heading.svelte";
  import { t } from "svelte-i18n";
  import { SlideObserver } from "../../lib/observers/slide-observer";

  let trigger: HTMLElement;
  onMount(() => {
    SlideObserver.observe(trigger);
  });
</script>

<section class="wrapper" bind:this={trigger}>
  <Heading>
    {$t("sections.about.technologies.heading")}
  </Heading>
  <ContentSection>
    {$t("sections.about.technologies.description")}
  </ContentSection>
  <div class="cards">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/997px-Svelte_Logo.svg.png"
      alt=""
    />
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
      alt=""
    />
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
      alt=""
    />
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
      alt=""
    />
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png"
      alt=""
    />
    <img
      src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
      alt=""
    />
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
