<script lang="ts">
  import ContentSection from "../../elements/content-section.svelte";
  import { t } from "svelte-i18n";
  import AboutWhatMightInterest from "../../sections/About/about-what-might-interest.svelte";
  import AboutProjectsApplications from "../../sections/About/about-projects-applications.svelte";
  import AboutTechStacks from "../../sections/About/about-tech-stacks.svelte";
  import AboutTechnologies from "../../sections/About/about-technologies.svelte";
  import AboutProgrammingLanguages from "../../sections/About/about-programming-languages.svelte";
  import AboutCurrentlyLearning from "../../sections/About/about-currently-learning.svelte";
</script>

<div class="wrapper">
  <div>
    <ContentSection>
      {$t("sections.about.first_entry_paragraph")}
    </ContentSection>
    <ContentSection>
      {$t("sections.about.second_entry_paragraph")}
    </ContentSection>
  </div>
  <AboutWhatMightInterest />
  <AboutProjectsApplications />
  <AboutTechStacks />
  <AboutTechnologies />
  <AboutProgrammingLanguages />
  <AboutCurrentlyLearning />
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
