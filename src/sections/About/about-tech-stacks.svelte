<script lang="ts">
  import { onMount } from "svelte";
  import MernStack from "../../components/tech-stacks/mern-stack.svelte";
  import ContentSection from "../../elements/content-section.svelte";
  import Heading from "../../elements/Heading.svelte";
  import { t } from "svelte-i18n";
  import { SlideObserver } from "../../lib/observers/slide-observer";

  let trigger: HTMLElement;
  onMount(() => {
    SlideObserver.observe(trigger);
  });
</script>

<section class="wrapper" id="tech_stacks" bind:this={trigger}>
  <Heading>
    {$t("sections.about.tech_stacks.heading")}
  </Heading>
  <ContentSection>
    {$t("sections.about.tech_stacks.description")}
  </ContentSection>
  <div class="stacks">
    <MernStack />
  </div>
</section>

<style>
  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
</style>
