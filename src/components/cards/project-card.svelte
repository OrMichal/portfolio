<script lang="ts">
  export let heading: string;
  export let description: string = "";
  export let imagePath: string;
</script>

<div class="card">
  <div class="description-wrapper">
    <span class="heading">{heading}</span>
    <span class="desc">{description}</span>
  </div>
  <img src={imagePath} alt={`Michal Orsah project ${heading} img`} />
</div>

<style>
  .card {
    background-color: #f9f9fa;
    transition: 200ms;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
    justify-content: space-between;

    box-sizing: border-box;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 1px 2px 4px #00000040;
  }

  .card:hover {
    box-shadow: 2px 4px 8px #00000050;
  }

  .description-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 5px;
  }

  .heading {
    align-self: center;
    color: black;
    font-size: clamp(1.5em, 2dvw, 1.7em);
    text-wrap: nowrap;
  }

  .desc {
    font-weight: 300;
    padding: 5px;
    box-sizing: border-box;
  }

  img {
    width: 100%;
    align-self: center;
    border-radius: 20px;
    object-fit: cover;
  }

  @media screen and (max-width: 800px) {
    .card {
      flex-direction: column;
    }
  }
</style>
