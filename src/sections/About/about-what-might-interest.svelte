<script lang="ts">
  import { onMount } from "svelte";
  import LinkCard from "../../components/cards/link-card.svelte";
  import { t } from "svelte-i18n";
  import { SlideObserver } from "../../lib/observers/slide-observer";

  let trigger: HTMLElement;
  onMount(() => {
    SlideObserver.observe(trigger);
  });
</script>

<section class="wrapper" bind:this={trigger}>
  <span class="heading">
    {$t("sections.about.what_might_interest.heading")}
  </span>
  <div class="cards">
    <LinkCard
      href="/about#programming_languages"
      heading={$t("sections.about.what_might_interest.first_card.heading")}
      description={$t("sections.about.what_might_interest.first_card.desc")}
      linkLabel={$t("sections.about.what_might_interest.first_card.link_label")}
    />
    <LinkCard
      href="/about#tech_stacks"
      heading={$t("sections.about.what_might_interest.second_card.heading")}
      description={$t("sections.about.what_might_interest.second_card.desc")}
      linkLabel={$t(
        "sections.about.what_might_interest.second_card.link_label",
      )}
    />
  </div>
</section>

<style>
  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .heading {
    font-weight: 400;
    color: var(--primary-color);
    font-size: clamp(1.3rem, 3vw, 1.5rem);
  }

  .cards {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 50px;

    :global(& > * > *) {
      width: 100%;
      height: 100%;
    }
  }

  @media screen and (max-width: 760px) {
    .cards {
      flex-direction: column;
      gap: 10px;
    }
  }
</style>
