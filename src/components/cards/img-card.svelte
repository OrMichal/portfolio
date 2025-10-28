<script lang="ts">
  export let imgPath: string;
  export let description: string;
</script>

<div class="card">
  <img src={imgPath} alt={`card ${description} image`} />
  <span class="description">{description}</span>
</div>

<style>
  .card {
    width: 150px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 1px 2px 2px #00000040;
  }

  img {
    width: 100%;
  }

  .description {
    text-align: center;
    font-weight: 400;
  }
</style>
