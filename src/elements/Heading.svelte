<script lang="ts">
  export let textCenter: boolean = false;
</script>

<span class="heading" class:center-text={textCenter}>
  <slot>heading</slot>
</span>

<style>
  .heading {
    width: 100%;
    font-weight: 500;
    font-size: clamp(1.4rem, 3vw, 1.7rem);
    color: var(--primary-color);
  }

  .center-text {
    text-align: center;
  }
</style>
