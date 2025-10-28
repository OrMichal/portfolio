<script lang="ts">
  import { fly } from "svelte/transition";
  import { snackbar } from "../../lib/stores/snackbar";

  let type: string;
  let visible: boolean = false;
  let message: string;

  $: $snackbar, ({ message, type, visible } = $snackbar);
</script>

{#if visible}
  <div class="snackbar {type} " transition:fly={{ y: 20, duration: 200 }}>
    {message}
  </div>
{/if}

<style>
  .snackbar {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    color: white;
    background: #333;
    font-weight: 500;
    z-index: 1000;
  }

  .snackbar.info {
    background: var(--horizontal-gradient);
    color: white;
  }

  .snackbar.success {
    background: #43a047;
  }
  .snackbar.error {
    background: #e53935;
  }
  .snackbar.warning {
    background: #fbc02d;
    color: #000;
  }
</style>
