<script lang="ts">
  import { selectedRoute } from "../../lib/stores/activeRoute";

  export let href: string;
  $: isACtive = $selectedRoute.selected === href;
</script>

<a
  {href}
  class:selected-route={isACtive}
  on:click={() => selectedRoute.update((s) => ({ ...s, selected: href }))}
>
  <slot>link</slot>
</a>

<style>
  a {
    position: relative;
    border-radius: 8px;
    padding: 3px 10px;
    text-decoration: none;
    color: black;
    font-size: clamp(1rem, 2vw, 1.2rem);
    font-weight: 500;
    transition: width 200ms;
    text-align: center;
  }

  a::after {
    content: "";
    transition: width 200ms;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 0px;
    background: var(--horizontal-gradient);
  }

  a:not(.selected-route):hover {
    &::after {
      width: 100%;
    }
  }

  .selected-route {
    animation: linear slide-in forwards 200ms;
    background: var(--horizontal-gradient);
    background-repeat: no-repeat;
  }

  @keyframes slide-in {
    0% {
      background-position: 0 50px;
    }
    50% {
      color: white;
    }
    100% {
      color: white;
      background-position: 0 0px;
    }
  }
</style>
