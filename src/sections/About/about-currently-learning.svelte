<script lang="ts">
  import { onMount } from "svelte";
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
    {$t("sections.about.programming_languages.currently_learning")}
  </Heading>
  <div class="cards">
    <img
      src="https://i.pinimg.com/originals/bc/75/22/bc75225ef044d29d1f2d1c051d9b8063.gif"
      alt=""
    />
    <img
      src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Elixir_programming_language_logo.svg/1200px-Elixir_programming_language_logo.svg.png"
      alt=""
    />
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png"
      alt=""
    />
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS103j34WHFMExOEMGeC3Ynyyy7QjksC33DKQ&s"
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
