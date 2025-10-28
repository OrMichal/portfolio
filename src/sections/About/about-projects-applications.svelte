<script lang="ts">
  import { onMount } from "svelte";
  import DetailedProjectCard from "../../components/cards/detailed-project-card.svelte";
  import ContentSection from "../../elements/content-section.svelte";
  import Heading from "../../elements/Heading.svelte";
  import { t } from "svelte-i18n";
  import { SlideObserver } from "../../lib/observers/slide-observer";
</script>

<section class="wrapper">
  <Heading>
    {$t("sections.about.projects_and_applications.heading")}
  </Heading>
  <ContentSection>
    {$t("sections.about.projects_and_applications.description")}
  </ContentSection>
  <div class="cards">
    <DetailedProjectCard
      heading={$t(
        "sections.about.projects_and_applications.first_project.heading",
      )}
      description={$t(
        "sections.about.projects_and_applications.first_project.desc",
      )}
      linkLabel={$t(
        "sections.about.projects_and_applications.first_project.link_label",
      )}
      imgPath={"../../../public/images/Odmaturuj.png"}
    />
    <DetailedProjectCard
      heading={$t(
        "sections.about.projects_and_applications.second_project.heading",
      )}
      description={$t(
        "sections.about.projects_and_applications.second_project.desc",
      )}
      linkLabel={$t(
        "sections.about.projects_and_applications.second_project.link_label",
      )}
      imgPath={"../../../public/images/edugatto.png"}
    />
    <DetailedProjectCard
      heading={$t(
        "sections.about.projects_and_applications.third_project.heading",
      )}
      description={$t(
        "sections.about.projects_and_applications.third_project.desc",
      )}
      linkLabel={$t(
        "sections.about.projects_and_applications.third_project.link_label",
      )}
      imgPath={"../../../public/images/daizy.png"}
    />
  </div>
</section>

<style>
  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 25px;
  }

  .cards {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
</style>
