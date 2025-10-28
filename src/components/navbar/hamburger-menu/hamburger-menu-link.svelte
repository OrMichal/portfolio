<script lang="ts">
  export let href: string;
  export let callback: any;
</script>

<a {href} class="link" on:click={callback}>
  <slot>link</slot>
</a>

<style>
  .link {
    box-sizing: border-box;
    padding: 4px;
    border-bottom: 2px solid var(--primary-color);
    font-size: clamp(1.5em, 3vw, 2em);
    font-weight: 300;
  }

  .link:hover {
    background: var(--horizontal-gradient);
    background-repeat: no-repeat;
    background-position: -500px 0;
    animation: hover-anim 0.3s forwards ease;
  }

  @keyframes hover-anim {
    from {
      background-position: -500px 0px;
    }
    to {
      background-position: 0 0;
      color: white;
    }
  }
</style>
