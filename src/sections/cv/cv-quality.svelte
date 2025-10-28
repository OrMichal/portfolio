<script lang="ts">
  import { t } from "svelte-i18n";
  import SmallHeading from "../../elements/SmallHeading.svelte";
  import ContentSection from "../../elements/content-section.svelte";
  import { onMount } from "svelte";
  import { SlideObserver } from "../../lib/observers/slide-observer";
  export let heading: string;
  export let reasons: string[];

  let trigger: HTMLElement;
  onMount(() => {
    SlideObserver.observe(trigger);
  });
</script>

<div class="reason-wrapper" bind:this={trigger}>
  <SmallHeading>
    {heading}
  </SmallHeading>
  <div>
    {#each reasons as reason}
      <ContentSection>{reason}</ContentSection>
    {/each}
  </div>
</div>

<style>
  .reason-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
</style>
