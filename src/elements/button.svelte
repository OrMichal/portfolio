<script lang="ts">
  import { onMount } from "svelte";
  import Fa from "svelte-fa";

  export let type: "button" | "reset" | "submit" | null | undefined = "button";
  export let disabled: boolean = false;
  export let icon;
  export let stretchWidth: boolean = false;
  export let onClick: any = () => {
    alert("pressed a button");
  };

  let button: HTMLElement;

  onMount(() => {
    button.addEventListener("click", () => {
      button.classList.add("clicked");

      setTimeout(() => {
        button.classList.remove("clicked");
      }, 300);
    });
  });
</script>

<button
  bind:this={button}
  {type}
  {disabled}
  on:click={onClick}
  class:width-stretch={stretchWidth}
>
  <slot>Click me!</slot>
  <Fa {icon} />
</button>

<style>
  button {
    background: var(--horizontal-gradient);
    color: white;

    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 15px;
    justify-content: space-between;
    font-size: 1em;
    box-sizing: border-box;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    font-weight: 500;
    box-shadow: 2px 4px 4px #00000040;
    transition: 500ms;
    background-repeat: no-repeat;
  }

  button:hover {
    box-shadow: 3px 4px 6px #00000040;
    opacity: 0.9;
    cursor: pointer;
    background-position: -500px 0;
    color: var(--secondary-color);
  }

  :global(.clicked) {
    animation: click-anim 0.3s forwards ease;
  }

  @keyframes click-anim {
    from {
      scale: 0.7;
    }
    to {
      scale: 1;
    }
  }

  .width-stretch {
    width: 100%;
  }
</style>
