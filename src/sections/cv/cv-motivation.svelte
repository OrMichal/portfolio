<script lang="ts">
  import { onMount } from "svelte";
  import VerticalCard from "../../components/cards/vertical-card.svelte";
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
    {$t("sections.cv.motivation.heading")}
  </Heading>
  <div>
    <ContentSection>
      {$t("sections.cv.motivation.desc")}
    </ContentSection>
    <ContentSection>
      {$t("sections.cv.motivation.paragraph")}
    </ContentSection>
  </div>
  <div class="reasons">
    {#each $t("sections.cv.motivation.reasons") as any as reason}
      <a href={reason.anchor}>
        <VerticalCard label={reason.heading} />
      </a>
    {/each}
  </div>
</section>

<style>
  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .reasons {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 40px;
  }
</style>
