<script lang="ts">
  import { t } from "svelte-i18n";
  import ImgCard from "../../components/cards/img-card.svelte";
  import Heading from "../../elements/Heading.svelte";
  import { onMount } from "svelte";
  import { SlideObserver } from "../../lib/observers/slide-observer";
  import Link from "../../elements/Link.svelte";
  import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

  let trigger: HTMLElement;
  onMount(() => {
    SlideObserver.observe(trigger);
  });
</script>

<section class="wrapper" bind:this={trigger}>
  <Heading>
    {$t("sections.home.tech_and_prog_langs.heading")}
  </Heading>
  <div class="cards">
    <ImgCard
      imgPath={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1067px-Logo_C_sharp.svg.png"}
      description="Csharp"
    />
    <ImgCard
      imgPath={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/926px-C_Programming_Language.svg.png"}
      description="C"
    />
    <ImgCard
      imgPath={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"}
      description="React"
    />
    <ImgCard
      imgPath={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"}
      description="Angular"
    />
    <ImgCard
      imgPath={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"}
      description="Vue"
    />
  </div>
</section>

<style>
  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .heading {
    font-weight: 500;
    color: var(--primary-color);
    font-size: clamp(1.3rem, 3vw, 1.5rem);
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    justify-content: space-evenly;
    row-gap: 20px;
  }
</style>
