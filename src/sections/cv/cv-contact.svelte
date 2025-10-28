<script lang="ts">
  import ContentSection from "../../elements/content-section.svelte";
  import Heading from "../../elements/Heading.svelte";
  import { t } from "svelte-i18n";
  import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
  import { faEnvelope, faMailBulk } from "@fortawesome/free-solid-svg-icons";
  import Link from "../../elements/Link.svelte";
  import { onMount } from "svelte";
  import { SlideObserver } from "../../lib/observers/slide-observer";

  let trigger: HTMLElement;
  onMount(() => {
    SlideObserver.observe(trigger);
  });
</script>

<section class="wrapper" bind:this={trigger}>
  <Heading>
    {$t("sections.cv.contact.heading")}
  </Heading>
  <ContentSection>
    {$t("sections.cv.contact.desc")}
  </ContentSection>
  <div class="container">
    <Link
      href="https://www.linkedin.com/in/michal-orsah-848b6535a/"
      blankTarget
      icon={faLinkedin}>LinkedIn</Link
    >
    <Link href="mailto:misaorsah5@gmail.com" blankTarget icon={faEnvelope}
      >Email</Link
    >
    <Link href="https://github.com/OrMichal" blankTarget icon={faGithub}
      >GitHub</Link
    >
  </div>
</section>

<style>
  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .container {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  @media screen and (max-width: 470px) {
    .container {
      flex-direction: column;
    }
  }
</style>
