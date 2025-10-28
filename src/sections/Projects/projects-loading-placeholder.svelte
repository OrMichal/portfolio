<script lang="ts">
</script>

<div class="wrapper">
  <div class="section-wrapper">
    <span class="heading"></span>
    <blockquote class="project"></blockquote>
    <blockquote class="project"></blockquote>
    <blockquote class="project"></blockquote>
  </div>
  <div class="section-wrapper">
    <span class="heading"></span>
    <blockquote class="project"></blockquote>
    <blockquote class="project"></blockquote>
    <blockquote class="project"></blockquote>
  </div>
  <div class="section-wrapper">
    <span class="heading"></span>
    <blockquote class="project"></blockquote>
    <blockquote class="project"></blockquote>
    <blockquote class="project"></blockquote>
  </div>
  <div class="section-wrapper">
    <span class="heading"></span>
    <blockquote class="project"></blockquote>
    <blockquote class="project"></blockquote>
    <blockquote class="project"></blockquote>
  </div>
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  .section-wrapper {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .section-wrapper .heading {
    width: 200px;
    height: 30px;
    background-color: #00000040;
    border-radius: 5px;
    animation: pulse infinite linear 2s;
  }

  .section-wrapper .project {
    width: 100%;
    height: 200px;
    background-color: #00000040;
    border-radius: 20px;
    animation: pulse infinite linear 2s;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }
</style>
