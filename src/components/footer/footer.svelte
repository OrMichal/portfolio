<script lang="ts">
  import { t } from "svelte-i18n";
</script>

<footer>
  <section>
    <div>
      {$t("footer.t_about_site_heading")}
    </div>
    <blockquote>
      {$t("footer.t_about_site_content")}
    </blockquote>
  </section>
</footer>

<style>
  footer {
    width: 100%;
    background: var(--horizontal-gradient);

    box-sizing: border-box;
    padding: 15px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
  }

  section {
    color: white;
    font-weight: 700;
    font-size: clamp(1em, 2vw, 1.2em);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  blockquote {
    margin-left: 15px;
    font-size: clamp(0.8em, 1vw, 1em);
    font-weight: 300;
  }
</style>
