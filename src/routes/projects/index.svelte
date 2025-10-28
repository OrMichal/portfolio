<script lang="ts">
  import ContentSection from "../../elements/content-section.svelte";
  import { t } from "svelte-i18n";
  import ProjectsNavigation from "../../sections/Projects/projects-navigation.svelte";
  import ProjectsShowcase from "../../sections/Projects/projects-showcase.svelte";
</script>

<div class="wrapper">
  <div>
    <ContentSection>
      {$t("sections.projects.first_entry_paragraph")}
    </ContentSection>
    <ContentSection>
      {$t("sections.projects.second_entry_paragraph")}
    </ContentSection>
  </div>
  <ProjectsNavigation />
  <ProjectsShowcase />
</div>

<style>
  .wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 75px;
    padding: 0 30px;
    box-sizing: border-box;
  }
</style>
