<script lang="ts">
  import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";

  export let heading: string;
  export let description: string;
  export let linkLabel: string;
  export let href: string;
</script>

<a {href}>
  <div class="card">
    <div class="description-wrapper">
      <span class="heading">{heading}</span>
      <span class="description">{description}</span>
    </div>
    <div class="link-wrapper">
      <span class="link-label">{linkLabel}</span>
      <Fa icon={faArrowRight} />
    </div>
  </div>
</a>

<style>
  .card {
    transition: 200ms ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 50px;
    background-color: #f9f9fa;

    box-sizing: border-box;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 1px 2px 2px #00000040;
  }

  .description-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .heading {
    text-align: center;
    font-weight: 500;
    font-size: clamp(1.2rem, 3vw, 1.5rem);
  }

  .description {
    font-weight: 300;
    font-size: clamp(0.9rem, 1.5vw, 1.1rem);
  }

  .link-wrapper {
    align-self: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    color: var(--primary-color);
  }

  .link-label {
    font-weight: 400;
    font-size: clamp(1rem, 2vw, 1.3rem);
  }
</style>
