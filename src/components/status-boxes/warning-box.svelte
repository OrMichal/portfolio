<script lang="ts">
  export let heading: string;
  export let description: string;
</script>

<div class="box">
  <div class="info-wrapper">
    <span class="heading">{heading}</span>
    <span class="description">{description}</span>
  </div>
</div>

<style>
  .box {
    background-color: #ffc400;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 15px;

    display: flex;
    flex-direction: row;
    align-items: start;
    gap: 10px;
  }

  .info-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .heading {
    font-weight: 600;
    font-size: clamp(1.1rem, 2vw, 1.4rem);
  }

  .description {
    font-weight: 300;
    font-size: clamp(0.8rem, 1.5vw, 1rem);
    box-sizing: border-box;
    padding: 0 10px;
  }
</style>
