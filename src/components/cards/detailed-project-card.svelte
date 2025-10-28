<script lang="ts">
  import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
  import ContentSection from "../../elements/content-section.svelte";
  import Link from "../../elements/Link.svelte";
  import SmallHeading from "../../elements/SmallHeading.svelte";

  export let heading: string;
  export let description: string;
  export let linkLabel: string;
  export let imgPath: string;
</script>

<div class="card">
  <img src={imgPath} alt={`detailed project ${heading} image`} />
  <div class="text-wrapper">
    <SmallHeading>{heading}</SmallHeading>
    <ContentSection>{description}</ContentSection>
    <Link href={"/"} icon={faArrowRight}>{linkLabel}</Link>
  </div>
</div>

<style>
  .card {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 30px;
    box-sizing: border-box;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 2px 2px 3px #00000040;
  }

  .text-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;

    :global(& > *:nth-child(3)) {
      margin-top: auto;
      align-self: end;
    }
  }

  img {
    width: 50%;
    object-fit: cover;
  }

  @media screen and (max-width: 750px) {
    .card {
      flex-direction: column;
    }

    img {
      width: 100%;
    }
  }
</style>
