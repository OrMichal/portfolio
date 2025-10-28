<script lang="ts">
  import Fa from "svelte-fa";
  import { selectedRoute } from "../lib/stores/activeRoute";

  export let href: string;
  export let icon;
  export let stretchWidth: boolean = false;
  export let blankTarget: boolean = false;
</script>

<a
  {href}
  on:click={() =>
    selectedRoute.update((s) => ({ ...s, selected: href.split("#")[0] }))}
  class:width-stretch={stretchWidth}
  target={blankTarget ? "_blank" : ""}
>
  <slot>link</slot>
  <Fa {icon} />
</a>

<style>
  a {
    text-decoration: none;
    color: var(--secondary-color);

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 15px;

    box-sizing: border-box;
    padding: 10px 20px;
    border-radius: 8px;
    border: solid 2px var(--primary-color);
    font-size: 1em;
    font-weight: 500;
    box-shadow: 2px 4px 4px #00000040;
  }

  a:hover {
    box-shadow: 2px 4px 8px #00000040;
  }

  .width-stretch {
    width: 100%;
  }
</style>
