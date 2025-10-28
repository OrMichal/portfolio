<script lang="ts">
  import ContentSection from "../../elements/content-section.svelte";
  import { t } from "svelte-i18n";
</script>

<section>
  <ContentSection>
    {$t("sections.home.hero_section_desc.t_first_paragraph")}
  </ContentSection>
  <ContentSection>
    {$t("sections.home.hero_section_desc.t_second_paragraph")}
  </ContentSection>
</section>
