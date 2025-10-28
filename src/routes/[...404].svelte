<script lang="ts">
  import Button from "../elements/button.svelte";
  import ContentSection from "../elements/content-section.svelte";
  import Heading from "../elements/Heading.svelte";
  import { t } from "svelte-i18n";
  import Link from "../elements/Link.svelte";
  import { faHome } from "@fortawesome/free-solid-svg-icons";
</script>

<div class="wrapper">
  <Heading>
    {$t("404.heading")}
  </Heading>
  <ContentSection>
    {$t("404.desc")}
  </ContentSection>
  <Link href="/" icon={faHome}>
    {$t("404.button_label")}
  </Link>
</div>

<style>
  .wrapper {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 75px;
    padding: 0 30px;
    box-sizing: border-box;
    min-height: 100dvh;
  }
</style>
