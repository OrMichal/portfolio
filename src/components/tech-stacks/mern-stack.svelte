<script lang="ts">
  import SmallHeading from "../../elements/SmallHeading.svelte";
  import ImgCard from "../cards/img-card.svelte";
</script>

<div class="wrapper">
  <SmallHeading>MERN</SmallHeading>
  <div class="cards">
    <ImgCard
      imgPath="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
      description="Mongodb"
    />
    <ImgCard
      imgPath="https://www.pngfind.com/pngs/m/136-1363736_express-js-icon-png-transparent-png.png"
      description="ExpressJs"
    />
    <ImgCard
      imgPath="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
      description="React"
    />
    <ImgCard
      imgPath="https://www.itnetwork.cz/images/10733/nodejs/nodejs_logo.png"
      description="NodeJs"
    />
  </div>
</div>

<style>
  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .cards {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
  }
</style>
