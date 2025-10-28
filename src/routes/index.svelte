<script lang="ts">
  import { onMount } from "svelte";
  import HomeHeroDescription from "../sections/Home/home-hero-description.svelte";
  import HomeHeroSection from "../sections/Home/home-hero-section.svelte";
  import HomeInterestNavigation from "../sections/Home/home-interest-navigation.svelte";
  import HomeMyProjects from "../sections/Home/home-my-projects.svelte";
  import HomeTechAndProgLang from "../sections/Home/home-tech-and-prog-lang.svelte";

  let trigger: HTMLDivElement;
</script>

<div bind:this={trigger} class="wrapper">
  <HomeHeroSection />
  <HomeHeroDescription />
  <HomeMyProjects />
  <HomeInterestNavigation />
  <HomeTechAndProgLang />
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
</style>
