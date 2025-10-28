<script lang="ts">
  import { onMount } from "svelte";
  import ImgLinkCard from "../../components/cards/img-link-card.svelte";
  import { t } from "svelte-i18n";
  import { SlideObserver } from "../../lib/observers/slide-observer";

  let trigger: HTMLElement;
  onMount(() => {
    SlideObserver.observe(trigger);
  });
</script>

<section class="wrapper" bind:this={trigger}>
  <ImgLinkCard
    href="#web_apps"
    heading="Web"
    imgPath="https://images.vexels.com/media/users/3/205387/isolated/preview/9e5a4a16e78a187fc3e47fc6e2c5f03a-internet-website-icon-stroke.png"
    linkLabel={$t("sections.projects.anchors.link_label")}
  />
  <ImgLinkCard
    href="#gui_apps"
    heading="GUI"
    imgPath="https://www.svgrepo.com/show/340386/gui.svg"
    linkLabel={$t("sections.projects.anchors.link_label")}
  />
  <ImgLinkCard
    href="#tui_apps"
    heading="TUI"
    imgPath="https://freepngimg.com/download/icon/symbol/63241-console-command-line-icons-terminal-computer-linux-interface.png"
    linkLabel={$t("sections.projects.anchors.link_label")}
  />
  <ImgLinkCard
    href="#libs"
    heading="libs"
    imgPath="https://static.thenounproject.com/png/5731134-200.png"
    linkLabel={$t("sections.projects.anchors.link_label")}
  />
</section>

<style>
  .wrapper {
    display: flex;
    flex-direction: row;
    gap: 40px;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
