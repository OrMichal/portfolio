<script lang="ts">
  import { t } from "svelte-i18n";
  import LinkCard from "../../components/cards/link-card.svelte";
  import Heading from "../../elements/Heading.svelte";
  import { onMount } from "svelte";
  import { SlideObserver } from "../../lib/observers/slide-observer";

  let trigger: HTMLElement;
  onMount(() => {
    SlideObserver.observe(trigger);
  });
</script>

<section class="wrapper" bind:this={trigger}>
  <Heading textCenter>
    {$t("sections.home.interest_navigation.heading")}
  </Heading>
  <div class="cards">
    <LinkCard
      href="/projects"
      heading={$t("sections.home.interest_navigation.first_card.heading")}
      description={$t("sections.home.interest_navigation.first_card.desc")}
      linkLabel={$t("sections.home.interest_navigation.first_card.link_label")}
    />
    <LinkCard
      href="/cv"
      heading={$t("sections.home.interest_navigation.second_card.heading")}
      description={$t("sections.home.interest_navigation.second_card.desc")}
      linkLabel={$t("sections.home.interest_navigation.second_card.link_label")}
    />
    <LinkCard
      href="/about"
      heading={$t("sections.home.interest_navigation.third_card.heading")}
      description={$t("sections.home.interest_navigation.third_card.desc")}
      linkLabel={$t("sections.home.interest_navigation.third_card.link_label")}
    />
  </div>
</section>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: space-between;
    align-items: center;
  }

  .heading {
    color: var(--primary-color);
    font-weight: 500;
    font-size: clamp(1.3rem, 3vw, 1.7rem);
  }

  .cards {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 40px;

    :global(& > *) {
      transition: 200ms;
      height: 100%;
    }

    :global(.card:hover) {
      transform: translateY(-20px);
      box-shadow: 2px 4px 4px #00000040;
    }
  }

  @media screen and (max-width: 710px) {
    .cards {
      flex-direction: column;
    }
  }
</style>
