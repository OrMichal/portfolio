<script lang="ts">
  import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";

  export let imgPath: string;
  export let linkLabel: string;
  export let heading: string;
  export let href: string;
</script>

<a {href} class="card">
  <span class="heading">{heading}</span>
  <img src={imgPath} alt={`card ${linkLabel} image`} />
  <div class="link-wrapper">
    <span class="description">{linkLabel}</span>
    <Fa icon={faArrowRight} />
  </div>
</a>

<style>
  .card {
    background-color: #f9f9fa;
    transition: 200ms;
    width: 150px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 1px 2px 2px #00000040;
  }

  .card:hover {
    cursor: pointer;
    box-shadow: 2px 4px 4px #00000040;
    transform: translateY(-10px);
  }

  img {
    width: 100%;
  }

  .description {
    text-align: center;
    font-weight: 400;
  }

  .link-wrapper {
    color: var(--primary-color);
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: center;
    gap: 15px;
  }

  .heading {
    font-weight: 500;
    text-align: center;
  }
</style>
