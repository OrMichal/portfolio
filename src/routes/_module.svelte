<script lang="ts">
  import Footer from "../components/footer/footer.svelte";
  import Navbar from "../components/navbar/Navbar.svelte";
  import Snackbar from "../components/snackbar/snackbar.svelte";
</script>

<div class="wrapper">
  <Navbar />
  <div class="container">
    <slot></slot>
  </div>
  <Footer />
  <Snackbar />
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 50px;
    max-width: 1400px;
  }
</style>
