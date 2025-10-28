<script lang="ts">
  import Fa from "svelte-fa";

  export let icon = null;
  export let label: string;
</script>

<div class="card">
  {#if icon != null}
    <Fa {icon} />
  {/if}
  <span>{label}</span>
</div>

<style>
  .card {
    display: flex;
    flex-direction: row;
    gap: 30px;

    box-sizing: border-box;
    padding: 15px;
    box-shadow: 2px 2px 4px #00000040;
    border-radius: 10px;
    color: var(--primary-color);
    font-size: clamp(1em, 2vw, 1.3em);
    font-weight: 700;
    transition: 200ms;
  }

  .card:hover {
    transform: translateY(-5px);
  }
</style>
