<script lang="ts">
  export let textCenter: boolean = false;
</script>

<span class="heading" class:center-text={textCenter}>
  <slot>small heading</slot>
</span>

<style>
  .heading {
    text-align: start;
    font-weight: 400;
    color: var(--primary-color);
    font-size: clamp(1.2rem, 2vw, 1.5rem);
  }

  .center-text {
    text-align: center;
  }
</style>
