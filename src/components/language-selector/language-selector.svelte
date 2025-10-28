<script lang="ts">
  import { get } from "svelte/store";
  import { locale } from "svelte-i18n";
  import { AvailableLanguages } from "../../lib/i18n";
  import { showSnackbar } from "../../lib/utils/snackbar";
  import { t } from "svelte-i18n";

  function HandleChange(event: any) {
    $locale = event.target.value;
    showSnackbar($t("snackbar.language_changed"));
  }
</script>

<select on:change={HandleChange} bind:value={$locale}>
  {#each AvailableLanguages as language}
    <option value={language.code}>{language.label}</option>
  {/each}
</select>

<style>
  select {
    background-color: white;
    border: none;
    box-sizing: border-box;
    padding: 8px 16px;
    border-radius: 12px;
    font-size: 0.8em;
    box-shadow: 1px 2px 2px #00000040;
  }

  select:open {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: solid 1px var(--primary-color);
  }

  select::picker {
    background-color: red;
  }

  option {
    transition: 200ms;
    color: var(--primary-color);
  }

  option:hover {
    background-color: var(--horizontal-gradient);
    color: white;
  }
</style>
